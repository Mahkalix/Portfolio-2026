import { Link, useLocation } from "react-router-dom";
import { navigationItems } from "../data/site.js";
import { useLanguage } from "../i18n/language.js";

function SiteMenu({ open, onNavigate }) {
  const { pathname, search } = useLocation();
  const currentLocation = `${pathname}${search}`;
  const { copy } = useLanguage();

  return (
    <div id="site-menu" className={`c-site-menu${open ? " is-open" : ""}`} aria-hidden={!open}>
      <nav aria-label={copy.header.open}>
        <ul>
          {navigationItems.map((item) => (
            <li key={item.key}>
              <Link
                className={currentLocation === item.to ? "is-active" : undefined}
                to={item.to}
                tabIndex={open ? 0 : -1}
                aria-current={currentLocation === item.to ? "page" : undefined}
                onClick={onNavigate}
              >
                {copy.navigation[item.key]}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default SiteMenu;
