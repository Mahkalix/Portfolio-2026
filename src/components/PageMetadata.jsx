import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { findProject } from "../data/projects.js";
import { useLanguage } from "../i18n/language.js";

function PageMetadata() {
  const { pathname, search } = useLocation();
  const { copy } = useLanguage();

  useEffect(() => {
    const searchParams = new URLSearchParams(search);
    let pageName = copy.navigation.home;

    if (pathname === "/about") pageName = copy.navigation.about;
    else if (pathname === "/contact") pageName = copy.navigation.contact;
    else if (pathname === "/photography") pageName = copy.navigation.photography;
    else if (pathname === "/projects") {
      pageName = searchParams.get("type") === "design"
        ? copy.projects.designTitle
        : copy.projects.developmentTitle;
    } else if (pathname.startsWith("/projects/")) {
      pageName = findProject(pathname.split("/").at(-1))?.title || copy.detail.notFound;
    } else if (pathname !== "/") pageName = copy.notFound.title;

    document.title = `${pageName} | Maxence Badin-Léger`;
  }, [copy, pathname, search]);

  return null;
}

export default PageMetadata;
