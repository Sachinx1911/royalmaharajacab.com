import Link from "next/link";
import Reveal from "@/components/Reveal";
import { RouteIcon } from "@/components/Icons";
import { routes } from "@/lib/routes";

export default function RoutesDirectory({ activeSlug }: { activeSlug?: string }) {
  return (
    <section className="bg-mist py-16 md:py-20">
      <Reveal className="container-x mx-auto max-w-3xl text-center">
        <span className="text-sm font-bold uppercase tracking-wide text-brand">
          Popular routes
        </span>
        <h2 className="mt-3 text-2xl font-extrabold text-ink sm:text-3xl">
          One-Way Cab Routes across Maharashtra
        </h2>
      </Reveal>

      <div className="container-x mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {routes.map((r, i) => (
          <Reveal key={r.slug} delay={(i % 3) * 60}>
            <Link
              href={`/routes/${r.slug}`}
              className={`flex items-center gap-3 rounded-2xl border p-5 transition-all hover:-translate-y-1 hover:border-brand hover:shadow-[0_12px_36px_rgba(255,107,0,0.16)] ${
                activeSlug === r.slug ? "border-brand bg-brand/10" : "border-mist-2 bg-white"
              }`}
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand/15 text-brand">
                <RouteIcon width={22} height={22} />
              </span>
              <span>
                <span className="block text-base font-bold text-ink">
                  {r.from} to {r.to} Cab
                </span>
                <span className="block text-xs text-ink-soft">
                  {r.km} km · {r.duration} · from {r.sedanFare}
                </span>
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
