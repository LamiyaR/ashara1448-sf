import { Header } from "@/components/layout/header";
import { Hero } from "@/components/hero";
import { Countdown } from "@/components/countdown";
import { MasjidCard } from "@/components/masjid-card";
import { TabsInfo } from "@/components/tabs-info";
import { FirstTimeTips } from "@/components/first-time-tips";
import { HalalFoodSection } from "@/components/halal-food-section";
import { WeatherCard } from "@/components/weather-card";
import { EmergencyContacts } from "@/components/emergency-contacts";
import { MiqaatTimings } from "@/components/miqaat-timings";
import { FaqSection } from "@/components/faq-section";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Countdown />
        <MasjidCard />
        <TabsInfo />
        <FirstTimeTips />
        <HalalFoodSection />
        <WeatherCard />
        <EmergencyContacts />
        <MiqaatTimings />
        <FaqSection />
      </main>
    </>
  );
}
