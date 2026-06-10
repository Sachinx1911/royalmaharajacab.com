import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/LegalPage";
import { BRAND, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `Read the Terms of Use for ${BRAND} cab booking services.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Use" updated="June 2026">
      <p>
        Welcome to {BRAND}. By accessing our website and booking a cab through us, you agree to the
        following Terms of Use. Please read them carefully before using our services.
      </p>

      <LegalSection heading="1. Booking and Services">
        <p>
          {BRAND} provides cab rental services including one-way drops, outstation round-trips,
          airport transfers and local transfers across Maharashtra. A booking is confirmed only once
          you receive a confirmation from our team. We reserve the right to accept or decline any
          booking request.
        </p>
      </LegalSection>

      <LegalSection heading="2. Fares and Payments">
        <p>
          Fares are communicated at the time of booking and may vary based on distance, vehicle
          type, route, tolls, taxes, and waiting time. Any additional charges such as state taxes,
          parking, and tolls are payable by the customer unless stated otherwise.
        </p>
      </LegalSection>

      <LegalSection heading="3. Customer Responsibilities">
        <p>
          Customers are expected to provide accurate pickup and drop details, be available at the
          scheduled pickup time, and conduct themselves respectfully towards our drivers and staff.
          Any illegal activity, damage to the vehicle, or carriage of prohibited goods is strictly
          forbidden.
        </p>
      </LegalSection>

      <LegalSection heading="4. Driver and Vehicle">
        <p>
          We strive to provide clean, well-maintained vehicles and professional, licensed drivers.
          In the rare event of a vehicle breakdown, we will make reasonable efforts to arrange an
          alternative vehicle at the earliest.
        </p>
      </LegalSection>

      <LegalSection heading="5. Limitation of Liability">
        <p>
          {BRAND} shall not be liable for delays or losses caused by events beyond our reasonable
          control, including traffic, weather, road conditions, or other unforeseen circumstances.
          Customers are advised to plan their journeys with adequate buffer time.
        </p>
      </LegalSection>

      <LegalSection heading="6. Changes to Terms">
        <p>
          We may update these Terms of Use from time to time. Continued use of our services
          constitutes acceptance of the revised terms.
        </p>
      </LegalSection>

      <LegalSection heading="7. Contact">
        <p>
          For any questions about these terms, please contact us at{" "}
          <a href={`mailto:${site.email}`} className="font-semibold text-brand">
            {site.email}
          </a>{" "}
          or call {site.phone}.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
