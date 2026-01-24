import { defineTokens } from "@chakra-ui/react";

/*
 * Semantic neon glow shadows
 * Encodes intent + usage directly into the design system
 */
export const shadows = defineTokens.shadows({
  glow: {
    subtle: {
      description:
        "Passive energy glow. Used for non-interactive accents and ambient geometry such as dividers, HUD lines, and decorative Forerunner-style elements.",
      value: "0 0 4px rgba(46, 211, 196, 0.35)"
    },

    interactive: {
      description:
        "Indicates an interactive element. Used for clickable components such as buttons, links, icon buttons, and selectable cards in their default state.",
      value:
        "0 0 8px rgba(46, 211, 196, 0.55), 0 0 16px rgba(46, 211, 196, 0.35)"
    },

    hover: {
      description:
        "Represents user intent and proximity. Applied on hover states to reinforce interactivity and guide attention without overwhelming the layout.",
      value:
        "0 0 12px rgba(46, 211, 196, 0.65), 0 0 24px rgba(46, 211, 196, 0.45)"
    },

    focus: {
      description:
        "Accessibility-focused glow. Used for focus-visible states to clearly indicate keyboard focus while maintaining the sci-fi visual language.",
      value:
        "0 0 14px rgba(46, 211, 196, 0.75), 0 0 28px rgba(46, 211, 196, 0.55)"
    },

    strong: {
      description:
        "High-energy hero glow. Reserved for active, selected, or featured elements such as selected cards, primary CTAs, or key visual moments.",
      value:
        "0 0 18px rgba(46, 211, 196, 0.85), 0 0 36px rgba(46, 211, 196, 0.65)"
    }
  }
});
