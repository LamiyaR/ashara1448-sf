export interface Hotel {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  googleMapsUrl: string;
  websiteUrl?: string;
  rating?: number; // 0-5
  distanceFromMasjidMiles?: number;
  notes?: string; // e.g., "Walking distance to Warm Springs BART"
}

export interface Airport {
  code: string; // "SFO" | "OAK" | "SJC"
  name: string;
  distanceFromMasjidMiles: number;
  drivingTimeMin: string; // e.g., "35–55"
  notes: string;
  isRecommended: boolean;
}

export interface Coordinator {
  name: string; // e.g., "Mulla Mustafa Husaini"
  role: string; // e.g., "Co-ordinator"
  phone: string; // E.164 preferred for tel: links
  phoneDisplay: string; // human-readable, e.g., "+1 (510) 602-8243"
  whatsapp?: boolean;
}

export interface FAQItem {
  q: string;
  // supports inline links — kept as a plain markdown-flavored string and
  // rendered via a simple inline-link renderer.
  a: string;
}

export interface HalalSpot {
  name: string;
  cuisine: string;
  address: string;
  googleMapsUrl: string;
  distanceFromMasjidMiles?: number;
}

export interface Hospital {
  name: string;
  address: string;
  phone: string;
  phoneDisplay: string;
  googleMapsUrl: string;
  type: "ER" | "Urgent Care";
}
