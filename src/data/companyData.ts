import heroImg from '../assets/images/hero_executive_transfer_1790736208088.jpg';
import suvImg from '../assets/images/fleet_executive_suv_1790736224372.jpg';
import vanImg from '../assets/images/fleet_executive_van_1790736238214.jpg';

export interface ServiceRoute {
  route: string;
  time: string;
  distance: string;
  details: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  features: string[];
  includedAmenities: string[];
  targetAudience: string[];
  commonRoutes: ServiceRoute[];
  serviceFaq: ServiceFaq[];
  metaTitle: string;
  metaDescription: string;
  icon: string;
  tag: string;
}

export interface FleetVehicle {
  id: string;
  name: string;
  category: string;
  passengers: string;
  luggage: string;
  image: string;
  description: string;
  features: string[];
}

export interface RouteItem {
  origin: string;
  destination: string;
  estimatedTime: string;
  distance: string;
  highlight: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export const COMPANY_NAP = {
  name: "AG Transfer & Transporte Executivo LTDA.",
  shortName: "AG Transfer Executivo",
  address: "Av. Salgado Filho, 3451 - Bairro Salgado Filho",
  city: "Caxias do Sul",
  state: "RS",
  zip: "95098-420",
  fullAddress: "Av. Salgado Filho, 3451 - Bairro Salgado Filho, Caxias do Sul - RS, CEP 95098-420",
  phone: "(54) 99153-7288",
  phoneRaw: "5554991537288",
  phoneDisplay: "(54) 99153-7288",
  operatingHours: "24 Horas / 7 dias por semana",
  googlePlaceId: "ChIJLxRoT8GjHpURkRBdWM5i_g0",
  googleRating: 5.0,
  reviewCount: 200,
  logoUrl: "/logo.png",
  gbpUrl: "https://share.google/Zr42iNP6P3vhu2am0",
  googleMapsUrl: "https://share.google/Zr42iNP6P3vhu2am0",
  whatsappBaseUrl: "https://wa.me/5554991537288?text=Ol%C3%A1,%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20de%20transfer%20executivo.",
  canonicalUrl: "https://www.agtransfer.com.br/",
  geoCoordinates: {
    lat: -29.1833,
    lng: -51.1833,
  }
};

export const ASSET_IMAGES = {
  hero: heroImg,
  suv: suvImg,
  van: vanImg,
};

export const FLEET_VEHICLES: FleetVehicle[] = [
  {
    id: "sedan-executivo",
    name: "Sedan Executivo Premium",
    category: "Padrão Corporativo Individual",
    passengers: "Até 3 passageiros",
    luggage: "2 malas grandes + 2 malas de mão",
    image: heroImg,
    description: "Veículo executivo com isolamento acústico superior, bancos em couro legítimo e climatização digital para viagens rápidas e conexões de aeroporto com máximo silêncio a bordo.",
    features: [
      "Bancos anatômicos em couro",
      "Climatização digital dual-zone",
      "Carregadores USB/Tipo C para smartphones e notebooks",
      "Água mineral lacrada e higienização garantida",
      "Vidros escurecidos para privacidade total"
    ]
  },
  {
    id: "suv-executivo",
    name: "SUV Executivo & Serra",
    category: "Espaço Amplo & Sofisticação",
    passengers: "Até 4 a 6 passageiros",
    luggage: "4 malas grandes + bolsas",
    image: suvImg,
    description: "Combinação ideal de altura, segurança em curvas de serra e amplo espaço interno. Perfeito para delegações de diretores e famílias em viagens turísticas de lazer em Gramado e Canela.",
    features: [
      "Tração reforçada para topografia da Serra Gaúcha",
      "Porta-malas espaçoso para compras e vinhos",
      "Conectividade Wi-Fi e tomadas 110V/USB",
      "Suspensão suave com conforto dinâmico",
      "Seguro total de passageiros (APP)"
    ]
  },
  {
    id: "van-vip",
    name: "Van Executiva VIP",
    category: "Grupos, Delegações & Feiras",
    passengers: "Até 15 passageiros",
    luggage: "Bagageiro amplo para grandes volumes",
    image: vanImg,
    description: "Capacidade estendida com padrão de primeira classe. Poltronas reclináveis individuais soft, iluminação suave e espaço para equipes inteiras em convenções ou receptivos em aeroportos.",
    features: [
      "Poltronas individuais reclináveis em veludo/couro",
      "Ar-condicionado central dutado de alta vazão",
      "Bagageiro traseiro profundo para instrumentos e bagagens",
      "Sistema de áudio e microfone para guias e coordenadores",
      "Ideal para Feira Mercopar, Festuris e Vindima"
    ]
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "transfer-aeroportuario",
    slug: "transfer-aeroportuario",
    title: "Transfer Aeroportuário",
    subtitle: "POA / CXI / FLN",
    description: "Receptivo exclusivo nos principais aeroportos da região com monitoramento de voo em tempo real, placa de identificação executiva e tolerância para eventuais atrasos da malha aérea.",
    fullDescription: "O serviço de Transfer Aeroportuário da AG Transfer foi projetado para oferecer tranquilidade absoluta a viajantes de negócios e turismo. Nossa central monitora o prefixo do voo em tempo real, recalculando horários de chegada automaticamente em caso de antecipação ou atrasos climáticos na malha aérea gaúcha. Ao desembarcar no Aeroporto Internacional Salgado Filho (POA) ou no Aeroporto Regional Hugo Cantergiani (CXI), nosso motorista estará pontualmente no portão com identificação corporativa discreta, auxiliando com suas bagagens até o veículo executivo climatizado.",
    features: [
      "Receptivo no desembarque com identificação personalizada",
      "Monitoramento do prefixo do voo em tempo real",
      "Conexão direta Caxias do Sul ⇄ Aeroporto Salgado Filho (POA)",
      "Agilidade no Aeroporto Regional Hugo Cantergiani (CXI)"
    ],
    includedAmenities: [
      "Água mineral fresca e higienização hospitalar",
      "Carregadores rápidos USB e Tipo C para smartphones",
      "Conexão Wi-Fi de alta velocidade a bordo",
      "Tolerância sem custo adicional para atrasos de voo confirmados"
    ],
    targetAudience: [
      "Diretores, executivos e consultores corporativos",
      "Famílias em férias rumo à Serra Gaúcha",
      "Delegações de feiras e congressos técnicos (Mercopar, Fenavinho)"
    ],
    commonRoutes: [
      {
        route: "Aeroporto Salgado Filho (POA) ⇄ Caxias do Sul",
        time: "1h 45m - 2h 00m",
        distance: "128 km",
        details: "Trajeto via BR-116 ou Rodovia do Parque com pedágios e seguro inclusos."
      },
      {
        route: "Aeroporto Hugo Cantergiani (CXI) ⇄ Gramado / Canela",
        time: "1h 15m - 1h 30m",
        distance: "68 km",
        details: "Rota panorâmica pela RS-235 com curvas suaves e conforto executivo."
      },
      {
        route: "Aeroporto Salgado Filho (POA) ⇄ Bento Gonçalves (Vale dos Vinhedos)",
        time: "1h 45m - 2h 10m",
        distance: "122 km",
        details: "Ligação direta via RS-446 e RS-470 com motorista especializado."
      }
    ],
    serviceFaq: [
      {
        question: "E se o meu voo atrasar de madrugada?",
        answer: "Nossa central acompanha o prefixo do voo pelo radar aeronáutico 24 horas por dia. Se o voo atrasar, o motorista é reposicionado automaticamente para o novo horário de toque no solo, sem cobranças abusivas."
      },
      {
        question: "Onde o motorista me aguarda no aeroporto?",
        answer: "No portão principal de desembarque com uma placa executiva discreta contendo seu nome ou o logotipo da sua empresa."
      }
    ],
    metaTitle: "Transfer Aeroporto Salgado Filho (POA) e Caxias do Sul (CXI) | AG Transfer",
    metaDescription: "Transfer executivo de e para o Aeroporto Salgado Filho (POA) e Caxias do Sul (CXI). Monitoramento de voo 24h e motoristas qualificados.",
    icon: "Plane",
    tag: "Mais Solicitado"
  },
  {
    id: "viagens-corporativas",
    slug: "viagens-corporativas",
    title: "Viagens e Agendas Corporativas",
    subtitle: "Empresas & Negócios",
    description: "Deslocamento privativo de executivos, investidores, palestrantes e delegações corporativas para congressos, visitas industriais na Serra Gaúcha e feiras como Mercopar.",
    fullDescription: "A Serra Gaúcha é um dos maiores polos industriais e metalmecânicos da América Latina. A AG Transfer é a parceira de mobilidade confiada por indústrias, multinacionais e escritórios jurídicos para o transporte seguro de executivos, auditores, investidores e equipes técnicas. Garantimos total sigilo a bordo para conferências telefônicas, veículos de alto padrão com tomadas e conexão Wi-Fi, além de faturamento facilitado com emissão de NFS-e para o CNPJ contratante.",
    features: [
      "Total sigilo e discrição para chamadas confidenciais a bordo",
      "Faturamento quinzenal ou mensal com emissão de Nota Fiscal (PJ)",
      "Veículos novos com tomadas, Wi-Fi e climatização dual-zone",
      "Motoristas com traje executivo rigoroso e pontualidade britânica"
    ],
    includedAmenities: [
      "Ambiente silencioso com isolamento acústico",
      "Wi-Fi corporativo de alta estabilidade",
      "Suporte para notebooks e carregamento multiportas",
      "Gestor de conta B2B dedicado para reservas imediatas"
    ],
    targetAudience: [
      "Indústrias metalmecânicas, vinícolas e polos moveleiros",
      "Expositores e congressistas da Feira Mercopar e Bento Gonçalves",
      "Bancos, fundos de investimento e auditorias externas"
    ],
    commonRoutes: [
      {
        route: "Polo Industrial de Caxias do Sul ⇄ Aeroporto Salgado Filho (POA)",
        time: "1h 50m",
        distance: "130 km",
        details: "Atendimento prioritário com embarque direto na portaria da indústria."
      },
      {
        route: "Caxias do Sul ⇄ Bento Gonçalves / Farroupilha (Circuito Industrial)",
        time: "35m - 50m",
        distance: "45 km",
        details: "Transporte contínuo entre plantas fabris e reuniões de diretoria."
      },
      {
        route: "Caxias do Sul ⇄ Porto Alegre (Centro Administrativo / Faria Lima do Sul)",
        time: "1h 55m",
        distance: "125 km",
        details: "Viagens executivas para reuniões de conselho e fóruns jurídicos."
      }
    ],
    serviceFaq: [
      {
        question: "Como funciona o faturamento corporativo para empresas?",
        answer: "Cadastramos o CNPJ da sua organização com aprovação em poucas horas. As corridas são consolidadas em relatório detalhado com faturamento quinzenal ou mensal e emissão de NFS-e."
      },
      {
        question: "Os motoristas assinam termo de confidencialidade (NDA)?",
        answer: "Sim. Nossos chauffeurs são instruídos nos mais rigorosos padrões de discrição corporativa e estão aptos a assinar acordos de confidencialidade caso sua empresa exija."
      }
    ],
    metaTitle: "Transporte Executivo Corporativo em Caxias do Sul e Serra Gaúcha | AG Transfer",
    metaDescription: "Transporte corporativo de alto padrão para empresas em Caxias do Sul e RS. Faturamento com Nota Fiscal, Wi-Fi e pontualidade rigorosa.",
    icon: "Briefcase",
    tag: "B2B Corporativo"
  },
  {
    id: "turismo-vip",
    slug: "turismo-vip",
    title: "Turismo VIP & Serra Gaúcha",
    subtitle: "Gramado, Canela & Vinhedos",
    description: "Roteiros enoturísticos personalizados pelo Vale dos Vinhedos (Bento Gonçalves), Garibaldi, Gramado e Canela. Conforto e segurança para apreciar o melhor da gastronomia gaúcha.",
    fullDescription: "Desfrute do que há de mais sublime na Serra Gaúcha sem se preocupar com estradas desconhecidas, curvas de serra ou direção após degustações de vinho e espumante. Com a AG Transfer, seu roteiro é 100% sob medida: você escolhe as vinícolas (Miolo, Casa Valduga, Luiz Argenta, Chandon), restaurantes premiados e pontos turísticos de Gramado e Canela, enquanto nosso motorista experiente conduz com suavidade e aguarda cada momento do seu passeio.",
    features: [
      "Roteiros sob medida para vinícolas premiadas e restaurantes",
      "Deguste com segurança: motorista dedicado durante todo o passeio",
      "Veículos com porta-malas generoso para compras de vinhos e chocolates",
      "Motoristas conhecedores dos melhores caminhos e mirantes secretos"
    ],
    includedAmenities: [
      "Veículos com suspensão suave para as curvas serranas",
      "Espaço seguro e climatizado para caixas de vinho",
      "Água mineral à vontade para hidratação entre degustações",
      "Flexibilidade para paradas fotográficas nas paisagens da serra"
    ],
    targetAudience: [
      "Casais e famílias buscando exclusividade e requinte",
      "Grupos de enófilos e confrarias gastronômicas",
      "Visitantes do Natal Luz de Gramado e vindimas da serra"
    ],
    commonRoutes: [
      {
        route: "Caxias do Sul / Gramado ⇄ Rota das Vinícolas (Vale dos Vinhedos)",
        time: "Diária de 8h - 10h",
        distance: "Flexível",
        details: "Circuito completo por Bento Gonçalves, Garibaldi e Monte Belo do Sul."
      },
      {
        route: "Porto Alegre ⇄ Gramado e Canela (Tour Charme)",
        time: "1h 50m (Transfer) + Diária",
        distance: "115 km",
        details: "Subida com parada no Lago Negro, Rua Torta e Catedral de Pedra."
      },
      {
        route: "Caxias do Sul ⇄ Rota dos Vinhos Altos Montes (Flores da Cunha)",
        time: "30m (Deslocamento)",
        distance: "25 km",
        details: "Degustação de espumantes premiados e arquitetura italiana."
      }
    ],
    serviceFaq: [
      {
        question: "O motorista pode nos ajudar a escolher os melhores passeios?",
        answer: "Com certeza! Nossos profissionais conhecem a fundo as melhores vinícolas, rotas panorâmicas e restaurantes com vista deslumbrante na Serra Gaúcha."
      },
      {
        question: "O roteiro é compartilhado com outros turistas?",
        answer: "Não. Todos os serviços da AG Transfer são 100% privativos. O veículo e o motorista atendem unicamente você e seus acompanhantes."
      }
    ],
    metaTitle: "Turismo VIP em Gramado, Canela e Vale dos Vinhedos | AG Transfer",
    metaDescription: "Passeios privativos e tours enoturísticos em Gramado, Canela e Vale dos Vinhedos. Deguste com segurança e conforto total na Serra Gaúcha.",
    icon: "Compass",
    tag: "Experiência Premium"
  },
  {
    id: "motorista-disposicao",
    slug: "motorista-disposicao",
    title: "Motorista À Disposição",
    subtitle: "Chauffeur Dedicado",
    description: "Contratação flexível por períodos fechados (4h, 8h, diárias completas ou estadias prolongadas). O motorista e o veículo ficam 100% dedicados aos seus compromissos.",
    fullDescription: "Quando a sua agenda exige flexibilidade absoluta, múltiplas paradas imprevisíveis ou prontidão constante, o serviço de Motorista À Disposição (Chauffeur) é a solução ideal. O veículo executivo e o motorista ficam posicionados onde você estiver, aguardando suas reuniões, jantares ou compromissos sociais com discrição, prontos para partir no instante em que você solicitar.",
    features: [
      "Flexibilidade total: altere itinerários e destinos em tempo real",
      "Espera contínua em reuniões de negócios, jantares e eventos",
      "Atendimento 24 horas por dia, fins de semana e feriados",
      "Chauffeur profissional de prontidão em frente ao local desejado"
    ],
    includedAmenities: [
      "Veículo mantido sempre refrigerado e pronto para partida",
      "Água mineral e comodidades repostas continuamente",
      "Comunicação direta via WhatsApp com o motorista e a central",
      "Franquia de quilometragem adaptável às suas necessidades"
    ],
    targetAudience: [
      "CEOs, diretores e celebridades em agendas dinâmicas",
      "Noivos, formandos e comitivas de eventos sociais",
      "Advogados e executivos com agendas em múltiplos fóruns e clientes"
    ],
    commonRoutes: [
      {
        route: "Diária Executiva Serra Gaúcha (Caxias, Bento, Farroupilha)",
        time: "Turnos de 4h, 8h ou 12h",
        distance: "Conforme agenda",
        details: "Deslocamentos livres entre empresas, hotéis e almoços de negócios."
      },
      {
        route: "Agenda Dinâmica Porto Alegre ⇄ Serra Gaúcha",
        time: "Diária integral",
        distance: "Livre dentro da franquia",
        details: "Veículo à disposição para viagens intermunicipais de negócios."
      }
    ],
    serviceFaq: [
      {
        question: "Qual o período mínimo de contratação de um motorista à disposição?",
        answer: "Disponibilizamos pacotes flexíveis a partir de 4 horas de contratação, com opções de 8 horas, 12 horas ou diárias completas consecutivas."
      },
      {
        question: "Posso mudar o itinerário de última hora?",
        answer: "Sim! Essa é a principal vantagem da diária à disposição: o tempo é seu e o motorista segue as suas orientações com agilidade e total flexibilidade."
      }
    ],
    metaTitle: "Motorista à Disposição (Chauffeur) em Caxias do Sul e RS | AG Transfer",
    metaDescription: "Contratação de chauffeur e carro executivo por hora ou diária na Serra Gaúcha. Total discrição, luxo e prontidão 24 horas.",
    icon: "Clock",
    tag: "Máxima Flexibilidade"
  }
];

export const TRUST_PILLARS = [
  {
    title: "Frota Higienizada e Inspecionada",
    description: "Sedans executivos, SUVs e Vans de padrão superior, revisados preventivamente com seguro integral de passageiros (APP) e higienização hospitalar antes de cada embarque.",
    metric: "100% Inspecionados",
    icon: "ShieldCheck"
  },
  {
    title: "Motoristas Qualificados",
    description: "Profissionais rigorosamente selecionados, com treinamento em direção defensiva, discrição corporativa, etiqueta VIP e conhecimento minucioso da malha rodoviária do RS.",
    metric: "Padrão Chauffeur",
    icon: "Award"
  },
  {
    title: "Pontualidade Britânica",
    description: "Planejamento logístico antecipado, estudo de condições climáticas na serra (neblina e tráfego) e posicionamento prévio no local de embarque com antecedência garantida.",
    metric: "Zero Atrasos",
    icon: "Clock"
  },
  {
    title: "Faturamento Corporativo",
    description: "Processo simplificado para o setor de compras e viagens da sua empresa. Emissão ágil de Nota Fiscal eletrônica com descrição detalhada de centros de custo.",
    metric: "NF & Boleto PJ",
    icon: "FileText"
  }
];

export const POPULAR_ROUTES: RouteItem[] = [
  {
    origin: "Caxias do Sul (CXI / Centro)",
    destination: "Aeroporto Salgado Filho (POA)",
    estimatedTime: "1h 45min - 2h 00min",
    distance: "125 km",
    highlight: "Rota expressa via BR-116 ou RS-122 com monitoramento"
  },
  {
    origin: "Caxias do Sul",
    destination: "Gramado / Canela",
    estimatedTime: "1h 10min - 1h 25min",
    distance: "68 km",
    highlight: "Trajeto turístico panorâmico com parada opcional"
  },
  {
    origin: "Caxias do Sul",
    destination: "Bento Gonçalves (Vale dos Vinhedos)",
    estimatedTime: "40min - 50min",
    distance: "42 km",
    highlight: "Conexão direta polo moveleiro, vinícola e gastronômico"
  },
  {
    origin: "Aeroporto Porto Alegre (POA)",
    destination: "Gramado / Canela",
    estimatedTime: "1h 50min - 2h 10min",
    distance: "115 km",
    highlight: "Receptivo no portão de desembarque e bagagem assistida"
  },
  {
    origin: "Caxias do Sul",
    destination: "Farroupilha / Flores da Cunha",
    estimatedTime: "20min - 30min",
    distance: "20 km",
    highlight: "Deslocamentos industriais e corporativos diários"
  },
  {
    origin: "Serra Gaúcha (Caxias/Bento/Gramado)",
    destination: "Florianópolis (FLN / Centro)",
    estimatedTime: "5h 30min - 6h 00min",
    distance: "430 km",
    highlight: "Viagem intermunicipal privativa com máximo conforto"
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    name: "Dr. Marcelo Castilhos",
    role: "Diretor de Relações Institucionais",
    company: "Grupo Metalmecânico Serra",
    rating: 5,
    date: "Google Business Profile (GBP) · Verificada",
    comment: "Utilizamos a AG Transfer para receber executivos internacionais na Mercopar. Pontualidade impecável, motorista extremamente educado e carro impecável. O faturamento corporativo foi simples e ágil. Nota 10.",
    verified: true
  },
  {
    id: "rev-2",
    name: "Camila Guimarães",
    role: "Gerente de Eventos & Incentivo",
    company: "Live Mkt São Paulo",
    rating: 5,
    date: "Google Business Profile (GBP) · Verificada",
    comment: "Contratamos o transfer de Porto Alegre para o hotel em Gramado e passeios no Vale dos Vinhedos. Carro muito espaçoso, motorista conhecia todos os atalhos para evitar o tráfego da serra. Sensacional!",
    verified: true
  },
  {
    id: "rev-3",
    name: "Eng. Roberto Silveira",
    role: "Consultor Sênior de Projetos",
    company: "Automação Industrial RS",
    rating: 5,
    date: "Google Business Profile (GBP) · Verificada",
    comment: "Precisei de um transfer de urgência às 3h da manhã para não perder um voo em POA após um imprevisto na fábrica. Atendimento 24h foi real e o motorista chegou antes do prazo combinado. Recomendo de olhos fechados.",
    verified: true
  },
  {
    id: "rev-4",
    name: "Juliana Bertolucci",
    role: "Turismo Executivo e Enogastronomia",
    company: "Caxias do Sul / SP",
    rating: 5,
    date: "Google Business Profile (GBP) · Verificada",
    comment: "A discrição e o cuidado com a nossa família foram diferenciais. Água mineral gelada, ar-condicionado na temperatura perfeita e tranquilidade na serra. Certamente nossa escolha em todas as viagens.",
    verified: true
  },
  {
    id: "rev-5",
    name: "Eduardo Fontes",
    role: "Diretor Financeiro (CFO)",
    company: "Indústria Automotiva de Caxias do Sul",
    rating: 5,
    date: "Google Business Profile (GBP) · Verificada",
    comment: "Atendimento corporativo de excelência. Agilidade para emitir Notas Fiscais com centro de custo delimitado e motoristas que representam a imagem da empresa com extrema postura.",
    verified: true
  },
  {
    id: "rev-6",
    name: "Dra. Patrícia Vasconcelos",
    role: "Palestrante & Pesquisadora",
    company: "Congresso Médico Bento Gonçalves",
    rating: 5,
    date: "Google Business Profile (GBP) · Verificada",
    comment: "Transfer impecável do Aeroporto Salgado Filho até o hotel em Bento. O motorista monitorou a chegada da minha aeronave que atrasou 40 minutos e estava me aguardando pontualmente no portão.",
    verified: true
  }
];

export const FAQS = [
  {
    question: "Como funciona a solicitação de orçamento e reserva?",
    answer: "A solicitação pode ser feita instantaneamente pelo nosso WhatsApp (54) 99153-7288 ou pelo simulador do site. Nossa equipe 24 horas calcula o itinerário, envia a proposta detalhada em minutos e confirma a reserva sem burocracia."
  },
  {
    question: "Como a AG Transfer lida com atrasos ou alterações de voos?",
    answer: "Monitoramos em tempo real o número do seu voo nos aeroportos de Porto Alegre (POA), Caxias do Sul (CXI) ou Florianópolis. Se houver adiantamento ou atraso da companhia aérea, ajustamos o horário de apresentação sem cobrança de taxas abusivas."
  },
  {
    question: "Minha empresa pode pagar via faturamento quinzenal ou mensal?",
    answer: "Sim! Trabalhamos com faturamento corporativo para pessoas jurídicas mediante rápido cadastro, com emissão de Nota Fiscal de Serviços eletrônica (NFS-e) e boleto bancário, facilitando a conciliação do seu setor financeiro."
  },
  {
    question: "Vocês atendem em qualquer horário da madrugada?",
    answer: "Sim. Operamos em regime 24 Horas / 7 Dias por Semana. Viagens com partidas nas primeiras horas da manhã ou chegadas noturnas contam com motoristas descansados e escalas rigorosamente planejadas."
  },
  {
    question: "Quais são as áreas de atendimento principais?",
    answer: "Nossa base operacional fica em Caxias do Sul (Av. Salgado Filho, 3451), cobrindo com agilidade Bento Gonçalves, Farroupilha, Flores da Cunha, Gramado, Canela, Nova Petrópolis, Garibaldi, Porto Alegre e toda a Região Sul."
  },
  {
    question: "Os veículos possuem seguro para os passageiros?",
    answer: "Sim, 100% da nossa frota possui seguro contra Acidentes Pessoais de Passageiros (APP) e apólices de cobertura total, proporcionando tranquilidade absoluta durante todo o percurso."
  }
];

export function buildWhatsAppUrl(details?: {
  service?: string;
  origin?: string;
  destination?: string;
  date?: string;
  passengers?: string;
}): string {
  if (!details || (!details.service && !details.origin && !details.destination)) {
    return COMPANY_NAP.whatsappBaseUrl;
  }

  const parts: string[] = [
    "Olá, gostaria de solicitar um orçamento de transfer executivo com a AG Transfer.",
    ""
  ];

  if (details.service) parts.push(`*Serviço:* ${details.service}`);
  if (details.origin) parts.push(`*Origem:* ${details.origin}`);
  if (details.destination) parts.push(`*Destino:* ${details.destination}`);
  if (details.date) parts.push(`*Data/Horário previsto:* ${details.date}`);
  if (details.passengers) parts.push(`*Passageiros:* ${details.passengers}`);

  parts.push("");
  parts.push("Poderiam me informar a disponibilidade e o valor?");

  const text = parts.join("\n");
  return `https://wa.me/${COMPANY_NAP.phoneRaw}?text=${encodeURIComponent(text)}`;
}
