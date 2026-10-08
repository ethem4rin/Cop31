import { useContent } from "../content/ContentContext";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import Timeline from "./Timeline";
import "./About.css";

export default function About() {
  const { about, copHistory, navLinks } = useContent();
  // Menüdeki "COP Nedir?" bağlantısı hero'ya değil bu bölüme gider
  const id = navLinks[0]?.id || "cop31";

  return (
    <section className="section about" id={id}>
      <div className="container">
        <SectionHead label={about.eyebrow} />

        <div className="about__head">
          <Reveal>
            <h2 className="section-title">{about.title}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="section-lead about__lead">{about.lead}</p>
          </Reveal>
        </div>

        {/* --- COP Zirveleri --- */}
        <div className="cops">
          <div className="cops__head">
            <Reveal>
              <h3 className="cops__title">{copHistory.title}</h3>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="cops__lead">{copHistory.lead}</p>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <Timeline items={copHistory.items} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
