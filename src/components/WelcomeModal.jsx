import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useContent } from "../content/ContentContext";
import "./WelcomeModal.css";

export default function WelcomeModal() {
  const { welcome } = useContent();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let seen = null;
    try {
      seen = localStorage.getItem(welcome.storageKey);
    } catch {
      seen = null;
    }
    if (seen) return;
    const t = setTimeout(() => setOpen(true), 600);
    return () => clearTimeout(t);
  }, [welcome.storageKey]);

  const close = useCallback(() => {
    setOpen(false);
    try {
      localStorage.setItem(welcome.storageKey, "1");
    } catch {
      /* depolama kapalıysa sorun değil */
    }
  }, [welcome.storageKey]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="wm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-labelledby="wm-title"
        >
          <motion.div
            className="wm__card"
            initial={{ opacity: 0, y: 26, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.98 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="wm__close" onClick={close} aria-label="Kapat">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M6 6l12 12M18 6 6 18"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            {/* Yaprak rozeti + şimşek — ekran görüntüsündeki düzen */}
            <div className="wm__badge">
              <span className="wm__bolt" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M13 2 4.5 13.5H11l-1 8.5 8.5-11.5H12l1-8.5Z" fill="currentColor" />
                </svg>
              </span>
              <span className="wm__leaf" aria-hidden="true">
                <svg viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="19" stroke="var(--blue-bright)" strokeWidth="2.4" />
                  <path
                    d="M24 39c0-9.4 5.7-16 13.2-17.9C37.2 31.3 32 39 24 39Z"
                    fill="var(--green)"
                  />
                  <path
                    d="M24 39c-8 0-13.2-7.7-13.2-17.9C18.3 23 24 29.6 24 39Z"
                    fill="var(--green)"
                    opacity=".55"
                  />
                </svg>
              </span>
            </div>

            <h2 className="wm__title" id="wm-title">
              <span className="accent">{welcome.titleAccent}</span> {welcome.titleRest}
            </h2>

            <p className="wm__body">{welcome.body}</p>
            <p className="wm__thanks">{welcome.thanks}</p>

            <button className="btn btn--primary wm__cta" onClick={close}>
              {welcome.button}
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
