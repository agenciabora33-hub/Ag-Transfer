import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'motion/react';
import {
  Plane,
  Briefcase,
  Compass,
  Clock,
  CheckCircle,
  MapPin,
  Calendar,
  Users,
  Send,
  Star,
  ChevronRight,
  ArrowLeft,
  ChevronDown,
  ShieldCheck,
  Sparkles,
  ExternalLink,
  MessageCircle,
  Car,
  Check,
  X,
  Phone,
  Award,
  Zap,
  Luggage
} from 'lucide-react';
import {
  SERVICES,
  FLEET_VEHICLES,
  COMPANY_NAP,
  buildWhatsAppUrl
} from '../data/companyData';
import { BrandLogo } from '../components/BrandLogo';
import { SEOHead } from '../components/SEOHead';
import { CITIES_SERVED } from '../data/cityData';

interface ServiceDetailPageProps {
  onOpenQuoteModal: (serviceTitle?: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ onOpenQuoteModal }) => {
  const { slug } = useParams<{ slug: string }>();
  
  // Backward compatibility alias map
  const aliasMap: Record<string, string> = {
    'transfer-aeroportuario': 'transfer-porto-alegre-gramado',
    'passeios-gramado-canela': 'tour-gramado-canela',
    'turismo-vip': 'tour-vale-dos-vinhedos',
    'viagens-corporativas': 'viagens-corporativas-serra',
    'motorista-disposicao': 'motorista-particular-diaria',
    'transfer-aeroporto-caxias-do-sul-cxj': 'transfer-aeroporto-cxj-caxias',
    'transfer-aeroporto-caxias': 'transfer-aeroporto-cxj-caxias',
    'transfer-cxj': 'transfer-aeroporto-cxj-caxias',
    'transfer-gramado': 'transfer-para-gramado',
    'transfer-canela': 'transfer-para-canela',
    'transporte-executivo': 'transporte-executivo-gramado',
    'carro-executivo-gramado': 'transporte-executivo-gramado',
    'passeio-vale-dos-vinhedos': 'tour-vale-dos-vinhedos',
    'tour-bento-goncalves': 'tour-vale-dos-vinhedos',
    'passeios-gramado': 'tour-gramado-canela',
  };
  const resolvedSlug = (slug && aliasMap[slug]) ? aliasMap[slug] : slug;
  const service = SERVICES.find((s) => s.slug === resolvedSlug || s.id === resolvedSlug || s.slug === slug || s.id === slug);

  // Form states for in-page simulator
  const [origin, setOrigin] = useState('Aeroporto Salgado Filho (POA)');
  const [destination, setDestination] = useState('Gramado / Canela (Hotel)');
  const [date, setDate] = useState('');
  const [passengers, setPassengers] = useState('1 a 3 passageiros (Sedan Executivo)');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // 3D tilt simulator effect
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), { damping: 20, stiffness: 150 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), { damping: 20, stiffness: 150 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (service) {
      if (service.slug === 'transfer-para-gramado') {
        setOrigin('Aeroporto Salgado Filho (POA) ou Caxias (CXJ)');
        setDestination('Gramado (Hotel, Pousada ou Endereço)');
      } else if (service.slug === 'transfer-para-canela') {
        setOrigin('Aeroporto Salgado Filho (POA) ou Caxias (CXJ)');
        setDestination('Canela (Hotel, Pousada, Catedral ou Caracol)');
      } else if (service.slug === 'transporte-executivo-gramado') {
        setOrigin('Hotel / Hospedagem em Gramado ou Canela');
        setDestination('Restaurantes, Fondue, Serra Park ou Eventos');
      } else if (service.slug === 'transfer-porto-alegre-gramado') {
        setOrigin('Aeroporto Salgado Filho (POA)');
        setDestination('Gramado / Canela (Hotel ou Pousada)');
      } else if (service.slug === 'tour-vale-dos-vinhedos') {
        setOrigin('Gramado / Canela / Caxias');
        setDestination('Vale dos Vinhedos (Bento Gonçalves)');
      } else if (service.slug === 'tour-gramado-canela') {
        setOrigin('Hotel em Gramado ou Canela');
        setDestination('Atrações / Lago Negro / Caracol / Skyglass');
      } else if (service.slug === 'transfer-aeroporto-cxj-caxias') {
        setOrigin('Aeroporto Hugo Cantergiani (CXJ)');
        setDestination('Gramado / Canela ou Bento Gonçalves');
      } else if (service.slug === 'viagens-corporativas-serra') {
        setOrigin('Polo Industrial / Hotel Executivo');
        setDestination('Mercopar / Fenavinho / Festuris / Fábrica');
      } else {
        setOrigin('Caxias do Sul / Serra Gaúcha');
        setDestination('Itinerário Personalizado');
      }
    }
  }, [service, slug]);

  if (!service) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-24 text-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#0D0A27] mb-3">
          Serviço Não Encontrado
        </h1>
        <p className="text-slate-600 mb-6 max-w-md">
          O serviço que você procura não está disponível ou foi reestruturado. Conheça todas as opções de transporte executivo da AG Transfer.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#0D0A27] to-[#0284C7] text-white text-xs font-bold uppercase tracking-wider shadow-md"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar à Página Inicial</span>
        </Link>
      </div>
    );
  }

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Plane':
        return <Plane className="w-6 h-6 text-[#0284C7]" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-[#0284C7]" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-[#0284C7]" />;
      case 'Clock':
        return <Clock className="w-6 h-6 text-[#0284C7]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#0284C7]" />;
      default:
        return <Car className="w-6 h-6 text-[#0284C7]" />;
    }
  };

  const handleSimulatorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = buildWhatsAppUrl({
      service: service.title,
      origin,
      destination,
      date: date || 'A definir',
      passengers,
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Specific conversion copy per service
  const serviceHighlights: Record<string, {
    benefitBadge: string;
    headlineLead: string;
    socialProofTestimonial: { name: string; role: string; quote: string; location: string };
    comparisonCompetitorName: string;
    comparisonPoints: { feature: string; ag: string; other: string }[];
  }> = {
    'transfer-para-gramado': {
      benefitBadge: 'Receptivo Aeroportos POA / CXJ · Subida Direta para Hotéis de Gramado',
      headlineLead: 'Transfer Para Gramado Privativo VIP Sem Paradas',
      socialProofTestimonial: {
        name: 'Rodrigo & Mariana Vasconcelos',
        role: 'Turistas de Belo Horizonte / MG',
        quote: 'Desembarcamos em POA com duas crianças e três malas grandes. O motorista da AG Transfer já nos esperava na saída com uma placa e as duas cadeirinhas perfeitamente instaladas. Chegamos em Gramado descansados e sem estresse. Experiência nota 10!',
        location: 'Aeroporto Salgado Filho (POA) ⇄ Gramado'
      },
      comparisonCompetitorName: 'Ônibus Coletivos de Excursão / Transfers Compartilhados',
      comparisonPoints: [
        { feature: 'Chegada direta ao seu hotel', ag: 'Direto sem desvios para seu hotel ou pousada em Gramado', other: 'Ônibus para em até 15 hotéis diferentes de outros passageiros' },
        { feature: 'Zero tempo de espera no aeroporto', ag: 'Embarque imediato assim que você pega suas malas', other: 'Espera de 1h30 a 2h no terminal aguardando outros voos' },
        { feature: 'Cadeirinha infantil e bebê conforto', ag: 'Inclusas e instaladas gratuitamente sob solicitação prévia', other: 'Raramente oferecidas ou com taxa diária abusiva' },
        { feature: 'Atrasos de voo sem cobrança extra', ag: 'Monitoramento 24h via radar e reagendamento automático', other: 'Você perde a vaga no ônibus e precisa comprar novo bilhete' },
        { feature: 'Espaço garantido para compras de inverno', ag: 'Porta-malas espaçoso para casacos, chocolates e vinhos', other: 'Bagageiro lotado e restrições de peso ou volume' }
      ]
    },
    'transfer-para-canela': {
      benefitBadge: 'Conexão Direta Aeroportos POA / CXJ · Pousadas & Charme de Canela',
      headlineLead: 'Transfer Para Canela Privativo VIP Sem Conexões',
      socialProofTestimonial: {
        name: 'Fernanda & Lucas Peixoto',
        role: 'Hóspedes em Canela / RJ',
        quote: 'Ficamos hospedados em uma pousada na rota da Cascata do Caracol em Canela. Todos os transfers convencionais queriam nos deixar no centro de Gramado ou cobrar taxas adicionais. A AG Transfer nos levou direto para Canela na porta da nossa pousada com pontualidade impecável!',
        location: 'Aeroporto POA ⇄ Canela (Cascata do Caracol)'
      },
      comparisonCompetitorName: 'Transfers que Param em Gramado / Ônibus de Linha',
      comparisonPoints: [
        { feature: 'Trajeto 100% direto para Canela', ag: 'Chegue até 1 hora mais rápido sem desembarques em Gramado', other: 'Você precisa esperar todos os passageiros de Gramado descerem' },
        { feature: 'Atendimento em todas as pousadas e chalés', ag: 'Porta a porta em qualquer ponto de Canela e região do Caracol', other: 'Restrito a hotéis convencionais da avenida central' },
        { feature: 'Parada fotográfica na Catedral de Pedra', ag: 'Flexibilidade para registrar fotos na chegada ou partida', other: 'Zero flexibilidade, horários engessados de transporte coletivo' },
        { feature: 'Conforto nas curvas da serra', ag: 'Veículo executivo premium com condução suave e segura', other: 'Ônibus balançando nas curvas sinuosas da serra gaúcha' },
        { feature: 'Retorno com horário personalizado', ag: 'Calculado com folga exata para seu check-in aéreo', other: 'Exigem saída 5 a 6 horas antes do seu voo' }
      ]
    },
    'transporte-executivo-gramado': {
      benefitBadge: 'Chauffeur Particular VIP · Alta Gastronomia, Serra Park & Eventos',
      headlineLead: 'Transporte Executivo em Gramado & Serra Gaúcha',
      socialProofTestimonial: {
        name: 'Guilherme Sampaio',
        role: 'Empresário & Expositor no Serra Park',
        quote: 'Contratei o transporte executivo da AG Transfer durante a semana de eventos no Serra Park e para os jantares de fondue com clientes à noite. Em dias de frio e chuva, ter o carro aquecido nos esperando na porta de cada restaurante fez toda a diferença.',
        location: 'Gramado & Canela · Circuito Gastronômico e Corporativo'
      },
      comparisonCompetitorName: 'Carros de Aplicativo (Uber/99) / Táxis Convencionais',
      comparisonPoints: [
        { feature: 'Disponibilidade garantida em noites de chuva/frio', ag: 'Hora marcada com veículo e motorista 100% confirmados', other: 'Cancelamentos em série e espera de até 40 min na chuva' },
        { feature: 'Tarifa fixa e transparente', ag: 'Preço justo acordado previamente sem surpresas', other: 'Tarifa dinâmica abusiva em feriados, inverno e Natal Luz' },
        { feature: 'Padrão executivo dos veículos', ag: 'Sedans, SUVs e Vans novos, climatizados e higienizados', other: 'Veículos compactos, desgastados e sem isolamento térmico' },
        { feature: 'Espera dedicada na porta do restaurante', ag: 'Chauffeur aguarda a finalização do seu jantar com conforto', other: 'Você sai do restaurante e fica no frio procurando carro' },
        { feature: 'Discrição e motorista em traje social', ag: 'Postura impecável e sigilo para conversas de negócios', other: 'Motoristas desconhecidos sem preparo para atendimento VIP' }
      ]
    },
    'transfer-porto-alegre-gramado': {
      benefitBadge: 'Receptivo Aeroporto Salgado Filho · Subida Segura da Serra',
      headlineLead: 'Transfer Executivo Porto Alegre ⇄ Gramado e Canela VIP',
      socialProofTestimonial: {
        name: 'Camila Guimarães',
        role: 'Turista de São Paulo / SP',
        quote: 'Contratamos o transfer de Porto Alegre direto para o hotel em Gramado. O motorista estava nos aguardando com uma placa no desembarque de POA, nos ajudou com as malas volumosas e a subida da serra foi super tranquila. Nem se compara a ir de ônibus com paradas em vários hotéis!',
        location: 'Aeroporto POA ⇄ Gramado'
      },
      comparisonCompetitorName: 'Transfers Coletivos em Ônibus / Apps Genéricos',
      comparisonPoints: [
        { feature: 'Embarque sem espera e trajeto direto', ag: 'Direto para seu hotel sem parar em hotéis alheios', other: 'Espera de até 2h por outros voos e paradas em 10 hotéis' },
        { feature: 'Monitoramento do prefixo do voo em POA', ag: 'Acompanhamento do voo 24h com tolerância sem multa', other: 'Se o voo atrasar você perde o ônibus e paga nova passagem' },
        { feature: 'Receptivo no portão de desembarque', ag: 'Chauffeur com placa executiva e auxílio com bagagens', other: 'Você precisa caminhar até o estacionamento externo com malas' },
        { feature: 'Conforto e espaço para compras e casacos', ag: 'Veículos novos e climatizados (Sedan, SUV ou Van VIP)', other: 'Assentos apertados de transporte coletivo' },
        { feature: 'Flexibilidade de horário de retorno', ag: 'Agendamento no horário exato para o seu check-in', other: 'Horários fixos obrigando você a sair 5h antes do voo' }
      ]
    },
    'tour-vale-dos-vinhedos': {
      benefitBadge: 'Enoturismo Seguro · Bento Gonçalves, Garibaldi & Monte Belo',
      headlineLead: 'Tour Privativo Vale dos Vinhedos & Bento Gonçalves',
      socialProofTestimonial: {
        name: 'Fabrício e Larissa Guimarães',
        role: 'Confraria do Vinho SP',
        quote: 'Fizemos o roteiro das vinícolas em Bento Gonçalves com o chauffeur da AG Transfer. Poder degustar os melhores vinhos da Miolo e Casa Valduga sem preocupação com volante e Lei Seca foi a melhor escolha. Motorista super atencioso com as compras!',
        location: 'Vale dos Vinhedos · Bento Gonçalves'
      },
      comparisonCompetitorName: 'Excursões em Ônibus / Aluguel de Carro Comum',
      comparisonPoints: [
        { feature: 'Liberdade total para degustar vinhos e espumantes', ag: 'Total: motorista experiente conduz com segurança', other: 'Risco de multas graves na Lei Seca ou restrição para beber' },
        { feature: 'Flexibilidade no tempo de cada parada', ag: '100% no seu ritmo, sem correria de grupos', other: 'Horários rígidos de excursão com grupos desconhecidos' },
        { feature: 'Condução em curvas sinuosas de serra', ag: 'Motorista habilitado e acostumado ao relevo serrano', other: 'Cansaço e insegurança dirigindo em neblina ou serra à noite' },
        { feature: 'Espaço seguro para caixas de vinho', ag: 'Porta-malas amplo e climatizado para compras', other: 'Espaço limitado ou compartilhado com outros passageiros' },
        { feature: 'Privacidade exclusiva para casal ou família', ag: 'Veículo 100% privativo sem estranhos a bordo', other: 'Vans e ônibus cheios de turistas desconhecidos' }
      ]
    },
    'tour-gramado-canela': {
      benefitBadge: 'Roteiro Exclusivo VIP · Gramado, Canela & Atrações',
      headlineLead: 'Tour Privativo Gramado & Canela VIP no Seu Ritmo',
      socialProofTestimonial: {
        name: 'Juliana Bertolucci',
        role: 'Família em Férias na Serra',
        quote: 'Contratamos a diária com a AG Transfer para fazer Lago Negro, Cascata do Caracol e Skyglass. O motorista sabia exatamente a melhor ordem dos passeios para não pegar filas. Com duas crianças pequenas, essa comodidade foi indispensável!',
        location: 'Gramado & Canela'
      },
      comparisonCompetitorName: 'Excursões Coletivas / Táxi de Ponto',
      comparisonPoints: [
        { feature: 'Roteiro customizado para sua família', ag: 'Você escolhe as atrações que deseja visitar', other: 'Paradas obrigatórias em lojas parceiras de excursão' },
        { feature: 'Tempo livre em cada ponto turístico', ag: 'Fique o tempo que quiser sem pressa', other: 'Tempo cronometrado em grupos de 40 pessoas' },
        { feature: 'Espera garantida na saída dos parques', ag: 'Carro refrigerado e chauffeur aguardando na porta', other: 'Dificuldade para conseguir carros de app em parques afastados' },
        { feature: 'Atendimento noturno para jantares e fondue', ag: 'Transporte seguro para Noite Gaúcha e Natal Luz', other: 'Filas enormes de táxi na chuva nas noites de Gramado' },
        { feature: 'Conhecimento local da serra', ag: 'Dicas de rotas alternativas e mirantes secretos', other: 'Motoristas desinformados ou dependentes de GPS confuso' }
      ]
    },
    'transfer-aeroporto-cxj-caxias': {
      benefitBadge: 'Conexão Aérea Expressa · Aeroporto Hugo Cantergiani (CXJ)',
      headlineLead: 'Transfer Aeroporto de Caxias do Sul (CXJ) ⇄ Serra Gaúcha',
      socialProofTestimonial: {
        name: 'Dr. Ricardo Silveira',
        role: 'Empresário & Palestrante',
        quote: 'Pousamos no Aeroporto de Caxias do Sul (CXJ) e em pouco mais de 1 hora já estávamos no hotel em Gramado. O motorista da AG Transfer já estava com o carro a postos no desembarque. A rota por CXJ é a mais rápida para a Serra Gaúcha!',
        location: 'Aeroporto CXJ ⇄ Gramado e Bento'
      },
      comparisonCompetitorName: 'Aplicativos & Táxis Comuns de Aeroporto',
      comparisonPoints: [
        { feature: 'Agendamento garantido com antecedência', ag: 'Carro e motorista confirmados antes da sua decolagem', other: 'Risco alto de falta de motoristas disponíveis em voos noturnos' },
        { feature: 'Monitoramento de voos no Aeroporto CXJ', ag: 'Acompanhamento do prefixo pelo radar de Caxias do Sul', other: 'Sem controle de pouso ou tolerância para neblina/atrasos' },
        { feature: 'Receptivo executivo com identificação', ag: 'Placa discreta no terminal e auxílio imediato com malas', other: 'Sem assistência e necessidade de buscar veículos na rua' },
        { feature: 'Veículos seguros para as curvas da RS-235 e RS-453', ag: 'Sedans, SUVs e Vans revisados com seguro integral APP', other: 'Veículos pequenos sem garantia mecânica para serra' },
        { feature: 'Faturamento facilitado para empresas', ag: 'Emissão ágil de Nota Fiscal eletrônica com CNPJ', other: 'Comprovantes manuais de difícil prestação de contas' }
      ]
    },
    'viagens-corporativas-serra': {
      benefitBadge: 'Mobilidade Corporativa B2B · Padrão Indústria & Negócios',
      headlineLead: 'Transporte Corporativo & Feiras na Serra Gaúcha (B2B)',
      socialProofTestimonial: {
        name: 'Dr. Marcelo Castilhos',
        role: 'Diretor de Relações Institucionais',
        quote: 'Utilizamos a AG Transfer para transportar clientes internacionais durante a Mercopar e visitas fabris em Caxias e Bento Gonçalves. Pontualidade impecável, motoristas de terno e faturamento descomplicado com Nota Fiscal quinzenal.',
        location: 'Polo Industrial de Caxias do Sul'
      },
      comparisonCompetitorName: 'Transporte Não Especializado',
      comparisonPoints: [
        { feature: 'Sigilo profissional para reuniões a bordo', ag: 'Garantido com isolamento acústico e Chauffeur discreto', other: 'Sem garantia de privacidade para ligações sigilosas' },
        { feature: 'Conformidade fiscal e Nota Fiscal', ag: 'Faturamento quinzenal ou mensal via CNPJ (NFS-e)', other: 'Dificuldade de conciliação fiscal e comprovantes inadequados' },
        { feature: 'Pontualidade para agendas e reuniões', ag: 'Tolerância zero para atrasos com rotas antecipadas', other: 'Atrasos frequentes sem gestão de rota corporativa' },
        { feature: 'Conectividade e ambiente de trabalho', ag: 'Wi-Fi de alta estabilidade e carregadores multiportas', other: 'Sem estrutura adequada para notebooks a bordo' },
        { feature: 'Gestor de conta corporativo 24h', ag: 'Central dedicada com atendimento imediato', other: 'Atendimento por robôs em plataformas genéricas' }
      ]
    },
    'motorista-particular-diaria': {
      benefitBadge: 'Chauffeur Dedicado · Por Hora ou Diária Integral',
      headlineLead: 'Motorista Particular por Diária na Serra Gaúcha 24h',
      socialProofTestimonial: {
        name: 'Eduardo Fagundes',
        role: 'Diretor Comercial Regional',
        quote: 'Precisei fazer 5 reuniões no mesmo dia entre Bento Gonçalves, Farroupilha e Gramado. O motorista esteve de prontidão o dia todo na porta das empresas. Ganhei horas preciosas revisando propostas no banco de trás.',
        location: 'Serra Gaúcha'
      },
      comparisonCompetitorName: 'Aluguel Convencional sem Motorista',
      comparisonPoints: [
        { feature: 'Aproveitamento do tempo a bordo', ag: 'Trabalhe, descanse ou faça chamadas com tranquilidade', other: 'Você perde todo o tempo concentrado no trânsito e procurando vagas' },
        { feature: 'Espera contínua na porta do compromisso', ag: 'Carro refrigerado e motorista a postos para partir', other: 'Necessidade de estacionar longe ou pagar estacionamentos caros' },
        { feature: 'Alterações de itinerário em tempo real', ag: 'Flexibilidade total: decida a próxima parada na hora', other: 'Estresse com trânsito e rotas desconhecidas' },
        { feature: 'Conforto e requinte executivo', ag: 'Veículo premium de padrão executivo higienizado', other: 'Carros básicos de locadora com burocracia de retirada' },
        { feature: 'Sem preocupação com caução ou franquia de seguro', ag: 'Tudo incluso no pacote contratado sem surpresas', other: 'Bloqueios altos no cartão de crédito e risco de avarias' }
      ]
    }
  };

  const currentHighlight = serviceHighlights[service.slug] || serviceHighlights['transfer-porto-alegre-gramado'];
  const otherServices = SERVICES.filter((s) => s.id !== service.id);

  const serviceUrl = `https://ag-transfer.vercel.app/servicos/${service.slug}`;
  const serviceSchemaGraph = [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Início',
          item: 'https://ag-transfer.vercel.app/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Serviços',
          item: 'https://ag-transfer.vercel.app/#servicos',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: service.title,
          item: serviceUrl,
        },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${serviceUrl}#service`,
      name: service.title,
      description: service.metaDescription,
      url: serviceUrl,
      serviceType: 'Transporte Executivo e Transfer Privativo',
      provider: {
        '@type': 'TaxiService',
        name: COMPANY_NAP.name,
        alternateName: COMPANY_NAP.shortName,
        url: 'https://ag-transfer.vercel.app/',
        logo: 'https://ag-transfer.vercel.app/logo.png',
        image: 'https://ag-transfer.vercel.app/logo.png',
        telephone: COMPANY_NAP.phoneRaw,
      },
      areaServed: CITIES_SERVED.map((c) => ({
        '@type': 'City',
        name: c.name,
      })),
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        reviewCount: '200',
        bestRating: '5',
        worstRating: '1',
      },
    },
    ...(service.serviceFaq && service.serviceFaq.length > 0
      ? [
          {
            '@type': 'FAQPage',
            mainEntity: service.serviceFaq.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          },
        ]
      : []),
  ];

  return (
    <div className="pt-24 pb-20 bg-[#F8FAFC]">
      {/* Centralized SEO & Meta tags with Official Logo */}
      <SEOHead
        title={service.metaTitle}
        description={service.metaDescription}
        canonicalUrl={serviceUrl}
        keywords={[
          service.title,
          service.subtitle,
          'transfer serra gaucha',
          'transporte executivo gramado',
          'transfer canela',
          'transfer aeroporto poa',
          'transfer caxias do sul cxj',
          'ag transfer',
        ]}
        geoPlaceName="Serra Gaúcha"
        geoPosition={COMPANY_NAP.geoCoordinates}
        schemaGraph={serviceSchemaGraph}
      />
      
      {/* 1. Urgency & Trust Top Strip (Conversion Hook) */}
      <div className="bg-gradient-to-r from-[#0D0A27] via-[#0A2540] to-[#0284C7] text-white py-2 px-4 text-center text-xs font-semibold">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 sm:gap-4 flex-wrap">
          <span className="flex items-center gap-1.5 text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-bold">Plantão 24 Horas Ativo</span>
          </span>
          <span className="hidden sm:inline text-slate-400">|</span>
          <span className="text-slate-200">Tempo médio de resposta no WhatsApp: <strong>menos de 2 minutos</strong></span>
          <span className="hidden sm:inline text-slate-400">|</span>
          <a
            href={buildWhatsAppUrl({ service: service.title })}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#38BDF8] hover:text-white underline font-bold"
          >
            Falar com Atendente Agora →
          </a>
        </div>
      </div>

      {/* 2. Breadcrumb Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-xs font-semibold text-slate-500">
        <ol className="flex items-center gap-2 flex-wrap">
          <li className="flex items-center gap-1.5">
            <BrandLogo size="xs" />
            <Link to="/" className="hover:text-[#0284C7] transition-colors">Início</Link>
          </li>
          <li><ChevronRight className="w-3.5 h-3.5 text-slate-400" /></li>
          <li><a href="/#servicos" className="hover:text-[#0284C7] transition-colors">Serviços Executivos</a></li>
          <li><ChevronRight className="w-3.5 h-3.5 text-slate-400" /></li>
          <li className="text-[#0D0A27] font-bold" aria-current="page">{service.title}</li>
        </ol>
      </nav>

      {/* 3. Hero Section: Direct Conversion Focus */}
      <section className="relative overflow-hidden pt-4 pb-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Strong Headline & Conversion Hook */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Brand Logo & Verification Badge */}
              <div className="flex flex-wrap items-center gap-3">
                <BrandLogo size="sm" showText={true} subtext="Serviço Executivo Homologado" />
                <div className="h-5 w-px bg-slate-200 hidden sm:block" />
                <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#0284C7]" />
                  Atendimento 24 Horas
                </span>
              </div>

              {/* E-E-A-T Badges */}
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-600">
                <span className="bg-sky-50 text-[#0284C7] px-3 py-1 rounded-full border border-sky-200 font-bold uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3" />
                  {currentHighlight.benefitBadge}
                </span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <a
                  href={COMPANY_NAP.gbpUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[#0284C7] font-bold hover:underline"
                >
                  <Star className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]" />
                  <span>5.0 no Google (+200 avaliações)</span>
                </a>
              </div>

              {/* Specific SEO H1 */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0D0A27] tracking-tight leading-[1.15]">
                {currentHighlight.headlineLead}
              </h1>

              {/* Subtitle with Clear Value Proposition */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed text-pretty">
                {service.fullDescription}
              </p>

              {/* Primary Call-to-Action Bar */}
              <div className="pt-2 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
                <a
                  href={buildWhatsAppUrl({
                    service: `Solicitação de Cotação: ${service.title}`,
                    origin: 'Caxias do Sul / Serra Gaúcha',
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 hover:brightness-110 text-white font-extrabold text-sm uppercase tracking-wider shadow-[0_8px_25px_rgba(16,185,129,0.35)] transition-all active:scale-[0.98] text-center overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out pointer-events-none" />
                  <MessageCircle className="w-5 h-5 relative z-10 fill-white text-emerald-600" />
                  <span className="relative z-10">Solicitar Cotação no WhatsApp</span>
                </a>

                <button
                  onClick={() => onOpenQuoteModal(service.title)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl border border-slate-300 hover:border-[#0284C7] text-slate-800 hover:text-[#0284C7] font-bold text-xs uppercase tracking-wider transition-all bg-slate-50 hover:bg-white shadow-xs"
                >
                  <Phone className="w-4 h-4 text-[#0284C7]" />
                  <span>Formulário Completo</span>
                </button>
              </div>

              {/* Conversion Guarantees Strip */}
              <div className="pt-4 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                <div>
                  <span className="block font-extrabold text-[#0D0A27] text-base">Tolerância Zero</span>
                  <span className="text-slate-500">Para atrasos operacionais</span>
                </div>
                <div>
                  <span className="block font-extrabold text-[#0D0A27] text-base">Veículo Garantido</span>
                  <span className="text-slate-500">Ou upgrade sem custo</span>
                </div>
                <div>
                  <span className="block font-extrabold text-[#0D0A27] text-base">Seguro Total</span>
                  <span className="text-slate-500">Cobertura APP passageiros</span>
                </div>
                <div>
                  <span className="block font-extrabold text-[#0D0A27] text-base">NFS-e & PJ</span>
                  <span className="text-slate-500">Faturamento facilitado</span>
                </div>
              </div>

            </div>

            {/* Right Column: 3D Interactive Fast Simulator */}
            <div className="lg:col-span-5" style={{ perspective: 1000 }}>
              <motion.div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                className="bg-white/95 backdrop-blur-2xl border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-[0_20px_50px_rgba(15,23,42,0.1)] relative overflow-hidden transition-shadow duration-300 hover:shadow-[0_25px_60px_rgba(2,132,199,0.16)]"
              >
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0D0A27] via-[#0284C7] to-[#38BDF8]" />
                
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0284C7] block mb-0.5 flex items-center gap-1">
                      <Zap className="w-3.5 h-3.5" />
                      Cotação Imediata 24h
                    </span>
                    <h3 className="text-lg font-extrabold text-[#0D0A27]">
                      Simular {service.title}
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-[#0284C7] shadow-xs">
                    {getServiceIcon(service.icon)}
                  </div>
                </div>

                <form onSubmit={handleSimulatorSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#0284C7]" />
                      Local de Embarque (Origem)
                    </label>
                    <input
                      type="text"
                      value={origin}
                      onChange={(e) => setOrigin(e.target.value)}
                      placeholder="Ex: Caxias do Sul (Hotel, Empresa, Aeroporto)"
                      required
                      className="w-full bg-slate-50 border border-slate-200 focus:bg-white rounded-lg px-3 py-2 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:border-[#0284C7] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#0369A1]" />
                      Destino Desejado
                    </label>
                    <input
                      type="text"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      placeholder="Ex: Aeroporto Salgado Filho (POA) / Gramado"
                      required
                      className="w-full bg-slate-50 border border-slate-200 focus:bg-white rounded-lg px-3 py-2 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:border-[#0284C7] focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#0284C7]" />
                        Data / Horário
                      </label>
                      <input
                        type="text"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        placeholder="Ex: 24/11 às 07:00"
                        className="w-full bg-slate-50 border border-slate-200 focus:bg-white rounded-lg px-3 py-2 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:border-[#0284C7] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-[#0284C7]" />
                        Passageiros
                      </label>
                      <select
                        value={passengers}
                        onChange={(e) => setPassengers(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 focus:bg-white rounded-lg px-3 py-2 text-xs sm:text-sm text-slate-800 focus:border-[#0284C7] focus:outline-none transition-colors"
                      >
                        <option value="1 a 3 passageiros (Sedan Executivo)">1 a 3 (Sedan)</option>
                        <option value="4 a 6 passageiros (SUV Premium)">4 a 6 (SUV)</option>
                        <option value="7 a 15 passageiros (Van VIP)">7 a 15 (Van VIP)</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#0D0A27] via-[#0A2540] to-[#0284C7] hover:brightness-110 text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md cursor-pointer active:scale-[0.98]"
                  >
                    <Send className="w-4 h-4 text-[#38BDF8]" />
                    <span>Enviar Cotação pelo WhatsApp 24h</span>
                  </button>

                  <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1 font-medium">
                    <span>Atendimento oficial 24 Horas</span>
                    <a
                      href={COMPANY_NAP.gbpUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0284C7] hover:underline font-semibold"
                    >
                      +200 avaliações no GBP
                    </a>
                  </div>
                </form>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Social Proof Spotlight: Real Verified Testimonial for this specific service */}
      <section className="py-12 bg-sky-50/60 border-b border-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-6 sm:p-8 border border-sky-200/80 shadow-sm flex flex-col md:flex-row items-center gap-6">
            <div className="w-14 h-14 rounded-2xl bg-[#0D0A27] text-white flex items-center justify-center shrink-0 shadow-md">
              <Star className="w-7 h-7 fill-[#F59E0B] text-[#F59E0B]" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-1 text-[#F59E0B] mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#F59E0B]" />
                ))}
                <span className="text-xs font-bold text-slate-700 ml-2">Avaliação Verificada no Google Business Profile</span>
              </div>
              <p className="text-sm sm:text-base text-slate-700 italic leading-relaxed mb-3">
                "{currentHighlight.socialProofTestimonial.quote}"
              </p>
              <div className="text-xs font-bold text-[#0D0A27]">
                {currentHighlight.socialProofTestimonial.name} ·{' '}
                <span className="text-slate-500 font-medium">{currentHighlight.socialProofTestimonial.role}</span>
                <span className="block text-[11px] text-[#0284C7] font-semibold mt-0.5">
                  Rota realizada: {currentHighlight.socialProofTestimonial.location}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 3-Step Simple Booking Flow */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest text-[#0284C7] uppercase block mb-1">
              Simples, Rápido e Seguro
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0D0A27]">
              Como Funciona a Contratação de {service.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-6 relative">
              <span className="text-3xl font-extrabold text-[#0284C7] font-mono block mb-2">01</span>
              <h3 className="text-base font-bold text-[#0D0A27] mb-2">Envie seu Itinerário</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Informe local de partida, destino, número de passageiros e horário desejado pelo WhatsApp ou simulador.
              </p>
            </div>

            <div className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-6 relative">
              <span className="text-3xl font-extrabold text-[#0284C7] font-mono block mb-2">02</span>
              <h3 className="text-base font-bold text-[#0D0A27] mb-2">Confirmação Imediata</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Nossa central valida a disponibilidade do veículo, confirma a rota e envia os dados do motorista.
              </p>
            </div>

            <div className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-6 relative">
              <span className="text-3xl font-extrabold text-[#0284C7] font-mono block mb-2">03</span>
              <h3 className="text-base font-bold text-[#0D0A27] mb-2">Embarque com Tranquilidade</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                O chauffeur estará no local no horário combinado, com carro climatizado e seguro integral para sua viagem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Comparison Table: AG Transfer vs Alternativas */}
      <section className="py-16 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-bold tracking-widest text-[#0284C7] uppercase block mb-1">
              Garantia de Qualidade
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0D0A27]">
              Por Que Escolher a AG Transfer para {service.title}?
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Compare a segurança e previsibilidade do nosso serviço executivo frente a alternativas convencionais:
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-slate-700">
                    <th className="p-4 font-bold">Critério Operacional</th>
                    <th className="p-4 font-extrabold text-[#0284C7] bg-sky-50/60">AG Transfer Executivo</th>
                    <th className="p-4 font-medium text-slate-500">{currentHighlight.comparisonCompetitorName}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {currentHighlight.comparisonPoints.map((point, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                      <td className="p-4 font-semibold text-[#0D0A27]">
                        {point.feature}
                      </td>
                      <td className="p-4 bg-sky-50/30 text-slate-800 font-bold">
                        <div className="flex items-start gap-1.5">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{point.ag}</span>
                        </div>
                      </td>
                      <td className="p-4 text-slate-500">
                        <div className="flex items-start gap-1.5">
                          <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                          <span>{point.other}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Benefits & Included Amenities */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#F8FAFC] p-7 sm:p-8 rounded-2xl border border-slate-200">
              <div className="flex items-center gap-2 mb-4 text-[#0284C7]">
                <ShieldCheck className="w-6 h-6" />
                <h3 className="text-xl font-bold text-[#0D0A27]">Diferenciais Inclusos no Serviço</h3>
              </div>
              <ul className="space-y-3 text-sm text-slate-700">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-[#0284C7] shrink-0 mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#F8FAFC] p-7 sm:p-8 rounded-2xl border border-slate-200">
              <div className="flex items-center gap-2 mb-4 text-[#0284C7]">
                <Sparkles className="w-6 h-6" />
                <h3 className="text-xl font-bold text-[#0D0A27]">Comodidades e Conforto a Bordo</h3>
              </div>
              <ul className="space-y-3 text-sm text-slate-700">
                {service.includedAmenities.map((amenity, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                    <span>{amenity}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Common Routes Table with Instant WhatsApp CTAs */}
      {service.commonRoutes && service.commonRoutes.length > 0 && (
        <section className="py-16 bg-[#F8FAFC] border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold tracking-widest text-[#0284C7] uppercase block mb-1">
                Itinerários Frequentes
              </span>
              <h3 className="text-2xl font-extrabold text-[#0D0A27]">
                Rotas Mais Solicitadas em {service.title}
              </h3>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50 text-slate-500 font-bold uppercase text-[11px] tracking-wider">
                      <th className="p-4">Trajeto</th>
                      <th className="p-4">Tempo Estimado</th>
                      <th className="p-4">Distância</th>
                      <th className="p-4">Observações</th>
                      <th className="p-4 text-right">Ação</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {service.commonRoutes.map((route, idx) => (
                      <tr key={idx} className="hover:bg-sky-50/40 transition-colors">
                        <td className="p-4 font-bold text-[#0D0A27]">{route.route}</td>
                        <td className="p-4 font-mono font-semibold text-[#0284C7] whitespace-nowrap">{route.time}</td>
                        <td className="p-4 font-mono text-slate-600 whitespace-nowrap">{route.distance}</td>
                        <td className="p-4 text-xs text-slate-500">{route.details}</td>
                        <td className="p-4 text-right whitespace-nowrap">
                          <a
                            href={buildWhatsAppUrl({
                              service: `${service.title} - ${route.route}`,
                            })}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#0D0A27] hover:bg-[#0284C7] text-white text-xs font-bold transition-all shadow-xs"
                          >
                            <MessageCircle className="w-3.5 h-3.5 text-[#38BDF8]" />
                            <span>Cotar Rota</span>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 9. Suggested Fleet with WhatsApp Booking */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold tracking-widest text-[#0284C7] uppercase block mb-1">
              Veículos Recomendados
            </span>
            <h3 className="text-2xl font-extrabold text-[#0D0A27]">
              Opções de Frota para {service.title}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FLEET_VEHICLES.map((vehicle) => (
              <div
                key={vehicle.id}
                className="bg-[#F8FAFC] border border-slate-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={vehicle.image}
                      alt={vehicle.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute top-2.5 left-2.5 bg-white/95 px-2.5 py-0.5 rounded text-[11px] font-bold text-[#0D0A27]">
                      {vehicle.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h4 className="font-bold text-[#0D0A27] text-base mb-1">{vehicle.name}</h4>
                    <p className="text-xs text-slate-500 mb-3">{vehicle.description}</p>
                    <div className="text-xs font-semibold text-[#0284C7] space-y-1">
                      <div>👥 {vehicle.passengers}</div>
                      <div>🧳 {vehicle.luggage}</div>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <a
                    href={buildWhatsAppUrl({
                      service: `${service.title} com veículo ${vehicle.name}`,
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-[#0D0A27] hover:bg-[#0284C7] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-xs"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#38BDF8]" />
                    <span>Reservar {vehicle.name.split(' ')[0]}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Service-Specific FAQ */}
      {service.serviceFaq && service.serviceFaq.length > 0 && (
        <section className="py-16 bg-[#F8FAFC] border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="text-xs font-bold tracking-widest text-[#0284C7] uppercase block mb-1">
                Tire Suas Dúvidas
              </span>
              <h3 className="text-2xl font-extrabold text-[#0D0A27]">
                Perguntas Frequentes sobre {service.title}
              </h3>
            </div>

            <div className="space-y-3">
              {service.serviceFaq.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div key={idx} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 font-bold text-[#0D0A27] text-sm sm:text-base cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#0284C7] transition-transform ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-4 text-xs sm:text-sm text-slate-600 border-t border-slate-100 pt-2 leading-relaxed">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 11. High-Urgency Bottom Lead Capture Banner */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#0D0A27] via-[#0A2540] to-[#0284C7] rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center lg:text-left max-w-2xl">
              <div className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-bold bg-white/10 px-3 py-1 rounded-full mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Central de Atendimento 24 Horas / 7 Dias</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Pronto para garantir seu {service.title} com pontualidade máxima?
              </h3>
              <p className="text-slate-300 text-sm sm:text-base">
                Fale diretamente com nossa central pelo WhatsApp. Cotações imediatas sem compromisso com resposta em poucos minutos.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
              <a
                href={buildWhatsAppUrl({ service: `Reserva Imediata: ${service.title}` })}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-extrabold text-sm uppercase tracking-wider shadow-lg transition-transform active:scale-95 text-center"
              >
                <MessageCircle className="w-5 h-5 fill-white text-emerald-500" />
                <span>Chamar no WhatsApp 24h</span>
              </a>

              <a
                href={`tel:${COMPANY_NAP.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider transition-colors border border-white/20 text-center"
              >
                <Phone className="w-4 h-4 text-[#38BDF8]" />
                <span>Ligar (54) 99153-7288</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 12. Cross-Linking Navigation to Other Services */}
      <section className="py-12 bg-[#F8FAFC] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h4 className="text-base font-bold text-[#0D0A27] mb-6">
            Outros Serviços Prestados pela AG Transfer:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {otherServices.map((other) => (
              <Link
                key={other.id}
                to={`/servicos/${other.slug}`}
                className="bg-white p-5 rounded-xl border border-slate-200 hover:border-[#0284C7] transition-all shadow-xs group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-[#0284C7]">{other.subtitle}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-[#0284C7] transition-all" />
                </div>
                <h5 className="font-bold text-[#0D0A27] text-sm group-hover:text-[#0284C7] transition-colors">
                  {other.title}
                </h5>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                  {other.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
