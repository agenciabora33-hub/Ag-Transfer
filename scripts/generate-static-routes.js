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

const baseHtml = fs.readFileSync(baseHtmlPath, 'utf8');

// Services List
const services = [
  {
    slug: 'transfer-para-gramado',
    title: 'Transfer Para Gramado Privativo VIP | AG Transfer',
    description: 'Transfer executivo privativo para Gramado saindo dos aeroportos de Porto Alegre (POA) ou Caxias do Sul (CXJ). Veículos novos, motoristas pontuais e atendimento 24h.'
  },
  {
    slug: 'transfer-para-canela',
    title: 'Transfer Para Canela Privativo VIP | AG Transfer',
    description: 'Transfer privativo para Canela RS saindo dos aeroportos de Porto Alegre (POA) e Caxias do Sul (CXJ). Transporte executivo com conforto, segurança e pontualidade britânica.'
  },
  {
    slug: 'transporte-executivo-gramado',
    title: 'Transporte Executivo em Gramado & Serra Gaúcha | AG Transfer',
    description: 'Serviço de transporte executivo em Gramado, Canela e Serra Gaúcha. Frotas de alto padrão com sedans, SUVs e vans executivas para famílias e executivos exigentes.'
  },
  {
    slug: 'transfer-porto-alegre-gramado',
    title: 'Transfer Aeroporto Porto Alegre (POA) ⇄ Serra Gaúcha | AG Transfer',
    description: 'Transfer privativo conectando o Aeroporto Internacional Salgado Filho (POA) a Gramado e Canela. Recepção no desembarque e rastreamento de voos em tempo real.'
  },
  {
    slug: 'transfer-aeroporto-cxj-caxias',
    title: 'Transfer Aeroporto de Caxias do Sul (CXJ) | AG Transfer',
    description: 'Transfer do Aeroporto Hugo Cantergiani (CXJ) em Caxias do Sul para Gramado, Canela e Bento Gonçalves. Rota mais curta e rápida para a Serra Gaúcha.'
  },
  {
    slug: 'tour-vale-dos-vinhedos',
    title: 'Tour Vale dos Vinhedos & Bento Gonçalves Privativo | AG Transfer',
    description: 'Tour privativo exclusivo pelas melhores vinícolas de Bento Gonçalves, Garibaldi e Monte Belo do Sul. Roteiro personalizado com motorista à disposição o dia todo.'
  },
  {
    slug: 'tour-gramado-canela',
    title: 'Tour Privativo Gramado & Canela VIP | AG Transfer',
    description: 'Passeio turístico personalizado por Gramado e Canela nos melhores pontos turísticos sem pressa. Conforto e flexibilidade total para sua família.'
  },
  {
    slug: 'viagens-corporativas-serra',
    title: 'Transporte Corporativo & Feiras na Serra Gaúcha | AG Transfer',
    description: 'Transporte executivo para congressos, feiras de negócios (Mercopar, Fenin, Festuris) e viagens corporativas na Serra Gaúcha com nota fiscal e faturamento.'
  },
  {
    slug: 'motorista-particular-diaria',
    title: 'Motorista Particular por Diária na Serra Gaúcha | AG Transfer',
    description: 'Contrate motorista executivo bilíngue à disposição por período ou diária para compromissos, roteiros sob medida ou eventos especiais em Gramado e região.'
  }
];

// Cities List
const cities = [
  {
    slug: 'gramado',
    name: 'Gramado',
    title: 'Transfer Gramado RS | Transporte Executivo e Passeios VIP',
    description: 'Transfer executivo e transporte privativo em Gramado RS. Atendimento 24h saindo dos Aeroportos de Porto Alegre (POA) e Caxias do Sul (CXJ). Veículos premium e pontualidade britânica.'
  },
  {
    slug: 'canela',
    name: 'Canela',
    title: 'Transfer Canela RS | Transporte Executivo Privativo',
    description: 'Transporte executivo privativo em Canela RS. Conexão direta com aeroportos POA e CXJ, Cascata do Caracol e Catedral de Pedra. Conforto VIP e motoristas experientes.'
  },
  {
    slug: 'bento-goncalves',
    name: 'Bento Gonçalves',
    title: 'Transfer Bento Gonçalves RS | Vale dos Vinhedos Executivo',
    description: 'Transfer executivo e tours privativos no Vale dos Vinhedos em Bento Gonçalves RS. Transporte seguro para degustações e eventos vitivinícolas.'
  },
  {
    slug: 'caxias-do-sul',
    name: 'Caxias do Sul',
    title: 'Transfer Caxias do Sul RS | Transporte Aeroporto CXJ e Corporativo',
    description: 'Base operacional da AG Transfer em Caxias do Sul RS. Transporte executivo para Aeroporto CXJ, polo metalmecânico e viagens intermunicipais 24 horas.'
  },
  {
    slug: 'porto-alegre',
    name: 'Porto Alegre',
    title: 'Transfer Porto Alegre RS | Aeroporto Salgado Filho POA ⇄ Serra Gaúcha',
    description: 'Transfer executivo privativo saindo do Aeroporto Salgado Filho (POA) e hotéis de Porto Alegre com destino direto para Gramado, Canela e Bento Gonçalves.'
  },
  {
    slug: 'garibaldi',
    name: 'Garibaldi',
    title: 'Transfer Garibaldi RS | Capital do Espumante e Serra Gaúcha',
    description: 'Transporte executivo em Garibaldi RS. Visite as melhores vinícolas de espumantes da Serra Gaúcha com motorista privativo à disposição e máxima segurança.'
  },
  {
    slug: 'nova-petropolis',
    name: 'Nova Petrópolis',
    title: 'Transfer Nova Petrópolis RS | Jardim da Serra Gaúcha',
    description: 'Transfer e passeios privativos em Nova Petrópolis RS, a capital nacional do cooperativismo e rota das flores. Conexão com Gramado e aeroportos.'
  },
  {
    slug: 'farroupilha',
    name: 'Farroupilha',
    title: 'Transfer Farroupilha RS | Santuário de Caravaggio e Malhas',
    description: 'Transporte executivo privativo em Farroupilha RS. Deslocamentos rápidos para o Santuário de Caravaggio, centros de compras e polo calçadista/têxtil.'
  },
  {
    slug: 'flores-da-cunha',
    name: 'Flores da Cunha',
    title: 'Transfer Flores da Cunha RS | Transporte Executivo Altos Montes',
    description: 'Transporte executivo privativo em Flores da Cunha RS. Conexão rápida com Aeroporto CXJ (20 km) e POA. Tour nas vinícolas dos Altos Montes. Peça orçamento 24h.'
  }
];

function injectMeta(html, { title, description, canonicalUrl }) {
  let result = html;

  // Replace Title
  result = result.replace(/<title>.*?<\/title>/i, `<title>${title}</title>`);

  // Replace Description
  result = result.replace(/<meta name="description" content=".*?" \/>/i, `<meta name="description" content="${description}" />`);

  // Replace Canonical
  result = result.replace(/<link rel="canonical" href=".*?" \/>/i, `<link rel="canonical" href="${canonicalUrl}" />`);

  // Replace OpenGraph
  result = result.replace(/<meta property="og:title" content=".*?" \/>/i, `<meta property="og:title" content="${title}" />`);
  result = result.replace(/<meta property="og:description" content=".*?" \/>/i, `<meta property="og:description" content="${description}" />`);
  result = result.replace(/<meta property="og:url" content=".*?" \/>/i, `<meta property="og:url" content="${canonicalUrl}" />`);

  // Replace Twitter
  result = result.replace(/<meta name="twitter:title" content=".*?" \/>/i, `<meta name="twitter:title" content="${title}" />`);
  result = result.replace(/<meta name="twitter:description" content=".*?" \/>/i, `<meta name="twitter:description" content="${description}" />`);

  return result;
}

console.log('[generate-static-routes] Generating pre-rendered static routes for 100% server 200 delivery...');

// 1. Services routes
services.forEach((s) => {
  const dir = path.join(distDir, 'servicos', s.slug);
  fs.mkdirSync(dir, { recursive: true });
  const html = injectMeta(baseHtml, {
    title: s.title,
    description: s.description,
    canonicalUrl: `https://ag-transfer.vercel.app/servicos/${s.slug}`
  });
  fs.writeFileSync(path.join(dir, 'index.html'), html);
  console.log(`  ✓ Generated /servicos/${s.slug}/index.html`);
});

// Also create a fallback for /servicos/index.html
const servicosDir = path.join(distDir, 'servicos');
fs.writeFileSync(path.join(servicosDir, 'index.html'), baseHtml);

// 2. Cities routes
cities.forEach((c) => {
  const dir = path.join(distDir, 'cidades', c.slug);
  fs.mkdirSync(dir, { recursive: true });
  const html = injectMeta(baseHtml, {
    title: c.title,
    description: c.description,
    canonicalUrl: `https://ag-transfer.vercel.app/cidades/${c.slug}`
  });
  fs.writeFileSync(path.join(dir, 'index.html'), html);
  console.log(`  ✓ Generated /cidades/${c.slug}/index.html`);
});

// Also create a fallback for /cidades/index.html
const cidadesDir = path.join(distDir, 'cidades');
fs.writeFileSync(path.join(cidadesDir, 'index.html'), baseHtml);

console.log('[generate-static-routes] Successfully generated all 18 static route pages!');
