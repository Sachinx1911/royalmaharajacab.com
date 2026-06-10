import Link from "next/link";
import Reveal from "@/components/Reveal";
import { BRAND, site } from "@/lib/site";

export default function CTA() {
  return (
    <section className="container-x pb-4 pt-2">
      <Reveal className="overflow-hidden rounded-3xl bg-brand px-6 py-12 text-center text-ink sm:px-10 md:py-16">
        <h2 className="mx-auto max-w-3xl text-2xl font-extrabold sm:text-3xl md:text-4xl">
          Connect with {BRAND} Today
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ink/80">
          Experience the convenience of premium cab rentals with {BRAND}, trusted by thousands
          across Maharashtra. Whether you&apos;re looking for budget-friendly options or premium
          vehicles, we&apos;re here to help make every journey memorable. Contact us today to book
          your next ride!
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/contact"
            className="rounded-full bg-ink px-7 py-3.5 text-base font-bold text-white transition-transform hover:-translate-y-0.5"
          >
            Contact Us
          </Link>
          <a
            href={`tel:${site.phoneHref}`}
            className="rounded-full bg-white px-7 py-3.5 text-base font-bold text-ink transition-transform hover:-translate-y-0.5"
          >
            Call {site.phone}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
