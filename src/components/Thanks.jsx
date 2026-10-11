import { useContent } from "../content/ContentContext";
import { richText } from "../lib/richText";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import "./Thanks.css";

export default function Thanks() {
  const { thanks } = useContent();
  if (!thanks?.people?.length) return null;

  return (
    <section className="section section--mute thanksec" id="tesekkur">
      <div className="container">
        <SectionHead label={thanks.eyebrow} />

        <div className="thanksec__grid">
          <div className="thanksec__intro">
            <Reveal>
              <h2 className="section-title">{thanks.title}</h2>
            </Reveal>
            {thanks.lead && (
              <Reveal delay={0.08}>
                <p className="section-lead">{thanks.lead}</p>
              </Reveal>
            )}
          </div>

          <Reveal delay={0.06} className="thanksec__listwrap">
            <ul className="thanksec__list">
              {thanks.people.map((p, i) => (
                <li key={i} className="thanksec__item">
                  {richText(p)}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
