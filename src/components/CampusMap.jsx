import { useState } from "react";
import { useContent } from "../content/ContentContext";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import "./CampusMap.css";

export default function CampusMap() {
  const { campusMap, navLinks } = useContent();
  const [failed, setFailed] = useState(false);
  const id = navLinks[4]?.id || "harita";
  const hasImage = campusMap.mapImage && !failed;

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

        <Reveal delay={0.08}>
          {/* ===== HARİTA ALANI =====
              Görseli public/images/ içine atıp admin panelinden
              (ya da site.js > campusMap.mapImage) yolunu ver. */}
          <div className="map__frame">
            {hasImage ? (
              <img
                src={campusMap.mapImage}
                alt={campusMap.title}
                className="map__img"
                onError={() => setFailed(true)}
              />
            ) : (
              <div className="map__placeholder">
                <strong>{campusMap.placeholderText}</strong>
                <span>{campusMap.placeholderHint}</span>
              </div>
            )}
          </div>
        </Reveal>

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
      </div>
    </section>
  );
}
