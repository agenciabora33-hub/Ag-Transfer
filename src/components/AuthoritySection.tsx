import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Award, Clock, FileText, CheckCircle2, Star, ExternalLink } from 'lucide-react';
import { TRUST_PILLARS, COMPANY_NAP } from '../data/companyData';
import { BrandLogo } from './BrandLogo';

export const AuthoritySection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-7 h-7 text-[#0284C7]" />;
      case 'Award':
        return <Award className="w-7 h-7 text-[#0284C7]" />;
      case 'Clock':
        return <Clock className="w-7 h-7 text-[#0284C7]" />;
      case 'FileText':
        return <FileText className="w-7 h-7 text-[#0284C7]" />;
      default:
        return <ShieldCheck className="w-7 h-7 text-[#0284C7]" />;
    }
  };

  return (
    <section id="diferenciais" className="py-24 bg-[#F8FAFC] border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Motion Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <Award className="w-4 h-4 text-[#0284C7]" />
            <span className="text-xs font-bold tracking-widest text-[#0284C7] uppercase">
              Autoridade e Confiança Comprovada (E-E-A-T)
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0D0A27] tracking-tight text-balance">
            Por Que Escolher a AG Transfer Executivo?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 text-pretty">
            Diretrizes operacionais rigorosas, processos de conformidade e mais de 200 avaliações 5 estrelas no Google Business Profile respaldam nossa atuação no Rio Grande do Sul.
          </p>
        </motion.div>

        {/* 4 Trust Blocks Grid with Staggered Entrance */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_PILLARS.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                delay: idx * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -5 }}
              className="bg-white border border-slate-200/90 hover:border-[#0284C7]/50 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between shadow-[0_4px_20px_rgba(15,23,42,0.05)] hover:shadow-[0_15px_30px_rgba(2,132,199,0.12)]"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shadow-xs">
                    {getIcon(pillar.icon)}
                  </div>
                  <span className="text-xs font-bold text-[#0284C7] font-mono">
                    {pillar.metric}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#0D0A27] mb-2.5">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Garantia de conformidade</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* E-E-A-T GBP Highlight Banner with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 bg-gradient-to-r from-sky-50 via-white to-blue-50 border border-sky-200/90 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md"
        >
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
            <BrandLogo size="lg" />
            <div className="space-y-1.5">
              <div className="flex items-center justify-center sm:justify-start gap-1.5 text-[#0284C7]">
                <Star className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                <span className="text-xs font-bold uppercase tracking-wider">GBP Verificado Oficialmente</span>
              </div>
              <h4 className="text-base sm:text-lg font-extrabold text-[#0D0A27]">
                Mais de 200 avaliações com nota máxima (5.0) no Google Business Profile
              </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              Veja relatos reais de passageiros, empresários e famílias que confiam na AG Transfer para seus deslocamentos corporativos e turísticos.
            </p>
          </div>
        </div>
          <a
            href={COMPANY_NAP.gbpUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0D0A27] hover:bg-[#0284C7] text-xs font-bold text-white transition-colors uppercase tracking-wider whitespace-nowrap shrink-0 shadow-md group"
          >
            <span>Conferir Avaliações no GBP</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#38BDF8] group-hover:text-white transition-colors" />
          </a>
        </motion.div>

        {/* Corporate Trust Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs"
        >
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-base font-bold text-[#0D0A27]">
              Sua empresa precisa de convênio corporativo com faturamento mensal?
            </h4>
            <p className="text-xs text-slate-600">
              Cadastre o CNPJ da sua organização e tenha uma linha direta com nossa gerência operacional com emissão de NFS-e.
            </p>
          </div>
          <a
            href="https://wa.me/5554991537288?text=Ol%C3%A1,%20gostaria%20de%20solicitar%20uma%20proposta%20de%20faturamento%20corporativo%20para%20minha%20empresa."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-xs font-semibold text-slate-700 hover:text-slate-900 border border-slate-200 transition-colors uppercase tracking-wider whitespace-nowrap shrink-0"
          >
            <span>Falar com Gerência B2B</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
};
