import { hotels, accommodationIntro } from "@/lib/data";
import { HotelCard } from "@/components/hotel-card";

export function AccommodationSection() {
  return (
    <div>
      <p className="text-sm text-muted-foreground">{accommodationIntro}</p>
      <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
        {hotels.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </div>
  );
}
