import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/LegalPage";
import { BRAND, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Learn how ${BRAND} collects, uses and protects your personal information.`,
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="June 2025">
      <p>
        {BRAND} respects your privacy and is committed to protecting the personal information you
        share with us. This Privacy Policy explains what we collect, how we use it, and the choices
        you have.
      </p>

      <LegalSection heading="1. Information We Collect">
        <p>
          We collect information you provide when booking a cab, such as your name, phone number,
          email, and pickup/drop locations. We may also collect basic usage data when you browse our
          website to help improve our services.
        </p>
      </LegalSection>

      <LegalSection heading="2. How We Use Your Information">
        <p>
          Your information is used to confirm and fulfil bookings, communicate trip details, provide
          customer support, and improve our service. We may contact you regarding your booking or to
          respond to your enquiries.
        </p>
      </LegalSection>

      <LegalSection heading="3. Information Sharing">
        <p>
          We share your booking details only with the assigned driver and our operational team to
          complete your trip. We do not sell your personal information to third parties. We may
          disclose information if required by law.
        </p>
      </LegalSection>

      <LegalSection heading="4. Data Security">
        <p>
          We take reasonable measures to protect your personal information from unauthorised access,
          alteration, or disclosure. However, no method of transmission over the internet is
          completely secure.
        </p>
      </LegalSection>

      <LegalSection heading="5. Your Choices">
        <p>
          You may request access to, correction of, or deletion of your personal information by
          contacting us. You can also opt out of non-essential communications at any time.
        </p>
      </LegalSection>

      <LegalSection heading="6. Contact">
        <p>
          For any privacy-related questions, contact us at{" "}
          <a href={`mailto:${site.email}`} className="font-semibold text-brand">
            {site.email}
          </a>{" "}
          or call {site.phone}.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
