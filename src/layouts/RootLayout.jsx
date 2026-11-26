import { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import PageMetadata from "../components/PageMetadata.jsx";
import SiteMenu from "../components/SiteMenu.jsx";
import SkipNavigation from "../components/SkipNavigation.jsx";

function RootLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    let focusTimer;

    function onKeyDown(event) {
      if (event.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        window.requestAnimationFrame(() => menuButtonRef.current?.focus());
        return;
      }

      if (event.key !== "Tab" || !menuOpen) return;

      const focusableElements = [...document.querySelectorAll(
        "#site-header button:not([disabled]), #site-menu a[href]",
      )].filter((element) => element.getClientRects().length > 0);
      const firstElement = focusableElements[0];
      const lastElement = focusableElements.at(-1);

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement?.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement?.focus();
      }
    }

    document.body.classList.toggle("has-open-menu", menuOpen);
    if (menuOpen) {
      focusTimer = window.setTimeout(() => {
        document.querySelector("#site-menu a[href]")?.focus();
      }, 320);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.clearTimeout(focusTimer);
      document.body.classList.remove("has-open-menu");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <div className="app-shell">
      <PageMetadata />
      <SkipNavigation menuOpen={menuOpen} onOpenMenu={() => setMenuOpen(true)} />
      <Header
        menuOpen={menuOpen}
        menuButtonRef={menuButtonRef}
        onMenuToggle={() => setMenuOpen((value) => !value)}
      />
      <SiteMenu open={menuOpen} onNavigate={() => setMenuOpen(false)} />
      <main id="main-content" tabIndex="-1" inert={menuOpen ? true : undefined}>
        <Outlet />
      </main>
      <Footer inert={menuOpen} />
    </div>
  );
}

export default RootLayout;
