# Portfolio 2026

React/Vite implementation of the Portfolio 2026 Figma mockup. The existing page, layout, router and Sass architecture is preserved; shared visual patterns live in reusable components and project content is data-driven.

## Commands

- `npm run dev` starts the local site.
- `npm run check` validates project data and assets, lints the code and creates a production build.
- `npm run preview` serves the production build locally.

## Fonts

Manrope is bundled through `@fontsource-variable/manrope`. Headings use Mango Grotesque first, with Impact/Arial Narrow fallbacks. Add the licensed Mango Grotesque webfont to the project and declare it in the font settings when it is available.

## Contact form

Set `VITE_CONTACT_ENDPOINT` in a local `.env` file to post messages to a form provider. If it is not set, the form opens the visitor's email application with the completed message.

## Branch workflow

The implementation is assembled on `integration/portfolio-v1` from focused feature branches for foundations, shared UI, pages, motion and quality automation.
