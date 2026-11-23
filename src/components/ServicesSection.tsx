import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Users, ChevronRight } from 'lucide-react';
import { SERVICES, POPULAR_ROUTES, ServiceItem } from '../data/companyData';

export const ServicesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'Todos' | ServiceItem['category']>('Todos');

  const categories: Array<'Todos' | ServiceItem['category']> = [
    'Todos',
    'Aeroportos',
    'Transfers Privativos',
    'Tours Enoturísticos',
    'Corporativo',
  ];

  const filteredServices =
    activeCategory === 'Todos'
      ? SERVICES
      : SERVICES.filter((service) => service.category === activeCategory);

  return (
    <section id="servicos" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-widest text-[#0369A1] uppercase block mb-2">
              Soluções em Mobilidade Privativa
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0D0A27] tracking-tight">
              Serviços de Transfer Executivo e Passeios VIP
            </h2>
            <p className="mt-2 text-sm text-slate-700 font-medium leading-relaxed">
              Operação porta a porta com preços fechados antes do embarque e atendimento diário das 05h às 23h.
            </p>
          </div>

          {/* Interactive Filter Controls */}
          <div
            className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200 self-start lg:self-auto"
            role="tablist"
            aria-label="Filtrar serviços por categoria"
          >
            {categories.map((cat) => {
              const isSelected = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveCategory(cat)}
                  className={`min-h-[38px] px-3 py-1.5 rounded-lg text-xs font-bold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isSelected
                      ? 'bg-[#0D0A27] text-white shadow-xs'
                      : 'text-slate-700 hover:text-[#0D0A27] hover:bg-white/70'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, idx) => (
            <article
              key={service.id}
              className="group bg-[#F8FAFC] hover:bg-white border border-slate-200 hover:border-[#0369A1]/50 rounded-2xl p-6 flex flex-col justify-between transition-all duration-200 hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between gap-2 text-xs text-slate-600 font-semibold mb-3">
                  <span>{service.category}</span>
                  <span className="tabular-nums text-[#0369A1] font-bold">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-lg font-extrabold text-[#0D0A27] tracking-tight mb-2">
                  <Link
                    to={`/servicos/${service.slug}`}
                    className="hover:text-[#0369A1] transition-colors"
                  >
                    {service.title}
                  </Link>
                </h3>

                <p className="text-xs font-semibold text-[#0369A1] mb-2.5">
                  {service.routeSummary}
                </p>

                <p className="text-sm text-slate-700 leading-relaxed mb-5">
                  {service.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/80 space-y-3">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-700 font-medium tabular-nums">
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#0369A1]" aria-hidden="true" />
                    {service.duration}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-[#0369A1]" aria-hidden="true" />
                    {service.capacity}
                  </span>
                </div>

                <Link
                  to={`/servicos/${service.slug}`}
                  className="min-h-[40px] inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0369A1] hover:text-[#0D0A27] transition-colors"
                >
                  <span>Ver Detalhes do Serviço</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Popular Routes Quick Table */}
        <div className="mt-14 bg-[#F8FAFC] border border-slate-200 rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <div>
              <h3 className="text-lg sm:text-xl font-extrabold text-[#0D0A27]">
                Principais Rotas e Tempos Médios
              </h3>
              <p className="text-xs text-slate-700 font-medium mt-0.5">
                Valores fechados por veículo sob consulta direta no WhatsApp.
              </p>
            </div>
            <Link
              to="/transfer-porto-alegre-montevideu"
              className="inline-flex items-center gap-1 text-xs font-bold text-[#0369A1] hover:underline whitespace-nowrap"
            >
              <span>Ver rota especial Montevidéu (Uruguai)</span>
              <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {POPULAR_ROUTES.map((route) => {
              const targetPath =
                route.serviceSlug === 'transfer-porto-alegre-montevideu'
                  ? '/transfer-porto-alegre-montevideu'
                  : `/servicos/${route.serviceSlug}`;

              return (
                <Link
                  key={`${route.origin}-${route.destination}`}
                  to={targetPath}
                  className="bg-white border border-slate-200 hover:border-[#0369A1]/50 rounded-xl p-4 flex flex-col justify-between gap-2 transition-colors"
                >
                  <div className="text-sm font-bold text-[#0D0A27] leading-snug">
                    {route.origin} <span className="text-[#0369A1]">→</span> {route.destination}
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-700 font-medium tabular-nums">
                    <span>Distância: {route.distance}</span>
                    <span className="font-bold text-[#0369A1]">{route.estimatedTime}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
