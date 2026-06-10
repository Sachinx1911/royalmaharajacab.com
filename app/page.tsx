import Hero from "@/components/sections/Hero";
import AboutStats from "@/components/sections/AboutStats";
import Testimonials from "@/components/sections/Testimonials";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutStats />
      <Testimonials />
      <WhyChooseUs />
      <Services />
      <Process />
      <CTA />
    </>
  );
}
