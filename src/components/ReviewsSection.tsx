import React from 'react';
import { motion } from 'motion/react';
import { Star, CheckCircle, ExternalLink, Award } from 'lucide-react';
import { REVIEWS, COMPANY_NAP } from '../data/companyData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="avaliacoes" className="py-24 bg-white border-t border-slate-200 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#0284C7]/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Motion Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-4 h-4 text-[#0284C7]" />
              <span className="text-xs font-bold tracking-widest text-[#0284C7] uppercase">
                E-E-A-T · Experiência & Autoridade Comprovada
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0D0A27] tracking-tight text-balance">
              Mais de 200 Avaliações 5 Estrelas no Google Business Profile (GBP)
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Liderança absoluta em pontualidade, discrição e segurança para traslados executivos e turismo VIP na Serra Gaúcha e Grande Porto Alegre.
            </p>
          </div>

          {/* Google 5.0 Rating Summary Card */}
          <div className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center gap-5 shrink-0 shadow-sm">
            <div className="text-center sm:text-left">
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <span className="text-4xl font-extrabold text-[#0D0A27] tabular-nums">5.0</span>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#F59E0B] fill-[#F59E0B]" />
                  ))}
                </div>
              </div>
              <span className="text-xs font-bold text-[#0284C7] block mt-1">
                +200 Avaliações 5 Estrelas
              </span>
            </div>

            <div className="hidden sm:block h-12 w-[1px] bg-slate-200" />

            <div className="text-center sm:text-left text-xs">
              <div className="flex items-center justify-center sm:justify-start gap-1.5 font-bold text-[#0D0A27]">
                <span>Google Business Profile</span>
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
              </div>
              <p className="text-slate-500 mt-0.5 font-medium">Perfil Oficial Verificado</p>
              <a
                href={COMPANY_NAP.gbpUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-[#0284C7] hover:text-[#0369A1] hover:underline mt-2 font-bold"
              >
                <span>Acessar GBP da AG Transfer</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Reviews Cards Grid with Staggered Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REVIEWS.map((review, idx) => (
            <motion.article
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                delay: idx * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -4 }}
              className="bg-[#F8FAFC] hover:bg-white border border-slate-200/90 hover:border-[#0284C7]/50 rounded-2xl p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between shadow-[0_4px_20px_rgba(15,23,42,0.04)] hover:shadow-[0_15px_30px_rgba(2,132,199,0.1)]"
            >
              <div>
                {/* Rating Stars & Source */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-[#F59E0B] fill-[#F59E0B]" />
                    ))}
                  </div>
                  <span className="text-xs text-[#0284C7] font-semibold">{review.date}</span>
                </div>

                {/* Comment */}
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6 italic">
                  "{review.comment}"
                </p>
              </div>

              {/* Reviewer Info */}
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#0D0A27]">{review.name}</h4>
                  <p className="text-xs text-slate-500 font-medium">
                    {review.role} · <span className="text-[#0284C7] font-semibold">{review.company}</span>
                  </p>
                </div>
                <div className="flex items-center gap-1 text-xs text-emerald-600 font-semibold">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Auditada no GBP</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Review Action Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 text-center text-xs text-slate-500 space-y-1 font-medium"
        >
          <div>
            <span>Link do Google Business Profile:{' '}</span>
            <a
              href={COMPANY_NAP.gbpUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0284C7] hover:underline font-bold"
            >
              {COMPANY_NAP.gbpUrl}
            </a>
          </div>
          <p>Mais de 200 avaliações de passageiros e empresas que atestam nossa pontualidade e excelência.</p>
        </motion.div>

      </div>
    </section>
  );
};
