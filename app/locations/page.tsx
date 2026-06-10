import type { Metadata } from "next";
import CitiesDirectory from "@/components/sections/CitiesDirectory";
import CTA from "@/components/sections/CTA";
import { BRAND } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Locations",
  description: `Explore premium cab services by ${BRAND} across Maharashtra — Pune, Mumbai, Nashik, Satara, Kolhapur, Mahabaleshwar, Ratnagiri, Shirdi and Sambhajinagar.`,
  alternates: { canonical: "/locations" },
};

export default function LocationsPage() {
  return (
    <>
      <section className="bg-ink py-16 text-white md:py-20">
        <div className="container-x text-center">
          <h1 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">Our Locations</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/75">
            {BRAND} offers reliable, premium cab services across Maharashtra. Pick your city to plan
            your next ride.
          </p>
        </div>
      </section>
      <CitiesDirectory />
      <CTA />
    </>
  );
}
