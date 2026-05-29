import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/*
        Placeholder backdrop. Replace with the official masjid photo when
        available (build prompt §9 — source from the Anjuman, with permission):
          <Image src="/images/hero/masjid-fremont.jpg" alt="Al Masjid Al
            Mohammedi, Fremont" fill priority sizes="100vw"
            className="object-cover -z-10" />
        Keep the dark overlay below so cream text stays legible.
      */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-primary to-[hsl(145_55%_7%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-black/0 to-black/40"
        aria-hidden
      />

      {/* CSS entrance (fade + slight rise). Works without JS and is disabled
          under prefers-reduced-motion. */}
      <div className="mx-auto flex max-w-3xl flex-col items-center px-4 py-24 text-center duration-700 ease-out animate-in fade-in slide-in-from-bottom-3 motion-reduce:animate-none sm:py-32">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[hsl(40_55%_82%)]">
          Anjuman-e-Najmi (San Francisco)
        </p>
        <h1 className="font-serif text-4xl font-semibold leading-tight text-background sm:text-5xl md:text-6xl">
          Ashara Mubaraka 1448H — Relay Center, SF Bay Area
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-background/85">
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
