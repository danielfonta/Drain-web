import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { WhyDifferent } from "@/components/WhyDifferent";
import { TheShift } from "@/components/TheShift";
import { Ownership } from "@/components/Ownership";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div id="top">
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <WhyDifferent />
        <TheShift />
        <Ownership />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
