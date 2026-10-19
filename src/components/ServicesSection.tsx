import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Plane, Briefcase, Compass, Clock, Check, ArrowRight, MessageCircle } from 'lucide-react';
import { SERVICES, buildWhatsAppUrl } from '../data/companyData';

interface ServicesSectionProps {
  onSelectServiceForQuote: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForQuote }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Plane':
        return <Plane className="w-6 h-6 text-[#0284C7]" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-[#0284C7]" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-[#0284C7]" />;
      case 'Clock':
        return <Clock className="w-6 h-6 text-[#0284C7]" />;
      default:
        return <Plane className="w-6 h-6 text-[#0284C7]" />;
    }
  };

  return (
    <section id="servicos" className="py-24 bg-white border-t border-slate-200 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#0284C7]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with dynamic scroll reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-14"
        >
          <span className="text-xs font-bold tracking-widest text-[#0284C7] uppercase block mb-2">
            Excelência Operacional
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0D0A27] tracking-tight text-balance">
            Soluções Especializadas em Mobilidade Corporativa e Privativa
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 text-pretty">
            Cada trajeto é planejado sob os mais rigorosos padrões de segurança, pontualidade britânica e discrição absoluta para pessoas físicas e empresas.
          </p>
        </motion.div>

        {/* Asymmetric Bento / Service Cards Grid with Staggered Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES.map((service, index) => {
            const indexNumber = `0${index + 1}`;
            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -4 }}
                className="group relative bg-[#F8FAFC] hover:bg-white border border-slate-200/90 hover:border-[#0284C7]/50 rounded-2xl p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between shadow-[0_4px_20px_rgba(15,23,42,0.04)] hover:shadow-[0_15px_35px_rgba(2,132,199,0.12)]"
              >
                <div>
                  {/* Top card metadata: clean unboxed typographic separator */}
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                    <span className="font-mono text-[#0284C7] font-bold text-sm tracking-wider">
                      {indexNumber}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-[#0D0A27] font-semibold">{service.subtitle}</span>
                      <span aria-hidden="true" className="text-slate-300">·</span>
                      <span className="text-[#0284C7] font-bold">{service.tag}</span>
                    </div>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 group-hover:border-[#0284C7]/60 group-hover:bg-sky-50 transition-colors shadow-xs">
                      {getIcon(service.icon)}
                    </div>
                    <div>
                      <Link to={`/servicos/${service.slug}`}>
                        <h3 className="text-xl font-bold text-[#0D0A27] hover:text-[#0284C7] transition-colors">
                          {service.title}
                        </h3>
                      </Link>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Atendimento 24h com motoristas bilíngues sob solicitação
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Feature Checkpoints */}
                  <ul className="space-y-2.5 mb-8 text-xs sm:text-sm text-slate-700">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-[#0284C7] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Footer Actions */}
                <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-3">
                  <Link
                    to={`/servicos/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0284C7] hover:text-[#0369A1] transition-colors"
                  >
                    <span>Ver Página do Serviço</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <a
                    href={buildWhatsAppUrl({ service: service.title })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0D0A27] hover:bg-[#0284C7] text-white border border-transparent text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-xs"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#38BDF8]" />
                    <span>Cotar no WhatsApp</span>
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
