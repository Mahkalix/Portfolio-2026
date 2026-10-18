import { useLanguage } from "../i18n/language.js";

function SkipNavigation({ menuOpen, onOpenMenu }) {
  const { copy } = useLanguage();

  return (
    <nav
      className="c-skip-navigation"
      aria-label={copy.accessibility.shortcuts}
      inert={menuOpen ? true : undefined}
    >
      <a href="#main-content">{copy.accessibility.skipContent}</a>
      <button type="button" onClick={onOpenMenu}>
        {copy.accessibility.openMenu}
      </button>
    </nav>
  );
}

export default SkipNavigation;
