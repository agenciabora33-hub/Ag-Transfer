import React, { useState } from 'react';
import { X, MessageCircle } from 'lucide-react';
import { COMPANY_NAP, SERVICES } from '../data/companyData';
import { trackEvent } from '../utils/analytics';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, initialService }) => {
  const [service, setService] = useState(initialService || SERVICES[0].title);
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [passengers, setPassengers] = useState('2 passageiros');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackEvent('quote_submit', { source: 'quote_modal', service, origin, destination, passengers });
    const message = [
      'Olá, equipe AG Transfer! Gostaria de solicitar uma cotação:',
      `• Serviço: ${service}`,
      `• Origem: ${origin || 'A confirmar'}`,
      `• Destino: ${destination || 'A confirmar'}`,
      `• Data: ${date ? new Date(`${date}T12:00:00`).toLocaleDateString('pt-BR') : 'A definir'}`,
      `• Passageiros: ${passengers}`,
    ].join('\n');

    window.location.href = `https://wa.me/${COMPANY_NAP.phoneRaw}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-xs p-4 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-modal-title"
    >
      <div className="bg-white border border-slate-200 rounded-2xl max-w-lg w-full p-6 sm:p-7 shadow-2xl relative">
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar janela de cotação"
          className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center text-slate-600 hover:bg-slate-100 hover:text-slate-900 cursor-pointer"
        >
          <X className="w-5 h-5" aria-hidden="true" />
        </button>

        <h2 id="quote-modal-title" className="text-xl font-extrabold text-[#0D0A27] pr-8">
          Cotação Rápida AG Transfer
        </h2>
        <p className="text-xs text-slate-600 mt-1 mb-5 font-medium">
          Atendimento direto com nossa equipe de segunda a domingo, das 05h às 23h.
        </p>

        <form onSubmit={handleSubmit} className="space-y-3.5">
          <div>
            <label htmlFor="modal-service" className="block text-xs font-bold text-[#0D0A27] mb-1">
              Serviço
            </label>
            <select
              id="modal-service"
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full min-h-[44px] rounded-xl border border-slate-300 px-3 py-2 text-sm text-[#0F172A]"
            >
              {SERVICES.map((s) => (
                <option key={s.id} value={s.title}>
                  {s.title}
                </option>
              ))}
              <option value="Transfer Porto Alegre ➔ Montevidéu">
                Transfer Porto Alegre ➔ Montevidéu
              </option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label htmlFor="modal-origin" className="block text-xs font-bold text-[#0D0A27] mb-1">
                Origem
              </label>
              <input
                id="modal-origin"
                type="text"
                required
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
                placeholder="Ex: Aeroporto POA"
                className="w-full min-h-[44px] rounded-xl border border-slate-300 px-3 py-2 text-sm text-[#0F172A]"
              />
            </div>

            <div>
              <label htmlFor="modal-destination" className="block text-xs font-bold text-[#0D0A27] mb-1">
                Destino
              </label>
              <input
                id="modal-destination"
                type="text"
                required
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="Ex: Gramado Centro"
                className="w-full min-h-[44px] rounded-xl border border-slate-300 px-3 py-2 text-sm text-[#0F172A]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label htmlFor="modal-date" className="block text-xs font-bold text-[#0D0A27] mb-1">
                Data
              </label>
              <input
                id="modal-date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full min-h-[44px] rounded-xl border border-slate-300 px-3 py-2 text-sm text-[#0F172A]"
              />
            </div>

            <div>
              <label htmlFor="modal-passengers" className="block text-xs font-bold text-[#0D0A27] mb-1">
                Passageiros
              </label>
              <select
                id="modal-passengers"
                value={passengers}
                onChange={(e) => setPassengers(e.target.value)}
                className="w-full min-h-[44px] rounded-xl border border-slate-300 px-3 py-2 text-sm text-[#0F172A]"
              >
                <option value="1 a 2 passageiros">1 a 2 passageiros</option>
                <option value="3 a 4 passageiros">3 a 4 passageiros</option>
                <option value="5 a 6 passageiros">5 a 6 passageiros</option>
                <option value="7 a 15 passageiros">7 a 15 passageiros (Van)</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full min-h-[46px] inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs uppercase tracking-wider cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" aria-hidden="true" />
            <span>Enviar Cotação no WhatsApp</span>
          </button>
        </form>
      </div>
    </div>
  );
};
