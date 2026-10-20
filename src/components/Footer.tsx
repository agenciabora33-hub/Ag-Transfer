import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, MessageCircle, Clock, ExternalLink, Code2, Star, ChevronRight, Navigation, Zap } from 'lucide-react';
import { COMPANY_NAP, SERVICES } from '../data/companyData';
import { CITIES_SERVED } from '../data/cityData';

interface FooterProps {
  onOpenExportModal: () => void;
  onOpenIndexNowModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenExportModal, onOpenIndexNowModal }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0D0A27] text-white border-t border-slate-800 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 5-Column Grid Layout for Complete NAP, Services, Cities, and Institutional */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Column 1: Brand & NAP Summary (Col 3) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-white p-1 flex items-center justify-center overflow-hidden">
                <img
                  src={COMPANY_NAP.logoUrl}
                  alt="AG Transfer Logo"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-['Cinzel',serif] text-xl font-bold tracking-wider text-white">
                AG TRANSFER
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Transporte executivo de alto padrão, transfers privativos para aeroportos e tours na Serra Gaúcha. Pontualidade britânica, conforto absoluto e segurança 24 horas.
            </p>

            <div className="pt-2 text-xs text-slate-400 flex items-center gap-2">
              <a
                href={COMPANY_NAP.gbpUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline flex items-center gap-1 font-semibold text-white"
              >
                <Star className="w-3.5 h-3.5 text-[#F59E0B] fill-[#F59E0B]" />
                <span>5.0 Google Business (+200 avaliações)</span>
                <ExternalLink className="w-2.5 h-2.5 text-[#38BDF8]" />
              </a>
              <span>·</span>
              <span className="text-emerald-400 font-semibold">24/7 Ativo</span>
            </div>
          </div>

          {/* Column 2: Physical NAP Information (Col 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Sede Operacional (NAP)
            </h4>
            
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-medium block">Endereço Físico:</span>
                  <span>{COMPANY_NAP.fullAddress}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-medium block">Telefone / Central:</span>
                  <a href={`tel:${COMPANY_NAP.phoneRaw}`} className="hover:text-white tabular-nums font-semibold">
                    {COMPANY_NAP.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-medium block">WhatsApp Comercial 24h:</span>
                  <a
                    href={COMPANY_NAP.whatsappBaseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#38BDF8] hover:underline tabular-nums font-semibold"
                  >
                    (54) 99153-7288
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-medium block">Funcionamento:</span>
                  <span className="text-emerald-400 font-semibold">{COMPANY_NAP.operatingHours}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Landing Pages & Dedicated Services (Col 2) - SEO */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Serviços (SEO)
            </h4>
            <ul className="space-y-1.5 text-xs">
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <Link
                    to={`/servicos/${s.slug}`}
                    className="hover:text-[#38BDF8] transition-colors flex items-center gap-1 group text-slate-300"
                  >
                    <ChevronRight className="w-3 h-3 text-[#38BDF8] opacity-70 group-hover:translate-x-0.5 transition-transform shrink-0" />
                    <span className="group-hover:underline truncate">{s.title.replace(' VIP', '')}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Cidades Atendidas (Col 2) - GEO */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
              <Navigation className="w-3 h-3 text-[#38BDF8]" />
              <span>Cidades (GEO)</span>
            </h4>
            <ul className="space-y-1.5 text-xs">
              {CITIES_SERVED.map((c) => (
                <li key={c.id}>
                  <Link
                    to={`/cidades/${c.slug}`}
                    className="hover:text-[#38BDF8] transition-colors flex items-center gap-1 group text-slate-300"
                  >
                    <ChevronRight className="w-3 h-3 text-[#38BDF8] opacity-70 group-hover:translate-x-0.5 transition-transform shrink-0" />
                    <span className="group-hover:underline truncate">{c.name} (RS)</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Institucional & Export (Col 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="/#inicio" className="hover:text-[#38BDF8] transition-colors">Início</a>
              </li>
              <li>
                <a href="/#servicos" className="hover:text-[#38BDF8] transition-colors">Serviços</a>
              </li>
              <li>
                <a href="/#cobertura" className="hover:text-[#38BDF8] transition-colors">Cidades Atendidas</a>
              </li>
              <li>
                <a href="/#frota" className="hover:text-[#38BDF8] transition-colors">Nossa Frota</a>
              </li>
              <li>
                <a href="/#diferenciais" className="hover:text-[#38BDF8] transition-colors">Diferenciais</a>
              </li>
              <li>
                <a href="/#avaliacoes" className="hover:text-[#38BDF8] transition-colors">Avaliações GBP (5.0)</a>
              </li>
              <li className="pt-2">
                <button
                  onClick={onOpenExportModal}
                  className="inline-flex items-center gap-1.5 text-[11px] text-[#38BDF8] hover:text-white transition-colors cursor-pointer"
                  title="Visualizar ou Baixar Código Single-File HTML5"
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>Código HTML5 Autônomo</span>
                </button>
              </li>
              <li className="pt-1">
                <button
                  onClick={onOpenIndexNowModal}
                  className="inline-flex items-center gap-1.5 text-[11px] text-amber-400 hover:text-white transition-colors cursor-pointer"
                  title="Painel e Envio de URLs ao IndexNow (Microsoft Bing)"
                >
                  <Zap className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  <span>IndexNow Bing (Instantâneo)</span>
                  <span className="text-[9px] bg-amber-400/20 text-amber-300 font-bold px-1.5 py-0.5 rounded-full border border-amber-400/40">
                    Chave Ativa
                  </span>
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & GEO Statement */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p>
            © {currentYear} AG Transfer & Transporte Executivo LTDA. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={COMPANY_NAP.gbpUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white flex items-center gap-1 font-medium"
            >
              <span>Google Business Profile (+200 avaliações)</span>
              <ExternalLink className="w-2.5 h-2.5 text-[#38BDF8]" />
            </a>
            <span>·</span>
            <span>Caxias do Sul - RS</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
