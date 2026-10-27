import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../i18n/language.js";
import HeroSpider from "./HeroSpider.jsx";

function Header({ menuOpen, menuButtonRef, onMenuToggle }) {
  const { pathname } = useLocation();
  const { language, setLanguage, copy } = useLanguage();

  return (
    <header id="site-header" className={`c-site-header${menuOpen ? " is-menu-open" : ""}`}>
      {pathname === "/" && <HeroSpider />}
      <Link className="c-site-header__brand" to="/" aria-label={copy.header.home}>
        <img src="/assets/figma/project-tab-spider.png" alt="" aria-hidden="true" />
      </Link>
      <div className="c-site-header__actions">
        <div className="c-language-switcher" role="group" aria-label={copy.header.language}>
          {(["fr", "en"]).map((option) => (
            <button className={language === option ? "is-active" : ""} key={option} type="button" aria-pressed={language === option} onClick={() => setLanguage(option)}>
              {option.toUpperCase()}
            </button>
          ))}
        </div>
        <button
          ref={menuButtonRef}
          id="menu-toggle"
          className={`c-menu-toggle${menuOpen ? " is-open" : ""}`}
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-menu"
          aria-label={menuOpen ? copy.header.close : copy.header.open}
          onClick={onMenuToggle}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

export default Header;
