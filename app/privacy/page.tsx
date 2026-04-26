import SiteHeader from "@/app/components/layout/SiteHeader";
import { buildWhatsAppLink, siteConfig } from "@/lib/site-config";

export default function PrivacyPage() {
  const whatsappLink = buildWhatsAppLink(
    siteConfig.whatsapp.businessNumber,
    siteConfig.whatsapp.prefilledText
  );

  return (
    <>
      <SiteHeader whatsappLink={whatsappLink} />

      <main className="legal-page">
        <h1>Privacy Policy</h1>
        <p>Effective date: April 26, 2026</p>
        <p>
          Parenting AI may process parent-provided messages and child-development context to deliver
          guidance, reminders, and milestone tracking within WhatsApp.
        </p>
        <p>
          We collect only information required to provide the service, improve response quality, and
          maintain security. We do not sell personal data.
        </p>
        <p>
          Categories of data we may process include account identifiers you share, messages, child age and
          milestone context, and usage logs required for reliability and abuse prevention.
        </p>
        <h2>WhatsApp as a data channel</h2>
        <p>
          When you interact with our service via WhatsApp, your phone number and messages pass through Meta
          Platforms&apos; infrastructure. Meta processes this data under its own Privacy Policy in addition to
          ours. See
          {" "}
          <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
            whatsapp.com/legal/privacy-policy
          </a>
          .
        </p>
        <p>
          We use this data to operate the service, personalize responses, maintain safety, and improve quality.
          We do not use your data for unrelated advertising.
        </p>
        <p>
          Data may be processed by essential service providers that help us run hosting, delivery, and analytics.
          Where required, we apply contractual and technical safeguards.
        </p>
        <p>
          Conversation logs are retained for 90 days to support service continuity. Account identifiers are
          retained until deletion is requested. Security and usage logs are retained for 180 days. Deletion
          requests are completed within 30 days of verification.
        </p>
        <h2>Messaging opt-out</h2>
        <p>
          You can stop messages at any time by replying STOP to any message, or by emailing
          {" "}
          <a href="mailto:hello@askparenting.com">hello@askparenting.com</a>
          {" "}
          with the subject &quot;Opt out&quot;. We process opt-out requests within 24 hours.
        </p>
        <p>
          We apply reasonable security controls, including encryption and access controls, to protect data.
          No method of transmission or storage is fully risk-free.
        </p>
        <p>
          This service is intended for parents and caregivers. If you believe a child has provided personal data
          directly, contact us so we can investigate and remove it where appropriate.
        </p>
        <p>
          We may update this Privacy Policy from time to time. Material updates will be reflected by revising
          the effective date on this page.
        </p>
        <p>
          For any privacy request or data deletion request, email
          {" "}
          <a href="mailto:hello@askparenting.com">hello@askparenting.com</a>
          . We respond within 7 business days.
        </p>
      </main>
    </>
  );
}
