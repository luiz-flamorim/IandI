# I&I Innovation Consultancy — website

Vanilla HTML/CSS/JS one-page site. No build step, no framework, no package manager — files are served as-is.

## Structure

- `index.html` — the whole page, single file
- `css/index.css` — entry point, `@import`s the rest in this order: `normalize.css`, `main.css`, `navigation.css`
- `css/main.css` — page sections and typography
- `css/navigation.css` — the sticky nav bar (checkbox-driven mobile menu)
- `js/quotes.js` — Glide.js carousel init for the testimonials section (loaded)
- Third-party: Glide.js (CDN) for the quotes carousel, Material Symbols (CDN) for the menu icon

## Conventions (apply when writing or editing CSS/HTML here)

- No nested selectors (no `.parent { .child {} }` CSS nesting) — one selector per rule, flat.
- Don't mix styling a native tag (`p`, `section`, `article`, `h2`...) with styling a class on the same kind of element — pick one. Prefer classes for anything that isn't truly global/universal typography.
- No `:first-child` / `:last-child` / `:nth-child` for layout decisions — add an explicit class instead.
- No new `id` attributes for styling or one-off layout tweaks. `id`s are acceptable only for genuine behavioral hooks (e.g. the `#menu` checkbox driving the mobile nav) or anchor targets (`#services`, `#contact`, etc.).
- Class names: kebab-case, consistently (not snake_case, not mixed).
- Keep CSS for related/adjacent HTML sections physically close together in the stylesheet.
- Don't leave dead code (unused files, commented-out blocks, unreferenced classes) — remove it rather than commenting it out.

## Known future work

The CSS is planned to be split into one file per section/component in a later pass. Keep section boundaries clean (comments already mark them) so that split is easy when we get there — don't do it yet unless asked.
