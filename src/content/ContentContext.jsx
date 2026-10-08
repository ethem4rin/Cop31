import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import * as site from "./site";

/* ---------------------------------------------------------------------------
 *  İçerik yönetimi
 *  - Varsayılan içerik src/content/site.js dosyasından gelir (kodun kaynağı).
 *  - Admin panelinden yapılan değişiklikler tarayıcıya (localStorage) yazılır
 *    ve varsayılanın üzerine biner.
 *  - "site.js indir" ile değişiklikler kalıcı hale getirilebilir.
 * -------------------------------------------------------------------------*/

export const STORAGE_KEY = "cop31-content-v1";

/** site.js içindeki bölümler — admin panelinde bu sırayla listelenir. */
export const SECTION_KEYS = [
  "brand",
  "navLinks",
  "welcome",
  "hero",
  "about",
  "copHistory",
  "university",
  "projectsSection",
  "projects",
  "law",
  "campusMap",
  "teamSection",
  "team",
  "footer",
];

export const DEFAULTS = Object.freeze(
  SECTION_KEYS.reduce((acc, key) => {
    acc[key] = site[key];
    return acc;
  }, {})
);

const clone = (value) =>
  typeof structuredClone === "function"
    ? structuredClone(value)
    : JSON.parse(JSON.stringify(value));

/**
 * Kaydedilmiş içeriği varsayılanla birleştirir.
 * Diziler tamamen değiştirilir (sıra/eleman sayısı admin'den yönetiliyor),
 * nesneler alan alan birleştirilir — böylece site.js'e sonradan eklenen
 * yeni alanlar eski kayıtlarda da görünür.
 */
function merge(base, override) {
  if (override === undefined || override === null) return clone(base);
  if (Array.isArray(base) || Array.isArray(override)) return clone(override);
  if (
    base &&
    override &&
    typeof base === "object" &&
    typeof override === "object"
  ) {
    const out = {};
    for (const key of new Set([...Object.keys(base), ...Object.keys(override)])) {
      out[key] = merge(base[key], override[key]);
    }
    return out;
  }
  return clone(override);
}

function readStored() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

const ContentContext = createContext(null);

export function ContentProvider({ children }) {
  const [content, setContent] = useState(() => merge(DEFAULTS, readStored()));
  const [savedAt, setSavedAt] = useState(null);

  /* Başka bir sekmede kaydedilirse burayı da tazele. */
  useEffect(() => {
    const onStorage = (e) => {
      if (e.key !== STORAGE_KEY) return;
      setContent(merge(DEFAULTS, readStored()));
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const save = useCallback((next) => {
    setContent(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      setSavedAt(Date.now());
      return true;
    } catch {
      return false;
    }
  }, []);

  const reset = useCallback(() => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* yok sayılabilir */
    }
    setContent(clone(DEFAULTS));
    setSavedAt(Date.now());
  }, []);

  const value = useMemo(
    () => ({ ...content, content, save, reset, savedAt }),
    [content, save, reset, savedAt]
  );

  return (
    <ContentContext.Provider value={value}>{children}</ContentContext.Provider>
  );
}

/** Site bileşenlerinde: const { hero, team } = useContent(); */
export function useContent() {
  const ctx = useContext(ContentContext);
  if (!ctx) throw new Error("useContent, ContentProvider içinde kullanılmalı.");
  return ctx;
}

export { clone, merge };
