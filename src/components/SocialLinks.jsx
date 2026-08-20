import { profile } from "../data/site.js";
import { useLanguage } from "../i18n/language.js";

function SocialLinks() {
  const { copy } = useLanguage();
  return (
    <ul className="c-social-links" aria-label={copy.contact.social}>
      {profile.socials.map((social) => (
        <li key={social.label}>
          <a href={social.href} target="_blank" rel="noreferrer">
            <img src={social.icon} alt="" aria-hidden="true" />
            <span className="u-visually-hidden">{social.label}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SocialLinks;
