import type { Hotel } from "@/types";

// Names, addresses, and Google Maps URLs are verbatim from the build prompt §5.4.
// Ratings and distances are intentionally left undefined for v1 — do not invent
// numbers. Lamiya may fill them in by editing this file directly.
export const hotels: Hotel[] = [
  {
    id: "doubletree-newark-fremont",
    name: "DoubleTree by Hilton Hotel Newark - Fremont",
    address: "39900 Balentine Dr",
    city: "Newark",
    state: "CA",
    zip: "94560",
    googleMapsUrl: "https://maps.google.com/?q=39900+Balentine+Dr,+Newark,+CA+94560",
  },
  {
    id: "holiday-inn-express-fremont-milpitas",
    name: "Holiday Inn Express & Suites Fremont - Milpitas Central",
    address: "42200 Albrae St",
    city: "Fremont",
    state: "CA",
    zip: "94538",
    googleMapsUrl: "https://maps.google.com/?q=42200+Albrae+St,+Fremont,+CA+94538",
  },
  {
    id: "hilton-garden-inn-fremont-milpitas",
    name: "Hilton Garden Inn Fremont Milpitas",
    address: "45976 Warm Springs Blvd",
    city: "Fremont",
    state: "CA",
    zip: "94539",
    googleMapsUrl:
      "https://maps.google.com/?q=45976+Warm+Springs+Blvd,+Fremont,+CA+94539",
  },
  {
    id: "hyatt-place-fremont",
    name: "Hyatt Place Fremont/Silicon Valley",
    address: "3101 West Warren Ave",
    city: "Fremont",
    state: "CA",
    zip: "94538",
    googleMapsUrl:
      "https://maps.google.com/?q=3101+West+Warren+Ave,+Fremont,+CA+94538",
  },
  {
    id: "fremont-marriott",
    name: "Fremont Marriott Silicon Valley",
    address: "46100 Landing Pkwy",
    city: "Fremont",
    state: "CA",
    zip: "94538",
    googleMapsUrl: "https://maps.google.com/?q=46100+Landing+Pkwy,+Fremont,+CA+94538",
  },
  {
    id: "courtyard-fremont",
    name: "Courtyard by Marriott Fremont Silicon Valley",
    address: "47000 Lakeview Blvd",
    city: "Fremont",
    state: "CA",
    zip: "94538",
    googleMapsUrl: "https://maps.google.com/?q=47000+Lakeview+Blvd,+Fremont,+CA+94538",
  },
  {
    id: "courtyard-newark",
    name: "Courtyard by Marriott Newark Silicon Valley",
    address: "34905 Newark Blvd",
    city: "Newark",
    state: "CA",
    zip: "94560",
    googleMapsUrl: "https://maps.google.com/?q=34905+Newark+Blvd,+Newark,+CA+94560",
  },
  {
    id: "crowne-plaza-union-city",
    name: "Crowne Plaza Silicon Valley N - Union City by IHG",
    address: "32083 Alvarado-Niles Rd",
    city: "Union City",
    state: "CA",
    zip: "94587",
    googleMapsUrl:
      "https://maps.google.com/?q=32083+Alvarado-Niles+Rd,+Union+City,+CA+94587",
  },
  {
    id: "good-nite-inn-fremont",
    name: "Good Nite Inn - Fremont",
    address: "4135 Cushing Pkwy",
    city: "Fremont",
    state: "CA",
    zip: "94538",
    googleMapsUrl: "https://maps.google.com/?q=4135+Cushing+Pkwy,+Fremont,+CA+94538",
  },
  {
    id: "motel-6-fremont",
    name: "Motel 6 Fremont",
    address: "46101 Research Ave",
    city: "Fremont",
    state: "CA",
    zip: "94539",
    googleMapsUrl: "https://maps.google.com/?q=46101+Research+Ave,+Fremont,+CA+94539",
  },
];
