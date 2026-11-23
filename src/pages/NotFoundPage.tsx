import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MessageCircle, Compass } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { COMPANY_NAP, SERVICES } from '../data/companyData';
import { CITIES_SERVED } from '../data/cityData';

export const NotFoundPage: React.FC = () => {
  return (
    <main className="min-h-[75vh] bg-[#F8FAFC] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <SEOHead
        title="Página não encontrada (404) | AG Transfer"
        description="A página solicitada não foi encontrada. Confira nossos serviços de transfer privativo em Gramado, Canela, Vale dos Vinhedos e Aeroportos POA/CXJ."
        canonicalPath="/404"
        robots="noindex, follow"
      />

      <div className="max-w-3xl w-full bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-sm text-center">
        <div className="w-14 h-14 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center mx-auto mb-5">
          <Compass className="w-7 h-7 text-[#0369A1]" aria-hidden="true" />
        </div>

        <p className="text-xs font-extrabold uppercase tracking-widest text-[#0369A1] mb-2">
          Erro 404 · Rota não encontrada
        </p>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0D0A27] tracking-tight mb-4">
          Esta página não existe ou foi movida
        </h1>
        <p className="text-sm sm:text-base text-slate-700 max-w-xl mx-auto mb-8 leading-relaxed">
          O endereço acessado não está disponível. Você pode retornar à página inicial, escolher um serviço ou falar diretamente com nossa central pelo WhatsApp das 05h às 23h.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
          <Link
            to="/"
            className="w-full sm:w-auto min-h-[46px] inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#0D0A27] via-[#0A2540] to-[#0369A1] text-white font-bold text-xs uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span>Voltar para a Página Inicial</span>
          </Link>

          <a
            href={COMPANY_NAP.whatsappBaseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-h-[46px] inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs uppercase tracking-wider transition-colors"
          >
            <MessageCircle className="w-4 h-4" aria-hidden="true" />
            <span>Cotar no WhatsApp</span>
          </a>
        </div>

        <div className="border-t border-slate-200 pt-8 text-left grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
              Serviços Populares
            </h2>
            <ul className="space-y-1.5 text-sm font-semibold text-[#0369A1]">
              {SERVICES.slice(0, 5).map((s) => (
                <li key={s.id}>
                  <Link to={`/servicos/${s.slug}`} className="hover:underline">
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/transfer-porto-alegre-montevideu" className="hover:underline font-bold">
                  Transfer Porto Alegre ➔ Montevidéu
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
              Cidades Atendidas
            </h2>
            <ul className="space-y-1.5 text-sm font-semibold text-[#0369A1]">
              {CITIES_SERVED.slice(0, 6).map((c) => (
                <li key={c.id}>
                  <Link to={`/cidades/${c.slug}`} className="hover:underline">
                    Transfer Executivo em {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};
