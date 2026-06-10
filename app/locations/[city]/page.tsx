import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Hero from "@/components/sections/Hero";
import AboutStats from "@/components/sections/AboutStats";
import Testimonials from "@/components/sections/Testimonials";
import PlacesToVisit from "@/components/sections/PlacesToVisit";
import CitiesDirectory from "@/components/sections/CitiesDirectory";
import FaqSection from "@/components/sections/FaqSection";
import CTA from "@/components/sections/CTA";
import Reveal from "@/components/Reveal";
import { cityFaqs, citySlugs, getCity } from "@/lib/cities";
import { BRAND } from "@/lib/site";

export function generateStaticParams() {
  return citySlugs.map((city) => ({ city }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const data = getCity(city);
  if (!data) return {};
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: { canonical: `/locations/${data.slug}` },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: `/locations/${data.slug}`,
      type: "website",
    },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const data = getCity(city);
  if (!data) notFound();

  return (
    <>
      <Hero title={data.heroTitle} />
      <AboutStats />
      <Testimonials />

      {/* City narrative */}
      <section className="container-x py-16 md:py-20">
        <Reveal className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-extrabold text-ink sm:text-3xl">
            Discover {data.name} with {BRAND}
          </h2>
          <div className="mt-5 space-y-4">
            {data.intro.map((p, i) => (
              <p key={i} className="text-base leading-relaxed text-ink-soft">
                {p}
              </p>
            ))}
          </div>
        </Reveal>
      </section>

      <PlacesToVisit heading={data.placesHeading} places={data.places} />
      <FaqSection heading={`Cab Service in ${data.name} — FAQs`} faqs={cityFaqs(data)} />
      <CitiesDirectory activeSlug={data.slug} />
      <CTA />
    </>
  );
}
