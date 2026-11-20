import { useId, useState } from "react";
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

      <div className="pcard__body">
        <header>
          <p className="pcard__category">
            <span className="pcard__number">{project.number}</span>
            {project.badge}
          </p>
          <h3 className="pcard__title">{project.title}</h3>
          <p className="pcard__subtitle">{project.subtitle}</p>
        </header>
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
      </div>
    </Reveal>
  );
}

function Panel({ title, open, onToggle, items = [] }) {
  const id = useId();
  return (
    <div className="pcard__panel">
      <button
        type="button"
        className="pcard__toggle"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={id}
      >
        <span>{title}</span>
        <span className="disclosure-chevron" aria-hidden="true" />
      </button>

      <div className="pcard__list" id={id} hidden={!open}>
        <ol role="list">
          {items.map((t, i) => (
            <li key={t}>
              <span aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
              {t}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
