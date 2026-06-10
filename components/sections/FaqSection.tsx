import Reveal from "@/components/Reveal";
import { ChevronDownIcon } from "@/components/Icons";

export type Faq = { q: string; a: string };

export default function FaqSection({
  faqs,
  heading = "Frequently Asked Questions",
}: {
  faqs: Faq[];
  heading?: string;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section className="container-x py-16 md:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Reveal className="mx-auto max-w-3xl text-center">
        <span className="text-sm font-bold uppercase tracking-wide text-brand">FAQs</span>
        <h2 className="mt-3 text-2xl font-extrabold text-ink sm:text-3xl">{heading}</h2>
      </Reveal>

      <div className="mx-auto mt-10 max-w-3xl space-y-3">
        {faqs.map((f) => (
          <details
            key={f.q}
            className="group rounded-xl border border-mist-2 bg-white p-5 transition-colors open:border-brand"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-ink [&::-webkit-details-marker]:hidden">
              {f.q}
              <ChevronDownIcon
                width={18}
                height={18}
                className="shrink-0 text-ink-soft transition-transform group-open:rotate-180"
              />
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
