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

fit of mehmano._
