# Design System: Neon Forerunner

## 1. Overview & Creative North Star

This design system is built on a **"Neon Forerunner"** north star: a dark, sci-fi HUD aesthetic where vibrant teal energy reads against deep obsidian neutrals. The interface should feel like a piece of advanced hardware brought to life — confident typography, generous breathing room, and accents that *glow* rather than merely *highlight*.

We avoid the generic "tech portfolio" look by leaning into:

- **Tonal depth over hard structure** — surfaces stack as layered glass (`canvas` -> `base` -> `raised`) rather than being separated by hairline borders.
- **Neon as semantics** — every interactive state has a corresponding `glow.*` shadow. Glow is not decoration; it encodes intent.
- **Editorial typography** — the geometric `Anta` for display moments, the humanistic `Open Sans` for everything you actually read.

Token names (`surface.raised`, `accent.primary`, `glow.subtle`, etc.) are the contract throughout this document. Raw hex values are provided for reference only; design should always consume the token.

---

## 2. Tone of Voice

Our communication mirrors our architecture: clean, purposeful, and technologically advanced. We speak with authority but without arrogance.

- **Technical** — precise terminology over buzzwords; clarity over fluff.
- **Innovative** — forward-looking, focused on the next evolution of the web.
- **Precise** — measured delivery; every word serves a specific structural purpose.
- **Authoritative** — grounds complex concepts in expert-level understanding.

Writing should feel like the UI reads: calm, spacious, confident. If a sentence could be cut without losing meaning, cut it. If a term could be more exact, make it so.

---

## 3. Color System

All colors are exposed as semantic tokens. **Always reach for a semantic token first** — raw palette tokens are a fallback for one-off art direction.

### 3.1 Raw Palettes

#### `neutral.*` — Cool obsidian scale (secondary color)


| Token           | Hex       | Typical role                         |
| --------------- | --------- | ------------------------------------ |
| `neutral.white` | `#FFFFFF` | Reserved; prefer `text.primary`      |
| `neutral.50`    | `#F5F7FA` | High-contrast text on light surfaces |
| `neutral.100`   | `#E4E8EE` | `text.primary`                       |
| `neutral.200`   | `#C9D0DA` | `text.secondary`                     |
| `neutral.300`   | `#A5AFBD` | Muted borders / emphasized neutrals  |
| `neutral.400`   | `#7E8896` | `text.muted`                         |
| `neutral.500`   | `#5E6672` | —                                    |
| `neutral.600`   | `#454C56` | —                                    |
| `neutral.700`   | `#2F343C` | `surface.border`, neutral solid      |
| `neutral.800`   | `#1E2228` | `surface.raised`                     |
| `neutral.900`   | `#12151A` | `surface.base`, `text.inverse`       |
| `neutral.950`   | `#090B0F` | `surface.canvas`                     |


#### `brand.*` — Futuristic teal scale (primary color)


| Token       | Hex       | Typical role                        |
| ----------- | --------- | ----------------------------------- |
| `brand.50`  | `#E6FFFB` | `brand.contrast`                    |
| `brand.100` | `#CFFAF4` | `accent.secondary`, `brand.muted`   |
| `brand.200` | `#9FF2E8` | `accent.hover`, `brand.subtle`      |
| `brand.300` | `#64E5D6` | `accent.active`, `brand.emphasized` |
| `brand.400` | `#2ED3C4` | `accent.primary`                    |
| `brand.500` | `#18BFB1` | `brand.solid`, `brand.focusRing`    |
| `brand.600` | `#0FA3A0` | `brand.fg`                          |
| `brand.700` | `#0B7E7D` | `accent.subtle`                     |
| `brand.800` | `#085E5D` | —                                   |
| `brand.900` | `#043C3B` | —                                   |
| `brand.950` | `#021F1F` | —                                   |


### 3.2 Semantic Tokens

Every role below has **exactly one** canonical token — if a token exists, it is the correct choice for its named purpose.

#### `surface.*` — Layered frosted glass


| Token            | Resolves to               | Role                                                  |
| ---------------- | ------------------------- | ----------------------------------------------------- |
| `surface.canvas` | `neutral.950` (`#090B0F`) | Page background; deepest plate; recessed wells        |
| `surface.base`   | `neutral.900` (`#12151A`) | Default working surface between `canvas` and `raised` |
| `surface.raised` | `neutral.800` (`#1E2228`) | Cards, modals, elevated modules                       |
| `surface.border` | `neutral.700` (`#2F343C`) | When a structural border is unavoidable               |


**Layering principle:** stack `canvas -> base -> raised`. A `surface.raised` card placed on `surface.base` reads as elevated without needing a shadow; add `glow.subtle` to make it feel powered.

#### `text.*`


| Token            | Resolves to               | Role                                                       |
| ---------------- | ------------------------- | ---------------------------------------------------------- |
| `text.primary`   | `neutral.100` (`#E4E8EE`) | Body & headings on dark surfaces (use this, not `#FFFFFF`) |
| `text.secondary` | `neutral.200` (`#C9D0DA`) | Supporting copy, descriptions                              |
| `text.muted`     | `neutral.400` (`#7E8896`) | Tertiary info, metadata, captions, disabled labels         |
| `text.inverse`   | `neutral.900` (`#12151A`) | Foreground when sitting on a bright `accent.primary` fill  |


#### `accent.*` — Brand application & interactive states

One group covers both the accent color and its interactive states, so there is no second place to look.


| Token              | Resolves to             | Role                                                 |
| ------------------ | ----------------------- | ---------------------------------------------------- |
| `accent.primary`   | `brand.400` (`#2ED3C4`) | Primary CTAs, focus indicators, key emphasis         |
| `accent.secondary` | `brand.100` (`#CFFAF4`) | Secondary highlights, dividers, decorative HUD lines |
| `accent.subtle`    | `brand.700` (`#0B7E7D`) | Low-energy accent borders                            |
| `accent.hover`     | `brand.200` (`#9FF2E8`) | Hover fill / text color for any accent element       |
| `accent.active`    | `brand.300` (`#64E5D6`) | Pressed / active state for any accent element        |


### 3.3 Color Usage Rules

- **Do** use semantic tokens (`surface.raised`, `text.primary`, `accent.primary`) — never hardcode hex.
- **Do** anchor pages with the global teal-radial gradient on `#090B0F`; do not redefine the page background.
- **Don't** use `#FFFFFF` for body text — use `text.primary` (`#E4E8EE`) for premium contrast.
- **Don't** invent intermediate surfaces. The ladder is exactly `canvas -> base -> raised`.

---

## 4. Typography

### 4.1 Font Families


| Token           | `font-family`           | Use                              |
| --------------- | ----------------------- | -------------------------------- |
| `fonts.heading` | `Anta, sans-serif`      | All display & headline copy      |
| `fonts.body`    | `Open Sans, sans-serif` | All body, UI, and long-form copy |


`Anta` is the **soul** of the brand — geometric, confident, technical. `Open Sans` is the **logic** — neutral, calm, readable.

### 4.2 Text Styles


| Style                 | `font-family`    | `font-size` (mobile / md+)                       | `font-weight` | `line-height` | Use                                  |
| --------------------- | ---------------- | ------------------------------------------------ | ------------- | ------------- | ------------------------------------ |
| `heading/section`     | `heading` (Anta) | `4xl (2.25rem / 36px)` / `6xl (3.75rem / 60px)`  | `700` (bold)  | `normal`      | Top-level section titles             |
| `heading/sub-section` | `heading` (Anta) | `3xl (1.875rem / 30px)` / `4xl (2.25rem / 36px)` | `700` (bold)  | `moderate`    | Sub-section, group, and modal titles |


### 4.3 Typography Rules

- **Do** pair a large `heading/section` with a `text.secondary` `font-size: lg (1.125rem / 18px)` paragraph for editorial hierarchy.
- **Do** keep heading line-height generous; `heading/section` uses `normal` deliberately.
- **Don't** use `Anta` for paragraphs longer than a sentence — it is a display face and will fatigue readers.
- **Don't** introduce ad-hoc font sizes for headings; extend the named text styles instead.

---

## 5. Elevation & Glow

The system has **no traditional drop shadows**. Elevation is expressed exclusively through tonal stacking plus neon glow.


| Token              | `box-shadow` value (teal `#2ED3C4`)                              | Intent                                                                                |
| ------------------ | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `glow.subtle`      | `0 0 4px rgba(46,211,196,0.35)`                                  | Passive ambient energy. Decorative HUD lines, dividers, idle non-interactive accents. |
| `glow.interactive` | `0 0 8px rgba(46,211,196,0.55), 0 0 16px rgba(46,211,196,0.35)`  | Default resting state for any interactive element — buttons, links, selectable cards. |
| `glow.hover`       | `0 0 12px rgba(46,211,196,0.65), 0 0 24px rgba(46,211,196,0.45)` | Hover proximity — reinforces interactivity without overwhelming the layout.           |
| `glow.focus`       | `0 0 14px rgba(46,211,196,0.75), 0 0 28px rgba(46,211,196,0.55)` | Keyboard `:focus-visible`. Accessibility-critical; never suppress.                    |
| `glow.strong`      | `0 0 18px rgba(46,211,196,0.85), 0 0 36px rgba(46,211,196,0.65)` | Hero, selected, or featured moments. Reserved for one element per view.               |


### Layering Principle

1. Page: `surface.canvas` with the global radial teal gradient.
2. Section background: `surface.base`.
3. Card / module: `surface.raised` + `box-shadow: glow.subtle`.
4. Interactive lift on hover: bump `box-shadow` to `glow.interactive` (and optionally `transform: translateY(-1px)`).
5. Focus: swap `box-shadow` to `glow.focus`.

---

## 6. Logo Construction

The mark is a **wordmark**, not an iconmark. The `csterk.dev` string rendered in Anta *is* the logo.


| Property                | Value                                                     |
| ----------------------- | --------------------------------------------------------- |
| Mark type               | Wordmark (no icon)                                        |
| Wordmark text           | `csterk.dev` & sterk.labs                                 |
| `font-family`           | Anta (display)                                            |
| `font-size`             | `2xl (1.5rem / 24px)`                                     |
| `font-weight`           | `500` (medium, inherited from button base)                |
| `color` (rest)          | `accent.secondary` (`#CFFAF4`)                            |
| `color` (`:hover`)      | `accent.hover` (`#9FF2E8`)                                |
| `box-shadow` (`:hover`) | `glow.subtle`                                             |
| `background-color`      | `transparent`                                             |
| Container               | `tertiary` button, left-aligned in a 2-column grid header |
| Header `min-height`     | `64px`                                                    |
| Header `padding-inline` | `4 (1rem / 16px)` mobile, `20 (5rem / 80px)` md+          |
| Header `padding-block`  | `3 (0.75rem / 12px)`                                      |


Narrative notes:

- Geometric, technical identity comes from pairing Anta with the `.dev` or `.labs` technical-domain conceit — the filename feels like a coordinate.
- No iconmark, no decorative flourish — the wordmark stands alone.
- The subtle teal glow on hover reinforces that the mark is interactive (it links home).
- The logo sits on a glassmorphic header: `background-color: transparent` and `border-color: transparent` until the user scrolls past the hero, then transitions to `background-color: surface.canvas` at 40% alpha with `backdrop-filter: blur(12px)` and `border-bottom: 1px solid surface.border`.

---

## 7. Components

Only Button, Card, and Divider are documented here — they form the interactive foundation. Other primitives (inputs, sections) compose from the tokens above.

### 7.1 Button

#### Base


| CSS property                    | Value                           |
| ------------------------------- | ------------------------------- |
| `display`                       | `inline-flex`                   |
| `align-items`                   | `center`                        |
| `justify-content`               | `center`                        |
| `gap`                           | `2 (0.5rem / 8px)`              |
| `font-weight`                   | `500` (medium)                  |
| `border-radius`                 | `md (0.375rem / 6px)`           |
| `transition-property`           | `box-shadow, background, color` |
| `transition-duration`           | `fast`                          |
| `user-select`                   | `none`                          |
| `outline` (`:focus-visible`)    | `none`                          |
| `box-shadow` (`:focus-visible`) | `glow.focus`                    |
| `opacity` (`:disabled`)         | `0.5`                           |
| `cursor` (`:disabled`)          | `not-allowed`                   |
| `box-shadow` (`:disabled`)      | `none`                          |


#### Variants


| Variant             | `background-color` | `color`            | `border`                  | `box-shadow` (rest) | `:hover`                                                       | `:active`                 |
| ------------------- | ------------------ | ------------------ | ------------------------- | ------------------- | -------------------------------------------------------------- | ------------------------- |
| `primary` (default) | `accent.primary`   | `text.inverse`     | —                         | —                   | `background-color: accent.hover`, `box-shadow: glow.hover`     | `box-shadow: glow.subtle` |
| `secondary`         | `surface.raised`   | `accent.primary`   | `1px solid accent.subtle` | `glow.subtle`       | `border-color: accent.primary`, `box-shadow: glow.interactive` | `box-shadow: glow.subtle` |
| `tertiary`          | `transparent`      | `accent.secondary` | —                         | —                   | `color: accent.hover`, `box-shadow: glow.subtle`               | `color: accent.active`    |


#### Sizes


| Size           | `padding-inline`     | `padding-block`         | `font-size`            |
| -------------- | -------------------- | ----------------------- | ---------------------- |
| `sm`           | `3 (0.75rem / 12px)` | `1.5 (0.375rem / 6px)`  | `sm (0.875rem / 14px)` |
| `md` (default) | `4 (1rem / 16px)`    | `2 (0.5rem / 8px)`      | `md (1rem / 16px)`     |
| `lg`           | `5 (1.25rem / 20px)` | `2.5 (0.625rem / 10px)` | `lg (1.125rem / 18px)` |


#### Usage rules

- Use `**primary`** for the single most important action in any view.
- Use `**secondary`** when offering an alternative path next to a primary CTA. It is the **only** variant that intentionally carries a 1px border, and the border is itself accented.
- Use `**tertiary`** for low-emphasis text-style buttons inline with copy or in dense toolbars.
- Never remove the `:focus-visible` glow — it is the accessibility contract.

### 7.2 Card

A slotted component with `root`, `header`, `body`, `footer`, `title`, and `description` slots.

#### Slot base properties


| Slot        | CSS property                       | Value                                                                                         |
| ----------- | ---------------------------------- | --------------------------------------------------------------------------------------------- |
| root        | `display`                          | `flex`                                                                                        |
| root        | `flex-direction`                   | `column`                                                                                      |
| root        | `position`                         | `relative`                                                                                    |
| root        | `min-width`                        | `0`                                                                                           |
| root        | `border-radius`                    | `l3 (0.75rem / 12px)`                                                                         |
| root        | `background-color`                 | `surface.raised`                                                                              |
| root        | `color`                            | `text.primary`                                                                                |
| root        | `box-shadow`                       | `glow.subtle`                                                                                 |
| root        | `transition-property`              | `box-shadow, transform`                                                                       |
| root        | `transition-duration`              | `fast`                                                                                        |
| —           | `--card-padding`                   | `1rem / 16px` (CSS custom property; override per consumer to scale all slot padding together) |
| header      | `padding-inline`, `padding-top`    | `var(--card-padding)`                                                                         |
| header      | `display`                          | `flex`                                                                                        |
| header      | `flex-direction`                   | `column`                                                                                      |
| header      | `gap`                              | `1.5 (0.375rem / 6px)`                                                                        |
| body        | `padding`                          | `var(--card-padding)`                                                                         |
| body        | `flex`                             | `1`                                                                                           |
| body        | `display`                          | `flex`                                                                                        |
| body        | `flex-direction`                   | `column`                                                                                      |
| footer      | `display`                          | `flex`                                                                                        |
| footer      | `align-items`                      | `center`                                                                                      |
| footer      | `gap`                              | `2 (0.5rem / 8px)`                                                                            |
| footer      | `padding-inline`, `padding-bottom` | `var(--card-padding)`                                                                         |
| title       | `font-weight`                      | `600` (semibold)                                                                              |
| description | `color`                            | `text.secondary`                                                                              |
| description | `font-size`                        | `md (1rem / 16px)`                                                                            |


#### Variants


| Variant             | `:hover`                                                                         | `:focus-visible`                          |
| ------------------- | -------------------------------------------------------------------------------- | ----------------------------------------- |
| `default` (default) | —                                                                                | —                                         |
| `interactive`       | `box-shadow: glow.interactive`, `transform: translateY(-1px)`                    | `outline: none`, `box-shadow: glow.focus` |
| `clickable`         | `cursor: pointer`, `box-shadow: glow.interactive`, `transform: translateY(-1px)` | `outline: none`, `box-shadow: glow.focus` |
| `selected`          | `box-shadow: glow.strong` (persistent, not state-based)                          | —                                         |


#### Usage rules

- Nest a `clickable` card on `surface.base` so the `surface.raised` background reads as a distinct layer.
- Pair `description` with `text.secondary` (the slot handles this) — do not override to `text.primary` for visual weight; use `title` instead.
- Do not apply hard borders to cards — depth comes from background contrast plus `glow.subtle`.
- Do not stack `selected` and `clickable` glows — `selected` wins.

### 7.3 Divider

#### Base


| CSS property       | Value              |
| ------------------ | ------------------ |
| `border`           | `none`             |
| `height`           | `1px`              |
| `background-color` | `accent.secondary` |
| `box-shadow`       | `glow.subtle`      |


#### Variants


| Variant            | `opacity` | `box-shadow`              |
| ------------------ | --------- | ------------------------- |
| `subtle` (default) | `0.6`     | `glow.subtle` (inherited) |
| `accent`           | `1`       | `glow.interactive`        |
| `strong`           | `1`       | `glow.strong`             |


#### Orientations


| Orientation            | `width` | `height` |
| ---------------------- | ------- | -------- |
| `horizontal` (default) | `100%`  | `1px`    |
| `vertical`             | `1px`   | `100%`   |


Dividers are **never** a flat neutral hairline — the glow is what makes them feel powered.

---

## 8. Spacing, Rhythm & The Breathe Rule

Spacing uses a `4px` base scale. Every numeric spacing token multiplies that base: `n` = `n × 4px`. Always prefer scale tokens over arbitrary pixel values.

### 8.1 Vertical Momentum Scale

These are the canonical vertical rhythms. Any new section should use one of them.


| Role                                  | Token | Computed                             |
| ------------------------------------- | ----- | ------------------------------------ |
| Page section `padding-block` (mobile) | `10`  | `2.5rem / 40px`                      |
| Page section `padding-block` (md+)    | `24`  | `6rem / 96px`                        |
| Header-to-body `margin-top` (mobile)  | `3`   | `0.75rem / 12px`                     |
| Header-to-body `margin-top` (md+)     | `5`   | `1.25rem / 20px`                     |
| Section footer offset (mobile)        | —     | `32px`                               |
| Section footer offset (md+)           | —     | `64px`                               |
| Card internal padding                 | —     | `1rem / 16px` (via `--card-padding`) |
| Related-element gap                   | `2`   | `0.5rem / 8px`                       |
| Distinct-section gap                  | `4`   | `1rem / 16px`                        |


### 8.2 The Breathe Rule

Every major section should be able to stand alone as a single slide in a presentation.

- If a section feels cramped, increase `padding-block` on the next breakpoint **before** reducing content.
- Whitespace is a functional element, not a gap — it signals importance and invites focus.
- When in doubt, breathe more. The aesthetic is editorial, not dense.

---

## 9. Do's & Don'ts

### Do

- Consume semantic tokens (`surface.`*, `text.`*, `accent.*`) — every role has exactly one canonical token.
- Lean on `glow.*` shadows to express interactivity — it is the brand's signature.
- Stack surfaces (`canvas -> base -> raised`) instead of drawing borders to separate regions.
- Use the Vertical Momentum Scale for section rhythm so every page inherits the same pacing.
- Use the `selected` card variant for a single high-energy moment per view.

### Don't

- Invent token names that do not exist. The full semantic set is: `surface.{canvas,base,raised,border}`, `text.{primary,secondary,muted,inverse}`, `accent.{primary,secondary,subtle,hover,active}`, `glow.{subtle,interactive,hover,focus,strong}`, plus the `brand.*` / `neutral.*` palette shapes. That is the entire vocabulary.
- Use `#FFFFFF` for text — `text.primary` (`#E4E8EE`) is the correct contrast.
- Add `1px solid` borders to general containers. The only intentional borders in the system are the `secondary` button (accented) and the glassmorphic header `border-bottom`.
- Swap `glow.*` shadows for soft black drop shadows — the system has no `box-shadow` outside the glow set.
- Apply `Anta` to body copy.
- Override `:focus-visible` — `glow.focus` is the accessibility contract.

