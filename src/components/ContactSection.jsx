import { profile } from "../data/site.js";
import { useLanguage } from "../i18n/language.js";
import ContactForm from "./ContactForm.jsx";
import SocialLinks from "./SocialLinks.jsx";

function ContactSection({ idPrefix = "contact" }) {
  const headingId = `${idPrefix}-connect-title`;
  const { copy } = useLanguage();

  return (
    <section className="c-contact-section" aria-labelledby={headingId}>
      <div className="c-contact-section__intro">
        <div>
          <h2 id={headingId}>{copy.contact.title}</h2>
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
