# Ashara Mubaraka 1448H — SF Bay Area Relay Center

The canonical travel, accommodation, and information site for mumineen mehmano
attending Ashara Mubaraka 1448H at **Al Masjid Al Mohammedi, Fremont**, hosted by
**Anjuman-e-Najmi (San Francisco Jamaat)**. Single-page Next.js site, deployed on
Vercel. Tone is reverent and factual — this is a period of mourning.

## Tech stack

Next.js 15 (App Router) · React 19 · TypeScript 5 · Tailwind CSS v4 ·
shadcn/ui (Radix) · Framer Motion · Lucide · Vercel.

## Commands

```bash
npm run dev        # local dev at http://localhost:3000
npm run build      # production build
npm run lint       # eslint
npx tsc --noEmit   # typecheck
```

> Note: do not run `npm run build` while `npm run dev` is running — they share
> `.next` and the dev server will break. Stop one before running the other.

## Where the content lives

All editable content is in **typed objects under `src/lib/data/`** — edit those
files, never the components:

| File | Content |
| --- | --- |
| `masjid.ts` | Masjid name, address, map links *(official — confirm before edits)* |
| `coordinators.ts` | Coordinator names + phone numbers *(real contacts)* |
| `hotels.ts` | 10 hotels + accommodation intro |
| `flights.ts` | Airports + flight comparison/disclaimer |
| `transit.ts` | Rideshare / car / BART notes |
| `faq.ts` | FAQ items (`tone: "action"` = maroon border) |
| `sections.ts` | Weather, first-time tips, halal intro, miqaat note |
| `halal.ts` | Halal listings (empty for v1) + note |
| `emergency.ts` | Hospitals / urgent care |

`src/lib/hijri.ts` holds the Hijri-date converter (with a `HIJRI_DAY_OFFSET`
calibration knob) and `src/lib/countdown.ts` holds the Ashara start date.

## Before publishing — verify / provide

This v1 ships with placeholders that the Anjuman should confirm:

1. **Official masjid photo** — drop at `public/images/hero/masjid-fremont.jpg`
   and switch the hero from its gradient placeholder to `next/image`
   (see comment in `src/components/hero.tsx`).
2. **SF divider photos** — `public/images/sf/` (Golden Gate fog, SF skyline,
   Fremont hills); pass `src` to `<SectionDivider>` in `src/app/page.tsx`.
3. **Hijri ribbon date** — verify against the official Bohra calendar; adjust
   `HIJRI_DAY_OFFSET` in `src/lib/hijri.ts` if off by a day.
4. **Official Ashara start date** — `src/lib/countdown.ts` uses 19 Jun 2026 00:00
   PT (1 Muharram 1448H); update to the Anjuman-declared date when known.
5. **Hospital + urgent care** — verify Washington Hospital details; add an urgent
   care entry in `emergency.ts`.
6. **Hotel ratings/distances**, **halal listings**, **parking details**, and
   **daily miqaat timings** — fill in when confirmed.
7. **Logo** — replace the footer monogram with the official Ashara 1448 logo.

## Deploy to Vercel

1. Create a **new GitHub repo** (private until launch) and push this project:
   ```bash
   git remote add origin git@github.com:<you>/ashara1448-sf.git
   git push -u origin main
   git push origin v1.0.0
   ```
2. Import the repo at [vercel.com/new](https://vercel.com/new) — Vercel
   auto-detects Next.js. No environment variables are required.
3. (Optional) Set a custom domain such as `ashara1448sf.ocjamaat.com`
   (coordinate with OC Jamaat IT) and set `NEXT_PUBLIC_SITE_URL` to it so the
   OpenGraph image uses absolute URLs.
4. Run a Lighthouse audit on the live URL (targets: Performance ≥ 90,
   Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95) and a real-device pass on
   an older Android, an iPhone, and a desktop.

_Maintained by volunteers of Anjuman-e-Najmi for the benefit of mehmano._
