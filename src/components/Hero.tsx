import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { MessageCircle, ChevronRight, Star, Car, MapPin, Calendar, Users, Send, Plane, ShieldCheck, Sparkles } from 'lucide-react';
import { COMPANY_NAP, ASSET_IMAGES, buildWhatsAppUrl } from '../data/companyData';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  const [selectedService, setSelectedService] = useState('Transfer Aeroporto (POA / CXI)');
  const [origin, setOrigin] = useState('Caxias do Sul');
  const [destination, setDestination] = useState('Aeroporto Salgado Filho (POA)');
  const [date, setDate] = useState('');
  const [passengers, setPassengers] = useState('1 a 3 passageiros (Sedan Executivo)');

  // 3D Tilt effect on the simulator card
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), {
    damping: 20,
    stiffness: 150,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), {
    damping: 20,
    stiffness: 150,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleQuickPreset = (presetOrigin: string, presetDest: string, presetService: string) => {
    setOrigin(presetOrigin);
    setDestination(presetDest);
    setSelectedService(presetService);
  };

  const handleQuickQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = buildWhatsAppUrl({
      service: selectedService,
      origin,
      destination,
      date: date || 'A definir',
      passengers,
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="inicio" className="relative min-h-[96vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-[#F8FAFC]">
      {/* Background Image with Crisp Light Gradient Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={ASSET_IMAGES.hero}
          alt="Frota executiva e chauffeur da AG Transfer em Caxias do Sul e Serra Gaúcha"
          className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000 ease-out opacity-25"
          referrerPolicy="no-referrer"
          loading="eager"
        />
        {/* Soft, crisp light gradient scrims */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#F8FAFC] via-[#F8FAFC]/90 to-[#F8FAFC]/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#F8FAFC] via-[#F8FAFC]/95 to-transparent" />
        
        {/* Animated ambient blue brand glow orbs */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[550px] h-[550px] bg-[#0284C7]/15 rounded-full blur-[140px] pointer-events-none"
        />

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-[#38BDF8]/20 rounded-full blur-[130px] pointer-events-none"
        />
      </div>

      {/* Floating 3D Geometric Blue Rings (Background Ambiance) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
        <motion.div
          animate={{
            y: [-12, 12, -12],
            rotate: [0, 360],
          }}
          transition={{
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 40, repeat: Infinity, ease: "linear" },
          }}
          className="absolute top-20 right-[8%] w-64 h-64 border border-[#0284C7]/15 rounded-full hidden xl:block"
        />
        <motion.div
          animate={{
            y: [10, -10, 10],
            rotate: [360, 0],
          }}
          transition={{
            y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 45, repeat: Infinity, ease: "linear" },
          }}
          className="absolute top-44 right-[12%] w-44 h-44 border border-[#38BDF8]/20 rounded-full border-dashed hidden xl:block"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Content Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            
            {/* E-E-A-T Unboxed Trust Signal with Google Business Profile direct link */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600">
              <a
                href={COMPANY_NAP.gbpUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#0284C7] hover:underline transition-colors"
                title="Ver perfil oficial verificado no Google Business Profile"
              >
                <Star className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                <span className="font-bold text-[#0D0A27] tabular-nums">5.0</span>
                <span>no Google (GBP)</span>
                <span className="text-[#0284C7] font-bold">(+200 avaliações)</span>
              </a>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-[#0D0A27]">Motoristas Profissionais</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              
              {/* Real-time pulsing 24h operational status beacon */}
              <div className="inline-flex items-center gap-1.5 text-xs text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>24/7 Ativo</span>
              </div>
            </div>

            {/* Strict Single H1 for SEO/GEO with balanced typography in deep navy and blue */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0D0A27] tracking-tight leading-[1.14] text-balance">
              Transporte Executivo e Transfer Premium em{' '}
              <span className="bg-gradient-to-r from-[#0D0A27] via-[#0A2540] to-[#0284C7] bg-clip-text text-transparent">
                Caxias do Sul e Serra Gaúcha
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed text-pretty">
              Pontualidade absoluta, discrição e veículos de alto padrão para viagens corporativas, aeroportos (POA / CXI) e rotas turísticas. Atendimento 24 horas com motoristas qualificados.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={COMPANY_NAP.whatsappBaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#0D0A27] via-[#0A2540] to-[#0284C7] text-white font-bold text-sm uppercase tracking-wider transition-all duration-300 hover:brightness-110 hover:shadow-[0_8px_25px_rgba(2,132,199,0.35)] active:scale-[0.98] text-center overflow-hidden shadow-sm"
              >
                <div className="absolute inset-0 bg-white/15 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
                <MessageCircle className="w-5 h-5 relative z-10 text-[#38BDF8]" />
                <span className="relative z-10">Solicitar Cotação no WhatsApp</span>
              </a>

              <a
                href="#frota"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-slate-300 hover:border-[#0284C7] text-slate-800 hover:text-[#0284C7] font-semibold text-sm transition-all duration-200 hover:bg-white text-center shadow-xs"
              >
                <span>Conhecer Frota e Serviços</span>
                <ChevronRight className="w-4 h-4 text-[#0284C7]" />
              </a>
            </div>

            {/* Floating 3D Micro-Card for Airport Receptive (visible on desktop) */}
            <motion.div
              animate={{
                y: [-5, 5, -5],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="hidden sm:inline-flex items-center gap-3 p-3 px-4 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-md text-xs"
            >
              <div className="w-9 h-9 rounded-lg bg-[#0D0A27] flex items-center justify-center text-[#38BDF8] shadow-xs">
                <Plane className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[#0D0A27] font-bold block">Receptivo Aeroportos POA & CXI</span>
                <span className="text-slate-500 text-[11px]">Monitoramento contínuo de status do voo para pontualidade rigorosa</span>
              </div>
            </motion.div>

            {/* Trust Highlights Strip with 4 items */}
            <div className="pt-4 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <a
                href={COMPANY_NAP.gbpUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block hover:opacity-90 transition-opacity"
              >
                <span className="block text-xl font-bold text-[#0284C7] tabular-nums group-hover:underline">
                  +200 Avaliações
                </span>
                <span className="text-xs text-slate-500 font-medium">5.0 Estrelas no GBP</span>
              </a>
              <div>
                <span className="block text-xl font-bold text-[#0D0A27] tabular-nums">24h / 7d</span>
                <span className="text-xs text-slate-500 font-medium">Prontidão Ininterrupta</span>
              </div>
              <div>
                <span className="block text-xl font-bold text-[#0D0A27] tabular-nums">100%</span>
                <span className="text-xs text-slate-500 font-medium">Seguro APP Passageiros</span>
              </div>
              <div>
                <span className="block text-xl font-bold text-[#0D0A27]">PJ & NF</span>
                <span className="text-xs text-slate-500 font-medium">Faturamento Corporativo</span>
              </div>
            </div>

          </motion.div>

          {/* 3D Interactive Console / Fast Quote Simulator Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
            style={{ perspective: 1000 }}
          >
            {/* Floating 3D Badge: Google 5.0 Top Right */}
            <motion.div
              animate={{
                y: [5, -5, 5],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-5 -right-3 z-20 hidden sm:flex items-center gap-2 bg-white/98 backdrop-blur-xl border border-slate-200 rounded-xl px-3.5 py-1.5 shadow-[0_8px_20px_rgba(15,23,42,0.1)]"
            >
              <div className="flex text-[#F59E0B]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-[#F59E0B]" />
                ))}
              </div>
              <span className="text-[11px] font-bold text-[#0D0A27] tabular-nums">+200 no Google</span>
            </motion.div>

            {/* Floating 3D Badge: Chauffeur Bottom Left */}
            <motion.div
              animate={{
                y: [-5, 5, -5],
              }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-5 -left-3 z-20 hidden sm:flex items-center gap-2 bg-white/98 backdrop-blur-xl border border-emerald-200 rounded-xl px-3.5 py-1.5 shadow-[0_8px_20px_rgba(15,23,42,0.1)]"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-[11px] font-semibold text-slate-800">Veículos Inspecionados</span>
            </motion.div>

            {/* Interactive 3D Tilt Wrapper */}
            <motion.div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              className="bg-white/95 backdrop-blur-2xl border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-[0_20px_50px_rgba(15,23,42,0.08)] relative overflow-hidden transition-shadow duration-300 hover:shadow-[0_25px_60px_rgba(2,132,199,0.15)]"
            >
              
              {/* Blue accent perimeter line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0D0A27] via-[#0284C7] to-[#38BDF8]" />
              
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-[#0284C7] font-semibold uppercase tracking-wider mb-0.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Cotação Imediata</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0D0A27]">Simulador de Transfer</h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-200 text-[#0284C7] shadow-xs">
                  <Car className="w-5 h-5" />
                </div>
              </div>

              {/* Fast Presets Selector */}
              <div className="mb-4">
                <span className="block text-[11px] text-slate-500 mb-1.5 font-medium">Rotas Rápidas Mais Solicitadas:</span>
                <div className="grid grid-cols-3 gap-1.5">
                  <button
                    type="button"
                    onClick={() => handleQuickPreset('Caxias do Sul', 'Aeroporto Salgado Filho (POA)', 'Transfer Aeroporto (POA / CXI)')}
                    className="p-1.5 text-[11px] rounded-lg bg-slate-50 hover:bg-sky-50 border border-slate-200 hover:border-[#0284C7]/50 text-slate-700 hover:text-[#0284C7] font-medium transition-all text-center cursor-pointer"
                  >
                    POA ⇄ CXI
                  </button>
                  <button
                    type="button"
                    onClick={() => handleQuickPreset('Caxias do Sul', 'Gramado / Canela', 'Turismo VIP Gramado & Canela')}
                    className="p-1.5 text-[11px] rounded-lg bg-slate-50 hover:bg-sky-50 border border-slate-200 hover:border-[#0284C7]/50 text-slate-700 hover:text-[#0284C7] font-medium transition-all text-center cursor-pointer"
                  >
                    CXI ⇄ Gramado
                  </button>
                  <button
                    type="button"
                    onClick={() => handleQuickPreset('Caxias do Sul', 'Bento Gonçalves (Vale dos Vinhedos)', 'Rota Vale dos Vinhedos (Bento)')}
                    className="p-1.5 text-[11px] rounded-lg bg-slate-50 hover:bg-sky-50 border border-slate-200 hover:border-[#0284C7]/50 text-slate-700 hover:text-[#0284C7] font-medium transition-all text-center cursor-pointer"
                  >
                    Vale Vinhedos
                  </button>
                </div>
              </div>

              <form onSubmit={handleQuickQuoteSubmit} className="space-y-3.5">
                {/* Service Selection */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Tipo de Serviço
                  </label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 focus:border-[#0284C7] focus:bg-white rounded-lg px-3 py-2 text-xs sm:text-sm text-slate-800 focus:outline-none transition-colors"
                  >
                    <option value="Transfer Aeroporto (POA / CXI)">Transfer Aeroporto (POA / CXI)</option>
                    <option value="Viagem Corporativa / Negócios">Viagem Corporativa / Negócios</option>
                    <option value="Turismo VIP Gramado & Canela">Turismo VIP Gramado & Canela</option>
                    <option value="Rota Vale dos Vinhedos (Bento)">Rota Vale dos Vinhedos (Bento)</option>
                    <option value="Motorista à Disposição (Por Hora/Diária)">Motorista à Disposição (Por Hora/Diária)</option>
                  </select>
                </div>

                {/* Origin & Destination */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#0284C7]" />
                      Origem
                    </label>
                    <input
                      type="text"
                      value={origin}
                      onChange={(e) => setOrigin(e.target.value)}
                      placeholder="Ex: Caxias do Sul"
                      required
                      className="w-full bg-slate-50 border border-slate-200 focus:border-[#0284C7] focus:bg-white rounded-lg px-3 py-2 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#0369A1]" />
                      Destino
                    </label>
                    <input
                      type="text"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      placeholder="Ex: Aeroporto POA"
                      required
                      className="w-full bg-slate-50 border border-slate-200 focus:border-[#0284C7] focus:bg-white rounded-lg px-3 py-2 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Date & Passengers */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#0284C7]" />
                      Data / Horário Previsto
                    </label>
                    <input
                      type="text"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      placeholder="Ex: 15/10 às 08:30"
                      className="w-full bg-slate-50 border border-slate-200 focus:border-[#0284C7] focus:bg-white rounded-lg px-3 py-2 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-[#0284C7]" />
                      Passageiros / Categoria
                    </label>
                    <select
                      value={passengers}
                      onChange={(e) => setPassengers(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-[#0284C7] focus:bg-white rounded-lg px-3 py-2 text-xs sm:text-sm text-slate-800 focus:outline-none transition-colors"
                    >
                      <option value="1 a 3 passageiros (Sedan Executivo)">1 a 3 passageiros (Sedan)</option>
                      <option value="4 a 6 passageiros (SUV Premium)">4 a 6 passageiros (SUV)</option>
                      <option value="7 a 15 passageiros (Van VIP)">7 a 15 passageiros (Van VIP)</option>
                    </select>
                  </div>
                </div>

                {/* Submit to WhatsApp */}
                <button
                  type="submit"
                  className="w-full mt-2 inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#0D0A27] via-[#0A2540] to-[#0284C7] hover:brightness-110 text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md cursor-pointer active:scale-[0.98]"
                >
                  <Send className="w-4 h-4 text-[#38BDF8]" />
                  <span>Enviar Cotação pelo WhatsApp 24h</span>
                </button>

                <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1 font-medium">
                  <span>Atendimento oficial 24 Horas</span>
                  <a
                    href={COMPANY_NAP.gbpUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0284C7] hover:underline font-semibold"
                  >
                    Ver +200 avaliações no GBP
                  </a>
                </div>
              </form>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
