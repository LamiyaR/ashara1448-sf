export interface HijriDate {
  day: number;
  monthNumber: number; // 1-12
  monthName: string;
  year: number;
}

// Dawoodi Bohra (Misri) month names, Roman transliteration.
const BOHRA_MONTHS = [
  "Moharram al-Haraam",
  "Safar al-Muzaffar",
  "Rabi al-Awwal",
  "Rabi al-Aakhar",
  "Jumada al-Ula",
  "Jumada al-Ukhra",
  "Rajab al-Asab",
  "Shaban al-Karim",
  "Ramadan al-Moazzam",
  "Shawwal al-Mukarram",
  "Zilqadah al-Haraam",
  "Zilhijjatil Haram",
];

// Anchored to the official Dawoodi Bohra calendar:
//   15 June 2026 (Gregorian) = 1 Moharram al-Haraam 1448.
// The Bohra tabular calendar: odd months = 30 days, even months = 29 days,
// with month 12 (Zilhijjatil Haram) gaining a day in leap years. This matches
// the published calendar (e.g. 28 May 2026 = 12 Zilhijjatil Haram 1447).
const ANCHOR = { gy: 2026, gm: 6, gd: 15, hy: 1448, hm: 1, hd: 1 };
const LEAP_SET = new Set([2, 5, 8, 10, 13, 16, 19, 21, 24, 27, 29]);

const isLeap = (y: number) => LEAP_SET.has(((y % 30) + 30) % 30);
const monthLength = (y: number, m: number) =>
  m % 2 === 1 ? 30 : m === 12 && isLeap(y) ? 30 : 29;

// Gregorian (proleptic) date -> Julian Day Number at midnight.
function gregToJdn(y: number, m: number, d: number): number {
  const a = Math.floor((14 - m) / 12);
  const yy = y + 4800 - a;
  const mm = m + 12 * a - 3;
  return (
    d +
    Math.floor((153 * mm + 2) / 5) +
    365 * yy +
    Math.floor(yy / 4) -
    Math.floor(yy / 100) +
    Math.floor(yy / 400) -
    32045
  );
}

const ANCHOR_JDN = gregToJdn(ANCHOR.gy, ANCHOR.gm, ANCHOR.gd);

/**
 * Gregorian -> Dawoodi Bohra (Misri) date, anchored to the official calendar.
 * Returns null on any failure so the header can hide the date rather than show
 * a wrong one (build prompt §11).
 */
export function getHijriDate(date: Date = new Date()): HijriDate | null {
  try {
    const jdn = gregToJdn(
      date.getFullYear(),
      date.getMonth() + 1,
      date.getDate(),
    );
    let y = ANCHOR.hy;
    let m = ANCHOR.hm;
    let d = ANCHOR.hd + (jdn - ANCHOR_JDN);

    // Walk months until the day index lands inside a valid month.
    let guard = 0;
    while (guard++ < 100000) {
      if (d <= 0) {
        m -= 1;
        if (m < 1) {
          m = 12;
          y -= 1;
        }
        d += monthLength(y, m);
      } else {
        const len = monthLength(y, m);
        if (d > len) {
          d -= len;
          m += 1;
          if (m > 12) {
            m = 1;
            y += 1;
          }
        } else {
          break;
        }
      }
    }

    if (y < 1 || m < 1 || m > 12 || d < 1 || d > 30) return null;
    return { day: d, monthNumber: m, monthName: BOHRA_MONTHS[m - 1], year: y };
  } catch {
    return null;
  }
}

/** Formats a Hijri date as e.g. "12 Zilhijjatil Haram 1447H", or null. */
export function formatHijriDate(date: Date = new Date()): string | null {
  const h = getHijriDate(date);
  if (!h) return null;
  return `${h.day} ${h.monthName} ${h.year}H`;
}
