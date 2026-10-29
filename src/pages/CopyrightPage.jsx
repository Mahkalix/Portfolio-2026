import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/language.js";

const text = {
  fr: {
    eyebrow: "Informations légales",
    title: "Droits d’auteur",
    intro: "Les photographies, créations graphiques, textes et autres réalisations originales présentés sur ce portfolio sont protégés par le droit d’auteur, sous réserve des droits de leurs auteurs respectifs.",
    sections: [
      ["Propriété des contenus", "Sauf mention contraire, les créations originales de Maxence Badin-Léger présentées sur ce site lui appartiennent. Les marques, personnages, éléments visuels et ressources de tiers restent la propriété de leurs titulaires respectifs."],
      ["Utilisation et reproduction", "La consultation de ce portfolio ne constitue pas une autorisation de copier, publier, modifier, distribuer ou exploiter commercialement ses contenus. Pour toute réutilisation, demandez une autorisation préalable. Les exceptions prévues par la loi restent applicables."],
      ["Photographies", "Les photographies sont proposées à des fins de consultation et de présentation du travail artistique. Les mentions de copyright et filigranes servent à identifier leur origine, sans constituer une protection technique contre la copie."],
      ["Projets et ressources externes", "Certains travaux peuvent faire référence à des univers, marques, technologies ou ressources externes. Leur présence ne signifie pas qu’ils sont détenus par l’autrice de ce portfolio. Les licences expressément indiquées dans les dépôts de code concernés restent applicables."],
      ["Demande d’autorisation ou signalement", "Pour demander une utilisation, signaler une erreur d’attribution ou discuter d’un contenu, contactez-moi via la page Contact."]
    ],
    contact: "Accéder à la page Contact",
    note: "Cette page informe sur les conditions d’utilisation des contenus. Elle ne remplace pas les mentions légales ou une politique de confidentialité lorsque celles-ci sont nécessaires."
  },
  en: {
    eyebrow: "Legal information",
    title: "Copyright",
    intro: "Photographs, graphic works, text and other original creations featured in this portfolio are protected by copyright, subject to the rights of their respective creators.",
    sections: [
      ["Content ownership", "Unless otherwise stated, original works by Maxence Badin-Léger shown on this website belong to their creator. Third-party brands, characters, visuals and resources remain the property of their respective rights holders."],
      ["Use and reproduction", "Viewing this portfolio does not grant permission to copy, publish, modify, distribute or commercially exploit its content. Please request authorization before reusing any work. Applicable legal exceptions remain in effect."],
      ["Photography", "Photographs are displayed for viewing and to showcase artistic work. Copyright notices and watermarks help identify their origin but do not technically prevent copying."],
      ["Projects and third-party resources", "Some projects refer to external fictional worlds, brands, technologies or assets. Their inclusion does not imply ownership of those materials. Any expressly stated licenses in the relevant source-code repositories continue to apply."],
      ["Permission requests and reports", "To request permission, flag an attribution issue or discuss a specific work, please use the Contact page."]
    ],
    contact: "Go to Contact",
    note: "This page explains content usage conditions. It does not replace any separately required legal notices or privacy policy."
  }
};

export default function CopyrightPage() {
  const { language } = useLanguage();
  const copy = text[language] || text.fr;

  return (
    <article className="p-copyright">
      <header className="p-copyright__header">
        <p className="p-copyright__eyebrow">{copy.eyebrow}</p>
        <h1>{copy.title}</h1>
        <p className="p-copyright__intro">{copy.intro}</p>
      </header>
      <div className="p-copyright__sections">
        {copy.sections.map(([heading, description]) => (
          <section key={heading}>
            <h2>{heading}</h2>
            <p>{description}</p>
          </section>
        ))}
      </div>
      <Link className="p-copyright__contact" to="/contact">{copy.contact}</Link>
      <p className="p-copyright__note">{copy.note}</p>
    </article>
  );
}
