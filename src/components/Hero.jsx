import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useContent } from "../content/ContentContext";
import "./Hero.css";

export default function Hero() {
  const { hero, navLinks } = useContent();
  const [index, setIndex] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  const slides = hero.slides?.length ? hero.slides : [{ image: "", caption: "" }];
  // Menüdeki ilk bölüm (COP Nedir?) hero'nun altındaki bölümdür.
  const firstSectionId = navLinks[0]?.id || "cop31";

  useEffect(() => {
    if (slides.length < 2) return;
    const t = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      hero.slideDurationMs
    );
    return () => clearInterval(t);
  }, [slides.length, hero.slideDurationMs]);

  const goDown = () => {
    document
      .getElementById(firstSectionId)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="hero" id="anasayfa" ref={ref}>
      <motion.div className="hero__bg" style={{ y }}>
        <AnimatePresence mode="sync">
          <motion.div
            key={index}
            className="hero__slide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            <Slide slide={slides[index]} />
          </motion.div>
        </AnimatePresence>
        <div className="hero__scrim" />
      </motion.div>

      <div className="hero__inner container">
        {hero.eyebrow?.trim() && (
          <motion.p
            className="hero__eyebrow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {hero.eyebrow}
          </motion.p>
        )}

        <h1 className="hero__title">
          {(hero.titleLines || []).filter(Boolean).map((line, i) => (
            <span className="hero__line" key={i}>
              <motion.span
                initial={{ y: "105%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.2 + i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        {hero.subtitle?.trim() && (
          <motion.p
            className="hero__subtitle"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            {hero.subtitle}
          </motion.p>
        )}

        {!!hero.info?.length && (
          <motion.ul
            className="hero__info"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.58 }}
          >
            {hero.info.map((it) => (
              <li key={it.text}>
                <span className="hero__infoicon" aria-hidden="true">
                  <InfoIcon name={it.icon} />
                </span>
                {it.text}
              </li>
            ))}
          </motion.ul>
        )}

        {hero.scrollHint?.trim() && (
          <motion.button
            className="hero__down"
            onClick={goDown}
            aria-label={hero.scrollHint}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.75 }}
          >
            <span className="hero__downlabel">{hero.scrollHint}</span>
            <span className="hero__downarrow" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 5v14M5 12l7 7 7-7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </motion.button>
        )}
      </div>

      {/* Alt şerit: rakamlar + slayt göstergesi */}
      <motion.div
        className="hero__foot"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <div className="container hero__footinner">
          <dl className="hero__stats">
            {(hero.stats || []).map((s) => (
              <div key={s.label}>
                <dt>
                  {s.value}
                  {s.suffix}
                </dt>
                <dd>{s.label}</dd>
              </div>
            ))}
          </dl>

          {slides.length > 1 && (
            <div className="hero__dots">
              <span className="hero__caption">{slides[index]?.caption}</span>
              {slides.map((s, i) => (
                <button
                  key={i}
                  className={`hero__dot ${i === index ? "is-on" : ""}`}
                  onClick={() => setIndex(i)}
                  aria-label={`Görsel ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
}

function InfoIcon({ name }) {
  if (name === "pin") {
    return (
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="10" r="2.6" fill="currentColor" />
      </svg>
    );
  }
  if (name === "calendar") {
    return (
      <svg viewBox="0 0 24 24" fill="none">
        <rect
          x="3.5"
          y="5"
          width="17"
          height="15"
          rx="2.5"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M3.5 10h17M8 3.5v3M16 3.5v3"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="4" fill="currentColor" />
    </svg>
  );
}

function Slide({ slide }) {
  const [failed, setFailed] = useState(false);
  if (!slide.image || failed) return <div className="hero__fallback" aria-hidden="true" />;
  return (
    <img
      src={slide.image}
      alt={slide.caption || ""}
      onError={() => setFailed(true)}
      className="hero__img"
    />
  );
}
