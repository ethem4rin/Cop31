import { useContent } from "../content/ContentContext";
import { richText } from "../lib/richText";
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
          <Reveal className="university__intro">
            <h2 className="section-title">{university.title}</h2>
            <p className="section-lead">{richText(university.lead)}</p>
          </Reveal>

          <Reveal delay={0.1} className="university__portrait">
            <figure className="rektor">
              <div className="rektor__frame">
                <SmartImage
                  className="rektor__media"
                  src={university.image}
                  alt={university.imageName || university.title}
                  label={university.imageName}
                  imgClassName="rektor__img"
                />
                {university.imageBadge?.trim() && (
                  <span className="rektor__badge">
                    <span className="rektor__badge-dash" aria-hidden="true" />
                    {university.imageBadge}
                  </span>
                )}
                {university.imageName?.trim() && (
                  <figcaption className="rektor__name">
                    {university.imageName}
                  </figcaption>
                )}
              </div>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
