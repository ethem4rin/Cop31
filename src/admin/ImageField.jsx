import { useRef, useState } from "react";

/* Yüklenen görsel tarayıcıya kaydedileceği için küçültülür ve sıkıştırılır.
   Aksi halde depolama sınırı (~5 MB) çok çabuk dolar. */
const MAX_SIDE = 1600;
const TARGET_BYTES = 700 * 1024;

function loadImage(file) {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve(img);
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("Görsel açılamadı."));
    };
    img.src = url;
  });
}

async function compress(file) {
  if (!file.type.startsWith("image/")) {
    throw new Error("Bu bir görsel dosyası değil.");
  }
  const img = await loadImage(file);

  const scale = Math.min(1, MAX_SIDE / Math.max(img.naturalWidth, img.naturalHeight));
  const w = Math.max(1, Math.round(img.naturalWidth * scale));
  const h = Math.max(1, Math.round(img.naturalHeight * scale));

  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Tarayıcı görseli işleyemedi.");
  ctx.drawImage(img, 0, 0, w, h);

  // WebP destekleniyorsa onu kullan, yoksa JPEG'e düş
  let type = "image/webp";
  let quality = 0.82;
  let out = canvas.toDataURL(type, quality);
  if (!out.startsWith("data:image/webp")) {
    type = "image/jpeg";
    out = canvas.toDataURL(type, quality);
  }

  // Hâlâ büyükse kaliteyi kademeli düşür
  while (out.length * 0.75 > TARGET_BYTES && quality > 0.4) {
    quality -= 0.12;
    out = canvas.toDataURL(type, quality);
  }

  return { dataUrl: out, w, h, bytes: Math.round(out.length * 0.75) };
}

const kb = (n) => `${Math.round(n / 1024)} KB`;

/**
 * Görsel alanı: ya bilgisayardan dosya yükle, ya da public/images/
 * içindeki bir dosyanın yolunu yaz.
 */
export default function ImageField({ value, onChange }) {
  const inputRef = useRef(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [info, setInfo] = useState("");

  const isUploaded = typeof value === "string" && value.startsWith("data:");

  const pick = async (e) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    setBusy(true);
    setError("");
    setInfo("");
    try {
      const { dataUrl, w, h, bytes } = await compress(file);
      onChange(dataUrl);
      setInfo(`${w}×${h} · ${kb(bytes)} olarak küçültüldü`);
    } catch (err) {
      setError(err.message || "Görsel yüklenemedi.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="imgfield">
      <div className="imgfield__row">
        <div className="imgfield__preview">
          {value ? (
            <img src={value} alt="" onError={(e) => (e.currentTarget.style.opacity = 0.2)} />
          ) : (
            <span>yok</span>
          )}
        </div>

        <div className="imgfield__controls">
          <div className="imgfield__buttons">
            <button type="button" onClick={() => inputRef.current?.click()} disabled={busy}>
              {busy ? "Yükleniyor…" : "Bilgisayardan seç"}
            </button>
            {value && (
              <button type="button" className="is-danger" onClick={() => onChange("")}>
                Kaldır
              </button>
            )}
          </div>

          <input
            ref={inputRef}
            type="file"
            accept="image/png,image/jpeg,image/webp"
            hidden
            onChange={pick}
          />

          <input
            className="imgfield__path"
            value={isUploaded ? "" : value || ""}
            placeholder="ya da yol yaz: /images/ornek.jpg"
            onChange={(e) => onChange(e.target.value)}
            disabled={isUploaded}
          />
        </div>
      </div>

      {error && <p className="imgfield__error">{error}</p>}
      {info && !error && <p className="imgfield__ok">{info}</p>}

      {isUploaded ? (
        <p className="ae-hint">
          Bu görsel <b>tarayıcına</b> kaydedildi — siteyi ziyaret edenler onu
          göremez. Yayına almak için dosyayı <code>public/images/</code> içine
          atıp buraya yolunu yazman gerekir.
        </p>
      ) : (
        <p className="ae-hint">
          Hızlı denemek için dosya seç; yayına alırken dosyayı{" "}
          <code>public/images/</code> içine atıp yolunu yaz.
        </p>
      )}
    </div>
  );
}
