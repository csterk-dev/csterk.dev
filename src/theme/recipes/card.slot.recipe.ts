import { defineSlotRecipe } from "@chakra-ui/react";
import { cardAnatomy } from "@chakra-ui/react/anatomy";

export const cardSlotRecipe = defineSlotRecipe({
  className: "chakra-card",
  slots: cardAnatomy.keys(),

  base: {
    root: {
      "--card-padding": "1rem",
      display: "flex",
      flexDirection: "column",
      position: "relative",
      minWidth: "0",
      borderRadius: "l3",
      bg: "surface.raised",
      color: "text.primary",
      boxShadow: "glow.subtle",
      transitionProperty: "box-shadow, transform",
      transitionDuration: "fast"
    },

    header: {
      paddingInline: "var(--card-padding)",
      paddingTop: "var(--card-padding)",
      display: "flex",
      flexDirection: "column",
      gap: "1.5"
    },

    body: {
      padding: "var(--card-padding)",
      flex: "1",
      display: "flex",
      flexDirection: "column"
    },

    footer: {
      display: "flex",
      alignItems: "center",
      gap: "2",
      paddingInline: "var(--card-padding)",
      paddingBottom: "var(--card-padding)"
    },

    title: {
      fontWeight: "semibold"
    },

    description: {
      color: "text.secondary",
      fontSize: "sm"
    }
  },

  variants: {
    variant: {
      default: {},

      interactive: {
        root: {
          cursor: "pointer",
          _hover: {
            boxShadow: "glow.interactive",
            transform: "translateY(-1px)"
          },
          _focusVisible: {
            outline: "none",
            boxShadow: "glow.focus"
          }
        }
      },

      selected: {
        root: {
          boxShadow: "glow.strong"
        }
      }
    }
  },

  defaultVariants: {
    variant: "default"
  }
});
