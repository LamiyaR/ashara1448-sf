# CLAUDE.md — Ashara Mubaraka 1448 — SF Bay Area Relay Center

## Project overview
Single-page Next.js 15 website serving as the canonical travel/accommodation/info source for mumineen mehmano attending Ashara Mubaraka 1448 at Al Masjid Al Mohammedi, Fremont, hosted by Anjuman-e-Najmi (San Francisco Jamaat). Mirrors the Orange County 1448 relay site in structure, adapted for SF Bay Area. Deployed on Vercel.

## Tech stack (do not substitute)
- **Framework:** Next.js 15 App Router, React 19, TypeScript 5
- **Styling:** Tailwind CSS v4
- **UI:** shadcn/ui
- **Animation:** Framer Motion (restrained, purposeful only)
- **Icons:** Lucide React
- **Dates:** date-fns; custom Hijri util
- **Deploy:** Vercel

## Critical commands
- Dev: `npm run dev`
- Build: `npm run build`
- Lint: `npm run lint`
- Typecheck: `npx tsc --noEmit`

## Architecture
- Single landing page at `/` — all content in one scroll
- Content lives in typed objects under `src/lib/data/` — edit those files, never hardcode in components
- Components under `src/components/`; shadcn primitives under `src/components/ui/`
- No backend, no auth, no database

## Coding conventions
- Functional components, named exports (except Next.js pages which need default export)
- Server components by default; `"use client"` only for countdown, header time, and accordion state
- Tailwind classes ordered: layout -> spacing -> color -> typography -> effects
- Run `npm run lint` and `npx tsc --noEmit` before every commit
- Conventional commits: `feat`, `fix`, `chore`, `docs`, `style`

## Tone (CRITICAL)
- Reverent, modest, factual
- Never "celebrate" — Ashara is mourning
- No marketing language
- Restrained motion only; respect `prefers-reduced-motion`

## Files Claude Code should never touch without asking
- `src/lib/data/coordinators.ts` — real phone numbers
- `src/lib/data/masjid.ts` — official address
- `public/images/hero/masjid-fremont.jpg` — official masjid photo

## When to ask
- Adding a new dependency
- Adding emojis to body content
- Adding any animation that is not a simple fade or slide
- Changing the color palette
- Adding new sections beyond what's defined in this doc
- Anything involving the words "celebrate", "exciting", "amazing", or similar
