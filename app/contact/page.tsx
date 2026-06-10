import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { MailIcon, PhoneIcon, PinIcon } from "@/components/Icons";
import { BRAND, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${BRAND} for cab bookings, outstation trips and airport transfers across Maharashtra. Call, email or visit us.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-ink py-16 text-white md:py-20">
        <div className="container-x text-center">
          <h1 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">Contact Us</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/75">
            Have a question or ready to book? Reach out to {BRAND} — we&apos;re here 24/7 to help
            plan your journey.
          </p>
        </div>
      </section>

      <section className="container-x py-16 md:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Details */}
          <Reveal>
            <h2 className="text-2xl font-extrabold text-ink">{site.automotiveName}</h2>
            <div className="mt-6 space-y-5">
              <a
                href={`tel:${site.phoneHref}`}
                className="flex items-start gap-4 rounded-2xl border border-mist-2 bg-white p-5 transition-colors hover:border-brand"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand/15 text-brand">
                  <PhoneIcon width={22} height={22} />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-ink-soft">Phone</span>
                  <span className="block text-base font-bold text-ink">{site.phone}</span>
                </span>
              </a>

              <a
                href={`mailto:${site.email}`}
                className="flex items-start gap-4 rounded-2xl border border-mist-2 bg-white p-5 transition-colors hover:border-brand"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand/15 text-brand">
                  <MailIcon width={22} height={22} />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-ink-soft">Email</span>
                  <span className="block text-base font-bold text-ink">{site.email}</span>
                </span>
              </a>

              <div className="flex items-start gap-4 rounded-2xl border border-mist-2 bg-white p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand/15 text-brand">
                  <PinIcon width={22} height={22} />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-ink-soft">
                    Registered &amp; Operational Address
                  </span>
                  <span className="block text-base font-medium text-ink">{site.address}</span>
                </span>
              </div>
            </div>
          </Reveal>

          {/* Map */}
          <Reveal delay={120}>
            <div className="h-full min-h-[320px] overflow-hidden rounded-2xl border border-mist-2">
              <iframe
                title={`${BRAND} location`}
                src="https://www.google.com/maps?q=Wadgaon+Budruk+Pune+Maharashtra+411041&output=embed"
                className="h-full min-h-[320px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
