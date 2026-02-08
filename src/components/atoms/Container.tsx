import { Box, BoxProps } from "@chakra-ui/react";
import { forwardRef } from "react";

/** 
 * A simple box component that applies consistent inline padding.
 */
export const Container = forwardRef<HTMLDivElement, BoxProps>(({ children, ...props }, ref) => (
  <Box
    position="relative"
    px={{
      base: 8,
      md: 20
    }}
    ref={ref}
    {...props}
  >
    {children}
  </Box>
));

Container.displayName = "Container";