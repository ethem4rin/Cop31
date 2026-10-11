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

        <div className="about__intro">
          {/* Sol: sonsuz döngülü animasyon (siteye gömülü görünür) */}
          {about.video?.trim() && (
            <Reveal className="about__media">
              <video
                className="about__video"
                src={about.video}
                autoPlay
                loop
                muted
                playsInline
                aria-hidden="true"
              />
            </Reveal>
          )}

          {/* Sağ: COP Nedir? ve COP31 Nedir? blokları */}
          <div className="about__qa">
            <div className="about__qblock">
              <Reveal>
                <h2 className="about__qtitle">{about.title}</h2>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="about__qlead">{about.lead}</p>
              </Reveal>
            </div>

            <div className="about__qblock">
              <Reveal>
                <h3 className="about__qtitle">{copHistory.title}</h3>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="about__qlead">{copHistory.lead}</p>
              </Reveal>
            </div>
          </div>
        </div>

        {/* --- COP Zirveleri --- */}
        <div className="cops">
          <Reveal delay={0.1}>
            <Timeline items={copHistory.items} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
