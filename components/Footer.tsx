import Link from "next/link";
import { BRAND, site } from "@/lib/site";
import Logo from "./Logo";
import { MailIcon, PhoneIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="mt-20 bg-ink text-white">
      <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-3">
        {/* Brand */}
        <div>
          <Link href="/" className="flex items-center gap-2.5">
            <Logo size={44} />
            <span className="text-lg font-extrabold">{BRAND}</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
            Your trusted cab service for seamless journeys across Maharashtra. One-way drops,
            outstation trips, airport transfers and more.
          </p>
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

        {/* Contact */}
        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-brand">Contact</h3>
          <a
            href={`mailto:${site.email}`}
            className="flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-white"
          >
            <span className="grid h-10 w-10 place-items-center rounded-full bg-white/10">
              <MailIcon width={20} height={20} />
            </span>
            {site.email}
          </a>
          <a
            href={`tel:${site.phoneHref}`}
            className="mt-3 flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-white"
          >
            <span className="grid h-10 w-10 place-items-center rounded-full bg-white/10">
              <PhoneIcon width={20} height={20} />
            </span>
            {site.phone}
          </a>
          <p className="mt-4 text-sm leading-relaxed text-white/70">{site.address}</p>
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
