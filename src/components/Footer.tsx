import React from 'react';
import { MapPin, Phone, MessageCircle, Clock, ExternalLink, Code2, Star } from 'lucide-react';
import { COMPANY_NAP } from '../data/companyData';

interface FooterProps {
  onOpenExportModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenExportModal }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0D0A27] text-slate-300 border-t border-slate-800 pt-16 pb-24 sm:pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 3-Column NAP Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand & Logo (Col 5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-white p-1 flex items-center justify-center shadow-sm">
                <img
                  src={COMPANY_NAP.logoUrl}
                  alt="Logo Oficial AG Transfer"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="font-['Cinzel',serif] text-xl font-bold tracking-wider text-white block">
                  AG TRANSFER
                </span>
                <span className="text-[11px] text-[#38BDF8] font-semibold tracking-wider uppercase">
                  Transporte Executivo LTDA.
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 max-w-sm leading-relaxed">
              Especialistas em mobilidade corporativa de alto padrão, transfers aeroportuários (POA / CXI) e roteiros enoturísticos VIP pela Serra Gaúcha.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-[#38BDF8]">
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

          {/* Column 2: Physical NAP Information (Col 4) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Dados Operacionais (NAP)
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

          {/* Column 3: Navigation & Quick Shortcuts (Col 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navegação & Links Rápidos
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#inicio" className="hover:text-[#38BDF8] transition-colors">Início</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-[#38BDF8] transition-colors">Serviços Executivos</a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-[#38BDF8] transition-colors">Diferenciais e Segurança</a>
              </li>
              <li>
                <a href="#frota" className="hover:text-[#38BDF8] transition-colors">Frota de Veículos</a>
              </li>
              <li>
                <a href="#cobertura" className="hover:text-[#38BDF8] transition-colors">Cobertura Geográfica</a>
              </li>
              <li>
                <a href="#avaliacoes" className="hover:text-[#38BDF8] transition-colors">Avaliações Google GBP (5.0)</a>
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
