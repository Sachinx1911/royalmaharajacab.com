"use client";

import { useState } from "react";
import { BOOKING_LOCATIONS, site } from "@/lib/site";

export default function BookingForm() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [journey, setJourney] = useState<"One Way" | "Round Trip">("One Way");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!from || !to) {
      setError("Please select both pick up and drop locations.");
      return;
    }
    if (from === to) {
      setError("Pick up and drop locations cannot be the same.");
      return;
    }
    setError("");
    const message = `Hello ${site.brand}, I would like to book a cab.%0AFrom: ${from}%0ATo: ${to}%0AJourney: ${journey}`;
    const url = `https://wa.me/${site.phoneHref.replace("+", "")}?text=${message}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full rounded-2xl bg-white p-4 shadow-[0_20px_60px_rgba(0,0,0,0.18)] sm:p-5"
    >
      <div className="grid gap-3 sm:grid-cols-2">
        {/* From */}
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink-soft">
            From
          </span>
          <select
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="w-full rounded-xl border border-mist-2 bg-mist px-3.5 py-3 text-sm text-ink outline-none transition focus:border-brand focus:bg-white"
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
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink-soft">
            To
          </span>
          <select
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="w-full rounded-xl border border-mist-2 bg-mist px-3.5 py-3 text-sm text-ink outline-none transition focus:border-brand focus:bg-white"
          >
            <option value="">Drop Location</option>
            {BOOKING_LOCATIONS.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </label>
      </div>

      {/* Journey */}
      <div className="mt-4">
        <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-ink-soft">
          Journey
        </span>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {(["One Way", "Round Trip"] as const).map((opt) => (
            <label key={opt} className="flex cursor-pointer items-center gap-2">
              <input
                type="radio"
                name="journey"
                value={opt}
                checked={journey === opt}
                onChange={() => setJourney(opt)}
                className="h-4 w-4 accent-brand"
              />
              <span className="text-sm font-medium text-ink">{opt}</span>
            </label>
          ))}
        </div>
      </div>

      {error && <p className="mt-3 text-sm font-medium text-red-600">{error}</p>}

      <button type="submit" className="btn-brand mt-4 w-full py-3.5 text-base font-bold">
        Go
      </button>
    </form>
  );
}
