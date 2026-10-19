import React, { useEffect } from 'react';
import { COMPANY_NAP } from '../data/companyData';

export interface SEOHeadProps {
  title: string;
  description: string;
  canonicalUrl: string;
  keywords?: string[];
  ogType?: 'website' | 'article';
  geoPlaceName?: string;
  geoPosition?: { lat: number; lng: number };
  schemaGraph?: Record<string, any>[];
}

/**
 * SEOHead - Centralized SEO, GEO, OpenGraph, Twitter Cards and Schema.org JSON-LD manager.
 * Ensures consistent metadata, canonical tags, and official logo on every single page.
 */
export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonicalUrl,
  keywords = [],
  ogType = 'website',
  geoPlaceName = 'Caxias do Sul',
  geoPosition = COMPANY_NAP.geoCoordinates,
  schemaGraph = [],
}) => {
  useEffect(() => {
    // 1. Page Title
    const formattedTitle = title.includes('AG Transfer') ? title : `${title} | AG Transfer`;
    document.title = formattedTitle;

    // Helper to update or create <meta> tags
    const setMetaTag = (attribute: 'name' | 'property', key: string, content: string) => {
      let element = document.querySelector(`meta[${attribute}="${key}"]`) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Helper to update or create <link> tags
    const setLinkTag = (rel: string, href: string, type?: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
      if (type) {
        element.setAttribute('type', type);
      }
    };

    // 2. Canonical URL
    setLinkTag('canonical', canonicalUrl);

    // 3. Favicon & Apple Touch Icons (Always pointing to official logo.png)
    setLinkTag('icon', '/logo.png', 'image/png');
    setLinkTag('apple-touch-icon', '/logo.png');

    // 4. Primary SEO Meta Tags
    setMetaTag('name', 'description', description);
    if (keywords.length > 0) {
      setMetaTag('name', 'keywords', keywords.join(', '));
    }
    setMetaTag('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    setMetaTag('name', 'author', COMPANY_NAP.name);

    // 5. GEO / Local SEO Meta Tags
    setMetaTag('name', 'geo.region', 'BR-RS');
    setMetaTag('name', 'geo.placename', geoPlaceName);
    setMetaTag('name', 'geo.position', `${geoPosition.lat};${geoPosition.lng}`);
    setMetaTag('name', 'ICBM', `${geoPosition.lat}, ${geoPosition.lng}`);

    // 6. OpenGraph (Facebook / WhatsApp / LinkedIn / Slack)
    const absoluteLogoUrl = 'https://ag-transfer.vercel.app/logo.png';
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:site_name', COMPANY_NAP.name);
    setMetaTag('property', 'og:title', formattedTitle);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:image', absoluteLogoUrl);
    setMetaTag('property', 'og:image:secure_url', absoluteLogoUrl);
    setMetaTag('property', 'og:image:type', 'image/png');
    setMetaTag('property', 'og:image:width', '512');
    setMetaTag('property', 'og:image:height', '512');
    setMetaTag('property', 'og:image:alt', 'Logo Oficial AG Transfer & Transporte Executivo');
    setMetaTag('property', 'og:locale', 'pt_BR');

    // 7. Twitter Cards
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', formattedTitle);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', absoluteLogoUrl);
    setMetaTag('name', 'twitter:image:alt', 'Logo Oficial AG Transfer & Transporte Executivo');

    // 8. Base Schema Organization/LocalBusiness that is always merged
    const baseLocalBusiness = {
      '@type': 'TaxiService',
      '@id': 'https://ag-transfer.vercel.app/#service',
      name: COMPANY_NAP.name,
      alternateName: COMPANY_NAP.shortName,
      url: 'https://ag-transfer.vercel.app/',
      logo: absoluteLogoUrl,
      image: absoluteLogoUrl,
      telephone: COMPANY_NAP.phoneRaw,
      priceRange: '$$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: COMPANY_NAP.address,
        addressLocality: COMPANY_NAP.city,
        addressRegion: COMPANY_NAP.state,
        postalCode: COMPANY_NAP.zip,
        addressCountry: 'BR',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: COMPANY_NAP.geoCoordinates.lat,
        longitude: COMPANY_NAP.geoCoordinates.lng,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '00:00',
          closes: '23:59',
        },
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        reviewCount: '200',
        bestRating: '5',
        worstRating: '1',
      },
      hasMap: COMPANY_NAP.gbpUrl,
      sameAs: [COMPANY_NAP.gbpUrl],
    };

    // Clean up any old dynamic schema scripts
    const oldCityScript = document.getElementById('city-structured-data');
    if (oldCityScript) oldCityScript.remove();
    const oldServiceScript = document.getElementById('service-schema-jsonld');
    if (oldServiceScript) oldServiceScript.remove();

    // Inject Unified JSON-LD script tag
    const scriptId = 'ag-transfer-unified-jsonld';
    let scriptTag = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = scriptId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const graph = [
      baseLocalBusiness,
      ...schemaGraph,
    ];

    const jsonLdPayload = {
      '@context': 'https://schema.org',
      '@graph': graph,
    };

    scriptTag.textContent = JSON.stringify(jsonLdPayload, null, 2);

    return () => {
      // Cleanup on unmount if needed
    };
  }, [title, description, canonicalUrl, keywords, ogType, geoPlaceName, geoPosition, schemaGraph]);

  return null;
};
