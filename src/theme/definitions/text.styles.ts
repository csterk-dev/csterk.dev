import { defineTextStyles } from "@chakra-ui/react";

/**
 * Properties defined in a text style
 * - Font family, weight, and size
 * - Line height
 * - Letter spacing
 * - Text decoration (strikethrough and underline)
 * - Text transform (uppercase, lowercase, and capitalization)
 * 
 * @note Ideally, try to avoid semantic color token use in text styles to ensure for greater usability. 
 * However, this can be ignored when targeting specific text elements that have an associated `textStyle` from `react-components`.
 */
export const textStyles = defineTextStyles({
  "heading/section": {
    description: "Used for section headings",
    value: {
      fontSize: {
        base: "4xl",
        md: "6xl"
      },
      fontWeight: "bold",
      lineHeight: "normal",
      fontStyle: "normal",
      fontFamily: "heading"
    }
  },
  "heading/sub-section": {
    description: "Used for section headings",
    value: {
      fontSize: {
        base: "3xl",
        md: "4xl"
      },
      fontWeight: "bold",
      lineHeight: "moderate",
      fontStyle: "normal",
      fontFamily: "heading"
    }
  },
  "heading/modal": {
    description: "Used for modal titles",
    value: {
      fontSize: {
        base: "3xl",
        md: "4xl"
      },
      fontWeight: "bold",
      lineHeight: "moderate",
      fontStyle: "normal",
      fontFamily: "heading"
    }
  }
});