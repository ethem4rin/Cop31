import { useContent } from "../content/ContentContext";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import SmartImage from "./SmartImage";
import "./University.css";

export default function University() {
  const { university, navLinks } = useContent();
  const id = navLinks[1]?.id || "universite";

  return (
    <section className="section section--alt university" id={id}>
      <div className="container">
        <SectionHead label={university.eyebrow} />

        <div className="university__top university__top--last">
          <Reveal>
            <h2 className="section-title">{university.title}</h2>
            <p className="section-lead">{university.lead}</p>
          </Reveal>

          <Reveal delay={0.1}>
            <figure className="university__figure">
              <SmartImage
                className="university__media"
                src={university.image}
                alt={university.imageCaption}
                label={university.imageCaption}
                imgClassName="university__img"
              />
              <figcaption>{university.imageCaption}</figcaption>
            </figure>
          </Reveal>
        </div>

        {!!university.activities?.length && (
          <div className="university__works">
            {university.activitiesTitle && (
              <Reveal>
                <h3 className="university__workstitle">
                  {university.activitiesTitle}
                </h3>
              </Reveal>
            )}

            <div className="university__grid">
              {university.activities.map((a, i) => (
                <Reveal key={a.title} delay={0.05 * (i % 2)}>
                  <article className="univcard">
                    <span className="univcard__no">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h4 className="univcard__title">{a.title}</h4>
                    {a.summary && <p className="univcard__text">{a.summary}</p>}
                    {a.href && (
                      <a
                        className="univcard__link"
                        href={a.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Habere git
                        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path
                            d="M7 17 17 7M9 7h8v8"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    )}
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
