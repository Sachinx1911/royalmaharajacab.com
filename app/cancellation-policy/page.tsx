import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/LegalPage";
import { BRAND, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Refunds & Cancellation",
  description: `Refunds and cancellation policy for ${BRAND} cab bookings.`,
  alternates: { canonical: "/cancellation-policy" },
};

export default function CancellationPage() {
  return (
    <LegalPage title="Refunds & Cancellation Policy" updated="June 2026">
      <p>
        At {BRAND}, we aim to make your travel planning as flexible and transparent as possible.
        This policy explains how cancellations and refunds are handled for bookings made with us.
      </p>

      <LegalSection heading="1. Cancellation by Customer">
        <p>
          You may cancel your booking by contacting our team over phone or email. We recommend
          cancelling as early as possible so we can re-allocate the vehicle. Cancellation charges,
          if any, depend on how close to the scheduled pickup time the cancellation is made.
        </p>
      </LegalSection>

      <LegalSection heading="2. Cancellation Charges">
        <p>
          For most bookings, cancellations made well in advance of the pickup time are free of
          charge. Cancellations made close to the pickup time, or no-shows, may attract a nominal
          cancellation fee to cover driver allocation and operational costs.
        </p>
      </LegalSection>

      <LegalSection heading="3. Cancellation by Us">
        <p>
          In the rare event that {BRAND} is unable to fulfil a confirmed booking, we will make every
          effort to arrange an alternative vehicle. If we cannot, any advance amount paid will be
          refunded in full.
        </p>
      </LegalSection>

      <LegalSection heading="4. Refund Process">
        <p>
          Eligible refunds are processed to the original payment method within 5–7 business days
          from the date of cancellation confirmation. Actual credit timelines may vary depending on
          your bank or payment provider.
        </p>
      </LegalSection>

      <LegalSection heading="5. Contact">
        <p>
          For cancellations or refund queries, contact us at{" "}
          <a href={`mailto:${site.email}`} className="font-semibold text-brand">
            {site.email}
          </a>{" "}
          or call {site.phone}.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
