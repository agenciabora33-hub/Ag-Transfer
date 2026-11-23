export interface CoverageArea {
  slug: string;
  label: string;
  city: string;
  postalCode?: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  category: 'Aeroportos' | 'Transfers Privativos' | 'Tours Enoturísticos' | 'Corporativo';
  routeSummary: string;
  duration: string;
  capacity: string;
  description: string;
  longDescription: string;
  highlights: string[];
  includedItems: string[];
  faq: { question: string; answer: string }[];
  seoTitle: string;
  seoDescription: string;
  whatsappMessage: string;
}

export interface FleetVehicle {
  id: string;
  name: string;
  category: string;
  passengers: string;
  luggage: string;
  description: string;
  features: string[];
  imageUrl: string;
  imageSrcSet: string;
  imageAlt: string;
}

export interface TrustPillar {
  title: string;
  metric: string;
  description: string;
}

export interface PopularRoute {
  origin: string;
  destination: string;
  distance: string;
  estimatedTime: string;
  serviceSlug: string;
}

export interface ClientReview {
  name: string;
  origin: string;
  service: string;
  date: string;
  rating: number;
  comment: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const COMPANY_NAP = {
  name: 'AG Transfer & Transporte Executivo LTDA',
  shortName: 'AG Transfer',
  phone: '(54) 99153-7288',
  phoneRaw: '5554991537288',
  whatsappBaseUrl:
    'https://wa.me/5554991537288?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20uma%20cota%C3%A7%C3%A3o%20de%20transfer%20executivo%20com%20a%20AG%20Transfer.',
  operatingHours: 'Segunda a domingo, das 05h às 23h',
  operatingHoursShort: 'Seg a Dom · 05h às 23h',
  gbpUrl: 'https://www.google.com/maps/place/?q=place_id:ChIJLxRoT8GjHpURkRBdWM5i_g0',
  siteUrl: 'https://www.aagtransfer.com.br',
  logoUrl: 'https://www.aagtransfer.com.br/logo-sm.webp',
  logoSmUrl: 'https://www.aagtransfer.com.br/logo-sm.webp',
  heroImageUrl: '/images/hero.webp',
  heroImage480: '/images/hero-480.webp',
  heroImage640: '/images/hero-640.webp',
  heroImage1200: '/images/hero-1200.webp',
  ratingValue: '5.0',
  reviewCount: '+200 avaliações',
};

export const COVERAGE_AREAS: CoverageArea[] = [
  { slug: 'gramado', label: 'Gramado, RS, Brasil', city: 'Gramado' },
  { slug: 'caxias-do-sul', label: 'Caxias do Sul, RS, Brasil', city: 'Caxias do Sul' },
  { slug: 'canela', label: 'Canela, RS, 95680-000, Brasil', city: 'Canela', postalCode: '95680-000' },
  { slug: 'flores-da-cunha', label: 'Flores da Cunha, RS, 95270-000, Brasil', city: 'Flores da Cunha', postalCode: '95270-000' },
  { slug: 'bento-goncalves', label: 'Bento Gonçalves, RS, 95700-000, Brasil', city: 'Bento Gonçalves', postalCode: '95700-000' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'transfer-para-gramado',
    slug: 'transfer-para-gramado',
    title: 'Transfer Para Gramado VIP',
    shortTitle: 'Transfer Para Gramado',
    category: 'Transfers Privativos',
    routeSummary: 'Aeroportos POA / CXJ ⇄ Hotéis em Gramado',
    duration: '1h15 a 2h00',
    capacity: '1 a 15 passageiros',
    description:
      'Transfer privativo porta a porta direto para seu hotel, pousada ou apartamento em Gramado com acompanhamento em tempo real do seu voo.',
    longDescription:
      'Viaje com conforto e tranquilidade desde o desembarque até o seu destino em Gramado. Nossa equipe monitora o horário do seu voo em tempo real e recebe você no saguão do aeroporto sem filas, esperas ou compartilhamento com desconhecidos.',
    highlights: [
      'Veículo 100% exclusivo para sua família ou grupo',
      'Recepção nominal no desembarque dos aeroportos POA e CXJ',
      'Cadeirinha infantil e assento de elevação gratuitos sob solicitação',
      'Monitoramento ativo de atrasos ou antecipações de voos',
    ],
    includedItems: [
      'Combustível e pedágios incluídos no orçamento fechado',
      'Assistência integral com bagagens no aeroporto e no hotel',
      'Água mineral cortesia e climatização individual',
      'Motorista experiente conhecedor das rotas da Serra Gaúcha',
    ],
    faq: [
      {
        question: 'O transfer para Gramado é compartilhado ou privativo?',
        answer:
          'Todos os transfers da AG Transfer são 100% privativos. Você e seus acompanhantes têm o veículo inteiro à disposição, seguindo direto para o hotel sem paradas em outros endereços.',
      },
      {
        question: 'O que acontece se meu voo atrasar no Aeroporto Salgado Filho (POA)?',
        answer:
          'Monitoramos o código do seu voo em tempo real junto à companhia aérea. Caso ocorra atraso ou antecipação, ajustamos o horário do motorista automaticamente sem custos adicionais dentro da janela operacional.',
      },
    ],
    seoTitle: 'Transfer Para Gramado Privativo VIP | AG Transfer',
    seoDescription:
      'Transfer executivo privativo para Gramado saindo dos aeroportos de Porto Alegre (POA) ou Caxias do Sul (CXJ). Veículos novos, motoristas pontuais e atendimento das 05h às 23h.',
    whatsappMessage: 'Olá! Gostaria de cotar um Transfer Privativo VIP para Gramado.',
  },
  {
    id: 'transfer-para-canela',
    slug: 'transfer-para-canela',
    title: 'Transfer Para Canela VIP',
    shortTitle: 'Transfer Para Canela',
    category: 'Transfers Privativos',
    routeSummary: 'Aeroportos POA / CXJ ⇄ Canela RS',
    duration: '1h20 a 2h10',
    capacity: '1 a 15 passageiros',
    description:
      'Transporte executivo privativo direto para Canela (CEP 95680-000), hotéis centrais, condomínios, Catedral de Pedra e Parque do Caracol.',
    longDescription:
      'Chegue a Canela com máxima segurança e conforto em veículos executivos revisados. Atendemos pousadas românticas, hotéis boutique e casas de temporada em toda a área de cobertura de Canela, oferecendo embarque ágil nos aeroportos POA e CXJ.',
    highlights: [
      'Cobertura completa em hotéis, chalés e condomínios de Canela',
      'Rota otimizada pela Rota Romântica (BR-116) ou RS-115',
      'Porta-malas amplo para malas grandes e carrinhos de bebê',
      'Atendimento diário de segunda a domingo, das 05h às 23h',
    ],
    includedItems: [
      'Preço fechado combinado antecipadamente via WhatsApp',
      'Pedágios da rota já incluídos na cotação',
      'Veículos higienizados a cada viagem',
      'Recibo executivo ou Nota Fiscal mediante solicitação',
    ],
    faq: [
      {
        question: 'Vocês entregam diretamente em casas de temporada ou chalés em Canela?',
        answer:
          'Sim. Além dos hotéis da região central, atendemos condomínios fechados, pousadas rurais e apartamentos por temporada em toda Canela.',
      },
      {
        question: 'Qual o tempo médio de viagem do Aeroporto POA até Canela?',
        answer:
          'O trajeto leva em torno de 2h a 2h15, dependendo do fluxo de trânsito e da rota escolhida.',
      },
    ],
    seoTitle: 'Transfer Para Canela Privativo VIP | AG Transfer',
    seoDescription:
      'Transfer privativo para Canela RS saindo dos aeroportos de Porto Alegre (POA) e Caxias do Sul (CXJ). Transporte executivo com conforto, segurança e pontualidade britânica.',
    whatsappMessage: 'Olá! Gostaria de cotar um Transfer Privativo VIP para Canela.',
  },
  {
    id: 'transporte-executivo-gramado',
    slug: 'transporte-executivo-gramado',
    title: 'Transporte Executivo Gramado',
    shortTitle: 'Transporte Executivo',
    category: 'Corporativo',
    routeSummary: 'Serra Gaúcha · Eventos, Restaurantes e Negócios',
    duration: 'Por trecho ou período',
    capacity: '1 a 15 passageiros',
    description:
      'Locomoção executiva discreta para jantares, eventos, reuniões empresariais e deslocamentos exclusivos em Gramado e região.',
    longDescription:
      'Para quem exige discrição, pontualidade absoluta e atendimento sob medida em Gramado e Canela. Nossa frota executiva atende diretores, artistas, palestrantes e famílias que preferem não dirigir à noite ou enfrentar trânsito em alta temporada.',
    highlights: [
      'Motoristas trajados com padrão executivo e discrição total',
      'Veículos sem adesivagem turística ostentosa',
      'Embarque programado para jantares, cafés coloniais e espetáculos',
      'Suporte direto via WhatsApp das 05h às 23h',
    ],
    includedItems: [
      'Espera combinada conforme a programação do cliente',
      'Frota renovada com ar-condicionado dual-zone e Wi-Fi',
      'Faturamento empresarial disponível para clientes recorrentes',
      'Pontualidade garantida em horários de pico',
    ],
    faq: [
      {
        question: 'Posso agendar apenas idas e voltas para restaurantes em Gramado e Canela?',
        answer:
          'Sim! Realizamos traslados pontuais entre seu hotel e restaurantes ou eventos noturnos com horário de retorno programado.',
      },
    ],
    seoTitle: 'Transporte Executivo em Gramado & Serra Gaúcha | AG Transfer',
    seoDescription:
      'Serviço de transporte executivo em Gramado, Canela e Serra Gaúcha. Frotas de alto padrão com sedans, SUVs e vans executivas para famílias e executivos exigentes.',
    whatsappMessage: 'Olá! Preciso de Transporte Executivo em Gramado e Serra Gaúcha.',
  },
  {
    id: 'transfer-porto-alegre-gramado',
    slug: 'transfer-porto-alegre-gramado',
    title: 'Transfer Aeroporto POA ⇄ Serra',
    shortTitle: 'Aeroporto POA ⇄ Serra',
    category: 'Aeroportos',
    routeSummary: 'Aeroporto Salgado Filho (POA) ⇄ Gramado / Canela / Bento',
    duration: '1h50 a 2h15',
    capacity: '1 a 15 passageiros',
    description:
      'Conexão executiva direta do Aeroporto Internacional Salgado Filho (POA) e hotéis de Porto Alegre para toda a Serra Gaúcha.',
    longDescription:
      'Evite alugar carro ou lidar com estradas desconhecidas após o voo. Nosso motorista aguarda no desembarque do Aeroporto Salgado Filho (POA) e conduz você diretamente pela Rota Romântica ou Freeway/Taquara com máximo conforto e segurança.',
    highlights: [
      'Encontro rápido na porta de desembarque do Terminal POA',
      'Acompanhamento automático de horários de chegada e atrasos',
      'Parada cortesia rápida para café ou conveniência, se desejar',
      'Ideal para casais, famílias com crianças e grupos em vans',
    ],
    includedItems: [
      'Valor fechado antes do embarque sem surpresas de taxímetro',
      'Todos os pedágios e combustível inclusos',
      'Amplo compartimento de bagagens',
      'Atendimento de retorno programado direto do hotel ao aeroporto',
    ],
    faq: [
      {
        question: 'Onde o motorista aguarda no Aeroporto Salgado Filho (POA)?',
        answer:
          'Antes do pouso você recebe o contato direto do motorista e ele aguarda com placa de identificação discreta na área de desembarque, conduzindo até o veículo no estacionamento coberto.',
      },
    ],
    seoTitle: 'Transfer Aeroporto Porto Alegre (POA) ⇄ Serra Gaúcha | AG Transfer',
    seoDescription:
      'Transfer privativo conectando o Aeroporto Internacional Salgado Filho (POA) a Gramado e Canela. Recepção no desembarque e rastreamento de voos em tempo real.',
    whatsappMessage: 'Olá! Gostaria de cotar um transfer do Aeroporto de Porto Alegre (POA) para a Serra Gaúcha.',
  },
  {
    id: 'transfer-aeroporto-cxj-caxias',
    slug: 'transfer-aeroporto-cxj-caxias',
    title: 'Transfer Aeroporto CXJ (Caxias)',
    shortTitle: 'Aeroporto CXJ (Caxias)',
    category: 'Aeroportos',
    routeSummary: 'Aeroporto Hugo Cantergiani (CXJ) ⇄ Serra Gaúcha',
    duration: '40 min a 1h10',
    capacity: '1 a 15 passageiros',
    description:
      'Transfer ágil saindo do Aeroporto Hugo Cantergiani (CXJ) em Caxias do Sul para Gramado, Canela, Bento Gonçalves e Flores da Cunha.',
    longDescription:
      'Desembarcar em Caxias do Sul (CXJ) garante o acesso mais rápido ao Vale dos Vinhedos, Flores da Cunha, Farroupilha e Região das Hortênsias. Oferecemos recepção pontual no terminal e deslocamento imediato ao seu hotel ou compromisso.',
    highlights: [
      'Acesso em apenas 40–50 minutos até Bento Gonçalves e Garibaldi',
      'Trajeto panorâmico rápido pela RS-452 ou BR-116 para Gramado',
      'Cobertura ativa em toda Caxias do Sul e Flores da Cunha',
      'Embarque imediato sem espera de grupos terceiros',
    ],
    includedItems: [
      'Recepção personalizada no desembarque do aeroporto CXJ',
      'Bagageiro compatível com compras e caixas de vinhos no retorno',
      'Frota executiva com sedans, SUVs e vans',
      'Confirmação formal por escrito via WhatsApp',
    ],
    faq: [
      {
        question: 'Quanto tempo leva do Aeroporto de Caxias do Sul (CXJ) até Gramado?',
        answer:
          'O trajeto entre o Aeroporto Hugo Cantergiani (CXJ) e Gramado leva aproximadamente 1h05 a 1h15, sendo uma excelente alternativa rápida na Serra Gaúcha.',
      },
    ],
    seoTitle: 'Transfer Aeroporto de Caxias do Sul (CXJ) | AG Transfer',
    seoDescription:
      'Transfer do Aeroporto Hugo Cantergiani (CXJ) em Caxias do Sul para Gramado, Canela e Bento Gonçalves. Rota mais curta e rápida para a Serra Gaúcha.',
    whatsappMessage: 'Olá! Gostaria de cotar um transfer saindo ou chegando ao Aeroporto de Caxias do Sul (CXJ).',
  },
  {
    id: 'tour-vale-dos-vinhedos',
    slug: 'tour-vale-dos-vinhedos',
    title: 'Tour Vale dos Vinhedos VIP',
    shortTitle: 'Tour Vale dos Vinhedos',
    category: 'Tours Enoturísticos',
    routeSummary: 'Bento Gonçalves · Garibaldi · Pinto Bandeira',
    duration: 'Diária (6h a 8h)',
    capacity: '1 a 15 passageiros',
    description:
      'Roteiro enoturístico privativo pelas principais vinícolas e cantinas de Bento Gonçalves e Garibaldi, com motorista exclusivo o dia inteiro.',
    longDescription:
      'Deguste os melhores vinhos e espumantes do Brasil sem nenhuma preocupação com a Lei Seca ou estacionamento. Com a AG Transfer, você define as vinícolas e restaurantes que deseja visitar no Vale dos Vinhedos, Caminhos de Pedra ou Pinto Bandeira no seu próprio ritmo.',
    highlights: [
      'Liberdade total para degustar vinhos e espumantes com segurança',
      'Itinerário flexível entre vinícolas boutique e grandes propriedades',
      'Saída diretamente do seu hotel em Gramado, Canela ou Bento Gonçalves',
      'Armazenamento cuidadoso para suas compras de vinhos e queijos',
    ],
    includedItems: [
      'Veículo privativo com motorista à disposição durante todo o roteiro',
      'Orientação de horários entre degustações e almoço',
      'Combustível e deslocamento entre Bento, Garibaldi e região',
      'Paradas estratégicas em mirantes e queijarias artesanais',
    ],
    faq: [
      {
        question: 'Os ingressos e degustações nas vinícolas estão incluídos?',
        answer:
          'O serviço inclui o transporte privativo executivo e motorista exclusivo durante o roteiro. As taxas de degustação e refeições são contratadas diretamente nas vinícolas de sua preferência, permitindo total personalização do passeio.',
      },
    ],
    seoTitle: 'Tour Vale dos Vinhedos & Bento Gonçalves Privativo | AG Transfer',
    seoDescription:
      'Tour privativo exclusivo pelas melhores vinícolas de Bento Gonçalves, Garibaldi e Monte Belo do Sul. Roteiro personalizado com motorista à disposição o dia todo.',
    whatsappMessage: 'Olá! Quero montar um Tour Privativo pelo Vale dos Vinhedos.',
  },
  {
    id: 'tour-gramado-canela',
    slug: 'tour-gramado-canela',
    title: 'Tour Gramado & Canela VIP',
    shortTitle: 'Tour Gramado & Canela',
    category: 'Tours Enoturísticos',
    routeSummary: 'Lago Negro · Skyglass · Cascata do Caracol · Snowland',
    duration: 'Diária (4h a 8h)',
    capacity: '1 a 15 passageiros',
    description:
      'City tour privativo por Gramado e Canela em carro executivo, adaptado aos interesses e ao tempo da sua família, sem pressa ou ônibus lotados.',
    longDescription:
      'Conheça os cartões-postais da Região das Hortênsias no ritmo da sua família. Diferente de excursões em massa, você escolhe quanto tempo permanece no Lago Negro, Rua Torta, Catedral de Pedra, Bondinhos Aéreos, Skyglass ou parques temáticos.',
    highlights: [
      'Roteiro 100% personalizado conforme perfil de crianças, casais ou idosos',
      'Desembarque na porta das atrações sem caminhar longas distâncias',
      'Zero espera por outros grupos turísticos',
      'Flexibilidade para almoço e paradas para fotos',
    ],
    includedItems: [
      'Veículo privativo exclusivo e motorista conhecedor da cidade',
      'Ar-condicionado e bagageiro para casacos e compras',
      'Suporte rápido via WhatsApp durante o passeio',
      'Embarque e desembarque direto no hotel ou pousada',
    ],
    faq: [
      {
        question: 'Qual a diferença para o passeio de ônibus turístico tradicional?',
        answer:
          'No tour privativo você não fica preso a horários rígidos de grupo, não passa por lojas de comissionamento indesejadas e escolhe exatamente quais pontos turísticos visitar.',
      },
    ],
    seoTitle: 'Tour Privativo Gramado & Canela VIP | AG Transfer',
    seoDescription:
      'Passeio turístico personalizado por Gramado e Canela nos melhores pontos turísticos sem pressa. Conforto e flexibilidade total para sua família.',
    whatsappMessage: 'Olá! Gostaria de reservar um Tour Privativo em Gramado e Canela.',
  },
  {
    id: 'viagens-corporativas-serra',
    slug: 'viagens-corporativas-serra',
    title: 'Viagens Corporativas Serra',
    shortTitle: 'Viagens Corporativas',
    category: 'Corporativo',
    routeSummary: 'Caxias do Sul · Bento · Gramado · Feiras e Congressos',
    duration: 'Sob medida / Contratos',
    capacity: 'Executivos e Comitivas',
    description:
      'Logística executiva para feiras (Mercopar, Festuris, Movelsul, Fiema), congressos, visitas a fábricas e diretores em missão de negócios.',
    longDescription:
      'Atendimento especializado para empresas que precisam de pontualidade rigorosa, sigilo, apresentação impecável e facilidade administrativa. Coordenamos transfers de aeroportos, visitas técnicas ao polo metalmecânico e deslocamentos entre eventos corporativos.',
    highlights: [
      'Atendimento consolidado para múltiplos voos e diretoria',
      'Motoristas treinados em etiqueta corporativa e confidencialidade',
      'Cobertura entre Porto Alegre, Caxias do Sul, Bento e Gramado',
      'Emissão de Nota Fiscal e pagamento facilitado para empresas',
    ],
    includedItems: [
      'Coordenação centralizada por WhatsApp corporativo',
      'Sedans executivos, SUVs e Vans executivas',
      'Pontualidade garantida em janelas de feiras e convenções',
      'Recibo detalhado por centro de custo quando necessário',
    ],
    faq: [
      {
        question: 'Vocês emitem Nota Fiscal para empresas e eventos?',
        answer:
          'Sim. A AG Transfer & Transporte Executivo LTDA atua de forma regularizada e emite Nota Fiscal de serviços para reembolso ou faturamento corporativo.',
      },
    ],
    seoTitle: 'Transporte Corporativo & Feiras na Serra Gaúcha | AG Transfer',
    seoDescription:
      'Transporte executivo para congressos, feiras de negócios (Mercopar, Fenin, Festuris) e viagens corporativas na Serra Gaúcha com nota fiscal e faturamento.',
    whatsappMessage: 'Olá! Gostaria de informações sobre atendimento e faturamento corporativo da AG Transfer.',
  },
  {
    id: 'motorista-particular-diaria',
    slug: 'motorista-particular-diaria',
    title: 'Motorista Particular Diária',
    shortTitle: 'Motorista por Diária',
    category: 'Corporativo',
    routeSummary: 'Disponibilidade por 4h, 6h, 8h ou 10h (05h às 23h)',
    duration: 'Diária flexível',
    capacity: '1 a 15 passageiros',
    description:
      'Contrate veículo executivo e motorista particular à sua inteira disposição por período ou diária completa na Serra Gaúcha e Região Metropolitana.',
    longDescription:
      'Ideal para agendas com múltiplos compromissos, casamentos na serra, produções, roteiros livres sem horário fixo ou viajantes que desejam a tranquilidade de ter um carro e motorista aguardando a cada parada.',
    highlights: [
      'Chauffeur exclusivo aguardando em cada destino da agenda',
      'Alterações de itinerário em tempo real ao longo do dia',
      'Cobertura desde às 05h até às 23h de segunda a domingo',
      'Opções em Sedan, SUV Executivo ou Van Executiva',
    ],
    includedItems: [
      'Pacote de horas contratado com quilometragem combinada',
      'Motorista dedicado durante todo o período',
      'Atendimento direto e sem burocracia de locadoras',
      'Segurança e conforto porta a porta',
    ],
    faq: [
      {
        question: 'Qual o horário máximo de operação para diárias?',
        answer:
          'Nossa janela operacional regular funciona de segunda a domingo, das 05h às 23h. Para demandas especiais programadas com antecedência, consulte disponibilidade com nossa central.',
      },
    ],
    seoTitle: 'Motorista Particular por Diária na Serra Gaúcha | AG Transfer',
    seoDescription:
      'Contrate motorista executivo bilíngue à disposição por período ou diária para compromissos, roteiros sob medida ou eventos especiais em Gramado e região.',
    whatsappMessage: 'Olá! Gostaria de cotar a contratação de Motorista Particular por Diária.',
  },
];

export const FLEET: FleetVehicle[] = [
  {
    id: 'sedan-executivo',
    name: 'Sedan Executivo VIP',
    category: 'Conforto & Discrição',
    passengers: 'Até 3–4 passageiros',
    luggage: 'Até 3 malas médias',
    description:
      'Sedans executivos modernos com excelente isolamento acústico, amplo espaço para pernas, bancos confortáveis e porta-malas generoso para transfers de aeroporto e viagens corporativas.',
    features: ['Ar-condicionado digital', 'Carregadores USB-C', 'Água mineral cortesia', 'Seguro total passageiros'],
    imageUrl: '/images/hero-1200.webp',
    imageSrcSet: '/images/hero-480.webp 480w, /images/hero-640.webp 640w, /images/hero-1200.webp 1200w',
    imageAlt: 'Sedan Executivo VIP preto da AG Transfer circulando pela Serra Gaúcha',
  },
  {
    id: 'suv-executivo',
    name: 'SUV Executivo VIP',
    category: 'Espaço & Versatilidade',
    passengers: 'Até 4–6 passageiros',
    luggage: 'Até 5 malas médias',
    description:
      'SUVs de alto padrão ideais para famílias com crianças, roteiros enoturísticos no Vale dos Vinhedos e deslocamentos confortáveis com bastante bagagem em qualquer clima da serra.',
    features: ['Posição elevada de conforto', 'Ar-condicionado dual-zone', 'Cadeirinha sob solicitação', 'Porta-malas amplo'],
    imageUrl: '/images/suv-800.webp',
    imageSrcSet: '/images/suv-480.webp 480w, /images/suv-800.webp 800w',
    imageAlt: 'SUV Executivo VIP estacionado em hotel na Serra Gaúcha',
  },
  {
    id: 'van-executiva',
    name: 'Van Executiva VIP',
    category: 'Grupos & Comitivas',
    passengers: 'Até 15 passageiros',
    luggage: 'Bagageiro completo para grupo',
    description:
      'Vans executivas de teto alto, poltronas individuais reclináveis, iluminação ambiente e compartimento traseiro exclusivo para bagagens de grupos familiares, eventos ou viagens internacionais.',
    features: ['Poltronas reclináveis soft', 'Tomadas e USB por fileira', 'Ar-condicionado no salão', 'Microfone / áudio ambiente'],
    imageUrl: '/images/van-800.webp',
    imageSrcSet: '/images/van-480.webp 480w, /images/van-800.webp 800w',
    imageAlt: 'Van Executiva VIP da AG Transfer no Vale dos Vinhedos em Bento Gonçalves',
  },
];

export const TRUST_PILLARS: TrustPillar[] = [
  {
    title: 'Pontualidade Britânica',
    metric: 'Rastreamento de Voos',
    description:
      'Monitoramos seu voo nos aeroportos POA e CXJ em tempo real. Mesmo em caso de atraso aéreo, nossa recepção estará aguardando você.',
  },
  {
    title: 'Empresa Regularizada',
    metric: 'CNPJ Ativo + Nota Fiscal',
    description:
      'Transporte executivo legalizado com seguros abrangentes para passageiros, motoristas habilitados e emissão de NF-e para empresas.',
  },
  {
    title: 'Frota 100% Privativa',
    metric: 'Zero Compartilhamento',
    description:
      'Veículo exclusivo para você, sua família ou sua equipe. Embarque imediato sem esperar lotação de outros passageiros.',
  },
  {
    title: 'Atendimento Humanizado',
    metric: '05h às 23h · Todos os Dias',
    description:
      'Suporte direto pelo WhatsApp com equipe local da Serra Gaúcha de segunda a domingo, das 05h às 23h, sem robôs engessados.',
  },
];

export const POPULAR_ROUTES: PopularRoute[] = [
  {
    origin: 'Aeroporto Porto Alegre (POA)',
    destination: 'Gramado / Canela (RS)',
    distance: '115 km',
    estimatedTime: '2h00',
    serviceSlug: 'transfer-porto-alegre-gramado',
  },
  {
    origin: 'Aeroporto Caxias do Sul (CXJ)',
    destination: 'Gramado / Canela (RS)',
    distance: '70 km',
    estimatedTime: '1h10',
    serviceSlug: 'transfer-aeroporto-cxj-caxias',
  },
  {
    origin: 'Aeroporto Caxias do Sul (CXJ)',
    destination: 'Bento Gonçalves / Vale dos Vinhedos',
    distance: '45 km',
    estimatedTime: '45 min',
    serviceSlug: 'tour-vale-dos-vinhedos',
  },
  {
    origin: 'Gramado / Canela (Hotéis)',
    destination: 'Vale dos Vinhedos (Bento Gonçalves)',
    distance: '110 km',
    estimatedTime: '1h50',
    serviceSlug: 'tour-vale-dos-vinhedos',
  },
  {
    origin: 'Caxias do Sul / Flores da Cunha',
    destination: 'Aeroporto Salgado Filho (POA)',
    distance: '125 km',
    estimatedTime: '1h50',
    serviceSlug: 'transfer-porto-alegre-gramado',
  },
  {
    origin: 'Aeroporto Porto Alegre (POA)',
    destination: 'Montevidéu / Estádio Centenário (UY)',
    distance: '830 km',
    estimatedTime: '10h–12h',
    serviceSlug: 'transfer-porto-alegre-montevideu',
  },
];

export const REVIEWS: ClientReview[] = [
  {
    name: 'Mariana Oliveira',
    origin: 'São Paulo, SP',
    service: 'Transfer POA ⇄ Gramado',
    date: 'Avaliação Google 5.0',
    rating: 5,
    comment:
      'Atendimento impecável do começo ao fim! Nosso voo para Porto Alegre atrasou mais de 1 hora e o motorista já estava acompanhando tudo, aguardando com total cordialidade. Carro extremamente limpo e confortável.',
  },
  {
    name: 'Ricardo Mendonça',
    origin: 'Curitiba, PR',
    service: 'Tour Vale dos Vinhedos',
    date: 'Avaliação Google 5.0',
    rating: 5,
    comment:
      'Contratamos o SUV executivo para passarmos o dia nas vinícolas de Bento Gonçalves e Garibaldi saindo de Gramado. Experiência sensacional, zero preocupação com estrada e horários flexíveis.',
  },
  {
    name: 'Fernanda & Lucas Costa',
    origin: 'Belo Horizonte, MG',
    service: 'Transfer POA ⇄ Canela',
    date: 'Avaliação Google 5.0',
    rating: 5,
    comment:
      'Viajamos com nossa filha de 3 anos e já tinham instalado a cadeirinha perfeitamente higienizada antes do embarque. Motorista muito prudente na serra e comunicação ágil pelo WhatsApp.',
  },
  {
    name: 'Eduardo Vasconcelos',
    origin: 'Porto Alegre, RS',
    service: 'Transporte Corporativo',
    date: 'Avaliação Google 5.0',
    rating: 5,
    comment:
      'Utilizamos a AG Transfer frequentemente para diretores que visitam Caxias do Sul e Bento Gonçalves. Pontualidade absoluta, carros discretos e facilidade na emissão da nota fiscal.',
  },
];

export const FAQS: FAQItem[] = [
  {
    question: 'Qual o horário de funcionamento da AG Transfer?',
    answer:
      'Atendemos e realizamos operações todos os dias da semana, de segunda a domingo, das 05h às 23h. Recomendamos reservar com antecedência para garantir a melhor janela para seu voo ou passeio.',
  },
  {
    question: 'O transporte é privativo ou dividido com outros turistas?',
    answer:
      'Todos os nossos serviços de transfer e tours são 100% privativos. Você reserva o veículo completo apenas para os seus acompanhantes, sem esperas por outros voos e sem paradas em hotéis terceiros.',
  },
  {
    question: 'Vocês fornecem cadeirinha para crianças ou bebês?',
    answer:
      'Sim! Disponibilizamos bebê conforto, cadeirinha infantil e assento de elevação gratuitamente. Basta informar a idade das crianças no momento da cotação pelo WhatsApp.',
  },
  {
    question: 'Como funciona a recepção nos aeroportos de Porto Alegre (POA) e Caxias (CXJ)?',
    answer:
      'Monitoramos seu voo em tempo real pelo código informado na reserva. No desembarque, nosso motorista estará aguardando no saguão para auxiliar com as malas e encaminhar diretamente ao veículo privativo.',
  },
  {
    question: 'Quais as formas de pagamento e emissão de nota fiscal?',
    answer:
      'Aceitamos PIX, cartões de crédito/débito e faturamento corporativo mediante cadastro. Emitimos recibo detalhado e Nota Fiscal para pessoas físicas e empresas.',
  },
  {
    question: 'Onde fica a área de cobertura oficial da AG Transfer?',
    answer:
      'Nossa área de cobertura oficial abrange Gramado, Canela (CEP 95680-000), Caxias do Sul, Flores da Cunha (CEP 95270-000), Bento Gonçalves (CEP 95700-000), Garibaldi, Nova Petrópolis, Farroupilha e conexões diretas com Porto Alegre e viagens especiais.',
  },
];
