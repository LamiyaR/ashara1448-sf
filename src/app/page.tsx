import Image from "next/image";
import { asset } from "@/lib/asset";
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
        <section className="mx-auto max-w-4xl px-4 pt-6">
          <div className="relative h-44 w-full overflow-hidden rounded-lg border border-border sm:h-60">
            <Image
              src={asset("/images/sf/golden-gate.jpg")}
              alt="The Golden Gate Bridge, San Francisco Bay Area"
              fill
              sizes="(max-width: 896px) 100vw, 896px"
              className="object-cover"
            />
          </div>
        </section>
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
