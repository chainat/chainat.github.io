# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is the personal portfolio site at `www.chainat.au`, deployed on **Vercel**.

It is a standard Next.js 15 project rooted at the repository root, deployed
natively by Vercel (server-rendered / statically optimized as appropriate — no
static `export`). Application code follows the Next.js **`src` directory**
convention: `app/` and `components/` live under `src/`, while config files and
`public/` stay at the repo root.

- Domain: `www.chainat.au` (configured in the Vercel project's Domains settings)
- Deployed automatically by Vercel on every push (production = `master`; other
  branches get preview deployments)

## Vercel project settings

The project is zero-config:

- **Root Directory**: `.` (repository root — default)
- **Framework Preset**: Next.js (auto-detected)
- Build Command / Output Directory / Install Command: leave as Vercel defaults

Next.js auto-detects `src/app`, so no extra configuration is required.

## Commands

Run from the repository root:

```bash
npm install      # Install dependencies
npm run dev      # Start dev server at localhost:3003
npm run build    # Production build
npm run start    # Serve the production build locally
npm run lint     # Run ESLint
```

## Architecture

Next.js 15 + TypeScript, App Router, React 19.

- `next.config.ts`, `package.json`, `tsconfig.json`, `public/` — at the repo root
- `public/` — static assets served from the site root (e.g. `/icon.png`)
- `src/app/layout.tsx` — Root layout with `<html>`, `<body>`, and site-wide metadata
- `src/app/page.tsx` — Single-page portfolio; assembles all section components
- `src/app/globals.css` — All styles using CSS custom properties (no CSS Modules); defines design tokens via `:root`
- `src/components/` — One file per page section: `Nav`, `Hero`, `About`, `Impact`, `WhatIDo`, `Projects`, `Career`, `Tech`, `Contact`, `Footer`, plus `ThemeToggle` and `UserTracking`
- The `@/*` TypeScript path alias maps to `./src/*`

**Design system** (in `globals.css`):
- Teal/cyan accent palette via CSS variables (`--accent`, `--accent2`, `--accent-light`, etc.)
- Cards use `var(--shadow)` and `var(--shadow-hover)` with `translateY(-1px)` hover lift
- Section data (stats, timeline, tech chips, project items) is kept as typed arrays inside each component file — no external CMS or data layer

**Deployment workflow:**
1. Edit components in `src/`
2. Commit and push
3. Vercel builds and deploys automatically (preview for branches, production for `master`)

## Source folder

`source/` was renamed to `src/` and the project was migrated from a GitHub Pages
static export (build output committed to the repo root) to native Vercel hosting.
