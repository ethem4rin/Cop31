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

/* ---------------------------------------------------------------------------
 *  Sunucu tarafı birleştirme yardımcıları
 *  Amaç: admin'den gelen içeriği, repodaki GÜNCEL site.js üzerine akıllıca
 *  birleştirmek. Böylece:
 *   - Kullanıcının (belki eski bir sekmeden) gönderdiği içerik, koda sonradan
 *     eklenen alanları (ör. yeni bölümler) SİLMEZ — repodaki değer korunur.
 *   - Kullanıcının elle düzenlediği alanlar kazanır.
 *   - Base64 ("data:") gömülü görseller yok sayılır; mevcut dosya yolu korunur
 *     (site.js'in şişmesini önler).
 * -------------------------------------------------------------------------*/

/** site.js metnini (yalnızca `export const` veri tanımları) nesneye çevirir. */
function evalSiteModule(src) {
  const names = [...src.matchAll(/export\s+const\s+([A-Za-z_$][\w$]*)\s*=/g)].map(
    (m) => m[1]
  );
  if (!names.length) throw new Error("export bulunamadı");
  const body = src.replace(/export\s+const\s+/g, "const ");
  // site.js saf veridir (import/yan etki yok). Yetkili admin kaynağıyla aynı güven düzeyi.
  const fn = new Function(`${body}\n;return {${names.join(",")}};`);
  return { data: fn(), order: names };
}

/** Derin birleştirme: override kazanır; override'da olmayan alanlar base'den gelir.
 *  Diziler tümüyle override ile değişir. "data:" görsel değerleri yok sayılır. */
function deepMerge(base, override) {
  if (override === undefined) return base;
  if (typeof override === "string" && override.startsWith("data:")) return base;
  if (override === null) return null;
  if (Array.isArray(base) || Array.isArray(override)) {
    return sanitizeArray(override, base);
  }
  if (
    base &&
    override &&
    typeof base === "object" &&
    typeof override === "object"
  ) {
    const out = {};
    for (const key of new Set([...Object.keys(base), ...Object.keys(override)])) {
      out[key] = deepMerge(base[key], override[key]);
    }
    return out;
  }
  return override;
}

/** Dizide: "data:" değerleri aynı konumdaki base değeriyle (varsa) değiştirilir. */
function sanitizeArray(arr, base) {
  const baseArr = Array.isArray(base) ? base : [];
  return arr.map((v, i) => {
    if (typeof v === "string" && v.startsWith("data:")) {
      const b = baseArr[i];
      return typeof b === "string" ? b : "";
    }
    if (v && typeof v === "object") return deepMerge(baseArr[i] ?? (Array.isArray(v) ? [] : {}), v);
    return v;
  });
}

/* --- Serileştirme (src/admin/serialize.js ile aynı biçim) --- */
function litStr(v) {
  return JSON.stringify(String(v));
}
function literal(value, depth) {
  const pad = "  ".repeat(depth);
  const padIn = "  ".repeat(depth + 1);
  if (value === null) return "null";
  if (typeof value === "string") return litStr(value);
  if (typeof value === "number" || typeof value === "boolean") return String(value);
  if (Array.isArray(value)) {
    if (value.length === 0) return "[]";
    const items = value.map((v) => `${padIn}${literal(v, depth + 1)}`);
    return `[\n${items.join(",\n")},\n${pad}]`;
  }
  if (typeof value === "object") {
    const keys = Object.keys(value);
    if (keys.length === 0) return "{}";
    const items = keys.map(
      (k) =>
        `${padIn}${/^[A-Za-z_$][\w$]*$/.test(k) ? k : litStr(k)}: ${literal(value[k], depth + 1)}`
    );
    return `{\n${items.join(",\n")},\n${pad}}`;
  }
  return "null";
}
function toSiteJs(data, order) {
  const today = new Date().toLocaleDateString("tr-TR");
  const header = `/* ============================================================================
 *  COP31 — İÇERİK DOSYASI
 *  Bu dosya admin panelinden (${today}) güncellenmiştir.
 *  Görseller: public/images/ klasörüne atılıp yolu "/images/ad.webp" yazılır.
 * ==========================================================================*/
`;
  const body = order
    .map((key) => `export const ${key} = ${literal(data[key], 0)};`)
    .join("\n\n");
  return `${header}\n${body}\n`;
}

/** Gelen kaynağı repodaki güncel dosya üzerine birleştirip yeni kaynak üretir.
 *  Herhangi bir adım başarısız olursa null döner (çağıran eski davranışa düşer). */
function buildMergedSource(incomingSource, currentSource) {
  try {
    const incoming = evalSiteModule(incomingSource);
    const current = evalSiteModule(currentSource);
    const order = [
      ...current.order,
      ...incoming.order.filter((k) => !current.order.includes(k)),
    ];
    const merged = {};
    for (const key of order) {
      merged[key] = deepMerge(current.data[key], incoming.data[key]);
    }
    return toSiteJs(merged, order);
  } catch {
    return null;
  }
}

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
    // 3) Mevcut dosyanın sha'sını VE içeriğini al
    let sha;
    let currentSource = null;
    const getRes = await fetch(`${apiUrl}?ref=${branch}`, { headers: ghHeaders });
    if (getRes.ok) {
      const data = await getRes.json();
      sha = data.sha;
      if (data.content) {
        try {
          currentSource = Buffer.from(data.content, "base64").toString("utf8");
        } catch {
          currentSource = null;
        }
      }
    } else if (getRes.status !== 404) {
      const detail = await getRes.text();
      return res
        .status(502)
        .json({ error: "GitHub dosyası okunamadı.", detail: detail.slice(0, 500) });
    }

    // 3b) Gelen içeriği repodaki GÜNCEL dosya üzerine birleştir.
    //     Başarısız olursa gelen kaynak aynen kullanılır (eski davranış).
    let finalSource = source;
    if (currentSource) {
      const merged = buildMergedSource(source, currentSource);
      if (merged) finalSource = merged;
    }

    // 4) Dosyayı commit'le
    const putRes = await fetch(apiUrl, {
      method: "PUT",
      headers: { ...ghHeaders, "Content-Type": "application/json" },
      body: JSON.stringify({
        message: "admin: içerik güncellendi",
        content: Buffer.from(finalSource, "utf8").toString("base64"),
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

