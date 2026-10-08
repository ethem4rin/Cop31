import ImageField from "./ImageField";
import { fieldLabel, LONG_FIELDS } from "./labels";

const isImageKey = (key) =>
  /^(image|photo|mapImage|logoCop31|logoUniversity)$/.test(key);
const isLong = (key, value) =>
  LONG_FIELDS.has(key) || (typeof value === "string" && value.length > 95);

/** Bir dizi elemanı için boş şablon üretir (ilk elemanın alanlarını örnek alır). */
function blankLike(sample) {
  if (typeof sample === "string") return "";
  if (typeof sample === "number") return 0;
  if (typeof sample === "boolean") return false;
  if (Array.isArray(sample)) return [];
  if (sample && typeof sample === "object") {
    const out = {};
    for (const [k, v] of Object.entries(sample)) out[k] = blankLike(v);
    return out;
  }
  return "";
}

export default function FieldEditor({ value, onChange, fieldKey, depth = 0 }) {
  /* ----------------------------- Dizi ---------------------------------- */
  if (Array.isArray(value)) {
    const sample = value[0];
    const objectItems = sample && typeof sample === "object" && !Array.isArray(sample);

    const update = (i, next) => {
      const copy = value.slice();
      copy[i] = next;
      onChange(copy);
    };
    const remove = (i) => onChange(value.filter((_, j) => j !== i));
    const move = (i, dir) => {
      const j = i + dir;
      if (j < 0 || j >= value.length) return;
      const copy = value.slice();
      [copy[i], copy[j]] = [copy[j], copy[i]];
      onChange(copy);
    };
    const add = () =>
      onChange([...value, sample === undefined ? "" : blankLike(sample)]);

    /* Basit metin listesi (ör. paragraflar, tema maddeleri) */
    if (!objectItems) {
      return (
        <div className="ae-list">
          {value.map((item, i) => (
            <div className="ae-list__row" key={i}>
              <span className="ae-list__num">{String(i + 1).padStart(2, "0")}</span>
              {isLong(fieldKey, item) ? (
                <textarea
                  value={item}
                  rows={3}
                  onChange={(e) => update(i, e.target.value)}
                />
              ) : (
                <input value={item} onChange={(e) => update(i, e.target.value)} />
              )}
              <div className="ae-list__tools">
                <button type="button" onClick={() => move(i, -1)} title="Yukarı">
                  ↑
                </button>
                <button type="button" onClick={() => move(i, 1)} title="Aşağı">
                  ↓
                </button>
                <button
                  type="button"
                  className="is-danger"
                  onClick={() => remove(i)}
                  title="Sil"
                >
                  ✕
                </button>
              </div>
            </div>
          ))}
          <button type="button" className="ae-add" onClick={add}>
            + Madde ekle
          </button>
        </div>
      );
    }

    /* Nesne listesi (ör. ekip üyeleri, zaman çizelgesi) */
    return (
      <div className="ae-items">
        {value.map((item, i) => (
          <section className="ae-item" key={i}>
            <header className="ae-item__head">
              <span className="ae-item__num">#{i + 1}</span>
              <span className="ae-item__title">
                {item.name || item.title || item.label || item.date || ""}
              </span>
              <div className="ae-list__tools">
                <button type="button" onClick={() => move(i, -1)} title="Yukarı">
                  ↑
                </button>
                <button type="button" onClick={() => move(i, 1)} title="Aşağı">
                  ↓
                </button>
                <button
                  type="button"
                  className="is-danger"
                  onClick={() => remove(i)}
                  title="Sil"
                >
                  ✕
                </button>
              </div>
            </header>
            <ObjectFields
              value={item}
              onChange={(next) => update(i, next)}
              depth={depth + 1}
            />
          </section>
        ))}
        <button type="button" className="ae-add" onClick={add}>
          + Yeni ekle
        </button>
      </div>
    );
  }

  /* ----------------------------- Nesne --------------------------------- */
  if (value && typeof value === "object") {
    return <ObjectFields value={value} onChange={onChange} depth={depth} />;
  }

  /* ---------------------------- Boolean -------------------------------- */
  if (typeof value === "boolean") {
    return (
      <label className="ae-check">
        <input
          type="checkbox"
          checked={value}
          onChange={(e) => onChange(e.target.checked)}
        />
        <span>{value ? "Açık" : "Kapalı"}</span>
      </label>
    );
  }

  /* ----------------------------- Sayı ---------------------------------- */
  if (typeof value === "number") {
    return (
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value === "" ? 0 : Number(e.target.value))}
      />
    );
  }

  /* ----------------------------- Görsel -------------------------------- */
  if (isImageKey(fieldKey)) {
    return <ImageField value={value} onChange={onChange} />;
  }

  /* ----------------------------- Metin --------------------------------- */
  if (isLong(fieldKey, value)) {
    return (
      <textarea
        value={value ?? ""}
        rows={Math.min(10, Math.max(3, Math.ceil(String(value ?? "").length / 70)))}
        onChange={(e) => onChange(e.target.value)}
      />
    );
  }

  return <input value={value ?? ""} onChange={(e) => onChange(e.target.value)} />;
}

/** Bir nesnenin tüm alanlarını etiketleriyle birlikte listeler. */
function ObjectFields({ value, onChange, depth }) {
  return (
    <div className={`ae-fields depth-${Math.min(depth, 3)}`}>
      {Object.entries(value).map(([key, val]) => {
        const nested = val && typeof val === "object";
        return (
          <div className={`ae-field ${nested ? "is-nested" : ""}`} key={key}>
            <label className="ae-label">
              {fieldLabel(key)}
              <code>{key}</code>
            </label>
            <FieldEditor
              value={val}
              fieldKey={key}
              depth={depth + 1}
              onChange={(next) => onChange({ ...value, [key]: next })}
            />
          </div>
        );
      })}
    </div>
  );
}
