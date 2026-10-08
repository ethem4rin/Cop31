import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "cop31-theme";

function readStoredTheme() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === "light" || saved === "dark" ? saved : null;
  } catch {
    return null;
  }
}

/**
 * Siteyi koyu temayla açar, kullanıcı seçimini hatırlar.
 *
 * Kayıtlı tercih doğrudan ilk state'e okunur; önce "dark" yazıp sonra
 * düzeltmek, kaydedilmiş "light" tercihini eziyordu.
 */
export function useTheme() {
  const [theme, setTheme] = useState(() => readStoredTheme() || "dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* gizli sekme / depolama kapalı — sorun değil */
    }
  }, [theme]);

  const toggle = useCallback(
    () => setTheme((t) => (t === "dark" ? "light" : "dark")),
    []
  );

  return { theme, toggle };
}
