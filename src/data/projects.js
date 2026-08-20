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
};

const webProjectOverrides = {
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
  5: {
    slug: "kasa",
    title: "Kasa",
    year: "2023",
    use: { fr: "Location de logements", en: "Accommodation" },
    description: {
      fr: "Kasa est une plateforme majeure de location d’appartements en France. Ma mission consistait à moderniser son ancien site ASP.NET en lançant une nouvelle interface React conforme aux maquettes Figma, dans le cadre d’une transition vers une architecture JavaScript avec Node.js côté back-end. J’ai collaboré avec le designer afin d’aligner précisément le design et les fonctionnalités avec la vision du projet.",
      en: "Kasa is a leading apartment rental platform in France. My mission was to modernize its decade-old ASP.NET website by kickstarting a new React interface aligned with the Figma mockups, as part of a transition to a JavaScript stack with Node.js on the back end. I collaborated with the designer to ensure the design and features matched the project vision.",
    },
    image: "/assets/kasa-home.png",
    tabIcon: "/assets/kasa-logo.svg",
    slides: ["/assets/kasa-home.png"],
    githubUrl: "https://github.com/Mahkalix/Kasa",
    siteUrl: "https://kasahome.netlify.app/",
    tools: {
      CSS: technologyIcons.CSS,
      HTML: technologyIcons.HTML,
      React: technologyIcons.React,
      Swagger: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg",
      JavaScript: technologyIcons.JavaScript,
    },
  },
};

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
}));

export const allProjects = [...designProjects, ...specialDesignProjects, ...webProjects];

export function findProject(slug) {
  return allProjects.find((project) => project.slug === slug);
}
