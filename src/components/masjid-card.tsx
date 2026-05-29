import { ExternalLink } from "lucide-react";
import { masjid } from "@/lib/data";

export function MasjidCard() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-12">
      <h2 className="font-serif text-2xl font-semibold text-foreground">
        Masjid Location
      </h2>
      <div className="mt-4 rounded-lg border-2 border-primary/25 bg-card p-5">
        <p className="text-lg font-bold text-primary">{masjid.name}</p>
        <p className="mt-1 text-muted-foreground">{masjid.address}</p>
        <p className="text-muted-foreground">
          {masjid.city}, {masjid.state} {masjid.zip}
        </p>
        <a
          href={masjid.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-1 font-medium text-secondary hover:underline"
        >
          Open in Google Maps
          <ExternalLink className="size-3.5" aria-hidden />
        </a>
      </div>
      <div className="mt-4 overflow-hidden rounded-lg border border-border bg-muted">
        <iframe
          title="Map to Al Masjid Al Mohammedi, Fremont"
          src={masjid.embedUrl}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-[280px] w-full border-0 md:h-[360px]"
        />
      </div>
    </section>
  );
}
