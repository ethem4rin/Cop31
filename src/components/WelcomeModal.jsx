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

            {/* Kurumsal logolar — COP31 · Kırklareli Üniversitesi */}
            <div className="wm__logos">
              <img
                src="/images/welcome-logos.png"
                alt="COP31 · Kırklareli Üniversitesi"
                width="1046"
                height="500"
              />
            </div>

            <span className="wm__rule" aria-hidden="true" />

            <h2 className="wm__title" id="wm-title">
              <span className="accent">{welcome.titleAccent}</span> {welcome.titleRest}
            </h2>

            <p className="wm__body">{welcome.body}</p>

            <button className="btn btn--primary wm__cta" onClick={close}>
              {welcome.button}
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
