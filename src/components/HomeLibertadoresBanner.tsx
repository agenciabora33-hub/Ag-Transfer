import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Trophy } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

export const HomeLibertadoresBanner: React.FC = () => {
  return (
    <div className="bg-[#0D0A27] text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pl-4 pt-[34px] pb-3.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-start sm:items-center gap-2.5 text-xs sm:text-sm">
          <Trophy className="w-4 h-4 text-amber-300 shrink-0 mt-0.5 sm:mt-0" aria-hidden="true" />
          <p className="font-medium text-slate-100 leading-snug">
            <strong className="text-amber-300 font-bold">Especial Final Libertadores 2026:</strong>{' '}
            Transfer privativo direto do Aeroporto de Porto Alegre (POA) para Montevidéu e Estádio Centenário.
          </p>
        </div>

        <Link
          to="/transfer-porto-alegre-montevideu"
          onClick={() => trackEvent('montevideo_cta_click', { source: 'home_top_banner' })}
          className="inline-flex items-center gap-1.5 min-h-[40px] px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-[#0D0A27] font-extrabold text-xs uppercase tracking-wider transition-colors whitespace-nowrap shrink-0"
        >
          <span>Ver Transfer Montevidéu</span>
          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
};
