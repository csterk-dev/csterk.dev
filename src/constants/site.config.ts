import { FaGithub, FaHouse, FaLinkedinIn } from "react-icons/fa6";

/*
 * Site Config Constants
 * This file contains constants used to change the dashboard's name, metadata & any other UI values 
 * that should be appear consistent throughout the app.
 */



/*
 * Global site metadata: 
 */
export const SITE_NAME = "csterk.dev";
export const SITE_NAME_TEMPLATE = `%s | ${SITE_NAME}`;
export const SITE_OWNER = "Chris Sterk";
export const SITE_CREATOR = "Chris Sterk";

export const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://csterk.dev";

/*
 * Internal site hrefs: 
 */
export const SITE_HOME_URL = "/";

/*
 * External company links: 
 */
export const SOCIALS_LINKEDIN_URL = "https://www.linkedin.com/in/chris-sterkenburg";
export const SOCIALS_GITHUB_URL = "https://github.com/csterk-dev";

/**
 * Nav Link items: 
 */
export const SITE_NAV_ITEMS: LinkItem[] = [
  {
    key: "home",
    icon: FaHouse,
    label: "Home",
    href: SITE_HOME_URL
  }
];


/**
 * Site social items: 
 */
export const SITE_SOCIAL_ITEMS: LinkItem[] = [
  {
    key: "linkedin",
    label: "LinkedIn",
    href: SOCIALS_LINKEDIN_URL,
    icon: FaLinkedinIn
  },
  {
    key: "github",
    label: "GitHub",
    href: SOCIALS_LINKEDIN_URL,
    icon: FaGithub
  }
];



/**
 * Site header call to action items: 
 */
export const SITE_HEADER_CTA_ITEMS = SITE_SOCIAL_ITEMS;



/**
 * Master list of all available tech items.
 * 
 * This list is kept in sync with the files in `/public/static/logos/tech`.
 */
export const MASTER_TECH_ITEMS: Record<string, TechStackItem> = {
  // Front-End
  react: {
    key: "react",
    name: "React",
    logoSource: "/static/logos/tech/reactjs.webp"
  },
  "react-native": {
    key: "react-native",
    name: "React Native",
    logoSource: "/static/logos/tech/react-native.webp"
  },
  "next-js": {
    key: "next-js",
    name: "Next.js",
    logoSource: "/static/logos/tech/next-js-seeklogo.webp"
  },
  "chakra-ui": {
    key: "chakra-ui",
    name: "Chakra UI",
    logoSource: "/static/logos/tech/chakra-ui.png"
  },
  "gluestack-ui": {
    key: "gluestack-ui",
    name: "Gluestack UI",
    logoSource: "/static/logos/tech/gluestack-ui.webp"
  },
  html5: {
    key: "html5",
    name: "HTML5",
    logoSource: "/static/logos/tech/html5.webp"
  },
  css3: {
    key: "css3",
    name: "CSS3",
    logoSource: "/static/logos/tech/css3.webp"
  },
  javascript: {
    key: "javascript",
    name: "JavaScript",
    logoSource: "/static/logos/tech/javascript.webp"
  },
  typescript: {
    key: "typescript",
    name: "TypeScript",
    logoSource: "/static/logos/tech/typescript.webp"
  },
  expo: {
    key: "expo",
    name: "Expo",
    logoSource: "/static/logos/tech/expo.webp"
  },
  vite: {
    key: "vite",
    name: "Vite",
    logoSource: "/static/logos/tech/vitejs.webp"
  },

  // Design
  figma: {
    key: "figma",
    name: "Figma",
    logoSource: "/static/logos/tech/figma.webp"
  },
  photoshop: {
    key: "photoshop",
    name: "Photoshop",
    logoSource: "/static/logos/tech/photoshop.webp"
  },
  mobbin: {
    key: "mobbin",
    name: "Mobbin",
    logoSource: "/static/logos/tech/mobbin.webp"
  },

  // Back-End / Cloud / Data
  nodejs: {
    key: "nodejs",
    name: "Node.js",
    logoSource: "/static/logos/tech/nodejs.webp"
  },
  postgresql: {
    key: "postgresql",
    name: "PostgreSQL",
    logoSource: "/static/logos/tech/postgresql.webp"
  },
  python: {
    key: "python",
    name: "Python",
    logoSource: "/static/logos/tech/python.webp"
  },
  aws: {
    key: "aws",
    name: "AWS",
    logoSource: "/static/logos/tech/aws.webp"
  },
  "aws-lambda": {
    key: "aws-lambda",
    name: "AWS Lambda",
    logoSource: "/static/logos/tech/aws-lambda.webp"
  },

  // DevOps & Version Control
  git: {
    key: "git",
    name: "Git",
    logoSource: "/static/logos/tech/git.webp"
  },
  github: {
    key: "github",
    name: "GitHub",
    logoSource: "/static/logos/tech/github.webp"
  },

  // Systems & Analytics
  vercel: {
    key: "vercel",
    name: "Vercel",
    logoSource: "/static/logos/tech/vercel.webp"
  },
  "google-analytics": {
    key: "google-analytics",
    name: "Google Analytics",
    logoSource: "/static/logos/tech/google-analytics.webp"
  },
  hotjar: {
    key: "hotjar",
    name: "Hotjar",
    logoSource: "/static/logos/tech/hotjar.webp"
  },
  hubspot: {
    key: "hubspot",
    name: "Hubspot",
    logoSource: "/static/logos/tech/hubspot.webp"
  },

  // Project Methodology / Tooling
  jira: {
    key: "jira",
    name: "Jira",
    logoSource: "/static/logos/tech/jira.webp"
  },

  // Languages
  csharp: {
    key: "csharp",
    name: "C# (.NET Core)",
    logoSource: "/static/logos/tech/c-sharp.webp"
  }
}


/** Helper function to create tech stack groups from item keys. */
const createTechStackGroup = (key: string, title: string, description: string, itemKeys: string[]): TechStackGroup => ({
  key,
  title,
  description,
  items: itemKeys.map(item => MASTER_TECH_ITEMS[item]).filter(Boolean)
});

/**
 * Home page featured projects (project carousel).
 */
export const HOME_FEATURED_PROJECTS: ProjectItem[] = [
  {
    name: "R Jukebox",
    client: "Personal Project",
    tags: ["Personal Passion Project", "React", "UI/UX Design"],
    image: "https://images.unsplash.com/photo-1656433031375-5042f5afe894?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2371"
  },
  {
    name: "Pocket Support",
    client: "Client Project",
    tags: ["Complex Logic/UI", "React", "State Management"],
    image: "https://images.unsplash.com/photo-1587466412525-87497b34fc88?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2673"
  },
  {
    client: "USE Software",
    href: "/projects/use-software-rebrand",
    image: "/static/images/projects/use-software-rebrand-hero.jpg",
    name: "USE Software 2026 Rebrand",
    tags: ["Design systems & theming", "Research-driven UX", "Accessible, performant UI"]
  }
];

/**
 * Home page "Toolkit" tech stack, grouped to mirror the card headings and body text.
 */
export const HOME_TOOLKIT_TECH_STACK: TechStackGroup[] = [
  createTechStackGroup(
    "front-end",
    "Front-End",
    "User interface tools, frameworks, and libraries I use to create beautiful, seamless experiences.",
    [
      "javascript",
      "typescript",
      "react",
      "expo",
      "react-native",
      "html5",
      "next-js",
      "chakra-ui",
      "vite",
      "gluestack-ui",
      "css3",
      "vercel"
    ]
  ),
  createTechStackGroup(
    "design",
    "Design",
    "Design tools and processes for creating high-fidelity prototypes and polished visual assets.",
    [
      "figma",
      "mobbin",
      "photoshop"
    ]
  ),
  createTechStackGroup(
    "back-end-data",
    "Back-End/Data",
    "Server-side technologies, databases, and cloud platforms that power scalable applications.",
    [
      "nodejs",
      "postgresql",
      "python",
      "aws",
      "aws-lambda",
      "csharp"
    ]
  ),
  createTechStackGroup(
    "methodology",
    "DevOps & Analytics",
    "Version control, project management, and analytics tools that streamline workflows and measure success.",
    [
      "jira",
      "git",
      "github",
      "google-analytics",
      "hotjar",
      "hubspot"
    ]
  )
];