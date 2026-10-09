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
                alt={university.imageCaption || university.title}
                label={university.imageCaption}
                imgClassName="university__img"
              />
              {university.imageCaption?.trim() && (
                <figcaption>{university.imageCaption}</figcaption>
              )}
            </figure>
          </Reveal>
        </div>

        {!!university.activities?.length && (
          <div className="uniworks">
            {/* Arka plan: açık temada gündüz, koyu temada gece kampüs fotoğrafı */}
            <div className="uniworks__bg" aria-hidden="true" />

            <div className="uniworks__inner">
              {university.activitiesTitle && (
                <Reveal>
                  <div className="uniworks__head">
                    <span className="uniworks__kicker">Haberler</span>
                    <h3 className="uniworks__title">
                      {university.activitiesTitle}
                    </h3>
                  </div>
                </Reveal>
              )}

              <div className="uniworks__grid">
                {university.activities.map((a, i) => (
                  <Reveal key={a.title} delay={0.05 * (i % 2)}>
                    <article className="wcard">
                      <span className="wcard__badge" aria-hidden="true" />
                      <span className="wcard__num">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h4 className="wcard__title">{a.title}</h4>
                      {a.summary && <p className="wcard__desc">{a.summary}</p>}
                      {a.href && (
                        <a
                          className="wcard__go"
                          href={a.href}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Habere git <span className="wcard__arw">↗</span>
                        </a>
                      )}
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
