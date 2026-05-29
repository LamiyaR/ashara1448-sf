import { Header } from "@/components/layout/header";
import { Hero } from "@/components/hero";
import { Countdown } from "@/components/countdown";
import { MasjidCard } from "@/components/masjid-card";
import { TabsInfo } from "@/components/tabs-info";
import { FirstTimeTips } from "@/components/first-time-tips";
import { WeatherCard } from "@/components/weather-card";
import { EmergencyContacts } from "@/components/emergency-contacts";
import { MiqaatTimings } from "@/components/miqaat-timings";
import { FaqSection } from "@/components/faq-section";
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
        <TabsInfo />
        <FirstTimeTips />
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
