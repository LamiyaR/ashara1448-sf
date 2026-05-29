import type { Airport } from "@/types";

export const airports: Airport[] = [
  {
    code: "SFO",
    name: "San Francisco International Airport",
    distanceFromMasjidMiles: 26,
    drivingTimeMin: "35–55",
    notes:
      "Largest Bay Area airport with the widest range of domestic and international flights. Best for mehmano arriving from outside North America.",
    isRecommended: true,
  },
  {
    code: "OAK",
    name: "Oakland International Airport",
    distanceFromMasjidMiles: 25,
    drivingTimeMin: "30–45",
    notes:
      "Closest major airport to Fremont; often less crowded than SFO. Good domestic coverage.",
    isRecommended: false,
  },
  {
    code: "SJC",
    name: "San José Mineta International Airport",
    distanceFromMasjidMiles: 22,
    drivingTimeMin: "25–40",
    notes:
      "Closest airport by distance. Strong domestic coverage; lighter international service than SFO.",
    isRecommended: false,
  },
];

export const flightsComparison =
  "Mineta San José vs. SFO: For mehmano arriving from outside North America, SFO is the most likely choice. For mehmano arriving from within the US, all three are viable — pick on price.";

export const flightsDisclaimer =
  "Distances above are approximate driving miles and may vary with route, traffic, and bridge tolls.";
