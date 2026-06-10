import Reveal from "@/components/Reveal";
import IconByName from "@/components/IconByName";
import { features } from "@/lib/content";
import { BRAND } from "@/lib/site";

export default function WhyChooseUs() {
  return (
    <section className="container-x py-16 md:py-20">
      <Reveal className="mx-auto max-w-3xl text-center">
        <span className="text-sm font-bold uppercase tracking-wide text-brand">Why us</span>
        <h2 className="mt-3 text-2xl font-extrabold text-ink sm:text-3xl">
          Why Choose {BRAND}?
        </h2>
        <p className="mt-4 text-base leading-relaxed text-ink-soft">
          {BRAND} stands out for its dedication to customer experience. Here&apos;s what sets us apart:
        </p>
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <Reveal
            key={f.title}
            delay={(i % 3) * 80}
            className="group rounded-2xl border border-mist-2 bg-white p-6 transition-all hover:-translate-y-1 hover:border-brand hover:shadow-[0_14px_40px_rgba(255,107,0,0.18)]"
          >
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand/15 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
              <IconByName name={f.icon} width={24} height={24} />
            </span>
            <h3 className="mt-5 text-lg font-bold text-ink">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{f.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
