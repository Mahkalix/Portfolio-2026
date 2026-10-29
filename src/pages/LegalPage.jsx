import { Link } from "react-router-dom";
import { profile } from "../data/site.js";
import { useLanguage } from "../i18n/language.js";

const translations = {
  fr: {
    legal: { title: "Mentions légales", lead: "Informations relatives à ce portfolio personnel.", sections: [
      ["Éditrice et directrice de publication", "Maxence Badin-Léger, Grenoble (France). Pour toute demande :"],
      ["Hébergement", "Les coordonnées complètes de l’hébergeur du site public restent à confirmer avant la mise en production (raison sociale, adresse et contact)."],
      ["Propriété intellectuelle", "Les créations originales sont protégées par le droit d’auteur. Les marques et œuvres de tiers conservent leurs droits respectifs."],
      ["Données personnelles", "Le traitement des demandes envoyées via le formulaire est décrit dans la politique de confidentialité."]
    ], links:["Politique de confidentialité", "Droits d’auteur"],
    note:"Avant publication définitive : vérifier les obligations applicables selon le statut de l’éditrice et compléter les coordonnées de l’hébergeur." },
    privacy: { title:"Confidentialité", lead:"Informations sur les données utilisées pour répondre aux demandes envoyées depuis le site.", sections:[
      ["Responsable", "Maxence Badin-Léger, joignable à l’adresse suivante :"],
      ["Données du formulaire", "Le formulaire demande le nom, l’adresse e-mail, l’objet et le message. Sans service externe configuré, il ouvre le logiciel de messagerie du visiteur avec un brouillon prérempli, sans envoi automatique depuis le site. Si un service de formulaire est configuré, ces données lui sont transmises et sa politique doit être précisée."],
      ["Finalité", "Les données envoyées sont utilisées pour prendre connaissance des messages et y répondre. Leur traitement repose, suivant le contexte, sur l’intérêt légitime de gérer les échanges ou les démarches précontractuelles à votre demande."],
      ["Durée et destinataires", "Les messages reçus passent par les services de messagerie concernés. La durée de conservation précise et les éventuels prestataires du formulaire doivent être confirmés avant mise en production."],
      ["Hébergement et services tiers", "L’hébergeur peut collecter des données techniques (notamment les journaux d’accès et l’adresse IP). Certaines ressources graphiques sont chargées depuis un CDN tiers. Ces traitements et les éventuels transferts doivent être vérifiés dans la configuration de production."],
      ["Cookies et mesure d’audience", "Aucun bandeau de consentement n’est affiché par défaut. Si des traceurs non essentiels sont ajoutés ultérieurement, une information adaptée et, le cas échéant, un consentement préalable seront nécessaires."],
      ["Vos droits", "Vous pouvez demander l’accès, la rectification ou l’effacement de vos données, et exercer les autres droits applicables en écrivant à l’adresse ci-dessous. Vous pouvez aussi saisir la CNIL."]
    ], links:["Mentions légales", "Site de la CNIL"],
    note:"À vérifier avant publication : identité de l’hébergeur, éventuel fournisseur de formulaire, transferts, durées de conservation et traceurs effectivement utilisés." }
  },
  en: {
    legal: { title:"Legal notice", lead:"Information about this personal portfolio.", sections:[
      ["Publisher and publication director", "Maxence Badin-Léger, Grenoble (France). Contact:"],
      ["Hosting", "The public website host’s full legal details still need verification before publishing (company name, address and contact)."],
      ["Copyright", "Original creations are protected by copyright. Third-party works and brands remain subject to their owners’ rights."],
      ["Personal data", "How contact requests are handled is explained in the privacy policy."]
    ], links:["Privacy policy","Copyright"],note:"Before publication, confirm the publisher’s legal status and the host’s contact details." },
    privacy: { title:"Privacy policy", lead:"Information on data used to respond to messages sent through this website.", sections:[
      ["Controller","Maxence Badin-Léger. Contact:"],
      ["Contact form","The form requests your name, email address, subject and message. Without a configured external endpoint, it opens a prefilled draft in your email application; the website does not automatically send it. If an endpoint is configured, these fields are transmitted to that service and its policy must be disclosed."],
      ["Purpose","Messages are processed to read and respond to your requests. Depending on context, the legal basis is legitimate interest in managing correspondence or pre-contractual steps requested by you."],
      ["Retention and recipients","Messages are handled by the relevant email providers. Exact retention periods and any contact-form providers must be verified before publication."],
      ["Hosting and third parties","The hosting provider may process technical data (including access logs and IP addresses). Some graphic assets are loaded from an external CDN. Production processing and any international transfers must be checked."],
      ["Cookies and analytics","There is no default cookie-consent banner. If non-essential trackers are added, appropriate notice and consent where required must be implemented."],
      ["Your rights","You can request access, correction, deletion and exercise other applicable rights using the contact address below. You may also contact the French data protection authority (CNIL)."]
    ],links:["Legal notice","CNIL website"],note:"Before publication, verify the host, any form processor, transfers, actual retention periods and deployed trackers."}
  }
};

export default function LegalPage({ kind = "legal" }) {
  const { language } = useLanguage();
  const t = translations[language]?.[kind] || translations.fr[kind];
  return <article className="p-copyright">
    <header className="p-copyright__header"><p className="p-copyright__eyebrow">{language === "fr" ? "Informations légales" : "Legal information"}</p><h1>{t.title}</h1><p className="p-copyright__intro">{t.lead}</p></header>
    <div className="p-copyright__sections">{t.sections.map(([heading, body], i) => <section key={heading}><h2>{heading}</h2><p>{body}{i === 0 ? <> <a href={`mailto:${profile.email}`}>{profile.email}</a></> : null}</p></section>)}</div>
    <nav className="p-copyright__legal-links" aria-label={language === "fr" ? "Autres informations" : "More information"}>
      <Link to={kind === "legal" ? "/privacy" : "/legal"}>{t.links[0]}</Link>
      {kind === "privacy" ? <a href="https://www.cnil.fr" target="_blank" rel="noreferrer">{t.links[1]}</a> : <Link to="/copyright">{t.links[1]}</Link>}
    </nav>
    <p className="p-copyright__note">{t.note}</p>
  </article>;
}
