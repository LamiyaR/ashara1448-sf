import { transitItems, transitNote } from "@/lib/data";
import { InlineText } from "@/components/inline-text";

export function TransitSection() {
  return (
    <div className="rounded-lg border border-border border-l-4 border-l-secondary bg-card p-5">
      <ul className="space-y-4">
        {transitItems.map((t) => (
          <li key={t.heading}>
            <p className="font-semibold text-primary">{t.heading}</p>
            <p className="mt-1 text-sm text-muted-foreground">
              <InlineText text={t.body} />
            </p>
          </li>
        ))}
      </ul>
      <p className="mt-5 rounded-md bg-muted p-3 text-sm font-medium text-foreground">
        {transitNote}
      </p>
    </div>
  );
}
