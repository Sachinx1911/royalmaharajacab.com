import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BRAND, site } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.royalmaharajacab.com"),
  title: {
    default: `Book a Cab from the Best Cab service - ${BRAND}`,
    template: `%s | ${BRAND}`,
  },
  description:
    "Affordable and reliable cab rentals across Maharashtra. One-way drops, outstation round-trips, airport transfers and local cabs with doorstep pickup.",
  applicationName: BRAND,
  keywords: [
    "cab service",
    "cab rental",
    "Maharashtra cabs",
    "Pune cabs",
    "Mumbai cabs",
    "outstation cabs",
    "airport taxi",
    BRAND,
  ],
  openGraph: {
    title: `Book a Cab from the Best Cab service - ${BRAND}`,
    description:
      "Affordable and reliable cab rentals across Maharashtra with doorstep pickup and transparent pricing.",
    url: "/",
    siteName: BRAND,
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: `Book a Cab from the Best Cab service - ${BRAND}`,
    description:
      "Affordable and reliable cab rentals across Maharashtra with doorstep pickup and transparent pricing.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    name: BRAND,
    description:
      "Affordable and reliable cab rentals across Maharashtra. One-way drops, outstation round-trips, airport transfers and local cabs.",
    url: "https://www.royalmaharajacab.com",
    telephone: site.phone,
    email: site.email,
    areaServed: "Maharashtra, India",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Sector 12, Kalamboli",
      addressLocality: "Navi Mumbai",
      addressRegion: "Maharashtra",
      postalCode: "410218",
      addressCountry: "IN",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.7",
      reviewCount: "10000",
    },
  };

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
