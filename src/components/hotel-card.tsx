import { ExternalLink, Star } from "lucide-react";
import type { Hotel } from "@/types";

export function HotelCard({ hotel }: { hotel: Hotel }) {
  const hasRating = hotel.rating !== undefined;
  const hasDistance = hotel.distanceFromMasjidMiles !== undefined;

  return (
    <div className="flex flex-col rounded-lg border border-border bg-card p-4">
      <h3 className="font-semibold text-primary">{hotel.name}</h3>

      {(hasRating || hasDistance) && (
        <p className="mt-1 flex flex-wrap items-center gap-x-2 text-sm">
          {hasRating && (
            <span className="inline-flex items-center gap-1 text-secondary">
              <Star className="size-3.5 fill-accent text-accent" aria-hidden />
              {hotel.rating!.toFixed(1)}
            </span>
          )}
          {hasRating && hasDistance && (
            <span className="text-muted-foreground" aria-hidden>
              ·
            </span>
          )}
          {hasDistance && (
            <span className="text-secondary">
              ~{hotel.distanceFromMasjidMiles} miles from masjid
            </span>
          )}
        </p>
      )}

      <p className="mt-1 text-sm text-muted-foreground">
        {hotel.address}, {hotel.city}, {hotel.state} {hotel.zip}
      </p>

      {hotel.notes && (
        <p className="mt-1 text-xs text-muted-foreground">{hotel.notes}</p>
      )}

      <a
        href={hotel.googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
      >
        Open in Google Maps
        <ExternalLink className="size-3.5" aria-hidden />
      </a>
    </div>
  );
}
