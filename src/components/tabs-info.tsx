"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FlightsSection } from "@/components/flights-section";
import { TransitSection } from "@/components/transit-section";
import { AccommodationSection } from "@/components/accommodation-section";

export function TabsInfo() {
  return (
    <section
      id="important-info"
      className="mx-auto max-w-4xl scroll-mt-6 px-4 py-12"
    >
      <h2 className="font-serif text-2xl font-semibold text-foreground sm:text-3xl">
        Important Information
      </h2>
      <Tabs defaultValue="flights" className="mt-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="flights">Flights</TabsTrigger>
          <TabsTrigger value="transit">Local Transit</TabsTrigger>
          <TabsTrigger value="accommodation">Accommodation</TabsTrigger>
        </TabsList>
        <TabsContent value="flights" className="mt-4">
          <FlightsSection />
        </TabsContent>
        <TabsContent value="transit" className="mt-4">
          <TransitSection />
        </TabsContent>
        <TabsContent value="accommodation" className="mt-4">
          <AccommodationSection />
        </TabsContent>
      </Tabs>
    </section>
  );
}
