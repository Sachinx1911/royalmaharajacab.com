import BookingForm from "@/components/BookingForm";
import { BRAND } from "@/lib/site";

export default function Hero({
  title,
}: {
  title?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      {/* decorative gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-90"
        style={{
          background:
            "radial-gradient(900px 420px at 12% -10%, rgba(122,201,67,0.28), transparent 60%), radial-gradient(700px 380px at 95% 10%, rgba(122,201,67,0.18), transparent 55%)",
        }}
      />
      <div className="container-x relative grid items-center gap-10 py-14 md:py-20 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-brand/15 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand">
            Trusted across Maharashtra
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            {title ?? (
              <>
                Book a Cab from the Best Cab service -{" "}
                <span className="text-brand">{BRAND}</span>
              </>
            )}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            {BRAND} is your Trusted Cab Service for Seamless Journeys! Book now and experience
            smooth &amp; reliable transportation at your fingertips. Enjoy flexibility for one-way
            drops, outstation round-trips and local transfers — with door-step pickup and complete
            transparency. Find the right cab now!
          </p>
        </div>

        <div className="w-full">
          <BookingForm />
        </div>
      </div>
    </section>
  );
}
