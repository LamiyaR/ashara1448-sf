import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header strip placeholder — full ribbon (time + Hijri date) lands in Phase 3. */}
      <div className="bg-secondary text-secondary-foreground">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-2 text-xs">
          <span>San Francisco Bay Area</span>
          <span>12 Zilhijjatil Haram 1447H</span>
        </div>
      </div>

      <section className="mx-auto flex max-w-3xl flex-col items-center px-4 py-24 text-center">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-secondary">
          Anjuman-e-Najmi (San Francisco)
        </p>
        <h1 className="font-serif text-4xl font-semibold leading-tight text-primary sm:text-5xl">
          Ashara Mubaraka 1448H — Relay Center, SF Bay Area
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
          Travel and accommodation information for mehmano attending Ashara
          Mubaraka 1448H in the San Francisco Bay Area Relay Center, hosted at Al
          Masjid Al Mohammedi, Fremont.
        </p>
        <div className="mt-8">
          <Button variant="secondary" size="lg">
            View Important Info
          </Button>
        </div>
      </section>
    </main>
  );
}
