import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useContent } from "../content/ContentContext";
import "./WelcomeModal.css";

export default function WelcomeModal() {
  const { welcome } = useContent();
  const [open, setOpen] = useState(false);
  const closeRef = useRef(null);
  const ctaRef = useRef(null);
  const reducedMotion = useReducedMotion();

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
    const previousFocus = document.activeElement;
    closeRef.current?.focus();
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key !== "Tab") return;
      e.preventDefault();
      const next = document.activeElement === closeRef.current ? ctaRef : closeRef;
      next.current?.focus();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      previousFocus?.focus({ preventScroll: true });
    };
  }, [open, close]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="wm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.16 }}
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-labelledby="wm-title"
          aria-describedby="wm-body"
        >
          <motion.div
            className="wm__card"
            initial={{ y: reducedMotion ? 0 : 8 }}
            animate={{ y: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.2 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button ref={closeRef} type="button" className="wm__close" onClick={close} aria-label="Kapat">
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

            <h2 className="wm__title" id="wm-title">
              {welcome.titleAccent} {welcome.titleRest}
            </h2>

            <p className="wm__body" id="wm-body">{welcome.body}</p>

            <div className="wm__actions">
              <button ref={ctaRef} type="button" className="wm__cta" onClick={close}>
                {welcome.button}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
