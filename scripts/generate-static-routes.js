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
    description: 'Transfer executivo privativo para Gramado saindo dos aeroportos de Porto Alegre (POA) ou Caxias do Sul (CXJ). Veículos novos, motoristas pontuais e atendimento das 05h às 23h.'
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
    description: 'Transfer executivo e transporte privativo em Gramado RS. Atendimento de segunda a domingo, das 05h às 23h, saindo dos Aeroportos de Porto Alegre (POA) e Caxias do Sul (CXJ).'
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
    description: 'Área de cobertura oficial da AG Transfer em Caxias do Sul RS. Transporte executivo para Aeroporto CXJ, polo metalmecânico e viagens intermunicipais de segunda a domingo, das 05h às 23h.'
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
    description: 'Transporte executivo privativo em Flores da Cunha RS. Conexão rápida com Aeroporto CXJ (20 km) e POA. Atendimento de segunda a domingo das 05h às 23h.'
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

// 3. Dedicated Campaign: /transfer-porto-alegre-montevideu
const mtvDir = path.join(distDir, 'transfer-porto-alegre-montevideu');
fs.mkdirSync(mtvDir, { recursive: true });

const montevideoTitle = 'Transfer Porto Alegre Montevidéu | Final Libertadores 2026';
const montevideoDesc = 'Transfer privativo do aeroporto de Porto Alegre a Montevidéu. Van e carro executivo, atendimento das 05h às 23h. Peça sua cotação no WhatsApp.';
const montevideoCanonical = 'https://ag-transfer.vercel.app/transfer-porto-alegre-montevideu';

const montevideoJsonLd = `
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          "@id": "https://ag-transfer.vercel.app/transfer-porto-alegre-montevideu#service",
          "name": "Transfer Porto Alegre para Montevidéu - Final Libertadores 2026",
          "serviceType": "Transfer Executivo Internacional",
          "description": "Transfer privativo e transporte executivo do Aeroporto Internacional Salgado Filho (POA) direto para Montevidéu (Estádio Centenário). Frotas de sedans, SUVs e vans com motorista profissional.",
          "provider": {
            "@type": "TaxiService",
            "name": "AG Transfer & Transporte Executivo LTDA.",
            "telephone": "+5554991537288",
            "image": "https://ag-transfer.vercel.app/logo.png",
            "url": "https://ag-transfer.vercel.app/",
            "areaServed": [
              { "@type": "City", "name": "Gramado" },
              { "@type": "City", "name": "Caxias do Sul" },
              { "@type": "City", "name": "Canela" },
              { "@type": "City", "name": "Flores da Cunha" },
              { "@type": "City", "name": "Bento Gonçalves" },
              { "@type": "City", "name": "Porto Alegre" }
            ]
          },
          "areaServed": [
            { "@type": "City", "name": "Porto Alegre" },
            { "@type": "City", "name": "Montevidéu" }
          ],
          "offers": {
            "@type": "Offer",
            "priceCurrency": "BRL",
            "availability": "https://schema.org/InStock",
            "description": "Preço fechado por veículo sob consulta com confirmação por escrito."
          }
        },
        {
          "@type": "FAQPage",
          "@id": "https://ag-transfer.vercel.app/transfer-porto-alegre-montevideu#faq",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Quanto custa o transfer de Porto Alegre a Montevidéu?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "O valor do transfer privativo é calculado com preço fechado por veículo (não por assento), variando conforme a categoria escolhida (Carro Executivo, SUV ou Van Executiva), o número de passageiros e se inclui o retorno. Esse formato é ideal para grupos de amigos ou famílias dividirem o custo. Peça sua cotação personalizada sem compromisso pelo WhatsApp."
              }
            },
            {
              "@type": "Question",
              "name": "Quanto tempo dura a viagem de Porto Alegre a Montevidéu?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A rota totaliza cerca de 800 a 850 km e leva entre 10 e 12 horas de estrada, mais o tempo de passagem pela aduana de fronteira (via Jaguarão/Rio Branco ou via Chuí). Fazemos paradas técnicas em locais seguros e confortáveis para alimentação e descanso."
              }
            },
            {
              "@type": "Question",
              "name": "Vocês buscam diretamente no Aeroporto Salgado Filho (POA)?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sim! Nosso motorista profissional aguarda você no saguão de desembarque do Aeroporto Internacional Salgado Filho (POA) com identificação visual discreta, prestando assistência com as malas desde o primeiro minuto."
              }
            },
            {
              "@type": "Question",
              "name": "Dá tempo de chegar para a final se eu pousar na manhã de 28/11?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Recomendamos cautela redobrada. Como a partida no Estádio Centenário inicia às 17h e a viagem dura de 10 a 12 horas, somada ao fluxo migratório de fronteira, pousar na manhã do dia 28/11 apresenta risco severo de atraso. O ideal é desembarcar em Porto Alegre com antecedência (dias 26 ou 27/11). Fale com nossa equipe para planejar o horário seguro de partida."
              }
            },
            {
              "@type": "Question",
              "name": "Vocês realizam o transfer de volta para Porto Alegre após o jogo?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sim! Oferecemos opções completas de ida e volta. Você pode optar pelo retorno agendado após a partida (com agendamento prévio) ou embarcar no dia 29/11 a partir das 05h para retornar descansado."
              }
            },
            {
              "@type": "Question",
              "name": "Posso levar bagagem? Qual o limite?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sim, a capacidade varia por veículo: Sedans comportam até 3 malas médias, SUVs até 4 a 5 malas e Vans executivas contam com amplo porta-malas para até 15 passageiros. Informe a quantidade de bagagem ao solicitar sua cotação para alocarmos o veículo perfeito."
              }
            },
            {
              "@type": "Question",
              "name": "Que documentos são obrigatórios para cruzar a fronteira com o Uruguai?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Cidadãos brasileiros devem portar RG original em bom estado emitido nos últimos 10 anos OU Passaporte válido (regras do Mercosul). Atenção: a CNH (física ou digital) NÃO é aceita pelas autoridades migratórias uruguaias para cruzar a fronteira. Menores desacompanhados de um ou ambos os pais necessitam de autorização judicial/cartorial conforme normas da Polícia Federal."
              }
            },
            {
              "@type": "Question",
              "name": "Como confirmo a reserva do transfer?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "O processo é 100% transparente: você nos envia os detalhes do seu voo e grupo, a AG Transfer emite a cotação formal e o contrato por escrito com os horários confirmados, garantindo a sua tranquilidade para o evento."
              }
            },
            {
              "@type": "Question",
              "name": "Posso dividir o valor entre amigos ou familiares?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Com certeza! Como o valor é fechado por veículo, você e seu grupo podem dividir o valor entre si, tornando a viagem em Van ou SUV muito mais econômica, ágil e privativa do que conexões aéreas ou ônibus regulares."
              }
            }
          ]
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://ag-transfer.vercel.app/transfer-porto-alegre-montevideu#breadcrumb",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Início",
              "item": "https://ag-transfer.vercel.app/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Transfer Porto Alegre a Montevidéu",
              "item": "https://ag-transfer.vercel.app/transfer-porto-alegre-montevideu"
            }
          ]
        }
      ]
    }
    </script>
`;

// Semantic HTML pre-rendered content directly inside <div id="root">
const montevideoPreRenderedContent = `
  <main class="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans">
    <header class="py-4 border-b border-slate-200 bg-white">
      <div class="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <a href="/" class="font-bold text-xl text-[#0D0A27]">AG TRANSFER</a>
        <a href="https://wa.me/5554991537288?text=Ol%C3%A1!%20Quero%20uma%20cota%C3%A7%C3%A3o%20de%20transfer%20Porto%20Alegre%20%E2%86%92%20Montevid%C3%A9u." class="px-4 py-2 rounded-xl bg-emerald-600 text-white font-bold text-xs uppercase">WhatsApp (05h às 23h)</a>
      </div>
    </header>

    <div class="max-w-7xl mx-auto px-4 py-12">
      <div class="mb-4 inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
        🏆 Final Libertadores 2026 &bull; 28 de Novembro de 2026 às 17h (Estádio Centenário)
      </div>

      <h1 class="text-3xl sm:text-5xl font-black text-[#0D0A27] tracking-tight leading-tight mb-4">
        Transfer de Porto Alegre a Montevidéu: do aeroporto ao Estádio Centenário
      </h1>

      <p class="text-lg text-slate-700 max-w-3xl mb-8 leading-relaxed">
        Transfer privativo, com motorista profissional, saindo do Aeroporto Salgado Filho direto para Montevidéu. Ideal para quem vai assistir à final da Libertadores no dia 28/11.
      </p>

      <div class="flex flex-wrap gap-4 mb-12">
        <a href="https://wa.me/5554991537288?text=Ol%C3%A1!%20Quero%20uma%20cota%C3%A7%C3%A3o%20de%20transfer%20Porto%20Alegre%20%E2%86%92%20Montevid%C3%A9u." class="px-6 py-4 rounded-xl bg-emerald-600 text-white font-bold text-sm uppercase">Pedir cotação no WhatsApp</a>
        <a href="#formulario-cotacao" class="px-6 py-4 rounded-xl bg-slate-900 text-white font-bold text-sm uppercase">Preencher o formulário</a>
      </div>

      <section class="py-10 border-t border-slate-200">
        <h2 class="text-2xl font-bold text-[#0D0A27] mb-6">Por que reservar um transfer privativo para Montevidéu?</h2>
        <ul class="space-y-3 text-slate-700">
          <li>&bull; <strong>Sem conexões ou horários restritos:</strong> saia no horário exato conveniente para o seu grupo de torcedores ou família.</li>
          <li>&bull; <strong>Recepção no desembarque em POA:</strong> motorista aguardando no Aeroporto Salgado Filho com monitoramento de voo em tempo real.</li>
          <li>&bull; <strong>Preço fechado por veículo:</strong> divida o valor total entre seu grupo, garantindo economia em relação a passagens aéreas e ônibus.</li>
          <li>&bull; <strong>Chegada com folga para a partida:</strong> planejamento logístico estruturado para o Estádio Centenário.</li>
          <li>&bull; <strong>Opção de ida e volta:</strong> garantia de retorno seguro para Porto Alegre após o jogo.</li>
        </ul>
      </section>

      <section class="py-10 border-t border-slate-200">
        <h2 class="text-2xl font-bold text-[#0D0A27] mb-4">Sobre a Rota Porto Alegre ➔ Montevidéu</h2>
        <p class="text-slate-700 mb-4">
          <strong>Saída:</strong> Aeroporto Internacional Salgado Filho (POA), Porto Alegre/RS.<br/>
          <strong>Destino:</strong> Montevidéu, Uruguai (hotel, Airbnb ou imediações do Estádio Centenário).<br/>
          <strong>Distância e Tempo:</strong> Cerca de 800 a 850 km e 10 a 12 horas de estrada, mais a passagem pela fronteira aduaneira (via Jaguarão ou via Chuí).
        </p>
        <div class="p-4 rounded-xl bg-amber-50 border-l-4 border-amber-500 text-amber-950 text-sm">
          <strong>Dica de Planejamento:</strong> &ldquo;Quem pousa em Porto Alegre em cima da hora corre o risco de não chegar ao jogo. Planeje a saída com antecedência e fale com a nossa equipe sobre o melhor horário.&rdquo;
        </div>
      </section>

      <section class="py-10 border-t border-slate-200">
        <h2 class="text-2xl font-bold text-[#0D0A27] mb-4">Opções de Veículo e Passageiros</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="p-6 rounded-2xl bg-white border border-slate-200">
            <h3 class="font-bold text-lg mb-2">Carro Executivo</h3>
            <p class="text-sm text-slate-600 mb-2">Até 3 a 4 passageiros e 3 malas médias. Preço sob consulta.</p>
          </div>
          <div class="p-6 rounded-2xl bg-white border border-slate-200">
            <h3 class="font-bold text-lg mb-2">SUV Executivo</h3>
            <p class="text-sm text-slate-600 mb-2">Até 4 a 6 passageiros e 4 a 5 malas médias. Conforto e autonomia. Preço sob consulta.</p>
          </div>
          <div class="p-6 rounded-2xl bg-white border border-slate-200">
            <h3 class="font-bold text-lg mb-2">Van Executiva</h3>
            <p class="text-sm text-slate-600 mb-2">Até 7 a 15 passageiros e amplo bagageiro. Preço fechado para dividir em grupo.</p>
          </div>
        </div>
      </section>

      <section class="py-10 border-t border-slate-200">
        <h2 class="text-2xl font-bold text-[#0D0A27] mb-4">Documentos e Fronteira (Informativo)</h2>
        <p class="text-sm text-slate-700 leading-relaxed mb-4">
          Cidadãos brasileiros devem portar RG original em bom estado emitido há menos de 10 anos OU Passaporte válido. <strong>Atenção:</strong> CNH (física ou digital) NÃO é aceita pelas autoridades migratórias uruguaias para cruzar a fronteira. Menores desacompanhados de um dos pais necessitam de autorização judicial/consular.
        </p>
      </section>

      <section class="py-10 border-t border-slate-200">
        <h2 class="text-2xl font-bold text-[#0D0A27] mb-4">Perguntas Frequentes (FAQ)</h2>
        <div class="space-y-4 text-sm">
          <div>
            <h3 class="font-bold text-[#0D0A27]">Quanto custa o transfer de Porto Alegre a Montevidéu?</h3>
            <p class="text-slate-600">O valor depende do veículo, número de passageiros e se inclui retorno. O preço é fechado por veículo para divisão entre amigos.</p>
          </div>
          <div>
            <h3 class="font-bold text-[#0D0A27]">Quanto tempo dura a viagem?</h3>
            <p class="text-slate-600">Em média 10 a 12 horas mais a fiscalização de fronteira.</p>
          </div>
          <div>
            <h3 class="font-bold text-[#0D0A27]">Vocês buscam no aeroporto de Porto Alegre?</h3>
            <p class="text-slate-600">Sim, com motorista aguardando no desembarque do Aeroporto Salgado Filho.</p>
          </div>
        </div>
      </section>

      <section id="formulario-cotacao" class="py-10 border-t border-slate-200">
        <h2 class="text-2xl font-bold text-[#0D0A27] mb-4">Solicitar Cotação de Transfer</h2>
        <p class="text-sm text-slate-600 mb-6">Fale diretamente com nossa equipe pelo WhatsApp de segunda a domingo, das 05h às 23h: (54) 99153-7288.</p>
        <a href="https://wa.me/5554991537288?text=Ol%C3%A1!%20Quero%20uma%20cota%C3%A7%C3%A3o%20de%20transfer%20Porto%20Alegre%20%E2%86%92%20Montevid%C3%A9u." class="inline-block px-6 py-4 rounded-xl bg-emerald-600 text-white font-bold text-sm uppercase">Falar com a AG Transfer no WhatsApp</a>
      </section>

      <footer class="pt-8 border-t border-slate-200 text-xs text-slate-500">
        <p>Aviso: A AG Transfer é uma empresa independente de transporte e não tem vínculo com a CONMEBOL, com os clubes ou com a organização do evento. Não vendemos ingressos.</p>
      </footer>
    </div>
  </main>
`;

let mtvHtml = injectMeta(baseHtml, {
  title: montevideoTitle,
  description: montevideoDesc,
  canonicalUrl: montevideoCanonical
});

// Inject JSON-LD schemas into head
mtvHtml = mtvHtml.replace('</head>', `${montevideoJsonLd}\n</head>`);

// Inject complete semantic HTML into root for zero-JS crawlers
mtvHtml = mtvHtml.replace('<div id="root"></div>', `<div id="root">${montevideoPreRenderedContent}</div>`);

fs.writeFileSync(path.join(mtvDir, 'index.html'), mtvHtml);
console.log('  ✓ Generated /transfer-porto-alegre-montevideu/index.html (with full semantic HTML & JSON-LD schemas)');

console.log('[generate-static-routes] Successfully generated all static route pages!');

