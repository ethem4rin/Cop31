import { useContent } from "../content/ContentContext";
import "./Footer.css";

export default function Footer() {
  const { brand, footer } = useContent();

  return (
    <footer className="footer">
      <div className="container">
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
