export const INDEXNOW_KEY = '1b99b176c74d424baee3488442bd4737';
export const INDEXNOW_HOST = 'www.aagtransfer.com.br';
export const INDEXNOW_KEY_LOCATION = `https://${INDEXNOW_HOST}/${INDEXNOW_KEY}.txt`;

export const ALL_CANONICAL_URLS: string[] = [
  'https://www.aagtransfer.com.br/',
  'https://www.aagtransfer.com.br/transfer-porto-alegre-montevideu',
  'https://www.aagtransfer.com.br/servicos/transfer-para-gramado',
  'https://www.aagtransfer.com.br/servicos/transfer-para-canela',
  'https://www.aagtransfer.com.br/servicos/transporte-executivo-gramado',
  'https://www.aagtransfer.com.br/servicos/transfer-porto-alegre-gramado',
  'https://www.aagtransfer.com.br/servicos/transfer-aeroporto-cxj-caxias',
  'https://www.aagtransfer.com.br/servicos/tour-vale-dos-vinhedos',
  'https://www.aagtransfer.com.br/servicos/tour-gramado-canela',
  'https://www.aagtransfer.com.br/servicos/viagens-corporativas-serra',
  'https://www.aagtransfer.com.br/servicos/motorista-particular-diaria',
  'https://www.aagtransfer.com.br/cidades/gramado',
  'https://www.aagtransfer.com.br/cidades/canela',
  'https://www.aagtransfer.com.br/cidades/bento-goncalves',
  'https://www.aagtransfer.com.br/cidades/caxias-do-sul',
  'https://www.aagtransfer.com.br/cidades/porto-alegre',
  'https://www.aagtransfer.com.br/cidades/garibaldi',
  'https://www.aagtransfer.com.br/cidades/nova-petropolis',
  'https://www.aagtransfer.com.br/cidades/farroupilha',
  'https://www.aagtransfer.com.br/cidades/flores-da-cunha',
];

export interface IndexNowSubmitResult {
  ok: boolean;
  status: number;
  message: string;
  endpoint: string;
}

export async function submitUrlsToIndexNow(urls: string[]): Promise<IndexNowSubmitResult> {
  const endpoint = 'https://api.indexnow.org/indexnow';
  const payload = {
    host: INDEXNOW_HOST,
    key: INDEXNOW_KEY,
    keyLocation: INDEXNOW_KEY_LOCATION,
    urlList: urls,
  };

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    return {
      ok: response.ok || response.status === 202,
      status: response.status,
      message:
        response.ok || response.status === 202
          ? `Solicitação enviada com sucesso para ${urls.length} URL(s) (HTTP ${response.status}).`
          : `Resposta do servidor IndexNow: HTTP ${response.status}.`,
      endpoint,
    };
  } catch {
    return {
      ok: false,
      status: 0,
      message:
        'Envio direto pelo navegador bloqueado por CORS ou rede. Utilize o comando cURL gerado ou envie diretamente pelo painel Microsoft Bing Webmaster Tools.',
      endpoint,
    };
  }
}
