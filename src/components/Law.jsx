import { useState } from "react";
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

        {/* --- Başlık + kaynak --- */}
        <div className="law__top">
          <Reveal>
            <h2 className="section-title law__title">{law.title}</h2>
          </Reveal>
          {law.source && (
            <Reveal delay={0.08}>
              <p className="law__source">{law.source}</p>
            </Reveal>
          )}
        </div>

        {/* --- Giriş paragrafları --- */}
        <div className="law__intro">
          {(law.intro || []).map((p, i) => (
            <Reveal key={i} delay={0.04 * i} y={16}>
              <p className="law__p">{p}</p>
            </Reveal>
          ))}
        </div>

        {/* --- 6 Temel İlke (akordeon) --- */}
        {!!law.principles?.length && (
          <div className="law__block">
            <Reveal>
              <h3 className="law__blocktitle">{law.principlesTitle}</h3>
            </Reveal>
            <Reveal delay={0.06}>
              <Accordion
                items={law.principles.map((pr) => ({
                  key: pr.no,
                  lead: pr.no,
                  title: pr.title,
                  body: pr.body,
                }))}
              />
            </Reveal>
          </div>
        )}

        {/* --- Ulusal Düzenlemeler --- */}
        {law.national && (
          <RegulationBlock data={law.national} />
        )}

        {/* --- Uluslararası Düzenlemeler --- */}
        {law.international && (
          <RegulationBlock data={law.international} international />
        )}
      </div>
    </section>
  );
}

/* --- Ulusal / Uluslararası düzenleme bloğu --- */
function RegulationBlock({ data, international }) {
  return (
    <div className="law__block">
      <Reveal>
        <h3 className="law__blocktitle">{data.title}</h3>
      </Reveal>

      <div className="regs">
        {(data.items || []).map((it, i) => (
          <Reveal key={it.name} delay={0.04 * (i % 3)}>
            <article className="reg">
              <div className="reg__head">
                <h4 className="reg__name">{it.name}</h4>
                {it.year && <span className="reg__year">{it.year}</span>}
              </div>
              {international && it.en && <p className="reg__en">{it.en}</p>}
              <p className="reg__text">
                {it.intro && <span className="reg__intro">{it.intro} </span>}
                {it.detail}
              </p>
            </article>
          </Reveal>
        ))}
      </div>

      {!!data.others?.length && (
        <Reveal delay={0.08}>
          <div className="reg__others">
            <span className="reg__otherstitle">{data.othersTitle}</span>
            <ul className="reg__chips">
              {data.others.map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      )}
    </div>
  );
}

/* --- Basit akordeon --- */
function Accordion({ items }) {
  const [open, setOpen] = useState(null);
  return (
    <ul className="acc">
      {items.map((it) => {
        const isOpen = open === it.key;
        return (
          <li key={it.key} className={`acc__item ${isOpen ? "is-open" : ""}`}>
            <button
              type="button"
              className="acc__head"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : it.key)}
            >
              {it.lead && <span className="acc__no">{it.lead}</span>}
              <span className="acc__title">{it.title}</span>
              <span className="acc__icon" aria-hidden="true" />
            </button>
            <div className="acc__panel">
              <div className="acc__inner">
                {String(it.body)
                  .split("\n\n")
                  .map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
