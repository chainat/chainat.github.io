# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a **GitHub Pages deployment repository** for the personal portfolio site at `www.chainat.au`.

The root folder contains only the **statically exported build output** of a Next.js application.

- Domain: `www.chainat.au` (configured via `CNAME`)
- Deployed automatically via GitHub Pages from the `master` branch
- `.nojekyll` disables Jekyll processing so `_next/` assets are served correctly

## Source code

The Next.js source lives in the `source/` folder. It uses Next.js 15 with the App Router, TypeScript, and static export (`output: 'export'`).

## Commands

Run from the `source/` directory:

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Build and export static site to source/out/
npm run lint     # Run ESLint
```

## Architecture

**`source/`** — Next.js 15 + TypeScript project

- `app/layout.tsx` — Root layout with `<html>`, `<body>`, and site-wide metadata
- `app/page.tsx` — Single-page portfolio; assembles all section components
- `app/globals.css` — All styles using CSS custom properties (no CSS Modules); defines design tokens via `:root`
- `components/` — One file per page section: `Nav`, `Hero`, `About`, `Impact`, `WhatIDo`, `Projects`, `Career`, `Tech`, `Contact`, `Footer`

**Design system** (in `globals.css`):
- Teal/cyan accent palette via CSS variables (`--accent`, `--accent2`, `--accent-light`, etc.)
- Cards use `var(--shadow)` and `var(--shadow-hover)` with `translateY(-1px)` hover lift
- Section data (stats, timeline, tech chips, project items) is kept as typed arrays inside each component file — no external CMS or data layer

**Deployment workflow:**
1. Edit components in `source/`
2. `npm run build` → produces `source/out/`
3. Copy `source/out/` contents to the repo root (replacing `*.html` and `_next/`)
4. Commit and push to `master` to deploy via GitHub Pages
