import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, ArrowRight, Sparkles, MapPin } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

export const HomeLibertadoresBanner: React.FC = () => {
  const handleClick = () => {
    trackEvent('click_banner_libertadores', {
      source: 'home_hero_banner',
      target: '/transfer-porto-alegre-montevideu',
    });
  };

  return (
    <div className="w-full bg-gradient-to-r from-[#0D0A27] via-[#0A2540] to-[#0284C7] text-white border-b border-sky-500/30 relative overflow-hidden shadow-md">
      {/* Subtle shine effect */}
      <div className="absolute top-0 right-0 w-80 h-full bg-white/5 skew-x-12 pointer-events-none" />

      <div className="max-w-7xl mx-auto pl-4 pr-4 sm:pr-6 lg:pr-8 pt-[34px] pb-3 sm:pb-3.5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-400/30 flex items-center justify-center shrink-0 shadow-xs">
              <Trophy className="w-4 h-4 fill-amber-400 text-amber-400" />
            </div>

            <div className="text-xs sm:text-sm">
              <span className="font-extrabold text-amber-300 uppercase tracking-wider text-[11px] block sm:inline sm:mr-2">
                Especial Libertadores 2026:
              </span>
              <span className="text-white font-medium">
                Transfer privativo direto do Aeroporto de Porto Alegre (POA) para Montevidéu &bull; Estádio Centenário.
              </span>
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-2">
            <Link
              to="/transfer-porto-alegre-montevideu"
              onClick={handleClick}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow-sm transition-all hover:scale-105 active:scale-95"
            >
              <span>Ver Transfer Montevidéu</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};
