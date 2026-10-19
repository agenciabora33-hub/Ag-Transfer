import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { FAQS, COMPANY_NAP } from '../data/companyData';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-[#F8FAFC] border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Motion Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14"
        >
          <span className="text-xs font-bold tracking-widest text-[#0284C7] uppercase block mb-2">
            Tire Suas Dúvidas
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0D0A27] tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="mt-2 text-sm text-slate-600 font-medium">
            Tudo o que você precisa saber sobre nossos serviços de transporte executivo e faturamento
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                className="bg-white border border-slate-200/90 hover:border-[#0284C7]/50 rounded-2xl overflow-hidden transition-all duration-200 shadow-xs"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-5 sm:px-6 py-4 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-[#0D0A27] text-sm sm:text-base">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#0284C7] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 font-medium">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Direct question prompt */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 p-6 rounded-2xl bg-sky-50/80 border border-sky-200/90 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-sm"
        >
          <div>
            <p className="text-sm font-bold text-[#0D0A27]">Tem uma dúvida específica sobre seu itinerário?</p>
            <p className="text-xs text-slate-600 font-medium">Nossa central de plantão responde em poucos instantes.</p>
          </div>
          <a
            href={COMPANY_NAP.whatsappBaseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#0D0A27] via-[#0A2540] to-[#0284C7] hover:brightness-110 text-white font-bold text-xs uppercase tracking-wider transition-all shrink-0 shadow-md active:scale-95"
          >
            <MessageCircle className="w-4 h-4 text-[#38BDF8]" />
            <span>Falar com Atendente 24h</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
};
