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
    slug: "hors-cadre",
    title: "Hors Cadre",
    year: "2026",
    status: { fr: "En cours", en: "In progress" },
    use: { fr: "Expérience documentaire", en: "Documentary experience" },
    description: {
      fr: "Hors Cadre est une expérience documentaire interactive consacrée à la colère étudiante et au sentiment de rupture entre une génération, les institutions et sa représentation médiatique. Le parcours confronte les témoignages vécus dans la rue, leur circulation sur les réseaux sociaux et leur traitement dans les médias pour révéler ce qui disparaît lorsque les revendications deviennent du bruit. Le projet est encore en cours de développement.",
      en: "Hors Cadre is an interactive documentary experience about student anger and the growing disconnect between a generation, public institutions and its media representation. The journey contrasts first-hand voices from the streets with their circulation on social media and their coverage in the news, revealing what disappears when demands are reduced to noise. The project is still in development.",
    },
    image: "/assets/hors-cadre/hors-cadre-cover.png",
    slides: ["/assets/hors-cadre/hors-cadre-cover.png"],
    imageFit: "contain",
    hideTabIcon: true,
    githubUrl: null,
    siteUrl: null,
    tools: {
      Figma: technologyIcons.Figma,
    },
  },
  2: {
    slug: "plot-twist",
    title: "Plot//Twist",
    year: "2026",
    use: { fr: "Prochain projet", en: "Next project" },
    description: {
      fr: "Un emplacement réservé à la prochaine idée qui viendra compléter cette sélection. Promis, elle arrive bientôt.",
      en: "A space reserved for the next idea that will complete this selection. Promise, it is coming soon.",
    },
    placeholderText: {
      fr: "Promis, j’arrive avec une nouvelle idée",
      en: "Promise, I’ll be back with a new idea",
    },
    image: null,
    slides: [],
    hideTabIcon: true,
    githubUrl: null,
    siteUrl: null,
    tools: {},
  },
  5: {
    slug: "platemate",
    title: "PlateMate",
    year: "2026",
    status: { fr: "En cours", en: "In progress" },
    use: { fr: "My Digital Startup", en: "My Digital Startup" },
    description: {
      fr: "PlateMate est une plateforme qui met en relation des hôtes passionnés de cuisine et des convives à la recherche d’expériences locales et conviviales. Réalisé en équipe dans le cadre de My Digital Startup, le projet imagine un parcours complet : exploration des tables, profils, création de menus, réservation et paiement sécurisé avec Stripe. Je participe à la conception et à l’intégration d’une expérience responsive, inclusive et accessible, notamment grâce à une structure sémantique, une navigation au clavier, des contrastes lisibles et des composants compréhensibles par tous. Le produit est encore en cours de développement.",
      en: "PlateMate connects hosts who love cooking with guests looking for welcoming local experiences. Created as a team project for My Digital Startup, it explores a complete journey including table discovery, profiles, menu creation, booking and secure payment with Stripe. I contribute to the design and implementation of a responsive, inclusive and accessible experience through semantic structure, keyboard navigation, readable contrast and components that work for everyone. The product is still in development.",
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
      fr: "Dimension est une application musicale mobile qui aide à rester motivé et concentré pendant le travail, le sport ou la méditation. Créée avec React et Auth0, elle propose une expérience fluide et intuitive, une navigation simple ainsi que plusieurs pistes musicales avec réglage du volume.",
      en: "Dimension is a mobile music application that helps users stay motivated and focused while working, exercising or meditating. Built with React and Auth0, it provides a seamless and intuitive experience with simple navigation, a choice of tracks and adjustable volume.",
    },
    image: "/assets/dimension-home.png",
    tabIcon: "/assets/dimension-logo.png",
    slides: ["/assets/dimension-home.png", "/assets/dimension-library.png"],
    githubUrl: "https://github.com/Mahkalix/Dimension",
    siteUrl: "https://dimensionmusic.netlify.app/",
    tools: technologyIcons,
  },
  4: {
    slug: "trace-zero",
    title: "Trace//Zero",
    year: "2026",
    status: { fr: "En cours", en: "In progress" },
    use: { fr: "Expérience numérique", en: "Digital experience" },
    description: {
      fr: "Trace//Zero est un concept d’expérience numérique autour de l’identité et de l’empreinte laissée en ligne. L’interface met en scène les traces générées au fil de la navigation — données, habitudes et signaux invisibles — puis propose un parcours pour les comprendre, les maîtriser et revenir vers une présence numérique minimale. Le projet explore une direction visuelle technique et immersive, avec une attention particulière portée à la lisibilité et à l’accessibilité. Il est encore en cours de développement et ne possède pas encore de capture définitive.",
      en: "Trace//Zero is a digital experience concept about identity and the footprint people leave online. The interface reveals the traces created while browsing — data, habits and invisible signals — then guides users through understanding and controlling them to move towards a minimal digital presence. The project explores a technical, immersive visual direction with particular attention to readability and accessibility. It is still in development and does not yet have a final screenshot.",
    },
    image: null,
    slides: [],
    hideTabIcon: true,
    githubUrl: null,
    siteUrl: null,
    tools: {
      Figma: technologyIcons.Figma,
    },
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
