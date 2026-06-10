import Reveal from "@/components/Reveal";
import IconByName from "@/components/IconByName";
import { services } from "@/lib/content";
import { BRAND } from "@/lib/site";

export default function Services() {
  return (
    <section className="bg-ink py-16 text-white md:py-20">
      <Reveal className="container-x mx-auto max-w-3xl text-center">
        <span className="text-sm font-bold uppercase tracking-wide text-brand">Our services</span>
        <h2 className="mt-3 text-2xl font-extrabold sm:text-3xl">Our Premium Cab Services</h2>
        <p className="mt-4 text-base leading-relaxed text-white/75">
          {BRAND} is proud to offer reliable premium cab services to customers all across
          Maharashtra. Whether it&apos;s a short city commute or a long road trip, we have a cab for
          every travel need:
        </p>
      </Reveal>

      <div className="container-x mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal
            key={s.title}
            delay={(i % 3) * 80}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:-translate-y-1 hover:border-brand/60"
          >
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand text-ink">
              <IconByName name={s.icon} width={24} height={24} />
            </span>
            <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/70">{s.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
