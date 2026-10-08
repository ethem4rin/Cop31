import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useContent } from "../content/ContentContext";
import "./Timeline.css";

export default function Timeline({ items }) {
  const { brand, copHistory } = useContent();
  const trackRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const hasScrolled = useRef(false);

  /* ---- İlk göründüğünde en sona (2026) kaydır ---- */
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasScrolled.current) {
          hasScrolled.current = true;
          // Kısa bir gecikmeyle smooth scroll yap
          setTimeout(() => {
            el.scrollTo({ left: el.scrollWidth, behavior: "smooth" });
          }, 400);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  /* ---- Sürükle-Kaydır (mouse) ---- */
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    let down = false;
    let startX = 0;
    let scrollStart = 0;

    const onDown = (e) => {
      down = true;
      startX = e.pageX;
      scrollStart = el.scrollLeft;
      setIsDragging(true);
    };
    const onUp = () => {
      down = false;
      setIsDragging(false);
    };
    const onMove = (e) => {
      if (!down) return;
      e.preventDefault();
      el.scrollLeft = scrollStart - (e.pageX - startX);
    };

    el.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    el.addEventListener("mousemove", onMove);

    return () => {
      el.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      el.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div className="tl-root">
      {/* Kaydırma ipucu */}
      <div className="tl-hint">
        <span className="tl-hint-arrow">←</span>
        {copHistory.scrollHint || "Kaydırarak keşfet"}
        <span className="tl-hint-arrow">→</span>
      </div>

      <div
        className={`tl-track ${isDragging ? "is-dragging" : ""}`}
        ref={trackRef}
      >
        {items.map((item, i) => {
          const isFinal = !!item.highlight;

          if (isFinal) {
            return (
              <motion.div
                key={i}
                className="tl-node tl-node--final"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                {/* Döndürülmüş yıl */}
                <span className="tl-final-year">{item.year}</span>

                {/* Gerçek COP31 Logosu */}
                <div className="tl-final-badge">
                  <img
                    src={brand.logoCop31 || "/images/logo-cop31.jpg"}
                    alt="COP31 Logo"
                    className="tl-logo-img"
                  />
                </div>

                {/* Alt etiket */}
                <div className="tl-final-label">
                  <strong>{item.badgeTitle || "COP31"}</strong>
                  <span>{item.badgeSubtitle || "Türkiye"}</span>
                </div>
              </motion.div>
            );
          }

          return (
            <motion.div
              key={i}
              className="tl-node"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: Math.min(i * 0.04, 0.5), duration: 0.45 }}
            >
              {/* Üst: Şehir / COP Adı */}
              <div className="tl-top">
                <span className="tl-city">{item.city}</span>
                <span className="tl-code">{item.code}</span>
              </div>

              {/* Yeşil Nokta */}
              <div className="tl-dot">
                <span />
              </div>

              {/* Alt: Yıl */}
              <div className="tl-bottom">
                <span className="tl-year">{item.year}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
