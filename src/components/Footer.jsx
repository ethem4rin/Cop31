import { useContent } from "../content/ContentContext";
import Reveal from "./Reveal";
import "./Footer.css";

export default function Footer() {
  const { brand, footer } = useContent();

  const go = (e, href) => {
    if (!href.startsWith("#") || href === "#") return;
    e.preventDefault();
    document
      .getElementById(href.slice(1))
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className="footer">
      <div className="container">
        <Reveal className="footer__top">
          <div className="footer__brand">
            <h2>{footer.title}</h2>
            <p>{footer.text}</p>
          </div>

          <div className="footer__cols">
            {footer.columns.map((col) => (
              <div key={col.title}>
                <h3>{col.title}</h3>
                <ul>
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        onClick={(e) => go(e, l.href)}
                        target={l.href.startsWith("http") ? "_blank" : undefined}
                        rel={l.href.startsWith("http") ? "noreferrer" : undefined}
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="footer__bar">
          <span className="footer__logo">
            {brand.short} <em>{brand.tagline}</em>
          </span>
          <span className="footer__copy">{footer.copyright}</span>
        </div>
      </div>
    </footer>
  );
}
