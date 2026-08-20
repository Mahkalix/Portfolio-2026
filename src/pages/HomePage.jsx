import ButtonLink from "../components/ButtonLink.jsx";
import ContactSection from "../components/ContactSection.jsx";
import DesignCard from "../components/DesignCard.jsx";
import ProjectStack from "../components/ProjectStack.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { specialDesignProjects } from "../data/projects.js";
import { profile } from "../data/site.js";
import { localize, useLanguage } from "../i18n/language.js";

function HomePage() {
  const { language, copy } = useLanguage();

  return (
    <div className="p-home">
      <section className="p-home__hero" aria-labelledby="home-title">
        <h1 id="home-title">
          <span>Maxence</span>
          <span>Badin-Léger.</span>
        </h1>
        <p>{localize(profile.introduction, language)}</p>
      </section>

      <section className="p-home__section" aria-labelledby="web-title">
        <SectionHeading headingId="web-title" title={copy.home.webTitle} linkLabel={copy.home.webLink} to="/projects?type=development" />
        <div>
          <ProjectStack />
        </div>
      </section>

      <section className="p-home__section" aria-labelledby="design-title">
        <SectionHeading headingId="design-title" title={copy.home.designTitle} linkLabel={copy.home.designLink} to="/projects?type=design" />
        <div className="p-home__design-grid">
          {specialDesignProjects.map((project) => (
            <DesignCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="p-home__about" aria-labelledby="about-title">
        <h2 id="about-title">{copy.home.aboutTitle}</h2>
        <div>
          <p className="p-home__about-lead">{copy.home.aboutLead}</p>
          <p>{localize(profile.biography, language)}</p>
          <ButtonLink to="/about">{copy.home.aboutLink}</ButtonLink>
        </div>
      </section>

      <ContactSection idPrefix="home" />
    </div>
  );
}

export default HomePage;
