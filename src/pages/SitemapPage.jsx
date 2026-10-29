import { Link } from "react-router-dom";
import { designProjects, specialDesignProjects, webProjects } from "../data/projects.js";
import { useLanguage } from "../i18n/language.js";

export default function SitemapPage() {
  const { language } = useLanguage();
  const english = language === "en";
  const groups = [
    { title: english ? "Pages" : "Pages", links: [
      [english ? "Home" : "Accueil", "/"], [english ? "About" : "À propos", "/about"],
      [english ? "Development" : "Développement", "/projects?type=development"],
      ["Design", "/projects?type=design"],[english ? "Photography" : "Photographie", "/photography"],
      ["Contact", "/contact"]
    ] },
    {title: english ? "Development projects" : "Projets de développement", links: webProjects.map(p => [p.title, `/projects/${p.slug}`])},
    {title: english ? "Design projects" : "Projets Design", links: [...designProjects,...specialDesignProjects].map(p => [p.title,`/projects/${p.slug}`])},
    {title: english ? "Legal information" : "Informations légales", links: [
      [english ? "Copyright" : "Droits d’auteur","/copyright"],
      [english ? "Legal notice" : "Mentions légales","/legal"],
      [english ? "Privacy policy" : "Confidentialité","/privacy"]
    ]}
  ];
  return <article className="p-copyright">
    <header className="p-copyright__header"><p className="p-copyright__eyebrow">{english ? "Navigation" : "Navigation"}</p><h1>{english ? "Sitemap" : "Plan du site"}</h1><p className="p-copyright__intro">{english ? "All accessible pages and projects." : "Toutes les pages et les projets accessibles."}</p></header>
    <div className="p-copyright__sections">{groups.map(g => <section key={g.title}><h2>{g.title}</h2><ul>{g.links.map(([name,url]) => <li key={url}><Link to={url}>{name}</Link></li>)}</ul></section>)}</div>
  </article>;
}
