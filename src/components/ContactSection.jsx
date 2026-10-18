import { profile } from "../data/site.js";
import { useLanguage } from "../i18n/language.js";
import ContactForm from "./ContactForm.jsx";
import SocialLinks from "./SocialLinks.jsx";

function ContactSection({ idPrefix = "contact", headingLevel = "h2" }) {
  const headingId = `${idPrefix}-connect-title`;
  const { copy } = useLanguage();
  const Heading = headingLevel;

  return (
    <section className="c-contact-section" aria-labelledby={headingId}>
      <div className="c-contact-section__intro">
        <div>
          <Heading id={headingId}>{copy.contact.title}</Heading>
          <p>
            {copy.contact.intro} <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </p>
        </div>
        <SocialLinks />
      </div>
      <ContactForm idPrefix={idPrefix} />
    </section>
  );
}

export default ContactSection;
