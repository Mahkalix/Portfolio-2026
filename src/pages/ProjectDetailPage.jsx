import { Link, useNavigate, useParams } from "react-router-dom";
import Carousel from "../components/Carousel.jsx";
import ProjectTag from "../components/ProjectTag.jsx";
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
  const projectHeader = (
    <header className="p-project-detail__header">
      <h1>{project.title}</h1>
      {project.status ? <ProjectTag status>{localize(project.status, language)}</ProjectTag> : null}
      {!isDesignProject && (project.siteUrl || project.githubUrl || project.figmaUrl) ? (
        <nav className="p-project-detail__actions" aria-label={copy.detail.projectLinks}>
          {project.siteUrl ? (
            <a className="is-primary" href={project.siteUrl} target="_blank" rel="noreferrer"
              aria-label={`${localize(project.siteLabel, language) || copy.detail.openSite} (${copy.accessibility.newWindow})`}
              aria-describedby={project.demoNote ? "project-demo-note" : undefined}>
              {localize(project.siteLabel, language) || copy.detail.openSite}
            </a>
          ) : null}
          {project.githubUrl ? (
            <a href={project.githubUrl} target="_blank" rel="noreferrer" aria-label={`${copy.detail.openCode} (${copy.accessibility.newWindow})`}>
              {copy.detail.openCode}
            </a>
          ) : null}
          {project.figmaUrl ? (
            <a href={project.figmaUrl} target="_blank" rel="noreferrer" aria-label={`${copy.detail.openDesign} (${copy.accessibility.newWindow})`}>
              {copy.detail.openDesign}
            </a>
          ) : null}
        </nav>
      ) : null}
      {project.demoNote ? <p className="p-project-detail__demo-note" id="project-demo-note">{localize(project.demoNote, language)}</p> : null}
    </header>
  );

  return (
    <article className="p-project-detail">
      {!isDesignProject ? projectHeader : null}
      <Carousel
        items={sliderItems}
        activeSlug={project.slug}
        title={project.title}
        fit="contain"
        variant={isDesignProject ? "portrait" : "desktop"}
        onChange={(item) => navigate(`/projects/${item.slug}`, { preventScrollReset: true })}
      />

      {isDesignProject ? projectHeader : null}

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
          <ul className="p-project-detail__tools" aria-label={copy.detail.technologies}>
            {Object.entries(project.tools).map(([name, icon]) => (
              <li key={name}>
                {icon ? <img src={icon} alt="" aria-hidden="true" /> : <span className="p-project-detail__tool-name" aria-hidden="true">{name.slice(0, 2)}</span>}
                <span>{name}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </section>

      {project.caseStudy ? (
        <section className="p-project-detail__case-study" aria-labelledby="project-contribution-title">
          <h2 id="project-contribution-title">{copy.detail.contribution}</h2>
          <p className="p-project-detail__role">{localize(project.caseStudy.role, language)}</p>
          <div className="p-project-detail__case-grid">
            {project.caseStudy.sections.map((section) => (
              <section key={section.title.en}>
                <h3>{localize(section.title, language)}</h3>
                <p>{localize(section.text, language)}</p>
              </section>
            ))}
          </div>
        </section>
      ) : null}
    </article>
  );
}

export default ProjectDetailPage;
