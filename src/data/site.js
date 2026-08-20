export const navigationItems = [
  { key: "home", to: "/" },
  { key: "design", to: "/projects?type=design" },
  { key: "development", to: "/projects?type=development" },
  { key: "photography", to: "/photography" },
  { key: "about", to: "/about" },
  { key: "contact", to: "/contact" },
];

export const profile = {
  name: "Maxence Badin-Léger",
  location: "Grenoble",
  role: { fr: "Développeuse web junior", en: "Junior web developer" },
  email: "maxencelger@gmail.com",
  introduction: {
    fr: "Développeuse web junior basée à Grenoble, je suis passionnée par la création de sites accessibles et agréables à utiliser.",
    en: "A Grenoble-based junior web developer passionate about building accessible and user-friendly websites.",
  },
  biography: {
    fr: "Actuellement en première année de MBA en développement Full Stack à Grenoble, je suis une développeuse web orientée frontend, attentive aux interfaces soignées, au code maintenable et aux détails. À l’aise dans des bases de code et des environnements variés, j’aime prendre en main mes sujets et livrer des résultats concrets. Je souhaite continuer à progresser sur des projets ambitieux.",
    en: "Currently in my first year of a Full Stack Developer MBA in Grenoble, I am a frontend-focused web developer with a strong eye for clean interfaces, maintainable code and attention to detail. Comfortable diving into existing codebases and varied environments, I like taking ownership of my work and delivering concrete results. I’m looking to grow my skills on ambitious projects.",
  },
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/maxencebadin-l%C3%A9ger/", icon: "/assets/social-linkedin.svg" },
    { label: "GitHub", href: "https://github.com/Mahkalix", icon: "/assets/social-github.svg" },
  ],
};

export const abilities = [
  { number: "01", title: "Accessible interfaces", description: "Semantic structure, keyboard paths, focus states and readable responsive layouts." },
  { number: "02", title: "React systems", description: "Composable components, data-driven pages and predictable interaction state." },
  { number: "03", title: "Sass architecture", description: "Scalable ITCSS layers, reusable tokens and responsive layout primitives." },
  { number: "04", title: "Design translation", description: "Faithful implementation from Figma while respecting the project’s existing conventions." },
  { number: "05", title: "Motion", description: "Purposeful hover, navigation and carousel transitions with reduced-motion support." },
  { number: "06", title: "Delivery workflow", description: "Focused Git branches, automated builds, linting and browser-level verification." },
];

export const abilityGroups = [
  ["HTML", "CSS / Sass", "JavaScript", "React", "Responsive design", "Accessibility"],
  ["Git / GitHub", "Figma", "Vite", "Drupal", "WordPress", "CMS Eolas"],
  ["UI integration", "Design systems", "Components", "Maintenance", "Testing", "Collaboration"],
];

export const experiences = [
  {
    role: "Apprentice Web Dev",
    period: "Nov 2023 — Present",
    company: "La Fabrique — Orange Business",
    details: ["Drupal", "CMS Eolas", "Web integration", "Web accessibility (WCAG)", "JavaScript"],
  },
  {
    role: "Apprentice Web Dev",
    period: "Sept — Nov 2024",
    company: "Inforéso",
    details: ["WordPress", "Elementor", "Figma"],
  },
  {
    role: "Web Integrator (CIE)",
    period: "Feb — Aug 2024",
    company: "Inforéso",
    details: ["WordPress", "Elementor", "Figma"],
  },
  {
    role: "Student jobs",
    period: "2019 — 2022",
    company: "Various roles",
    details: ["Crew member", "Freelance cleaning professional", "Activity leader"],
  },
  {
    role: "Internship",
    period: "2017",
    company: "Mezcalito",
    details: ["Introduction to the roles within a digital agency"],
  },
];
