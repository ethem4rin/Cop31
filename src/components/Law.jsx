import { useContent } from "../content/ContentContext";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import "./Law.css";

export default function Law() {
  const { law, navLinks } = useContent();
  const id = navLinks[3]?.id || "hukuk";

  return (
    <section className="section section--band law" id={id}>
      <div className="container">
        <SectionHead label={law.eyebrow} />

        <div className="law__top">
          <Reveal>
            <h2 className="section-title law__title">{law.title}</h2>
          </Reveal>
          <Reveal delay={0.1} className="law__byline">
            <span>{law.author}</span>
            <span>{law.readingTime}</span>
          </Reveal>
        </div>

        <div className="law__grid">
          <div className="law__article">
            {law.paragraphs.map((p, i) => (
              <Reveal key={i} delay={0.03 * i} y={16}>
                <p className={i === 0 ? "law__p law__p--first" : "law__p"}>{p}</p>
              </Reveal>
            ))}

            <Reveal>
              <blockquote className="law__quote">{law.pullQuote}</blockquote>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <aside className="law__aside">
              <h3>{law.referencesTitle}</h3>
              <ul>
                {law.references.map((r) => (
                  <li key={r.name}>
                    <strong>{r.name}</strong>
                    <span>{r.note}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
