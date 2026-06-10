import Link from "next/link";
import { cities } from "@/lib/cities";
import { BRAND, site } from "@/lib/site";
import {
  FacebookIcon,
  GoogleIcon,
  InstagramIcon,
  MailIcon,
  YoutubeIcon,
} from "./Icons";

export default function Footer() {
  return (
    <footer className="mt-20 bg-ink text-white">
      <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <Link href="/" className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-brand text-ink">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 11l1.5-4.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11M5 11h14v6h-2M5 11v6h2m0 0h10" />
                <circle cx="7.5" cy="17" r="1.5" />
                <circle cx="16.5" cy="17" r="1.5" />
              </svg>
            </span>
            <span className="text-lg font-extrabold">{BRAND}</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
            Your trusted cab service for seamless journeys across Maharashtra. One-way drops,
            outstation trips, airport transfers and more.
          </p>
        </div>

        {/* Cities */}
        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-brand">Cities</h3>
          <ul className="space-y-2.5 text-sm text-white/70">
            {cities.map((c) => (
              <li key={c.slug}>
                <Link href={`/locations/${c.slug}`} className="transition-colors hover:text-white">
                  Premium Cabs in {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-brand">Company</h3>
          <ul className="space-y-2.5 text-sm text-white/70">
            <li>
              <Link href="/contact" className="transition-colors hover:text-white">
                Contact us
              </Link>
            </li>
            <li>
              <Link href="/terms" className="transition-colors hover:text-white">
                Terms of use
              </Link>
            </li>
            <li>
              <Link href="/cancellation-policy" className="transition-colors hover:text-white">
                Refunds &amp; Cancellation
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="transition-colors hover:text-white">
                Privacy policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-brand">Social</h3>
          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${site.email}`}
              aria-label="Email"
              className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand hover:text-ink"
            >
              <MailIcon width={20} height={20} />
            </a>
            <a
              href={site.social.googleReview}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google Review"
              className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand hover:text-ink"
            >
              <GoogleIcon width={20} height={20} />
            </a>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand hover:text-ink"
            >
              <InstagramIcon width={20} height={20} />
            </a>
            <a
              href={site.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand hover:text-ink"
            >
              <YoutubeIcon width={20} height={20} />
            </a>
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand hover:text-ink"
            >
              <FacebookIcon width={20} height={20} />
            </a>
          </div>
          <p className="mt-5 text-sm text-white/70">{site.email}</p>
          <a href={`tel:${site.phoneHref}`} className="mt-1 block text-sm text-white/70 transition-colors hover:text-white">
            {site.phone}
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-6 text-center text-sm text-white/60">
          © {site.copyrightYear} - All rights reserved by {site.legalName}
        </div>
      </div>
    </footer>
  );
}
