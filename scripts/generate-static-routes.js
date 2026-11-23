import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');
const baseHtmlPath = path.join(distDir, 'index.html');

if (!fs.existsSync(baseHtmlPath)) {
  console.log('[generate-static-routes] dist/index.html not found, skipping.');
  process.exit(0);
}

let baseHtml = fs.readFileSync(baseHtmlPath, 'utf8');

// Inline main Vite CSS bundle into <head> to eliminate 100% render-blocking CSS roundtrip
const cssLinkRegex = /<link rel="stylesheet"[^>]*href="(\/assets\/[^"]+\.css)"[^>]*>/i;
const cssMatch = baseHtml.match(cssLinkRegex);
if (cssMatch && cssMatch[1]) {
  const cssRelPath = cssMatch[1].replace(/^\//, '');
  const cssFullPath = path.join(distDir, cssRelPath);
  if (fs.existsSync(cssFullPath)) {
    const cssContent = fs.readFileSync(cssFullPath, 'utf8');
    if (cssContent.length > 0 && cssContent.length < 120 * 1024) {
      baseHtml = baseHtml.replace(cssLinkRegex, `<style>${cssContent}</style>`);
      console.log(`  ✓ Inlined critical stylesheet (${cssRelPath}, ${(cssContent.length / 1024).toFixed(1)} KiB)`);
    }
  }
}

const cleanTemplateHtml = baseHtml;
const SITE_URL = 'https://www.aagtransfer.com.br';
const LOGO_URL = `${SITE_URL}/logo-sm.webp`;
const BORA_LINK = 'https://bora-digital-strategy.vercel.app/';

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function escapeJson(str) {
  return JSON.stringify(String(str));
}

const services = [
  {
    slug: 'transfer-para-gramado',
    name: 'Transfer Para Gramado VIP',
    route: 'Aeroportos POA / CXJ ⇄ Hotéis em Gramado',
    title: 'Transfer Para Gramado Privativo VIP | AG Transfer',
    description:
      'Transfer executivo privativo para Gramado saindo dos aeroportos de Porto Alegre (POA) ou Caxias do Sul (CXJ). Veículos novos, motoristas pontuais e atendimento das 05h às 23h.',
    highlights: [
      'Veículo 100% exclusivo para sua família ou grupo',
      'Recepção nominal no desembarque dos aeroportos POA e CXJ',
      'Cadeirinha infantil gratuita sob solicitação',
      'Monitoramento em tempo real de horários de voo',
    ],
  },
  {
    slug: 'transfer-para-canela',
    name: 'Transfer Para Canela VIP',
    route: 'Aeroportos POA / CXJ ⇄ Canela RS (CEP 95680-000)',
    title: 'Transfer Para Canela Privativo VIP | AG Transfer',
    description:
      'Transfer privativo para Canela RS saindo dos aeroportos de Porto Alegre (POA) e Caxias do Sul (CXJ). Transporte executivo com conforto, segurança e pontualidade britânica.',
    highlights: [
      'Cobertura completa em hotéis, chalés e condomínios de Canela (CEP 95680-000)',
      'Rota otimizada pela Rota Romântica (BR-116) ou RS-115',
      'Porta-malas amplo para bagagens grandes',
      'Atendimento diário de segunda a domingo, das 05h às 23h',
    ],
  },
  {
    slug: 'transporte-executivo-gramado',
    name: 'Transporte Executivo em Gramado',
    route: 'Serra Gaúcha · Eventos, Restaurantes e Negócios',
    title: 'Transporte Executivo em Gramado & Serra Gaúcha | AG Transfer',
    description:
      'Serviço de transporte executivo em Gramado, Canela e Serra Gaúcha. Frotas de alto padrão com sedans, SUVs e vans executivas para famílias e executivos exigentes.',
    highlights: [
      'Motoristas trajados com padrão executivo e discrição total',
      'Embarque programado para jantares, cafés coloniais e eventos',
      'Faturamento empresarial disponível para clientes corporativos',
      'Suporte direto via WhatsApp das 05h às 23h',
    ],
  },
  {
    slug: 'transfer-porto-alegre-gramado',
    name: 'Transfer Aeroporto Porto Alegre (POA) ⇄ Serra Gaúcha',
    route: 'Aeroporto Salgado Filho (POA) ⇄ Gramado / Canela / Bento',
    title: 'Transfer Aeroporto Porto Alegre (POA) ⇄ Serra Gaúcha | AG Transfer',
    description:
      'Transfer privativo conectando o Aeroporto Internacional Salgado Filho (POA) a Gramado e Canela. Recepção no desembarque e rastreamento de voos em tempo real.',
    highlights: [
      'Encontro rápido na porta de desembarque do Terminal POA',
      'Acompanhamento automático de horários de chegada e atrasos',
      'Valor fechado antes do embarque com pedágios inclusos',
      'Opções em Sedan, SUV Executivo ou Van para grupos',
    ],
  },
  {
    slug: 'transfer-aeroporto-cxj-caxias',
    name: 'Transfer Aeroporto de Caxias do Sul (CXJ)',
    route: 'Aeroporto Hugo Cantergiani (CXJ) ⇄ Serra Gaúcha',
    title: 'Transfer Aeroporto de Caxias do Sul (CXJ) | AG Transfer',
    description:
      'Transfer do Aeroporto Hugo Cantergiani (CXJ) em Caxias do Sul para Gramado, Canela e Bento Gonçalves. Rota mais curta e rápida para a Serra Gaúcha.',
    highlights: [
      'Acesso em 40–50 minutos até Bento Gonçalves e Garibaldi',
      'Trajeto panorâmico rápido até Gramado e Canela',
      'Cobertura ativa em Caxias do Sul e Flores da Cunha',
      'Embarque imediato sem espera de grupos terceiros',
    ],
  },
  {
    slug: 'tour-vale-dos-vinhedos',
    name: 'Tour Privativo Vale dos Vinhedos',
    route: 'Bento Gonçalves · Garibaldi · Pinto Bandeira',
    title: 'Tour Vale dos Vinhedos & Bento Gonçalves Privativo | AG Transfer',
    description:
      'Tour privativo exclusivo pelas melhores vinícolas de Bento Gonçalves, Garibaldi e Monte Belo do Sul. Roteiro personalizado com motorista à disposição o dia todo.',
    highlights: [
      'Deguste vinhos e espumantes sem preocupação com a estrada',
      'Itinerário flexível entre vinícolas boutique e tradicionais',
      'Saída do seu hotel em Gramado, Canela ou Bento Gonçalves',
      'Motorista exclusivo à disposição o dia inteiro',
    ],
  },
  {
    slug: 'tour-gramado-canela',
    name: 'Tour Privativo Gramado & Canela VIP',
    route: 'Lago Negro · Skyglass · Cascata do Caracol · Snowland',
    title: 'Tour Privativo Gramado & Canela VIP | AG Transfer',
    description:
      'Passeio turístico personalizado por Gramado e Canela nos melhores pontos turísticos sem pressa. Conforto e flexibilidade total para sua família.',
    highlights: [
      'Roteiro 100% personalizado conforme perfil da sua família',
      'Desembarque na porta das atrações sem longas caminhadas',
      'Zero espera por grupos turísticos ou paradas comerciais obrigatórias',
      'Conforto climatizado com embarque no hotel',
    ],
  },
  {
    slug: 'viagens-corporativas-serra',
    name: 'Transporte Corporativo & Feiras na Serra Gaúcha',
    route: 'Caxias do Sul · Bento · Gramado · Feiras e Congressos',
    title: 'Transporte Corporativo & Feiras na Serra Gaúcha | AG Transfer',
    description:
      'Transporte executivo para congressos, feiras de negócios (Mercopar, Fenin, Festuris) e viagens corporativas na Serra Gaúcha com nota fiscal e faturamento.',
    highlights: [
      'Atendimento coordenado para executivos, palestrantes e comitivas',
      'Sigilo, pontualidade rigorosa e etiqueta corporativa',
      'Emissão de Nota Fiscal e faturamento para empresas',
      'Cobertura entre POA, Caxias do Sul, Bento e Gramado',
    ],
  },
  {
    slug: 'motorista-particular-diaria',
    name: 'Motorista Particular por Diária na Serra Gaúcha',
    route: 'Disponibilidade por período ou diária (05h às 23h)',
    title: 'Motorista Particular por Diária na Serra Gaúcha | AG Transfer',
    description:
      'Contrate motorista executivo à disposição por período ou diária para compromissos, roteiros sob medida ou eventos especiais em Gramado e região.',
    highlights: [
      'Chauffeur exclusivo aguardando a cada parada da sua agenda',
      'Alterações de itinerário em tempo real ao longo do dia',
      'Operação diária das 05h às 23h de segunda a domingo',
      'Sedans, SUVs Executivos e Vans Sprinter',
    ],
  },
];

const cities = [
  {
    slug: 'gramado',
    name: 'Gramado',
    region: 'Região das Hortênsias · RS',
    title: 'Transfer Gramado RS | Transporte Executivo e Passeios VIP',
    description:
      'Transfer executivo e transporte privativo em Gramado RS. Atendimento de segunda a domingo, das 05h às 23h, saindo dos Aeroportos de Porto Alegre (POA) e Caxias do Sul (CXJ).',
    highlights: [
      'Recepção VIP nos aeroportos POA e CXJ direto para seu hotel em Gramado',
      'Atendimento em todos os bairros: Centro, Planalto, Bavária, Carniel e Av. das Hortênsias',
      'Tours personalizados para Lago Negro, Snowland, Rua Coberta e parques temáticos',
    ],
  },
  {
    slug: 'canela',
    name: 'Canela',
    region: 'Região das Hortênsias · CEP 95680-000',
    title: 'Transfer Canela RS | Transporte Executivo Privativo',
    description:
      'Transporte executivo privativo em Canela RS. Conexão direta com aeroportos POA e CXJ, Cascata do Caracol e Catedral de Pedra. Conforto VIP e motoristas experientes.',
    highlights: [
      'Área de cobertura oficial em Canela, RS, CEP 95680-000',
      'Traslados diretos para Catedral de Pedra, Parque do Caracol e Skyglass Canela',
      'Atendimento em condomínios, pousadas e chalés de segunda a domingo, das 05h às 23h',
    ],
  },
  {
    slug: 'bento-goncalves',
    name: 'Bento Gonçalves',
    region: 'Vale dos Vinhedos · CEP 95700-000',
    title: 'Transfer Bento Gonçalves RS | Vale dos Vinhedos Executivo',
    description:
      'Transfer executivo e tours privativos no Vale dos Vinhedos em Bento Gonçalves RS. Transporte seguro para degustações e eventos vitivinícolas.',
    highlights: [
      'Área de cobertura oficial em Bento Gonçalves, RS, CEP 95700-000',
      'Rápida conexão de 45 min até o Aeroporto de Caxias do Sul (CXJ)',
      'Tours privativos no Vale dos Vinhedos, Caminhos de Pedra e Estação Maria Fumaça',
    ],
  },
  {
    slug: 'caxias-do-sul',
    name: 'Caxias do Sul',
    region: 'Polo Econômico & Aeroporto CXJ · RS',
    title: 'Transfer Caxias do Sul RS | Transporte Aeroporto CXJ e Corporativo',
    description:
      'Área de cobertura oficial da AG Transfer em Caxias do Sul RS. Transporte executivo para Aeroporto CXJ, polo metalmecânico e viagens intermunicipais de segunda a domingo, das 05h às 23h.',
    highlights: [
      'Área de cobertura oficial em Caxias do Sul, RS, Brasil',
      'Receptivo imediato no Aeroporto Hugo Cantergiani (CXJ)',
      'Logística corporativa para feiras, indústrias e deslocamentos até POA e Gramado',
    ],
  },
  {
    slug: 'porto-alegre',
    name: 'Porto Alegre',
    region: 'Capital · Aeroporto Salgado Filho (POA)',
    title: 'Transfer Porto Alegre RS | Aeroporto Salgado Filho POA ⇄ Serra Gaúcha',
    description:
      'Transfer executivo privativo saindo do Aeroporto Salgado Filho (POA) e hotéis de Porto Alegre com destino direto para Gramado, Canela e Bento Gonçalves.',
    highlights: [
      'Recepção personalizada no desembarque do Aeroporto Salgado Filho (POA)',
      'Conexões diretas sem filas para Gramado, Canela, Caxias e Bento Gonçalves',
      'Ponto de partida oficial para o Transfer POA ➔ Montevidéu (Uruguai)',
    ],
  },
  {
    slug: 'garibaldi',
    name: 'Garibaldi',
    region: 'Capital do Espumante · Serra Gaúcha',
    title: 'Transfer Garibaldi RS | Capital do Espumante e Serra Gaúcha',
    description:
      'Transporte executivo em Garibaldi RS. Visite as melhores vinícolas de espumantes da Serra Gaúcha com motorista privativo à disposição e máxima segurança.',
    highlights: [
      'Conexão em ~40 minutos com o Aeroporto de Caxias do Sul (CXJ)',
      'Visitação segura às vinícolas históricas de espumantes e Estrada do Sabor',
      'Atendimento integrado ao roteiro do Vale dos Vinhedos',
    ],
  },
  {
    slug: 'nova-petropolis',
    name: 'Nova Petrópolis',
    region: 'Rota Romântica · Jardim da Serra Gaúcha',
    title: 'Transfer Nova Petrópolis RS | Jardim da Serra Gaúcha',
    description:
      'Transfer e passeios privativos em Nova Petrópolis RS, a capital nacional do cooperativismo e rota das flores. Conexão com Gramado e aeroportos.',
    highlights: [
      'Acesso direto pela Rota Romântica entre Porto Alegre, Caxias e Gramado',
      'Passeios pelo Parque Aldeia do Imigrante, Labirinto Verde e Ninho das Águias',
      'Operação diária das 05h às 23h',
    ],
  },
  {
    slug: 'farroupilha',
    name: 'Farroupilha',
    region: 'Santuário de Caravaggio · RS',
    title: 'Transfer Farroupilha RS | Santuário de Caravaggio e Malhas',
    description:
      'Transporte executivo privativo em Farroupilha RS. Deslocamentos rápidos para o Santuário de Caravaggio, centros de compras e polo calçadista/têxtil.',
    highlights: [
      'Apenas 30 minutos do Aeroporto Hugo Cantergiani (CXJ)',
      'Transfers privativos para o Santuário de Caravaggio e roteiros de compras',
      'Veículos executivos com amplo bagageiro',
    ],
  },
  {
    slug: 'flores-da-cunha',
    name: 'Flores da Cunha',
    region: 'Altos Montes · CEP 95270-000',
    title: 'Transfer Flores da Cunha RS | Transporte Executivo Altos Montes',
    description:
      'Transporte executivo privativo em Flores da Cunha RS. Conexão rápida com Aeroporto CXJ (20 km) e POA. Atendimento de segunda a domingo das 05h às 23h.',
    highlights: [
      'Área de cobertura oficial em Flores da Cunha, RS, CEP 95270-000',
      'Deslocamento rápido até o Aeroporto CXJ e acesso direto à RS-122',
      'Tours privativos pelas vinícolas dos Altos Montes e Otávio Rocha',
    ],
  },
];

function injectMetaAndSchema(html, { title, description, canonicalUrl, jsonLdScript }) {
  let result = html;
  const safeTitle = escapeHtml(title);
  const safeDesc = escapeHtml(description);

  result = result.replace(/<title>[^<]*<\/title>/i, `<title>${safeTitle}</title>`);
  result = result.replace(
    /<meta[^>]*name="description"[^>]*>/i,
    `<meta name="description" content="${safeDesc}" />`
  );
  result = result.replace(
    /<link[^>]*rel="canonical"[^>]*>/i,
    `<link rel="canonical" href="${canonicalUrl}" />`
  );
  result = result.replace(
    /<meta[^>]*property="og:title"[^>]*>/i,
    `<meta property="og:title" content="${safeTitle}" />`
  );
  result = result.replace(
    /<meta[^>]*property="og:description"[^>]*>/i,
    `<meta property="og:description" content="${safeDesc}" />`
  );
  result = result.replace(
    /<meta[^>]*property="og:url"[^>]*>/i,
    `<meta property="og:url" content="${canonicalUrl}" />`
  );
  result = result.replace(
    /<meta[^>]*name="twitter:title"[^>]*>/i,
    `<meta name="twitter:title" content="${safeTitle}" />`
  );
  result = result.replace(
    /<meta[^>]*name="twitter:description"[^>]*>/i,
    `<meta name="twitter:description" content="${safeDesc}" />`
  );

  if (jsonLdScript) {
    result = result.replace(
      /<script type="application\/ld\+json">[\s\S]*?<\/script>/i,
      jsonLdScript.trim()
    );
  }

  return result;
}

function buildStaticShell({ badge, heading, lead, bullets, linksTitle, links }) {
  return `
  <div class="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A]">
    <header class="bg-white border-b border-slate-200 py-4">
      <div class="max-w-7xl mx-auto px-4 flex items-center justify-between gap-4">
        <a href="/" class="inline-flex items-center gap-2.5 font-bold text-[#0D0A27]">
          <img src="${LOGO_URL}" alt="AG Transfer" width="44" height="44" />
          <span style="font-size:13px;">AG TRANSFER</span>
        </a>
        <a href="https://wa.me/5554991537288" class="px-4 py-2 rounded-xl bg-emerald-700 text-white font-bold text-xs uppercase">WhatsApp (05h às 23h)</a>
      </div>
    </header>
    <main class="flex-1 max-w-5xl mx-auto w-full px-4 py-12 space-y-8">
      <section class="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 space-y-4">
        <p class="text-xs font-bold uppercase tracking-wider text-[#0369A1]">${escapeHtml(badge)}</p>
        <h1 class="text-3xl sm:text-4xl font-extrabold text-[#0D0A27]">${escapeHtml(heading)}</h1>
        <p class="text-base text-slate-700 leading-relaxed">${escapeHtml(lead)}</p>
        <ul class="space-y-2 text-sm text-slate-700 pt-2">
          ${bullets.map((b) => `<li>&bull; ${escapeHtml(b)}</li>`).join('')}
        </ul>
        <div class="pt-4">
          <a href="https://wa.me/5554991537288?text=${encodeURIComponent(`Olá! Gostaria de solicitar uma cotação para: ${heading}`)}" class="inline-block px-6 py-3 rounded-xl bg-emerald-700 text-white font-bold text-xs uppercase">Solicitar Cotação no WhatsApp</a>
        </div>
      </section>
      <section class="bg-white border border-slate-200 rounded-2xl p-6 space-y-3">
        <h2 class="text-base font-extrabold text-[#0D0A27]">${escapeHtml(linksTitle)}</h2>
        <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-sm text-[#0369A1] font-semibold">
          ${links.map((l) => `<li><a href="${l.href}">${escapeHtml(l.label)}</a></li>`).join('')}
        </ul>
      </section>
    </main>
    <footer class="bg-[#0D0A27] text-slate-300 py-8 px-4 text-center text-xs space-y-2">
      <p>AG Transfer &amp; Transporte Executivo LTDA &middot; Segunda a domingo, das 05h às 23h &middot; Central: (54) 99153-7288</p>
      <p>Área de cobertura: Gramado, Caxias do Sul, Canela (95680-000), Flores da Cunha (95270-000) e Bento Gonçalves (95700-000)</p>
      <p>Site desenvolvido pela <a href="${BORA_LINK}" target="_blank" rel="noopener noreferrer" class="text-[#38BDF8] underline">Agência Bora</a></p>
    </footer>
  </div>`;
}

console.log('[generate-static-routes] Generating pre-rendered static HTML for all 20 canonical URLs...');

const cityQuickLinks = cities.map((c) => ({ href: `/cidades/${c.slug}`, label: `Transfer em ${c.name}` }));
const serviceQuickLinks = services.map((s) => ({ href: `/servicos/${s.slug}`, label: s.name }));

// 1. Pre-render all 9 Service pages
services.forEach((s) => {
  const canonicalUrl = `${SITE_URL}/servicos/${s.slug}`;
  const jsonLd = `
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          "@id": "${canonicalUrl}#service",
          "name": ${escapeJson(s.name)},
          "description": ${escapeJson(s.description)},
          "url": "${canonicalUrl}",
          "provider": {
            "@type": "TaxiService",
            "name": "AG Transfer & Transporte Executivo LTDA",
            "url": "${SITE_URL}/",
            "logo": "${LOGO_URL}",
            "telephone": "+5554991537288"
          }
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Início", "item": "${SITE_URL}/" },
            { "@type": "ListItem", "position": 2, "name": ${escapeJson(s.name)}, "item": "${canonicalUrl}" }
          ]
        }
      ]
    }
    </script>`;

  const content = buildStaticShell({
    badge: `Serviço Privativo · ${s.route}`,
    heading: s.name,
    lead: s.description,
    bullets: s.highlights,
    linksTitle: 'Cidades Atendidas e Serviços Relacionados',
    links: [...serviceQuickLinks.slice(0, 6), ...cityQuickLinks.slice(0, 3)],
  });

  const dir = path.join(distDir, 'servicos', s.slug);
  fs.mkdirSync(dir, { recursive: true });
  let html = injectMetaAndSchema(cleanTemplateHtml, {
    title: s.title,
    description: s.description,
    canonicalUrl,
    jsonLdScript: jsonLd,
  });
  html = html.replace('<div id="root"></div>', `<div id="root">${content}</div>`);
  fs.writeFileSync(path.join(dir, 'index.html'), html);
  console.log(`  ✓ /servicos/${s.slug}/index.html`);
});

// 2. Pre-render all 9 City pages
cities.forEach((c) => {
  const canonicalUrl = `${SITE_URL}/cidades/${c.slug}`;
  const jsonLd = `
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          "@id": "${canonicalUrl}#city-service",
          "name": ${escapeJson(`Transfer Executivo em ${c.name} (RS)`)},
          "description": ${escapeJson(c.description)},
          "url": "${canonicalUrl}",
          "areaServed": { "@type": "City", "name": ${escapeJson(c.name)} },
          "provider": {
            "@type": "TaxiService",
            "name": "AG Transfer & Transporte Executivo LTDA",
            "url": "${SITE_URL}/",
            "logo": "${LOGO_URL}",
            "telephone": "+5554991537288"
          }
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Início", "item": "${SITE_URL}/" },
            { "@type": "ListItem", "position": 2, "name": ${escapeJson(c.name)}, "item": "${canonicalUrl}" }
          ]
        }
      ]
    }
    </script>`;

  const content = buildStaticShell({
    badge: `Área de Cobertura Oficial · ${c.region}`,
    heading: `Transfer Executivo e Transporte VIP em ${c.name} (RS)`,
    lead: c.description,
    bullets: c.highlights,
    linksTitle: 'Principais Serviços e Outras Cidades',
    links: [...serviceQuickLinks.slice(0, 6), ...cityQuickLinks.slice(0, 6)],
  });

  const dir = path.join(distDir, 'cidades', c.slug);
  fs.mkdirSync(dir, { recursive: true });
  let html = injectMetaAndSchema(cleanTemplateHtml, {
    title: c.title,
    description: c.description,
    canonicalUrl,
    jsonLdScript: jsonLd,
  });
  html = html.replace('<div id="root"></div>', `<div id="root">${content}</div>`);
  fs.writeFileSync(path.join(dir, 'index.html'), html);
  console.log(`  ✓ /cidades/${c.slug}/index.html`);
});

// 3. Dedicated Campaign: /transfer-porto-alegre-montevideu
const mtvDir = path.join(distDir, 'transfer-porto-alegre-montevideu');
fs.mkdirSync(mtvDir, { recursive: true });

const montevideoTitle = 'Transfer Porto Alegre Montevidéu | Final Libertadores 2026';
const montevideoDesc =
  'Transfer privativo do aeroporto de Porto Alegre a Montevidéu. Van e carro executivo, atendimento das 05h às 23h. Peça sua cotação no WhatsApp.';
const montevideoCanonical = `${SITE_URL}/transfer-porto-alegre-montevideu`;

const montevideoJsonLd = `
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          "@id": "${SITE_URL}/transfer-porto-alegre-montevideu#service",
          "name": "Transfer Porto Alegre para Montevidéu - Final Libertadores 2026",
          "serviceType": "Transfer Executivo Internacional",
          "description": "Transfer privativo e transporte executivo do Aeroporto Internacional Salgado Filho (POA) direto para Montevidéu (Estádio Centenário).",
          "provider": {
            "@type": "TaxiService",
            "name": "AG Transfer & Transporte Executivo LTDA.",
            "telephone": "+5554991537288",
            "image": "${LOGO_URL}",
            "url": "${SITE_URL}/"
          },
          "areaServed": [
            { "@type": "City", "name": "Porto Alegre" },
            { "@type": "City", "name": "Montevidéu" }
          ]
        },
        {
          "@type": "FAQPage",
          "@id": "${SITE_URL}/transfer-porto-alegre-montevideu#faq",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Quanto custa o transfer de Porto Alegre a Montevidéu?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "O valor do transfer privativo é calculado com preço fechado por veículo (não por assento), variando conforme a categoria escolhida e retorno."
              }
            },
            {
              "@type": "Question",
              "name": "Que documentos são obrigatórios para cruzar a fronteira com o Uruguai?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "RG original emitido há menos de 10 anos ou Passaporte válido. A CNH não é aceita na fronteira uruguaia."
              }
            }
          ]
        },
        {
          "@type": "BreadcrumbList",
          "@id": "${SITE_URL}/transfer-porto-alegre-montevideu#breadcrumb",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Início", "item": "${SITE_URL}/" },
            { "@type": "ListItem", "position": 2, "name": "Transfer Porto Alegre a Montevidéu", "item": "${montevideoCanonical}" }
          ]
        }
      ]
    }
    </script>`;

const montevideoPreRenderedContent = buildStaticShell({
  badge: 'Final Libertadores 2026 · 28 de Novembro às 17h (Estádio Centenário)',
  heading: 'Transfer de Porto Alegre a Montevidéu: do aeroporto ao Estádio Centenário',
  lead: montevideoDesc,
  bullets: [
    'Saída privativa do Aeroporto Internacional Salgado Filho (POA) para Montevidéu',
    'Preço fechado por veículo (Sedan, SUV ou Van Executiva) ideal para dividir entre grupo',
    'Documentação obrigatória na fronteira: RG (emitido há menos de 10 anos) ou Passaporte válido (CNH não é aceita)',
    'Atendimento de segunda a domingo, das 05h às 23h',
  ],
  linksTitle: 'Outros Serviços e Cidades Atendidas',
  links: [...serviceQuickLinks.slice(0, 3), ...cityQuickLinks.slice(0, 3)],
});

let mtvHtml = injectMetaAndSchema(cleanTemplateHtml, {
  title: montevideoTitle,
  description: montevideoDesc,
  canonicalUrl: montevideoCanonical,
  jsonLdScript: montevideoJsonLd,
});
mtvHtml = mtvHtml.replace('<div id="root"></div>', `<div id="root">${montevideoPreRenderedContent}</div>`);
fs.writeFileSync(path.join(mtvDir, 'index.html'), mtvHtml);
console.log('  ✓ /transfer-porto-alegre-montevideu/index.html');

// 4. Pre-render clean semantic shell on homepage dist/index.html for immediate crawler visibility
const homePreRendered = buildStaticShell({
  badge: 'AG Transfer · Empresa Regularizada · Segunda a domingo, das 05h às 23h',
  heading: 'Transporte Executivo e Transfer na Serra Gaúcha — Gramado, Canela e Bento Gonçalves',
  lead: 'Transfers privativos para aeroportos (POA / CXJ), passeios VIP em Gramado e Canela, tours enoturísticos no Vale dos Vinhedos e Transfer POA ➔ Montevidéu.',
  bullets: [
    'Área de cobertura oficial: Gramado, Caxias do Sul, Canela (95680-000), Flores da Cunha (95270-000) e Bento Gonçalves (95700-000)',
    'Recepção nominal nos aeroportos POA e CXJ com monitoramento de voo em tempo real',
    'Veículos executivos 100% privativos: Sedan, SUV e Van Sprinter',
  ],
  linksTitle: 'Serviços e Cidades Atendidas',
  links: [
    { href: '/transfer-porto-alegre-montevideu', label: 'Transfer Porto Alegre ➔ Montevidéu' },
    ...serviceQuickLinks,
    ...cityQuickLinks,
  ],
});

const finalHomeHtml = cleanTemplateHtml.replace('<div id="root"></div>', `<div id="root">${homePreRendered}</div>`);
fs.writeFileSync(baseHtmlPath, finalHomeHtml);
console.log('  ✓ /index.html (pre-rendered semantic shell + inlined CSS)');
console.log('[generate-static-routes] All 20 canonical pages ready for Google Search Console!');
