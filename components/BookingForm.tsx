"use client";

import { useEffect, useState } from "react";
import { BOOKING_LOCATIONS, site } from "@/lib/site";
import { PhoneIcon } from "./Icons";

function BookingModal({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-modal-title"
        className="w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-[0_24px_80px_rgba(0,0,0,0.35)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center gap-4 bg-brand px-6 py-5 text-white">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white text-brand">
            <PhoneIcon width={24} height={24} />
          </span>
          <div className="flex-1">
            <h2 id="booking-modal-title" className="text-xl font-bold">
              Quick Phone Booking
            </h2>
            <p className="text-sm text-white/90">We&apos;re here to help!</p>
          </div>
          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="grid h-8 w-8 place-items-center rounded-full text-white transition-colors hover:bg-white/20"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-6 text-center">
          <p className="text-base text-ink-soft">
            Our online booking system is currently being upgraded to serve you better.
          </p>
          <p className="mt-3 text-base text-ink-soft">
            For immediate booking, please call our 24/7 support team who will assist you instantly!
          </p>

          <div className="mt-6 rounded-xl border border-brand/40 bg-brand/10 px-4 py-5">
            <p className="text-sm text-ink-soft">Call us now</p>
            <a
              href={`tel:${site.phoneHref}`}
              className="mt-1 inline-flex items-center justify-center gap-2 text-2xl font-extrabold text-ink transition-colors hover:text-brand-dark"
            >
              <span className="text-brand">
                <PhoneIcon width={22} height={22} />
              </span>
              {site.phoneHref}
            </a>
            <p className="mt-1 text-sm text-ink-soft">Available 24/7</p>
          </div>

          <a
            href={`tel:${site.phoneHref}`}
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3.5 text-base font-bold text-white transition-colors hover:bg-brand-dark"
          >
            <PhoneIcon width={20} height={20} />
            Call Now to Book
          </a>

          <button
            type="button"
            onClick={onClose}
            className="mt-3 w-full rounded-xl bg-mist px-6 py-3.5 text-base font-medium text-ink-soft transition-colors hover:bg-mist-2"
          >
            I&apos;ll call later
          </button>

          <div className="mt-5 border-t border-mist-2 pt-4 text-xs text-ink-soft">
            ✓ Same reliable service&nbsp;&nbsp;✓ Instant confirmation&nbsp;&nbsp;✓ Best rates guaranteed
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BookingForm() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [journey, setJourney] = useState<"One Way" | "Round Trip">("One Way");
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!from || !to) {
      setError("Please select both pick up and drop locations.");
      return;
    }
    setError("");
    setShowModal(true);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-full overflow-hidden rounded-2xl bg-white shadow-[0_20px_60px_rgba(0,0,0,0.18)]"
      >
        {/* Header band */}
        <div className="bg-brand/10 px-6 py-5">
          <h2 className="text-xl font-extrabold text-ink">Find the right cab now!</h2>
        </div>

        <div className="px-6 pb-6 pt-5">
          {/* From */}
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-ink-soft">From</span>
            <select
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="w-full rounded-lg border border-mist-2 bg-white px-3.5 py-3 text-base text-ink outline-none transition focus:border-brand"
            >
              <option value="">Pick Up Location</option>
              {BOOKING_LOCATIONS.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </label>

          {/* To */}
          <label className="mt-4 block">
            <span className="mb-1.5 block text-sm font-medium text-ink-soft">To</span>
            <select
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="w-full rounded-lg border border-mist-2 bg-white px-3.5 py-3 text-base text-ink outline-none transition focus:border-brand"
            >
              <option value="">Drop Location</option>
              {BOOKING_LOCATIONS.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </label>

          {/* Journey */}
          <div className="mt-4">
            <span className="mb-1.5 block text-sm font-medium text-ink-soft">Journey</span>
            <div className="flex overflow-hidden rounded-lg">
              <button
                type="button"
                onClick={() => setJourney("One Way")}
                className={`flex flex-1 items-center justify-center gap-2 px-4 py-3 text-base font-medium transition-colors ${
                  journey === "One Way"
                    ? "bg-brand text-white"
                    : "bg-mist-2 text-ink-soft hover:bg-mist"
                }`}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
                One Way
              </button>
              <button
                type="button"
                onClick={() => setJourney("Round Trip")}
                className={`flex flex-1 items-center justify-center gap-2 px-4 py-3 text-base font-medium transition-colors ${
                  journey === "Round Trip"
                    ? "bg-brand text-white"
                    : "bg-mist-2 text-ink-soft hover:bg-mist"
                }`}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 12a9 9 0 0 1 15.5-6.2L21 8M21 3v5h-5M21 12a9 9 0 0 1-15.5 6.2L3 16M3 21v-5h5" />
                </svg>
                Round Trip
              </button>
            </div>
          </div>

          {error && <p className="mt-3 text-sm font-medium text-red-600">{error}</p>}

          <button
            type="submit"
            className="mt-5 w-full rounded-lg bg-brand py-3.5 text-lg font-bold text-white transition-colors hover:bg-brand-dark"
          >
            Go
          </button>
        </div>
      </form>

      {showModal && <BookingModal onClose={() => setShowModal(false)} />}
    </>
  );
}
