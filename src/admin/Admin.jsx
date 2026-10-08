import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  DEFAULTS,
  SECTION_KEYS,
  clone,
  useContent,
} from "../content/ContentContext";
import { useTheme } from "../hooks/useTheme";
import { ADMIN_PASSCODE, ADMIN_SESSION_KEY } from "./config";
import { SECTION_HINTS, SECTION_LABELS } from "./labels";
import FieldEditor from "./FieldEditor";
import { download, toSiteJs } from "./serialize";
import "./Admin.css";

export default function Admin() {
  const [unlocked, setUnlocked] = useState(() => {
    try {
      return sessionStorage.getItem(ADMIN_SESSION_KEY) === "1";
    } catch {
      return false;
    }
  });

  useEffect(() => {
    document.title = "COP31 · Yönetim Paneli";
  }, []);

  if (!unlocked) return <Gate onUnlock={() => setUnlocked(true)} />;
  return <Panel onLock={() => setUnlocked(false)} />;
}

/* ============================== GİRİŞ ================================== */
function Gate({ onUnlock }) {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (code === ADMIN_PASSCODE) {
      try {
        sessionStorage.setItem(ADMIN_SESSION_KEY, "1");
      } catch {
        /* yok sayılabilir */
      }
      onUnlock();
    } else {
      setError("Parola hatalı.");
      setCode("");
    }
  };

  return (
    <div className="adgate">
      <form className="adgate__card" onSubmit={submit}>
        <span className="adgate__tag">COP31 · Yönetim</span>
        <h1>İçerik Paneli</h1>
        <p>Site metinlerini düzenlemek için parolayı gir.</p>

        <input
          type="password"
          value={code}
          autoFocus
          placeholder="Parola"
          onChange={(e) => {
            setCode(e.target.value);
            setError("");
          }}
        />
        {error && <p className="adgate__error">{error}</p>}

        <button className="btn btn--primary" type="submit">
          Giriş yap
        </button>

        <p className="adgate__note">
          Bu panel tarayıcında çalışır. Yaptığın değişiklikler bu cihazda
          saklanır; siteye kalıcı işlemek için panelden <b>site.js indir</b>
          &nbsp;seçeneğini kullan.
        </p>
      </form>
    </div>
  );
}

/* ============================== PANEL ================================== */
function Panel({ onLock }) {
  const { content, save, reset } = useContent();
  const { theme, toggle } = useTheme();
  const [draft, setDraft] = useState(() => clone(content));
  const [section, setSection] = useState(SECTION_KEYS[0]);
  const [toast, setToast] = useState("");
  const fileRef = useRef(null);

  const dirty = useMemo(
    () => JSON.stringify(draft) !== JSON.stringify(content),
    [draft, content]
  );

  const flash = useCallback((msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2600);
  }, []);

  /* Kaydedilmemiş değişiklikle sayfadan çıkarken uyar */
  useEffect(() => {
    if (!dirty) return;
    const onLeave = (e) => {
      e.preventDefault();
      e.returnValue = "";
    };
    window.addEventListener("beforeunload", onLeave);
    return () => window.removeEventListener("beforeunload", onLeave);
  }, [dirty]);

  const handleSave = () => {
    const ok = save(clone(draft));
    flash(
      ok
        ? "Kaydedildi. Siteyi açıp görebilirsin."
        : "Kaydedilemedi — tarayıcı depolaması dolmuş olabilir. Yüklediğin görselleri azalt ya da public/images/ içine atıp yol kullan."
    );
  };

  const handleReset = () => {
    if (!window.confirm("Tüm içerik site.js dosyasındaki hâline dönecek. Emin misin?"))
      return;
    reset();
    setDraft(clone(DEFAULTS));
    flash("Varsayılan içeriğe dönüldü.");
  };

  const handleRevert = () => {
    setDraft(clone(content));
    flash("Kaydedilmemiş değişiklikler geri alındı.");
  };

  const handleImport = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(String(reader.result));
        const next = {};
        for (const key of SECTION_KEYS) {
          next[key] = parsed[key] !== undefined ? parsed[key] : clone(DEFAULTS[key]);
        }
        setDraft(next);
        flash("JSON yüklendi. Kaydet'e basmayı unutma.");
      } catch {
        flash("Dosya okunamadı — geçerli bir JSON değil.");
      }
    };
    reader.readAsText(file);
    e.target.value = "";
  };

  const setSectionValue = (next) => setDraft((d) => ({ ...d, [section]: next }));

  return (
    <div className="admin">
      <header className="admin__top">
        <div className="admin__brand">
          <strong>COP31</strong>
          <span>Yönetim Paneli</span>
        </div>

        <div className="admin__actions">
          {dirty && <span className="admin__dirty">Kaydedilmedi</span>}

          <button className="adbtn" onClick={toggle}>
            {theme === "dark" ? "Açık tema" : "Koyu tema"}
          </button>
          <a className="adbtn" href="/" target="_blank" rel="noreferrer">
            Siteyi aç ↗
          </a>

          <span className="admin__sep" />

          <button className="adbtn" onClick={handleRevert} disabled={!dirty}>
            Geri al
          </button>
          <button className="adbtn" onClick={handleReset}>
            Varsayılana dön
          </button>

          <span className="admin__sep" />

          <button
            className="adbtn"
            onClick={() =>
              download("cop31-icerik.json", JSON.stringify(draft, null, 2), "application/json")
            }
          >
            JSON indir
          </button>
          <button className="adbtn" onClick={() => fileRef.current?.click()}>
            JSON yükle
          </button>
          <input
            ref={fileRef}
            type="file"
            accept="application/json,.json"
            hidden
            onChange={handleImport}
          />
          <button className="adbtn" onClick={() => download("site.js", toSiteJs(draft))}>
            site.js indir
          </button>

          <span className="admin__sep" />

          <button className="adbtn is-primary" onClick={handleSave} disabled={!dirty}>
            Kaydet
          </button>
          <button className="adbtn" onClick={onLock}>
            Çıkış
          </button>
        </div>
      </header>

      <div className="admin__body">
        <nav className="admin__side" aria-label="Bölümler">
          {SECTION_KEYS.map((key) => (
            <button
              key={key}
              className={key === section ? "is-on" : ""}
              onClick={() => setSection(key)}
            >
              {SECTION_LABELS[key] || key}
            </button>
          ))}

          <div className="admin__sidenote">
            <strong>Kalıcı yapmak için</strong>
            <p>
              Kaydet → <b>site.js indir</b> → inen dosyayı{" "}
              <code>src/content/site.js</code> ile değiştir.
            </p>
          </div>
        </nav>

        <main className="admin__main">
          <div className="admin__sechead">
            <h2>{SECTION_LABELS[section] || section}</h2>
            {SECTION_HINTS[section] && <p>{SECTION_HINTS[section]}</p>}
          </div>

          <FieldEditor
            value={draft[section]}
            fieldKey={section}
            onChange={setSectionValue}
          />
        </main>
      </div>

      {toast && <div className="admin__toast">{toast}</div>}
    </div>
  );
}
