import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Trophy,
  MessageCircle,
  CheckCircle2,
  AlertTriangle,
  Car,
  ShieldCheck,
  Clock,
  ChevronDown,
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { COMPANY_NAP } from '../data/companyData';
import { trackEvent } from '../utils/analytics';

const MONTEVIDEO_FAQS = [
  {
    question: 'Quanto custa o transfer de Porto Alegre a Montevidéu?',
    answer:
      'O valor do transfer privativo é calculado com preço fechado por veículo (não por assento), variando conforme a categoria escolhida (Carro Executivo, SUV ou Van Executiva), o número de passageiros e se inclui o retorno. Esse formato é ideal para grupos de amigos ou famílias dividirem o custo.',
  },
  {
    question: 'Quanto tempo dura a viagem de Porto Alegre a Montevidéu?',
    answer:
      'A rota totaliza cerca de 800 a 850 km e leva entre 10 e 12 horas de estrada, mais o tempo de passagem pela aduana de fronteira (via Jaguarão/Rio Branco ou via Chuí). Fazemos paradas técnicas em locais seguros e confortáveis para alimentação e descanso.',
  },
  {
    question: 'Vocês buscam diretamente no Aeroporto Salgado Filho (POA)?',
    answer:
      'Sim! Nosso motorista profissional aguarda você no saguão de desembarque do Aeroporto Internacional Salgado Filho (POA) com identificação visual discreta, prestando assistência com as malas desde o primeiro minuto.',
  },
  {
    question: 'Dá tempo de chegar para a final se eu pousar na manhã de 28/11?',
    answer:
      'Recomendamos cautela redobrada. Como a partida no Estádio Centenário inicia às 17h e a viagem dura de 10 a 12 horas, somada ao fluxo migratório de fronteira, pousar na manhã do dia 28/11 apresenta risco severo de atraso. O ideal é desembarcar em Porto Alegre com antecedência (dias 26 ou 27/11).',
  },
  {
    question: 'Vocês realizam o transfer de volta para Porto Alegre após o jogo?',
    answer:
      'Sim! Oferecemos opções completas de ida e volta. Você pode optar pelo retorno agendado após a partida ou embarcar no dia 29/11 a partir das 05h para retornar descansado.',
  },
  {
    question: 'Posso levar bagagem? Qual o limite?',
    answer:
      'Sim, a capacidade varia por veículo: Sedans comportam até 3 malas médias, SUVs até 4 a 5 malas e Vans executivas contam com amplo porta-malas para até 15 passageiros.',
  },
  {
    question: 'Que documentos são obrigatórios para cruzar a fronteira com o Uruguai?',
    answer:
      'Cidadãos brasileiros devem portar RG original em bom estado emitido nos últimos 10 anos OU Passaporte válido (regras do Mercosul). Atenção: a CNH (física ou digital) NÃO é aceita pelas autoridades migratórias uruguaias para cruzar a fronteira. Menores desacompanhados necessitam de autorização judicial/cartorial.',
  },
  {
    question: 'Como confirmo a reserva do transfer?',
    answer:
      'Você nos envia os detalhes do seu voo e grupo, a AG Transfer emite a cotação formal e o contrato por escrito com os horários confirmados, garantindo a sua tranquilidade para o evento.',
  },
  {
    question: 'Posso dividir o valor entre amigos ou familiares?',
    answer:
      'Com certeza! Como o valor é fechado por veículo, você e seu grupo podem dividir o valor entre si, tornando a viagem em Van ou SUV muito mais econômica, ágil e privativa do que conexões aéreas ou ônibus regulares.',
  },
];

export const MontevideoTransferPage: React.FC = () => {
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [arrivalInfo, setArrivalInfo] = useState('Desembarque em POA — Dia 27/11');
  const [tripType, setTripType] = useState('Ida e Volta (Porto Alegre ⇄ Montevidéu)');
  const [passengers, setPassengers] = useState('4 a 6 passageiros (SUV)');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    trackEvent('montevideo_cta_click', {
      source: 'montevideo_form',
      passengers,
      destination: 'Montevidéu',
    });

    const msg = [
      'Olá! Quero cotação para o Transfer Porto Alegre ➔ Montevidéu (Final Libertadores 2026):',
      `• Nome: ${name || 'Cliente'}`,
      `• WhatsApp de contato: ${whatsapp || 'A informar'}`,
      `• Chegada prevista em POA: ${arrivalInfo}`,
      `• Modalidade: ${tripType}`,
      `• Grupo / Veículo: ${passengers}`,
    ].join('\n');

    window.location.href = `https://wa.me/${COMPANY_NAP.phoneRaw}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <main className="bg-[#F8FAFC] min-h-screen py-10 sm:py-14">
      <SEOHead
        title="Transfer Porto Alegre Montevidéu | Final Libertadores 2026"
        description="Transfer privativo do aeroporto de Porto Alegre a Montevidéu. Van e carro executivo, atendimento das 05h às 23h. Peça sua cotação no WhatsApp."
        canonicalPath="/transfer-porto-alegre-montevideu"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <nav aria-label="Trilha de navegação" className="flex items-center gap-2 text-xs font-semibold text-slate-600">
          <Link to="/" className="hover:text-[#0369A1] inline-flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Início</span>
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-[#0D0A27]">Transfer Porto Alegre → Montevidéu</span>
        </nav>

        {/* Hero */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-amber-800 mb-3">
            <Trophy className="w-4 h-4 text-amber-600" aria-hidden="true" />
            <span>Final Libertadores 2026 · 28 de Novembro às 17h (Estádio Centenário)</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0D0A27] tracking-tight leading-tight max-w-4xl mb-4">
            Transfer de Porto Alegre a Montevidéu: do Aeroporto ao Estádio Centenário
          </h1>

          <p className="text-base sm:text-lg text-slate-700 max-w-3xl leading-relaxed mb-7 font-medium">
            Transfer privativo com motorista profissional, saindo do Aeroporto Salgado Filho (POA) direto para seu hotel em Montevidéu ou imediações do Estádio Centenário. Preço fechado por veículo para grupos de torcedores e famílias.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href={`https://wa.me/${COMPANY_NAP.phoneRaw}?text=${encodeURIComponent(
                'Olá! Quero uma cotação de transfer Porto Alegre → Montevidéu para a Final da Libertadores 2026.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('montevideo_cta_click', { source: 'montevideo_hero_whatsapp' })}
              className="min-h-[48px] inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              <span>Pedir Cotação no WhatsApp</span>
            </a>

            <a
              href="#formulario-cotacao"
              className="min-h-[48px] inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#0D0A27] hover:bg-[#0369A1] text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors"
            >
              Preencher Formulário
            </a>
          </div>
        </section>

        {/* Advantages & Planning */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4">
            <h2 className="text-xl font-extrabold text-[#0D0A27]">
              Por que reservar um transfer privativo para Montevidéu?
            </h2>
            <ul className="space-y-3 text-sm text-slate-700 font-medium">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#0369A1] shrink-0 mt-0.5" aria-hidden="true" />
                <span><strong>Sem conexões ou horários engessados:</strong> saída programada para o desembarque do seu grupo.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#0369A1] shrink-0 mt-0.5" aria-hidden="true" />
                <span><strong>Recepção no Aeroporto POA:</strong> assistência com bagagens e acompanhamento de voo em tempo real.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#0369A1] shrink-0 mt-0.5" aria-hidden="true" />
                <span><strong>Preço fechado por veículo:</strong> excelente custo-benefício dividindo entre amigos em SUV ou Van.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#0369A1] shrink-0 mt-0.5" aria-hidden="true" />
                <span><strong>Opção completa de ida e volta:</strong> retorno garantido após o jogo ou no dia seguinte.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4">
            <h2 className="text-xl font-extrabold text-[#0D0A27]">
              Sobre a Rota &amp; Documentação Obrigatória
            </h2>
            <div className="text-sm text-slate-700 space-y-2 font-medium">
              <p><strong>Saída:</strong> Aeroporto Salgado Filho (POA) ou hotéis de Porto Alegre.</p>
              <p><strong>Destino:</strong> Montevidéu, Uruguai (hotel, Airbnb ou entorno do Estádio Centenário).</p>
              <p><strong>Distância e Tempo:</strong> ~800 a 850 km (~10h a 12h de estrada + aduana via Jaguarão ou Chuí).</p>
            </div>

            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-950 text-xs sm:text-sm space-y-1.5">
              <div className="flex items-center gap-2 font-extrabold">
                <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0" aria-hidden="true" />
                <span>Atenção para a Fronteira Uruguai:</span>
              </div>
              <p className="leading-relaxed">
                Leve <strong>RG original em bom estado (emitido há menos de 10 anos) OU Passaporte válido</strong>. A <strong>CNH não é aceita</strong> na imigração uruguaia.
              </p>
            </div>
          </div>
        </section>

        {/* Fleet Options */}
        <section>
          <h2 className="text-2xl font-extrabold text-[#0D0A27] mb-6">
            Opções de Veículos Executivos para a Viagem
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-6">
              <Car className="w-6 h-6 text-[#0369A1] mb-3" aria-hidden="true" />
              <h3 className="text-lg font-extrabold text-[#0D0A27] mb-1">Sedan Executivo</h3>
              <p className="text-xs font-bold text-[#0369A1] mb-2">Até 3–4 passageiros · 3 malas médias</p>
              <p className="text-sm text-slate-700">Conforto silencioso e ideal para casais ou pequenos grupos.</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-6">
              <ShieldCheck className="w-6 h-6 text-[#0369A1] mb-3" aria-hidden="true" />
              <h3 className="text-lg font-extrabold text-[#0D0A27] mb-1">SUV Executivo</h3>
              <p className="text-xs font-bold text-[#0369A1] mb-2">Até 4–6 passageiros · 4–5 malas</p>
              <p className="text-sm text-slate-700">Maior espaço interno para longas horas de estrada até Montevidéu.</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-6">
              <Clock className="w-6 h-6 text-[#0369A1] mb-3" aria-hidden="true" />
              <h3 className="text-lg font-extrabold text-[#0D0A27] mb-1">Van Executiva VIP</h3>
              <p className="text-xs font-bold text-[#0369A1] mb-2">Até 15 passageiros · Bagageiro amplo</p>
              <p className="text-sm text-slate-700">Poltronas reclináveis e melhor custo por pessoa para turmas de torcedores.</p>
            </div>
          </div>
        </section>

        {/* Form */}
        <section id="formulario-cotacao" className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-extrabold text-[#0D0A27] mb-2">
              Solicitar Cotação Porto Alegre → Montevidéu
            </h2>
            <p className="text-sm text-slate-700 mb-6 font-medium">
              Atendimento oficial de segunda a domingo, das 05h às 23h: {COMPANY_NAP.phone}.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            toolname="cotar_transfer_montevideu"
            tooldescription="Solicitar cotação de transfer privativo entre Porto Alegre (POA) e Montevidéu (Uruguai) para a Final da Libertadores."
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <div>
              <label htmlFor="mtv-name" className="block text-xs font-bold text-[#0D0A27] mb-1">
                Seu Nome
              </label>
              <input
                id="mtv-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nome completo"
                className="w-full min-h-[44px] rounded-xl border border-slate-300 px-3.5 py-2 text-sm text-[#0F172A]"
              />
            </div>

            <div>
              <label htmlFor="mtv-whatsapp" className="block text-xs font-bold text-[#0D0A27] mb-1">
                Seu WhatsApp
              </label>
              <input
                id="mtv-whatsapp"
                type="tel"
                required
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                placeholder="(DD) 99999-9999"
                className="w-full min-h-[44px] rounded-xl border border-slate-300 px-3.5 py-2 text-sm text-[#0F172A]"
              />
            </div>

            <div>
              <label htmlFor="mtv-arrival" className="block text-xs font-bold text-[#0D0A27] mb-1">
                Previsão de Chegada em Porto Alegre (POA)
              </label>
              <input
                id="mtv-arrival"
                type="text"
                value={arrivalInfo}
                onChange={(e) => setArrivalInfo(e.target.value)}
                className="w-full min-h-[44px] rounded-xl border border-slate-300 px-3.5 py-2 text-sm text-[#0F172A]"
              />
            </div>

            <div>
              <label htmlFor="mtv-type" className="block text-xs font-bold text-[#0D0A27] mb-1">
                Modalidade Desejada
              </label>
              <select
                id="mtv-type"
                value={tripType}
                onChange={(e) => setTripType(e.target.value)}
                className="w-full min-h-[44px] rounded-xl border border-slate-300 px-3.5 py-2 text-sm text-[#0F172A]"
              >
                <option value="Ida e Volta (Porto Alegre ⇄ Montevidéu)">
                  Ida e Volta (Porto Alegre ⇄ Montevidéu)
                </option>
                <option value="Somente Ida (Porto Alegre ➔ Montevidéu)">
                  Somente Ida (Porto Alegre ➔ Montevidéu)
                </option>
                <option value="Somente Volta (Montevidéu ➔ Porto Alegre)">
                  Somente Volta (Montevidéu ➔ Porto Alegre)
                </option>
              </select>
            </div>

            <div>
              <label htmlFor="mtv-pax" className="block text-xs font-bold text-[#0D0A27] mb-1">
                Tamanho do Grupo / Veículo
              </label>
              <select
                id="mtv-pax"
                value={passengers}
                onChange={(e) => setPassengers(e.target.value)}
                className="w-full min-h-[44px] rounded-xl border border-slate-300 px-3.5 py-2 text-sm text-[#0F172A]"
              >
                <option value="1 a 3 passageiros (Sedan Executivo)">1 a 3 passageiros (Sedan Executivo)</option>
                <option value="4 a 6 passageiros (SUV Executivo)">4 a 6 passageiros (SUV Executivo)</option>
                <option value="7 a 15 passageiros (Van Executiva)">7 a 15 passageiros (Van Executiva)</option>
              </select>
            </div>

            <div className="flex items-end">
              <button
                type="submit"
                className="w-full min-h-[46px] inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs uppercase tracking-wider cursor-pointer transition-colors"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                <span>Enviar Cotação para o WhatsApp</span>
              </button>
            </div>
          </form>
        </section>

        {/* FAQ */}
        <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8">
          <h2 className="text-2xl font-extrabold text-[#0D0A27] mb-6">
            Perguntas Frequentes — Transfer POA ➔ Montevidéu
          </h2>
          <div className="space-y-3">
            {MONTEVIDEO_FAQS.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={item.question} className="border border-slate-200 rounded-xl overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    className="w-full min-h-[48px] px-5 py-3.5 text-left flex items-center justify-between gap-4 font-bold text-sm text-[#0D0A27] hover:bg-slate-50 cursor-pointer"
                  >
                    <span>{item.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#0369A1] shrink-0 transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-4 pt-1 text-sm text-slate-700 leading-relaxed border-t border-slate-100">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        <p className="text-xs text-slate-600 text-center">
          Aviso institucional: A AG Transfer é uma empresa independente de transporte executivo e não possui vínculo oficial com a CONMEBOL, clubes participantes ou organização do evento. Não comercializamos ingressos.
        </p>
      </div>
    </main>
  );
};
