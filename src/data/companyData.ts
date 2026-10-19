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
    id: "transfer-porto-alegre-gramado",
    slug: "transfer-porto-alegre-gramado",
    title: "Transfer Porto Alegre ⇄ Gramado e Canela VIP",
    subtitle: "Aeroporto Salgado Filho (POA) ⇄ Hotéis da Serra",
    description: "Receptivo exclusivo no Aeroporto Salgado Filho (POA) com transporte privativo até o seu hotel ou pousada em Gramado e Canela. Conforto total para subir a serra sem atrasos ou filas.",
    fullDescription: "O transfer privativo entre o Aeroporto Internacional Salgado Filho (POA) e as cidades de Gramado e Canela é o serviço mais procurado da Serra Gaúcha. A AG Transfer proporciona uma viagem suave pela rota mais segura, sem a espera exaustiva de transfers compartilhados em ônibus com múltiplas paradas em hotéis de terceiros. Seu chauffeur estará pontualmente no desembarque com identificação formal, auxiliando com malas e conduzindo sua família ou equipe direto ao destino final em veículos climatizados de padrão executivo superior.",
    features: [
      "Receptivo no portão de desembarque com placa executiva",
      "Monitoramento do voo em tempo real (tolerância a atrasos)",
      "Trajeto 100% privativo direto até a porta do seu hotel em Gramado ou Canela",
      "Veículos com isolamento acústico e amplo espaço para malas de compras e roupas de inverno"
    ],
    includedAmenities: [
      "Água mineral fresca e climatização ajustada para o clima serrano",
      "Carregadores para smartphones e notebooks (USB / Tipo C)",
      "Conexão Wi-Fi veloz a bordo para planejar sua estadia",
      "Cadeirinhas e assentos de elevação infantis sob solicitação prévia"
    ],
    targetAudience: [
      "Casais e famílias visitando Gramado, Canela e o Natal Luz",
      "Viajantes a negócios e palestrantes do Festuris e eventos no Serra Park",
      "Turistas exigentes que valorizam pontualidade e zero estresse de trânsito"
    ],
    commonRoutes: [
      {
        route: "Aeroporto Salgado Filho (POA) ⇄ Gramado (Centro / Hotéis)",
        time: "1h 45m - 2h 00m",
        distance: "118 km",
        details: "Subida via BR-116/Nova Petrópolis ou Taquara com pedágios e seguro inclusos."
      },
      {
        route: "Aeroporto Salgado Filho (POA) ⇄ Canela (Catedral de Pedra / Hotéis)",
        time: "1h 55m - 2h 10m",
        distance: "126 km",
        details: "Conexão direta com assistência total de bagagens até a recepção."
      },
      {
        route: "Gramado / Canela ⇄ Aeroporto Salgado Filho (POA) - Retorno",
        time: "1h 45m - 2h 00m",
        distance: "118 km",
        details: "Agendamento programado com folga de segurança para check-in no voo."
      }
    ],
    serviceFaq: [
      {
        question: "Qual a vantagem do transfer privativo em relação ao transfer coletivo de ônibus?",
        answer: "No transfer privativo da AG Transfer você não perde horas esperando outros voos chegarem e nem passa por 10 hotéis diferentes antes de chegar ao seu. O embarque é imediato no seu voo e o trajeto é direto para o seu endereço em Gramado ou Canela."
      },
      {
        question: "Como funciona se o meu voo para POA atrasar?",
        answer: "Nossa central monitora seu voo pelo radar 24 horas. Se houver atraso, o motorista é reposicionado para o novo horário de pouso sem cobrança extra."
      }
    ],
    metaTitle: "Transfer Porto Alegre para Gramado e Canela VIP | AG Transfer",
    metaDescription: "Transfer executivo privativo do Aeroporto de Porto Alegre (POA) para Gramado e Canela. Pontualidade, conforto, monitoramento de voo 24h e seguro total.",
    icon: "Plane",
    tag: "Mais Buscado"
  },
  {
    id: "tour-vale-dos-vinhedos",
    slug: "tour-vale-dos-vinhedos",
    title: "Tour Vale dos Vinhedos & Bento Gonçalves",
    subtitle: "Enoturismo Privativo Sem Risco na Lei Seca",
    description: "Visite as vinícolas mais prestigiadas do Brasil (Miolo, Casa Valduga, Almaúnica, Garibaldi) com motorista dedicado. Deguste com segurança e flexibilidade total de itinerário.",
    fullDescription: "O Vale dos Vinhedos em Bento Gonçalves, Garibaldi e Monte Belo do Sul abriga o coração da produção vinícola e gastronômica da Serra Gaúcha. Para aproveitar verdadeiramente as degustações harmonizadas de vinhos e espumantes premiados, contar com um motorista executivo privativo é essencial: você não corre nenhum risco com a Lei Seca, não se preocupa com caminhos vicinais ou curvas serranas, e viaja com um profissional que conhece os melhores mirantes, vinícolas familiares e restaurantes típicos italianos.",
    features: [
      "Deguste com segurança: motorista dedicado e zero preocupação com o volante",
      "Roteiro sob medida: escolha as vinícolas que deseja conhecer ou siga nossas recomendações",
      "Porta-malas espaçoso e climatizado para acomodar com segurança suas caixas de vinho",
      "Duração flexível por turnos de 6h, 8h ou diária completa sem correria de grupos"
    ],
    includedAmenities: [
      "Espaço seguro com acomodação para caixas de vinho e souvenires",
      "Água mineral à vontade para hidratação entre as degustações",
      "Veículos novos com suspensão confortável para as estradas do Vale",
      "Dicas locais de restaurantes tradicionais, queijarias e cantinas históricas"
    ],
    targetAudience: [
      "Apreciadores de vinhos, enófilos e confrarias gastronômicas",
      "Casais em lua de mel ou viagens românticas pela serra",
      "Famílias e grupos de amigos buscando exclusividade e conforto"
    ],
    commonRoutes: [
      {
        route: "Circuito Vale dos Vinhedos (Bento Gonçalves ⇄ Vinícolas Miolo, Valduga)",
        time: "Diária de 6h a 8h",
        distance: "Flexível",
        details: "Roteiro personalizado pelas melhores vinícolas da D.O. Vale dos Vinhedos."
      },
      {
        route: "Gramado / Canela ⇄ Tour Bento Gonçalves & Vale dos Vinhedos",
        time: "1h 20m (deslocamento) + Tour",
        distance: "110 km",
        details: "Bate e volta privativo com saída e retorno no seu hotel em Gramado."
      },
      {
        route: "Caxias do Sul ⇄ Rota dos Espumantes em Garibaldi & Bento",
        time: "40m (deslocamento) + Tour",
        distance: "45 km",
        details: "Conexão rápida para visitar vinícolas especializadas em espumantes finos."
      }
    ],
    serviceFaq: [
      {
        question: "Preciso agendar as vinícolas com antecedência?",
        answer: "Sim, recomendamos agendar previamente as visitas guiadas e degustações nas vinícolas desejadas. Nosso motorista organiza a sequência geográfica ideal para otimizar seu tempo entre uma visita e outra."
      },
      {
        question: "O veículo acomoda caixas de vinhos compradas durante o passeio?",
        answer: "Com certeza! Nossos Sedans, SUVs e Vans possuem porta-malas espaçosos para transportar garrafas e caixas com segurança e climatização adequada."
      }
    ],
    metaTitle: "Tour Vale dos Vinhedos Bento Gonçalves Privativo | AG Transfer",
    metaDescription: "Tour privativo no Vale dos Vinhedos e Bento Gonçalves com motorista executivo. Deguste vinhos com segurança, conforto e flexibilidade total.",
    icon: "Compass",
    tag: "Enoturismo VIP"
  },
  {
    id: "tour-gramado-canela",
    slug: "tour-gramado-canela",
    title: "Tour Privativo Gramado & Canela VIP",
    subtitle: "Roteiro Exclusivo, Natal Luz & Atrações Serranas",
    description: "Passeios personalizados pelas atrações mais famosas de Gramado e Canela (Lago Negro, Snowland, Cascata do Caracol, Skyglass) no seu ritmo e sem aglomerações de ônibus.",
    fullDescription: "Conhecer o charme europeu de Gramado e Canela com a AG Transfer é uma experiência memorável. Criamos roteiros privativos pensados sob medida para o seu perfil — desde os cartões-postais tradicionais como a Catedral de Pedra de Canela, Lago Negro e Mini Mundo, até parques temáticos (Snowland, Acquamotion) e passeios de natureza deslumbrante (Parque do Caracol, Skyglass Canela). Você decide quanto tempo passar em cada atração, com espera dedicada e embarque imediato.",
    features: [
      "Roteiro 100% privativo adaptado aos interesses da sua família ou grupo",
      "Sem filas ou espera de grupos de excursão: o carro é exclusivo seu",
      "Flexibilidade para paradas fotográficas em mirantes e lojas de chocolate artesanal",
      "Motorista conhecedor dos melhores horários para evitar trânsito turístico"
    ],
    includedAmenities: [
      "Veículo mantido sempre aquecido ou resfriado conforme a estação",
      "Carregadores de bateria rápidos para registrar todas as fotos",
      "Água mineral lacrada e higienização garantida a cada parada",
      "Espaço generoso para compras nas charmosas avenidas de Gramado"
    ],
    targetAudience: [
      "Famílias com crianças e idosos que exigem conforto e ritmo próprio",
      "Visitantes do Natal Luz de Gramado, Festival de Cinema e Páscoa",
      "Grupos de amigos que querem conhecer os melhores restaurantes e fondue da serra"
    ],
    commonRoutes: [
      {
        route: "Tour Clássico Gramado (Lago Negro, Mini Mundo, Rua Torta, Centro)",
        time: "Turnos de 4h ou 8h",
        distance: "Flexível",
        details: "O melhor de Gramado com paradas nos principais pontos turísticos."
      },
      {
        route: "Tour Natureza Canela (Catedral de Pedra, Cascata do Caracol, Skyglass)",
        time: "Turnos de 4h ou 8h",
        distance: "Flexível",
        details: "Paisagens cinematográficas e parques ecológicos da serra."
      },
      {
        route: "Circuito Noturno (Restaurantes Temáticos, Noite Suíça, Natal Luz)",
        time: "Período noturno (4h - 5h)",
        distance: "Flexível",
        details: "Transporte seguro para jantares, espetáculos e fondues sem estresse de vaga."
      }
    ],
    serviceFaq: [
      {
        question: "O motorista pode nos buscar no aeroporto e já iniciar o tour?",
        answer: "Sim! Podemos realizar o receptivo em Porto Alegre (POA) ou Caxias do Sul (CXJ) e, no caminho ou logo após o check-in no hotel, iniciar o seu itinerário planejado."
      },
      {
        question: "Como funciona durante os espetáculos do Natal Luz?",
        answer: "Nosso motorista leva você com antecedência até os portões do espetáculo e aguarda o término do show no ponto de encontro combinado, evitando as longas filas de táxi e chuva."
      }
    ],
    metaTitle: "Tour Privativo Gramado e Canela VIP | AG Transfer Serra Gaúcha",
    metaDescription: "Passeio privativo em Gramado e Canela com motorista exclusivo. Visite o Lago Negro, Caracol, Skyglass e Natal Luz com conforto e sem aglomerações.",
    icon: "Sparkles",
    tag: "Experiência Exclusiva"
  },
  {
    id: "transfer-aeroporto-cxj-caxias",
    slug: "transfer-aeroporto-cxj-caxias",
    title: "Transfer Aeroporto de Caxias do Sul (CXJ)",
    subtitle: "Aeroporto Hugo Cantergiani ⇄ Serra Gaúcha",
    description: "Receptivo ágil no Aeroporto Regional Hugo Cantergiani (CXJ) em Caxias do Sul com ligação rápida para Gramado, Canela, Bento Gonçalves, Farroupilha e Flores da Cunha.",
    fullDescription: "O Aeroporto Regional Hugo Cantergiani de Caxias do Sul (CXJ) é a porta de entrada aérea mais próxima de Gramado, Canela e Bento Gonçalves. Para quem desembarca em CXJ, a AG Transfer oferece conexão expressa: em apenas 1h15m você chega aos hotéis de Gramado, e em apenas 40 minutos ao Vale dos Vinhedos em Bento Gonçalves. Nossa equipe monitora seu voo em tempo real e aguarda pontualmente no terminal de passageiros com veículo executivo higienizado e climatizado.",
    features: [
      "Receptivo pontual no terminal de passageiros do Aeroporto CXJ",
      "A rota mais rápida para a Serra Gaúcha (Gramado a apenas 68 km de distância)",
      "Monitoramento contínuo dos voos da Gol, Latam, Azul e aviação executiva privada",
      "Veículos Sedan, SUV e Van para acomodar viagens individuais ou grupos inteiros"
    ],
    includedAmenities: [
      "Água mineral e carregadores veiculares à disposição",
      "Wi-Fi corporativo de alta estabilidade",
      "Assistência completa com bagagens no desembarque e no hotel",
      "Tolerância para atrasos operacionais da malha aérea"
    ],
    targetAudience: [
      "Passageiros de voos comerciais regulares pousando em Caxias do Sul (CXJ)",
      "Usuários de aviação executiva, táxi aéreo e jatos particulares",
      "Empresários visitando o polo metalmecânico de Caxias do Sul"
    ],
    commonRoutes: [
      {
        route: "Aeroporto Hugo Cantergiani (CXJ) ⇄ Gramado e Canela",
        time: "1h 10m - 1h 25m",
        distance: "68 km",
        details: "Conexão rápida e panorâmica via RS-235 direto ao seu hotel."
      },
      {
        route: "Aeroporto Hugo Cantergiani (CXJ) ⇄ Bento Gonçalves (Vale dos Vinhedos)",
        time: "40m - 50m",
        distance: "42 km",
        details: "Ligação direta polo vinícola e moveleiro via RS-453."
      },
      {
        route: "Aeroporto Hugo Cantergiani (CXJ) ⇄ Centro e Indústrias de Caxias do Sul",
        time: "15m - 25m",
        distance: "8 km",
        details: "Transporte expresso para hotéis executivos e parques fabris."
      }
    ],
    serviceFaq: [
      {
        question: "Qual a distância do Aeroporto de Caxias (CXJ) até Gramado?",
        answer: "São aproximadamente 68 km, percorridos em cerca de 1 hora e 15 minutos de viagem tranquila pela RS-235, sendo muito mais rápido do que a subida a partir de Porto Alegre."
      },
      {
        question: "Vocês atendem voos particulares e jatos executivos no Aeroporto CXJ?",
        answer: "Sim, prestamos atendimento VIP no hangar executivo e na pista geral com total discrição e protocolos de segurança para passageiros da aviação privada."
      }
    ],
    metaTitle: "Transfer Aeroporto Caxias do Sul (CXJ) para Gramado e Bento | AG Transfer",
    metaDescription: "Transfer executivo do Aeroporto Hugo Cantergiani (CXJ) em Caxias do Sul para Gramado, Canela e Bento Gonçalves. Atendimento 24h pontual e seguro.",
    icon: "Plane",
    tag: "Conexão Direta"
  },
  {
    id: "viagens-corporativas-serra",
    slug: "viagens-corporativas-serra",
    title: "Transporte Corporativo & Feiras na Serra Gaúcha",
    subtitle: "B2B · Mercopar, Fenavinho, Festuris & Polos Industriais",
    description: "Mobilidade corporativa de alto padrão para executivos, delegações e expositores. Sigilo a bordo para chamadas, pontualidade britânica e faturamento com Nota Fiscal (PJ).",
    fullDescription: "A Serra Gaúcha concentra um dos ecossistemas industriais mais pujantes do país, além de grandes eventos de negócios como Mercopar (Caxias do Sul), Fenavinho/ExpoBento (Bento Gonçalves) e Festuris (Gramado). A AG Transfer é a fornecedora homologada por corporações líderes para o transporte de diretores, auditores, clientes internacionais e equipes técnicas. Proporcionamos total discrição para reuniões a bordo, veículos novos com conectividade e processo simplificado de faturamento quinzenal ou mensal via NFS-e.",
    features: [
      "Total sigilo e discrição para conferências telefônicas e reuniões a bordo",
      "Faturamento quinzenal ou mensal simplificado para pessoas jurídicas (PJ com NFS-e)",
      "Veículos com climatização dual-zone, tomadas, Wi-Fi e isolamento acústico",
      "Motoristas com traje executivo, postura impecável e conhecimento dos polos fabris"
    ],
    includedAmenities: [
      "Wi-Fi corporativo estável e pontos de carregamento multiportas",
      "Ambiente silencioso projetado para produtividade a bordo",
      "Gestor de conta B2B exclusivo para reservas e alterações de agenda",
      "Relatório detalhado mensal com centro de custo por corrida"
    ],
    targetAudience: [
      "Indústrias metalmecânicas, automobilísticas, vinícolas e moveleiras",
      "Expositores, palestrantes e participantes da Mercopar, Festuris e Fenavinho",
      "Escritórios de advocacia, consultorias e fundos de investimento"
    ],
    commonRoutes: [
      {
        route: "Polo Industrial de Caxias do Sul ⇄ Pavilhões da Festa da Uva (Mercopar)",
        time: "15m - 25m",
        distance: "12 km",
        details: "Shuttle executivo pontual para delegações e expositores."
      },
      {
        route: "Caxias do Sul ⇄ Bento Gonçalves / Farroupilha (Circuito Fabril)",
        time: "35m - 50m",
        distance: "45 km",
        details: "Deslocamento intermunicipal contínuo entre plantas fabris e reuniões."
      },
      {
        route: "Serra Gaúcha ⇄ Porto Alegre (Centro Administrativo / Faria Lima do Sul)",
        time: "1h 45m - 2h 00m",
        distance: "125 km",
        details: "Viagens executivas para conselhos de administração e fóruns jurídicos."
      }
    ],
    serviceFaq: [
      {
        question: "Como funciona o cadastro e faturamento para empresas?",
        answer: "Aprovamos o cadastro corporativo do seu CNPJ em poucas horas. As corridas são registradas e faturadas quinzenalmente ou mensalmente com envio de Nota Fiscal eletrônica e boleto bancário."
      },
      {
        question: "Os motoristas podem cumprir exigências de segurança de fábrica (EPIs)?",
        answer: "Sim, nossos motoristas respeitam rigorosamente as normas de segurança patrimonial e portaria das indústrias, portando calçados adequados e identificação com crachá."
      }
    ],
    metaTitle: "Transporte Corporativo e Feiras na Serra Gaúcha | AG Transfer B2B",
    metaDescription: "Transporte executivo B2B para indústrias e eventos na Serra Gaúcha (Mercopar, Fenavinho, Festuris). Faturamento PJ com Nota Fiscal e motoristas de alto padrão.",
    icon: "Briefcase",
    tag: "B2B Corporativo"
  },
  {
    id: "motorista-particular-diaria",
    slug: "motorista-particular-diaria",
    title: "Motorista Particular por Diária na Serra Gaúcha",
    subtitle: "Chauffeur Exclusivo à Sua Disposição 24h",
    description: "Contratação flexível por períodos (4h, 8h ou diária integral) com veículo executivo e motorista 100% dedicados à sua agenda em Gramado, Canela, Bento e Caxias do Sul.",
    fullDescription: "Para quem tem uma agenda dinâmica, compromissos em várias cidades da serra ou simplesmente deseja total autonomia durante as férias, o serviço de Motorista Particular por Diária (Chauffeur) é a escolha suprema. O veículo e o motorista ficam dedicados exclusivamente ao seu tempo: você pode mudar o roteiro em tempo real, fazer múltiplas paradas para compras, reuniões ou degustações, e encontrar o carro refrigerado sempre pronto à sua espera na porta de cada compromisso.",
    features: [
      "Total flexibilidade: altere rotas, horários e destinos em tempo real",
      "Espera dedicada na porta de restaurantes, vinícolas, feiras e eventos",
      "Sem estresse com procura de vagas de estacionamento ou trânsito da serra",
      "Atendimento 24 horas inclusive em finais de semana, feriados e madrugadas"
    ],
    includedAmenities: [
      "Veículo mantido em temperatura ideal e pronto para partida imediata",
      "Água mineral fresca e comodidades repostas continuamente",
      "Comunicação direta via WhatsApp com o seu chauffeur durante o dia",
      "Franquia de quilometragem generosa adaptável ao seu itinerário"
    ],
    targetAudience: [
      "CEOs, diretores e famílias que exigem privacidade máxima",
      "Turistas que desejam combinar Gramado, Bento Gonçalves e cidades vizinhas",
      "Noivos, eventos sociais e convidados de casamentos na Serra Gaúcha"
    ],
    commonRoutes: [
      {
        route: "Diária Completa Serra Gaúcha (Gramado, Canela, Nova Petrópolis)",
        time: "Diárias de 8h a 10h",
        distance: "Conforme itinerário",
        details: "Liberdade absoluta entre atrações, almoços e compras na região das hortênsias."
      },
      {
        route: "Diária Enoturística (Bento Gonçalves, Garibaldi, Monte Belo)",
        time: "Diárias de 8h a 10h",
        distance: "Conforme itinerário",
        details: "Degustações livres com retorno seguro ao hotel ao final do dia."
      },
      {
        route: "Agenda Executiva Multi-Cidades (Caxias, Flores da Cunha, Farroupilha)",
        time: "Turnos de 4h, 8h ou 12h",
        distance: "Livre dentro da franquia",
        details: "Otimização de tempo para visitas técnicas e comerciais consecutivas."
      }
    ],
    serviceFaq: [
      {
        question: "Qual a franquia de horas e quilometragem incluída?",
        answer: "Oferecemos pacotes a partir de 4 horas, 8 horas ou diárias completas de 10 a 12 horas, com franquia de quilometragem compatível com os deslocamentos turísticos ou corporativos da Serra Gaúcha."
      },
      {
        question: "O motorista pode nos buscar em Gramado e levar até vinícolas em Bento no mesmo dia?",
        answer: "Sim! Essa é uma das utilizações mais populares da nossa diária privativa, permitindo aproveitar com conforto o melhor das duas regiões no mesmo passeio."
      }
    ],
    metaTitle: "Motorista Particular por Diária na Serra Gaúcha | AG Transfer",
    metaDescription: "Contratação de chauffeur e carro executivo por hora ou diária em Gramado, Canela e Bento Gonçalves. Total liberdade de itinerário e conforto 24h.",
    icon: "Clock",
    tag: "Flexibilidade Total"
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
    origin: "Aeroporto Porto Alegre (POA)",
    destination: "Gramado / Canela",
    estimatedTime: "1h 45min - 2h 00min",
    distance: "118 km",
    highlight: "Transfer privativo com receptivo no desembarque de POA e auxílio de malas"
  },
  {
    origin: "Caxias do Sul (CXJ / Centro)",
    destination: "Gramado / Canela",
    estimatedTime: "1h 10min - 1h 25min",
    distance: "68 km",
    highlight: "Conexão expressa do Aeroporto CXJ para os hotéis de Gramado"
  },
  {
    origin: "Caxias do Sul (CXJ / Centro)",
    destination: "Bento Gonçalves (Vale dos Vinhedos)",
    estimatedTime: "40min - 50min",
    distance: "42 km",
    highlight: "Conexão direta com vinícolas premiadas e polo enogastronômico"
  },
  {
    origin: "Caxias do Sul (CXJ / Centro)",
    destination: "Aeroporto Salgado Filho (POA)",
    estimatedTime: "1h 45min - 2h 00min",
    distance: "125 km",
    highlight: "Rota expressa via BR-116 ou RS-122 com monitoramento 24h"
  },
  {
    origin: "Gramado / Canela",
    destination: "Bento Gonçalves (Vale dos Vinhedos)",
    estimatedTime: "1h 30min - 1h 45min",
    distance: "115 km",
    highlight: "Passeio panorâmico bate-e-volta pelas melhores vinícolas da serra"
  },
  {
    origin: "Caxias do Sul",
    destination: "Farroupilha / Flores da Cunha",
    estimatedTime: "20min - 30min",
    distance: "20 km",
    highlight: "Deslocamentos industriais, vinícolas de espumantes e compras"
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
    comment: "A discrição e o cuidado com a nossa família em Gramado e Canela foram diferenciais. Água mineral gelada, ar-condicionado na temperatura perfeita e tranquilidade na serra. Certamente nossa escolha em todas as viagens.",
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
    comment: "Transfer impecável do Aeroporto até o hotel em Bento Gonçalves. O motorista monitorou a chegada da minha aeronave e estava me aguardando pontualmente no portão.",
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
    answer: "Monitoramos em tempo real o número do seu voo nos aeroportos de Porto Alegre (POA), Caxias do Sul (CXJ) ou Florianópolis. Se houver adiantamento ou atraso da companhia aérea, ajustamos o horário de apresentação sem cobrança de taxas abusivas."
  },
  {
    question: "Vocês realizam transfers diretos de Porto Alegre para Gramado e Canela?",
    answer: "Sim! É uma das nossas rotas mais solicitadas. Nosso motorista aguarda no desembarque de POA e realiza a viagem privativa direto até a porta do seu hotel ou pousada em Gramado e Canela com máximo conforto e segurança."
  },
  {
    question: "Posso fazer degustações de vinho no Vale dos Vinhedos com segurança?",
    answer: "Com certeza! Essa é a principal vantagem de contratar o Tour Privativo no Vale dos Vinhedos da AG Transfer: você degusta vinhos e espumantes premiados sem se preocupar com volante, trânsito ou fiscalização da Lei Seca."
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
    question: "Quais são as áreas de atendimento principais na Serra Gaúcha?",
    answer: "Nossa base operacional fica em Caxias do Sul (Av. Salgado Filho, 3451), cobrindo com agilidade Gramado, Canela, Bento Gonçalves (Vale dos Vinhedos), Farroupilha, Flores da Cunha, Nova Petrópolis, Garibaldi, Porto Alegre e conexões para todo o Brasil."
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
