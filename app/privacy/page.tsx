import type { Metadata } from "next";
import SiteHeader from "@/app/components/layout/SiteHeader";
import { buildWhatsAppLink, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy | Ask Parenting",
  description: "Privacy Policy for Ask Parenting.",
  alternates: {
    canonical: "/privacy/",
  },
};

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
        <p>Effective date: May 9, 2026</p>
        <p>
          Ask Parenting (operated by AvNeer Solutions Private Limited) provides parenting support on WhatsApp.
          This page explains what data we use and why.
        </p>

        <h2>What we collect</h2>
        <ul>
          <li>Your WhatsApp phone number</li>
          <li>Messages you send us</li>
          <li>Child context you choose to share (for example: age, milestones, routines)</li>
          <li>Basic technical logs for security and reliability</li>
        </ul>

        <h2>How we use data</h2>
        <ul>
          <li>To reply to your parenting questions</li>
          <li>To personalize guidance based on what you share</li>
          <li>To send requested follow-ups such as reminders and check-ins</li>
          <li>To improve safety, quality, and service reliability</li>
        </ul>
        <p>We do not sell your personal data.</p>
        <p>We do not use your data for unrelated advertising.</p>

        <h2>WhatsApp and Meta</h2>
        <p>
          This service is built on the WhatsApp Business API, operated by Meta Platforms, Inc. Your messages
          and phone number pass through WhatsApp infrastructure as part of this integration.
        </p>
        <p>
          WhatsApp handles this data under its own policy:
          {" "}
          <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
            whatsapp.com/legal/privacy-policy
          </a>
          .
        </p>
        <p>
          If we use a WhatsApp Business Solution Provider (BSP) to deliver messages, that provider may process
          your phone number and message metadata solely to transmit messages on our behalf. We will name any
          such provider in an update to this section when applicable.
        </p>

        <h2>Opt-out of messages</h2>
        <ul>
          <li>Reply <strong>STOP</strong> on WhatsApp anytime, or</li>
          <li>
            Email
            {" "}
            <a href="mailto:hello@askparenting.com">hello@askparenting.com</a>
            {" "}
            with subject: "Opt out"
          </li>
        </ul>
        <p>We process opt-out requests within 24 hours.</p>

        <h2>Data retention</h2>
        <ul>
          <li>Conversation logs: 90 days</li>
          <li>Security and usage logs: 180 days</li>
          <li>Account/contact identifiers: until deletion request</li>
          <li>Reminder preferences and milestone context: until deletion request or opt-out</li>
        </ul>
        <p>
          To request deletion, email
          {" "}
          <a href="mailto:hello@askparenting.com">hello@askparenting.com</a>
          {" "}
          with subject: "Delete my data".
        </p>
        <p>We complete verified deletion requests within 30 days.</p>

        <h2>Children's data</h2>
        <p>
          The service is for parents and caregivers. If you believe a child shared personal data directly,
          contact us so we can review and remove it where appropriate.
        </p>

        <h2>Security</h2>
        <p>
          We use reasonable safeguards like encryption and access controls. No online system is 100% risk-free.
        </p>

        <h2>Policy updates</h2>
        <p>
          We may update this policy. Any major update will be reflected by changing the effective date on this page.
        </p>

        <h2>Contact</h2>
        <p>
          For privacy questions, opt-out, or deletion requests, email
          {" "}
          <a href="mailto:hello@askparenting.com">hello@askparenting.com</a>
          . We respond within 7 business days.
        </p>
        <p>
          For service terms, see our
          {" "}
          <a href="/terms">Terms of Service</a>
          .
        </p>
      </main>
    </>
  );
}
