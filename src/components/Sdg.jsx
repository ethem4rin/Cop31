import { useContent } from "../content/ContentContext";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import "./Sdg.css";

export default function Sdg() {
  const { sdg } = useContent();
  if (!sdg?.items?.length) return null;

  return (
    <section className="section section--mute sdg" id="ska">
      <div className="container">
        <SectionHead label={sdg.eyebrow} />

        <div className="sdg__head">
          <Reveal>
            <h2 className="section-title">{sdg.title}</h2>
          </Reveal>
          {sdg.lead && (
            <Reveal delay={0.08}>
              <p className="section-lead sdg__lead">{sdg.lead}</p>
            </Reveal>
          )}
        </div>

        <div className="sdg__grid">
          {sdg.items.map((it, i) => (
            <Reveal key={it.code} delay={0.04 * (i % 2)}>
              <article className="skacard">
                {it.icon && (
                  <img
                    className="skacard__icon"
                    src={it.icon}
                    alt={`Sürdürülebilir Kalkınma Amacı ${it.code}: ${it.name}`}
                  />
                )}
                <div className="skacard__body">
                  <h3 className="skacard__name">{it.name}</h3>
                  <p className="skacard__text">{it.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
