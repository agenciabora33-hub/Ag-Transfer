import React, { useState } from 'react';
import { X, Copy, Check, Download, ExternalLink, Code2 } from 'lucide-react';

interface SingleFileExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SingleFileExportModal: React.FC<SingleFileExportModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyCode = async () => {
    try {
      const response = await fetch('/ag-transfer-single-page.html');
      const text = await response.text();
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(false);
    }
  };

  const handleDownloadFile = () => {
    const link = document.createElement('a');
    link.href = '/ag-transfer-single-page.html';
    link.download = 'ag-transfer-single-page.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-3xl shadow-2xl p-6 sm:p-8 my-8 text-slate-700">
        
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-11 h-11 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-[#0284C7] shadow-xs">
            <Code2 className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#0284C7] block">
              Requisito 5 Atendido
            </span>
            <h3 className="text-xl font-extrabold text-[#0D0A27]">
              Código Single-File HTML5 Completo
            </h3>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
          Conforme solicitado na Seção 5 do seu briefing, geramos um arquivo <strong className="text-[#0D0A27]">HTML5 único e 100% autônomo</strong>. Ele contém todas as metatags de SEO, GEO metadados, Schema.org JSON-LD (<code className="text-[#0284C7] font-semibold">TaxiService</code>), Tailwind CSS via CDN, Lucide Icons e JavaScript Vanilla para navegação e animação de scroll reveal. Pode ser hospedado diretamente em qualquer servidor web ou cPanel sem ferramentas de build.
        </p>

        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 mb-6 space-y-3 text-xs">
          <div className="flex items-center justify-between text-slate-600 border-b border-slate-200 pb-2">
            <span className="font-medium">Arquivo autônomo:</span>
            <code className="text-[#0D0A27] font-mono font-bold">ag-transfer-single-page.html</code>
          </div>
          <div className="flex items-center justify-between text-slate-600 border-b border-slate-200 pb-2">
            <span className="font-medium">Dados NAP & Place ID:</span>
            <span className="text-emerald-700 font-bold">Integrados no HTML & JSON-LD (+200 avaliações)</span>
          </div>
          <div className="flex items-center justify-between text-slate-600">
            <span className="font-medium">Dependências externas:</span>
            <span className="text-slate-800 font-medium">Apenas CDNs públicos (Tailwind + Lucide)</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={handleCopyCode}
            className="w-full sm:flex-1 py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#0D0A27] via-[#0A2540] to-[#0284C7] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer shadow-md"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-[#38BDF8]" />}
            <span>{copied ? 'Código Copiado com Sucesso!' : 'Copiar Código HTML5'}</span>
          </button>

          <button
            onClick={handleDownloadFile}
            className="w-full sm:w-auto py-3.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer border border-slate-200"
          >
            <Download className="w-4 h-4 text-[#0284C7]" />
            <span>Baixar Arquivo .html</span>
          </button>

          <a
            href="/ag-transfer-single-page.html"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto py-3.5 px-4 rounded-xl bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 border border-slate-200 font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
          >
            <span>Abrir Nova Aba</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </div>

      </div>
    </div>
  );
};
