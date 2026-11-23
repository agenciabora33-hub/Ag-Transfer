import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Clock, Phone } from 'lucide-react';
import { COVERAGE_AREAS, COMPANY_NAP } from '../data/companyData';
import { CITIES_SERVED } from '../data/cityData';

export const CoverageSection: React.FC = () => {
  return (
    <section id="cobertura" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Side: Coverage Area Statement (Zero Physical Street Address) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold tracking-widest text-[#0369A1] uppercase block mb-2">
                Área de Atuação Regional
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0D0A27] tracking-tight">
                Área de Cobertura Oficial na Serra Gaúcha e Aeroportos
              </h2>
              <p className="mt-2 text-sm text-slate-700 font-medium leading-relaxed">
                Operamos exclusivamente com agendamento e embarque porta a porta direto em hotéis, aeroportos, condomínios e eventos nas cidades atendidas.
              </p>
            </div>

            <div className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-6 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#0369A1] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h3 className="text-sm font-extrabold text-[#0D0A27]">
                    Área de Cobertura
                  </h3>
                  <ul className="mt-2 space-y-1.5 text-sm text-slate-700 font-medium">
                    {COVERAGE_AREAS.map((area) => (
                      <li key={area.slug}>{area.label}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 space-y-2 text-xs text-slate-700 font-medium">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-700 shrink-0" aria-hidden="true" />
                  <span>
                    <strong className="text-[#0D0A27]">Horário de Atendimento:</strong> {COMPANY_NAP.operatingHours}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#0369A1] shrink-0" aria-hidden="true" />
                  <span>
                    <strong className="text-[#0D0A27]">Central / WhatsApp:</strong>{' '}
                    <a href={`tel:${COMPANY_NAP.phoneRaw}`} className="text-[#0369A1] font-bold hover:underline tabular-nums">
                      {COMPANY_NAP.phone}
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: All 9 City Landing Pages */}
          <div className="lg:col-span-7">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 mb-4">
              Cidades Atendidas com Páginas Dedicadas
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {CITIES_SERVED.map((city) => (
                <Link
                  key={city.id}
                  to={`/cidades/${city.slug}`}
                  className="group bg-[#F8FAFC] hover:bg-white border border-slate-200 hover:border-[#0369A1]/60 rounded-2xl p-5 flex flex-col justify-between transition-all hover:shadow-sm"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-xs font-bold text-[#0369A1]">
                        {city.postalCode ? `CEP ${city.postalCode}` : 'RS, Brasil'}
                      </span>
                      <ArrowRight
                        className="w-3.5 h-3.5 text-[#0369A1] opacity-70 group-hover:translate-x-0.5 transition-transform"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="text-base font-extrabold text-[#0D0A27] group-hover:text-[#0369A1] transition-colors">
                      {city.name}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 line-clamp-2 font-medium">
                      {city.region}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-200/80 text-[11px] font-semibold text-slate-700 tabular-nums">
                    POA: {city.distanceFromPoa}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
