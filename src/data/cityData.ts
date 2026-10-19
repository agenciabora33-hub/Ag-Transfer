export interface CityRoute {
  origin: string;
  destination: string;
  estimatedTime: string;
  distance: string;
  details: string;
}

export interface CityFaq {
  question: string;
  answer: string;
}

export interface CityItem {
  id: string;
  slug: string;
  name: string;
  badge: string;
  tagline: string;
  region: string;
  state: string;
  cep: string;
  geoCoordinates: {
    lat: number;
    lng: number;
  };
  distanceFromPoa: string;
  distanceFromCxj: string;
  distanceFromSede: string;
  altitude: string;
  climateContext: string;
  description: string;
  fullBio: string;
  keyLandmarks: string[];
  popularNeighborhoods: string[];
  accessHighways: string[];
  recommendedServices: {
    title: string;
    slug: string;
    badge: string;
    description: string;
  }[];
  commonRoutes: CityRoute[];
  comparisonPoints: {
    agTransfer: string;
    competitor: string;
  }[];
  socialProof: {
    name: string;
    role: string;
    location: string;
    quote: string;
  };
  faqs: CityFaq[];
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
}

export const CITIES_SERVED: CityItem[] = [
  {
    id: "gramado",
    slug: "gramado",
    name: "Gramado",
    badge: "Destino Turístico VIP Nº 1",
    tagline: "Transfer Executivo & Motorista Particular em Gramado (RS)",
    region: "Região das Hortênsias · Serra Gaúcha",
    state: "RS",
    cep: "95670-000",
    geoCoordinates: {
      lat: -29.3746,
      lng: -50.8764,
    },
    distanceFromPoa: "118 km (aprox. 1h 50min via RS-235 / BR-116 ou Taquara)",
    distanceFromCxj: "68 km (aprox. 1h 15min via RS-453 e RS-235)",
    distanceFromSede: "68 km da nossa sede operacional em Caxias do Sul",
    altitude: "830 m de altitude",
    climateContext: "Trecho serrano sujeito a forte cerração/neblina matinal e noturna na RS-235 e RS-115, além de frio intenso e geadas no inverno. Nossos motoristas executivos possuem vasta experiência de serra para máxima segurança e pontualidade.",
    description: "Serviço de transfer privativo e transporte executivo de alto padrão para Gramado. Atendimento exclusivo no desembarque dos Aeroportos de Porto Alegre (POA) e Caxias do Sul (CXJ) direto para o seu hotel ou resort com conforto, pontualidade e discrição.",
    fullBio: "Gramado é o principal destino turístico do sul do Brasil, mundialmente reconhecido pelo Natal Luz, Festival de Cinema de Gramado, gastronomia requintada, arquitetura bávara e resorts de luxo. A AG Transfer oferece mobilidade privativa de primeira classe para turistas exigentes, famílias com crianças e executivos que participam de congressos no Serra Park e Expogramado. Esqueça filas de táxi, tarifas dinâmicas de aplicativos com cancelamentos ou o estresse de dirigir em pista sinuosa com neblina.",
    keyLandmarks: [
      "Serra Park (Centro de Feiras e Eventos)",
      "Expogramado (Centro de Eventos)",
      "Rua Coberta & Palácio dos Festivais",
      "Lago Negro & Snowland",
      "Kurotel Longevidade & Hotéis de Luxo (Colline de France, Ritta Höppner, Saint Andrews)",
      "Restaurantes de Fondue e Galeterias Tradicionais"
    ],
    popularNeighborhoods: [
      "Centro",
      "Planalto",
      "Bavária",
      "Floresta",
      "Mato Queimado",
      "Carniel",
      "Avenida Central"
    ],
    accessHighways: ["RS-235", "RS-115", "RS-020", "BR-116"],
    recommendedServices: [
      {
        title: "Transfer Para Gramado Privativo",
        slug: "transfer-para-gramado",
        badge: "Mais Procurado",
        description: "Receptivo exclusivo no desembarque de POA ou CXJ com placa nominal e transporte direto ao seu hotel."
      },
      {
        title: "Transporte Executivo Gramado",
        slug: "transporte-executivo-gramado",
        badge: "Corporativo & VIP",
        description: "Deslocamentos pontuais para feiras, jantares de gala e compromissos de negócios na cidade."
      },
      {
        title: "Tour Gramado & Canela VIP",
        slug: "tour-gramado-canela",
        badge: "Roteiro Flexível",
        description: "Veículo e motorista privativo à sua inteira disposição para visitar as melhores atrações sem pressa."
      }
    ],
    commonRoutes: [
      {
        origin: "Aeroporto Salgado Filho (POA)",
        destination: "Hotéis de Gramado (Centro / Planalto)",
        estimatedTime: "1h 45min - 2h 00min",
        distance: "118 km",
        details: "Receptivo no portão de desembarque de POA com assistência de bagagens e água mineral a bordo."
      },
      {
        origin: "Aeroporto Hugo Cantergiani (CXJ - Caxias)",
        destination: "Gramado",
        estimatedTime: "1h 10min - 1h 25min",
        distance: "68 km",
        details: "A conexão mais rápida e inteligente para a Serra Gaúcha via RS-453 e RS-235."
      },
      {
        origin: "Gramado (Hotel / Pousada)",
        destination: "Bento Gonçalves (Vale dos Vinhedos)",
        estimatedTime: "1h 35min - 1h 50min",
        distance: "115 km",
        details: "Passeio bate-e-volta para degustações enogastronômicas sem risco com a Lei Seca."
      }
    ],
    comparisonPoints: [
      {
        agTransfer: "Veículo privativo 100% higienizado, com ar dual-zone, água mineral lacrada e cadeirinha infantil sob solicitação prévia.",
        competitor: "Aplicativos (Uber/99) com motoristas cancelando corridas para a serra, veículos compactos e sem espaço para bagagens."
      },
      {
        agTransfer: "Motorista no portão de desembarque com monitoramento ativo do voo. Se atrasar, nós esperamos sem custos ocultos.",
        competitor: "Ônibus convencional com horários rígidos, paradas obrigatórias, viagens demoradas (3h+) e desembarque na rodoviária."
      },
      {
        agTransfer: "Preço fixo acordado previamente no WhatsApp ou contrato corporativo, sem tarifas dinâmicas de chuva ou feriados.",
        competitor: "Locadoras de veículos exigem filas no balcão, caução no cartão de crédito e a tensão de guiar em pistas íngremes sob forte cerração."
      }
    ],
    socialProof: {
      name: "Mariana Prado Ribeiro",
      role: "Turista de São Paulo (Viagem em Família)",
      location: "Hotel Colline de France, Gramado",
      quote: "Chegamos no Aeroporto de Caxias do Sul (CXJ) e o motorista da AG Transfer já estava nos aguardando com uma placa com nosso nome. Carro impecável, água geladinha e cadeirinha para minha filha de 3 anos. Viagem tranquila e sem sobressaltos na serra."
    },
    faqs: [
      {
        question: "Qual aeroporto fica mais perto de Gramado: POA ou CXJ?",
        answer: "O Aeroporto de Caxias do Sul (CXJ) fica a apenas 68 km de Gramado (cerca de 1h15 de viagem), sendo a opção mais rápida. O Aeroporto Salgado Filho em Porto Alegre (POA) fica a 118 km (cerca de 1h50 a 2h de percurso). A AG Transfer atende ambos com monitoramento de voo em tempo real."
      },
      {
        question: "Como funciona o receptivo da AG Transfer na chegada a Gramado?",
        answer: "Nosso motorista executivo aguarda você no saguão de desembarque segurando uma placa de identificação com seu nome. Ele auxilia no transporte das malas até o veículo executivo climatizado e leva sua família ou equipe direto até a porta do seu hotel em Gramado."
      },
      {
        question: "É seguro contratar transfer à noite ou com neblina em Gramado?",
        answer: "Sim, 100% seguro. Nossos motoristas executivos são profissionais locais experientes na malha viária serrana, acostumados com condições adversas como forte cerração, chuva ou frio. Todos os veículos contam com revisão mecânica preventiva periódica e seguro APP de passageiros."
      },
      {
        question: "Como posso reservar o transfer para Gramado?",
        answer: "Basta clicar no botão do WhatsApp na página ou ligar para (54) 99153-7288. Informando a data, horário, número do voo e endereço do hotel em Gramado, enviamos o orçamento e confirmamos a reserva em poucos minutos."
      }
    ],
    metaTitle: "Transfer Para Gramado RS | Transporte Executivo Privativo 24h",
    metaDescription: "Transfer privativo para Gramado saindo dos Aeroportos POA e CXJ. Conforto VIP, motorista no desembarque, faturamento corporativo e pontualidade britânica. Peça orçamento 24h!",
    keywords: ["transfer gramado", "transporte executivo gramado", "transfer porto alegre gramado", "transfer aeroporto caxias do sul gramado", "motorista particular gramado", "como ir para gramado"]
  },
  {
    id: "canela",
    slug: "canela",
    name: "Canela",
    badge: "Ecoturismo & Charme Serrano",
    tagline: "Transfer Executivo & Transporte Privativo em Canela (RS)",
    region: "Região das Hortênsias · Serra Gaúcha",
    state: "RS",
    cep: "95680-000",
    geoCoordinates: {
      lat: -29.3644,
      lng: -50.8122,
    },
    distanceFromPoa: "125 km (aprox. 2h 00min via RS-235)",
    distanceFromCxj: "75 km (aprox. 1h 25min via RS-453 e RS-235)",
    distanceFromSede: "75 km da nossa base operacional em Caxias do Sul",
    altitude: "837 m de altitude",
    climateContext: "Clima temperado serrano com umidade expressiva, nevoeiros em vales e temperaturas próximas de zero grau nos invernos. A rota de acesso conta com declives e curvas sinuosas que demandam condução perita.",
    description: "Transporte executivo e transfer privativo para Canela. Atendimento porta a porta desde os aeroportos de Porto Alegre (POA) e Caxias do Sul (CXJ) para os melhores hotéis, pousadas de charme e atrativos turísticos da cidade.",
    fullBio: "Conhecida pela imponente Catedral de Pedra, pela beleza natural da Cascata do Caracol e pelas inovações turísticas como a plataforma estaiada Skyglass, Canela é o refúgio perfeito para quem busca sofisticação em meio à natureza na Serra Gaúcha. A AG Transfer oferece mobilidade privativa completa para passeios ecológicos, rotas gastronômicas e transfers de chegada e partida. Com nossa frota de sedans, SUVs e vans executivas, você desfruta de cada momento sem depender de transportes públicos ou transfers coletivos compartilhados com dezenas de paradas.",
    keyLandmarks: [
      "Catedral de Pedra (Nossa Senhora de Lourdes)",
      "Parque do Caracol & Bondinhos Aéreos",
      "Skyglass Canela (Plataforma Estaiada de Vidro)",
      "Alpen Park (Parque de Aventuras)",
      "Castelinho Caracol & Vale da Ferradura",
      "Pousadas Boutique & Hotéis de Charme (Vila Suzana, Reserva da Prainha)"
    ],
    popularNeighborhoods: [
      "Centro",
      "Vila Suzana",
      "Palace Hotel",
      "Quinta da Serra",
      "Canelinha",
      "Caracol",
      "Eugênio Ferreira"
    ],
    accessHighways: ["RS-235", "RS-476"],
    recommendedServices: [
      {
        title: "Transfer Para Canela Privativo",
        slug: "transfer-para-canela",
        badge: "Porta a Porta",
        description: "Viagem privativa sem paradas intermediárias desde POA ou CXJ direto para sua pousada em Canela."
      },
      {
        title: "Tour Gramado & Canela VIP",
        slug: "tour-gramado-canela",
        badge: "Passeio Completo",
        description: "Roteiro exclusivo pelos parques, mirantes, lojas de chocolate e Catedral de Pedra de Canela."
      },
      {
        title: "Motorista Particular por Diária",
        slug: "motorista-particular-diaria",
        badge: "Máxima Flexibilidade",
        description: "Chauffeur à disposição para levar você a jantares, passeios ecológicos e compras."
      }
    ],
    commonRoutes: [
      {
        origin: "Aeroporto Salgado Filho (POA)",
        destination: "Hotéis e Pousadas de Canela",
        estimatedTime: "1h 50min - 2h 10min",
        distance: "125 km",
        details: "Conexão direta sem conexões ou paradas indesejadas, com bagageiro amplo para todas as malas."
      },
      {
        origin: "Aeroporto Hugo Cantergiani (CXJ)",
        destination: "Canela (Centro / Vila Suzana)",
        estimatedTime: "1h 20min - 1h 35min",
        distance: "75 km",
        details: "Rota cênica pela RS-453 e RS-235, passando por Gramado com desembarque direto em Canela."
      },
      {
        origin: "Canela (Atrações e Parques)",
        destination: "Gramado (Restaurantes e Centro)",
        estimatedTime: "15min - 25min",
        distance: "8 km",
        details: "Deslocamentos rápidos entre cidades irmãs com motorista aguardando no local."
      }
    ],
    comparisonPoints: [
      {
        agTransfer: "Veículo privativo exclusivo para sua família ou grupo, saindo no minuto em que você desembarca.",
        competitor: "Transfers compartilhados (vans coletivas) fazem você esperar horas no saguão e param em até 15 hotéis antes do seu."
      },
      {
        agTransfer: "Frota moderna com suspensão confortável, isolamento termoacústico e porta-malas espaçoso.",
        competitor: "Aplicativos de transporte raramente aceitam viagens longas de volta de Canela até os aeroportos na madrugada."
      },
      {
        agTransfer: "Atendimento 24h com suporte humano imediato e pontualidade rigorosa garantida em contrato.",
        competitor: "Táxis convencionais operando por taxímetro na serra podem gerar custos imprevisíveis e elevados."
      }
    ],
    socialProof: {
      name: "Rodrigo Mendonça Alencar",
      role: "Engenheiro e Fotógrafo de Natureza",
      location: "Pousada Vila Suzana, Canela",
      quote: "Contratamos a AG Transfer para fazer nossos deslocamentos diários entre os parques de Canela e os jantares em Gramado. O atendimento foi impecável, motorista super prestativo, nos dando dicas de horários de menor movimento no Skyglass e Cascata do Caracol. Valeu cada centavo."
    },
    faqs: [
      {
        question: "Quanto tempo leva o transfer de Porto Alegre até Canela?",
        answer: "O percurso privativo com a AG Transfer leva em média entre 1h50 e 2h10 (aproximadamente 125 km). Por ser uma viagem 100% privativa, não há paradas intermediárias em outros hotéis, otimizando o seu tempo de descanso."
      },
      {
        question: "O transfer atende pousadas afastadas na região do Caracol em Canela?",
        answer: "Sim! Atendemos qualquer pousada, hotel boutique, condomínio fechado ou residência em Canela e arredores, incluindo a zona do Caracol, Ferradura, Vila Suzana e área rural."
      },
      {
        question: "Posso incluir o Parque Skyglass e o Alpen Park no mesmo dia de passeio?",
        answer: "Com certeza. No serviço de Tour Privativo ou Motorista por Diária, o roteiro é 100% personalizado por você. Nosso motorista permanece à sua disposição aguardando durante as visitas aos parques."
      },
      {
        question: "Como funciona o transfer de volta de Canela para o aeroporto na madrugada?",
        answer: "A AG Transfer opera 24 horas por dia, 7 dias por semana. Para voos que partem bem cedo de POA ou CXJ, programamos a saída da sua pousada em Canela na madrugada com antecedência segura para que você faça o check-in com tranquilidade."
      }
    ],
    metaTitle: "Transfer Para Canela RS | Transporte Executivo Privativo VIP",
    metaDescription: "Transfer executivo privativo para Canela saindo de POA e CXJ. Veículos novos, motorista experiente na serra, atendimento 24h e pontualidade garantida. Reserve já!",
    keywords: ["transfer canela", "transporte executivo canela", "transfer porto alegre canela", "transfer aeroporto caxias canela", "motorista canela rs", "transfer privativo canela"]
  },
  {
    id: "bento-goncalves",
    slug: "bento-goncalves",
    name: "Bento Gonçalves",
    badge: "Capital Nacional do Vinho",
    tagline: "Transfer Executivo & Tour Enoturismo no Vale dos Vinhedos",
    region: "Vale dos Vinhedos · Serra Gaúcha",
    state: "RS",
    cep: "95700-000",
    geoCoordinates: {
      lat: -29.1718,
      lng: -51.5186,
    },
    distanceFromPoa: "120 km (aprox. 1h 45min via BR-116 e RS-470/RS-446)",
    distanceFromCxj: "42 km (aprox. 45min via RS-453)",
    distanceFromSede: "42 km da nossa matriz em Caxias do Sul (atendimento ágil)",
    altitude: "690 m de altitude",
    climateContext: "Topografia ondulada característica de vinhedos em encostas, com microclimas propícios para vitivinicultura. As rotas internas rurais (Caminhos de Pedra e Vale dos Vinhedos) exigem motoristas que conheçam o relevo com precisão.",
    description: "Transporte executivo de alto padrão e transfers privativos para Bento Gonçalves e Vale dos Vinhedos. Ideal para turismo enogastronômico sem risco com a Lei Seca, além de transporte corporativo para o polo moveleiro e Fundaparque.",
    fullBio: "Bento Gonçalves é o coração do enoturismo brasileiro, lar das mais prestigiadas vinícolas do país (Miolo, Casa Valduga, Almaúnica, Cave Geisse, Pizzato), do histórico passeio da Maria Fumaça e do charmoso roteiro rural dos Caminhos de Pedra. Além do turismo, Bento é um dos maiores polos moveleiros da América Latina e sedia grandes feiras industriais na Fundaparque (como Fimma e Movelsul). A AG Transfer oferece transfers executivos dos aeroportos e tours enológicos privativos com a imensa vantagem de permitir que você aprecie os melhores vinhos e espumantes premiados sem se preocupar com a direção ou fiscalização da Lei Seca.",
    keyLandmarks: [
      "Vale dos Vinhedos (Vinícolas Miolo, Casa Valduga, Larentis)",
      "Caminhos de Pedra (Casas de Pedra históricas, Casa da Ovelha)",
      "Passeio de Trem Maria Fumaça & Epopeia Italiana",
      "Fundaparque (Parque de Eventos e Feiras de Bento Gonçalves)",
      "Vale do Rio das Antas (Vinícola Salton)",
      "Hotéis de Enoturismo (Hotel & Spa do Vinho, Dall'Onder, Villa Michelon)"
    ],
    popularNeighborhoods: [
      "Centro",
      "Vale dos Vinhedos",
      "Caminhos de Pedra",
      "Cidade Alta",
      "São Bento",
      "Planalto",
      "Barracão",
      "Faria Lemos"
    ],
    accessHighways: ["RS-453", "RS-470 (BR-470)", "RS-446"],
    recommendedServices: [
      {
        title: "Tour Vale dos Vinhedos & Bento",
        slug: "tour-vale-dos-vinhedos",
        badge: "Enoturismo Seguro",
        description: "Deguste os melhores vinhos sem se preocupar com a direção. Carro privativo e motorista exclusivo."
      },
      {
        title: "Transporte Corporativo na Serra",
        slug: "viagens-corporativas-serra",
        badge: "Faturamento PJ",
        description: "Logística para diretores e compradores em feiras na Fundaparque com emissão de NF e boleto."
      },
      {
        title: "Transfer Aeroporto CXJ / POA",
        slug: "transfer-aeroporto-cxj-caxias",
        badge: "Conexão Expressa",
        description: "Apenas 45 minutos de transfer entre o Aeroporto de Caxias do Sul (CXJ) e Bento Gonçalves."
      }
    ],
    commonRoutes: [
      {
        origin: "Aeroporto Hugo Cantergiani (CXJ - Caxias)",
        destination: "Bento Gonçalves (Vale dos Vinhedos)",
        estimatedTime: "40min - 50min",
        distance: "42 km",
        details: "Conexão rápida e direta pela RS-453, a rota mais conveniente para visitar Bento Gonçalves."
      },
      {
        origin: "Aeroporto Salgado Filho (POA)",
        destination: "Hotéis de Bento Gonçalves",
        estimatedTime: "1h 45min - 2h 00min",
        distance: "120 km",
        details: "Transfer privativo via RS-446 e BR-470 com motorista recepcionando no desembarque de POA."
      },
      {
        origin: "Gramado / Canela",
        destination: "Vale dos Vinhedos (Bate-e-Volta)",
        estimatedTime: "1h 30min - 1h 45min",
        distance: "115 km",
        details: "Passeio de dia inteiro pelas principais vinícolas com almoço típico italiano e retorno seguro."
      }
    ],
    comparisonPoints: [
      {
        agTransfer: "Você e seus acompanhantes podem degustar todos os vinhos, espumantes e licores com total tranquilidade, respeitando a Lei Seca.",
        competitor: "Dirigir carro alugado após degustações em vinícolas acarreta risco severo de acidentes, multas gravíssimas e retenção da CNH."
      },
      {
        agTransfer: "Roteiro flexível pelas vinícolas boutique que você escolher, no seu ritmo e tempo de permanência.",
        competitor: "Passeios coletivos de ônibus engessados levam grupos de 40 pessoas com horários cronometrados e paradas comerciais forçadas."
      },
      {
        agTransfer: "Veículos equipados com porta-malas espaçoso para acomodar com segurança caixas de vinho e espumante adquiridas nas vinícolas.",
        competitor: "Carros de aplicativo de pequeno porte com porta-malas ocupado por cilindro de gás ou espaço insuficiente."
      }
    ],
    socialProof: {
      name: "Henrique Castanho & Família",
      role: "Apreciadores de Vinhos (Curitiba - PR)",
      location: "Hotel & Spa do Vinho, Bento Gonçalves",
      quote: "Fizemos dois dias de tour no Vale dos Vinhedos e Caminhos de Pedra com a AG Transfer. Sensacional não ter que se preocupar com quem vai dirigir nas degustações! O motorista era super pontual, conhecia todas as vinícolas e nos ajudou a carregar as caixas de vinho até o hotel."
    },
    faqs: [
      {
        question: "Por que contratar transfer para o Vale dos Vinhedos em vez de alugar carro?",
        answer: "A principal razão é a segurança e a Lei Seca (tolerância zero de álcool no Brasil). Em Bento Gonçalves você visitará diversas vinícolas e fará degustações de vinhos e espumantes premiados. Com a AG Transfer, você desfruta das experiências sem nenhuma preocupação com o volante ou blitz policiais."
      },
      {
        question: "Qual a distância entre o Aeroporto de Caxias do Sul (CXJ) e Bento Gonçalves?",
        answer: "Fica a apenas 42 km (cerca de 40 a 50 minutos de viagem pela RS-453). É a opção aérea mais rápida e prática para quem viaja a trabalho ou lazer para Bento Gonçalves."
      },
      {
        question: "O veículo tem espaço para transportar caixas de vinho compradas nas vinícolas?",
        answer: "Sim! Nossos sedans executivos, SUVs e vans possuem porta-malas amplos preparados para acomodar bagagens e caixas de vinho com segurança e integridade durante o trajeto."
      },
      {
        question: "Vocês atendem empresas que visitam a Fundaparque em Bento Gonçalves?",
        answer: "Sim, atendemos diretores, compradores e delegações corporativas para eventos como Movelsul, Fimma, Bento em Dança e visitas técnicas ao polo moveleiro, com opção de faturamento PJ por Nota Fiscal."
      }
    ],
    metaTitle: "Transfer Bento Gonçalves RS | Tour Vale dos Vinhedos Privativo",
    metaDescription: "Transfer executivo para Bento Gonçalves e Tour no Vale dos Vinhedos. Deguste vinhos com segurança da Lei Seca. Conexão expressa de POA e CXJ. Orçamento 24h!",
    keywords: ["transfer bento goncalves", "tour vale dos vinhedos", "transporte executivo bento goncalves", "transfer aeroporto caxias bento", "enoturismo serra gaucha transfer"]
  },
  {
    id: "caxias-do-sul",
    slug: "caxias-do-sul",
    name: "Caxias do Sul",
    badge: "Sede Operacional AG Transfer",
    tagline: "Transporte Executivo & Transfer Aeroporto CXJ em Caxias do Sul",
    region: "Polo Metalmecânico & Sede · Serra Gaúcha",
    state: "RS",
    cep: "95098-420",
    geoCoordinates: {
      lat: -29.1833,
      lng: -51.1833,
    },
    distanceFromPoa: "125 km (aprox. 1h 45min via BR-116 ou RS-122)",
    distanceFromCxj: "Localizado no próprio município (Aeroporto Regional Hugo Cantergiani CXJ)",
    distanceFromSede: "Nossa matriz: Av. Salgado Filho, 3451 - Bairro Salgado Filho (ao lado do aeroporto CXJ)",
    altitude: "817 m de altitude",
    climateContext: "Importante polo industrial do estado com relevo acidentado e frequentes variações climáticas. A proximidade da nossa base ao aeroporto garante tempo de resposta recorde para qualquer chamada executiva emergencial.",
    description: "Sede da AG Transfer. Transporte executivo de excelência e transfers privativos no Aeroporto Regional Hugo Cantergiani (CXJ), indústrias do polo metalmecânico, Pavilhões da Festa da Uva e Feira Mercopar.",
    fullBio: "Caxias do Sul é a segunda maior cidade do Rio Grande do Sul em população e o segundo maior polo metalmecânico do Brasil, abrigando gigantes mundiais como Marcopolo, Randoncorp, Agrale e centenas de fornecedores automotivos. A cidade conta com o Aeroporto Regional Hugo Cantergiani (CXJ), principal terminal aéreo que atende a Serra Gaúcha com voos regulares das companhias Azul, Gol e Latam. A sede física da AG Transfer está localizada exatamente em Caxias do Sul (Av. Salgado Filho, 3451), o que nos permite oferecer pronto atendimento 24 horas para o aeroporto, visitas técnicas fabris e receptivos de executivos nacionais e internacionais com faturamento simplificado.",
    keyLandmarks: [
      "Aeroporto Regional Hugo Cantergiani (CXJ)",
      "Pavilhões da Festa da Uva (Centro de Eventos e Feiras)",
      "Polo Industrial (Complexos Marcopolo, Randoncorp, Agrale)",
      "Parque da UCS (Universidade de Caxias do Sul)",
      "Castelo Lacave & Vinícolas Tradicionais",
      "Hotéis Executivos (Intercity Caxias, Blue Tree Towers, Swan Caxias)"
    ],
    popularNeighborhoods: [
      "Salgado Filho (Nossa Base)",
      "Centro",
      "Pioneiro",
      "Lourdes",
      "São Pelegrino",
      "Nossa Senhora de Fátima",
      "Ana Rech",
      "Forqueta",
      "B地区 Industrial"
    ],
    accessHighways: ["BR-116", "RS-122", "RS-453 (Rota do Sol)"],
    recommendedServices: [
      {
        title: "Transfer Aeroporto CXJ Caxias",
        slug: "transfer-aeroporto-cxj-caxias",
        badge: "Base ao Lado do CXJ",
        description: "Receptivo imediato com placa no Aeroporto de Caxias do Sul para conexão com toda a serra."
      },
      {
        title: "Transporte Corporativo na Serra",
        slug: "viagens-corporativas-serra",
        badge: "Padrão Indústria",
        description: "Atendimento a diretorias, auditorias técnicas e feiras industriais com Nota Fiscal eletrônica."
      },
      {
        title: "Motorista por Diária (Chauffeur)",
        slug: "motorista-particular-diaria",
        badge: "Diária VIP",
        description: "Carro executivo e motorista bilíngue/qualificado à disposição para múltiplas visitas industriais."
      }
    ],
    commonRoutes: [
      {
        origin: "Aeroporto de Caxias do Sul (CXJ)",
        destination: "Gramado / Canela",
        estimatedTime: "1h 10min - 1h 25min",
        distance: "68 km",
        details: "O atalho mais rápido para a Serra Gaúcha via RS-453 e RS-235, sem trânsito da capital."
      },
      {
        origin: "Caxias do Sul (Centro / Distrito Industrial)",
        destination: "Aeroporto Salgado Filho (POA)",
        estimatedTime: "1h 45min - 2h 00min",
        distance: "125 km",
        details: "Viagens corporativas expressas para embarques em voos internacionais ou conexões em POA."
      },
      {
        origin: "Caxias do Sul (Empresas / CXJ)",
        destination: "Farroupilha / Bento Gonçalves",
        estimatedTime: "25min - 45min",
        distance: "20 km a 42 km",
        details: "Deslocamentos industriais e de negócios ao longo do corredor da RS-122 e RS-453."
      }
    ],
    comparisonPoints: [
      {
        agTransfer: "Sede física na própria Av. Salgado Filho em Caxias do Sul, a poucos minutos da pista do Aeroporto CXJ.",
        competitor: "Empresas sediadas em Porto Alegre que cobram custos astronômicos de deslocamento para atender Caxias."
      },
      {
        agTransfer: "Faturamento direto para empresas via boleto bancário quinzenal ou mensal e Nota Fiscal eletrônica de Serviços (NFS-e).",
        competitor: "Motoristas autônomos sem emissão de Nota Fiscal adequada para prestação de contas de auditoria corporativa."
      },
      {
        agTransfer: "Motoristas com postura executiva e trajes impecáveis, garantindo que a imagem da sua empresa seja representada à altura.",
        competitor: "Aplicativos convencionais sem padrão de vestimenta, sem garantia de pontualidade e com veículos despadronizados."
      }
    ],
    socialProof: {
      name: "Eng. Paulo Roberto Silveira",
      role: "Diretor de Operações de Grupo Automotivo",
      location: "Caxias do Sul - RS",
      quote: "Nossa empresa recebe engenheiros e auditores internacionais todos os meses em Caxias do Sul. A AG Transfer é nossa parceira exclusiva: eles monitoram os voos no aeroporto CXJ, buscam os profissionais no horário exato e fazem todos os traslados entre fábricas com elegância e Nota Fiscal organizada."
    },
    faqs: [
      {
        question: "Onde fica a base da AG Transfer em Caxias do Sul?",
        answer: "Nossa base operacional está localizada na Av. Salgado Filho, 3451, Bairro Salgado Filho, CEP 95098-420, Caxias do Sul - RS. Essa localização estratégica fica colada ao Aeroporto Regional Hugo Cantergiani (CXJ), garantindo o menor tempo de resposta da região."
      },
      {
        question: "A AG Transfer atende feiras nos Pavilhões da Festa da Uva e Mercopar?",
        answer: "Sim, somos especialistas no atendimento a expositores, palestrantes e delegações corporativas que participam da Feira Mercopar, Festa Nacional da Uva e congressos industriais nos Pavilhões da Festa da Uva."
      },
      {
        question: "Como funciona o transfer do Aeroporto CXJ para outras cidades da Serra Gaúcha?",
        answer: "Nosso motorista recepciona você no saguão de desembarque de CXJ com placa personalizada e conduz você em veículo executivo privativo direto para Gramado, Canela, Bento Gonçalves, Farroupilha ou Flores da Cunha com agilidade máxima."
      },
      {
        question: "Vocês atendem viagens corporativas para o polo industrial em horários da madrugada?",
        answer: "Sim. Operamos em regime 24 Horas / 7 Dias por Semana. Viagens urgentes para manutenção em fábricas, turnos fabris ou conexões de madrugada contam com atendimento dedicado."
      }
    ],
    metaTitle: "Transporte Executivo em Caxias do Sul RS | AG Transfer 24h CXJ",
    metaDescription: "Transporte executivo e transfer no Aeroporto de Caxias do Sul (CXJ). Sede na Av. Salgado Filho, atendimento 24h, faturamento PJ e alto padrão corporativo. Peça cotação!",
    keywords: ["transporte executivo caxias do sul", "transfer aeroporto cxj", "transfer caxias do sul gramado", "motorista executivo caxias do sul", "transfer aeroporto caxias do sul"]
  },
  {
    id: "porto-alegre",
    slug: "porto-alegre",
    name: "Porto Alegre",
    badge: "Aeroporto Internacional Salgado Filho (POA)",
    tagline: "Transfer Executivo POA ⇄ Serra Gaúcha com Receptivo VIP",
    region: "Capital & Região Metropolitana",
    state: "RS",
    cep: "90000-000",
    geoCoordinates: {
      lat: -30.0346,
      lng: -51.2177,
    },
    distanceFromPoa: "Aeroporto Salgado Filho (POA) situado na zona norte da capital",
    distanceFromCxj: "125 km (aprox. 1h 45min via BR-116)",
    distanceFromSede: "125 km com rotas diárias de vans e sedans executivos",
    altitude: "10 m de altitude",
    climateContext: "Clima subtropical úmido com variações sazonais. O principal gargalo da rota POA ⇄ Serra é o tráfego da saída metropolitana (BR-116 e Freeway), trechos nos quais nossos motoristas utilizam rotas alternativas inteligentes e monitoramento em tempo real.",
    description: "Transfer executivo de alto padrão conectando o Aeroporto Internacional Salgado Filho (POA) e os principais bairros de Porto Alegre diretamente à Serra Gaúcha (Gramado, Canela, Caxias do Sul e Bento Gonçalves).",
    fullBio: "Porto Alegre é a capital dos gaúchos e a principal porta de entrada aérea para o Rio Grande do Sul através do Aeroporto Internacional Salgado Filho (POA). Milhares de turistas e viajantes de negócios desembarcam semanalmente na capital com destino à Serra Gaúcha. A AG Transfer elimina a frustração de conexões cansativas: nosso motorista executivo aguarda no desembarque de POA, transporta suas bagagens e conduz você em veículo executivo privativo direto pela Rota Romântica ou via Taquara até a porta do seu hotel na serra, sem perda de tempo.",
    keyLandmarks: [
      "Aeroporto Internacional Salgado Filho (POA - Terminal de Passageiros)",
      "Centro Histórico & Cais Embarcadero",
      "Polo Hospitalar e Médico (Hospital Moinhos de Vento, Santa Casa, Clínicas)",
      "Hotéis de Alto Padrão (Sheraton/Hilton Porto Alegre, Deville Prime, Radisson)",
      "Fiergs (Federação das Indústrias do RS)",
      "Pontifícia Universidade Católica (PUCRS) & UFRGS"
    ],
    popularNeighborhoods: [
      "São João (Aeroporto POA)",
      "Moinhos de Vento",
      "Bela Vista",
      "Petrópolis",
      "Centro Histórico",
      "Menino Deus",
      "Boa Vista",
      "Higienópolis"
    ],
    accessHighways: ["BR-116", "BR-290 (Freeway)", "RS-020", "RS-115"],
    recommendedServices: [
      {
        title: "Transfer Porto Alegre ⇄ Gramado",
        slug: "transfer-porto-alegre-gramado",
        badge: "Rota Mais Solicitada",
        description: "Receptivo VIP no portão de desembarque de POA e viagem privativa direta até Gramado e Canela."
      },
      {
        title: "Transporte Corporativo na Serra",
        slug: "viagens-corporativas-serra",
        badge: "Empresas & Negócios",
        description: "Translados corporativos entre matrizes em Porto Alegre e unidades industriais na serra."
      },
      {
        title: "Motorista por Diária (Chauffeur)",
        slug: "motorista-particular-diaria",
        badge: "Conforto Total",
        description: "Deslocamentos na capital ou rotas personalizadas sob demanda com motorista à disposição."
      }
    ],
    commonRoutes: [
      {
        origin: "Aeroporto Salgado Filho (POA)",
        destination: "Gramado / Canela (Hotéis)",
        estimatedTime: "1h 45min - 2h 00min",
        distance: "118 km",
        details: "Conexão sem esperas com motorista no saguão, água mineral gelada e ar dual-zone."
      },
      {
        origin: "Aeroporto Salgado Filho (POA)",
        destination: "Caxias do Sul (Centro / Empresas)",
        estimatedTime: "1h 45min - 2h 00min",
        distance: "125 km",
        details: "Viagem executiva ágil via BR-116 ou RS-122 para reuniões industriais na serra."
      },
      {
        origin: "Aeroporto Salgado Filho (POA)",
        destination: "Bento Gonçalves (Vale dos Vinhedos)",
        estimatedTime: "1h 45min - 2h 00min",
        distance: "120 km",
        details: "Translado expresso via RS-446 direto aos resorts e vinícolas do Vale dos Vinhedos."
      }
    ],
    comparisonPoints: [
      {
        agTransfer: "Receptivo dentro do terminal com placa nominal e acompanhamento em tempo real do radar de voos.",
        competitor: "Aplicativos não podem fazer viagens intermunicipais de serra com garantia, cancelando corridas no aeroporto."
      },
      {
        agTransfer: "Partida imediata no momento em que você sai do desembarque com as malas.",
        competitor: "Ônibus de linha partem apenas em horários pré-fixados com intervalo de até 3 horas entre partidas."
      },
      {
        agTransfer: "Veículos espaçosos para acomodar grandes volumes de malas sem amassar pertences ou roupas formais.",
        competitor: "Veículos compactos comuns de praça com espaço de bagageiro limitado e desconforto nos bancos traseiros."
      }
    ],
    socialProof: {
      name: "Guilherme Albuquerque",
      role: "Sócio e Consultor Empresarial",
      location: "São Paulo ⇄ Porto Alegre ⇄ Gramado",
      quote: "Desembarquei em POA com meu voo atrasado em mais de 1 hora. Para minha surpresa, o motorista da AG Transfer já tinha verificado a nova hora de pouso no radar da Infraero e estava me esperando com calma no portão. Subimos para Gramado num silêncio relaxante. Atendimento nível primeira classe."
    },
    faqs: [
      {
        question: "Como o motorista me encontra no Aeroporto Salgado Filho (POA)?",
        answer: "O motorista estará posicionado no saguão de desembarque com uma placa identificando seu nome ou o nome da sua empresa. Você também receberá o contato direto do motorista via WhatsApp com antecedência para comunicação imediata."
      },
      {
        question: "E se o meu voo para Porto Alegre atrasar?",
        answer: "Não se preocupe! Nossa central 24h monitora o número do seu voo em tempo real. Se houver atraso ou adiantamento da companhia aérea, remanejamos a apresentação do motorista sem custos extras."
      },
      {
        question: "Vocês atendem saídas de hotéis em Porto Alegre (bairro Moinhos de Vento, etc.)?",
        answer: "Sim, buscamos você em qualquer hotel, escritório ou residência em Porto Alegre e Região Metropolitana para transporte privativo até a Serra Gaúcha ou cidades vizinhas."
      },
      {
        question: "Qual o tempo médio de viagem do Aeroporto de POA até Gramado?",
        answer: "O percurso privativo com a AG Transfer leva em média entre 1h45 e 2h00, dependendo das condições do tráfego na saída da região metropolitana."
      }
    ],
    metaTitle: "Transfer Aeroporto Porto Alegre POA ⇄ Serra Gaúcha | AG Transfer",
    metaDescription: "Transfer executivo privativo no Aeroporto Salgado Filho (POA) para Gramado, Canela, Caxias e Bento. Receptivo no desembarque, monitoramento de voo 24h. Reserve!",
    keywords: ["transfer porto alegre gramado", "transfer aeroporto poa gramado", "transporte executivo porto alegre", "transfer salgado filho serra gaucha", "transfer privativo porto alegre"]
  },
  {
    id: "garibaldi",
    slug: "garibaldi",
    name: "Garibaldi",
    badge: "Capital Nacional do Espumante",
    tagline: "Transfer Executivo & Rota dos Espumantes em Garibaldi (RS)",
    region: "Vale dos Vinhedos & Rota dos Espumantes · Serra Gaúcha",
    state: "RS",
    cep: "95720-000",
    geoCoordinates: {
      lat: -29.2572,
      lng: -51.5342,
    },
    distanceFromPoa: "110 km (aprox. 1h 35min via RS-446 e BR-470)",
    distanceFromCxj: "38 km (aprox. 40min via RS-453)",
    distanceFromSede: "38 km de distância da matriz AG Transfer",
    altitude: "617 m de altitude",
    climateContext: "Encostas suaves e vales que concentram as maiores e mais premiadas casas de espumante do Brasil (método Charmat e Tradicional). As rotas vicinais requerem motorista que conheça os acessos aos produtores artesanais.",
    description: "Transfer executivo e transporte privativo para Garibaldi, a Capital do Espumante. Roteiro exclusivo pelas melhores vinícolas (Peterlongo, Chandon, Cooperativa Garibaldi) com segurança da Lei Seca e muito charme.",
    fullBio: "Com forte colonização italiana e francesa, Garibaldi é reconhecida como a Capital Nacional do Espumante, onde foi elaborado o primeiro espumante brasileiro em 1913. A cidade é famosa pela Rota dos Espumantes, pelas construções históricas preservadas no centro e pela Fenachamp (Festa Nacional do Espumante). Contratando a AG Transfer para seu traslado ou passeio em Garibaldi, você e seu grupo visitam as caves históricas, saboreiam os melhores espumantes premiados internacionalmente e viajam com a total tranquilidade de ter um motorista executivo sóbrio e profissional ao volante.",
    keyLandmarks: [
      "Rota dos Espumantes (Vinícola Peterlongo, Maison Chandon, Cooperativa Garibaldi)",
      "Centro Histórico e Rota das Casas de Pedra",
      "Estação da Maria Fumaça de Garibaldi",
      "Restaurantes de Gastronomia Franco-Italiana",
      "Parque da Fenachamp",
      "Hotéis & Pousadas Charmosas (Casacurta, Mosteiro São José)"
    ],
    popularNeighborhoods: [
      "Centro",
      "Borghetto",
      "São Francisco",
      "Champagne",
      "Tamandaré",
      "Alfama"
    ],
    accessHighways: ["BR-470", "RS-446", "RS-453"],
    recommendedServices: [
      {
        title: "Tour Vale dos Vinhedos & Garibaldi",
        slug: "tour-vale-dos-vinhedos",
        badge: "Enoturismo & Espumantes",
        description: "Visita às melhores vinícolas de Garibaldi e Vale dos Vinhedos com liberdade e segurança."
      },
      {
        title: "Transfer Aeroporto CXJ / POA",
        slug: "transfer-aeroporto-cxj-caxias",
        badge: "Conexão Rápida",
        description: "Apenas 40 minutos de transfer executivo entre o Aeroporto de Caxias do Sul e Garibaldi."
      },
      {
        title: "Motorista Particular por Diária",
        slug: "motorista-particular-diaria",
        badge: "Chauffeur Dedicado",
        description: "Transporte de gala para casamentos na serra, eventos gastronômicos e degustações privadas."
      }
    ],
    commonRoutes: [
      {
        origin: "Aeroporto de Caxias do Sul (CXJ)",
        destination: "Hotéis de Garibaldi (Hotel Casacurta)",
        estimatedTime: "35min - 45min",
        distance: "38 km",
        details: "Conexão rápida e confortável através da RS-453 com assistência de bagagens."
      },
      {
        origin: "Aeroporto Salgado Filho (POA)",
        destination: "Garibaldi",
        estimatedTime: "1h 35min - 1h 50min",
        distance: "110 km",
        details: "Translado privativo direto via RS-446 e BR-470 com motorista no desembarque."
      },
      {
        origin: "Garibaldi",
        destination: "Bento Gonçalves (Vale dos Vinhedos)",
        estimatedTime: "15min - 20min",
        distance: "12 km",
        details: "Deslocamentos rápidos entre cidades vizinhas para jantares harmonizados e visitas às caves."
      }
    ],
    comparisonPoints: [
      {
        agTransfer: "Permite degustar espumantes prestigiados sem infringir a Lei Seca ou arriscar a segurança da família.",
        competitor: "Dirigir após degustações expõe os viajantes a severas penalidades de trânsito e riscos nas rodovias."
      },
      {
        agTransfer: "Motoristas conhecem o acesso a caves e produtores exclusivos de métodos tradicionais fora do circuito comum.",
        competitor: "Transfers turísticos de ônibus comuns limitam-se a grandes cooperativas com paradas comerciais rápidas."
      },
      {
        agTransfer: "Pontualidade britânica para conexões da Estação da Maria Fumaça e eventos corporativos.",
        competitor: "Falta crônica de motoristas de aplicativo na região de Garibaldi, especialmente à noite ou em feriados."
      }
    ],
    socialProof: {
      name: "Dra. Beatriz Fontana",
      role: "Sommelière & Consultora Enológica",
      location: "Garibaldi - RS",
      quote: "Realizamos uma confraria de degustação em Garibaldi e contratamos uma van executiva da AG Transfer. Atendimento impecável, pontualidade britânica e motorista muito atencioso com as nossas garrafas no bagageiro. Recomendo de olhos fechados!"
    },
    faqs: [
      {
        question: "Qual o melhor aeroporto para chegar em Garibaldi?",
        answer: "O Aeroporto de Caxias do Sul (CXJ) é o mais próximo, a apenas 38 km de Garibaldi (cerca de 40 minutos de viagem). O Aeroporto de Porto Alegre (POA) fica a cerca de 110 km (1h35 de percurso). A AG Transfer opera em ambos os aeroportos 24 horas."
      },
      {
        question: "Posso fazer um roteiro de espumantes em Garibaldi sem me preocupar com a Lei Seca?",
        answer: "Sim! Essa é a principal vantagem de contratar o Tour Privativo da AG Transfer. Nosso motorista executivo conduz o veículo, enquanto você e seus amigos ou familiares apreciam as degustações nas caves de Garibaldi com 100% de segurança e conformidade legal."
      },
      {
        question: "Vocês fazem transfers para casamentos e eventos no Hotel Casacurta?",
        answer: "Sim, atendemos convidados, noivos e padrinhos em cerimônias e recepções realizadas no Hotel Casacurta, vinícolas e espaços de eventos da região com sedans, SUVs e vans executivas."
      },
      {
        question: "Como funciona a contratação do motorista por período em Garibaldi?",
        answer: "Disponibilizamos o veículo com motorista por meio período (4h), diária completa (8h a 10h) ou dias consecutivos. O itinerário é totalmente personalizado conforme a sua preferência."
      }
    ],
    metaTitle: "Transfer Garibaldi RS | Transporte Executivo Rota dos Espumantes",
    metaDescription: "Transfer executivo privativo para Garibaldi e Rota dos Espumantes. Desembarque de POA e CXJ, motorista experiente e segurança da Lei Seca. Reserve online 24h!",
    keywords: ["transfer garibaldi", "rota dos espumantes transfer", "transporte executivo garibaldi", "transfer aeroporto caxias garibaldi", "motorista particular garibaldi rs"]
  },
  {
    id: "nova-petropolis",
    slug: "nova-petropolis",
    name: "Nova Petrópolis",
    badge: "Jardim da Serra Gaúcha",
    tagline: "Transfer Executivo & Rota Romântica em Nova Petrópolis (RS)",
    region: "Região das Hortênsias & Rota Romântica · Serra Gaúcha",
    state: "RS",
    cep: "95150-000",
    geoCoordinates: {
      lat: -29.3768,
      lng: -51.1136,
    },
    distanceFromPoa: "90 km (aprox. 1h 30min via BR-116)",
    distanceFromCxj: "35 km (aprox. 40min via BR-116 ou RS-235)",
    distanceFromSede: "35 km da sede da AG Transfer em Caxias do Sul",
    altitude: "595 m de altitude",
    climateContext: "Localizada em um vale florido ao longo da histórica Rota Romântica (BR-116), com curvas arborizadas e clima ameno. Trecho que exige motoristas atentos a ciclistas, curvas e eventuais nevoeiros da encosta da serra.",
    description: "Transfer executivo e transporte privativo para Nova Petrópolis. Porta de entrada da Rota Romântica, famosa pela herança cultural germânica, pelo Labirinto Verde, pela Praça das Flores e pelas tradicionais malharias.",
    fullBio: "Conhecida carinhosamente como o 'Jardim da Serra Gaúcha' e 'Capital Nacional do Cooperativismo', Nova Petrópolis encanta viajantes com suas praças impecavelmente floridas, arquitetura em enxaimel e forte tradição cultural alemã. A cidade é palco de eventos consagrados como o Festimalha e o Festival Internacional de Folclore. A AG Transfer oferece transfers executivos e passeios panorâmicos pela Rota Romântica, conectando com agilidade Nova Petrópolis a Gramado (a apenas 35 km de distância) e aos aeroportos de Porto Alegre e Caxias do Sul.",
    keyLandmarks: [
      "Praça das Flores & Labirinto Verde",
      "Parque Aldeia do Imigrante (História e Cultura Germânica)",
      "Ninho das Águias (Mirante Panorâmico de Voo Livre)",
      "Festimalha & Compras de Malhas e Couros",
      "Cafés Coloniais Tradicionais (Café Colonial Bela Vista / Oppa)",
      "Pousadas Charmosas da Rota Romântica"
    ],
    popularNeighborhoods: [
      "Centro",
      "Piá",
      "Logradouro",
      "Vila Germânia",
      "Linha Imperial",
      "Linha Brasil",
      "Pousada da Neve"
    ],
    accessHighways: ["BR-116 (Rota Romântica)", "RS-235"],
    recommendedServices: [
      {
        title: "Transfer Para Gramado com Parada em Nova Petrópolis",
        slug: "transfer-para-gramado",
        badge: "Rota Cênica",
        description: "Aproveite o trajeto até Gramado com uma parada para fotos no Labirinto Verde e compras de malhas."
      },
      {
        title: "Tour Gramado & Canela & Nova Petrópolis",
        slug: "tour-gramado-canela",
        badge: "Dia Completo",
        description: "Roteiro personalizado pelas três cidades mais charmosas da Região das Hortênsias."
      },
      {
        title: "Transfer Aeroporto CXJ / POA",
        slug: "transfer-aeroporto-cxj-caxias",
        badge: "Conexão Expressa",
        description: "Apenas 40 minutos entre o Aeroporto de Caxias do Sul e o centro de Nova Petrópolis."
      }
    ],
    commonRoutes: [
      {
        origin: "Aeroporto de Caxias do Sul (CXJ)",
        destination: "Nova Petrópolis (Praça das Flores)",
        estimatedTime: "35min - 45min",
        distance: "35 km",
        details: "Conexão cênica rápida e segura via BR-116 ou RS-453/RS-235."
      },
      {
        origin: "Aeroporto Salgado Filho (POA)",
        destination: "Nova Petrópolis",
        estimatedTime: "1h 25min - 1h 40min",
        distance: "90 km",
        details: "Viagem privativa tranquila pela histórica e charmosa Rota Romântica (BR-116)."
      },
      {
        origin: "Nova Petrópolis",
        destination: "Gramado (Centro / Hotéis)",
        estimatedTime: "30min - 40min",
        distance: "35 km",
        details: "Deslocamento panorâmico cercado por hortênsias pela rodovia RS-235."
      }
    ],
    comparisonPoints: [
      {
        agTransfer: "Possibilidade de fazer paradas flexíveis para fotos no Ninho das Águias e café colonial sem pressa.",
        competitor: "Ônibus e vans coletivas não permitem paradas e passam direto sem permitir que você aproveite a paisagem."
      },
      {
        agTransfer: "Veículos privativos higienizados com bagageiro livre para acomodar compras de malhas, casacos e doces coloniais.",
        competitor: "Falta de disponibilidade de carros de aplicativo para viagens entre Nova Petrópolis e Gramado."
      },
      {
        agTransfer: "Motoristas conhecem os melhores horários para evitar trânsito de serra nos finais de semana de eventos.",
        competitor: "Dirigir sem conhecer a serra pode resultar em horas perdidas em engarrafamentos nas serras da BR-116."
      }
    ],
    socialProof: {
      name: "Cláudia & Fernando Soares",
      role: "Casal em Lua de Mel (Rio de Janeiro - RJ)",
      location: "Pousada da Neve, Nova Petrópolis",
      quote: "Queríamos conhecer Nova Petrópolis antes de ir para Gramado. A AG Transfer organizou nosso transfer com parada para o café colonial e compras de malhas. O motorista foi super solícito e paciente. Recomendo demais!"
    },
    faqs: [
      {
        question: "Vale a pena parar em Nova Petrópolis no caminho para Gramado?",
        answer: "Sim, vale muito a pena! Nova Petrópolis fica no trajeto entre Porto Alegre e Gramado ou Caxias e Gramado. Com a AG Transfer, você pode solicitar uma parada no Labirinto Verde, na Praça das Flores ou em um café colonial típico germânico antes de seguir para o hotel."
      },
      {
        question: "Qual a distância de Nova Petrópolis para Gramado?",
        answer: "Fica a apenas 35 km (cerca de 30 a 40 minutos de viagem pela rodovia arborizada RS-235)."
      },
      {
        question: "Vocês atendem transfers para o Festimalha e Festival de Folclore?",
        answer: "Sim, realizamos transfers individuais e para grupos em vans executivas durante as feiras de inverno, Festimalha e eventos culturais de Nova Petrópolis."
      },
      {
        question: "Como solicitar cotação para transfer em Nova Petrópolis?",
        answer: "Basta entrar em contato pelo WhatsApp (54) 99153-7288. Atendemos 24 horas e passamos o valor fechado sem surpresas."
      }
    ],
    metaTitle: "Transfer Nova Petrópolis RS | Transporte Executivo Rota Romântica",
    metaDescription: "Transfer executivo privativo para Nova Petrópolis na Rota Romântica. Conexões de POA e CXJ, passeios personalizados, conforto e segurança 24h. Reserve!",
    keywords: ["transfer nova petropolis", "transporte executivo nova petropolis", "transfer poa nova petropolis", "rota romantica transfer", "motorista particular nova petropolis"]
  },
  {
    id: "farroupilha",
    slug: "farroupilha",
    name: "Farroupilha",
    badge: "Capital Nacional do Moscatel",
    tagline: "Transporte Executivo & Transfer Santuário de Caravaggio",
    region: "Polo Têxtil, Calçadista & Enoturismo · Serra Gaúcha",
    state: "RS",
    cep: "95180-000",
    geoCoordinates: {
      lat: -29.2241,
      lng: -51.3444,
    },
    distanceFromPoa: "110 km (aprox. 1h 35min via RS-122)",
    distanceFromCxj: "18 km (aprox. 20min via RS-122 ou RS-453)",
    distanceFromSede: "18 km de distância (vizinha colada à nossa base de Caxias do Sul)",
    altitude: "783 m de altitude",
    climateContext: "Cidade de relevo serrano vizinha imediata a Caxias do Sul. Por estar a apenas 18 km de nossa sede, nosso tempo de posicionamento de veículos para Farroupilha é inferior a 30 minutos.",
    description: "Transporte executivo e transfer privativo para Farroupilha. Atendimento a indústrias calçadistas e têxteis, polo de compras de atacado/varejo, vinícolas produtoras de espumante Moscatel e Santuário de Caravaggio.",
    fullBio: "Berço da Imigração Italiana no Rio Grande do Sul, Farroupilha destaca-se como a Capital Nacional do Moscatel (maior produtora de uvas moscato e espumantes moscatéis do Brasil), além de abrigar o célebre Santuário de Nossa Senhora de Caravaggio, que atrai milhares de devotos anualmente. Farroupilha é também um dinâmico polo industrial de malhas, confecções e calçados, atraindo compradores de todo o país. A AG Transfer oferece mobilidade executiva ágil tanto para executivos em visitas industriais quanto para peregrinos e turistas que buscam conforto e segurança.",
    keyLandmarks: [
      "Santuário Diocesano de Nossa Senhora de Caravaggio",
      "Polo de Compras de Malhas e Vestuário (Centros de Compras na RS-122)",
      "Salto Ventoso (Cascata e Parque Natural de cinema)",
      "Vinícolas de Espumante Moscatel (Perini, Casa Perini, Basso)",
      "Parque dos Pinheiros",
      "Distritos Industriais e Metalúrgicos"
    ],
    popularNeighborhoods: [
      "Centro",
      "Caravaggio",
      "São Luiz",
      "Do Park",
      "Nova Vicenza",
      "Imigrante",
      "Industrial"
    ],
    accessHighways: ["RS-122", "RS-453"],
    recommendedServices: [
      {
        title: "Transporte Corporativo na Serra",
        slug: "viagens-corporativas-serra",
        badge: "Polo Têxtil & Indústria",
        description: "Translados para reuniões fabris e visitas comerciais com emissão de Nota Fiscal eletrônica."
      },
      {
        title: "Transfer Aeroporto CXJ / POA",
        slug: "transfer-aeroporto-cxj-caxias",
        badge: "A 20 Minutos do CXJ",
        description: "Acesso ultrarrápido ao Aeroporto de Caxias do Sul para conexão com voos comerciais."
      },
      {
        title: "Motorista por Diária (Chauffeur)",
        slug: "motorista-particular-diaria",
        badge: "Compras & Turismo",
        description: "Carro privativo à disposição para tours de compras de malhas e visitas ao Salto Ventoso."
      }
    ],
    commonRoutes: [
      {
        origin: "Aeroporto de Caxias do Sul (CXJ)",
        destination: "Farroupilha (Centro / Indústrias)",
        estimatedTime: "20min - 25min",
        distance: "18 km",
        details: "Deslocamento imediato e direto via RS-122 para compromissos de negócios ou compras."
      },
      {
        origin: "Farroupilha (Empresas / Hotéis)",
        destination: "Aeroporto Salgado Filho (POA)",
        estimatedTime: "1h 30min - 1h 45min",
        distance: "110 km",
        details: "Conexão executiva para embarques na capital gaúcha com pontualidade garantida."
      },
      {
        origin: "Farroupilha (Centro)",
        destination: "Santuário de Caravaggio & Salto Ventoso",
        estimatedTime: "15min - 20min",
        distance: "12 km",
        details: "Passeio turístico ou devocional com motorista aguardando no local das visitas."
      }
    ],
    comparisonPoints: [
      {
        agTransfer: "Tempo de resposta quase instantâneo por conta da proximidade física da nossa base em Caxias (18 km).",
        competitor: "Dificuldade de encontrar táxis ou aplicativos disponíveis para deslocamentos intermunicipais até Porto Alegre."
      },
      {
        agTransfer: "Contratos de faturamento PJ com emissão de boletos e descrição para prestação de contas de auditoria.",
        competitor: "Falta de formalização de recibos fiscais com motoristas autônomos ou informais."
      },
      {
        agTransfer: "Veículos espaçosos para transporte de mostruários de confecções, calçados ou caixas de espumante Moscatel.",
        competitor: "Veículos compactos de praça com espaço de carga reduzido."
      }
    ],
    socialProof: {
      name: "Marcus Vinícius Tavares",
      role: "Gerente Comercial de Rede Têxtil (Belo Horizonte - MG)",
      location: "Farroupilha - RS",
      quote: "Venho a Farroupilha trimestralmente para comprar coleções de malhas para nossas lojas. A AG Transfer cuida de toda a minha logística do aeroporto CXJ até os showrooms das confecções. Carros impecáveis e muita pontualidade."
    },
    faqs: [
      {
        question: "Qual a distância de Farroupilha até o Aeroporto de Caxias do Sul (CXJ)?",
        answer: "Fica a apenas 18 km (aproximadamente 20 minutos pela RS-122 ou RS-453). É uma conexão muito rápida e vantajosa para quem chega ou parte da serra."
      },
      {
        question: "Vocês atendem compras nos shoppings e confecções de atacado em Farroupilha?",
        answer: "Sim, oferecemos o serviço de motorista particular por diária ou por horas, acompanhando o comprador nos centros de confecção, malharias e showrooms com total flexibilidade."
      },
      {
        question: "A AG Transfer realiza viagens de Farroupilha direto para o Aeroporto Salgado Filho em Porto Alegre?",
        answer: "Sim! É uma das rotas mais frequentes para executivos e empresários da região. Buscamos na empresa ou residência e levamos direto ao portão de embarque de POA."
      },
      {
        question: "Posso agendar transfer para a Romaria de Nossa Senhora de Caravaggio?",
        answer: "Sim, atendemos peregrinos, famílias e delegações religiosas em veículos individuais e vans VIP durante as romarias anuais e celebrações no Santuário."
      }
    ],
    metaTitle: "Transporte Executivo em Farroupilha RS | Transfer AG 24h",
    metaDescription: "Transporte executivo e transfer privativo para Farroupilha RS. Conexão expressa com o Aeroporto de Caxias (18 km) e POA. Faturamento corporativo. Reserve já!",
    keywords: ["transporte executivo farroupilha", "transfer farroupilha", "transfer farroupilha aeroporto caxias", "motorista particular farroupilha", "transfer caravaggio farroupilha"]
  },
  {
    id: "flores-da-cunha",
    slug: "flores-da-cunha",
    name: "Flores da Cunha",
    badge: "Maior Produtora de Vinhos do Brasil",
    tagline: "Transfer Executivo & Rota dos Altos Montes em Flores da Cunha (RS)",
    region: "Altos Montes & Enoturismo Colonial · Serra Gaúcha",
    state: "RS",
    cep: "95270-000",
    geoCoordinates: {
      lat: -29.0286,
      lng: -51.1878,
    },
    distanceFromPoa: "145 km (aprox. 2h 00min via RS-122)",
    distanceFromCxj: "20 km (aprox. 25min via RS-122)",
    distanceFromSede: "20 km da nossa matriz em Caxias do Sul",
    altitude: "756 m de altitude",
    climateContext: "Região de colinas ensolaradas e noites frias na Serra Gaúcha, ideal para a maturação de uvas finas. Rota que integra a RS-122 com trânsito de cargas, recomendando veículos potentes e com suspensão segura.",
    description: "Transfer executivo e transporte privativo para Flores da Cunha. Maior município produtor de vinhos do Brasil e polo da célebre Rota dos Altos Montes. Conexão rápida com o Aeroporto de Caxias do Sul (20 km) e faturamento empresarial.",
    fullBio: "Flores da Cunha ostenta orgulhosamente o título de maior produtor de vinhos e uvas do Brasil, responsável por uma enorme fatia da produção nacional de bebidas e espumantes finos. A cidade sedia a Rota dos Altos Montes, caracterizada por vinícolas boutique familiares de altíssima qualidade, gastronomia italiana típica colonial (galeto al primo canto e polenta na chapa) e eventos marcantes como a Festa Nacional da Vendimia (Feprocol) e os tapetes de serragem de Corpus Christi. A AG Transfer conecta visitantes e compradores industriais a Flores da Cunha com máxima agilidade, saindo do Aeroporto CXJ em apenas 25 minutos.",
    keyLandmarks: [
      "Rota dos Vinhos dos Altos Montes (Vinícolas Luiz Argenta, Viapiana, Salvador)",
      "Vinícola Luiz Argenta (Arquitetura premiada internacionalmente e bistrô)",
      "Igreja Matriz Nossa Senhora de Lourdes & Campanário de Pedras",
      "Castelo dos Vinhedos & Cantinas Históricas de Otávio Rocha",
      "Restaurantes de Gastronomia Colonial Típica Italiana",
      "Polo Industrial Moveleiro e Metalmecânico"
    ],
    popularNeighborhoods: [
      "Centro",
      "São Cristóvão",
      "Otávio Rocha (Distrito Turístico)",
      "Nova Roma",
      "União",
      "São Gotardo"
    ],
    accessHighways: ["RS-122"],
    recommendedServices: [
      {
        title: "Tour Rota dos Altos Montes & Vinhos",
        slug: "tour-vale-dos-vinhedos",
        badge: "Enoturismo Exclusivo",
        description: "Visita às deslumbrantes vinícolas de Flores da Cunha com degustação livre e segurança ao volante."
      },
      {
        title: "Transfer Aeroporto CXJ / POA",
        slug: "transfer-aeroporto-cxj-caxias",
        badge: "A 25 Minutos do CXJ",
        description: "Conexão rápida com o Aeroporto de Caxias do Sul para reuniões fabris ou turismo."
      },
      {
        title: "Transporte Corporativo na Serra",
        slug: "viagens-corporativas-serra",
        badge: "Empresas & Indústrias",
        description: "Logística para visitas a grandes vinícolas, indústrias e cooperativas da região com NF."
      }
    ],
    commonRoutes: [
      {
        origin: "Aeroporto de Caxias do Sul (CXJ)",
        destination: "Flores da Cunha (Vinícola Luiz Argenta / Centro)",
        estimatedTime: "20min - 30min",
        distance: "20 km",
        details: "Trajeto ágil via RS-122 para almoços harmonizados ou visitas comerciais."
      },
      {
        origin: "Aeroporto Salgado Filho (POA)",
        destination: "Flores da Cunha",
        estimatedTime: "1h 50min - 2h 10min",
        distance: "145 km",
        details: "Conexão privativa direta sem baldeações pela BR-116 e RS-122."
      },
      {
        origin: "Flores da Cunha",
        destination: "Gramado / Canela",
        estimatedTime: "1h 15min - 1h 30min",
        distance: "75 km",
        details: "Passeio integrado conectando o polo dos Altos Montes à Região das Hortênsias."
      }
    ],
    comparisonPoints: [
      {
        agTransfer: "Permite almoçar com vinhos premiados na Vinícola Luiz Argenta e visitar cantinas em Otávio Rocha sem preocupação com Lei Seca.",
        competitor: "Pouquíssimas opções de carros de aplicativo na região de Flores da Cunha e risco alto em dirigir após degustação."
      },
      {
        agTransfer: "Proximidade da matriz da AG Transfer (20 km) assegura atendimento corporativo pontual.",
        competitor: "Transfers que vêm de Porto Alegre cobram tarifas de deslocamento excessivas para atender Flores da Cunha."
      },
      {
        agTransfer: "Motoristas instruídos e com discrição absoluta para atender comitivas de empresários da cadeia da uva e do vinho.",
        competitor: "Transporte não profissional sem faturamento corporativo ou seguro de passageiros APP."
      }
    ],
    socialProof: {
      name: "Eng. Alberto Zanchet",
      role: "Diretor Comercial de Equipamentos Enológicos (Campinas - SP)",
      location: "Flores da Cunha - RS",
      quote: "Sempre que venho visitar as cooperativas e vinícolas em Flores da Cunha, agendo com a AG Transfer. Eles me buscam pontualmente no aeroporto de Caxias, me levam a todas as reuniões e depois me deixam no hotel em Caxias com extrema comodidade. Recomendo com certeza."
    },
    faqs: [
      {
        question: "Qual a distância entre Caxias do Sul e Flores da Cunha?",
        answer: "Fica a apenas 20 km (cerca de 20 a 25 minutos de viagem direta pela RS-122). É uma das cidades mais próximas da nossa matriz operacional."
      },
      {
        question: "Vocês realizam passeios nas vinícolas da Rota dos Altos Montes?",
        answer: "Sim! Oferecemos tour privativo para visitar a icônica Vinícola Luiz Argenta, a Viapiana, a Salvador e as cantinas históricas do distrito de Otávio Rocha com degustação livre e segurança garantida."
      },
      {
        question: "A AG Transfer emite Nota Fiscal corporativa para atendimento em Flores da Cunha?",
        answer: "Sim, emitimos Nota Fiscal eletrônica de Serviços com discriminação de centros de custo e disponibilizamos faturamento via boleto para empresas cadastradas."
      },
      {
        question: "Como agendar o transfer de Flores da Cunha para o Aeroporto Salgado Filho (POA)?",
        answer: "Basta entrar em contato pelo WhatsApp (54) 99153-7288 com a data e horário do seu voo. Planejamos a saída com antecedência segura para que você chegue com calma ao aeroporto."
      }
    ],
    metaTitle: "Transfer Flores da Cunha RS | Transporte Executivo Altos Montes",
    metaDescription: "Transporte executivo privativo em Flores da Cunha RS. Conexão rápida com Aeroporto CXJ (20 km) e POA. Tour nas vinícolas dos Altos Montes. Peça orçamento 24h!",
    keywords: ["transfer flores da cunha", "transporte executivo flores da cunha", "transfer aeroporto caxias flores da cunha", "rota dos altos montes transfer", "motorista particular flores da cunha"]
  }
];

export function getCityBySlug(slug: string): CityItem | undefined {
  const normalized = slug?.toLowerCase().trim();
  return CITIES_SERVED.find(c => c.slug === normalized || c.id === normalized);
}
