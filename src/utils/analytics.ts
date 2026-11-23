export type AnalyticsEventName =
  | 'whatsapp_click'
  | 'phone_click'
  | 'quote_submit'
  | 'service_view'
  | 'city_view'
  | 'montevideo_cta_click';

export interface AnalyticsPayload {
  source?: string;
  service?: string;
  origin?: string;
  destination?: string;
  city?: string;
  passengers?: string;
}

export function trackEvent(eventName: AnalyticsEventName, payload: AnalyticsPayload = {}): void {
  if (typeof window === 'undefined') return;

  try {
    const win = window as unknown as {
      dataLayer?: Array<Record<string, unknown>>;
      gtag?: (...args: unknown[]) => void;
    };

    if (Array.isArray(win.dataLayer)) {
      win.dataLayer.push({
        event: eventName,
        ...payload,
        timestamp: new Date().toISOString(),
      });
    }

    if (typeof win.gtag === 'function') {
      win.gtag('event', eventName, payload);
    }
  } catch {
    // Non-blocking analytics guard
  }
}
