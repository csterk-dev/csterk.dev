import { defineRecipe } from "@chakra-ui/react";

export const dividerRecipe = defineRecipe({
  className: "chakra-divider",

  base: {
    border: "none",
    height: "1px",
    bg: "accent.secondary",
    boxShadow: "glow.subtle"
  },

  variants: {
    variant: {
      subtle: {
        opacity: 0.6
      },

      accent: {
        opacity: 1,
        boxShadow: "glow.interactive"
      },

      strong: {
        opacity: 1,
        boxShadow: "glow.strong"
      }
    },

    orientation: {
      horizontal: {
        width: "100%",
        height: "1px"
      },
      vertical: {
        width: "1px",
        height: "100%"
      }
    }
  },

  defaultVariants: {
    variant: "subtle",
    orientation: "horizontal"
  }
});
