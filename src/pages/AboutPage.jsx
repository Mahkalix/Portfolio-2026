import ButtonLink from "../components/ButtonLink.jsx";
import ContactSection from "../components/ContactSection.jsx";
import PassCard from "../components/PassCard.jsx";
import SocialLinks from "../components/SocialLinks.jsx";
import { profile } from "../data/site.js";
import { localize, useLanguage } from "../i18n/language.js";

function AboutPage() {
  const { language, copy } = useLanguage();
  const cvHref = language === "fr" ? "/assets/cv/maxence-badin-leger-cv-fr.pdf" : "/assets/cv/maxence-badin-leger-cv-en.pdf";

  return (
    <div className="p-about">
      <header className="p-about__hero">
        <div className="p-about__intro">
          <h1>{copy.about.title}</h1>
          <p>{localize(profile.biography, language)}</p>
          <div className="p-about__actions">
            <ButtonLink href={cvHref} download={`Maxence-Badin-Leger-CV-${language.toUpperCase()}.pdf`} compact>{copy.about.downloadCv}</ButtonLink>
            <SocialLinks />
          </div>
        </div>
        <PassCard />
      </header>

      <section className="p-about__abilities" aria-labelledby="abilities-title">
        <h2 id="abilities-title">{copy.about.abilities}</h2>
        <div className="p-about__ability-grid">
          {copy.about.abilityGroups.map((group, groupIndex) => (
            <ul key={groupIndex}>
              {group.map((ability) => <li key={ability}>{ability}</li>)}
            </ul>
          ))}
        </div>
      </section>

      <section className="p-about__experience" aria-labelledby="experience-title">
        <h2 id="experience-title">{copy.about.experience}</h2>
        <div className="p-about__experience-list">
          {copy.about.experiences.map((experience) => (
            <article key={`${experience.role}-${experience.period}`}>
              <div className="p-about__experience-heading">
                <h3>{experience.role}</h3>
                <span>{experience.period}</span>
              </div>
              <p>{experience.company}</p>
              <ul>
                {experience.details.map((detail) => <li key={detail}>{detail}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <ContactSection idPrefix="about" />
    </div>
  );
}

export default AboutPage;
