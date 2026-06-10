# Royal Maharaja Cab

Production-ready cab-rental website for **Royal Maharaja Cab**, built as a faithful clone of the reference site's layout, design, and UX with the branding changed throughout.

Built with **Next.js 15 (App Router)**, **TypeScript**, and **Tailwind CSS v4**.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Project structure

```
app/
  layout.tsx              Root layout: header, footer, fonts, global SEO + JSON-LD
  page.tsx                Homepage (composes the section components)
  globals.css             Brand palette (Tailwind @theme) + shared utilities/animations
  locations/page.tsx      Locations index
  locations/[city]/       Dynamic city pages (statically generated for all 9 cities)
  contact/                Contact page (details + map)
  terms/                  Terms of Use
  cancellation-policy/    Refunds & Cancellation
  privacy-policy/         Privacy Policy
  sitemap.ts / robots.ts  SEO routes
  icon.svg                Favicon

components/
  Header.tsx              Sticky nav + Locations dropdown + mobile menu
  Footer.tsx              Cities / Company / Social columns
  BookingForm.tsx         From / To / Journey booking widget (opens WhatsApp)
  Reveal.tsx              Scroll-reveal animation wrapper
  Icons.tsx               Inline SVG icon set
  IconByName.tsx          String -> icon resolver
  LegalPage.tsx           Shared layout for policy pages
  sections/               Reusable homepage & city-page sections

lib/
  site.ts                 Brand name, contact details, booking locations
  cities.ts               Data for all 9 location pages
  content.ts              Stats, features, services, process steps, testimonials
```

## Changing brand details

All branding lives in [`lib/site.ts`](lib/site.ts) — the brand name (`BRAND`),
contact email/phone/address, and social links. Update once and it propagates
across every page, the header, footer, and SEO metadata.

## Pages

- `/` — Home
- `/locations` — All locations
- `/locations/{pune,mumbai,nashik,satara,kolhapur,mahabaleshwar,ratnagiri,shirdi,sambhajinagar}`
- `/contact`, `/terms`, `/cancellation-policy`, `/privacy-policy`
