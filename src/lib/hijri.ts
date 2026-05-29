export interface HijriDate {
  day: number;
  monthNumber: number; // 1-12
  monthName: string;
  year: number;
}

// Calibration knob. The Bohra (Misri) tabular calendar can differ from the
// generic tabular algorithm below by ~1 day. If the ribbon date is off versus
// the official Bohra calendar, set this to -1 / +1 / etc. to align it. Default 0.
const HIJRI_DAY_OFFSET = 0;

// Dawoodi Bohra (Misri) month names, Roman transliteration. Month 12 matches
// the build prompt's example ("Zilhijjatil Haram").
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

/**
 * Gregorian -> tabular (arithmetic) Islamic calendar via the Kuwaiti algorithm,
 * labelled with Dawoodi Bohra month names. This is a deterministic
 * approximation: the Bohra calendar is itself tabular, so this tracks it
 * closely but can differ by ~1 day near month boundaries. Verify against the
 * official Bohra calendar before relying on it. Returns null on an
 * out-of-range result so the header can hide the date rather than show a wrong
 * one (build prompt §11).
 */
export function getHijriDate(date: Date = new Date()): HijriDate | null {
  try {
    const adjusted = new Date(date.getTime() + HIJRI_DAY_OFFSET * 86_400_000);
    const gy = adjusted.getFullYear();
    const gm = adjusted.getMonth() + 1;
    const gd = adjusted.getDate();

    let jd: number;
    if (gy > 1582 || (gy === 1582 && (gm > 10 || (gm === 10 && gd >= 15)))) {
      jd =
        Math.floor((1461 * (gy + 4800 + Math.floor((gm - 14) / 12))) / 4) +
        Math.floor((367 * (gm - 2 - 12 * Math.floor((gm - 14) / 12))) / 12) -
        Math.floor(
          (3 * Math.floor((gy + 4900 + Math.floor((gm - 14) / 12)) / 100)) / 4,
        ) +
        gd -
        32075;
    } else {
      jd =
        367 * gy -
        Math.floor((7 * (gy + 5001 + Math.floor((gm - 9) / 7))) / 4) +
        Math.floor((275 * gm) / 9) +
        gd +
        1729777;
    }

    let l = jd - 1948440 + 10632;
    const n = Math.floor((l - 1) / 10631);
    l = l - 10631 * n + 354;
    const j =
      Math.floor((10985 - l) / 5316) * Math.floor((50 * l) / 17719) +
      Math.floor(l / 5670) * Math.floor((43 * l) / 15238);
    l =
      l -
      Math.floor((30 - j) / 15) * Math.floor((17719 * j) / 50) -
      Math.floor(j / 16) * Math.floor((15238 * j) / 43) +
      29;
    const monthNumber = Math.floor((24 * l) / 709);
    const day = l - Math.floor((709 * monthNumber) / 24);
    const year = 30 * n + j - 30;

    if (monthNumber < 1 || monthNumber > 12 || day < 1 || day > 30 || year < 1) {
      return null;
    }

    return { day, monthNumber, monthName: BOHRA_MONTHS[monthNumber - 1], year };
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
