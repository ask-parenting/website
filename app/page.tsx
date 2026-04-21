import { buildWhatsAppLink, siteConfig } from "@/lib/site-config";
import SiteHeader from "@/app/components/layout/SiteHeader";
import SiteFooter from "@/app/components/layout/SiteFooter";
import HeroSection from "@/app/components/sections/HeroSection";
import HelpTopicsSection from "@/app/components/sections/HelpTopicsSection";
import HowItWorksSection from "@/app/components/sections/HowItWorksSection";
import WhyParentsLoveSection from "@/app/components/sections/WhyParentsLoveSection";
import AboutSection from "@/app/components/sections/AboutSection";

export default function Home() {
  const whatsappLink = buildWhatsAppLink(
    siteConfig.whatsapp.businessNumber,
    siteConfig.whatsapp.prefilledText
  );

  return (
    <>
      <SiteHeader whatsappLink={whatsappLink} />

      <main className="page-shell">
        <HeroSection whatsappLink={whatsappLink} />
        <HelpTopicsSection />
        <HowItWorksSection whatsappLink={whatsappLink} />
        <WhyParentsLoveSection />
        <AboutSection />
      </main>

      <SiteFooter whatsappLink={whatsappLink} />
    </>
  );
}
