import React, { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { FAQS, COMPANY_NAP } from '../data/companyData';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 sm:py-24 bg-[#F8FAFC] border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-xs font-bold tracking-widest text-[#0369A1] uppercase block mb-2">
            Tire Suas Dúvidas
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0D0A27] tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="mt-2 text-sm text-slate-700 font-medium">
            Tudo o que você precisa saber sobre nossos serviços de transporte executivo e faturamento
          </p>
        </div>

        {/* Accordion (Zero motion/react overhead) */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const panelId = `faq-panel-${idx}`;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200/90 hover:border-[#0369A1]/50 rounded-2xl overflow-hidden transition-all duration-200 shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full min-h-[52px] text-left px-5 sm:px-6 py-4 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0369A1]"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                >
                  <span className="font-bold text-[#0D0A27] text-sm sm:text-base">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#0369A1] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>

                <div
                  id={panelId}
                  hidden={!isOpen}
                  className={isOpen ? 'animate-fadeIn' : 'hidden'}
                >
                  <div className="px-5 sm:px-6 pb-5 pt-2 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 font-medium">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Direct question prompt */}
        <div className="mt-12 p-6 rounded-2xl bg-sky-50/80 border border-sky-200/90 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-sm">
          <div>
            <p className="text-sm font-bold text-[#0D0A27]">Tem uma dúvida específica sobre seu itinerário?</p>
            <p className="text-xs text-slate-700 font-medium">Nossa central atende de segunda a domingo, das 05h às 23h, e responde em poucos instantes.</p>
          </div>
          <a
            href={COMPANY_NAP.whatsappBaseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#0D0A27] via-[#0A2540] to-[#0369A1] hover:brightness-110 text-white font-bold text-xs uppercase tracking-wider transition-all shrink-0 shadow-md active:scale-95"
          >
            <MessageCircle className="w-4 h-4 text-[#38BDF8]" aria-hidden="true" />
            <span>Falar com Atendente</span>
          </a>
        </div>

      </div>
    </section>
  );
};
