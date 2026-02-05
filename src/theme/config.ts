import { createSystem, defaultConfig } from "@chakra-ui/react";
import { animations, colors, fonts, keyframes, semanticTokens, shadows, textStyles } from "./definitions";
import { buttonRecipe, cardSlotRecipe, dividerRecipe, fieldSlotRecipe, sectionSlotRecipe } from "./recipes";

/** 
 * The apps design system.
 * 
 * Here's a quick overview of how the system is structured to provide a performant and extensible styling system:
 * - Define the styling system configuration using the defineConfig function
 * - Create the styling engine using the createSystem function
 * - Pass the styling engine to the ChakraProvider component
 * 
 * @see {@link https://chakra-ui.com/docs/theming/overview} for an overview.
 * 
 * When any changes/additions are made to the system, we recommend using the Chakra CLI to generate theme typings for your tokens.
 * This is achived via the chakra-ui/cli;
 * @see {@link https://chakra-ui.com/docs/get-started/cli} for a guide.
 * 
 * To streamline this process, use the following npm script:
 * @example 
 * `yarn theme`
 */
const system = createSystem(defaultConfig, {
  globalCss: {
    body: {
      fontSize: "lg",
      fontFamily: "body",
      minHeight: "100%",
      background:
        "radial-gradient(ellipse 100% 80% at 90% 20%, rgba(37, 156, 154, 0.1) 0%, transparent 50%), "
        + "radial-gradient(ellipse 80% 60% at 10% 90%, rgba(27, 72, 138, 0.1) 0%, transparent 50%), "
        + "radial-gradient(ellipse 140% 100% at 50% 50%, rgba(50, 127, 127, 0.1) 0%, transparent 60%), "
        + "#090B0F",
      color: "text.primary",
      colorPalette: "neutral",
  
      /* Focus + accessibility */
      "--focus-ring-color": "colors.brand.400",
      "--focus-ring-shadow": "shadows.glow.focus",
  
      /* Glow primitives */
      "--glow-subtle": "shadows.glow.subtle",
      "--glow-interactive": "shadows.glow.interactive",
      "--glow-strong": "shadows.glow.strong"
    },
    "*::selection": {
      bg: "accent.secondary/100",
      color: "text.inverse"
    },
    html: {
      height: "100%"
    }
  },
  theme: {
    keyframes,
    recipes: {
      button: buttonRecipe,
      divider: dividerRecipe
    },
    semanticTokens,
    slotRecipes: {
      card: cardSlotRecipe,
      field: fieldSlotRecipe,
      section: sectionSlotRecipe
    },
    textStyles,
    tokens: {
      animations,
      colors,
      fonts,
      shadows
    }
  }
});

export { system };