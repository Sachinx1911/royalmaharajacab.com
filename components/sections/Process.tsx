import Reveal from "@/components/Reveal";
import { steps } from "@/lib/content";

export default function Process() {
  return (
    <section className="container-x py-16 md:py-20">
      <Reveal className="mx-auto max-w-3xl text-center">
        <span className="text-sm font-bold uppercase tracking-wide text-brand">How it works</span>
        <h2 className="mt-3 text-2xl font-extrabold text-ink sm:text-3xl">Our Process</h2>
        <p className="mt-4 text-base leading-relaxed text-ink-soft">
          To ensure a hassle-free and enjoyable experience, we follow a streamlined booking process
          that prioritizes your needs:
        </p>
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <Reveal
            key={s.number}
            delay={i * 80}
            className="relative rounded-2xl border border-mist-2 bg-mist p-6"
          >
            <span className="text-4xl font-extrabold text-brand/35">{s.number}</span>
            <h3 className="mt-3 text-lg font-bold text-ink">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
