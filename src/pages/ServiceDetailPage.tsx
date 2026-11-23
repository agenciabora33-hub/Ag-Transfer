import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  CheckCircle2,
  Clock,
  Users,
  MessageCircle,
  ShieldCheck,
  ChevronRight,
} from 'lucide-react';
import { SERVICES, COMPANY_NAP, FLEET } from '../data/companyData';
import { SEOHead } from '../components/SEOHead';
import { NotFoundPage } from './NotFoundPage';
import { trackEvent } from '../utils/analytics';

interface ServiceDetailPageProps {
  onOpenQuoteModal?: (serviceTitle?: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ onOpenQuoteModal }) => {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES.find((s) => s.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (service) {
      trackEvent('service_view', { service: service.slug });
    }
  }, [slug, service]);

  if (!service) {
    return <NotFoundPage />;
  }

  const waUrl = `https://wa.me/${COMPANY_NAP.phoneRaw}?text=${encodeURIComponent(service.whatsappMessage)}`;
  const relatedServices = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 4);

  return (
    <main className="bg-[#F8FAFC] min-h-screen py-10 sm:py-14">
      <SEOHead
        title={service.seoTitle}
        description={service.seoDescription}
        canonicalPath={`/servicos/${service.slug}`}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Breadcrumb */}
        <nav aria-label="Trilha de navegação" className="flex items-center gap-2 text-xs font-semibold text-slate-600">
          <Link to="/" className="hover:text-[#0369A1] inline-flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Início</span>
          </Link>
          <span aria-hidden="true">/</span>
          <span>Serviços</span>
          <span aria-hidden="true">/</span>
          <span className="text-[#0D0A27] truncate">{service.title}</span>
        </nav>

        {/* Hero Summary Card */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-bold text-[#0369A1]">
                <span>{service.category}</span>
                <span aria-hidden="true" className="text-slate-400">
                  ·
                </span>
                <span className="text-slate-700">{service.routeSummary}</span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-extrabold text-[#0D0A27] tracking-tight leading-tight">
                {service.title}
              </h1>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                {service.longDescription}
              </p>

              <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-bold text-slate-700 tabular-nums">
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#0369A1]" aria-hidden="true" />
                  Duração média: {service.duration}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-[#0369A1]" aria-hidden="true" />
                  Capacidade: {service.capacity}
                </span>
                <span className="inline-flex items-center gap-1.5 text-emerald-800">
                  <ShieldCheck className="w-4 h-4 text-emerald-700" aria-hidden="true" />
                  {COMPANY_NAP.operatingHoursShort}
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 bg-[#F8FAFC] border border-slate-200 rounded-2xl p-6 space-y-3">
              <h2 className="text-base font-extrabold text-[#0D0A27]">
                Orçamento Fechado por Veículo
              </h2>
              <p className="text-xs text-slate-700 font-medium leading-relaxed">
                Atendimento humanizado de segunda a domingo, das 05h às 23h, sem taxas ocultas.
              </p>

              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('whatsapp_click', { source: `service_${service.slug}` })}
                className="w-full min-h-[46px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs uppercase tracking-wider transition-colors"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                <span>Cotar no WhatsApp</span>
              </a>

              {onOpenQuoteModal && (
                <button
                  type="button"
                  onClick={() => onOpenQuoteModal(service.title)}
                  className="w-full min-h-[44px] inline-flex items-center justify-center rounded-xl bg-white hover:bg-slate-100 border border-slate-300 text-[#0D0A27] font-bold text-xs uppercase tracking-wider cursor-pointer transition-colors"
                >
                  Simular Detalhes da Viagem
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Highlights & Included */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg font-extrabold text-[#0D0A27] mb-4">
              Diferenciais deste Serviço
            </h2>
            <ul className="space-y-3 text-sm text-slate-700 font-medium">
              {service.highlights.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0369A1] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg font-extrabold text-[#0D0A27] mb-4">
              O que está Incluso
            </h2>
            <ul className="space-y-3 text-sm text-slate-700 font-medium">
              {service.includedItems.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Fleet Overview */}
        <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8">
          <h2 className="text-lg font-extrabold text-[#0D0A27] mb-5">
            Categorias de Veículos Disponíveis
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {FLEET.map((v) => (
              <div key={v.id} className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-5">
                <h3 className="text-base font-extrabold text-[#0D0A27]">{v.name}</h3>
                <p className="text-xs font-bold text-[#0369A1] mt-1">
                  {v.passengers} · {v.luggage}
                </p>
                <p className="text-xs text-slate-700 mt-2 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        {service.faq.length > 0 && (
          <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg font-extrabold text-[#0D0A27] mb-5">
              Dúvidas Frequentes sobre {service.shortTitle}
            </h2>
            <div className="space-y-4">
              {service.faq.map((q) => (
                <div key={q.question} className="border-b border-slate-100 pb-4 last:border-b-0 last:pb-0">
                  <h3 className="text-sm font-bold text-[#0D0A27]">{q.question}</h3>
                  <p className="text-sm text-slate-700 mt-1 leading-relaxed">{q.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Related Services */}
        <section>
          <h2 className="text-base font-extrabold text-[#0D0A27] mb-4">
            Outros Serviços Privativos na Serra Gaúcha
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedServices.map((rel) => (
              <Link
                key={rel.id}
                to={`/servicos/${rel.slug}`}
                className="bg-white border border-slate-200 hover:border-[#0369A1]/60 rounded-xl p-4 flex items-center justify-between gap-2 text-sm font-bold text-[#0D0A27] hover:text-[#0369A1] transition-colors"
              >
                <span className="truncate">{rel.shortTitle}</span>
                <ChevronRight className="w-4 h-4 shrink-0" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};
