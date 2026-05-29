import { Header } from "@/components/layout/header";
import { Hero } from "@/components/hero";
import { Countdown } from "@/components/countdown";
import { MasjidCard } from "@/components/masjid-card";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Countdown />
        <MasjidCard />
      </main>
    </>
  );
}
