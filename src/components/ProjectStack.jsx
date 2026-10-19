import { Link } from "react-router-dom";
import { webProjects } from "../data/projects.js";

function ProjectStack() {
  return (
    <div className="c-project-stack">
      {webProjects.map((project, index) => (
        <Link
          className="c-project-stack__item"
          key={project.slug}
          to={`/projects/${project.slug}`}
          style={{
            "--card-bg": project.background,
            "--card-fg": project.foreground,
            "--card-index": index,
          }}
        >
          <span className="c-project-stack__tab" aria-hidden="true">
            <img
              className={project.tabIcon ? "is-project-logo" : undefined}
              src={project.tabIcon || "/assets/figma/project-tab-spider.png"}
              alt=""
            />
          </span>
          <span className="c-project-stack__heading">
            <span className="c-project-stack__title">{project.title}</span>
            <svg
              className="c-project-stack__arrow"
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path d="M5 19 19 5M9 5h10v10" />
            </svg>
          </span>
        </Link>
      ))}
    </div>
  );
}

export default ProjectStack;
