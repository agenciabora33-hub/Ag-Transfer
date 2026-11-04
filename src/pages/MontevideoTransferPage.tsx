import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  Trophy,
  Plane,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Users,
  Luggage,
  MapPin,
  ArrowRight,
  ExternalLink,
  MessageCircle,
  Phone,
  FileText,
  AlertTriangle,
  ChevronDown,
  Car,
  ChevronRight,
  Info,
  Sparkles,
  Compass,
  ArrowLeft,
  Check
} from 'lucide-react';
import { BrandLogo } from '../components/BrandLogo';
import { SEOHead } from '../components/SEOHead';
import { COMPANY_NAP } from '../data/companyData';
import { trackEvent } from '../utils/analytics';

interface MontevideoTransferPageProps {
  onOpenQuoteModal?: (serviceTitle?: string) => void;
}

export const MontevideoTransferPage: React.FC<MontevideoTransferPageProps> = () => {
  // --- Form State ---
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    flightDate: '',
    flightTime: '',
    flightNumber: '',
    passengers: '3 a 4 passageiros',
    luggage: '3 a 4 malas médias',
    destination: 'Estádio Centenário / Hotel em Montevidéu',
    needsReturn: 'sim',
    returnDate: '29/11/2026',
    notes: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [generatedWhatsAppUrl, setGeneratedWhatsAppUrl] = useState('');

  // --- Accordion FAQ State ---
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const faqSectionRef = useRef<HTMLDivElement>(null);
  const [hasScrolledFaq, setHasScrolledFaq] = useState(false);

  // --- Countdown to Final: 28/11/2026 17:00 (GMT-3) ---
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const finalDate = new Date('2026-11-28T17:00:00-03:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = finalDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  // Track scroll into FAQ for GA4
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasScrolledFaq) {
          setHasScrolledFaq(true);
          trackEvent('scroll_faq', { section: 'faq_montevideo' });
        }
      },
      { threshold: 0.2 }
    );

    if (faqSectionRef.current) {
      observer.observe(faqSectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasScrolledFaq]);

  // Base pre-filled message required by PRD Section 7.10
  const baseWhatsAppText = encodeURIComponent(
    'Olá! Quero uma cotação de transfer Porto Alegre → Montevidéu. Data: __ · Passageiros: __ · Voo chega às: __.'
  );
  const baseWhatsAppUrl = `https://wa.me/${COMPANY_NAP.phoneRaw}?text=${baseWhatsAppText}`;

  const handleWhatsAppClick = (locationTag: string) => {
    trackEvent('click_whatsapp', {
      source: locationTag,
      page: 'transfer-porto-alegre-montevideu',
    });
  };

  const handlePhoneClick = () => {
    trackEvent('click_phone', {
      source: 'header_or_cta',
      phone: COMPANY_NAP.phoneRaw,
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMessage = [
      '🏆 *SOLICITAÇÃO DE COTAÇÃO: TRANSFER PORTO ALEGRE ➔ MONTEVIDÉU*',
      `*Nome:* ${formData.name}`,
      `*WhatsApp:* ${formData.whatsapp}`,
      `*Data de Chegada em POA:* ${formData.flightDate} às ${formData.flightTime}`,
      `*N° do Voo:* ${formData.flightNumber || 'Não informado / A confirmar'}`,
      `*Passageiros:* ${formData.passengers}`,
      `*Bagagens/Malas:* ${formData.luggage}`,
      `*Destino em Montevidéu:* ${formData.destination}`,
      `*Precisa de Volta:* ${formData.needsReturn === 'sim' ? `Sim (Data: ${formData.returnDate || 'A definir'})` : 'Apenas Ida'}`,
      formData.notes ? `*Observações:* ${formData.notes}` : null,
      '---',
      'Viagem privativa para a Final da Libertadores 2026. Aguardo orçamento e confirmação de disponibilidade!',
    ]
      .filter(Boolean)
      .join('\n');

    const url = `https://wa.me/${COMPANY_NAP.phoneRaw}?text=${encodeURIComponent(formattedMessage)}`;
    setGeneratedWhatsAppUrl(url);
    setFormSubmitted(true);

    trackEvent('form_submit', {
      form_name: 'quote_montevideo_transfer',
      passengers: formData.passengers,
      needs_return: formData.needsReturn,
    });

    // Automatically open WhatsApp in new tab
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // FAQ Items from PRD Section 7.8
  const faqItems = [
    {
      q: 'Quanto custa o transfer de Porto Alegre a Montevidéu?',
      a: 'O valor do transfer privativo é calculado com preço fechado por veículo (não por assento), variando conforme a categoria escolhida (Carro Executivo, SUV ou Van Executiva), o número de passageiros e se inclui o retorno. Esse formato é ideal para grupos de amigos ou famílias dividirem o custo. Peça sua cotação personalizada sem compromisso pelo WhatsApp.',
    },
    {
      q: 'Quanto tempo dura a viagem de Porto Alegre a Montevidéu?',
      a: 'A rota totaliza cerca de 800 a 850 km e leva entre 10 e 12 horas de estrada, mais o tempo de passagem pela aduana de fronteira (via Jaguarão/Rio Branco ou via Chuí). Fazemos paradas técnicas em locais seguros e confortáveis para alimentação e descanso.',
    },
    {
      q: 'Vocês buscam diretamente no Aeroporto Salgado Filho (POA)?',
      a: 'Sim! Nosso motorista profissional aguarda você no saguão de desembarque do Aeroporto Internacional Salgado Filho (POA) com identificação visual discreta, prestando assistência com as malas desde o primeiro minuto.',
    },
    {
      q: 'Dá tempo de chegar para a final se eu pousar na manhã de 28/11?',
      a: 'Recomendamos cautela redobrada. Como a partida no Estádio Centenário inicia às 17h e a viagem dura de 10 a 12 horas, somada ao fluxo migratório de fronteira, pousar na manhã do dia 28/11 apresenta risco severo de atraso. O ideal é desembarcar em Porto Alegre com antecedência (dias 26 ou 27/11). Fale com nossa equipe para planejar o horário seguro de partida.',
    },
    {
      q: 'Vocês realizam o transfer de volta para Porto Alegre após o jogo?',
      a: 'Sim! Oferecemos opções completas de ida e volta. Você pode optar pelo retorno na madrugada imediatamente após a partida ou agendar o embarque no dia 29/11 pela manhã para retornar descansado.',
    },
    {
      q: 'Posso levar bagagem? Qual o limite?',
      a: 'Sim, a capacidade varia por veículo: Sedans comportam até 3 malas médias, SUVs até 4 a 5 malas e Vans executivas contam com amplo porta-malas para até 15 passageiros. Informe a quantidade de bagagem ao solicitar sua cotação para alocarmos o veículo perfeito.',
    },
    {
      q: 'Que documentos são obrigatórios para cruzar a fronteira com o Uruguai?',
      a: 'Cidadãos brasileiros devem portar RG original em bom estado emitido nos últimos 10 anos OU Passaporte válido (regras do Mercosul). Atenção: a CNH (física ou digital) NÃO é aceita pelas autoridades migratórias uruguaias para cruzar a fronteira. Menores desacompanhados de um ou ambos os pais necessitam de autorização judicial/cartorial conforme normas da Polícia Federal.',
    },
    {
      q: 'Como confirmo a reserva do transfer?',
      a: 'O processo é 100% transparente: você nos envia os detalhes do seu voo e grupo, a AG Transfer emite a cotação formal e o contrato por escrito com os horários confirmados, garantindo a sua tranquilidade para o evento.',
    },
    {
      q: 'Posso dividir o valor entre amigos ou familiares?',
      a: 'Com certeza! Como o valor é fechado por veículo, você e seu grupo podem dividir o valor entre si, tornando a viagem em Van ou SUV muito mais econômica, ágil e privativa do que conexões aéreas ou ônibus regulares.',
    },
  ];

  // Schema Graph (Service, FAQPage, BreadcrumbList) as requested in PRD Section 8
  const montevideoSchemaGraph = [
    {
      '@type': 'Service',
      '@id': 'https://ag-transfer.vercel.app/transfer-porto-alegre-montevideu#service',
      name: 'Transfer Porto Alegre para Montevidéu - Final Libertadores 2026',
      serviceType: 'Transfer Executivo Internacional',
      description:
        'Transfer privativo e transporte executivo do Aeroporto Internacional Salgado Filho (POA) direto para Montevidéu (Estádio Centenário). Frotas de sedans, SUVs e vans com motorista profissional.',
      provider: {
        '@type': 'LocalBusiness',
        name: COMPANY_NAP.name,
        telephone: COMPANY_NAP.phoneRaw,
        image: 'https://ag-transfer.vercel.app/logo.png',
        url: 'https://ag-transfer.vercel.app/',
        address: {
          '@type': 'PostalAddress',
          streetAddress: COMPANY_NAP.address,
          addressLocality: COMPANY_NAP.city,
          addressRegion: COMPANY_NAP.state,
          postalCode: COMPANY_NAP.zip,
          addressCountry: 'BR',
        },
      },
      areaServed: [
        {
          '@type': 'City',
          name: 'Porto Alegre',
          sameAs: 'https://pt.wikipedia.org/wiki/Porto_Alegre',
        },
        {
          '@type': 'City',
          name: 'Montevidéu',
          sameAs: 'https://pt.wikipedia.org/wiki/Montevid%C3%A9u',
        },
      ],
      offers: {
        '@type': 'Offer',
        priceCurrency: 'BRL',
        availability: 'https://schema.org/InStock',
        description: 'Preço fechado por veículo sob consulta com confirmação por escrito.',
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://ag-transfer.vercel.app/transfer-porto-alegre-montevideu#faq',
      mainEntity: faqItems.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.a,
        },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://ag-transfer.vercel.app/transfer-porto-alegre-montevideu#breadcrumb',
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
          name: 'Transfer Porto Alegre a Montevidéu',
          item: 'https://ag-transfer.vercel.app/transfer-porto-alegre-montevideu',
        },
      ],
    },
  ];

  return (
    <>
      <SEOHead
        title="Transfer Porto Alegre Montevidéu | Final Libertadores 2026"
        description="Transfer privativo do aeroporto de Porto Alegre a Montevidéu. Van e carro executivo, atendimento 24h. Peça sua cotação no WhatsApp."
        canonicalUrl="https://ag-transfer.vercel.app/transfer-porto-alegre-montevideu"
        keywords={[
          'transfer porto alegre montevideu',
          'transfer aeroporto porto alegre montevideu',
          'traslado porto alegre montevideu',
          'transfer final libertadores montevideu',
          'como ir de porto alegre para montevideu final libertadores',
          'van porto alegre montevideu',
          'transporte torcedor palmeiras montevideu',
          'transfer privativo porto alegre uruguai',
          'estadio centenario transfer porto alegre',
        ]}
        ogType="website"
        geoPlaceName="Porto Alegre"
        geoPosition={{ lat: -30.0277, lng: -51.2287 }}
        schemaGraph={montevideoSchemaGraph}
      />

      <div className="pt-20 sm:pt-24 pb-20 bg-[#F8FAFC]">
        {/* Navigation Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <Link to="/" className="hover:text-[#0284C7] transition-colors flex items-center gap-1">
              <span>Início</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-800 font-semibold truncate">
              Transfer Porto Alegre ➔ Montevidéu (Final Libertadores)
            </span>
          </nav>
        </div>

        {/* ============================================================ */}
        {/* SECTION 1: HERO */}
        {/* ============================================================ */}
        <section className="relative overflow-hidden pt-6 pb-16 sm:pb-20">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0284C7]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 left-0 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column: Copy & Urgency */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Event Pill & Countdown */}
                <div className="inline-flex flex-wrap items-center gap-2 p-1.5 pr-4 rounded-2xl bg-amber-50 border border-amber-200/80 shadow-xs">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-amber-500 text-white text-[11px] font-black uppercase tracking-wider">
                    <Trophy className="w-3.5 h-3.5" />
                    Final Libertadores 2026
                  </span>
                  <span className="text-xs font-bold text-amber-900">
                    28/11/2026 às 17h &bull; Estádio Centenário
                  </span>
                </div>

                {/* Main H1 */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0D0A27] tracking-tight leading-[1.15]">
                  Transfer de Porto Alegre a Montevidéu:{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] to-[#0A2540]">
                    do aeroporto ao Estádio Centenário
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                  Transfer privativo, com motorista profissional, saindo do Aeroporto Salgado Filho direto para Montevidéu. Ideal para quem vai assistir à final da Libertadores no dia 28/11.
                </p>

                {/* Live Countdown Component */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm max-w-lg">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center justify-between">
                    <span>Contagem Regressiva para a Grande Final</span>
                    <span className="text-emerald-600 flex items-center gap-1 text-[11px] font-semibold">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                      Reservas Abertas
                    </span>
                  </div>
                  <div className="grid grid-cols-4 gap-2 text-center">
                    <div className="p-2 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="text-2xl sm:text-3xl font-extrabold text-[#0D0A27] font-mono tabular-nums">
                        {timeLeft.days}
                      </div>
                      <div className="text-[10px] uppercase font-bold text-slate-400">Dias</div>
                    </div>
                    <div className="p-2 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="text-2xl sm:text-3xl font-extrabold text-[#0D0A27] font-mono tabular-nums">
                        {timeLeft.hours}
                      </div>
                      <div className="text-[10px] uppercase font-bold text-slate-400">Horas</div>
                    </div>
                    <div className="p-2 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="text-2xl sm:text-3xl font-extrabold text-[#0D0A27] font-mono tabular-nums">
                        {timeLeft.minutes}
                      </div>
                      <div className="text-[10px] uppercase font-bold text-slate-400">Min</div>
                    </div>
                    <div className="p-2 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="text-2xl sm:text-3xl font-extrabold text-[#0284C7] font-mono tabular-nums">
                        {timeLeft.seconds}
                      </div>
                      <div className="text-[10px] uppercase font-bold text-slate-400">Seg</div>
                    </div>
                  </div>
                </div>

                {/* CTA Action Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                  <a
                    href={baseWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleWhatsAppClick('hero_primary')}
                    className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm uppercase tracking-wider shadow-lg hover:shadow-xl transition-all cursor-pointer group"
                  >
                    <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span>Pedir Cotação no WhatsApp</span>
                  </a>

                  <a
                    href="#formulario-cotacao"
                    className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm uppercase tracking-wider border border-slate-200 shadow-sm transition-all"
                  >
                    <FileText className="w-4 h-4 text-[#0284C7]" />
                    <span>Preencher o Formulário</span>
                  </a>
                </div>

                {/* Trust Badges */}
                <div className="pt-4 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#0284C7] shrink-0" />
                    <span>Atendimento 24h</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Car className="w-4 h-4 text-[#0284C7] shrink-0" />
                    <span>Sedans, SUVs e Vans</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Motoristas Experientes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Reserva Confirmada</span>
                  </div>
                </div>

              </div>

              {/* Right Column: Visual Summary Card */}
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl bg-gradient-to-b from-[#0D0A27] to-[#0A2540] text-white p-6 sm:p-8 shadow-2xl border border-slate-800">
                  
                  {/* Decorative badge */}
                  <div className="flex items-center justify-between pb-6 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <BrandLogo size="md" />
                      <div>
                        <div className="text-[11px] font-bold text-sky-400 uppercase tracking-widest">
                          Logística Internacional
                        </div>
                        <div className="text-sm font-extrabold text-white">
                          Porto Alegre ➔ Montevidéu
                        </div>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/30 text-[10px] font-black uppercase">
                      Privativo
                    </span>
                  </div>

                  {/* Route Highlights */}
                  <div className="py-6 space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-sky-500/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Plane className="w-4 h-4 text-sky-400" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-400">Ponto de Partida</div>
                        <div className="text-sm font-bold text-white">Aeroporto Salgado Filho (POA)</div>
                        <div className="text-[11px] text-slate-400">Recepção no desembarque com monitoramento de voo</div>
                      </div>
                    </div>

                    <div className="h-6 ml-4 border-l-2 border-dashed border-sky-500/40" />

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                        <MapPin className="w-4 h-4 text-emerald-400" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-400">Ponto de Chegada</div>
                        <div className="text-sm font-bold text-white">Montevidéu &bull; Estádio Centenário</div>
                        <div className="text-[11px] text-slate-400">Desembarque no hotel, Airbnb ou região do estádio</div>
                      </div>
                    </div>
                  </div>

                  {/* Route specs */}
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 grid grid-cols-2 gap-3 text-center mb-6">
                    <div>
                      <div className="text-[11px] text-slate-400">Distância</div>
                      <div className="text-lg font-black text-white">~800 a 850 km</div>
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-400">Tempo Estimado</div>
                      <div className="text-lg font-black text-sky-400">10 a 12h + Fronteira</div>
                    </div>
                  </div>

                  {/* WhatsApp Quick Link */}
                  <a
                    href={baseWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleWhatsAppClick('hero_card')}
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Consultar Valor para Meu Grupo</span>
                  </a>

                  <p className="text-[10px] text-slate-400 text-center mt-3">
                    Preço fechado por veículo. Divida entre amigos e torcedores.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 2: POR QUE RESERVAR UM TRANSFER PRIVATIVO */}
        {/* ============================================================ */}
        <section className="py-14 sm:py-18 bg-white border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0284C7] block mb-2">
                Conforto, Segurança e Autonomia
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0D0A27]">
                Por que reservar um transfer privativo para Montevidéu?
              </h2>
              <p className="text-slate-600 text-sm mt-3">
                A final da Libertadores exige planejamento cirúrgico. Elimine o estresse de conexões incertas, ônibus lotados e filas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#0284C7]/40 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-[#0284C7]/10 flex items-center justify-center text-[#0284C7] mb-4">
                  <Plane className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#0D0A27] mb-2">
                  Recepção no Desembarque em POA
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Sem perder tempo procurando transporte ou esperando táxi de aplicativo. Nosso motorista monitora seu voo e aguarda você pontualmente no saguão com suporte total às bagagens.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#0284C7]/40 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 mb-4">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#0D0A27] mb-2">
                  Preço Fechado por Veículo
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Não cobramos tarifas astronômicas por assento individual. O valor contratado é fechado pelo veículo privativo integral, permitindo dividir a viagem entre amigos e família de forma muito econômica.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#0284C7]/40 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600 mb-4">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#0D0A27] mb-2">
                  Saída no Seu Horário e Sem Conexões
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Você define o melhor horário de partida e planeja a chegada em Montevidéu com folga pré-jogo. Paradas programadas para refeição e descanso em locais estruturados.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#0284C7]/40 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-600 mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#0D0A27] mb-2">
                  Motoristas Profissionais na Fronteira
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Condução defensiva, veículos revisados e motoristas habituados às rodovias e aos procedimentos aduaneiros do Mercosul, garantindo tranquilidade do início ao fim.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#0284C7]/40 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-600 mb-4">
                  <ArrowRight className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#0D0A27] mb-2">
                  Opção de Retorno Garantido Pós-Jogo
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Após a comemoração e o apito final, seu transporte de volta para Porto Alegre já está confirmado, seja na madrugada pós-jogo ou no dia seguinte com desembarque direto no aeroporto.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0D0A27] to-[#0A2540] text-white flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block mb-1">
                    Garantia AG Transfer
                  </span>
                  <h3 className="text-base font-bold text-white mb-2">
                    Reserva Confirmada por Escrito
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Sua viagem garantida com contrato formal, dados do motorista e placa do veículo antecipados para total segurança do seu grupo.
                  </p>
                </div>
                <div className="pt-4">
                  <a
                    href="#formulario-cotacao"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-300 hover:text-white transition-colors"
                  >
                    <span>Simular Cotação Agora</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 3: COMO FUNCIONA (3 PASSOS) */}
        {/* ============================================================ */}
        <section className="py-14 sm:py-18">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0284C7] block mb-2">
                Simplicidade e Agilidade
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0D0A27]">
                Como funciona a reserva em 3 passos
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
              
              {/* Step 1 */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs relative">
                <div className="w-10 h-10 rounded-full bg-[#0284C7] text-white flex items-center justify-center font-black text-sm mb-4">
                  1
                </div>
                <h3 className="text-base font-bold text-[#0D0A27] mb-2">
                  Informe Seus Dados
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Você nos envia a data e horário de chegada do seu voo no Aeroporto Salgado Filho (POA), o número de passageiros e quantidade de bagagens.
                </p>
              </div>

              {/* Step 2 */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs relative">
                <div className="w-10 h-10 rounded-full bg-[#0284C7] text-white flex items-center justify-center font-black text-sm mb-4">
                  2
                </div>
                <h3 className="text-base font-bold text-[#0D0A27] mb-2">
                  Cotação e Confirmação
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  A AG Transfer envia a cotação transparente pelo veículo fechado. Com a aprovação, emitimos a confirmação formal da reserva por escrito.
                </p>
              </div>

              {/* Step 3 */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs relative">
                <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-black text-sm mb-4">
                  3
                </div>
                <h3 className="text-base font-bold text-[#0D0A27] mb-2">
                  Embarque e Rota VIP
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Nosso motorista executivo espera você no aeroporto de Porto Alegre e segue viagem direta para Montevidéu com máximo conforto até o estádio ou hotel.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 4: SOBRE A ROTA */}
        {/* ============================================================ */}
        <section className="py-14 sm:py-18 bg-white border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-bold uppercase tracking-widest text-[#0284C7] block">
                  Logística Rodoviária Internacional
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0D0A27]">
                  Sobre a Rota Porto Alegre ➔ Montevidéu
                </h2>

                <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  <p>
                    <strong>Saída:</strong> Aeroporto Internacional Salgado Filho (POA), Porto Alegre/RS.
                  </p>
                  <p>
                    <strong>Destino:</strong> Montevidéu, Uruguai (hotel, Airbnb, residência ou imediações do Estádio Centenário).
                  </p>
                  <p>
                    <strong>Distância e Tempo:</strong> Cerca de <strong>800 a 850 km</strong> e <strong>10 a 12 horas</strong> de estrada, mais o tempo necessário para desembaraço migratório na fronteira (rotas via BR-116/Jaguarão–Rio Branco ou via Chuí).
                  </p>
                </div>

                {/* Planning warning required by PRD Section 7.5 */}
                <div className="p-4 sm:p-5 rounded-2xl bg-amber-50 border-l-4 border-amber-500 text-amber-900 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-sm text-amber-950">
                    <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
                    <span>Dica Crítica de Planejamento Logístico</span>
                  </div>
                  <p className="text-xs leading-relaxed">
                    &ldquo;Quem pousa em Porto Alegre em cima da hora corre o risco de não chegar ao jogo. Planeje a saída com antecedência e fale com a nossa equipe sobre o melhor horário.&rdquo;
                  </p>
                  <p className="text-[11px] text-amber-800">
                    Em datas de grandes decisões, a aduana pode registrar filas maiores. Recomendamos que seu voo chegue em Porto Alegre entre os dias 26 e 27/11 para viajar com tranquilidade e sem estresse.
                  </p>
                </div>

                <div className="pt-2">
                  <a
                    href={baseWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleWhatsAppClick('route_section')}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0284C7] hover:text-[#0369A1] transition-colors"
                  >
                    <span>Falar com especialista sobre horários de voo</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#0D0A27] flex items-center gap-2">
                    <Compass className="w-4 h-4 text-[#0284C7]" />
                    <span>Itinerário e Paradas Estratégicas</span>
                  </h3>

                  <ul className="space-y-3 text-xs text-slate-600">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-800">Paradas Técnicas em Postos 24h:</strong> Paradas a cada 3 a 4 horas em pontos com infraestrutura completa para alimentação e toaletes.
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-800">Aduana Integrada:</strong> Auxílio ao grupo com o preenchimento da tarjeta migratória e apresentação dos documentos aos fiscais.
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-800">Veículos com Ar Condicionado e Carregadores:</strong> Conforto ergonômico e tomadas USB para manter seus dispositivos carregados.
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-800">Fuso Horário Igual:</strong> No dia 28/11/2026, Uruguai e Brasília estão no mesmo fuso horário (GMT-3), facilitando o cálculo exato do seu cronograma.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 5: OPÇÕES DE VEÍCULOS E PASSAGEIROS */}
        {/* ============================================================ */}
        <section className="py-14 sm:py-18">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0284C7] block mb-2">
                Frota de Alto Padrão
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0D0A27]">
                Opções de Veículos para Seu Grupo
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2">
                Preço fechado por veículo. Escolha a categoria ideal para seu número de passageiros e bagagens.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Category 1: Sedan Executivo */}
              <div className="rounded-3xl bg-white border border-slate-200 p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-[11px] font-bold uppercase">
                      Sedan Executivo
                    </span>
                    <Car className="w-5 h-5 text-[#0284C7]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0D0A27] mb-1">
                    Carro Executivo
                  </h3>
                  <p className="text-xs text-slate-500 mb-4">
                    Ideal para duplas, casais ou executivos que buscam agilidade e privacidade total.
                  </p>

                  <div className="space-y-2.5 text-xs text-slate-600 mb-6 pb-6 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-[#0284C7]" />
                      <span>Até <strong>3 a 4 passageiros</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Luggage className="w-4 h-4 text-[#0284C7]" />
                      <span>Até <strong>3 malas médias</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>Ar-condicionado e bancos de couro</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>Água mineral e carregadores USB</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="text-xs text-slate-400 mb-3">
                    Valor: <strong className="text-slate-900 font-bold">Sob Consulta (Preço Fechado)</strong>
                  </div>
                  <a
                    href={`https://wa.me/${COMPANY_NAP.phoneRaw}?text=${encodeURIComponent('Olá! Gostaria de cotar o Sedan Executivo para o transfer Porto Alegre -> Montevidéu.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleWhatsAppClick('fleet_sedan')}
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-slate-900 hover:bg-[#0284C7] text-white text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    <span>Cotar Sedan</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Category 2: SUV Executivo */}
              <div className="rounded-3xl bg-white border-2 border-[#0284C7] p-6 shadow-md flex flex-col justify-between relative hover:shadow-lg transition-shadow">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#0284C7] text-white text-[10px] font-black uppercase tracking-wider">
                  Mais Procurado
                </div>

                <div>
                  <div className="flex items-center justify-between mb-4 mt-1">
                    <span className="px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-[11px] font-bold uppercase">
                      SUV Premium
                    </span>
                    <Sparkles className="w-5 h-5 text-amber-500" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0D0A27] mb-1">
                    SUV Executivo 4x4
                  </h3>
                  <p className="text-xs text-slate-500 mb-4">
                    Conforto superior de rodagem em longas distâncias, espaço extra e visão panorâmica.
                  </p>

                  <div className="space-y-2.5 text-xs text-slate-600 mb-6 pb-6 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-[#0284C7]" />
                      <span>Até <strong>4 a 6 passageiros</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Luggage className="w-4 h-4 text-[#0284C7]" />
                      <span>Até <strong>4 a 5 malas médias</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>Porta-malas generoso e suspensão macia</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>Água mineral, tomadas e Wi-Fi</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="text-xs text-slate-400 mb-3">
                    Valor: <strong className="text-slate-900 font-bold">Sob Consulta (Preço Fechado)</strong>
                  </div>
                  <a
                    href={`https://wa.me/${COMPANY_NAP.phoneRaw}?text=${encodeURIComponent('Olá! Gostaria de cotar o SUV Executivo para o transfer Porto Alegre -> Montevidéu.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleWhatsAppClick('fleet_suv')}
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                  >
                    <span>Cotar SUV Executivo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Category 3: Van Executiva */}
              <div className="rounded-3xl bg-white border border-slate-200 p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-bold uppercase">
                      Grupos de Torcedores
                    </span>
                    <Users className="w-5 h-5 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0D0A27] mb-1">
                    Van Executiva VIP
                  </h3>
                  <p className="text-xs text-slate-500 mb-4">
                    A melhor relação custo/benefício para grupos de amigos e famílias dividirem o valor fechado.
                  </p>

                  <div className="space-y-2.5 text-xs text-slate-600 mb-6 pb-6 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-[#0284C7]" />
                      <span>Até <strong>7 a 15 passageiros</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Luggage className="w-4 h-4 text-[#0284C7]" />
                      <span>Amplo bagageiro para todas as malas</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>Poltronas reclináveis individuais</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>Ar-condicionado central dutado</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="text-xs text-slate-400 mb-3">
                    Valor: <strong className="text-slate-900 font-bold">Sob Consulta (Divida no Grupo)</strong>
                  </div>
                  <a
                    href={`https://wa.me/${COMPANY_NAP.phoneRaw}?text=${encodeURIComponent('Olá! Gostaria de cotar a Van Executiva para nosso grupo viajar de Porto Alegre para Montevidéu.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleWhatsAppClick('fleet_van')}
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-slate-900 hover:bg-[#0284C7] text-white text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    <span>Cotar Van para Grupo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 6: DOCUMENTOS E FRONTEIRA (INFORMATIVO) */}
        {/* ============================================================ */}
        <section className="py-14 sm:py-18 bg-white border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-600 shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#0284C7] block">
                    Normas e Imigração
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0D0A27]">
                    Documentos Obrigatórios para Entrar no Uruguai
                  </h2>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                Para cruzar a fronteira entre Brasil e Uruguai com tranquilidade, confira as regras vigentes do Mercosul e certifique-se de que todos os passageiros do seu veículo estão com a documentação regularizada antes de embarcar:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs uppercase tracking-wider mb-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Documentos Válidos</span>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-700">
                    <li>
                      &bull; <strong>RG Original (Carteira de Identidade Civil):</strong> em excelente estado de conservação e emitido preferencialmente nos últimos 10 anos.
                    </li>
                    <li>
                      &bull; <strong>OU Passaporte Brasileiro Válido:</strong> dentro do prazo de validade no momento da entrada.
                    </li>
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200">
                  <div className="flex items-center gap-2 text-rose-800 font-bold text-xs uppercase tracking-wider mb-2">
                    <AlertTriangle className="w-4 h-4 text-rose-600" />
                    <span>NÃO É ACEITO na Fronteira</span>
                  </div>
                  <ul className="space-y-2 text-xs text-rose-900/90">
                    <li>
                      &bull; <strong>CNH (Carteira de Motorista):</strong> nem física nem digital é aceita pelas autoridades migratórias uruguaias para cruzar a fronteira como documento de viagem internacional.
                    </li>
                    <li>
                      &bull; Certidão de Nascimento, carteiras funcionais (OAB, CRM, etc.) ou cópias autenticadas não são válidas para entrada.
                    </li>
                  </ul>
                </div>

              </div>

              {/* Minors warning */}
              <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 text-xs text-amber-950 mb-6 space-y-1.5">
                <strong className="block font-bold flex items-center gap-1.5 text-amber-900">
                  <Info className="w-4 h-4 text-amber-600" />
                  Atenção Especial para Menores de 18 Anos:
                </strong>
                <p className="leading-relaxed">
                  Menores viajando desacompanhados de um ou ambos os pais necessitam obrigatoriamente de autorização de viagem internacional com firma reconhecida em cartório ou autorização judicial, acompanhada de RG ou passaporte e certidão de nascimento original.
                </p>
              </div>

              {/* Official Links required by PRD Section 7.7 */}
              <div className="p-4 rounded-2xl bg-slate-100/80 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-600">
                <span className="font-semibold text-slate-800">
                  Consulte os portais oficiais dos governos:
                </span>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="https://www.gov.br/pf/pt-br/assuntos/viagens"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#0284C7] hover:underline font-semibold"
                  >
                    <span>Polícia Federal (Viagens)</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <span>&bull;</span>
                  <a
                    href="https://www.gub.uy/ministerio-relaciones-exteriores"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#0284C7] hover:underline font-semibold"
                  >
                    <span>Governo do Uruguai (Migraciones)</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 7: PERGUNTAS FREQUENTES (FAQ) */}
        {/* ============================================================ */}
        <section ref={faqSectionRef} className="py-14 sm:py-18">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0284C7] block mb-2">
                Dúvidas Frequentes
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0D0A27]">
                Perguntas Frequentes sobre o Transfer POA ➔ Montevidéu
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2">
                Tudo o que você precisa saber para planejar sua ida e volta da Final da Libertadores.
              </p>
            </div>

            <div className="space-y-3">
              {faqItems.map((item, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-2xs transition-all"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-sm text-[#0D0A27] hover:text-[#0284C7] transition-colors cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <span className="leading-snug">{item.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-[#0284C7]' : ''
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                            {item.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 8: FORMULÁRIO DE COTAÇÃO */}
        {/* ============================================================ */}
        <section id="formulario-cotacao" className="py-14 sm:py-18 bg-white border-y border-slate-200">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-slate-50 border border-slate-200 p-6 sm:p-10 shadow-lg">
              
              <div className="text-center mb-8">
                <span className="text-xs font-bold uppercase tracking-widest text-[#0284C7] block mb-1">
                  Cotação Instantânea e Sem Compromisso
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0D0A27]">
                  Solicitar Cotação para Montevidéu
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-2">
                  Preencha os detalhes do seu grupo. Nossa equipe operacional calculará a melhor rota e responderá pelo WhatsApp em minutos.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-emerald-950">
                    Solicitação Gerada com Sucesso!
                  </h3>
                  <p className="text-xs text-emerald-800 leading-relaxed max-w-md mx-auto">
                    Sua mensagem foi formatada e aberta no seu WhatsApp. Caso a janela não tenha aberto automaticamente, clique no botão abaixo para conversar com nossa equipe:
                  </p>
                  <a
                    href={generatedWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleWhatsAppClick('form_success_button')}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Abrir Conversa no WhatsApp</span>
                  </a>
                  <div>
                    <button
                      type="button"
                      onClick={() => setFormSubmitted(false)}
                      className="text-xs text-slate-500 hover:text-slate-700 underline mt-2"
                    >
                      Preencher novamente
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4 sm:space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Seu Nome Completo *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: Carlos Eduardo Silva"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0284C7] focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        WhatsApp (com DDD) *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="Ex: (11) 98765-4321"
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0284C7] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Data de Chegada em POA *
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.flightDate}
                        onChange={(e) => setFormData({ ...formData, flightDate: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0284C7] focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Horário de Pouso em POA *
                      </label>
                      <input
                        type="time"
                        required
                        value={formData.flightTime}
                        onChange={(e) => setFormData({ ...formData, flightTime: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0284C7] focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        N° do Voo (Opcional)
                      </label>
                      <input
                        type="text"
                        placeholder="Ex: G3 1240 / LA 3100"
                        value={formData.flightNumber}
                        onChange={(e) => setFormData({ ...formData, flightNumber: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0284C7] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Número de Passageiros *
                      </label>
                      <select
                        value={formData.passengers}
                        onChange={(e) => setFormData({ ...formData, passengers: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0284C7] focus:border-transparent transition-all"
                      >
                        <option value="1 a 2 passageiros">1 a 2 passageiros (Sedan)</option>
                        <option value="3 a 4 passageiros">3 a 4 passageiros (Sedan ou SUV)</option>
                        <option value="5 a 6 passageiros">5 a 6 passageiros (SUV ou Minivan)</option>
                        <option value="7 a 10 passageiros">7 a 10 passageiros (Van Executiva)</option>
                        <option value="11 a 15 passageiros">11 a 15 passageiros (Van Executiva Grande)</option>
                        <option value="Acima de 15 passageiros">Acima de 15 passageiros (Micro-ônibus sob consulta)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Número de Malas / Bagagens *
                      </label>
                      <select
                        value={formData.luggage}
                        onChange={(e) => setFormData({ ...formData, luggage: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0284C7] focus:border-transparent transition-all"
                      >
                        <option value="Apenas mochilas / bagagem de mão">Apenas mochilas / bagagem de mão</option>
                        <option value="1 a 2 malas médias">1 a 2 malas médias</option>
                        <option value="3 a 4 malas médias">3 a 4 malas médias</option>
                        <option value="5 a 8 malas">5 a 8 malas (SUV ou Van)</option>
                        <option value="Mala para todo o grupo (Van)">Mala para todo o grupo (Van)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Destino em Montevidéu *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Estádio Centenário, Hotel Dazzler Pocitos, ou endereço"
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0284C7] focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Return option */}
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200">
                    <span className="block text-xs font-bold text-slate-700 mb-2">
                      Precisa de Transfer de Volta para Porto Alegre?
                    </span>
                    <div className="flex items-center gap-6 text-xs text-slate-800">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="needsReturn"
                          value="sim"
                          checked={formData.needsReturn === 'sim'}
                          onChange={() => setFormData({ ...formData, needsReturn: 'sim' })}
                          className="text-[#0284C7] focus:ring-[#0284C7]"
                        />
                        <span>Sim, desejo retorno pós-jogo</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="needsReturn"
                          value="nao"
                          checked={formData.needsReturn === 'nao'}
                          onChange={() => setFormData({ ...formData, needsReturn: 'nao' })}
                          className="text-[#0284C7] focus:ring-[#0284C7]"
                        />
                        <span>Apenas ida</span>
                      </label>
                    </div>

                    {formData.needsReturn === 'sim' && (
                      <div className="mt-3 pt-3 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                            Previsão de Data/Horário de Retorno
                          </label>
                          <input
                            type="text"
                            placeholder="Ex: 29/11/2026 às 10h (ou madrugada pós-jogo)"
                            value={formData.returnDate}
                            onChange={(e) => setFormData({ ...formData, returnDate: e.target.value })}
                            className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-300 text-xs text-slate-900"
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Observações ou Solicitações Especiais
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Alguma necessidade especial, paradas adicionais ou dúvidas?"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0284C7] focus:border-transparent transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#0D0A27] via-[#0284C7] to-[#0369A1] hover:brightness-110 text-white font-extrabold text-sm uppercase tracking-wider shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Receber Minha Cotação</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] text-slate-400 text-center">
                    Ao clicar, seus dados serão organizados e enviados diretamente ao nosso WhatsApp oficial para resposta imediata.
                  </p>
                </form>
              )}

            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 9: CTA FINAL & AVISO LEGAL OBRIGATÓRIO */}
        {/* ============================================================ */}
        <section className="py-14 sm:py-18">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            
            <div className="max-w-2xl mx-auto space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0284C7] block">
                Vagas Limitadas na Frota
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0D0A27]">
                Garanta o Transfer do Seu Grupo para Montevidéu
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                A procura por transporte executivo para o Uruguai é intensa nas semanas da decisão. Entre em contato agora e assegure seu veículo com antecedência.
              </p>
              
              <div className="pt-2">
                <a
                  href={baseWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleWhatsAppClick('final_cta')}
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm uppercase tracking-wider shadow-xl hover:shadow-2xl transition-all cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chamar no WhatsApp (54) 99153-7288</span>
                </a>
              </div>
            </div>

            {/* Mandatory Legal Disclaimer required by PRD Section 7.10 */}
            <div className="max-w-3xl mx-auto p-4 rounded-2xl bg-slate-100 border border-slate-200 text-[11px] text-slate-500 leading-relaxed">
              <strong>Aviso Legal & Isenção de Vínculo:</strong> &ldquo;A AG Transfer é uma empresa independente de transporte e não tem vínculo com a CONMEBOL, com os clubes ou com a organização do evento. Não vendemos ingressos.&rdquo;
            </div>

          </div>
        </section>

        {/* ============================================================ */}
        {/* MOBILE STICKY BOTTOM WHATSAPP BUTTON (PRD REQ 1 & 9) */}
        {/* ============================================================ */}
        <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden p-3 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-2xl flex items-center gap-2">
          <a
            href={baseWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleWhatsAppClick('mobile_sticky_bottom')}
            className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 active:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Cotação Transfer Montevidéu</span>
          </a>
          <a
            href={`tel:${COMPANY_NAP.phoneRaw}`}
            onClick={handlePhoneClick}
            className="p-3 rounded-xl bg-slate-100 text-slate-700"
            aria-label="Ligar 24h"
          >
            <Phone className="w-4 h-4 text-[#0284C7]" />
          </a>
        </div>

      </div>
    </>
  );
};
