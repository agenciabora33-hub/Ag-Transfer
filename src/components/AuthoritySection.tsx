import React from 'react';
import { ShieldCheck, Clock, Award, MessageCircle } from 'lucide-react';
import { TRUST_PILLARS, COMPANY_NAP } from '../data/companyData';

export const AuthoritySection: React.FC = () => {
  const icons = [Clock, ShieldCheck, Award, MessageCircle];

  return (
    <section id="diferenciais" className="py-16 sm:py-20 bg-[#0D0A27] text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-bold tracking-widest text-[#38BDF8] uppercase block mb-2">
            Por que viajar com a AG Transfer
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Padrão Executivo em Cada Quilômetro na Serra Gaúcha
          </h2>
          <p className="mt-2 text-sm text-slate-300 leading-relaxed font-medium">
            Eliminamos imprevistos desde o desembarque até o retorno ao aeroporto, com operação dedicada de segunda a domingo, das 05h às 23h.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_PILLARS.map((pillar, idx) => {
            const Icon = icons[idx] || ShieldCheck;
            return (
              <div
                key={pillar.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-[#0369A1]/25 border border-[#38BDF8]/30 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#38BDF8]" aria-hidden="true" />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#38BDF8] mb-1">
                    {pillar.metric}
                  </p>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight Bar */}
        <div className="mt-10 rounded-2xl bg-white/5 border border-white/10 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white">
              Faturamento para Empresas e Receptivo VIP para Eventos
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Atendemos feiras, congressos, executivos e viagens em grupo com Nota Fiscal e contrato confirmado por escrito.
            </p>
          </div>
          <a
            href={COMPANY_NAP.whatsappBaseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider whitespace-nowrap shrink-0 transition-colors"
          >
            <MessageCircle className="w-4 h-4" aria-hidden="true" />
            <span>Falar com a Central</span>
          </a>
        </div>
      </div>
    </section>
  );
};
