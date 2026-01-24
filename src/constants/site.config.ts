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
export const SOCIALS_LINKEDIN_URL = "https://www.linkedin.com/chris-sterk";
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