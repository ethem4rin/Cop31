import { useContent } from "../content/ContentContext";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import "./Team.css";

export default function Team() {
  const { team, teamSection, navLinks } = useContent();
  const id = navLinks[5]?.id || "ekip";

  return (
    <section className="section teamsec" id={id}>
      <div className="container">
        <SectionHead label={teamSection.eyebrow} />

        <div className="teamsec__head">
          <Reveal>
            <h2 className="section-title">{teamSection.title}</h2>
          </Reveal>
          {teamSection.lead && (
            <Reveal delay={0.08}>
              <p className="section-lead">{teamSection.lead}</p>
            </Reveal>
          )}
        </div>

        <div className="teamsec__grid">
          {team.map((m, i) => (
            <Reveal as="article" className="member" key={`${m.name}-${i}`} delay={0.04 * (i % 3)}>
              <header className="member__header">
                <img className="member__logo" src="/images/klu-logo.png" alt="" width="40" height="40" loading="lazy" />
                <div>
                  <h3 className="member__name">{m.name}</h3>
                  <p className="member__role">{m.role}</p>
                </div>
              </header>
              {m.meta && <p className="member__meta">{m.meta}</p>}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
