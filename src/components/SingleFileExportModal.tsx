import React, { useState } from 'react';
import { X, Copy, Check, Download } from 'lucide-react';
import { COMPANY_NAP, COVERAGE_AREAS, SERVICES } from '../data/companyData';

interface SingleFileExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SingleFileExportModal: React.FC<SingleFileExportModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const standaloneHtml = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>AG Transfer | Transporte Executivo & Transfer Serra Gaúcha</title>
  <link rel="canonical" href="https://www.aagtransfer.com.br/" />
  <link rel="icon" type="image/webp" href="https://www.aagtransfer.com.br/logo-sm.webp" />
  <meta name="description" content="Transporte executivo privativo na Serra Gaúcha, Gramado, Canela e aeroportos POA e CXJ. Atendimento das 05h às 23h." />
</head>
<body style="font-family: system-ui, sans-serif; margin: 0; padding: 2rem; background: #F8FAFC; color: #0F172A;">
  <main style="max-width: 780px; margin: 0 auto; background: #fff; padding: 2rem; border-radius: 16px; border: 1px solid #E2E8F0;">
    <img src="https://www.aagtransfer.com.br/logo-sm.webp" alt="Logo AG Transfer" width="64" height="64" style="display:block;margin-bottom:1rem;" />
    <h1 style="color: #0D0A27; margin-top: 0;">${COMPANY_NAP.name}</h1>
    <p><strong>Atendimento:</strong> ${COMPANY_NAP.operatingHours}</p>
    <p><strong>Telefone / WhatsApp:</strong> ${COMPANY_NAP.phone}</p>
    <h2>Área de Cobertura</h2>
    <ul>${COVERAGE_AREAS.map((a) => `<li>${a.label}</li>`).join('')}</ul>
    <h2>Serviços Privativos</h2>
    <ul>${SERVICES.map((s) => `<li><strong>${s.title}</strong> — ${s.routeSummary}</li>`).join('')}</ul>
    <p><a href="${COMPANY_NAP.whatsappBaseUrl}" style="display:inline-block;padding:12px 20px;background:#047857;color:#fff;text-decoration:none;border-radius:10px;font-weight:700;">Solicitar Cotação no WhatsApp</a></p>
    <footer style="margin-top:2rem;padding-top:1rem;border-top:1px solid #E2E8F0;font-size:12px;color:#475569;">
      Site desenvolvido pela <a href="https://bora-digital-strategy.vercel.app/" target="_blank" rel="noopener noreferrer" style="color:#0369A1;font-weight:700;">Agência Bora</a>
    </footer>
  </main>
</body>
</html>`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(standaloneHtml);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback ignored
    }
  };

  const handleDownload = () => {
    const blob = new Blob([standaloneHtml], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ag-transfer-institucional.html';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-xs p-4 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="export-modal-title"
    >
      <div className="bg-white border border-slate-200 rounded-2xl max-w-2xl w-full p-6 sm:p-7 shadow-2xl relative">
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar exportação HTML"
          className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center text-slate-600 hover:bg-slate-100 hover:text-slate-900 cursor-pointer"
        >
          <X className="w-5 h-5" aria-hidden="true" />
        </button>

        <h2 id="export-modal-title" className="text-xl font-extrabold text-[#0D0A27] pr-8">
          Código HTML5 Autônomo (Backup Institucional)
        </h2>
        <p className="text-xs text-slate-600 mt-1 mb-4 font-medium">
          Versão estática independente com dados oficiais de cobertura, horários (05h às 23h) e serviços.
        </p>

        <pre className="bg-slate-900 text-slate-100 text-xs rounded-xl p-4 max-h-64 overflow-auto mb-4">
          {standaloneHtml}
        </pre>

        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={handleCopy}
            className="min-h-[44px] inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0D0A27] text-white text-xs font-bold cursor-pointer"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" aria-hidden="true" /> : <Copy className="w-4 h-4" aria-hidden="true" />}
            <span>{copied ? 'Copiado!' : 'Copiar HTML'}</span>
          </button>

          <button
            type="button"
            onClick={handleDownload}
            className="min-h-[44px] inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#0D0A27] text-xs font-bold cursor-pointer"
          >
            <Download className="w-4 h-4" aria-hidden="true" />
            <span>Baixar Arquivo HTML</span>
          </button>
        </div>
      </div>
    </div>
  );
};
