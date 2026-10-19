import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'motion/react';
import {
  MapPin,
  Navigation,
  Compass,
  Clock,
  CheckCircle,
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
  Luggage,
  CloudFog,
  Mountain,
  Building2,
  Route as RouteIcon
} from 'lucide-react';
import {
  COMPANY_NAP,
  FLEET_VEHICLES,
  buildWhatsAppUrl
} from '../data/companyData';
import { CITIES_SERVED, getCityBySlug, CityItem } from '../data/cityData';

interface CityDetailPageProps {
  onOpenQuoteModal: (serviceTitle?: string) => void;
}

export const CityDetailPage: React.FC<CityDetailPageProps> = ({ onOpenQuoteModal }) => {
  const { slug } = useParams<{ slug: string }>();

  // Normalize slug & alias handling
  const city: CityItem | undefined = getCityBySlug(slug || '');

  // Form states for in-page simulator
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
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

  // Set default route in simulator based on city
  useEffect(() => {
    if (city) {
      if (city.slug === 'porto-alegre') {
        setOrigin('Aeroporto Salgado Filho (POA)');
        setDestination('Gramado / Serra Gaúcha (Hotel)');
      } else if (city.slug === 'caxias-do-sul') {
        setOrigin('Aeroporto Hugo Cantergiani (CXJ)');
        setDestination('Gramado / Canela ou Vale dos Vinhedos');
      } else {
        setOrigin('Aeroporto Salgado Filho (POA) ou Caxias (CXJ)');
        setDestination(`${city.name} (Hotel, Pousada ou Endereço)`);
      }
    }
  }, [city]);

  // SEO & Head Metadata synchronization
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (city) {
      document.title = `${city.metaTitle} | AG Transfer`;

      const cityUrl = `https://ag-transfer.vercel.app/cidades/${city.slug}`;

      // Canonical link
      let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.rel = 'canonical';
        document.head.appendChild(canonical);
      }
      canonical.href = cityUrl;

      // Meta description
      let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
      if (metaDesc) {
        metaDesc.content = city.metaDescription;
      }

      // OpenGraph tags
      let ogUrl = document.querySelector('meta[property="og:url"]') as HTMLMetaElement | null;
      if (ogUrl) ogUrl.content = cityUrl;

      let ogTitle = document.querySelector('meta[property="og:title"]') as HTMLMetaElement | null;
      if (ogTitle) ogTitle.content = `${city.metaTitle} | AG Transfer`;

      let ogDesc = document.querySelector('meta[property="og:description"]') as HTMLMetaElement | null;
      if (ogDesc) ogDesc.content = city.metaDescription;

      // Twitter Cards
      let twTitle = document.querySelector('meta[name="twitter:title"]') as HTMLMetaElement | null;
      if (twTitle) twTitle.content = `${city.metaTitle} | AG Transfer`;

      let twDesc = document.querySelector('meta[name="twitter:description"]') as HTMLMetaElement | null;
      if (twDesc) twDesc.content = city.metaDescription;

      // JSON-LD Structured Data for LocalBusiness & Breadcrumbs & FAQ
      const structuredData = {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'LocalBusiness',
            '@id': 'https://ag-transfer.vercel.app/#localbusiness',
            name: COMPANY_NAP.name,
            alternateName: COMPANY_NAP.shortName,
            url: 'https://ag-transfer.vercel.app/',
            logo: 'https://ag-transfer.vercel.app/logo.png',
            telephone: COMPANY_NAP.phoneRaw,
            priceRange: '$$$',
            areaServed: {
              '@type': 'City',
              name: city.name,
              containedInPlace: {
                '@type': 'AdministrativeArea',
                name: 'Rio Grande do Sul'
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: city.geoCoordinates.lat,
                longitude: city.geoCoordinates.lng
              }
            },
            address: {
              '@type': 'PostalAddress',
              streetAddress: COMPANY_NAP.address,
              addressLocality: COMPANY_NAP.city,
              addressRegion: COMPANY_NAP.state,
              postalCode: COMPANY_NAP.zip,
              addressCountry: 'BR'
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: COMPANY_NAP.geoCoordinates.lat,
              longitude: COMPANY_NAP.geoCoordinates.lng
            },
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                  'Saturday',
                  'Sunday'
                ],
                opens: '00:00',
                closes: '23:59'
              }
            ],
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '5.0',
              bestRating: '5',
              reviewCount: '200'
            }
          },
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Início',
                item: 'https://ag-transfer.vercel.app/'
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Cidades Atendidas',
                item: 'https://ag-transfer.vercel.app/#cobertura'
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: city.name,
                item: cityUrl
              }
            ]
          },
          {
            '@type': 'FAQPage',
            mainEntity: city.faqs.map(faq => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer
              }
            }))
          }
        ]
      };

      const scriptTag = document.createElement('script');
      scriptTag.type = 'application/ld+json';
      scriptTag.id = 'city-structured-data';
      scriptTag.text = JSON.stringify(structuredData);
      
      const existingScript = document.getElementById('city-structured-data');
      if (existingScript) existingScript.remove();
      document.head.appendChild(scriptTag);

      return () => {
        const cleanupScript = document.getElementById('city-structured-data');
        if (cleanupScript) cleanupScript.remove();
      };
    }
  }, [city]);

  if (!city) {
    return (
      <main className="py-24 max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-3xl font-extrabold text-[#0D0A27] mb-4">Cidade não encontrada</h1>
        <p className="text-slate-600 mb-8">
          A página geográfica solicitada não existe ou foi atualizada. Navegue pelas cidades da Serra Gaúcha atendidas pela AG Transfer.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {CITIES_SERVED.map(c => (
            <Link
              key={c.id}
              to={`/cidades/${c.slug}`}
              className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-[#0284C7] hover:bg-sky-50 shadow-xs"
            >
              {c.name}
            </Link>
          ))}
        </div>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#0284C7] text-white rounded-xl font-bold hover:bg-[#0369A1] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar à Página Inicial</span>
        </Link>
      </main>
    );
  }

  const directWhatsAppUrl = buildWhatsAppUrl({
    service: `Transfer Executivo em ${city.name}`,
    origin: origin || `Aeroporto POA ou CXJ`,
    destination: destination || city.name,
    date: date || 'A definir',
    passengers: passengers
  });

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      {/* 1. Urgency & Trust Strip */}
      <section className="bg-[#0A2540] text-white text-xs py-2.5 px-4 border-b border-sky-900/40 sticky top-16 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-sky-200">
            <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold text-white">Disponibilidade 24 Horas em {city.name}:</span>
            <span className="hidden sm:inline">Veículos executivos com motorista para transfer imediato ou agendado.</span>
          </div>
          <div className="flex items-center gap-4 text-[11px] font-medium ml-auto">
            <span className="flex items-center gap-1 text-amber-300">
              <Star className="w-3.5 h-3.5 fill-amber-300" />
              <strong className="text-white">5.0</strong> no Google (200+ avaliações)
            </span>
            <span className="hidden md:flex items-center gap-1 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Seguro APP Passageiro
            </span>
            <a
              href={`tel:${COMPANY_NAP.phoneRaw}`}
              className="text-sky-300 hover:text-white font-bold flex items-center gap-1"
            >
              <Phone className="w-3 h-3" />
              {COMPANY_NAP.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* 2. Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="bg-white border-b border-slate-200 py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-slate-500">
          <Link to="/" className="hover:text-[#0284C7] transition-colors flex items-center gap-1">
            <span>Início</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link to="/#cobertura" className="hover:text-[#0284C7] transition-colors">
            Cidades Atendidas
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="font-bold text-[#0D0A27]">{city.name} (RS)</span>
        </div>
      </nav>

      {/* 3. Hero Section with Value Proposition & 3D Interactive Simulator */}
      <section className="relative pt-12 pb-20 overflow-hidden bg-gradient-to-b from-white via-sky-50/20 to-[#F8FAFC]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-50 text-[#0284C7] border border-sky-200">
                  <MapPin className="w-3.5 h-3.5" />
                  {city.region}
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <Zap className="w-3 h-3" />
                  {city.badge}
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                  <Mountain className="w-3 h-3" />
                  {city.altitude}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0D0A27] tracking-tight leading-[1.15] text-balance">
                Transfer & Transporte Executivo em <span className="text-[#0284C7]">{city.name}</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed text-pretty">
                {city.description}
              </p>

              {/* Geographic Coordinates & Distances Strip */}
              <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-xs text-xs grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="space-y-0.5">
                  <span className="text-slate-400 font-medium block">Aeroporto POA:</span>
                  <span className="font-bold text-[#0D0A27]">{city.distanceFromPoa}</span>
                </div>
                <div className="space-y-0.5">
                  <span className="text-slate-400 font-medium block">Aeroporto CXJ:</span>
                  <span className="font-bold text-[#0284C7]">{city.distanceFromCxj}</span>
                </div>
                <div className="space-y-0.5">
                  <span className="text-slate-400 font-medium block">Sede Operacional:</span>
                  <span className="font-bold text-slate-700">{city.distanceFromSede}</span>
                </div>
              </div>

              {/* Bullet Key Advantages */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Receptivo no portão com placa nominal</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Monitoramento ativo de atrasos de voo</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Ar dual-zone, água lacrada e Wi-Fi</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Faturamento PJ, Nota Fiscal e Boleto</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3">
                <a
                  href={directWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all active:scale-[0.98]"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Cotar Transfer Para {city.name}</span>
                </a>

                <button
                  onClick={() => onOpenQuoteModal(`Transfer Executivo em ${city.name}`)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#0D0A27] hover:bg-[#1E1B4B] text-white font-bold text-sm shadow-sm transition-all active:scale-[0.98] cursor-pointer"
                >
                  <Send className="w-4 h-4 text-[#38BDF8]" />
                  <span>Solicitar Orçamento Formal</span>
                </button>
              </div>

              {/* Google Business Profile Micro-card */}
              <div className="flex items-center gap-3 pt-2 text-xs text-slate-500">
                <a
                  href={COMPANY_NAP.gbpUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 font-semibold text-slate-700 hover:text-[#0284C7]"
                >
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]" />
                    ))}
                  </div>
                  <span>5.0 Estrelas no Google (+200 avaliações)</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </div>

            {/* Right Column: 3D Interactive Fare Simulator */}
            <div className="lg:col-span-5">
              <motion.div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                  rotateX,
                  rotateY,
                  transformStyle: 'preserve-3d',
                }}
                className="bg-white rounded-3xl border border-slate-200/90 shadow-xl p-6 sm:p-7 relative transition-shadow hover:shadow-2xl"
              >
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#0284C7] block">
                      Simulador em Tempo Real
                    </span>
                    <h3 className="text-base font-extrabold text-[#0D0A27]">
                      Calcular Transfer para {city.name}
                    </h3>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-sky-50 flex items-center justify-center text-[#0284C7]">
                    <Car className="w-4 h-4" />
                  </div>
                </div>

                <div className="space-y-4 mt-5 text-xs sm:text-sm">
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#0284C7]" />
                      <span>Local de Embarque / Origem:</span>
                    </label>
                    <input
                      type="text"
                      value={origin}
                      onChange={(e) => setOrigin(e.target.value)}
                      placeholder="Ex: Aeroporto Salgado Filho POA ou CXJ"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0284C7] text-slate-800 text-xs sm:text-sm bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 font-semibold mb-1 flex items-center gap-1.5">
                      <Navigation className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Destino em {city.name}:</span>
                    </label>
                    <input
                      type="text"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      placeholder={`Ex: Hotel, Pousada ou Endereço em ${city.name}`}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0284C7] text-slate-800 text-xs sm:text-sm bg-slate-50/50"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-slate-700 font-semibold mb-1 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-slate-500" />
                        <span>Data / Horário Previsto:</span>
                      </label>
                      <input
                        type="text"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        placeholder="Ex: 24/11 às 14:30"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0284C7] text-slate-800 text-xs sm:text-sm bg-slate-50/50"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-700 font-semibold mb-1 flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-slate-500" />
                        <span>Veículo / Passageiros:</span>
                      </label>
                      <select
                        value={passengers}
                        onChange={(e) => setPassengers(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0284C7] text-slate-800 text-xs sm:text-sm bg-slate-50/50"
                      >
                        <option>1 a 3 passageiros (Sedan Executivo)</option>
                        <option>4 a 6 passageiros (SUV Executivo)</option>
                        <option>Até 15 passageiros (Van VIP)</option>
                      </select>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-sky-50/70 border border-sky-100 text-xs text-slate-600 space-y-1">
                    <div className="flex items-center justify-between font-bold text-[#0D0A27]">
                      <span>Tarifa com Preço Fixo Acordado</span>
                      <span className="text-emerald-700 font-mono">Sem Taxa Oculta</span>
                    </div>
                    <p className="text-[11px] text-slate-500">
                      Inclui pedagio, combustível, assistência de bagagem e espera em caso de atraso da companhia aérea.
                    </p>
                  </div>

                  <a
                    href={directWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-sm shadow-md transition-all active:scale-[0.98]"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Confirmar Rota no WhatsApp 24h</span>
                  </a>

                  <p className="text-[11px] text-center text-slate-400">
                    Resposta média em menos de 5 minutos · Base operacional em Caxias do Sul (RS)
                  </p>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Deep Geographic & Territorial Profile (GEO Section) */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0284C7] block mb-1">
              Perfil Geográfico & Logística Local
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0D0A27] tracking-tight">
              Tudo sobre o Transporte Executivo em {city.name}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              {city.fullBio}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Top Landmarks */}
            <div className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-5 shadow-xs">
              <div className="flex items-center gap-2 text-[#0284C7] font-bold text-sm mb-3">
                <Building2 className="w-4 h-4" />
                <span>Pontos de Interesse & Hotéis</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-600">
                {city.keyLandmarks.map((landmark, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7] mt-1.5 shrink-0" />
                    <span>{landmark}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Neighborhoods served */}
            <div className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-5 shadow-xs">
              <div className="flex items-center gap-2 text-[#0284C7] font-bold text-sm mb-3">
                <MapPin className="w-4 h-4" />
                <span>Bairros & Zonas Atendidas</span>
              </div>
              <p className="text-xs text-slate-500 mb-2">Atendimento porta a porta em qualquer endereço:</p>
              <div className="flex flex-wrap gap-1.5">
                {city.popularNeighborhoods.map((bairro, idx) => (
                  <span
                    key={idx}
                    className="inline-block px-2.5 py-1 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-700"
                  >
                    {bairro}
                  </span>
                ))}
              </div>
            </div>

            {/* Access Highways */}
            <div className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-5 shadow-xs">
              <div className="flex items-center gap-2 text-[#0284C7] font-bold text-sm mb-3">
                <RouteIcon className="w-4 h-4" />
                <span>Rodovias de Conexão</span>
              </div>
              <p className="text-xs text-slate-500 mb-2">Corredores rodoviários monitorados pela central:</p>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {city.accessHighways.map((rodovia, idx) => (
                  <span
                    key={idx}
                    className="inline-block px-2.5 py-1 bg-sky-50 text-[#0284C7] border border-sky-200 rounded-lg text-xs font-bold"
                  >
                    {rodovia}
                  </span>
                ))}
              </div>
              <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-200">
                CEP Municipal: <strong className="text-slate-700">{city.cep}</strong>
              </div>
            </div>

            {/* Climate & Driving Expertise */}
            <div className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-5 shadow-xs">
              <div className="flex items-center gap-2 text-[#0284C7] font-bold text-sm mb-3">
                <CloudFog className="w-4 h-4" />
                <span>Segurança & Microclima</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {city.climateContext}
              </p>
              <div className="mt-3 pt-3 border-t border-slate-200 flex items-center gap-1.5 text-xs text-emerald-700 font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Motoristas com CNH Chauffeur e Direção Defensiva</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Frequently Operated Routes for this City */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#0284C7] block mb-1">
                Rotas Mais Solicitadas
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0D0A27]">
                Conexões Diretas para {city.name}
              </h2>
            </div>
            <p className="text-xs text-slate-500 max-w-sm">
              Valores fechados com antecedência, sem surpresas no desembarque.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {city.commonRoutes.map((route, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs hover:border-[#0284C7] transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-bold text-slate-400 mb-2">
                    <span>Rota #{idx + 1}</span>
                    <span className="font-mono text-[#0284C7] bg-sky-50 px-2 py-0.5 rounded border border-sky-100">
                      {route.distance}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[#0D0A27] mb-1">
                    {route.origin}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                    <span>↓ percurso direto até</span>
                  </div>
                  <h4 className="text-sm font-semibold text-[#0284C7] mb-3">
                    {route.destination}
                  </h4>
                  <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                    {route.details}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="text-xs">
                    <span className="text-slate-400 block text-[11px]">Tempo estimado:</span>
                    <strong className="text-[#0D0A27] font-mono">{route.estimatedTime}</strong>
                  </div>
                  <a
                    href={buildWhatsAppUrl({
                      service: `Transfer ${route.origin} para ${route.destination}`,
                      origin: route.origin,
                      destination: route.destination
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-600 hover:text-white border border-emerald-200 text-xs font-bold transition-all shadow-xs"
                  >
                    <span>Cotar</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Comparison Table (SXO & Conversion Engine) */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0284C7] block mb-1">
              Transparência & Padrão de Atendimento
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0D0A27]">
              Por que a AG Transfer é a Melhor Escolha em {city.name}?
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Veja o comparativo frente a alternativas como transporte por aplicativo, ônibus de linha ou carros alugados.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {city.comparisonPoints.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 p-6 bg-[#F8FAFC] flex flex-col justify-between shadow-xs"
              >
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-emerald-50/80 border border-emerald-200">
                    <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs uppercase tracking-wide mb-1.5">
                      <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
                      <span>Com a AG Transfer</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                      {item.agTransfer}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-rose-50/70 border border-rose-200">
                    <div className="flex items-center gap-2 text-rose-800 font-bold text-xs uppercase tracking-wide mb-1.5">
                      <X className="w-4 h-4 text-rose-600 stroke-[3]" />
                      <span>Alternativas Convencionais</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.competitor}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#0284C7] hover:bg-[#0369A1] text-white font-bold text-sm shadow-md transition-all active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Garantir Transfer Executivo Sem Estresse em {city.name}</span>
            </a>
          </div>
        </div>
      </section>

      {/* 7. Social Proof Testimonial for this City */}
      <section className="py-16 bg-[#0A2540] text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 sm:p-10 shadow-2xl">
            <div className="flex items-center gap-1 mb-4 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
              <span className="text-xs text-sky-200 ml-2 font-medium">
                Avaliação Verificada no Google Business Profile
              </span>
            </div>

            <blockquote className="text-lg sm:text-xl font-medium text-slate-100 leading-relaxed italic mb-6">
              "{city.socialProof.quote}"
            </blockquote>

            <div className="flex items-center justify-between flex-wrap gap-4 pt-4 border-t border-white/10 text-xs">
              <div>
                <strong className="text-white block text-sm">{city.socialProof.name}</strong>
                <span className="text-sky-300">{city.socialProof.role}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span>{city.socialProof.location}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Fleet Vehicles Recommended for this City's Geography */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0284C7] block mb-1">
              Frota Própria & Conforto Dinâmico
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0D0A27]">
              Veículos Recomendados para Deslocamentos em {city.name}
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Veículos novos, revisados semanalmente, com ar-condicionado digital, bancos em couro e seguro total de passageiros.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FLEET_VEHICLES.map((vehicle) => (
              <div
                key={vehicle.id}
                className="bg-[#F8FAFC] border border-slate-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-[#0D0A27]/80 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-md border border-white/10">
                    {vehicle.category}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-[#0D0A27] mb-2">{vehicle.name}</h3>
                    <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-[#0284C7]" />
                        {vehicle.passengers}
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <Luggage className="w-3.5 h-3.5 text-[#0284C7]" />
                        {vehicle.luggage}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 mb-4">{vehicle.description}</p>
                    <ul className="space-y-1.5 mb-5 text-xs text-slate-600">
                      {vehicle.features.slice(0, 3).map((f, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={buildWhatsAppUrl({
                      service: `Transfer em ${city.name} (${vehicle.name})`,
                      origin: `Aeroporto POA ou CXJ`,
                      destination: city.name,
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white hover:bg-[#0284C7] text-slate-700 hover:text-white border border-slate-200 hover:border-[#0284C7] text-xs font-bold transition-all shadow-xs"
                  >
                    <span>Cotar com {vehicle.name.split(' ')[0]}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Related Recommended Services for this City */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0284C7] block mb-1">
              Soluções Integradas
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0D0A27]">
              Serviços Recomendados para {city.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {city.recommendedServices.map((srv, idx) => (
              <Link
                key={idx}
                to={`/servicos/${srv.slug}`}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs hover:border-[#0284C7] hover:shadow-md transition-all group block"
              >
                <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-bold bg-sky-50 text-[#0284C7] border border-sky-100 mb-3">
                  {srv.badge}
                </span>
                <h3 className="text-base font-bold text-[#0D0A27] group-hover:text-[#0284C7] transition-colors mb-2">
                  {srv.title}
                </h3>
                <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                  {srv.description}
                </p>
                <div className="flex items-center gap-1 text-xs font-bold text-[#0284C7]">
                  <span>Ver Detalhes do Serviço</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FAQ Accordion Section (SXO & Natural Search Answers) */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0284C7] block mb-1">
              Tire Todas as Suas Dúvidas
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0D0A27]">
              Perguntas Frequentes sobre Transfer em {city.name}
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Respostas diretas para as dúvidas mais buscadas no Google por viajantes.
            </p>
          </div>

          <div className="space-y-4">
            {city.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="border border-slate-200 rounded-2xl overflow-hidden bg-[#F8FAFC] transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#0D0A27] hover:text-[#0284C7] transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-300 ${
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
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                          {faq.answer}
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

      {/* 11. Other Cities Served Navigation Bar (Link Equity & SXO) */}
      <section className="py-12 bg-[#F8FAFC] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700">
              Outras Cidades Atendidas na Serra Gaúcha:
            </h3>
            <span className="text-xs text-slate-500">
              Conexões privativas diárias com saída da nossa sede em Caxias do Sul
            </span>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {CITIES_SERVED.map((c) => {
              const isCurrent = c.id === city.id;
              if (isCurrent) return null;
              return (
                <Link
                  key={c.id}
                  to={`/cidades/${c.slug}`}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white hover:bg-sky-50 text-slate-700 hover:text-[#0284C7] border border-slate-200 hover:border-sky-300 text-xs font-semibold shadow-xs transition-all"
                >
                  <MapPin className="w-3 h-3 text-[#0284C7]" />
                  <span>Transfer {c.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 12. Bottom Final CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-[#0D0A27] via-[#0A2540] to-[#0284C7] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-sky-200 border border-white/20">
            Reserva Imediata 24 Horas
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Pronto para viajar com conforto e pontualidade em {city.name}?
          </h2>
          <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Nossa equipe operacional 24h calcula seu trajeto, organiza o receptivo e garante uma viagem sem estresse pelos melhores cenários do Rio Grande do Sul.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all active:scale-[0.98]"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Falar no WhatsApp (54) 99153-7288</span>
            </a>
            <button
              onClick={() => onOpenQuoteModal(`Transfer Executivo em ${city.name}`)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-sm transition-all cursor-pointer"
            >
              <Send className="w-4 h-4 text-[#38BDF8]" />
              <span>Solicitar Cotação Formal por E-mail</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};
