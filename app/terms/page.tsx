import type { Metadata } from "next";
import SiteHeader from "@/app/components/layout/SiteHeader";
import { buildWhatsAppLink, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms of Service | Ask Parenting",
  description: "Terms of Service for Ask Parenting.",
  alternates: {
    canonical: "/terms/",
  },
};

export default function TermsPage() {
  const whatsappLink = buildWhatsAppLink(
    siteConfig.whatsapp.businessNumber,
    siteConfig.whatsapp.prefilledText
  );

  return (
    <>
      <SiteHeader whatsappLink={whatsappLink} />

      <main className="legal-page">
        <h1>Terms of Service</h1>
        <p>Effective date: May 9, 2026</p>
        <p>
          Ask Parenting is operated by AvNeer Solutions Private Limited. By using this service, you agree to
          these terms.
        </p>

        <h2>Important medical disclaimer</h2>
        <ul>
          <li>This service provides educational parenting support only.</li>
          <li>It is not a doctor, hospital, or emergency service.</li>
          <li>For urgent symptoms, call your local emergency service or a licensed doctor immediately.</li>
        </ul>

        <h2>Your responsibilities</h2>
        <ul>
          <li>Share accurate information when asking questions.</li>
          <li>Use guidance responsibly and confirm critical decisions with qualified professionals.</li>
          <li>Do not misuse the service or attempt unauthorized access.</li>
        </ul>

        <h2>Service availability</h2>
        <p>
          We may update, pause, or change features at any time for product, legal, or security reasons.
        </p>
        <p>
          Features can include AI chat replies, milestone guidance, and reminder/check-in messages on WhatsApp.
        </p>

        <h2>WhatsApp platform</h2>
        <p>
          This service works through WhatsApp, owned by Meta Platforms, Inc. Your use of WhatsApp is also
          governed by WhatsApp terms and privacy policy.
        </p>
        <p>
          Read WhatsApp terms here:
          {" "}
          <a href="https://www.whatsapp.com/legal/terms-of-service" target="_blank" rel="noopener noreferrer">
            whatsapp.com/legal/terms-of-service
          </a>
          .
        </p>

        <h2>Warranty and liability</h2>
        <p>
          The service is provided on an "as is" and "as available" basis. To the maximum extent allowed by law,
          AvNeer Solutions Private Limited is not liable for indirect or consequential damages from service use.
        </p>

        <h2>Governing law</h2>
        <p>
          These terms are governed by applicable laws of India, and disputes are subject to courts with
          competent jurisdiction.
        </p>
      </main>
    </>
  );
}
