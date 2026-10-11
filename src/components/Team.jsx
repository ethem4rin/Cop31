import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useContent } from "../content/ContentContext";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import "./Team.css";

const initials = (name = "") =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toLocaleUpperCase("tr-TR");

export default function Team() {
  const { team, teamSection, navLinks } = useContent();
  const [active, setActive] = useState(0);
  const id = navLinks[5]?.id || "ekip";
  const person = team[Math.min(active, team.length - 1)] || {};

  return (
    <section className="section teamsec" id={id}>
      <div className="container">
        <SectionHead label={teamSection.eyebrow} />

        <div className="teamsec__header">
          <Reveal>
            <h2 className="section-title teamsec__title">{teamSection.title}</h2>
          </Reveal>
        </div>

        {/* ---- Seçili Ekip Üyesi Kartı (Söz ve Fotoğraf kaldırıldı, doğrudan bilgi alanı) ---- */}
        <div className="teamsec__display">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              className="teamsec__card"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
            >
              <div className="teamsec__card-badge">
                <span className="teamsec__card-role">{person.role}</span>
              </div>
              <h3 className="teamsec__card-name">{person.name}</h3>
              <p className="teamsec__card-meta">{person.meta}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ---- Dairesel Butonlar (Kutu ızgarası yerine yuvarlak seçim elemanları) ---- */}
        <div className="teamsec__bubbles">
          {team.map((m, i) => {
            const isOn = i === active;
            return (
              <button
                key={`${m.name}-${i}`}
                type="button"
                className={`teamsec__bubble ${isOn ? "is-on" : ""}`}
                onClick={() => setActive(i)}
                aria-label={`${m.name} - ${m.role}`}
              >
                <div className="teamsec__circle">
                  <span className="teamsec__initials">{initials(m.name)}</span>
                </div>
                <div className="teamsec__bubble-info">
                  <span className="teamsec__bubble-name">{m.name}</span>
                  <span className="teamsec__bubble-role">{m.role}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
