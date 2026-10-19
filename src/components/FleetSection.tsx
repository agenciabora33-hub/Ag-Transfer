import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Users, Luggage, Shield, Check, MessageCircle } from 'lucide-react';
import { FLEET_VEHICLES, buildWhatsAppUrl } from '../data/companyData';

interface FleetSectionProps {
  onSelectVehicleForQuote: (vehicleName: string) => void;
}

export const FleetSection: React.FC<FleetSectionProps> = ({ onSelectVehicleForQuote }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredFleet = activeCategory === 'all'
    ? FLEET_VEHICLES
    : FLEET_VEHICLES.filter((v) => v.id === activeCategory);

  return (
    <section id="frota" className="py-24 bg-white border-t border-slate-200 relative overflow-hidden">
      {/* Background subtle radial glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#0284C7]/5 rounded-full blur-[160px] pointer-events-none" />

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
            <span className="text-xs font-bold tracking-widest text-[#0284C7] uppercase block mb-2">
              Alto Padrão em Transporte
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0D0A27] tracking-tight text-balance">
              Nossa Frota Executiva
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Veículos novos, rigorosamente higienizados, equipados com tecnologia e comodidades para viagens de curto e longo percurso.
            </p>
          </div>

          {/* Interactive filter segmented controls */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 border border-slate-200 rounded-xl self-start md:self-auto shadow-xs">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-gradient-to-r from-[#0D0A27] to-[#0284C7] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Todos os Veículos
            </button>
            <button
              onClick={() => setActiveCategory('sedan-executivo')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                activeCategory === 'sedan-executivo'
                  ? 'bg-gradient-to-r from-[#0D0A27] to-[#0284C7] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Sedan
            </button>
            <button
              onClick={() => setActiveCategory('suv-executivo')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                activeCategory === 'suv-executivo'
                  ? 'bg-gradient-to-r from-[#0D0A27] to-[#0284C7] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              SUV
            </button>
            <button
              onClick={() => setActiveCategory('van-vip')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                activeCategory === 'van-vip'
                  ? 'bg-gradient-to-r from-[#0D0A27] to-[#0284C7] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Van VIP
            </button>
          </div>
        </motion.div>

        {/* Fleet Grid with Animated Presence */}
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredFleet.map((vehicle, idx) => (
              <motion.div
                key={vehicle.id}
                layout
                initial={{ opacity: 0, scale: 0.94, y: 25 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -6 }}
                className="bg-[#F8FAFC] border border-slate-200/90 hover:border-[#0284C7]/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_20px_45px_rgba(2,132,199,0.12)] flex flex-col justify-between group shadow-sm"
              >
                <div>
                  {/* Vehicle Image Container with 3D Zoom on Hover */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={vehicle.image}
                      alt={`${vehicle.name} - Transporte Executivo AG Transfer`}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60" />
                    
                    {/* Category label unboxed overlay */}
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-lg text-[11px] font-bold text-[#0D0A27] border border-slate-200 shadow-sm">
                      {vehicle.category}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#0D0A27] group-hover:text-[#0284C7] transition-colors mb-2">
                      {vehicle.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                      {vehicle.description}
                    </p>

                    {/* Capacity Specs */}
                    <div className="grid grid-cols-2 gap-3 py-3 border-y border-slate-200 mb-5 text-xs text-slate-700 font-medium">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-[#0284C7]" />
                        <span>{vehicle.passengers}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Luggage className="w-4 h-4 text-[#0284C7]" />
                        <span>{vehicle.luggage}</span>
                      </div>
                    </div>

                    {/* Highlights checklist */}
                    <ul className="space-y-2 mb-6 text-xs text-slate-600">
                      {vehicle.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#0284C7] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action */}
                <div className="p-6 pt-0">
                  <a
                    href={buildWhatsAppUrl({ service: `Reserva de Veículo - ${vehicle.name}` })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#0D0A27] hover:bg-[#0284C7] text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 active:scale-[0.98] shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4 text-[#38BDF8]" />
                    <span>Cotar {vehicle.name}</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
