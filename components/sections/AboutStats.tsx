import Reveal from "@/components/Reveal";
import { stats } from "@/lib/content";
import { BRAND } from "@/lib/site";

export default function AboutStats() {
  return (
    <section className="container-x py-16 md:py-20">
      <Reveal className="mx-auto max-w-3xl text-center">
        <span className="text-sm font-bold uppercase tracking-wide text-brand">Know about us</span>
        <h2 className="mt-3 text-2xl font-extrabold text-ink sm:text-3xl">
          Your ideal travel partner for cabs across Maharashtra
        </h2>
        <p className="mt-4 text-base leading-relaxed text-ink-soft">
          {BRAND} is your ideal travel partner for cabs across Maharashtra. With 24/7 service and
          support, clean and well-maintained cabs, and multiple convenient locations, we ensure a
          seamless experience every time. Choose from our exclusive cab options, including one-way
          cabs, outstation trips, airport drops, and more — all tailored to meet your travel needs.
        </p>
      </Reveal>

      <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {stats.map((s, i) => (
          <Reveal
            key={s.key}
            delay={i * 80}
            className="rounded-2xl border border-mist-2 bg-mist p-6 text-center transition-transform hover:-translate-y-1"
          >
            <div className="text-3xl font-extrabold text-brand sm:text-4xl">{s.value}</div>
            <div className="mt-2 text-sm font-medium text-ink-soft">{s.label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
