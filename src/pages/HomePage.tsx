import React, { useEffect } from 'react';
import { Hero } from '../components/Hero';
import { ServicesSection } from '../components/ServicesSection';
import { AuthoritySection } from '../components/AuthoritySection';
import { FleetSection } from '../components/FleetSection';
import { CoverageSection } from '../components/CoverageSection';
import { ReviewsSection } from '../components/ReviewsSection';
import { FAQSection } from '../components/FAQSection';

interface HomePageProps {
  onOpenQuoteModal: (serviceTitle?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenQuoteModal }) => {
  useEffect(() => {
    // Set canonical and SEO metadata for Home
    document.title = "AG Transfer | Transporte Executivo na Serra Gaúcha | Gramado, Canela e Bento Gonçalves";
    
    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = "https://ag-transfer.vercel.app/";

    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (metaDesc) {
      metaDesc.content = "Transporte executivo e transfer premium na Serra Gaúcha. Especialistas em Gramado, Canela, Bento Gonçalves (Vale dos Vinhedos) e aeroportos (POA / CXJ). Atendimento 24h.";
    }

    // OG URL
    let ogUrl = document.querySelector('meta[property="og:url"]') as HTMLMetaElement | null;
    if (ogUrl) {
      ogUrl.content = "https://ag-transfer.vercel.app/";
    }

    // Clean up any service-specific dynamic JSON-LD
    const dynamicJsonLd = document.getElementById('service-schema-jsonld');
    if (dynamicJsonLd) {
      dynamicJsonLd.remove();
    }
  }, []);

  return (
    <main className="flex-1">
      {/* 1. Hero Section (3D Tilt Simulator + Floating Badges + H1 + E-E-A-T) */}
      <Hero onOpenQuoteModal={() => onOpenQuoteModal()} />

      {/* 2. Executive Services (H2 + Dynamic Motion Asymmetric Bento Grid with Links to Dedicated URLs) */}
      <ServicesSection onSelectServiceForQuote={(title) => onOpenQuoteModal(title)} />

      {/* 3. Authority & Confidence Pillars (E-E-A-T + GBP + Motion) */}
      <AuthoritySection />

      {/* 4. Executive Fleet Showcase (Motion layout + 3D Hover) */}
      <FleetSection onSelectVehicleForQuote={(vehName) => onOpenQuoteModal(`Reserva de Veículo: ${vehName}`)} />

      {/* 5. Geographic Coverage & Routes (GEO SEO + Motion Table & Card) */}
      <CoverageSection />

      {/* 6. Social Proof (Google Reviews 5.0 + 200+ GBP + Motion Cards) */}
      <ReviewsSection />

      {/* 7. FAQ (Animated Accordion) */}
      <FAQSection />
    </main>
  );
};
