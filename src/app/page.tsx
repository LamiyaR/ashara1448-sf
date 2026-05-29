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
import { SectionDivider } from "@/components/layout/section-divider";
import { Footer } from "@/components/layout/footer";
import { BackToTop } from "@/components/back-to-top";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Countdown />
        <MasjidCard />
        <SectionDivider tone="fog" alt="Golden Gate Bridge in fog" />
        <TabsInfo />
        <SectionDivider tone="dusk" alt="San Francisco skyline at dusk" />
        <FirstTimeTips />
        <SectionDivider tone="hills" alt="Fremont hills near Niles Canyon" />
        <HalalFoodSection />
        <WeatherCard />
        <EmergencyContacts />
        <MiqaatTimings />
        <FaqSection />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
