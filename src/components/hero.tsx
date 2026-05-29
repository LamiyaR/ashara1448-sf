import Image from "next/image";
import { Button } from "@/components/ui/button";
import { asset } from "@/lib/asset";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <Image
        src={asset("/images/sf/golden-gate.jpg")}
        alt="The Golden Gate Bridge in the San Francisco Bay Area"
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover"
      />
      {/* Dark scrim so the cream text stays legible over the photo. */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-black/55 via-black/45 to-black/70"
        aria-hidden
      />

      {/* CSS entrance (fade + slight rise). Works without JS and is disabled
          under prefers-reduced-motion. */}
      <div className="mx-auto flex max-w-3xl flex-col items-center px-4 py-24 text-center duration-700 ease-out animate-in fade-in slide-in-from-bottom-3 motion-reduce:animate-none sm:py-32">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[hsl(40_60%_84%)]">
          Anjuman-e-Najmi (San Francisco)
        </p>
        <h1 className="font-serif text-4xl font-semibold leading-tight text-background sm:text-5xl md:text-6xl">
          Ashara Mubaraka 1448H — Relay Center, SF Bay Area
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-background/90">
          Travel and accommodation information for mehmano attending Ashara
          Mubaraka 1448H in the San Francisco Bay Area Relay Center, hosted at Al
          Masjid Al Mohammedi, Fremont.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="secondary" size="lg">
            <a href="#important-info">View Important Info</a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-background/40 bg-transparent text-background hover:bg-background/10 hover:text-background"
          >
            <a
              href="https://sanfrancisco.thedawoodibohras.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit sanfrancisco.thedawoodibohras.com
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
