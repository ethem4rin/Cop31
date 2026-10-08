import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useContent } from "../content/ContentContext";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import SmartImage from "./SmartImage";
import "./Projects.css";

export default function Projects() {
  const { projects, projectsSection, navLinks } = useContent();
  const id = navLinks[2]?.id || "projeler";

  return (
    <section className="section section--mute projects" id={id}>
      <div className="container">
        <SectionHead label={projectsSection.eyebrow} />

        <div className="projects__head">
          <Reveal>
            <h2 className="section-title">{projectsSection.title}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="section-lead">{projectsSection.lead}</p>
          </Reveal>
        </div>

        {/* İki proje yan yana — ikisi de tek bakışta görünür */}
        <div className="projects__grid">
          {projects.map((p, i) => (
            <ProjectCard key={`${p.title}-${i}`} project={p} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, delay }) {
  const [open, setOpen] = useState(null); // "bullets" | "themes" | null
  const toggle = (key) => setOpen((v) => (v === key ? null : key));

  return (
    <Reveal as="article" className="pcard" delay={delay}>
      <SmartImage
        className="pcard__frame"
        src={project.image}
        alt={project.title}
        label={project.title}
        imgClassName="pcard__img"
      />

      <div className="pcard__head">
        <span className="pcard__number">{project.number}</span>
        <span className="pcard__badge">{project.badge}</span>
      </div>

      <h3 className="pcard__title">{project.title}</h3>
      <p className="pcard__subtitle">{project.subtitle}</p>
      <p className="pcard__summary">{project.summary}</p>

      <dl className="pcard__facts">
        {project.facts.map((f) => (
          <div key={f.label}>
            <dt>{f.label}</dt>
            <dd>{f.value}</dd>
          </div>
        ))}
      </dl>

      <div className="pcard__panels">
        <Panel
          title={project.bulletsTitle || "Projenin kapsamı"}
          open={open === "bullets"}
          onToggle={() => toggle("bullets")}
          items={project.bullets}
        />
        <Panel
          title={project.themesTitle}
          open={open === "themes"}
          onToggle={() => toggle("themes")}
          items={project.themes}
        />
      </div>
    </Reveal>
  );
}

function Panel({ title, open, onToggle, items = [] }) {
  return (
    <div className="pcard__panel">
      <button
        className={`pcard__toggle ${open ? "is-open" : ""}`}
        onClick={onToggle}
        aria-expanded={open}
      >
        <span>{title}</span>
        <i aria-hidden="true">{open ? "−" : "+"}</i>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className="pcard__list"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            <ul>
              {items.map((t, i) => (
                <li key={t}>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  {t}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
