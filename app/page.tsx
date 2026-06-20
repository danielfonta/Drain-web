import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Priorities } from "@/components/Priorities";
import { ExpertQuote } from "@/components/ExpertQuote";
import { FeatureBanner } from "@/components/FeatureBanner";
import { Testimonials } from "@/components/Testimonials";
import { BioAge } from "@/components/BioAge";
import { Faq } from "@/components/Faq";
import { Blog } from "@/components/Blog";
import { Labs } from "@/components/Labs";
import { FinalCta } from "@/components/FinalCta";
import { IconRow } from "@/components/IconRow";
import { Footer } from "@/components/Footer";
import { BigWordmark } from "@/components/BigWordmark";
import { PromoBanner } from "@/components/PromoBanner";

export default function Home() {
  return (
    <div id="top">
      <Nav />
      <main>
        <Hero />
        <Priorities />
        <ExpertQuote />
        <FeatureBanner />
        <Testimonials />
        <BioAge />
        <Faq />
        <Blog />
        <Labs />
        <FinalCta />
        <IconRow />
      </main>
      <Footer />
      <BigWordmark />
      <PromoBanner />
    </div>
  );
}
