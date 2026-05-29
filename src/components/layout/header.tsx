"use client";

import { useEffect, useState } from "react";
import { Clock, CalendarDays, Moon } from "lucide-react";
import { formatHijriDate } from "@/lib/hijri";

const PT = "America/Los_Angeles";

export function Header() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 60_000);
    return () => clearInterval(id);
  }, []);

  const time = now
    ? now.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        timeZone: PT,
      })
    : null;
  const gregorian = now
    ? now.toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "long",
        timeZone: PT,
      })
    : null;

  // Derive the Hijri date from the PT calendar date so it stays consistent with
  // the displayed time/date regardless of the visitor's own time zone.
  let hijri: string | null = null;
  if (now) {
    const ptYmd = now.toLocaleDateString("en-CA", { timeZone: PT }); // YYYY-MM-DD
    const [y, m, d] = ptYmd.split("-").map(Number);
    hijri = formatHijriDate(new Date(y, m - 1, d, 12));
  }

  return (
    <header className="bg-secondary text-secondary-foreground">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-2 px-4 py-2 text-[11px] sm:text-xs">
        <span className="inline-flex items-center gap-1.5">
          <Clock className="size-3.5 shrink-0" aria-hidden />
          <span suppressHydrationWarning>{time ? `${time} PT` : "—"}</span>
        </span>
        <span className="hidden items-center gap-1.5 sm:inline-flex">
          <CalendarDays className="size-3.5 shrink-0" aria-hidden />
          <span suppressHydrationWarning>{gregorian ?? "—"}</span>
        </span>
        {hijri && (
          <span className="inline-flex items-center gap-1.5">
            <Moon className="size-3.5 shrink-0" aria-hidden />
            <span suppressHydrationWarning>{hijri}</span>
          </span>
        )}
      </div>
    </header>
  );
}
