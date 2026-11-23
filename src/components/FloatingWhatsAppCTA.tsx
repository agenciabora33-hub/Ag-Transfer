import React, { useState, useEffect } from 'react';
import { MessageCircle, X, ArrowRight } from 'lucide-react';
import { COMPANY_NAP } from '../data/companyData';

export const FloatingWhatsAppCTA: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Subtle delayed desktop teaser (only shown once after 3.5s on desktop, auto-dismisses)
  useEffect(() => {
    const showTimer = setTimeout(() => {
      if (!hasInteracted && typeof window !== 'undefined' && window.innerWidth >= 768) {
        setShowTooltip(true);
      }
    }, 3500);
    const hideTimer = setTimeout(() => {
      if (!hasInteracted) {
        setShowTooltip(false);
      }
    }, 12000);
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [hasInteracted]);

  const defaultMessage = encodeURIComponent(
    "Olá! Gostaria de cotar um transfer executivo com a AG Transfer. Poderiam me passar mais informações?"
  );
  const whatsappUrl = `https://wa.me/${COMPANY_NAP.phoneRaw}?text=${defaultMessage}`;

  return (
    <div
      className="fixed bottom-6 right-6 z-50 hidden md:flex flex-col items-end pointer-events-auto"
      aria-label="Atendimento Imediato via WhatsApp"
    >
      {/* Floating Executive Speech Bubble / Teaser */}
      {showTooltip && (
        <div className="mb-3 max-w-xs bg-white/98 backdrop-blur-md border border-slate-200/90 rounded-2xl p-3.5 shadow-[0_12px_35px_rgba(15,23,42,0.18)] relative text-xs animate-fadeIn">
          {/* Close tooltip button */}
          <button
            type="button"
            onClick={() => {
              setShowTooltip(false);
              setHasInteracted(true);
            }}
            className="absolute top-2.5 right-2.5 p-1 text-slate-600 hover:text-slate-900 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Fechar mensagem"
          >
            <X className="w-3.5 h-3.5" aria-hidden="true" />
          </button>

          {/* Header info */}
          <div className="flex items-center gap-2 mb-2 pr-4">
            <div className="relative">
              <div className="w-8 h-8 rounded-full bg-[#0D0A27] flex items-center justify-center text-white font-serif font-bold text-xs p-1">
                <img
                  src={COMPANY_NAP.logoSmUrl}
                  alt="AG"
                  width={32}
                  height={32}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-600 border-2 border-white rounded-full" aria-hidden="true"></span>
            </div>
            <div>
              <p className="font-bold text-[#0D0A27] leading-tight">Central AG Transfer</p>
              <div className="flex items-center gap-1 text-[11px] text-emerald-700 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" aria-hidden="true"></span>
                <span>Seg a Dom · 05h às 23h</span>
              </div>
            </div>
          </div>

          {/* Bubble Message */}
          <p className="text-slate-700 text-[11px] leading-relaxed mb-3">
            Olá! Precisa de transporte executivo ou transfer para aeroportos? Solicite sua cotação instantânea pelo WhatsApp.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setHasInteracted(true)}
            className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-[11px] uppercase tracking-wider transition-all shadow-sm group"
          >
            <span>Iniciar Conversa</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
          </a>

          {/* Tail arrow */}
          <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white border-r border-b border-slate-200 transform rotate-45" aria-hidden="true"></div>
        </div>
      )}

      {/* Main Floating WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir WhatsApp da AG Transfer"
        onClick={() => setHasInteracted(true)}
        className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white shadow-[0_10px_30px_rgba(4,120,87,0.45)] hover:shadow-[0_15px_35px_rgba(4,120,87,0.6)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
      >
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-white text-white drop-shadow-sm transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
        <span className="sr-only">Atendimento WhatsApp</span>
      </a>
    </div>
  );
};
