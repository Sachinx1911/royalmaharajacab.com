import Link from "next/link";
import Reveal from "@/components/Reveal";
import { PinIcon } from "@/components/Icons";
import { cities } from "@/lib/cities";

export default function CitiesDirectory({ activeSlug }: { activeSlug?: string }) {
  return (
    <section className="container-x py-16 md:py-20">
      <Reveal className="mx-auto max-w-3xl text-center">
        <span className="text-sm font-bold uppercase tracking-wide text-brand">Destinations</span>
        <h2 className="mt-3 text-2xl font-extrabold text-ink sm:text-3xl">
          Premium Cabs across Maharashtra
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cities.map((c, i) => (
          <Reveal key={c.slug} delay={(i % 3) * 70}>
            <Link
              href={`/locations/${c.slug}`}
              className={`flex items-center gap-3 rounded-2xl border p-5 transition-all hover:-translate-y-1 hover:border-brand hover:shadow-[0_12px_36px_rgba(122,201,67,0.16)] ${
                activeSlug === c.slug
                  ? "border-brand bg-brand/10"
                  : "border-mist-2 bg-white"
              }`}
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand/15 text-brand">
                <PinIcon width={22} height={22} />
              </span>
              <span className="text-base font-bold text-ink">Premium Cabs in {c.name}</span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
