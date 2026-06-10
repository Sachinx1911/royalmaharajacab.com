import Reveal from "@/components/Reveal";
import { PinIcon } from "@/components/Icons";
import type { Place } from "@/lib/cities";

export default function PlacesToVisit({
  heading,
  places,
}: {
  heading: string;
  places: Place[];
}) {
  return (
    <section className="bg-mist py-16 md:py-20">
      <Reveal className="container-x mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-extrabold text-ink sm:text-3xl">{heading}</h2>
      </Reveal>

      <div className="container-x mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {places.map((p, i) => (
          <Reveal
            key={p.name}
            delay={(i % 3) * 70}
            className="group rounded-2xl border border-mist-2 bg-white p-6 transition-all hover:-translate-y-1 hover:border-brand hover:shadow-[0_12px_36px_rgba(255,107,0,0.16)]"
          >
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand/15 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
              <PinIcon width={22} height={22} />
            </span>
            <h3 className="mt-4 text-lg font-bold text-ink">{p.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.blurb}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
