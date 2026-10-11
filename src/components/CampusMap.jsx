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

        {!!campusMap.legend?.length && (
          <Reveal delay={0.14}>
            <ul className="map__legend">
              {campusMap.legend.map((l) => (
                <li key={l.label}>
                  <span className={`map__pin is-${l.tone}`} aria-hidden="true" />
                  {l.label}
                </li>
              ))}
            </ul>
          </Reveal>
        )}
      </div>
    </section>
  );
}

function CampusCard({ campus }) {
  const [failed, setFailed] = useState(false);
  const hasImage = campus.image && !failed;

  return (
    <figure className="campus">
      <div className="campus__frame">
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
        <figcaption className="campus__name">{campus.name}</figcaption>
      </div>
    </figure>
  );
}
