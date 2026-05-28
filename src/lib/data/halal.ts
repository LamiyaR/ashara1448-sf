import type { HalalSpot } from "@/types";

// Per build prompt §5.7: render only after the Anjuman confirms which places to
// list. For v1 this stays empty and the section shows the confirmation note below.
export const halalSpots: HalalSpot[] = [];

export const halalNote =
  "Listings to be confirmed by the Anjuman. Please contact a coordinator for the most current FMB schedule.";
