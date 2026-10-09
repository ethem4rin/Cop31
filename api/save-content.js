/* ============================================================================
 *  /api/save-content  —  Vercel Serverless Function (Node)
 *  ---------------------------------------------------------------------------
 *  Admin panelinden gönderilen yeni site.js içeriğini GitHub reposundaki
 *  src/content/site.js dosyasına commit'ler. Commit sonrası Vercel otomatik
 *  yeniden build alır ve değişiklik HERKESE kalıcı olarak yansır.
 *
 *  GEREKLİ ORTAM DEĞİŞKENLERİ (Vercel > Project > Settings > Environment Variables):
 *    ADMIN_PASSCODE   Panel parolası (tarayıcıya inmez, gerçek güvenlik budur)
 *    GITHUB_TOKEN     Repoya yazma yetkisi olan fine-grained Personal Access Token
 *    GITHUB_OWNER     (opsiyonel) varsayılan: ethem4rin
 *    GITHUB_REPO      (opsiyonel) varsayılan: Cop31
 *    GITHUB_BRANCH    (opsiyonel) varsayılan: main
 * ==========================================================================*/

const FILE_PATH = "src/content/site.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Yalnızca POST." });
  }

  const { passcode, source } = req.body || {};

  // 1) Parola kontrolü — sunucu tarafında, env değişkeninden
  if (!process.env.ADMIN_PASSCODE) {
    return res.status(500).json({
      error: "Sunucuda ADMIN_PASSCODE tanımlı değil. Vercel ortam değişkenlerini ayarla.",
    });
  }
  if (passcode !== process.env.ADMIN_PASSCODE) {
    return res.status(401).json({ error: "Parola hatalı." });
  }

  // 2) İçerik doğrulama
  if (typeof source !== "string" || !source.includes("export const brand")) {
    return res.status(400).json({ error: "Geçersiz içerik." });
  }
  if (source.length > 2_000_000) {
    return res.status(413).json({
      error: "İçerik çok büyük. Görselleri site.js'e gömmek yerine public/images/ içine koy.",
    });
  }

  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    return res.status(500).json({
      error: "Sunucuda GITHUB_TOKEN tanımlı değil. Vercel ortam değişkenlerini ayarla.",
    });
  }

  const owner = process.env.GITHUB_OWNER || "ethem4rin";
  const repo = process.env.GITHUB_REPO || "Cop31";
  const branch = process.env.GITHUB_BRANCH || "main";
  const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${FILE_PATH}`;

  const ghHeaders = {
    Authorization: `Bearer ${token}`,
    Accept: "application/vnd.github+json",
    "User-Agent": "cop31-admin",
    "X-GitHub-Api-Version": "2022-11-28",
  };

  try {
    // 3) Mevcut dosyanın sha'sını al (güncelleme için gerekli)
    let sha;
    const getRes = await fetch(`${apiUrl}?ref=${branch}`, { headers: ghHeaders });
    if (getRes.ok) {
      const data = await getRes.json();
      sha = data.sha;
    } else if (getRes.status !== 404) {
      const detail = await getRes.text();
      return res
        .status(502)
        .json({ error: "GitHub dosyası okunamadı.", detail: detail.slice(0, 500) });
    }

    // 4) Dosyayı commit'le
    const putRes = await fetch(apiUrl, {
      method: "PUT",
      headers: { ...ghHeaders, "Content-Type": "application/json" },
      body: JSON.stringify({
        message: "admin: içerik güncellendi",
        content: Buffer.from(source, "utf8").toString("base64"),
        branch,
        ...(sha ? { sha } : {}),
      }),
    });

    if (!putRes.ok) {
      const detail = await putRes.text();
      return res
        .status(502)
        .json({ error: "GitHub kaydı başarısız.", detail: detail.slice(0, 500) });
    }

    const result = await putRes.json();
    return res.status(200).json({
      ok: true,
      commit: result.commit?.sha,
    });
  } catch (err) {
    return res.status(500).json({ error: "Beklenmeyen hata.", detail: String(err).slice(0, 500) });
  }
}
