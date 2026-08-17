import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import ImageBanner from "@/components/sections/ImageBanner";
import Pricing from "@/components/sections/Pricing";
import AboutAnimation from "@/components/sections/AboutAnimation";
import Features from "@/components/sections/Features";
import Testimonials from "@/components/sections/Testimonials";
import StatsStrip from "@/components/sections/StatsStrip";
import Contact from "@/components/sections/Contact";
import RealTimeClock from "@/components/RealTimeClock";

export default function Home() {
  return (
    <>
      <Hero />
      <RealTimeClock />
      <Services />
      <Pricing />
      <ImageBanner />
      <AboutAnimation />
      <Features />
      <Testimonials />
      <StatsStrip />
      <Contact />
    </>
  );
}

