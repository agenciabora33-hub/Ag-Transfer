import React from 'react';
import { Star, ExternalLink } from 'lucide-react';
import { REVIEWS, COMPANY_NAP } from '../data/companyData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="avaliacoes" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-bold tracking-widest text-[#0369A1] uppercase block mb-2">
              Prova Social Verificada
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0D0A27] tracking-tight">
              Nota 5.0 no Google Business Profile
            </h2>
            <p className="mt-2 text-sm text-slate-700 font-medium">
              Mais de 200 clientes atendidos com avaliação máxima em pontualidade, cordialidade e limpeza dos veículos.
            </p>
          </div>

          <a
            href={COMPANY_NAP.gbpUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[44px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#F8FAFC] hover:bg-slate-100 border border-slate-300 text-xs font-bold text-[#0D0A27] transition-colors whitespace-nowrap shrink-0"
          >
            <Star className="w-4 h-4 text-amber-500 fill-amber-500" aria-hidden="true" />
            <span>Ver Avaliações no Google</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#0369A1]" aria-hidden="true" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((review) => (
            <article
              key={review.name}
              className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 mb-3" aria-label={`Avaliação ${review.rating} de 5 estrelas`}>
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-amber-500 fill-amber-500"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="text-sm text-slate-700 leading-relaxed mb-5">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/80">
                <h3 className="text-sm font-extrabold text-[#0D0A27]">
                  {review.name}
                </h3>
                <p className="text-xs text-slate-600 font-medium mt-0.5">
                  {review.origin} · {review.service}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
