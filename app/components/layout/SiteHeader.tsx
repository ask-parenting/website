import { siteConfig } from "@/lib/site-config";

interface SiteHeaderProps {
  whatsappLink: string;
}

const navLinks = [
  { href: "#helps-title", label: "What It Helps With" },
  { href: "#how-it-works-title", label: "How It Works" },
  { href: "#why-love-title", label: "Why Parents Love This" },
];

export default function SiteHeader({ whatsappLink }: SiteHeaderProps) {
  return (
    <header className="site-header" aria-label="Site header">
      <div className="topbar shell-inner">
        <div className="topbar-left">
          <p className="brand-mark">{siteConfig.brand}</p>
          <p className="micro-tag">Care via WhatsApp</p>
        </div>

        <nav className="topbar-nav" aria-label="Primary">
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>

        <a
          className="nav-signup"
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
        >
          Start on WhatsApp
        </a>
      </div>
    </header>
  );
}
