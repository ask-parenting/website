import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs | Parenting AI",
  description: "Frequently asked questions about Parenting AI.",
  alternates: {
    canonical: "/faq/",
  },
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children;
}
