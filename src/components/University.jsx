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

        <div className="university__top">
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
              </div>
              {(university.imageName?.trim() || university.imageBadge?.trim()) && (
                <figcaption className="rektor__caption">
                  {university.imageName?.trim() && (
                    <strong className="rektor__name">{university.imageName}</strong>
                  )}
                  {university.imageBadge?.trim() && <span>{university.imageBadge}</span>}
                </figcaption>
              )}
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
