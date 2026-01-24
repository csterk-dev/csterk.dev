# Definitions Directory Structure

Use this directory to store any design system definitions that are used to modify or extend the theme config.

A definition can include tokens (color or semantic), text and layer styles, and any other CSS variables, or stylesheets.

## 🖊️ Definitions naming conventions
Examples of a few definitions below:
- Text styles - E.g. `text.styles.ts`
- Layer styles - E.g. `layer.styles.ts`
- Tokens - E.g. `colors.tokens.ts`
- Semantic tokens - E.g. `semantic.tokens.ts`

You can also group definitions pertaining to a particular feature in their own object within the `name.tokens.ts` file for easy access.

## 📖 References
[Styling concepts, composition concepts, jsx style props](https://v2.chakra-ui.com/docs/styled-system/customize-theme)
[Default style system theme, recipes and tokens](https://v2.chakra-ui.com/docs/styled-system/theme)