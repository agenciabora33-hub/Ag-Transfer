import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { HomeLibertadoresBanner } from '../components/HomeLibertadoresBanner';
import { Hero } from '../components/Hero';
import { ServicesSection } from '../components/ServicesSection';
import { AuthoritySection } from '../components/AuthoritySection';
import { FleetSection } from '../components/FleetSection';
import { CoverageSection } from '../components/CoverageSection';
import { ReviewsSection } from '../components/ReviewsSection';
import { FAQSection } from '../components/FAQSection';

interface HomePageProps {
  onOpenQuoteModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenQuoteModal }) => {
  return (
    <div className="flex flex-col">
      <SEOHead
        title="AG Transfer | Transporte Executivo & Transfer Serra Gaúcha"
        description="Transfer executivo privativo para aeroportos POA e CXJ, passeios em Gramado, Canela, Vale dos Vinhedos e viagens especiais. Atendimento de segunda a domingo, das 05h às 23h."
        canonicalPath="/"
      />
      <HomeLibertadoresBanner />
      <main id="main-content">
        <Hero onOpenQuoteModal={onOpenQuoteModal} />
        <ServicesSection />
        <AuthoritySection />
        <FleetSection />
        <CoverageSection />
        <ReviewsSection />
        <FAQSection />
      </main>
    </div>
  );
};
