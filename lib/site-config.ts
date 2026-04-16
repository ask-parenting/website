export const siteConfig = {
  brand: "Parenting AI",
  headline: "Your 24/7 Digital Co-Parent, Right in WhatsApp.",
  subheadline:
    "No apps to download. Just text us at 3:00 AM for milestone tracking, feeding logs, and instant peace of mind.",
  whatsapp: {
    businessNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "YOUR_BUSINESS_NUMBER",
    prefilledText: "Hi Parenting AI!"
  },
  ownershipStatement:
    "Parenting AI is a product of AvNeer Solutions Private Limited.",
  legalAddress:
    process.env.NEXT_PUBLIC_LEGAL_ADDRESS ??
    "[REPLACE_WITH_EXACT_META_VERIFICATION_ADDRESS]",
  valuePillars: [
    {
      title: "Dynamic Check-ins",
      description: "Proactive messages tracking sleep and fever logs."
    },
    {
      title: "Milestone Tracking",
      description:
        "Silently logs growth data (like first steps or starting solids) from your casual texts."
    },
    {
      title: "Administrative Reminders",
      description:
        "Mental load relief for vaccination schedules and seasonal advice."
    }
  ]
};

export function buildWhatsAppLink(number: string, prefilledText: string) {
  const encoded = encodeURIComponent(prefilledText);
  return `https://wa.me/${number}?text=${encoded}`;
}
