import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/language.js";

function DesignCard({ project }) {
  const { language } = useLanguage();

  return (
    <Link className="c-design-card" to={`/projects/${project.slug}`} aria-label={`${language === "fr" ? "Voir" : "View"} ${project.title}`}>
      <img src={project.image} alt="" />
      <span>{project.title}</span>
    </Link>
  );
}

export default DesignCard;
