"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cities } from "@/lib/cities";
import { BRAND } from "@/lib/site";
import { ChevronDownIcon, CloseIcon, MenuIcon } from "./Icons";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [locOpen, setLocOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow ${
        scrolled ? "shadow-[0_2px_18px_rgba(0,0,0,0.08)]" : ""
      } bg-white`}
    >
      <div className="container-x flex h-16 items-center justify-between md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 place-items-center rounded-full bg-brand text-white md:h-10 md:w-10">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 11l1.5-4.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11M5 11h14v6h-2M5 11v6h2m0 0h10" />
              <circle cx="7.5" cy="17" r="1.5" />
              <circle cx="16.5" cy="17" r="1.5" />
            </svg>
          </span>
          <span className="text-lg font-extrabold tracking-tight text-ink md:text-xl">
            {BRAND}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/" className="text-[15px] font-medium text-ink-soft transition-colors hover:text-ink">
            Home
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setLocOpen(true)}
            onMouseLeave={() => setLocOpen(false)}
          >
            <Link
              href="/locations"
              className="flex items-center gap-1 text-[15px] font-medium text-ink-soft transition-colors hover:text-ink"
            >
              Locations
              <ChevronDownIcon width={16} height={16} />
            </Link>
            <div
              className={`absolute right-0 top-full w-60 pt-3 transition-all ${
                locOpen ? "visible opacity-100" : "invisible opacity-0"
              }`}
            >
              <ul className="grid gap-0.5 rounded-2xl border border-mist-2 bg-white p-2 shadow-[0_12px_40px_rgba(0,0,0,0.12)]">
                {cities.map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={`/locations/${c.slug}`}
                      className="block rounded-lg px-3 py-2 text-sm text-ink-soft transition-colors hover:bg-mist hover:text-ink"
                    >
                      Cabs in {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Link
            href="/contact"
            className="btn-brand px-5 py-2.5 text-[15px]"
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          className="grid h-10 w-10 place-items-center rounded-lg text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-mist-2 bg-white md:hidden">
          <nav className="container-x flex flex-col gap-1 py-4">
            <Link href="/" className="rounded-lg px-2 py-3 font-medium text-ink" onClick={() => setOpen(false)}>
              Home
            </Link>
            <button
              type="button"
              className="flex items-center justify-between rounded-lg px-2 py-3 text-left font-medium text-ink"
              onClick={() => setLocOpen((v) => !v)}
            >
              Locations
              <ChevronDownIcon
                width={18}
                height={18}
                className={`transition-transform ${locOpen ? "rotate-180" : ""}`}
              />
            </button>
            {locOpen && (
              <ul className="mb-1 grid gap-0.5 pl-3">
                <li>
                  <Link href="/locations" className="block rounded-lg px-2 py-2 text-sm text-ink-soft" onClick={() => setOpen(false)}>
                    All Locations
                  </Link>
                </li>
                {cities.map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={`/locations/${c.slug}`}
                      className="block rounded-lg px-2 py-2 text-sm text-ink-soft"
                      onClick={() => setOpen(false)}
                    >
                      Cabs in {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
            <Link
              href="/contact"
              className="btn-brand mt-2 px-5 py-3"
              onClick={() => setOpen(false)}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
