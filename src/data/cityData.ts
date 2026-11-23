export interface CityItem {
  id: string;
  slug: string;
  name: string;
  region: string;
  postalCode?: string;
  distanceFromPoa: string;
  distanceFromCxj: string;
  heroTagline: string;
  description: string;
  longDescription: string;
  mainAttractions: string[];
  neighborhoodsOrPoints: string[];
  highlights: string[];
  faq: { question: string; answer: string }[];
  seoTitle: string;
  seoDescription: string;
  whatsappMessage: string;
}

export const CITIES_SERVED: CityItem[] = [
  {
    id: 'gramado',
    slug: 'gramado',
    name: 'Gramado',
    region: 'Região das Hortênsias · Serra Gaúcha',
    distanceFromPoa: '115 km (~2h00)',
    distanceFromCxj: '70 km (~1h10)',
    heroTagline: 'Área de Cobertura Oficial · Transporte Executivo e Transfers VIP em Gramado',
    description:
      'Atendimento completo em Gramado RS: transfers privativos desde POA e CXJ, deslocamentos para restaurantes e city tours personalizados das 05h às 23h.',
    longDescription:
      'Gramado é o principal destino turístico da Serra Gaúcha e faz parte da área de cobertura prioritária da AG Transfer. Atendemos hotéis da Avenida Borges de Medeiros, Planalto, Carniel, Bairro Bavária e condomínios residenciais com embarques pontuais e veículos executivos climatizados.',
    mainAttractions: [
      'Rua Coberta e Palácio dos Festivais',
      'Lago Negro e Parque Mini Mundo',
      'Snowland e Acquamotion',
      'Avenida das Hortênsias (eixo Gramado–Canela)',
    ],
    neighborhoodsOrPoints: ['Centro / Borges de Medeiros', 'Planalto / Lago Negro', 'Bavária', 'Carniel', 'Avenida das Hortênsias'],
    highlights: [
      'Recepção VIP nos aeroportos POA e CXJ direto para seu hotel em Gramado',
      'Motoristas familiarizados com desvios e rotas alternativas em feriados e Natal Luz',
      'Disponibilidade diária das 05h às 23h de segunda a domingo',
    ],
    faq: [
      {
        question: 'Vocês atendem todos os hotéis e pousadas de Gramado?',
        answer:
          'Sim, cobrimos 100% da área urbana e rural de Gramado, incluindo hotéis centrais, resorts da Avenida das Hortênsias, apartamentos por temporada e condomínios.',
      },
      {
        question: 'É possível contratar transfer apenas para ir ao aeroporto na volta?',
        answer:
          'Sim! Atendemos tanto trechos de ida e volta quanto apenas o retorno do seu hotel em Gramado para os aeroportos POA ou CXJ.',
      },
    ],
    seoTitle: 'Transfer Gramado RS | Transporte Executivo e Passeios VIP',
    seoDescription:
      'Transfer executivo e transporte privativo em Gramado RS. Atendimento de segunda a domingo, das 05h às 23h, saindo dos Aeroportos de Porto Alegre (POA) e Caxias do Sul (CXJ).',
    whatsappMessage: 'Olá! Preciso de transfer ou transporte executivo em Gramado RS.',
  },
  {
    id: 'canela',
    slug: 'canela',
    name: 'Canela',
    region: 'Região das Hortênsias · CEP 95680-000',
    postalCode: '95680-000',
    distanceFromPoa: '122 km (~2h10)',
    distanceFromCxj: '76 km (~1h15)',
    heroTagline: 'Área de Cobertura Oficial · Canela, RS (95680-000)',
    description:
      'Transfer executivo privativo e passeios VIP em Canela RS (CEP 95680-000). Conexão direta com os aeroportos POA e CXJ, Catedral de Pedra e Parque do Caracol.',
    longDescription:
      'Canela (CEP 95680-000) integra nossa área de cobertura oficial na Serra Gaúcha. Realizamos traslados privativos direto para hotéis, pousadas em meio à natureza, Skyglass Canela, Parque do Caracol e roteiros gastronômicos integrados com Gramado.',
    mainAttractions: [
      'Catedral de Pedra e Praça João Corrêa',
      'Parque do Caracol e Bondinhos Aéreos',
      'Skyglass Canela e Alpen Park',
      'Vinícola Jolimont e parques ecológicos',
    ],
    neighborhoodsOrPoints: ['Centro de Canela', 'Vila Suzana', 'Distrito Caracol', 'Condomínios Quinta da Serra / Laje de Pedra'],
    highlights: [
      'Área de cobertura oficial em Canela, RS, CEP 95680-000',
      'Transporte seguro para áreas de parques e estradas vicinais da região',
      'Atendimento familiar com cadeirinhas infantis cortesia',
    ],
    faq: [
      {
        question: 'Vocês buscam diretamente na Vila Suzana e condomínios como Laje de Pedra?',
        answer:
          'Sim, atendemos normalmente condomínios como Laje de Pedra, Quinta da Serra e pousadas em toda a extensão de Canela (CEP 95680-000).',
      },
    ],
    seoTitle: 'Transfer Canela RS | Transporte Executivo Privativo',
    seoDescription:
      'Transporte executivo privativo em Canela RS. Conexão direta com aeroportos POA e CXJ, Cascata do Caracol e Catedral de Pedra. Conforto VIP e motoristas experientes.',
    whatsappMessage: 'Olá! Gostaria de cotar um transfer em Canela RS.',
  },
  {
    id: 'bento-goncalves',
    slug: 'bento-goncalves',
    name: 'Bento Gonçalves',
    region: 'Vale dos Vinhedos · CEP 95700-000',
    postalCode: '95700-000',
    distanceFromPoa: '125 km (~1h55)',
    distanceFromCxj: '45 km (~45 min)',
    heroTagline: 'Área de Cobertura Oficial · Bento Gonçalves, RS (95700-000)',
    description:
      'Transporte executivo, transfer de aeroportos e tours enoturísticos no Vale dos Vinhedos e Caminhos de Pedra em Bento Gonçalves RS (CEP 95700-000).',
    longDescription:
      'Como área de cobertura oficial em Bento Gonçalves (CEP 95700-000), conectamos hóspedes de spas do vinho, resorts e pousadas rurais aos aeroportos de Caxias do Sul (CXJ) e Porto Alegre (POA), além de conduzirmos tours privativos pelas vinícolas com total segurança.',
    mainAttractions: [
      'Vale dos Vinhedos e vinícolas renomadas',
      'Roteiro Caminhos de Pedra',
      'Passeio Maria Fumaça (Estação Bento)',
      'Vale do Rio das Antas e Pinto Bandeira',
    ],
    neighborhoodsOrPoints: ['Vale dos Vinhedos', 'Centro / Cidade Alta', 'Caminhos de Pedra', 'São Vendelino / Planalto'],
    highlights: [
      'Área de cobertura oficial em Bento Gonçalves, RS, CEP 95700-000',
      'Curta distância de apenas 45 min até o Aeroporto de Caxias do Sul (CXJ)',
      'Motoristas à disposição para degustações tranquilas sem riscos na direção',
    ],
    faq: [
      {
        question: 'Vocês realizam o transfer de Bento Gonçalves para o passeio da Maria Fumaça ou aeroporto?',
        answer:
          'Sim! Atendemos tanto transfers de chegada/saída dos aeroportos CXJ e POA quanto roteiros diários pelas vinícolas e estações em Bento Gonçalves.',
      },
    ],
    seoTitle: 'Transfer Bento Gonçalves RS | Vale dos Vinhedos Executivo',
    seoDescription:
      'Transfer executivo e tours privativos no Vale dos Vinhedos em Bento Gonçalves RS. Transporte seguro para degustações e eventos vitivinícolas.',
    whatsappMessage: 'Olá! Preciso de transfer ou tour no Vale dos Vinhedos em Bento Gonçalves.',
  },
  {
    id: 'caxias-do-sul',
    slug: 'caxias-do-sul',
    name: 'Caxias do Sul',
    region: 'Polo Econômico & Aeroporto CXJ · Serra Gaúcha',
    distanceFromPoa: '128 km (~1h50)',
    distanceFromCxj: 'Base Local (CXJ)',
    heroTagline: 'Área de Cobertura Oficial · Caxias do Sul, RS',
    description:
      'Transporte executivo em Caxias do Sul RS: receptivo no Aeroporto Hugo Cantergiani (CXJ), deslocamentos para feiras (Mercopar, Festa da Uva) e polo industrial.',
    longDescription:
      'Caxias do Sul é um dos polos centrais da nossa área de cobertura oficial. Atendemos executivos, comitivas empresariais e passageiros do Aeroporto Hugo Cantergiani (CXJ) com conexões ágeis para hotéis da cidade, empresas do polo metalmecânico, Porto Alegre, Gramado e Bento Gonçalves.',
    mainAttractions: [
      'Aeroporto Regional Hugo Cantergiani (CXJ)',
      'Parque de Eventos da Festa da Uva (Mercopar)',
      'Igreja de São Pelegrino e Monumento ao Imigrante',
      'Distritos Industriais e Centros Empresariais',
    ],
    neighborhoodsOrPoints: ['Centro / São Pelegrino', 'Lourdes / Exposição', 'Desvio Rizzo / Distrito Industrial', 'Ana Rech', 'Aeroporto CXJ'],
    highlights: [
      'Área de cobertura oficial em Caxias do Sul, RS, Brasil',
      'Receptivo imediato no Aeroporto CXJ sem burocracia',
      'Faturamento empresarial e emissão de Nota Fiscal',
    ],
    faq: [
      {
        question: 'Vocês fazem o trajeto Caxias do Sul até o Aeroporto Salgado Filho (POA)?',
        answer:
          'Sim, realizamos transfer diário direto de qualquer bairro ou hotel de Caxias do Sul até o Aeroporto Internacional Salgado Filho em Porto Alegre, das 05h às 23h.',
      },
    ],
    seoTitle: 'Transfer Caxias do Sul RS | Transporte Aeroporto CXJ e Corporativo',
    seoDescription:
      'Área de cobertura oficial da AG Transfer em Caxias do Sul RS. Transporte executivo para Aeroporto CXJ, polo metalmecânico e viagens intermunicipais de segunda a domingo, das 05h às 23h.',
    whatsappMessage: 'Olá! Preciso de transporte executivo ou transfer em Caxias do Sul.',
  },
  {
    id: 'porto-alegre',
    slug: 'porto-alegre',
    name: 'Porto Alegre',
    region: 'Capital · Aeroporto Salgado Filho (POA)',
    distanceFromPoa: 'Base Aeroporto POA',
    distanceFromCxj: '128 km (~1h50)',
    heroTagline: 'Embarque Direto no Aeroporto Salgado Filho (POA) & Hotéis',
    description:
      'Receptivo executivo no Aeroporto Internacional Salgado Filho (POA) e hotéis de Porto Alegre com rotas diretas para Serra Gaúcha e viagens especiais.',
    longDescription:
      'Recebemos passageiros diretamente no desembarque do Aeroporto Salgado Filho (POA), bairros centrais, Moinhos de Vento, Bela Vista e zonas empresariais de Porto Alegre rumo à Serra Gaúcha ou destinos especiais como Montevidéu.',
    mainAttractions: [
      'Aeroporto Internacional Salgado Filho (POA)',
      'Centro Histórico e Orla do Guaíba',
      'Moinhos de Vento e Distrito Corporativo',
      'Centros de Eventos e Estádios (Beira-Rio e Arena)',
    ],
    neighborhoodsOrPoints: ['Aeroporto Salgado Filho (POA)', 'Moinhos de Vento', 'Bela Vista / Petrópolis', 'Centro Histórico'],
    highlights: [
      'Rastreamento em tempo real de pousos nacionais e internacionais em POA',
      'Conexão imediata sem filas para Gramado, Canela, Caxias e Bento Gonçalves',
      'Ponto de partida para o Transfer Internacional POA ➔ Montevidéu',
    ],
    faq: [
      {
        question: 'Vocês buscam em hotéis de Porto Alegre além do aeroporto?',
        answer:
          'Sim, realizamos embarques tanto no saguão do Aeroporto POA quanto em qualquer hotel ou endereço residencial/comercial de Porto Alegre.',
      },
    ],
    seoTitle: 'Transfer Porto Alegre RS | Aeroporto Salgado Filho POA ⇄ Serra Gaúcha',
    seoDescription:
      'Transfer executivo privativo saindo do Aeroporto Salgado Filho (POA) e hotéis de Porto Alegre com destino direto para Gramado, Canela e Bento Gonçalves.',
    whatsappMessage: 'Olá! Gostaria de cotar um transfer saindo de Porto Alegre (POA).',
  },
  {
    id: 'garibaldi',
    slug: 'garibaldi',
    name: 'Garibaldi',
    region: 'Capital Brasileira do Espumante · Serra Gaúcha',
    distanceFromPoa: '115 km (~1h45)',
    distanceFromCxj: '42 km (~40 min)',
    heroTagline: 'Transporte Executivo & Tours de Espumantes em Garibaldi, RS',
    description:
      'Transfer executivo em Garibaldi RS para visitação às históricas caves de espumantes, Boulevard Garibaldi e conexão com aeroportos CXJ e POA.',
    longDescription:
      'Garibaldi encanta pela tradição italiana e pelas caves subterrâneas de espumantes. Oferecemos transporte privativo para roteiros gastronômicos, Fenachamp, visitas às vinícolas Peterlongo, Chandon e Garibaldi, além de transfers seguros para aeroportos.',
    mainAttractions: [
      'Rota dos Espumantes e Vinícolas Históricas',
      'Centro Histórico / Rua Buarque de Macedo',
      'Estrada do Sabor (agroturismo)',
      'Estação Ferroviária Maria Fumaça',
    ],
    neighborhoodsOrPoints: ['Centro Histórico', 'Rota dos Espumantes', 'Estrada do Sabor'],
    highlights: [
      'Apenas 40 minutos do Aeroporto de Caxias do Sul (CXJ)',
      'Combinação perfeita com roteiro privativo em Bento Gonçalves',
      'Conforto total sem se preocupar com estacionamento ou direção após degustações',
    ],
    faq: [
      {
        question: 'Posso combinar Garibaldi e Vale dos Vinhedos no mesmo dia de tour?',
        answer:
          'Sim, ambas as cidades ficam lado a lado e formam o roteiro mais completo de enoturismo da Serra Gaúcha em um único dia privativo.',
      },
    ],
    seoTitle: 'Transfer Garibaldi RS | Capital do Espumante e Serra Gaúcha',
    seoDescription:
      'Transporte executivo em Garibaldi RS. Visite as melhores vinícolas de espumantes da Serra Gaúcha com motorista privativo à disposição e máxima segurança.',
    whatsappMessage: 'Olá! Gostaria de cotar um transporte ou tour em Garibaldi RS.',
  },
  {
    id: 'nova-petropolis',
    slug: 'nova-petropolis',
    name: 'Nova Petrópolis',
    region: 'Rota Romântica · Jardim da Serra Gaúcha',
    distanceFromPoa: '95 km (~1h35)',
    distanceFromCxj: '38 km (~45 min)',
    heroTagline: 'Transfer & Passeios na Rota Romântica em Nova Petrópolis, RS',
    description:
      'Transfer privativo e passeios personalizados em Nova Petrópolis RS: Parque Aldeia do Imigrante, Labirinto Verde, Ninho das Águias e malharias.',
    longDescription:
      'Localizada exatamente no caminho da Rota Romântica entre Porto Alegre, Caxias do Sul e Gramado, Nova Petrópolis oferece charme germânico, jardins floridos e gastronomia típica. Atendemos hotéis da cidade e paradas estratégicas para turistas.',
    mainAttractions: [
      'Parque Aldeia do Imigrante e Labirinto Verde',
      'Mirante Ninho das Águias e Esculturas Pedras do Silêncio',
      'Praça das Flores e Rua Coberta',
    ],
    neighborhoodsOrPoints: ['Centro / Praça das Flores', 'Linha Imperial', 'Pinhal Alto', 'BR-116 Rota Romântica'],
    highlights: [
      'Conexão rápida entre Nova Petrópolis, Gramado (35 km) e Aeroporto POA',
      'Possibilidade de stop tour no caminho entre aeroporto e Gramado',
      'Atendimento diário das 05h às 23h',
    ],
    faq: [
      {
        question: 'É possível fazer uma parada em Nova Petrópolis no transfer de POA para Gramado?',
        answer:
          'Sim! Como a Rota Romântica passa por dentro de Nova Petrópolis, podemos programar um stop estratégico mediante orçamento combinado.',
      },
    ],
    seoTitle: 'Transfer Nova Petrópolis RS | Jardim da Serra Gaúcha',
    seoDescription:
      'Transfer e passeios privativos em Nova Petrópolis RS, a capital nacional do cooperativismo e rota das flores. Conexão com Gramado e aeroportos.',
    whatsappMessage: 'Olá! Preciso de transfer ou passeio em Nova Petrópolis RS.',
  },
  {
    id: 'farroupilha',
    slug: 'farroupilha',
    name: 'Farroupilha',
    region: 'Santuário de Caravaggio · Polo Têxtil e Calçadista',
    distanceFromPoa: '112 km (~1h45)',
    distanceFromCxj: '25 km (~30 min)',
    heroTagline: 'Transporte Executivo em Farroupilha & Santuário de Caravaggio',
    description:
      'Transporte executivo privativo em Farroupilha RS para o Santuário de Nossa Senhora de Caravaggio, centros atacadistas de malhas e aeroportos.',
    longDescription:
      'Atendemos viagens religiosas ao Santuário de Caravaggio, compradores de malharias e executivos do polo industrial de Farroupilha, com acesso extremamente rápido ao Aeroporto de Caxias do Sul (30 minutos) e Porto Alegre.',
    mainAttractions: [
      'Santuário de Nossa Senhora de Caravaggio',
      'Salto Ventoso e Vinícola Perini',
      'Centros de Compras de Malhas (RS-122)',
    ],
    neighborhoodsOrPoints: ['Centro', 'Santuário de Caravaggio', 'Eixo RS-122 / Malharias', 'Linha Jansen'],
    highlights: [
      'Apenas 30 minutos do Aeroporto Hugo Cantergiani (CXJ)',
      'Veículos com bagageiro amplo ideal para compradores e romarias em grupo',
      'Segurança e pontualidade de segunda a domingo, das 05h às 23h',
    ],
    faq: [
      {
        question: 'Vocês fazem transporte de vans ou carros privativos até o Santuário de Caravaggio?',
        answer:
          'Sim, operamos com sedans, SUVs e vans executivas para famílias e pequenos grupos em visita ao Santuário de Caravaggio e Vinícola Perini.',
      },
    ],
    seoTitle: 'Transfer Farroupilha RS | Santuário de Caravaggio e Malhas',
    seoDescription:
      'Transporte executivo privativo em Farroupilha RS. Deslocamentos rápidos para o Santuário de Caravaggio, centros de compras e polo calçadista/têxtil.',
    whatsappMessage: 'Olá! Gostaria de cotar um transporte executivo em Farroupilha RS.',
  },
  {
    id: 'flores-da-cunha',
    slug: 'flores-da-cunha',
    name: 'Flores da Cunha',
    region: 'Altos Montes · CEP 95270-000',
    postalCode: '95270-000',
    distanceFromPoa: '148 km (~2h10)',
    distanceFromCxj: '24 km (~30 min)',
    heroTagline: 'Área de Cobertura Oficial · Flores da Cunha, RS (95270-000)',
    description:
      'Área de cobertura oficial em Flores da Cunha RS (CEP 95270-000): transporte executivo para roteiro Altos Montes, vinícolas e aeroportos CXJ e POA.',
    longDescription:
      'Flores da Cunha (CEP 95270-000) compõe a área de cobertura prioritária da AG Transfer na Serra Gaúcha. Além da conexão rápida de 30 minutos com o Aeroporto de Caxias do Sul (CXJ), realizamos passeios enoturísticos pela região dos Altos Montes e viagens corporativas.',
    mainAttractions: [
      'Roteiro Enoturístico Vinhos dos Altos Montes',
      'Campanário de Flores da Cunha e Praça da Bandeira',
      'Casarões Coloniais e Vinícolas Familiares',
    ],
    neighborhoodsOrPoints: ['Centro de Flores da Cunha', 'Otávio Rocha', 'Mato Perso', 'Nova Pádua (Divisa)'],
    highlights: [
      'Área de cobertura oficial em Flores da Cunha, RS, CEP 95270-000',
      'Deslocamento rápido (24 km) até o Aeroporto CXJ e acesso direto à RS-122',
      'Operação regular de segunda a domingo, das 05h às 23h',
    ],
    faq: [
      {
        question: 'Vocês atendem embarques em Flores da Cunha com destino a Porto Alegre e Gramado?',
        answer:
          'Sim! Flores da Cunha (CEP 95270-000) é uma de nossas cidades de cobertura oficial, com atendimento diário para aeroportos, hotéis e reuniões.',
      },
    ],
    seoTitle: 'Transfer Flores da Cunha RS | Transporte Executivo Altos Montes',
    seoDescription:
      'Transporte executivo privativo em Flores da Cunha RS. Conexão rápida com Aeroporto CXJ (20 km) e POA. Atendimento de segunda a domingo das 05h às 23h.',
    whatsappMessage: 'Olá! Preciso de transfer ou transporte executivo em Flores da Cunha RS.',
  },
];
