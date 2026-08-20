import { useSearchParams } from "react-router-dom";
import DesignCard from "../components/DesignCard.jsx";
import ProjectStack from "../components/ProjectStack.jsx";
import { specialDesignProjects } from "../data/projects.js";
import { useLanguage } from "../i18n/language.js";

function ProjectsPage() {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type") === "design" ? "design" : "development";
  const isDesign = type === "design";
  const { copy } = useLanguage();

  return (
    <div className="p-projects">
      <header className="p-projects__header">
        <h1>{isDesign ? copy.projects.designTitle : copy.projects.developmentTitle}</h1>
        <p>
          {isDesign ? copy.projects.designIntro : copy.projects.developmentIntro}
        </p>
      </header>

      {isDesign ? (
        <div className="p-projects__design-grid">
          {specialDesignProjects.map((project) => (
            <DesignCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <ProjectStack />
      )}
    </div>
  );
}

export default ProjectsPage;
