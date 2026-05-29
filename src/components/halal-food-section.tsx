import { ExternalLink } from "lucide-react";
import { halalSpots, halalNote, halalIntro } from "@/lib/data";

export function HalalFoodSection() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-6">
      <h2 className="font-serif text-2xl font-semibold text-foreground sm:text-3xl">
        Halal Food
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {halalIntro}
      </p>

      {halalSpots.length > 0 ? (
        <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {halalSpots.map((spot) => (
            <li
              key={spot.name}
              className="rounded-lg border border-border bg-card p-4"
            >
              <p className="font-semibold text-primary">{spot.name}</p>
              <p className="text-xs text-secondary">{spot.cuisine}</p>
              <p className="mt-1 text-sm text-muted-foreground">{spot.address}</p>
              <a
                href={spot.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
              >
                Open in Google Maps
                <ExternalLink className="size-3.5" aria-hidden />
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-4 rounded-lg border border-border border-l-4 border-l-primary bg-muted/40 p-4 text-sm text-muted-foreground">
          {halalNote}
        </div>
      )}
    </section>
  );
}
