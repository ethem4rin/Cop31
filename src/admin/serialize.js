import { SECTION_KEYS } from "../content/ContentContext";

/** JS kaynak koduna gömülebilir dize üretir. */
function str(value) {
  return JSON.stringify(String(value));
}

function literal(value, depth) {
  const pad = "  ".repeat(depth);
  const padIn = "  ".repeat(depth + 1);

  if (value === null) return "null";
  if (typeof value === "string") return str(value);
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
      (k) => `${padIn}${/^[A-Za-z_$][\w$]*$/.test(k) ? k : str(k)}: ${literal(value[k], depth + 1)}`
    );
    return `{\n${items.join(",\n")},\n${pad}}`;
  }

  return "null";
}

/**
 * Admin panelindeki içerikten yeni bir src/content/site.js dosyası üretir.
 * NOT: Üretilen dosyada özgün Türkçe açıklama satırları (yorumlar) yer almaz,
 * yalnızca veriler aktarılır.
 */
export function toSiteJs(content) {
  const today = new Date().toLocaleDateString("tr-TR");

  const header = `/* ============================================================================
 *  COP31 — İÇERİK DOSYASI
 *  ---------------------------------------------------------------------------
 *  Bu dosya admin panelinden (${today}) dışa aktarılmıştır.
 *  Mevcut src/content/site.js dosyasının yerine koyarak değişiklikleri
 *  kalıcı hale getirebilirsin.
 *
 *  Metinleri buradan da elle düzenleyebilirsin.
 *  Görseller: public/images/ klasörüne at, yolu "/images/ad.jpg" biçiminde yaz.
 * ==========================================================================*/
`;

  const body = SECTION_KEYS.map(
    (key) => `export const ${key} = ${literal(content[key], 0)};`
  ).join("\n\n");

  return `${header}\n${body}\n`;
}

/** Tarayıcıda dosya indirtir. */
export function download(filename, text, type = "text/plain;charset=utf-8") {
  const blob = new Blob([text], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
