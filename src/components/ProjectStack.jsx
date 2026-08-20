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
            <span className="c-project-stack__arrow" aria-hidden="true">↗</span>
          </span>
        </Link>
      ))}
    </div>
  );
}

export default ProjectStack;
