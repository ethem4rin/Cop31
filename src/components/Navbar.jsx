import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useContent } from "../content/ContentContext";
import { useScrollSpy } from "../hooks/useScrollSpy";
import ThemeToggle from "./ThemeToggle";
import "./Navbar.css";

export default function Navbar({ theme, onToggleTheme }) {
  const { brand, navLinks } = useContent();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const ids = navLinks.map((l) => l.id);
  const active = useScrollSpy(ids);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", open);
    return () => document.body.classList.remove("no-scroll");
  }, [open]);

  const go = (e, id) => {
    e.preventDefault();
    setOpen(false);
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const home = navLinks[0]?.id || "";

  return (
    <>
      <header className={`nav ${scrolled ? "is-scrolled" : ""}`}>
        <div className="nav__inner">
          {/* --- Logolar + marka --- */}
          <a className="nav__brand" href={`#${home}`} onClick={(e) => home && go(e, home)}>
            <span className="nav__logos">
              <Logo src={brand.logoCop31} alt="COP31 logosu" />
              <Logo src={brand.logoUniversity} alt={`${brand.name} logosu`} />
            </span>
            <span className="nav__words">
              <strong>{brand.short}</strong>
              <em>{brand.name}</em>
            </span>
          </a>

          <nav className="nav__links" aria-label="Ana menü">
            {navLinks.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={(e) => go(e, l.id)}
                className={active === l.id ? "is-active" : ""}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="nav__right">
            <span className="nav__divider" aria-hidden="true" />
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
            <button
              className="nav__burger"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
              aria-expanded={open}
            >
              <span className={open ? "is-x" : ""} />
              <span className={open ? "is-x" : ""} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="navsheet"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <ul>
              {navLinks.map((l, i) => (
                <motion.li
                  key={l.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04 + i * 0.04, duration: 0.35 }}
                >
                  <a href={`#${l.id}`} onClick={(e) => go(e, l.id)}>
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/**
 * Logolar beyaz zeminli dosyalar olduğu için açık/koyu temada aynı
 * görünsünler diye beyaz yuvarlak bir madalyonun içine yerleştirilir.
 * Dosya yoksa ya da yüklenemezse logo tamamen gizlenir.
 */
function Logo({ src, alt }) {
  const [failed, setFailed] = useState(false);
  if (!src || failed) return null;
  return (
    <span className="nav__logo">
      <img src={src} alt={alt} onError={() => setFailed(true)} />
    </span>
  );
}
