# Ashara Mubaraka 1448H — SF Bay Area Relay Center

The canonical travel, accommodation, and information website for mumineen
mehmano attending **Ashara Mubaraka 1448H** at **Al Masjid Al Mohammedi,
Fremont**, hosted by **Anjuman-e-Najmi (San Francisco Jamaat)**.

This is a single-page Next.js 15 application designed to give visiting mehmano
everything they need in one scroll: travel info, hotels, masjid location,
coordinator contacts, weather, FAQs, and emergency numbers.

> **Tone note.** Ashara is a period of mourning. All copy, visuals, and
> animations are intentionally restrained, reverent, and factual. Please
> preserve this tone in every change.

---

## Table of contents

1. [Project overview](#project-overview)
2. [Tech stack](#tech-stack)
3. [Getting started](#getting-started)
4. [Available scripts](#available-scripts)
5. [Environment variables](#environment-variables)
6. [Project structure](#project-structure)
7. [Where to make common changes](#where-to-make-common-changes)
8. [Key components & utilities](#key-components--utilities)
9. [Deployment](#deployment)
10. [Contribution guidelines](#contribution-guidelines)
11. [Troubleshooting](#troubleshooting)
12. [Notes for future developers](#notes-for-future-developers)

---

## Project overview

### Purpose

This site provides a single, authoritative source of information for mehmano
travelling to the SF Bay Area for Ashara Mubaraka 1448H. It includes:

- Bushra (welcome announcement)
- A live countdown to the start of Ashara
- Masjid location with embedded Google Map
- Tabbed sections for Hotels, Flights, and Local Transit
- First-time visitor tips for the Bay Area
- Weather guidance
- Emergency and medical contacts (911, coordinators, nearest hospital)
- Daily Miqaat & Majlis timings
- Frequently Asked Questions
- A live header showing PT time, Gregorian date, and Hijri date

The site is a fully static, single-page experience — no backend, no database,
no authentication.

---

## Tech stack

Do **not** substitute these without team discussion. Each was chosen
deliberately:

| Layer | Choice |
| --- | --- |
| Framework | **Next.js 15** (App Router) |
| Runtime | **React 19** |
| Language | **TypeScript 5** |
| Styling | **Tailwind CSS v4** |
| UI primitives | **shadcn/ui** built on Radix |
| Animation | **Framer Motion** (used sparingly) |
| Icons | **Lucide React** |
| Dates | **date-fns** + a custom Hijri converter |
| Hosting | **GitHub Pages** (static export) — optionally Vercel |

---

## Getting started

### Prerequisites

- **Node.js 20** or higher
- **npm** (project uses `package-lock.json`)
- A modern terminal

### Installation

```bash
# 1. Clone the repository
git clone git@github.com:LamiyaR/ashara1448-sf.git
cd ashara1448-sf

# 2. Install dependencies
npm install

# 3. Start the local dev server
npm run dev
```

The site will be available at **http://localhost:3000**.

> **Tip:** If `npm install` complains about peer dependencies, the project
> ships an `.npmrc` with `legacy-peer-deps=true` to keep installs friction-free.

---

## Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local dev server on port 3000 |
| `npm run build` | Build the production bundle |
| `npm run start` | Run the production build locally |
| `npm run lint` | Run ESLint across the codebase |
| `npx tsc --noEmit` | Typecheck without emitting JS |

> Do **not** run `npm run build` while `npm run dev` is running — they share
> the `.next` cache and the dev server will crash. Stop one before running
> the other.

---

## Environment variables

Most contributors will not need to touch these. They are used only at build
time.

| Variable | Default | Purpose |
| --- | --- | --- |
| `GITHUB_PAGES` | `unset` | When `"true"`, builds a static export with a base path (used by the GitHub Pages workflow). |
| `NEXT_PUBLIC_BASE_PATH` | `""` | Path prefix applied to images and links in the static export. Set to `/ashara1448-sf` on GitHub Pages. |
| `NEXT_PUBLIC_SITE_URL` | `https://ashara1448sf.com` | Used as `metadataBase` for absolute Open Graph image URLs. |

No `.env` file is required for local development.

---

## Project structure

```
ashara1448-sf/
├── .github/
│   └── workflows/
│       ├── ci.yml                  # Lint + typecheck + build on every push
│       └── deploy-pages.yml        # Static export → GitHub Pages on main
├── public/
│   └── images/
│       ├── hero/masjid-fremont.jpg # Official Al Masjid Al Mohammedi photo
│       └── sf/golden-gate.jpg      # Bay-area imagery
├── src/
│   ├── app/
│   │   ├── globals.css             # Tailwind v4 tokens + base styles
│   │   ├── layout.tsx              # Root layout, fonts, SEO metadata
│   │   ├── opengraph-image.tsx     # OG/Twitter share-card image
│   │   └── page.tsx                # The single page — all sections composed here
│   ├── components/
│   │   ├── ui/                     # shadcn primitives (accordion, button, card …)
│   │   ├── layout/
│   │   │   ├── header.tsx          # Live PT time + Hijri date ribbon
│   │   │   └── footer.tsx          # Links + acknowledgements
│   │   ├── bushra.tsx              # Welcome / announcement banner (top of page)
│   │   ├── hero.tsx                # Masjid hero image with text overlay
│   │   ├── countdown.tsx           # "X days to Ashara" tile
│   │   ├── masjid-card.tsx         # Masjid info + embedded Google Map
│   │   ├── tabs-info.tsx           # Tabbed Hotels / Flights / Transit
│   │   ├── accommodation-section.tsx
│   │   ├── flights-section.tsx
│   │   ├── transit-section.tsx
│   │   ├── hotel-card.tsx          # Individual hotel tile
│   │   ├── first-time-tips.tsx
│   │   ├── weather-card.tsx
│   │   ├── emergency-contacts.tsx
│   │   ├── miqaat-timings.tsx
│   │   ├── faq-section.tsx
│   │   ├── inline-text.tsx         # Renders inline [label](url) markdown links
│   │   └── back-to-top.tsx         # Floating scroll-to-top button
│   ├── lib/
│   │   ├── data/                   # ← All editable content lives here
│   │   │   ├── coordinators.ts
│   │   │   ├── emergency.ts
│   │   │   ├── faq.ts
│   │   │   ├── flights.ts
│   │   │   ├── halal.ts
│   │   │   ├── hotels.ts
│   │   │   ├── masjid.ts
│   │   │   ├── sections.ts
│   │   │   ├── transit.ts
│   │   │   └── index.ts            # Barrel re-exports
│   │   ├── hijri.ts                # Custom Hijri converter (Bohra calendar)
│   │   ├── countdown.ts            # Ashara start date + countdown logic
│   │   ├── asset.ts                # Prefixes BASE_PATH for static assets
│   │   └── utils.ts                # cn() Tailwind classname helper
│   └── types/
│       └── index.ts                # All shared TypeScript interfaces
├── CLAUDE.md                       # Instructions for the AI assistant
├── CREDITS.md                      # Image attributions
├── components.json                 # shadcn/ui configuration
├── eslint.config.mjs
├── next.config.ts                  # Conditional static export for GH Pages
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

---

## Where to make common changes

**All content lives under `src/lib/data/`.** Edit those typed objects rather
than hard-coding strings in components — every component pulls from the data
layer.

| If you want to change… | Edit this file |
| --- | --- |
| Coordinator names, phone numbers, WhatsApp | `src/lib/data/coordinators.ts` |
| Masjid address, name, embedded map URL | `src/lib/data/masjid.ts` |
| The hotel list (add / remove / reorder / distances) | `src/lib/data/hotels.ts` |
| Airport list, recommendations, comparison text | `src/lib/data/flights.ts` |
| Rideshare / car / BART notes | `src/lib/data/transit.ts` |
| FAQ items (Q&A; `tone: "action"` for cautionary items) | `src/lib/data/faq.ts` |
| Weather copy, first-time tips, halal intro, miqaat note | `src/lib/data/sections.ts` |
| Halal restaurants list | `src/lib/data/halal.ts` |
| Hospitals / urgent care | `src/lib/data/emergency.ts` |
| Bushra (welcome banner) text | `src/components/bushra.tsx` |
| The Ashara start date / countdown target | `src/lib/countdown.ts` |
| Hijri calendar anchor (recalibration) | `src/lib/hijri.ts` |
| SEO title, description, social card | `src/app/layout.tsx` |
| Section ordering on the page | `src/app/page.tsx` |
| Brand colors, typography tokens | `src/app/globals.css` |

> **Files to treat with extra care.** These hold real-world facts. Confirm with
> the coordinator team before changing:
> - `src/lib/data/coordinators.ts` (live phone numbers)
> - `src/lib/data/masjid.ts` (official address)
> - `public/images/hero/masjid-fremont.jpg` (official masjid photo)

---

## Key components & utilities

### Pages

- **`src/app/page.tsx`** — The single landing page. Composes every section in
  display order. This is where you reorder, add, or remove sections from the
  layout.
- **`src/app/layout.tsx`** — Root HTML shell. Loads Inter + Cormorant Garamond
  fonts and declares the site-wide SEO metadata.
- **`src/app/opengraph-image.tsx`** — Generates the social-share image. Marked
  `force-static` so it pre-renders at build time (required for GitHub Pages).

### Layout components

- **`Header`** (`"use client"`) — Renders the live ribbon at the top showing
  Pacific time, Gregorian date, and Hijri date. Updates every minute via
  `useEffect`.
- **`Footer`** — Static links to the SF Jamaat site and acknowledgements.

### Content sections

- **`Bushra`** — Welcome / announcement banner at the very top of the page.
- **`Hero`** — Full-width masjid image with a subtle scrim and the event
  title.
- **`Countdown`** (`"use client"`) — Displays "X days to Ashara" based on
  `src/lib/countdown.ts`.
- **`MasjidCard`** — Address card with directions link and an embedded Google
  Maps iframe (keyless `output=embed` URL — no API key required).
- **`TabsInfo`** — Three-tab section combining Hotels, Flights, and Transit.
- **`FirstTimeTips`**, **`WeatherCard`**, **`EmergencyContacts`**,
  **`MiqaatTimings`** — Static informational cards driven by `sections.ts` and
  `emergency.ts`.
- **`FaqSection`** (`"use client"`) — Collapsible FAQ powered by shadcn
  Accordion. `tone: "action"` items render with a maroon left border for
  cautionary entries.
- **`BackToTop`** (`"use client"`) — Floating button that appears after the
  user scrolls.

### Utilities

- **`src/lib/hijri.ts`** — Custom Hijri converter anchored to the official
  Dawoodi Bohra calendar (`15 June 2026 = 1 Moharram 1448`). Uses the standard
  Bohra tabular month-length pattern. Includes a `HIJRI_DAY_OFFSET` knob if
  recalibration is ever needed.
- **`src/lib/countdown.ts`** — Exports `ASHARA_START_ISO` and `getCountdown()`,
  which returns `{ days, hours, minutes, seconds }` relative to the start of
  Ashara at midnight PT.
- **`src/lib/asset.ts`** — `asset(path)` prepends `NEXT_PUBLIC_BASE_PATH` so
  image URLs resolve correctly under GitHub Pages' subpath. Use it for every
  `<img>` / `<Image>` `src` that points at `public/`.
- **`src/lib/utils.ts`** — The standard shadcn `cn()` helper (merges Tailwind
  classes with `clsx` and `tailwind-merge`).

### Configuration files

- **`next.config.ts`** — Conditional static export. When `GITHUB_PAGES=true`,
  emits a fully static site to `/out` with `basePath=/ashara1448-sf` and
  unoptimised images. Local dev and Vercel builds stay normal.
- **`tailwind.config.ts`** — Minimal config required by shadcn under Tailwind
  v4; design tokens live in `src/app/globals.css`.
- **`components.json`** — shadcn/ui configuration (Radix variant, alias
  mappings).
- **`eslint.config.mjs`** — Bridged to Next.js 15's flat config via
  `FlatCompat`.

---

## Deployment

### GitHub Pages (current)

The site auto-deploys to GitHub Pages on every push to `main` via the
`.github/workflows/deploy-pages.yml` workflow:

1. Push to `main`
2. The workflow runs `npm ci && npm run build` with `GITHUB_PAGES=true` and
   `NEXT_PUBLIC_BASE_PATH=/ashara1448-sf`
3. The static export in `out/` is uploaded as a Pages artifact
4. The `deploy` job publishes it

Live URL: **https://lamiyar.github.io/ashara1448-sf/**

Expect a 1–2 minute delay between push and the site updating. Hard-refresh
your browser (`Cmd+Shift+R` / `Ctrl+Shift+R`) to defeat the browser cache.

### Vercel (optional)

The project is fully Vercel-compatible. Connect the repo on Vercel and it will
use the default Next.js build (without the `GITHUB_PAGES` env). No further
configuration is required.

### Manual deploy

```bash
# Static export for any static host
GITHUB_PAGES=true NEXT_PUBLIC_BASE_PATH=/your-base-path npm run build
# The exported site is now in ./out/ — upload it anywhere.
```

---

## Contribution guidelines

### Workflow

```bash
# 1. Pull latest
git pull origin main

# 2. Make your changes (prefer editing files under src/lib/data/)

# 3. Verify locally
npm run lint
npx tsc --noEmit
npm run dev   # spot-check at http://localhost:3000

# 4. Commit using conventional-commit style
git add -A
git commit -m "feat: add new hotel to accommodation list"

# 5. Push
git push origin main
```

### Commit message conventions

Use a short prefix to make the history scannable:

| Prefix | Use when |
| --- | --- |
| `feat:` | Adding a new feature or visible content |
| `fix:` | Fixing a bug or incorrect content |
| `chore:` | Tooling, config, dependency bumps |
| `docs:` | README, CLAUDE.md, comments |
| `style:` | Visual / CSS / tone tweaks |
| `refactor:` | Code restructuring with no behavioural change |

### Code conventions

- **Functional components only**, named exports (Next.js pages must use
  default exports).
- **Server components by default.** Add `"use client"` only when the component
  needs hooks (`Header`, `Countdown`, `FaqSection`, `BackToTop`).
- **Tailwind class order:** layout → spacing → color → typography → effects.
- **Content goes in `src/lib/data/`**, never inline in JSX.
- **No emojis in body content** unless the design explicitly calls for one.
- **Respect `prefers-reduced-motion`** for any animation you add.

### Things to ask about before doing

Per `CLAUDE.md`, do not (without team discussion):

- Add a new third-party dependency
- Add animation that is not a simple fade / slide
- Change the color palette
- Add new top-level sections beyond what's documented here
- Introduce any marketing or celebratory language

---

## Troubleshooting

| Problem | Fix |
| --- | --- |
| `npm install` fails on peer-dep errors | The repo ships `.npmrc` with `legacy-peer-deps=true`. Re-clone if `.npmrc` is missing. |
| Dev server boots but the page is blank | Stop any other `next build` running in another terminal — they collide on `.next/`. |
| Images 404 on the deployed Pages site | Make sure the image `src` uses `asset("/images/...")`, not a raw `/images/...` string. |
| Hijri date looks off by a day | Adjust `HIJRI_DAY_OFFSET` in `src/lib/hijri.ts` and re-verify against the official Bohra calendar. |
| Pushed to `main` but the website hasn't updated | Wait 1–2 minutes for the Pages workflow, then hard-refresh (`Cmd+Shift+R`). Check the **Actions** tab on GitHub for build failures. |
| `git push` rejected — "fetch first" | Someone else pushed first. Run `git pull origin main --rebase` and push again. |
| TypeScript complains about a missing export from `@/lib/data` | Re-export it from `src/lib/data/index.ts`. |
| Build fails with "force-static" warning on `opengraph-image` | Keep `export const dynamic = "force-static"` at the top of the file; GitHub Pages requires it. |

---

## Notes for future developers

- **Single page, on purpose.** Resist the urge to break this into multiple
  routes. Mehmano scroll through the whole thing on a phone.
- **The Hijri converter is anchored, not algorithmic.** It locks `1 Moharram
  1448 = 15 June 2026` and uses tabular month lengths from there. If the
  official Bohra calendar publishes corrections for future years, update
  `src/lib/hijri.ts` and add a comment explaining the change.
- **The countdown targets midnight PT.** All time logic assumes Pacific time
  regardless of the viewer's locale — coordinator phones live in PT.
- **The Google Maps embed is keyless.** It uses the public `output=embed` URL
  so we never have to ship an API key with a static site. If Google ever
  breaks that endpoint, switch to a proper Embed API URL.
- **The OG image is statically generated** so it works on GitHub Pages.
  Removing `export const dynamic = "force-static"` will break the static
  export.
- **Permissions matter.** The masjid hero photo requires Anjuman permission
  (see `CREDITS.md`). If you replace it, update credits too.
- **The reverent tone is part of the spec.** Please re-read `CLAUDE.md`
  before making any change to copy or visuals.

---

_Built in service of mumineen mehmano attending Ashara Mubaraka 1448H._
