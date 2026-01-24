import { defineSemanticTokens } from "@chakra-ui/react";

/**
 * Brand palette
 * Used for primary actions, emphasis, highlights, and brand moments
 */
const brandColors = defineSemanticTokens.colors({
  solid: { value: "{colors.brand.500}" },
  contrast: { value: "{colors.brand.50}" },
  fg: { value: "{colors.brand.600}" },
  muted: { value: "{colors.brand.100}" },
  subtle: { value: "{colors.brand.200}" },
  emphasized: { value: "{colors.brand.300}" },
  focusRing: { value: "{colors.brand.500}" }
});

/**
 * Neutral palette
 * Used for surfaces, default UI, and non-brand emphasis
 */
const neutralColors = defineSemanticTokens.colors({
  solid: { value: "{colors.neutral.700}" },
  contrast: { value: "{colors.neutral.50}" },
  fg: { value: "{colors.neutral.800}" },
  muted: { value: "{colors.neutral.300}" },
  subtle: { value: "{colors.neutral.200}" },
  emphasized: { value: "{colors.neutral.300}" },
  focusRing: { value: "{colors.neutral.400}" }
});

/**
 * Semantic surface colors
 * Optimised for dark sci-fi UI with neon accents
 */
const surfaceColors = defineSemanticTokens.colors({
  canvas: { value: "{colors.neutral.950}" },
  base: { value: "{colors.neutral.900}" },
  raised: { value: "{colors.neutral.800}" },
  sunken: { value: "{colors.neutral.950}" },
  border: { value: "{colors.neutral.700}" },
  divider: { value: "{colors.neutral.800}" }
});

/**
 * Semantic text colors
 */
const textColors = defineSemanticTokens.colors({
  primary: { value: "{colors.neutral.100}" },
  secondary: { value: "{colors.neutral.300}" },
  muted: { value: "{colors.neutral.400}" },
  disabled: { value: "{colors.neutral.500}" },
  inverse: { value: "{colors.neutral.900}" }
});

/**
 * Semantic accent colors
 */
const accentColors = defineSemanticTokens.colors({
  primary: { value: "{colors.brand.500}" },
  secondary: { value: "{colors.brand.300}" },
  subtle: { value: "{colors.brand.700}" },
  muted: { value: "{colors.brand.800}" }
});

/**
 * Interactive state colors
 */
const interactiveColors = defineSemanticTokens.colors({
  idle: { value: "{colors.brand.500}" },
  hover: { value: "{colors.brand.400}" },
  active: { value: "{colors.brand.300}" },
  focus: { value: "{colors.brand.400}" }
});

/**
 * Glow and emphasis state colors
 */
const stateColors = defineSemanticTokens.colors({
  glow: { value: "{colors.brand.400}" },
  glowStrong: { value: "{colors.brand.300}" }
});

/**
 * Semantic tokens provided to Chakra provider.
 */
export const semanticTokens = defineSemanticTokens({
  colors: {
    accent: accentColors,
    brand: brandColors,
    interactive: interactiveColors,
    neutral: neutralColors,
    state: stateColors,
    surface: surfaceColors,
    text: textColors
  }
});
