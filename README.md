# chainat.au

Personal portfolio for **www.chainat.au** — a Next.js 15 app deployed on [Vercel](https://vercel.com).

Application code lives under [`src/`](./src) (the Next.js `src` directory convention);
config files and `public/` are at the repo root.

## Develop

```bash
npm install
npm run dev      # http://localhost:3003
```

## Build

```bash
npm run build
npm run start    # serve the production build locally
```

## Deploy

Deployment is automatic via Vercel:

- Push to `master` → production deploy
- Push to any other branch → preview deploy

The Vercel project is zero-config (Root Directory = repository root).
