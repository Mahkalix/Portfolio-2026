import { Link, useNavigate, useParams } from "react-router-dom";
import Carousel from "../components/Carousel.jsx";
import { designProjects, findProject, specialDesignProjects, webProjects } from "../data/projects.js";
import { localize, useLanguage } from "../i18n/language.js";

function ProjectDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = findProject(slug);
  const { language, copy } = useLanguage();

  if (!project) {
    return (
      <section className="p-project-detail p-project-detail--missing">
        <h1>{copy.detail.notFound}</h1>
        <Link to="/projects">{copy.detail.return}</Link>
      </section>
    );
  }

  const isDesignProject = project.category === "Design";
  const sliderProjects = isDesignProject
    ? (project.collection === "Special" ? specialDesignProjects : designProjects)
    : webProjects;
  const sliderItems = sliderProjects.map((item, index) => ({
    ...item,
    image: item.image || item.slides?.[index % item.slides.length],
  }));
  const category = project.category === "Design" ? copy.detail.design : copy.detail.development;
  const projectDetails = [[copy.detail.year, project.year], [copy.detail.use, localize(project.use, language)], [copy.detail.category, category]];

  return (
    <article className="p-project-detail">
      <Carousel
        items={sliderItems}
        activeSlug={project.slug}
        title={project.title}
        fit="contain"
        variant={isDesignProject ? "portrait" : "wide"}
        onChange={(item) => navigate(`/projects/${item.slug}`)}
      />

      <header className="p-project-detail__header">
        <h1>{project.title}</h1>
        {isDesignProject ? (
          <img
            className="p-project-detail__links is-design"
            src="/assets/figma/project-external-link.svg"
            alt=""
            aria-hidden="true"
          />
        ) : (
          <div className="p-project-detail__links is-development">
            {project.siteUrl ? (
              <a href={project.siteUrl} target="_blank" rel="noreferrer" aria-label={`Visit ${project.title} website`}>
                <img src="/assets/figma/project-external-link.svg" alt="" aria-hidden="true" />
              </a>
            ) : null}
            <a href={project.githubUrl} target="_blank" rel="noreferrer" aria-label="Visit Maxence's GitHub profile">
              <img src="/assets/social-github.svg" alt="" aria-hidden="true" />
            </a>
          </div>
        )}
      </header>

      <section className="p-project-detail__summary" aria-label={copy.detail.overview}>
        <p>{localize(project.description, language)}</p>
        <dl className="p-project-detail__details">
          {projectDetails.map(([label, value]) => (
            <div key={label}><dt>{label}</dt><dd>{value}</dd></div>
          ))}
        </dl>

        {isDesignProject ? (
          <img className="p-project-detail__tool" src="/assets/figma/project-tool-photoshop.png" alt="Adobe Photoshop" />
        ) : project.tools ? (
          <ul className="p-project-detail__tools" aria-label="Technologies">
            {Object.entries(project.tools).map(([name, icon]) => (
              <li key={name}>
                <img src={icon} alt="" aria-hidden="true" />
                <span>{name}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </section>
    </article>
  );
}

export default ProjectDetailPage;
