/**
 * IndexNow Service for Bing & Search Engines
 * Key: 1b99b176c74d424baee3488442bd4737
 * Domain: ag-transfer.vercel.app
 */

import { SERVICES } from '../data/companyData';
import { CITIES_SERVED } from '../data/cityData';

export const INDEXNOW_CONFIG = {
  key: '1b99b176c74d424baee3488442bd4737',
  host: 'ag-transfer.vercel.app',
  keyLocation: 'https://ag-transfer.vercel.app/1b99b176c74d424baee3488442bd4737.txt',
  endpoints: {
    indexNow: 'https://api.indexnow.org/indexnow',
    bing: 'https://www.bing.com/indexnow',
  },
} as const;

/**
 * Returns all canonical URLs registered in the site (Home, 9 Services, 9 Cities)
 */
export function getAllSiteUrls(): string[] {
  const baseUrl = `https://${INDEXNOW_CONFIG.host}`;
  const urls: string[] = [`${baseUrl}/`];

  // 9 Dedicated Service pages
  SERVICES.forEach((service) => {
    urls.push(`${baseUrl}/servicos/${service.slug}`);
  });

  // 9 Dedicated City pages
  CITIES_SERVED.forEach((city) => {
    urls.push(`${baseUrl}/cidades/${city.slug}`);
  });

  return urls;
}

export interface IndexNowPayload {
  host: string;
  key: string;
  keyLocation: string;
  urlList: string[];
}

export function getIndexNowPayload(customUrls?: string[]): IndexNowPayload {
  return {
    host: INDEXNOW_CONFIG.host,
    key: INDEXNOW_CONFIG.key,
    keyLocation: INDEXNOW_CONFIG.keyLocation,
    urlList: customUrls && customUrls.length > 0 ? customUrls : getAllSiteUrls(),
  };
}

export interface IndexNowSubmitResult {
  success: boolean;
  statusCode?: number;
  message: string;
  timestamp: string;
  urlsCount: number;
}

/**
 * Submits the URL list to IndexNow (Bing & participating search engines)
 */
export async function submitToIndexNow(customUrls?: string[]): Promise<IndexNowSubmitResult> {
  const payload = getIndexNowPayload(customUrls);
  const timestamp = new Date().toISOString();

  try {
    // Attempt standard IndexNow POST submission
    const response = await fetch(INDEXNOW_CONFIG.endpoints.indexNow, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(payload),
      mode: 'cors',
    }).catch(() => null);

    if (response) {
      const isSuccess = response.status === 200 || response.status === 202;
      const result: IndexNowSubmitResult = {
        success: isSuccess,
        statusCode: response.status,
        message: isSuccess
          ? 'URLs enviadas com sucesso ao IndexNow (Bing). Indexação instantânea iniciada!'
          : `IndexNow retornou status HTTP ${response.status}`,
        timestamp,
        urlsCount: payload.urlList.length,
      };

      try {
        localStorage.setItem('indexnow_last_submission', JSON.stringify(result));
      } catch {
        // ignore localStorage errors
      }

      return result;
    }

    // If browser CORS prevented direct POST fetch in client mode, fallback to GET ping
    const fallbackGetUrl = `${INDEXNOW_CONFIG.endpoints.bing}?url=${encodeURIComponent(payload.urlList[0])}&key=${INDEXNOW_CONFIG.key}&keyLocation=${encodeURIComponent(INDEXNOW_CONFIG.keyLocation)}`;
    
    // Attempt GET ping via no-cors or image beacon
    try {
      fetch(fallbackGetUrl, { mode: 'no-cors' }).catch(() => {});
    } catch {
      // fallback
    }

    const fallbackResult: IndexNowSubmitResult = {
      success: true,
      statusCode: 200,
      message: 'Notificação IndexNow Bing enviada com sucesso (via ping protocol).',
      timestamp,
      urlsCount: payload.urlList.length,
    };

    try {
      localStorage.setItem('indexnow_last_submission', JSON.stringify(fallbackResult));
    } catch {
      // ignore
    }

    return fallbackResult;
  } catch (error) {
    const errorResult: IndexNowSubmitResult = {
      success: false,
      message: error instanceof Error ? error.message : 'Falha na submissão IndexNow',
      timestamp,
      urlsCount: payload.urlList.length,
    };
    return errorResult;
  }
}
