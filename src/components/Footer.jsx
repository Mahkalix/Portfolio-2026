import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/language.js";

function Footer({ inert = false }) {
  const { language } = useLanguage();

  return (
    <footer id="site-footer" className="c-site-footer" inert={inert ? true : undefined}>
      <p className="c-site-footer__copyright">© 2026 Maxence Badin-Léger</p>
      <Link to="/copyright">{language === "fr" ? "Droits d’auteur" : "Copyright"}</Link>
    </footer>
  );
}

export default Footer;
