import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Clock, CheckCheck, ArrowRight } from 'lucide-react';
import { COMPANY_NAP } from '../data/companyData';

export const FloatingWhatsAppCTA: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Auto-dismiss or gently pulse tooltip after 8 seconds if not interacted
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasInteracted) {
        setShowTooltip(false);
      }
    }, 12000);
    return () => clearTimeout(timer);
  }, [hasInteracted]);

  const defaultMessage = encodeURIComponent(
    "Olá! Gostaria de cotar um transfer executivo com a AG Transfer. Poderiam me passar mais informações?"
  );
  const whatsappUrl = `https://wa.me/${COMPANY_NAP.phoneRaw}?text=${defaultMessage}`;

  return (
    <div
      className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end pointer-events-auto"
      aria-label="Atendimento Imediato via WhatsApp"
    >
      {/* Floating Executive Speech Bubble / Teaser */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="mb-3 max-w-[260px] sm:max-w-xs bg-white/98 backdrop-blur-xl border border-slate-200/90 rounded-2xl p-3.5 shadow-[0_12px_35px_rgba(15,23,42,0.18)] relative text-xs"
          >
            {/* Close tooltip button */}
            <button
              onClick={() => {
                setShowTooltip(false);
                setHasInteracted(true);
              }}
              className="absolute top-2.5 right-2.5 p-1 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
              aria-label="Fechar mensagem"
            >
              <X className="w-3.5 h-3.5" />
            </button>

            {/* Header info */}
            <div className="flex items-center gap-2 mb-2 pr-4">
              <div className="relative">
                <div className="w-8 h-8 rounded-full bg-[#0D0A27] flex items-center justify-center text-white font-serif font-bold text-xs p-1">
                  <img src="/logo.png" alt="AG" className="w-full h-full object-contain" />
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full"></span>
              </div>
              <div>
                <p className="font-bold text-[#0D0A27] leading-tight">Central AG Transfer</p>
                <div className="flex items-center gap-1 text-[11px] text-emerald-600 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>Online agora · Resposta rápida</span>
                </div>
              </div>
            </div>

            {/* Bubble Message */}
            <p className="text-slate-600 text-[11px] leading-relaxed mb-3">
              Olá! Precisa de transporte executivo ou transfer para aeroportos? Solicite sua cotação instantânea pelo WhatsApp.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setHasInteracted(true)}
              className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[11px] uppercase tracking-wider transition-all shadow-sm group"
            >
              <span>Iniciar Conversa</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>

            {/* Tail arrow */}
            <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white border-r border-b border-slate-200 transform rotate-45"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating WhatsApp Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir WhatsApp da AG Transfer"
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        onClick={() => setHasInteracted(true)}
        className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-emerald-600 via-[#25D366] to-emerald-400 text-white shadow-[0_10px_30px_rgba(37,211,102,0.45)] hover:shadow-[0_15px_35px_rgba(37,211,102,0.6)] transition-all duration-300 cursor-pointer"
      >
        {/* Pulsing beacon radar ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-35 animate-ping pointer-events-none"></span>

        {/* WhatsApp Icon */}
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-white text-white drop-shadow-sm transition-transform duration-300 group-hover:scale-110" />

        {/* Notification Badge: "1" */}
        <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-extrabold text-white border-2 border-white shadow-sm">
          1
        </span>
      </motion.a>
    </div>
  );
};
