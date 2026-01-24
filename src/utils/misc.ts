import { useMediaQuery } from "@chakra-ui/react";
import { SITE_HOME_URL } from "@constants";


/**
 * Custom React hook using Chakra UI's useMediaQuery to return a SSR-friendly media query state. 
 * Will return false on the server, and re-evaluate on the client side.
 * @link [useMediaQuery docs](https://chakra-ui.com/docs/hooks/use-media-query)
 * 
 * @param query - A single media query or multiple media queries individually to evaluate.
 * @returns {Boolean[]} Returns an array of booleans, indicating whether the given query matches or queries match.
 */
export function useSSRMediaQuery(query: string[]) {
  return useMediaQuery(query, {
    ssr: true,
    fallback: [false]
  });
}



/**
 * Determines if a navigation item should be marked as active based on the current pathname
 * @param currentPath - The current router pathname
 * @param navItemHref - The navigation item's href
 * @returns boolean indicating if the nav item is active
 */
export const isNavItemActive = (currentPath: string, navItemHref: string): boolean => {
  // Exact match for home page
  if (currentPath === SITE_HOME_URL && navItemHref === SITE_HOME_URL) {
    return true;
  }
  
  // For non-home pages, check if current path starts with the nav href
  // This ensures /projects/example-1 matches /projects but not /services-something
  if (navItemHref !== SITE_HOME_URL) {
    return currentPath === navItemHref || currentPath.startsWith(`${navItemHref}/`);
  }
  
  return false;
};