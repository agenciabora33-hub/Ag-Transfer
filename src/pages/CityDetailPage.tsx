import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  MapPin,
  Clock,
  CheckCircle2,
  MessageCircle,
  ChevronRight,
  Plane,
} from 'lucide-react';
import { CITIES_SERVED } from '../data/cityData';
import { COMPANY_NAP, SERVICES } from '../data/companyData';
import { SEOHead } from '../components/SEOHead';
import { NotFoundPage } from './NotFoundPage';
import { trackEvent } from '../utils/analytics';

interface CityDetailPageProps {
  onOpenQuoteModal?: (serviceTitle?: string) => void;
}

export const CityDetailPage: React.FC<CityDetailPageProps> = ({ onOpenQuoteModal }) => {
  const { slug } = useParams<{ slug: string }>();
  const city = CITIES_SERVED.find((c) => c.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (city) {
      trackEvent('city_view', { city: city.slug });
    }
  }, [slug, city]);

  if (!city) {
    return <NotFoundPage />;
  }

  const waUrl = `https://wa.me/${COMPANY_NAP.phoneRaw}?text=${encodeURIComponent(city.whatsappMessage)}`;
  const otherCities = CITIES_SERVED.filter((c) => c.slug !== city.slug).slice(0, 6);

  return (
    <main className="bg-[#F8FAFC] min-h-screen py-10 sm:py-14">
      <SEOHead
        title={city.seoTitle}
        description={city.seoDescription}
        canonicalPath={`/cidades/${city.slug}`}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Breadcrumb */}
        <nav aria-label="Trilha de navegação" className="flex items-center gap-2 text-xs font-semibold text-slate-600">
          <Link to="/" className="hover:text-[#0369A1] inline-flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Início</span>
          </Link>
          <span aria-hidden="true">/</span>
          <span>Cidades Atendidas</span>
          <span aria-hidden="true">/</span>
          <span className="text-[#0D0A27]">{city.name}</span>
        </nav>

        {/* Hero Summary */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-bold text-[#0369A1]">
                <span className="inline-flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                  Área de Cobertura · {city.name}, RS
                </span>
                {city.postalCode && (
                  <>
                    <span aria-hidden="true" className="text-slate-400">
                      ·
                    </span>
                    <span className="text-slate-700">CEP {city.postalCode}</span>
                  </>
                )}
              </div>

              <h1 className="text-2xl sm:text-4xl font-extrabold text-[#0D0A27] tracking-tight leading-tight">
                Transfer Executivo e Transporte VIP em {city.name} (RS)
              </h1>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                {city.longDescription}
              </p>

              <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-bold text-slate-700 tabular-nums">
                <span className="inline-flex items-center gap-1.5">
                  <Plane className="w-4 h-4 text-[#0369A1]" aria-hidden="true" />
                  Aeroporto POA: {city.distanceFromPoa}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Plane className="w-4 h-4 text-[#0369A1]" aria-hidden="true" />
                  Aeroporto CXJ: {city.distanceFromCxj}
                </span>
                <span className="inline-flex items-center gap-1.5 text-emerald-800">
                  <Clock className="w-4 h-4 text-emerald-700" aria-hidden="true" />
                  {COMPANY_NAP.operatingHoursShort}
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 bg-[#F8FAFC] border border-slate-200 rounded-2xl p-6 space-y-3">
              <h2 className="text-base font-extrabold text-[#0D0A27]">
                Atendimento em {city.name}
              </h2>
              <p className="text-xs text-slate-700 font-medium leading-relaxed">
                Embarques porta a porta em hotéis, pousadas e residências de {city.name}. Funcionamento: {COMPANY_NAP.operatingHours}.
              </p>

              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('whatsapp_click', { source: `city_${city.slug}` })}
                className="w-full min-h-[46px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs uppercase tracking-wider transition-colors"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                <span>Cotar Transfer em {city.name}</span>
              </a>

              {onOpenQuoteModal && (
                <button
                  type="button"
                  onClick={() => onOpenQuoteModal(`Transfer Executivo em ${city.name}`)}
                  className="w-full min-h-[44px] inline-flex items-center justify-center rounded-xl bg-white hover:bg-slate-100 border border-slate-300 text-[#0D0A27] font-bold text-xs uppercase tracking-wider cursor-pointer transition-colors"
                >
                  Simular Horário e Veículo
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Attractions & Coverage Points */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg font-extrabold text-[#0D0A27] mb-4">
              Principais Atrações e Destinos em {city.name}
            </h2>
            <ul className="space-y-3 text-sm text-slate-700 font-medium">
              {city.mainAttractions.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0369A1] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg font-extrabold text-[#0D0A27] mb-4">
              Regiões e Diferenciais de Cobertura
            </h2>
            <ul className="space-y-2.5 text-sm text-slate-700 font-medium mb-4">
              {city.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-slate-600 font-semibold pt-3 border-t border-slate-100">
              Regiões cobertas: {city.neighborhoodsOrPoints.join(' · ')}
            </p>
          </div>
        </section>

        {/* FAQ */}
        {city.faq.length > 0 && (
          <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg font-extrabold text-[#0D0A27] mb-5">
              Perguntas Frequentes — {city.name}
            </h2>
            <div className="space-y-4">
              {city.faq.map((q) => (
                <div key={q.question} className="border-b border-slate-100 pb-4 last:border-b-0 last:pb-0">
                  <h3 className="text-sm font-bold text-[#0D0A27]">{q.question}</h3>
                  <p className="text-sm text-slate-700 mt-1 leading-relaxed">{q.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Services + Other Cities Links */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <h2 className="text-base font-extrabold text-[#0D0A27] mb-4">
              Serviços Disponíveis
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SERVICES.slice(0, 4).map((svc) => (
                <Link
                  key={svc.id}
                  to={`/servicos/${svc.slug}`}
                  className="bg-[#F8FAFC] hover:bg-sky-50 border border-slate-200 rounded-xl p-3 flex items-center justify-between text-xs font-bold text-[#0D0A27] hover:text-[#0369A1]"
                >
                  <span className="truncate">{svc.shortTitle}</span>
                  <ChevronRight className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <h2 className="text-base font-extrabold text-[#0D0A27] mb-4">
              Outras Cidades na Área de Cobertura
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {otherCities.map((c) => (
                <Link
                  key={c.id}
                  to={`/cidades/${c.slug}`}
                  className="bg-[#F8FAFC] hover:bg-sky-50 border border-slate-200 rounded-xl p-3 flex items-center justify-between text-xs font-bold text-[#0D0A27] hover:text-[#0369A1]"
                >
                  <span className="truncate">{c.name}</span>
                  <ChevronRight className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
