import React, { useState, useEffect } from 'react';
import { MessageCircle, Star, ShieldCheck, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { COMPANY_NAP, SERVICES } from '../data/companyData';
import { trackEvent } from '../utils/analytics';

interface HeroProps {
  onOpenQuoteModal?: () => void;
}

function buildWhatsAppUrl(
  svc: string,
  orig: string,
  dest: string,
  dt: string,
  pax: string
): string {
  const formattedDate = dt ? new Date(`${dt}T12:00:00`).toLocaleDateString('pt-BR') : 'A definir';
  const message = [
    'Olá, equipe AG Transfer! Gostaria de solicitar uma cotação de transfer executivo:',
    `• Serviço: ${svc}`,
    `• Origem: ${orig}`,
    `• Destino: ${dest}`,
    `• Data prevista: ${formattedDate}`,
    `• Passageiros: ${pax}`,
  ].join('\n');

  return `https://wa.me/${COMPANY_NAP.phoneRaw}?text=${encodeURIComponent(message)}`;
}

export const Hero: React.FC<HeroProps> = () => {
  const [selectedService, setSelectedService] = useState('Transfer Aeroporto POA ⇄ Gramado / Canela');
  const [origin, setOrigin] = useState('Aeroporto Salgado Filho (POA)');
  const [destination, setDestination] = useState('Gramado / Canela (Hotéis)');
  const [travelDate, setTravelDate] = useState('');
  const [passengers, setPassengers] = useState('2 passageiros');
  const [submittedNote, setSubmittedNote] = useState<string | null>(null);

  const buildWhatsAppLink = () =>
    buildWhatsAppUrl(selectedService, origin, destination, travelDate, passengers);

  // Register WebMCP imperative tool for Agentic Navigation (Lighthouse 4/4)
  useEffect(() => {
    if (typeof navigator === 'undefined' || !navigator.modelContext?.registerTool) return;

    try {
      navigator.modelContext.registerTool({
        name: 'cotar_transfer',
        description:
          'Prepara e retorna o resumo da cotação de transfer executivo privativo da AG Transfer na Serra Gaúcha e conexões POA/CXJ/Montevidéu.',
        inputSchema: {
          type: 'object',
          properties: {
            servico: { type: 'string', description: 'Tipo de transfer ou tour executivo' },
            origem: { type: 'string', description: 'Local ou aeroporto de embarque' },
            destino: { type: 'string', description: 'Cidade, hotel ou evento de destino' },
            data: { type: 'string', description: 'Data prevista da viagem (YYYY-MM-DD)' },
            passageiros: { type: 'string', description: 'Quantidade de passageiros' },
          },
        },
        execute: (input) => {
          const svc =
            typeof input.servico === 'string' && input.servico
              ? input.servico
              : 'Transfer Aeroporto POA ⇄ Gramado / Canela';
          const orig =
            typeof input.origem === 'string' && input.origem
              ? input.origem
              : 'Aeroporto Salgado Filho (POA)';
          const dest =
            typeof input.destino === 'string' && input.destino
              ? input.destino
              : 'Gramado / Canela (Hotéis)';
          const dt = typeof input.data === 'string' ? input.data : '';
          const pax =
            typeof input.passageiros === 'string' && input.passageiros
              ? input.passageiros
              : '2 passageiros';

          setSelectedService(svc);
          setOrigin(orig);
          setDestination(dest);
          if (dt) setTravelDate(dt);
          setPassengers(pax);

          const whatsappUrl = buildWhatsAppUrl(svc, orig, dest, dt, pax);
          setSubmittedNote('Cotação preparada com sucesso. Clique em Enviar no WhatsApp para confirmar com nossa central.');
          return {
            status: 'ready',
            company: COMPANY_NAP.name,
            hours: COMPANY_NAP.operatingHours,
            phone: COMPANY_NAP.phone,
            whatsappUrl,
          };
        },
      });
    } catch {
      // Safe fallback when WebMCP already registered or unsupported
    }

    return () => {
      try {
        navigator.modelContext?.unregisterTool?.('cotar_transfer');
      } catch {
        // Ignore cleanup errors
      }
    };
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    trackEvent('quote_submit', {
      source: 'hero_simulator',
      service: selectedService,
      origin,
      destination,
      passengers,
    });
    const url = buildWhatsAppLink();
    setSubmittedNote('Resumo gerado! Abrindo atendimento WhatsApp...');
    window.location.href = url;
  };

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-[#F8FAFC] border-b border-slate-200 py-12 sm:py-16 lg:py-20"
    >
      {/* Responsive LCP Background Picture with High-Contrast Light Overlay */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <picture className="block w-full h-full">
          <source media="(max-width: 639px)" srcSet="/images/hero-480.webp" type="image/webp" />
          <source media="(max-width: 1023px)" srcSet="/images/hero-640.webp" type="image/webp" />
          <img
            src="/images/hero-1200.webp"
            alt="Veículo executivo da AG Transfer na Serra Gaúcha"
            width={1200}
            height={675}
            fetchPriority="high"
            loading="eager"
            decoding="sync"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center opacity-20"
          />
        </picture>
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC]/90 via-[#F8FAFC]/82 to-[#F8FAFC]"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            {/* Clean Unboxed Typographic Trust Line (Zero Pill Discipline) */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs font-semibold text-slate-700">
              <span className="inline-flex items-center gap-1.5 text-[#0D0A27]">
                <ShieldCheck className="w-4 h-4 text-[#0369A1]" aria-hidden="true" />
                <span>Empresa Regularizada · CNPJ Ativo</span>
              </span>
              <span aria-hidden="true" className="text-slate-400">
                /
              </span>
              <span className="inline-flex items-center gap-1 text-[#0D0A27]">
                <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" aria-hidden="true" />
                <span>5.0 no Google ({COMPANY_NAP.reviewCount})</span>
              </span>
              <span aria-hidden="true" className="text-slate-400">
                /
              </span>
              <span className="inline-flex items-center gap-1 text-emerald-800">
                <Clock className="w-3.5 h-3.5 text-emerald-700" aria-hidden="true" />
                <span>{COMPANY_NAP.operatingHoursShort}</span>
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0D0A27] tracking-tight leading-[1.12] max-w-2xl">
              Transporte Executivo e Transfer na Serra Gaúcha —{' '}
              <span className="text-[#0369A1]">Gramado, Canela e Bento Gonçalves</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl font-medium">
              Transfers privativos para aeroportos (POA / CXJ), passeios VIP em Gramado e Canela, e tours
              enoturísticos no Vale dos Vinhedos. Pontualidade britânica, discrição e veículos de alto padrão de
              segunda a domingo, das 05h às 23h.
            </p>

            {/* Primary & Secondary Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('whatsapp_click', { source: 'hero_primary_cta' })}
                className="min-h-[48px] inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#0D0A27] via-[#0A2540] to-[#0369A1] hover:brightness-110 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md transition-all active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4 text-[#38BDF8]" aria-hidden="true" />
                <span>Solicitar Cotação no WhatsApp</span>
              </a>

              <a
                href="#servicos"
                className="min-h-[48px] inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-[#0D0A27] border border-slate-300 font-bold text-xs sm:text-sm transition-colors"
              >
                <span>Conhecer Serviços e Rotas</span>
                <ArrowRight className="w-4 h-4 text-[#0369A1]" aria-hidden="true" />
              </a>
            </div>

            {/* Direct Concise Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3 border-t border-slate-200/90 text-xs text-slate-700 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0369A1] shrink-0" aria-hidden="true" />
                <span>Veículo 100% privativo</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0369A1] shrink-0" aria-hidden="true" />
                <span>Monitoramento de voos POA/CXJ</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0369A1] shrink-0" aria-hidden="true" />
                <span>Cadeirinha infantil cortesia</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Quote Simulator (with WebMCP + Full Form Accessibility) */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-[0_12px_36px_rgba(15,23,42,0.08)]">
              <div className="mb-5">
                <h2 className="text-lg sm:text-xl font-extrabold text-[#0D0A27] tracking-tight">
                  Simulador de Transfer Privativo
                </h2>
                <p className="text-xs text-slate-600 mt-1 font-medium">
                  Informe seu trajeto para receber orçamento fechado com nossa equipe das 05h às 23h.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                toolname="cotar_transfer"
                tooldescription="Solicitar cotação personalizada de transfer executivo privativo na Serra Gaúcha ou aeroportos POA e CXJ."
                className="space-y-3.5"
              >
                <div>
                  <label
                    htmlFor="hero-service"
                    className="block text-xs font-bold text-[#0D0A27] mb-1"
                  >
                    Tipo de Serviço
                  </label>
                  <select
                    id="hero-service"
                    name="servico"
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    toolparamdescription="Categoria do transfer ou passeio desejado"
                    className="w-full min-h-[44px] rounded-xl border border-slate-300 bg-white px-3.5 py-2 text-sm text-[#0F172A] font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0369A1]"
                  >
                    <option value="Transfer Aeroporto POA ⇄ Gramado / Canela">
                      Transfer Aeroporto POA ⇄ Gramado / Canela
                    </option>
                    <option value="Transfer Aeroporto CXJ ⇄ Serra Gaúcha">
                      Transfer Aeroporto CXJ ⇄ Serra Gaúcha
                    </option>
                    <option value="Tour Privativo Vale dos Vinhedos">
                      Tour Privativo Vale dos Vinhedos
                    </option>
                    <option value="Transfer Porto Alegre ➔ Montevidéu (Libertadores 2026)">
                      Transfer Porto Alegre ➔ Montevidéu (Libertadores 2026)
                    </option>
                    {SERVICES.map((svc) => (
                      <option key={svc.id} value={svc.title}>
                        {svc.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="hero-origin" className="block text-xs font-bold text-[#0D0A27] mb-1">
                      Origem (Embarque)
                    </label>
                    <input
                      id="hero-origin"
                      name="origem"
                      type="text"
                      required
                      value={origin}
                      onChange={(e) => setOrigin(e.target.value)}
                      toolparamdescription="Local, aeroporto ou cidade de embarque"
                      placeholder="Ex: Aeroporto POA"
                      className="w-full min-h-[44px] rounded-xl border border-slate-300 bg-white px-3.5 py-2 text-sm text-[#0F172A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0369A1]"
                    />
                  </div>

                  <div>
                    <label htmlFor="hero-destination" className="block text-xs font-bold text-[#0D0A27] mb-1">
                      Destino
                    </label>
                    <input
                      id="hero-destination"
                      name="destino"
                      type="text"
                      required
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      toolparamdescription="Cidade, hotel ou ponto turístico de destino"
                      placeholder="Ex: Gramado / Canela"
                      className="w-full min-h-[44px] rounded-xl border border-slate-300 bg-white px-3.5 py-2 text-sm text-[#0F172A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0369A1]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="hero-date" className="block text-xs font-bold text-[#0D0A27] mb-1">
                      Data Prevista
                    </label>
                    <input
                      id="hero-date"
                      name="data"
                      type="date"
                      value={travelDate}
                      onChange={(e) => setTravelDate(e.target.value)}
                      toolparamdescription="Data prevista do embarque no formato AAAA-MM-DD"
                      className="w-full min-h-[44px] rounded-xl border border-slate-300 bg-white px-3.5 py-2 text-sm text-[#0F172A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0369A1]"
                    />
                  </div>

                  <div>
                    <label htmlFor="hero-passengers" className="block text-xs font-bold text-[#0D0A27] mb-1">
                      Passageiros
                    </label>
                    <select
                      id="hero-passengers"
                      name="passageiros"
                      value={passengers}
                      onChange={(e) => setPassengers(e.target.value)}
                      toolparamdescription="Quantidade de passageiros para dimensionar o veículo"
                      className="w-full min-h-[44px] rounded-xl border border-slate-300 bg-white px-3.5 py-2 text-sm text-[#0F172A] font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0369A1]"
                    >
                      <option value="1 passageiro">1 passageiro (Sedan)</option>
                      <option value="2 passageiros">2 passageiros (Sedan)</option>
                      <option value="3 a 4 passageiros">3 a 4 passageiros (Sedan / SUV)</option>
                      <option value="5 a 6 passageiros">5 a 6 passageiros (SUV)</option>
                      <option value="7 a 15 passageiros">7 a 15 passageiros (Van Executiva)</option>
                    </select>
                  </div>
                </div>

                {submittedNote && (
                  <p className="text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-xl px-3 py-2">
                    {submittedNote}
                  </p>
                )}

                <button
                  type="submit"
                  className="w-full min-h-[48px] inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-sm cursor-pointer active:scale-[0.98]"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  <span>Cotar Agora no WhatsApp</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
