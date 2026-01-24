import { defineRecipe } from "@chakra-ui/react";

export const buttonRecipe = defineRecipe({
  className: "chakra-button",

  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "2",
    fontWeight: "medium",
    borderRadius: "md",
    transitionProperty: "box-shadow, background, color",
    transitionDuration: "fast",
    userSelect: "none",
    _focusVisible: {
      outline: "none",
      boxShadow: "glow.focus"
    },
    _disabled: {
      opacity: 0.5,
      cursor: "not-allowed",
      boxShadow: "none"
    }
  },

  variants: {
    variant: {
      primary: {
        bg: "accent.primary",
        color: "text.inverse",
        boxShadow: "glow.interactive",

        _hover: {
          bg: "interactive.hover",
          boxShadow: "glow.hover"
        },

        _active: {
          boxShadow: "glow.subtle"
        }
      },

      secondary: {
        bg: "surface.raised",
        color: "accent.primary",
        borderWidth: "1px",
        borderColor: "accent.subtle",
        boxShadow: "glow.subtle",

        _hover: {
          borderColor: "accent.primary",
          boxShadow: "glow.interactive"
        },

        _active: {
          boxShadow: "glow.subtle"
        }
      },

      tertiary: {
        bg: "transparent",
        color: "accent.primary",

        _hover: {
          color: "interactive.hover",
          boxShadow: "glow.subtle"
        },

        _active: {
          color: "interactive.active"
        }
      }
    },

    size: {
      sm: {
        px: "3",
        py: "1.5",
        fontSize: "sm"
      },
      md: {
        px: "4",
        py: "2",
        fontSize: "md"
      },
      lg: {
        px: "5",
        py: "2.5",
        fontSize: "lg"
      }
    }
  },

  defaultVariants: {
    variant: "primary",
    size: "md"
  }
});
