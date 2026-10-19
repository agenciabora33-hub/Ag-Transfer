import React, { useState } from 'react';
import { X, Send, MapPin, Calendar, Clock, Users, Briefcase, MessageCircle } from 'lucide-react';
import { COMPANY_NAP, SERVICES } from '../data/companyData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialService = 'Transfer Aeroportuário',
}) => {
  const [service, setService] = useState(initialService);
  const [origin, setOrigin] = useState('Caxias do Sul');
  const [destination, setDestination] = useState('Aeroporto Salgado Filho (POA)');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [passengers, setPassengers] = useState('1 a 3 passageiros (Sedan Executivo)');
  const [luggage, setLuggage] = useState('2 malas médias');
  const [corporate, setCorporate] = useState(false);
  const [companyName, setCompanyName] = useState('');
  const [flightNumber, setFlightNumber] = useState('');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const lines: string[] = [
      "Olá, gostaria de solicitar um orçamento para transfer executivo com a *AG Transfer*.",
      "",
      `*Serviço:* ${service}`,
      `*Origem:* ${origin}`,
      `*Destino:* ${destination}`,
      `*Data:* ${date || 'A combinar'} ${time ? `às ${time}` : ''}`,
      `*Passageiros:* ${passengers}`,
      `*Bagagens:* ${luggage}`,
    ];

    if (flightNumber) {
      lines.push(`*Número do Voo (para monitoramento):* ${flightNumber}`);
    }

    if (corporate && companyName) {
      lines.push(`*Faturamento PJ:* Sim (${companyName})`);
    }

    if (notes) {
      lines.push(`*Observações adicionais:* ${notes}`);
    }

    lines.push("");
    lines.push("Poderiam me informar a disponibilidade e os valores?");

    const text = lines.join("\n");
    const url = `https://wa.me/${COMPANY_NAP.phoneRaw}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-xl bg-white border border-slate-200 rounded-3xl shadow-2xl p-6 sm:p-8 my-8 text-slate-700">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0284C7] block mb-1">
            Cotação Personalizada
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#0D0A27]">
            Solicitar Orçamento Executivo
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Preencha os detalhes para receber atendimento imediato da nossa central 24h.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
          
          {/* Service */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Modalidade de Transporte
            </label>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 focus:bg-white rounded-xl px-3.5 py-2.5 text-slate-800 focus:border-[#0284C7] focus:outline-none transition-colors"
            >
              {SERVICES.map((s) => (
                <option key={s.id} value={s.title}>{s.title} ({s.subtitle})</option>
              ))}
              <option value="Transfer Personalizado / Outro">Transfer Personalizado / Outro</option>
            </select>
          </div>

          {/* Origin & Destination */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#0284C7]" />
                Local de Embarque (Origem)
              </label>
              <input
                type="text"
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
                placeholder="Ex: Caxias do Sul (Hotel/Aeroporto/Empresa)"
                required
                className="w-full bg-slate-50 border border-slate-200 focus:bg-white rounded-xl px-3 py-2 text-slate-800 placeholder-slate-400 focus:border-[#0284C7] focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#0369A1]" />
                Local de Desembarque (Destino)
              </label>
              <input
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="Ex: Aeroporto POA / Gramado"
                required
                className="w-full bg-slate-50 border border-slate-200 focus:bg-white rounded-xl px-3 py-2 text-slate-800 placeholder-slate-400 focus:border-[#0284C7] focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Date & Time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#0284C7]" />
                Data Pretendida
              </label>
              <input
                type="text"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="Ex: 24/11/2026"
                className="w-full bg-slate-50 border border-slate-200 focus:bg-white rounded-xl px-3 py-2 text-slate-800 placeholder-slate-400 focus:border-[#0284C7] focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#0284C7]" />
                Horário Estimado
              </label>
              <input
                type="text"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                placeholder="Ex: 06:45 da manhã"
                className="w-full bg-slate-50 border border-slate-200 focus:bg-white rounded-xl px-3 py-2 text-slate-800 placeholder-slate-400 focus:border-[#0284C7] focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Category & Passengers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-[#0284C7]" />
                Número de Passageiros
              </label>
              <select
                value={passengers}
                onChange={(e) => setPassengers(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 focus:bg-white rounded-xl px-3 py-2 text-slate-800 focus:border-[#0284C7] focus:outline-none transition-colors"
              >
                <option value="1 a 3 passageiros (Sedan Executivo)">1 a 3 passageiros (Sedan)</option>
                <option value="4 a 6 passageiros (SUV Premium)">4 a 6 passageiros (SUV)</option>
                <option value="7 a 15 passageiros (Van VIP)">7 a 15 passageiros (Van VIP)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1">
                <Briefcase className="w-3.5 h-3.5 text-[#0284C7]" />
                Volume de Bagagens
              </label>
              <input
                type="text"
                value={luggage}
                onChange={(e) => setLuggage(e.target.value)}
                placeholder="Ex: 3 malas grandes + 2 de mão"
                className="w-full bg-slate-50 border border-slate-200 focus:bg-white rounded-xl px-3 py-2 text-slate-800 placeholder-slate-400 focus:border-[#0284C7] focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Flight Number if airport transfer */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Prefixo do Voo (Opcional para Aeroportos POA / CXJ)
            </label>
            <input
              type="text"
              value={flightNumber}
              onChange={(e) => setFlightNumber(e.target.value)}
              placeholder="Ex: GOL 1234 / LATAM 3456 / AZUL 2890"
              className="w-full bg-slate-50 border border-slate-200 focus:bg-white rounded-xl px-3 py-2 text-slate-800 placeholder-slate-400 focus:border-[#0284C7] focus:outline-none transition-colors"
            />
          </div>

          {/* Corporate Toggle */}
          <div className="pt-2 border-t border-slate-200">
            <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-800 font-semibold">
              <input
                type="checkbox"
                checked={corporate}
                onChange={(e) => setCorporate(e.target.checked)}
                className="w-4 h-4 rounded text-[#0284C7] accent-[#0284C7]"
              />
              <span>Solicitar Faturamento Pessoa Jurídica (PJ) com Nota Fiscal</span>
            </label>

            {corporate && (
              <div className="mt-3 pl-6">
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="Razão Social ou Nome da Empresa"
                  className="w-full bg-slate-50 border border-slate-200 focus:bg-white rounded-xl px-3 py-2 text-slate-800 text-xs focus:border-[#0284C7] focus:outline-none"
                />
              </div>
            )}
          </div>

          {/* Submit */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#0D0A27] via-[#0A2540] to-[#0284C7] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer shadow-md"
            >
              <MessageCircle className="w-4 h-4 text-[#38BDF8]" />
              <span>Enviar Cotação para WhatsApp (54) 99153-7288</span>
            </button>
            <p className="text-center text-[11px] text-slate-500 mt-2 font-medium">
              Você será direcionado diretamente ao chat oficial da AG Transfer.
            </p>
          </div>

        </form>
      </div>
    </div>
  );
};
