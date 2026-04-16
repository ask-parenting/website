import Link from "next/link";
import { buildWhatsAppLink, siteConfig } from "@/lib/site-config";

export default function Home() {
  const whatsappLink = buildWhatsAppLink(
    siteConfig.whatsapp.businessNumber,
    siteConfig.whatsapp.prefilledText
  );

  return (
    <main className="page-shell">
      <section className="hero section">
        <p className="eyebrow">Built for newborn parents</p>
        <h1>{siteConfig.headline}</h1>
        <p className="lead">{siteConfig.subheadline}</p>
        <a className="cta" href={whatsappLink} target="_blank" rel="noreferrer">
          Chat on WhatsApp
        </a>
      </section>

      <section className="section value-props" aria-labelledby="value-proposition-title">
        <h2 id="value-proposition-title">One thread. Three pillars of support.</h2>
        <div className="card-grid">
          {siteConfig.valuePillars.map((pillar) => (
            <article key={pillar.title} className="card">
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="section footer">
        <p className="legal-line">{siteConfig.ownershipStatement}</p>
        <p className="address">{siteConfig.legalAddress}</p>
        <nav className="legal-links" aria-label="Legal navigation">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
        </nav>
      </footer>
    </main>
  );
}
