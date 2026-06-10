import type { Metadata } from "next";
import RoutesDirectory from "@/components/sections/RoutesDirectory";
import CTA from "@/components/sections/CTA";
import { BRAND } from "@/lib/site";

export const metadata: Metadata = {
  title: "One-Way Cab Routes & Fares",
  description: `Popular one-way cab routes across Maharashtra with ${BRAND} — Pune to Mumbai, Mumbai to Shirdi, Pune to Mahabaleshwar and more. Transparent fares, doorstep pickup, 24/7 service.`,
  alternates: { canonical: "/routes" },
};

export default function RoutesPage() {
  return (
    <>
      <section className="bg-ink py-16 text-white md:py-20">
        <div className="container-x text-center">
          <h1 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            Cab Routes &amp; Fares
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/75">
            One-way and round-trip cabs on Maharashtra&apos;s most travelled routes. Pick your
            route to see distance, travel time and indicative fares.
          </p>
        </div>
      </section>
      <RoutesDirectory />
      <CTA />
    </>
  );
}
