import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useContent } from "../content/ContentContext";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import SmartImage from "./SmartImage";
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

        <Reveal>
          <h2 className="section-title teamsec__title">{teamSection.title}</h2>
        </Reveal>

        <div className="teamsec__stage">
          {/* ---- Alıntı ---- */}
          <div className="teamsec__quotecol">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={active}
                className="teamsec__quote"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              >
                {person.quote}
              </motion.blockquote>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={`${active}-id`}
                className="teamsec__id"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <strong>{person.name}</strong>
                <span>{person.role}</span>
                <em>{person.meta}</em>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ---- Portre ---- */}
          <div className="teamsec__portraitcol">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.32 }}
              >
                <SmartImage
                  className="teamsec__portrait"
                  src={person.photo}
                  alt={person.name}
                  label={initials(person.name)}
                  imgClassName="teamsec__photo"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ---- Ekip listesi ---- */}
        <ul className="teamsec__roster">
          {team.map((m, i) => (
            <li key={`${m.name}-${i}`}>
              <button
                className={i === active ? "is-on" : ""}
                onClick={() => setActive(i)}
              >
                <SmartImage
                  className="teamsec__avatar"
                  src={m.photo}
                  alt={m.name}
                  label={initials(m.name)}
                  imgClassName="teamsec__avatarphoto"
                />
                <span className="teamsec__rostername">{m.name}</span>
                <span className="teamsec__rosterrole">{m.role}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
