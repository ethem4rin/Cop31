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
      </div>
    </section>
  );
}
