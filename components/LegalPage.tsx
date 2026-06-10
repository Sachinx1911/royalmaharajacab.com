import type { ReactNode } from "react";

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <section className="bg-ink py-14 text-white md:py-16">
        <div className="container-x">
          <h1 className="text-3xl font-extrabold sm:text-4xl">{title}</h1>
          <p className="mt-3 text-sm text-white/60">Last updated: {updated}</p>
        </div>
      </section>
      <section className="container-x py-12 md:py-16">
        <div className="legal-body mx-auto max-w-3xl space-y-6 text-[15px] leading-relaxed text-ink-soft">
          {children}
        </div>
      </section>
    </>
  );
}

export function LegalSection({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) {
  return (
    <div>
      <h2 className="mb-2 text-xl font-bold text-ink">{heading}</h2>
      <div className="space-y-3">{children}</div>
    </div>
  );
}
