import Hero from "@/components/sections/Hero";
import AboutStats from "@/components/sections/AboutStats";
import Testimonials from "@/components/sections/Testimonials";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import RoutesDirectory from "@/components/sections/RoutesDirectory";
import FaqSection from "@/components/sections/FaqSection";
import CTA from "@/components/sections/CTA";
import { homeFaqs } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutStats />
      <Testimonials />
      <WhyChooseUs />
      <Services />
      <Process />
      <RoutesDirectory />
      <FaqSection faqs={homeFaqs} />
      <CTA />
    </>
  );
}
