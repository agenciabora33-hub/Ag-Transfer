import React from 'react';
import { Hero } from '../components/Hero';
import { ServicesSection } from '../components/ServicesSection';
import { AuthoritySection } from '../components/AuthoritySection';
import { FleetSection } from '../components/FleetSection';
import { CoverageSection } from '../components/CoverageSection';
import { ReviewsSection } from '../components/ReviewsSection';
import { FAQSection } from '../components/FAQSection';
import { SEOHead } from '../components/SEOHead';
import { COMPANY_NAP } from '../data/companyData';
import { CITIES_SERVED } from '../data/cityData';

interface HomePageProps {
  onOpenQuoteModal: (serviceTitle?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenQuoteModal }) => {
  const homeSchemaGraph = [
    {
      '@type': 'WebSite',
      '@id': 'https://ag-transfer.vercel.app/#website',
      url: 'https://ag-transfer.vercel.app/',
      name: 'AG Transfer & Transporte Executivo',
      description: 'Transporte executivo de alto padrão e transfers privativos na Serra Gaúcha.',
      inLanguage: 'pt-BR',
      publisher: {
        '@id': 'https://ag-transfer.vercel.app/#service',
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Início',
          item: 'https://ag-transfer.vercel.app/',
        },
      ],
    },
    {
      '@type': 'TaxiService',
      '@id': 'https://ag-transfer.vercel.app/#taxi-service',
      name: COMPANY_NAP.name,
      alternateName: COMPANY_NAP.shortName,
      image: 'https://ag-transfer.vercel.app/logo.png',
      logo: 'https://ag-transfer.vercel.app/logo.png',
      telephone: COMPANY_NAP.phoneRaw,
      priceRange: '$$$',
      areaServed: CITIES_SERVED.map((c) => ({
        '@type': 'City',
        name: c.name,
      })),
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        reviewCount: '200',
        bestRating: '5',
        worstRating: '1',
      },
    },
  ];

  return (
    <>
      <SEOHead
        title="AG Transfer | Transporte Executivo na Serra Gaúcha | Gramado, Canela e Bento Gonçalves"
        description="Transporte executivo e transfer premium na Serra Gaúcha. Especialistas em Gramado, Canela, Bento Gonçalves (Vale dos Vinhedos) e aeroportos (POA / CXJ). Atendimento 24h."
        canonicalUrl="https://ag-transfer.vercel.app/"
        keywords={[
          'transfer gramado',
          'transfer porto alegre gramado',
          'transporte executivo serra gaucha',
          'transfer aeroporto caxias do sul cxj',
          'transfer aeroporto salgado filho poa',
          'tour vale dos vinhedos bento goncalves',
          'transfer canela',
          'ag transfer',
        ]}
        geoPlaceName="Caxias do Sul"
        geoPosition={COMPANY_NAP.geoCoordinates}
        schemaGraph={homeSchemaGraph}
      />

      <main className="flex-1">
        {/* 1. Hero Section (Official Logo Badge + 3D Tilt Simulator + E-E-A-T) */}
        <Hero onOpenQuoteModal={() => onOpenQuoteModal()} />

        {/* 2. Executive Services */}
        <ServicesSection onSelectServiceForQuote={(title) => onOpenQuoteModal(title)} />

        {/* 3. Authority & Confidence Pillars (E-E-A-T + Official Logo) */}
        <AuthoritySection />

        {/* 4. Executive Fleet Showcase */}
        <FleetSection onSelectVehicleForQuote={(vehName) => onOpenQuoteModal(`Reserva de Veículo: ${vehName}`)} />

        {/* 5. Geographic Coverage & Routes */}
        <CoverageSection />

        {/* 6. Social Proof */}
        <ReviewsSection />

        {/* 7. FAQ */}
        <FAQSection />
      </main>
    </>
  );
};
