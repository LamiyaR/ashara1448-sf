import { weather } from "@/lib/data";

export function WeatherCard() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-6">
      <div className="rounded-lg border border-border border-l-4 border-l-primary bg-card p-5">
        <h2 className="font-serif text-xl font-semibold text-foreground">
          {weather.heading}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {weather.body}
        </p>
      </div>
    </section>
  );
}
