import React, { useEffect } from 'react';
import { COMPANY_NAP } from '../data/companyData';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
  robots?: string;
  ogType?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonicalPath = '/',
  robots = 'index, follow',
  ogType = 'website',
}) => {
  useEffect(() => {
    const normalizedPath = canonicalPath === '/' ? '/' : canonicalPath.replace(/\/+$/, '');
    const fullUrl = `${COMPANY_NAP.siteUrl}${normalizedPath}`;

    document.title = title;

    const updateMeta = (selector: string, attr: 'name' | 'property', key: string, content: string) => {
      let tag = document.querySelector<HTMLMetaElement>(selector);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attr, key);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    updateMeta('meta[name="description"]', 'name', 'description', description);
    updateMeta('meta[name="robots"]', 'name', 'robots', robots);
    updateMeta('meta[property="og:type"]', 'property', 'og:type', ogType);
    updateMeta('meta[property="og:title"]', 'property', 'og:title', title);
    updateMeta('meta[property="og:description"]', 'property', 'og:description', description);
    updateMeta('meta[property="og:url"]', 'property', 'og:url', fullUrl);
    updateMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    updateMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);

    let canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', fullUrl);
  }, [title, description, canonicalPath, robots, ogType]);

  return null;
};
