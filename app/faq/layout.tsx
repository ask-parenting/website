import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs | Ask Parenting",
  description: "Frequently asked questions about Ask Parenting.",
  alternates: {
    canonical: "/faq/",
  },
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children;
}
