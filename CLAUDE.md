# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (requires Node.js)
npm run build     # Build static output to /dist
npm run preview   # Preview production build locally
```

There are no lint or test commands configured.

> Node.js is not installed on this machine by default. Install via `brew install node` before running any npm commands.

## Architecture

Astro 4 static site deployed to GitHub Pages at `https://spence3645.github.io/portfolio-site/`.

**Routing:**
- `src/pages/index.astro` — home (About, Skills, Contact sections)
- `src/pages/software/index.astro` — software project gallery
- `src/pages/software/[slug].astro` — dynamic project detail (SSG via `getStaticPaths`)
- `src/pages/gamedev/index.astro` and `[slug].astro` — same pattern for game dev

**Layout hierarchy:** `BaseLayout.astro` wraps all pages; `ProjectLayout.astro` extends it for detail pages.

**Components are split into:**
- `src/components/layout/` — Header, Footer
- `src/components/sections/` — full-width page sections (About, Skills, Contact)
- `src/components/ui/` — reusable atoms (ProjectCard, SkillBadge)

## Data & Content

Project data lives in `src/data/` as TypeScript arrays typed against `src/types/project.ts`. The `Project` interface requires: `slug`, `title`, `tagline`, `description`, `previewGif`, `techStack`, `order`, `published`, and optional `liveUrl`/`repoUrl`.

To add a project:
1. Add an entry to `src/data/software-projects.ts` or `src/data/gamedev-projects.ts` with `published: true`
2. Drop its preview GIF into `public/media/software/` or `public/media/gamedev/`

Skills data is in `src/data/skills.ts` as `SkillCategory[]`.

## BASE_URL

The site is deployed under `/portfolio-site/` (configured in `astro.config.mjs`). All internal `href` and `src` attributes must be prefixed with `import.meta.env.BASE_URL` so links resolve correctly in production.

## Styling

Tailwind CSS 3 with dark mode enforced via `class` strategy (the `dark` class is always present on `<html>`). A custom `accent` color (indigo palette) is defined in `tailwind.config.mjs` and used throughout for interactive elements.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which runs `npm run build` and deploys `/dist` to GitHub Pages. The repo's Pages setting must use **"GitHub Actions"** as the source (not "Deploy from branch").
