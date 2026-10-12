import { useState } from "react";
import { useContent } from "../content/ContentContext";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import "./CampusMap.css";

export default function CampusMap() {
  const { campusMap, navLinks } = useContent();
  const id = navLinks[4]?.id || "harita";
  const campuses = campusMap.campuses || [];

  return (
    <section className="section section--alt map" id={id}>
      <div className="container">
        <SectionHead label={campusMap.eyebrow} />

        <div className="map__head">
          <Reveal>
            <h2 className="section-title">{campusMap.title}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="section-lead">{campusMap.lead}</p>
          </Reveal>
        </div>

        <div className="map__grid">
          {campuses.map((c, i) => (
            <Reveal key={c.name} delay={0.06 * i}>
              <CampusCard campus={c} />
            </Reveal>
          ))}
        </div>

        {(campusMap.note || !!campusMap.legend?.length) && (
          <Reveal delay={0.14}>
            <div className="map__foot">
              {!!campusMap.legend?.length && (
                <ul className="map__legend">
                  {campusMap.legend.map((l) => (
                    <li key={l.label}>
                      <span className={`map__pin is-${l.tone}`} aria-hidden="true" />
                      {l.label}
                    </li>
                  ))}
                </ul>
              )}
              {campusMap.note && <p className="map__note">{campusMap.note}</p>}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}

function CampusCard({ campus }) {
  const [failed, setFailed] = useState(false);
  const [active, setActive] = useState(null);
  const hasImage = campus.image && !failed;
  const points = campus.points || [];

  return (
    <figure className="campus">
      <div className="campus__frame" onClick={() => setActive(null)}>
        <div className="campus__media">
          {hasImage ? (
            <img
              src={campus.image}
              alt={campus.name}
              className="campus__img"
              loading="lazy"
              onError={() => setFailed(true)}
            />
          ) : (
            <div className="campus__placeholder">
              <strong>Fotoğraf buraya gelecek</strong>
              <span>public{campus.image} olarak ekleyin</span>
            </div>
          )}
          <span className="campus__scrim" aria-hidden="true" />
          <figcaption className="campus__name">
            {campus.name}
            {!!points.length && (
              <span className="campus__count">{points.length} fidan</span>
            )}
          </figcaption>
        </div>

        {/* Fidan dikim noktaları — konum işaretleri */}
        {points.map((p, i) => {
          const side = p.x < 18 ? "is-left" : p.x > 82 ? "is-right" : "";
          const below = p.y < 24 ? "is-below" : "";
          return (
            <button
              key={i}
              type="button"
              className={`campus__pin ${active === i ? "is-active" : ""}`}
              style={{ left: `${p.x}%`, top: `${p.y}%`, animationDelay: `${0.4 + i * 0.05}s` }}
              onClick={(e) => {
                e.stopPropagation();
                setActive(active === i ? null : i);
              }}
              aria-label={p.theme}
            >
              <span className="campus__ping" aria-hidden="true" />
              <span className="campus__dot" aria-hidden="true" />
              {active === i && (
                <span className={`campus__tip ${side} ${below}`}>{p.theme}</span>
              )}
            </button>
          );
        })}
      </div>
    </figure>
  );
}
