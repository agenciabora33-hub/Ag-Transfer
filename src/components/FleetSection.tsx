import React from 'react';
import { Users, Briefcase, Check, MessageCircle } from 'lucide-react';
import { FLEET, COMPANY_NAP } from '../data/companyData';

export const FleetSection: React.FC = () => {
  return (
    <section id="frota" className="py-16 sm:py-20 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-bold tracking-widest text-[#0369A1] uppercase block mb-2">
            Conforto & Segurança
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0D0A27] tracking-tight">
            Nossa Frota Executiva Privativa
          </h2>
          <p className="mt-2 text-sm text-slate-700 font-medium leading-relaxed">
            Veículos modernos, higienizados antes de cada embarque, com manutenção rigorosa para enfrentar a serra com suavidade.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
          {FLEET.map((vehicle) => {
            const waUrl = `https://wa.me/${COMPANY_NAP.phoneRaw}?text=${encodeURIComponent(
              `Olá! Gostaria de cotar um transfer utilizando o veículo ${vehicle.name}.`
            )}`;

            return (
              <article
                key={vehicle.id}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="aspect-video w-full bg-slate-100 overflow-hidden">
                    <img
                      src={vehicle.imageUrl}
                      srcSet={vehicle.imageSrcSet}
                      sizes="(max-width: 767px) 92vw, (max-width: 1023px) 46vw, 390px"
                      alt={vehicle.imageAlt}
                      width={800}
                      height={450}
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-6">
                    <p className="text-xs font-bold text-[#0369A1] uppercase tracking-wider mb-1">
                      {vehicle.category}
                    </p>
                    <h3 className="text-xl font-extrabold text-[#0D0A27] mb-2">
                      {vehicle.name}
                    </h3>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-bold text-slate-700 mb-3 tabular-nums">
                      <span className="inline-flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-[#0369A1]" aria-hidden="true" />
                        {vehicle.passengers}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Briefcase className="w-3.5 h-3.5 text-[#0369A1]" aria-hidden="true" />
                        {vehicle.luggage}
                      </span>
                    </div>

                    <p className="text-sm text-slate-700 leading-relaxed mb-4">
                      {vehicle.description}
                    </p>

                    <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                      {vehicle.features.map((feat) => (
                        <li key={feat} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0" aria-hidden="true" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="px-6 pb-6">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full min-h-[44px] inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0D0A27] via-[#0A2540] to-[#0369A1] hover:brightness-110 text-white font-bold text-xs uppercase tracking-wider transition-all"
                  >
                    <MessageCircle className="w-4 h-4 text-[#38BDF8]" aria-hidden="true" />
                    <span>Reservar {vehicle.name}</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
