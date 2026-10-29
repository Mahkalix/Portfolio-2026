import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/language.js";

function Footer({ inert = false }) {
  const { language } = useLanguage();
  const en = language === "en";
  return (
    <footer id="site-footer" className="c-site-footer" inert={inert ? true : undefined}>
      <p className="c-site-footer__copyright">© 2026 Maxence Badin-Léger</p>
      <nav aria-label={en ? "Legal and sitemap links" : "Liens légaux et plan du site"} className="c-site-footer__links">
        <Link to="/copyright">{en ? "Copyright" : "Droits d’auteur"}</Link>
        <Link to="/legal">{en ? "Legal notice" : "Mentions légales"}</Link>
        <Link to="/privacy">{en ? "Privacy policy" : "Confidentialité"}</Link>
        <Link to="/sitemap">{en ? "Sitemap" : "Plan du site"}</Link>
      </nav>
    </footer>
  );
}
export default Footer;
