import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import SiteMenu from "../components/SiteMenu.jsx";

function RootLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const isMaintenancePage =
    pathname === "/" || pathname.startsWith("/maintenance");

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") setMenuOpen(false);
    }

    document.body.classList.toggle("has-open-menu", menuOpen);
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <div
      className={`app-shell${isMaintenancePage ? " app-shell--maintenance" : ""}`}
    >
      {!isMaintenancePage && (
        <>
          <Header
            menuOpen={menuOpen}
            onMenuToggle={() => setMenuOpen((value) => !value)}
          />
          <SiteMenu open={menuOpen} onNavigate={() => setMenuOpen(false)} />
        </>
      )}
      <main id="main-content">
        <Outlet />
      </main>
      {!isMaintenancePage && <Footer />}
    </div>
  );
}

export default RootLayout;
