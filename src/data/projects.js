export const designProjects = [
  {
    slug: "spider-verse-artist",
    title: "Artist study",
    category: "Design",
    year: "2025",
    use: { fr: "Éditorial", en: "Editorial" },
    image: "/assets/figma/design-artist.jpeg",
    description: {
      fr: "Une étude visuelle inspirée par les textures artisanales, le cadrage et l’énergie de Spider-Verse.",
      en: "A visual study inspired by the handmade textures, framing and energy of Spider-Verse.",
    },
  },
  {
    slug: "creative-studio",
    title: "Creative studio",
    category: "Design",
    year: "2025",
    use: { fr: "Direction artistique", en: "Art direction" },
    image: "/assets/figma/design-studio.jpeg",
    description: {
      fr: "Un espace de travail dense et coloré exploré comme un exercice de composition et de narration visuelle.",
      en: "A dense, colorful workspace explored as an exercise in composition and visual storytelling.",
    },
  },
  {
    slug: "inner-voice",
    title: "Inner voice",
    category: "Design",
    year: "2025",
    use: { fr: "Campagne", en: "Campaign" },
    image: "/assets/figma/design-inner-voice.jpeg",
    description: {
      fr: "Une composition inspirée de la bande dessinée autour de l’attention, du doute et du bruit du monologue intérieur.",
      en: "A comic-inspired composition about attention, doubt and the noise of an inner monologue.",
    },
  },
  {
    slug: "miles-moodboard",
    title: "Miles moodboard",
    category: "Design",
    year: "2025",
    use: { fr: "Moodboard", en: "Moodboard" },
    image: "/assets/figma/design-spider-collage.jpeg",
    description: {
      fr: "Un moodboard centré sur le personnage, mêlant typographie, illustration, photographie et détails collectés.",
      en: "A character-led moodboard combining typography, illustration, photography and collected details.",
    },
  },
];

const specialImages = [
  ["void", "Void", "/assets/special/void.jpg"],
  ["laube", "L'Aube", "/assets/special/laube.jpg"],
  ["morpheus", "Morpheus", "/assets/special/morpheus.jpg"],
  ["the-three-gazes", "The Three Gazes", "/assets/special/the-three-gazes.jpg"],
  ["pilot", "Pilot", "/assets/special/pilot.jpg"],
  ["exiled", "Exiled", "/assets/special/exiled.jpg"],
  ["alter", "Alter", "/assets/special/alter.jpg"],
  ["silver-surfer", "Silver Surfer", "/assets/special/silver-surfer.jpg"],
];

const specialSlides = specialImages.map(([, , image]) => image);

export const specialDesignProjects = specialImages.map(([slug, title, image]) => ({
  slug,
  title,
  category: "Design",
  collection: "Special",
  year: "2025",
  use: { fr: "Collage numérique", en: "Digital collage" },
  image,
  slides: specialSlides,
  description: {
    fr: `${title} fait partie de Special, une série personnelle de compositions numériques surréalistes.`,
    en: `${title} is part of Special, a personal series of surreal digital compositions.`,
  },
}));

const projectPalette = [
  ["#948e7e", "#3f3d2c"],
  ["#ef8152", "#8d2a00"],
  ["#d3e97a", "#465605"],
  ["#c07ae9", "#2b0242"],
  ["#4760ff", "#020a42"],
  ["#ff3337", "#420203"],
];

const technologyIcons = {
  CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
  HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg",
  React: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
  Figma: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
};

const webProjectOverrides = {
  1: {
    slug: "chop-chop",
    title: "CHOP CHOP",
    year: "2026",
    status: { fr: "En conception", en: "In design" },
    use: { fr: "Jeu de cuisine", en: "Cooking game" },
    image: "/assets/chop-chop/chop-chop-cover.png",
    slides: ["/assets/chop-chop/chop-chop-cover.png"],
    tabIcon: "/assets/chop-chop/knife.svg",
    preserveTabIconColor: true,
    figmaUrl: "https://www.figma.com/design/5YyQNON3zicZCKuN1CkEH0?node-id=15-1179",
    githubUrl: "https://github.com/Mahkalix/CHOP-CHOP",
    tools: { Figma: technologyIcons.Figma },
    description: {
      fr: "Les commandes s’accumulent, le chrono tourne et rien n’est encore prêt. Derrière les fourneaux, découpe, cuisine et sers sans perdre le fil. Un jeu de cuisine en solo où quelques secondes séparent le coup de feu du chaos.",
      en: "Orders are piling up, the clock is ticking and nothing is ready yet. Step into the kitchen, chop, cook and serve without losing track. A solo cooking game where a few seconds separate a busy service from total chaos.",
    },
  },
  5: {
    slug: "platemate",
    title: "PlateMate",
    year: "2026",
    status: { fr: "En cours", en: "In progress" },
    use: { fr: "My Digital Startup", en: "My Digital Startup" },
    description: {
      fr: "Un plat qu’on aime préparer, quelques places autour d’une table et des personnes qui ne se connaissent pas encore. PlateMate fait du repas le point de départ d’une rencontre, le temps de découvrir une cuisine, une histoire et celles et ceux qui la partagent.",
      en: "A dish you love to cook, a few seats around a table and people who have yet to meet. With PlateMate, a shared meal becomes the start of a connection, a chance to discover a cuisine, a story and the people who share it.",
    },
    image: "/assets/platemate/platemate-cover.jpg",
    tabIcon: "/assets/platemate/platemate-logo.png",
    preserveTabIconColor: true,
    slides: ["/assets/platemate/platemate-cover.jpg"],
    githubUrl: null,
    tools: {
      Figma: technologyIcons.Figma,
      React: technologyIcons.React,
      JavaScript: technologyIcons.JavaScript,
      Stripe: "/assets/platemate/stripe.svg",
    },
  },
  3: {
    slug: "dimension",
    title: "Dimension",
    year: "2023",
    use: { fr: "Musique", en: "Music" },
    description: {
      fr: "Un travail à terminer, une séance à commencer ou simplement le besoin de souffler. Dimension est une PWA musicale qui accompagne ces moments où quelques notes suffisent à changer le rythme de la journée.",
      en: "Work to finish, a workout to begin, or simply a moment to catch your breath. Dimension is a music progressive web app (PWA) for those moments when a few notes are all it takes to change the rhythm of your day.",
    },
    image: "/assets/dimension-home.png",
    tabIcon: "/assets/dimension-logo.png",
    slides: ["/assets/dimension-home.png", "/assets/dimension-library.png"],
    githubUrl: "https://github.com/Mahkalix/Dimension",
    siteUrl: "https://dimensionmusic.netlify.app/",
    tools: technologyIcons,
  },
  2: {
    slug: "trace-zero",
    title: "Trace//Zero",
    year: "2026",
    status: { fr: "En cours", en: "In progress" },
    use: { fr: "Expérience numérique", en: "Digital experience" },
    description: {
      fr: "Un clic, une recherche, une habitude. On ferme l’onglet, mais quelque chose reste. Trace//Zero rend visibles les traces laissées au fil de la navigation et invite à explorer ce qu’on révèle de soi, parfois sans le savoir.",
      en: "A click, a search, a habit. You close the tab, but something remains. Trace//Zero reveals the traces we leave as we browse and invites us to explore what we share about ourselves, sometimes without even knowing it.",
    },
    image: null,
    slides: [],
    hideTabIcon: true,
    githubUrl: "https://github.com/Mahkalix/TraceZero",
    tools: {
      Figma: technologyIcons.Figma,
    },
  },
  4: {
    slug: "hors-cadre",
    title: "HORS CADRE",
    year: "2026",
    status: { fr: "En conception", en: "In design" },
    use: { fr: "Documentaire interactif", en: "Interactive documentary" },
    description: {
      fr: "Une journée à Grenoble. Des amis à retrouver, un cortège à rejoindre, puis des choix auxquels Elias ne s’était pas préparé. Entre rencontres, tensions et images qui circulent, cette fiction documentaire interactive explore ce qu’une manifestation raconte quand on prend le temps de regarder hors du cadre.",
      en: "A day in Grenoble. Friends to meet, a march to join, then choices Elias never expected to face. Through encounters, rising tension and images shared online, this interactive documentary fiction explores what a demonstration reveals when we take the time to look beyond the frame.",
    },
    image: "/assets/hors-cadre/hors-cadre-cover.jpg",
    slides: ["/assets/hors-cadre/hors-cadre-cover.jpg"],
    hideTabIcon: true,
    githubUrl: "https://github.com/Mahkalix/HORS-CADRE",
    figmaUrl: "https://www.figma.com/design/cuFSnI2KEsFVh3iOarpbw9?node-id=26-38621",
    tools: { Figma: technologyIcons.Figma },
  },
};

const hiddenWebProjectSlots = new Set([0]);

export const webProjects = projectPalette.map(([background, foreground], index) => ({
  slug: `web-project-${index + 1}`,
  title: `Project ${String(index + 1).padStart(2, "0")}`,
  category: "Development",
  year: "2026",
  use: index % 2 === 0 ? { fr: "Portfolio", en: "Portfolio" } : { fr: "Application web", en: "Web application" },
  background,
  foreground,
  description: {
    fr: "Une fiche projet réutilisable prête à accueillir les contenus, liens, technologies et captures de production.",
    en: "A reusable project entry ready to receive production copy, links, technologies and screenshots.",
  },
  slides: designProjects.map((project) => project.image),
  githubUrl: "https://github.com/Mahkalix",
  ...webProjectOverrides[index],
})).filter((_, index) => !hiddenWebProjectSlots.has(index));

export const allProjects = [...designProjects, ...specialDesignProjects, ...webProjects];

export function findProject(slug) {
  return allProjects.find((project) => project.slug === slug);
}
