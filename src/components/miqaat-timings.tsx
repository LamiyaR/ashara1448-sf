import { CalendarClock } from "lucide-react";
import { miqaatTitle, miqaatNote } from "@/lib/data";

export function MiqaatTimings() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-6">
      <div className="rounded-lg border border-border bg-card p-5">
        <h2 className="flex items-center gap-2 font-serif text-xl font-semibold text-foreground">
          <CalendarClock className="size-5 shrink-0 text-primary" aria-hidden />
          {miqaatTitle}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {miqaatNote}
        </p>
      </div>
    </section>
  );
}
