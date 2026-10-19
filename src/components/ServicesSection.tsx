import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Plane, Briefcase, Compass, Clock, Check, ArrowRight, MessageCircle, Sparkles, Car, Filter, MapPin } from 'lucide-react';
import { SERVICES, buildWhatsAppUrl } from '../data/companyData';

interface ServicesSectionProps {
  onSelectServiceForQuote: (serviceTitle: string) => void;
}

type ServiceCategory = 'todos' | 'aeroportos' | 'gramado-canela' | 'tours' | 'corporativo';

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForQuote }) => {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory>('todos');

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
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#0284C7]" />;
      default:
        return <Car className="w-6 h-6 text-[#0284C7]" />;
    }
  };

  const categories: { id: ServiceCategory; label: string; count: number }[] = [
    { id: 'todos', label: 'Todos os Serviços', count: SERVICES.length },
    {
      id: 'aeroportos',
      label: 'Transfers Aeroportos (POA / CXJ)',
      count: SERVICES.filter((s) => s.slug.includes('transfer-') || s.slug.includes('aeroporto')).length,
    },
    {
      id: 'gramado-canela',
      label: 'Gramado & Canela',
      count: SERVICES.filter((s) => s.slug.includes('gramado') || s.slug.includes('canela')).length,
    },
    {
      id: 'tours',
      label: 'Tours & Enoturismo',
      count: SERVICES.filter((s) => s.slug.includes('tour-') || s.slug.includes('vinhedos')).length,
    },
    {
      id: 'corporativo',
      label: 'Corporativo & Chauffeur',
      count: SERVICES.filter((s) => s.slug.includes('corporativ') || s.slug.includes('motorista') || s.slug.includes('executivo')).length,
    },
  ];

  const filteredServices = SERVICES.filter((service) => {
    if (selectedCategory === 'todos') return true;
    if (selectedCategory === 'aeroportos') {
      return service.slug.includes('transfer-') || service.slug.includes('aeroporto');
    }
    if (selectedCategory === 'gramado-canela') {
      return service.slug.includes('gramado') || service.slug.includes('canela');
    }
    if (selectedCategory === 'tours') {
      return service.slug.includes('tour-') || service.slug.includes('vinhedos');
    }
    if (selectedCategory === 'corporativo') {
      return (
        service.slug.includes('corporativ') ||
        service.slug.includes('motorista') ||
        service.slug.includes('executivo')
      );
    }
    return true;
  });

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
          className="max-w-3xl mb-10"
        >
          <span className="text-xs font-bold tracking-widest text-[#0284C7] uppercase block mb-2">
            Landing Pages Dedicadas por Destino & Modalidade
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0D0A27] tracking-tight text-balance">
            Transfers e Passeios Privativos em Gramado, Canela e Serra Gaúcha
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 text-pretty">
            Cada serviço conta com uma página exclusiva, tirando todas as dúvidas sobre tempos de trajeto, franquias, tolerância para atrasos de voo e reserva direta via WhatsApp.
          </p>
        </motion.div>

        {/* SXO Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          <Filter className="w-4 h-4 text-slate-400 shrink-0 hidden sm:block ml-1 mr-2" />
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`shrink-0 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#0D0A27] text-white shadow-md'
                  : 'bg-slate-100 hover:bg-slate-200/80 text-slate-700'
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`text-[11px] px-1.5 py-0.5 rounded-full font-mono ${
                  selectedCategory === cat.id
                    ? 'bg-[#0284C7] text-white'
                    : 'bg-slate-200 text-slate-600'
                }`}
              >
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Asymmetric Bento / Service Cards Grid with Staggered Entrance */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredServices.map((service, index) => {
              const indexNumber = `0${index + 1}`;
              return (
                <motion.article
                  key={service.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -4 }}
                  className="group relative bg-[#F8FAFC] hover:bg-white border border-slate-200/90 hover:border-[#0284C7]/50 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between shadow-[0_4px_20px_rgba(15,23,42,0.04)] hover:shadow-[0_15px_35px_rgba(2,132,199,0.12)]"
                >
                  <div>
                    {/* Top card metadata: clean unboxed typographic separator */}
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                      <span className="font-mono text-[#0284C7] font-bold text-sm tracking-wider">
                        {indexNumber}
                      </span>
                      <span className="text-[#0284C7] font-bold bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-100 text-[11px]">
                        {service.tag}
                      </span>
                    </div>

                    {/* Icon & Title */}
                    <div className="flex items-start gap-3.5 mb-3.5">
                      <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 group-hover:border-[#0284C7]/60 group-hover:bg-sky-50 transition-colors shadow-xs">
                        {getIcon(service.icon)}
                      </div>
                      <div>
                        <Link to={`/servicos/${service.slug}`}>
                          <h3 className="text-base sm:text-lg font-bold text-[#0D0A27] hover:text-[#0284C7] transition-colors leading-snug">
                            {service.title}
                          </h3>
                        </Link>
                        <p className="text-[11px] text-slate-500 mt-0.5 font-medium flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-[#0284C7]" />
                          {service.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">
                      {service.description}
                    </p>

                    {/* Key Search Answers Preview */}
                    <div className="bg-white/90 rounded-xl p-3 border border-slate-200/80 mb-5 space-y-1.5 text-[11px] text-slate-700">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-slate-500">Tempo / Rota:</span>
                        <span className="font-bold text-[#0D0A27]">{service.commonRoutes[0]?.time || 'Sob medida'}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-slate-500">Distância:</span>
                        <span className="font-bold text-[#0284C7]">{service.commonRoutes[0]?.distance || 'Flexível'}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-slate-500">Atraso de Voo:</span>
                        <span className="font-bold text-emerald-600">Tolerância Sem Custo</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="pt-3 border-t border-slate-200/80 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
                    <Link
                      to={`/servicos/${service.slug}`}
                      className="inline-flex items-center justify-center gap-1.5 text-xs font-bold text-[#0284C7] hover:text-[#0369A1] transition-colors py-1.5"
                    >
                      <span>Acessar Landing Page</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>

                    <a
                      href={buildWhatsAppUrl({ service: service.title })}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-[#0D0A27] hover:bg-[#0284C7] text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-xs"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-[#38BDF8]" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
