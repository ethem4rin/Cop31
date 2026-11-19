import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useContent } from "../content/ContentContext";
import Countdown from "./Countdown";
import "./Hero.css";

export default function Hero() {
  const { hero } = useContent();
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  const slides = hero.slides?.length ? hero.slides : [{ image: "", caption: "" }];

  useEffect(() => {
    if (slides.length < 2) return;
    const t = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      hero.slideDurationMs
    );
    return () => clearInterval(t);
  }, [slides.length, hero.slideDurationMs]);

  return (
    <section className="hero" id="anasayfa">
      <div className="hero__bg">
        <AnimatePresence mode="sync">
          <motion.div
            key={index}
            className="hero__slide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.45, ease: "easeInOut" }}
          >
            <Slide slide={slides[index]} />
          </motion.div>
        </AnimatePresence>
        <div className="hero__scrim" />
      </div>

      <div className="hero__inner container">
        {hero.eyebrow?.trim() && (
          <p className="hero__eyebrow">
            {hero.eyebrow}
          </p>
        )}

        <h1 className="hero__title">
          {(hero.titleLines || []).filter(Boolean).map((line, i) => (
            <span className="hero__line" key={i}>
              {line}
            </span>
          ))}
        </h1>

        {hero.subtitle?.trim() && (
          <p className="hero__subtitle">
            {hero.subtitle}
          </p>
        )}

        {!!hero.info?.length && (
          <ul className="hero__info">
            {hero.info.map((it) => (
              <li key={it.text}>
                <span className="hero__infoicon" aria-hidden="true">
                  <InfoIcon name={it.icon} />
                </span>
                {it.text}
              </li>
            ))}
          </ul>
        )}

        {/* Geri sayım kartı — sol alt alana yerleştirildi */}
        <div className="hero__countdown">
          <Countdown />
        </div>
      </div>

      {/* Alt şerit: rakamlar + slayt göstergesi */}
      <div className="hero__foot">
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
                  aria-pressed={i === index}
                  aria-label={`Görsel ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
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
