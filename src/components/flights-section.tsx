import { Badge } from "@/components/ui/badge";
import { airports, flightsComparison, flightsDisclaimer } from "@/lib/data";

export function FlightsSection() {
  return (
    <div className="rounded-lg border border-border border-l-4 border-l-secondary bg-card p-5">
      <ul className="space-y-4">
        {airports.map((a) => (
          <li key={a.code}>
            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
              <span className="font-semibold text-primary">{a.name}</span>
              <span className="text-sm font-medium text-secondary">({a.code})</span>
              <span className="text-sm text-muted-foreground">
                · ~{a.distanceFromMasjidMiles} mi · {a.drivingTimeMin} min drive
              </span>
              {a.isRecommended && (
                <Badge className="bg-primary text-primary-foreground">
                  Recommended
                </Badge>
              )}
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{a.notes}</p>
          </li>
        ))}
      </ul>
      <p className="mt-5 text-sm text-foreground">{flightsComparison}</p>
      <p className="mt-3 text-xs text-muted-foreground">{flightsDisclaimer}</p>
    </div>
  );
}
