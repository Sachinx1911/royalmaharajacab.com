import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Hero from "@/components/sections/Hero";
import FaqSection from "@/components/sections/FaqSection";
import RoutesDirectory from "@/components/sections/RoutesDirectory";
import CTA from "@/components/sections/CTA";
import Reveal from "@/components/Reveal";
import { CarIcon, ClockIcon, PinIcon, RupeeIcon } from "@/components/Icons";
import { getRoute, routeFaqs, routeSlugs } from "@/lib/routes";
import { BRAND, site } from "@/lib/site";

export function generateStaticParams() {
  return routeSlugs.map((route) => ({ route }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ route: string }>;
}): Promise<Metadata> {
  const { route } = await params;
  const data = getRoute(route);
  if (!data) return {};
  const title = `${data.from} to ${data.to} Cab | One Way Taxi from ${data.sedanFare}`;
  const description = `Book a ${data.from} to ${data.to} cab with ${BRAND}. ${data.km} km in ${data.duration}, doorstep pickup, one-way fares from ${data.sedanFare}. 24/7 service — call ${site.phone}.`;
  return {
    title,
    description,
    alternates: { canonical: `/routes/${data.slug}` },
    openGraph: {
      title,
      description,
      url: `/routes/${data.slug}`,
      type: "website",
    },
  };
}

export default async function RoutePage({
  params,
}: {
  params: Promise<{ route: string }>;
}) {
  const { route } = await params;
  const data = getRoute(route);
  if (!data) notFound();

  const facts = [
    { icon: PinIcon, label: "Distance", value: `${data.km} km` },
    { icon: ClockIcon, label: "Travel Time", value: data.duration },
    { icon: RupeeIcon, label: "Sedan (one-way)", value: `from ${data.sedanFare}` },
    { icon: CarIcon, label: "SUV (one-way)", value: `from ${data.suvFare}` },
  ];

  return (
    <>
      <Hero
        title={
          <>
            {data.from} to {data.to} <span className="text-brand">Cab Service</span>
          </>
        }
      />

      {/* Route facts */}
      <section className="container-x py-16 md:py-20">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {facts.map((f, i) => (
            <Reveal
              key={f.label}
              delay={i * 70}
              className="rounded-2xl border border-mist-2 bg-mist p-6 text-center"
            >
              <span className="mx-auto grid h-11 w-11 place-items-center rounded-xl bg-brand/15 text-brand">
                <f.icon width={22} height={22} />
              </span>
              <div className="mt-3 text-lg font-extrabold text-ink">{f.value}</div>
              <div className="mt-1 text-xs font-medium text-ink-soft">{f.label}</div>
            </Reveal>
          ))}
        </div>
        <p className="mt-4 text-center text-xs text-ink-soft">
          Fares are indicative for one-way travel. Tolls, parking and state taxes extra. Call{" "}
          <a href={`tel:${site.phoneHref}`} className="font-semibold text-brand">
            {site.phone}
          </a>{" "}
          for an exact quote.
        </p>

        {/* About the route */}
        <Reveal className="mx-auto mt-14 max-w-3xl">
          <h2 className="text-2xl font-extrabold text-ink sm:text-3xl">
            {data.from} to {data.to} by Cab with {BRAND}
          </h2>
          <div className="mt-5 space-y-4">
            {data.about.map((p, i) => (
              <p key={i} className="text-base leading-relaxed text-ink-soft">
                {p}
              </p>
            ))}
          </div>
        </Reveal>
      </section>

      <FaqSection
        heading={`${data.from} to ${data.to} Cab — FAQs`}
        faqs={routeFaqs(data)}
      />
      <RoutesDirectory activeSlug={data.slug} />
      <CTA />
    </>
  );
}
