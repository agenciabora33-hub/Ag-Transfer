import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { COMPANY_NAP } from '../data/companyData';

interface MobileStickyCTAProps {
  onOpenQuoteModal: () => void;
}

export const MobileStickyCTA: React.FC<MobileStickyCTAProps> = ({ onOpenQuoteModal }) => {
  return (
    <aside
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-lg border-t border-slate-200 px-3 py-2.5 shadow-[0_-8px_25px_rgba(15,23,42,0.1)]"
      style={{ maxHeight: '14vh' }}
      aria-label="Atendimento Rápido Mobile"
    >
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <a
          href={`tel:${COMPANY_NAP.phoneRaw}`}
          className="flex flex-col items-center justify-center w-12 h-11 rounded-xl bg-slate-100 text-[#0284C7] border border-slate-200 active:scale-95 transition-transform shrink-0"
          aria-label="Ligar 24 Horas"
        >
          <Phone className="w-4 h-4" />
          <span className="text-[9px] font-bold text-slate-800 mt-0.5">24h</span>
        </a>

        <a
          href={COMPANY_NAP.whatsappBaseUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 h-11 px-4 rounded-xl bg-gradient-to-r from-[#0D0A27] via-[#0A2540] to-[#0284C7] text-white font-bold text-xs uppercase tracking-wider shadow-md active:scale-[0.98] transition-transform text-center whitespace-nowrap"
        >
          <MessageCircle className="w-4 h-4 text-[#38BDF8]" />
          <span>Solicitar Transfer no WhatsApp</span>
        </a>
      </div>
    </aside>
  );
};
