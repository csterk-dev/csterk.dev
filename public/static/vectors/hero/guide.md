# Hero line vectors

These SVG files are **not used directly** in the app. They are kept in the repo as a **reference** for the path of each hero line.

The actual lines are drawn in [`Hero.tsx`](../../../src/components/atoms/Hero.tsx) using inline `<path>` elements. The `d=""` attribute on each path is taken from the corresponding SVG here (e.g. `hero-line-01.svg` → Line 1). If you change or add hero line artwork, update the SVG files as the source of truth, then copy the path data into the Hero component.
