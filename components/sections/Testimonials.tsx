import Reveal from "@/components/Reveal";
import { StarIcon } from "@/components/Icons";
import { testimonials } from "@/lib/content";

function Card({ name, when, text }: { name: string; when: string; text: string }) {
  return (
    <article className="mx-3 w-[320px] shrink-0 rounded-2xl border border-mist-2 bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.05)] sm:w-[360px]">
      <div className="flex items-center gap-1 text-brand">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon key={i} />
        ))}
      </div>
      <p className="mt-4 text-sm leading-relaxed text-ink-soft">{text}</p>
      <div className="mt-5 flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-brand/15 font-bold text-brand">
          {name.charAt(0)}
        </span>
        <div>
          <div className="text-sm font-bold text-ink">{name}</div>
          <div className="text-xs text-ink-soft">{when}</div>
        </div>
      </div>
    </article>
  );
}

export default function Testimonials() {
  const loop = [...testimonials, ...testimonials];
  return (
    <section className="bg-mist py-16 md:py-20">
      <Reveal className="container-x text-center">
        <span className="text-sm font-bold uppercase tracking-wide text-brand">Testimonials</span>
        <h2 className="mt-3 text-2xl font-extrabold text-ink sm:text-3xl">
          Read out what our Customers have to say!
        </h2>
      </Reveal>

      <div className="marquee mt-10 overflow-hidden">
        <div className="marquee-track">
          {loop.map((t, i) => (
            <Card key={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
