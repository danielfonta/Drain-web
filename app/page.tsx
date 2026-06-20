import { PromoBanner } from "@/components/PromoBanner";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Categories } from "@/components/Categories";
import { HowItWorks } from "@/components/HowItWorks";
import { Understanding } from "@/components/Understanding";
import { SaveGrid } from "@/components/SaveGrid";
import { Spotlight } from "@/components/Spotlight";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Blog } from "@/components/Blog";
import { Privacy } from "@/components/Privacy";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div id="top">
      <PromoBanner />
      <Nav />
      <main>
        <Hero />
        <Categories />
        <HowItWorks />
        <Understanding />
        <SaveGrid />
        <Spotlight />
        <Testimonials />
        <Faq />
        <Blog />
        <Privacy />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
