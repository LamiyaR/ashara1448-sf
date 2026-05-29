// Published countdown anchor: 1 Muharram 1448H ≈ Friday 19 June 2026, 00:00 PT
// (PDT, UTC-7). The true start depends on local moon sighting; Lamiya may adjust
// this to the official Anjuman-declared date when known.
export const ASHARA_START_ISO = "2026-06-19T00:00:00-07:00";
export const asharaStart = new Date(ASHARA_START_ISO);

export interface Countdown {
  days: number;
  hours: number;
  minutes: number;
  isPast: boolean;
}

export function getCountdown(
  target: Date = asharaStart,
  now: Date = new Date(),
): Countdown {
  const diff = target.getTime() - now.getTime();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, isPast: true };
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor(diff / 3_600_000) % 24,
    minutes: Math.floor(diff / 60_000) % 60,
    isPast: false,
  };
}
