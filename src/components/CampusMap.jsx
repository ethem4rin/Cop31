import { useId, useState } from "react";
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
  const selectId = useId();
  const hasImage = campus.image && !failed;
  const points = campus.points || [];

  return (
    <figure
      className="campus"
      onKeyDown={(event) => {
        if (event.key === "Escape") setActive(null);
      }}
    >
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
          return (
            <button
              key={i}
              type="button"
              className={`campus__pin ${active === i ? "is-active" : ""}`}
              style={{ left: `${p.x}%`, top: `${p.y}%` }}
              onClick={(e) => {
                e.stopPropagation();
                setActive((current) => (current === i ? null : i));
              }}
              aria-label={p.theme}
              aria-pressed={active === i}
            >
              <span className="campus__dot" aria-hidden="true" />
            </button>
          );
        })}
      </div>
      {!!points.length && (
        <div className="campus__selection">
          <label className="sr-only" htmlFor={selectId}>
            {campus.name}
          </label>
          <select
            id={selectId}
            value={active ?? ""}
            onChange={(event) => {
              const { value } = event.target;
              setActive(value === "" ? null : Number(value));
            }}
          >
            <option value="">Fidan se?in</option>
            {points.map((point, index) => (
              <option key={index} value={index}>{point.theme}</option>
            ))}
          </select>
          <p className="campus__detail" aria-live="polite">{points[active]?.theme}</p>
        </div>
      )}
    </figure>
  );
}
