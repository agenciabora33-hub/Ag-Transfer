/**
 * Google Analytics 4 (GA4) & GTM Tracking Utilities
 * Safely dispatches dataLayer and gtag events without throwing errors
 */

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (command: string, ...args: unknown[]) => void;
  }
}

export function trackEvent(
  eventName: 'click_whatsapp' | 'click_phone' | 'form_submit' | 'scroll_faq' | string,
  params: Record<string, unknown> = {}
) {
  try {
    const payload = {
      event: eventName,
      timestamp: new Date().toISOString(),
      page_path: window.location.pathname,
      ...params,
    };

    // 1. Google Tag Manager dataLayer
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push(payload);

      // 2. Direct gtag() support
      if (typeof window.gtag === 'function') {
        window.gtag('event', eventName, params);
      }
    }

    if (process.env.NODE_ENV !== 'production') {
      console.log(`[GA4 Event] ${eventName}:`, payload);
    }
  } catch (error) {
    // Fail silently in tracking
    console.debug('Analytics tracking skipped:', error);
  }
}
