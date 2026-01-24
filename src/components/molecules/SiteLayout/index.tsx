import { HeaderNavbar } from "./HeaderNavbar";
import { Box, BoxProps } from "@chakra-ui/react";
import { FC } from "react";
import { Footer } from "./Footer";

/** 
 * The site layout component ensures a consistent layout is rendered across different pages for the header/navbar & footer.
 */
export const SiteLayout: FC<BoxProps> = ({ children, ...props }) => (
  <Box position="relative" {...props}>

    <HeaderNavbar position="sticky" top={0} zIndex="sticky" />

    <Box as="main" id="content">
      {children}
    </Box>

    <Footer />

  </Box>
)