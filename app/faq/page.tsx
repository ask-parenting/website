"use client";

import { useMemo, useState } from "react";
import { faqs } from "@/lib/content";
import SiteHeader from "@/app/components/layout/SiteHeader";
import { buildWhatsAppLink, siteConfig } from "@/lib/site-config";

export default function FaqPage() {
  const whatsappLink = buildWhatsAppLink(
    siteConfig.whatsapp.businessNumber,
    siteConfig.whatsapp.prefilledText
  );
  const [query, setQuery] = useState("");

  const filteredFaqs = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return faqs;

    return faqs.filter(({ question, answer }) => {
      const haystack = `${question} ${answer}`.toLowerCase();
      return haystack.includes(normalizedQuery);
    });
  }, [query]);

  return (
    <>
      <SiteHeader whatsappLink={whatsappLink} />

      <main className="legal-page faq-page">
        <h1>Frequently Asked Questions</h1>
        <p className="faq-page-intro">
          Find quick answers about support scope, privacy, and how Parenting AI works.
        </p>

        <div className="faq-search-wrap">
          <label htmlFor="faq-search" className="faq-search-label">Search FAQs</label>
          <input
            id="faq-search"
            type="search"
            className="faq-search-input"
            placeholder="Search by topic, symptom, age, privacy..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            aria-describedby="faq-search-count"
          />
          <p id="faq-search-count" className="faq-search-count">
            {filteredFaqs.length} result{filteredFaqs.length === 1 ? "" : "s"}
          </p>
        </div>

        <section className="faq-section" aria-label="FAQ results">
          {filteredFaqs.length > 0 ? (
            <div className="faq-list">
              {filteredFaqs.map((faq) => (
                <details key={faq.question} className="faq-item">
                  <summary>{faq.question}</summary>
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          ) : (
            <p className="faq-empty">No matching FAQs found. Try a different keyword.</p>
          )}
        </section>
      </main>
    </>
  );
}
