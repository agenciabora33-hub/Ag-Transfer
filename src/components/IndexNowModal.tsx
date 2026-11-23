import React, { useState } from 'react';
import { X, Zap, CheckCircle2, AlertCircle, Copy, Check } from 'lucide-react';
import {
  ALL_CANONICAL_URLS,
  INDEXNOW_HOST,
  INDEXNOW_KEY,
  INDEXNOW_KEY_LOCATION,
  submitUrlsToIndexNow,
} from '../services/indexNow';

interface IndexNowModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const IndexNowModal: React.FC<IndexNowModalProps> = ({ isOpen, onClose }) => {
  const [submitting, setSubmitting] = useState(false);
  const [resultMsg, setResultMsg] = useState<string | null>(null);
  const [resultOk, setResultOk] = useState<boolean>(false);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const curlCommand = `curl -X POST "https://api.indexnow.org/indexnow" -H "Content-Type: application/json" -d '${JSON.stringify(
    {
      host: INDEXNOW_HOST,
      key: INDEXNOW_KEY,
      keyLocation: INDEXNOW_KEY_LOCATION,
      urlList: ALL_CANONICAL_URLS,
    }
  )}'`;

  const handleSubmitAll = async () => {
    setSubmitting(true);
    setResultMsg(null);
    const res = await submitUrlsToIndexNow(ALL_CANONICAL_URLS);
    setResultOk(res.ok);
    setResultMsg(res.message);
    setSubmitting(false);
  };

  const handleCopyCurl = async () => {
    try {
      await navigator.clipboard.writeText(curlCommand);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback ignored
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-xs p-4 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="indexnow-modal-title"
    >
      <div className="bg-white border border-slate-200 rounded-2xl max-w-2xl w-full p-6 sm:p-7 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar painel IndexNow"
          className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center text-slate-600 hover:bg-slate-100 hover:text-slate-900 cursor-pointer"
        >
          <X className="w-5 h-5" aria-hidden="true" />
        </button>

        <div className="flex items-center gap-2 text-[#0369A1] font-bold text-xs uppercase tracking-wider mb-1">
          <Zap className="w-4 h-4 text-amber-500" aria-hidden="true" />
          <span>IndexNow Bing &amp; Sitemaps</span>
        </div>
        <h2 id="indexnow-modal-title" className="text-xl font-extrabold text-[#0D0A27] pr-8">
          Indexação Instantânea ({ALL_CANONICAL_URLS.length} URLs Canônicas)
        </h2>
        <p className="text-xs text-slate-600 mt-1 mb-5 font-medium">
          Domínio principal: <strong>{INDEXNOW_HOST}</strong> · Chave verificada em{' '}
          <a href={`/${INDEXNOW_KEY}.txt`} target="_blank" rel="noopener noreferrer" className="text-[#0369A1] underline">
            /{INDEXNOW_KEY}.txt
          </a>
        </p>

        <div className="space-y-4">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs space-y-1.5">
            <div className="font-bold text-[#0D0A27]">Sitemaps Oficiais Publicados:</div>
            <ul className="space-y-1 text-[#0369A1] font-medium">
              <li>
                <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  https://www.aagtransfer.com.br/sitemap.xml
                </a>
              </li>
              <li>
                <a href="/sitemap.txt" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  https://www.aagtransfer.com.br/sitemap.txt
                </a>
              </li>
            </ul>
          </div>

          <div className="max-h-44 overflow-y-auto bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-mono text-slate-700 space-y-1">
            {ALL_CANONICAL_URLS.map((u) => (
              <div key={u} className="truncate">
                {u}
              </div>
            ))}
          </div>

          {resultMsg && (
            <div
              className={`p-3 rounded-xl border text-xs font-semibold flex items-start gap-2 ${
                resultOk
                  ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                  : 'bg-amber-50 border-amber-200 text-amber-900'
              }`}
            >
              {resultOk ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" aria-hidden="true" />
              ) : (
                <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" aria-hidden="true" />
              )}
              <span>{resultMsg}</span>
            </div>
          )}

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              disabled={submitting}
              onClick={handleSubmitAll}
              className="min-h-[44px] inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0D0A27] hover:bg-[#0369A1] text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer disabled:opacity-60"
            >
              <Zap className="w-4 h-4 text-amber-300" aria-hidden="true" />
              <span>{submitting ? 'Enviando...' : 'Notificar IndexNow Agora'}</span>
            </button>

            <button
              type="button"
              onClick={handleCopyCurl}
              className="min-h-[44px] inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#0D0A27] font-bold text-xs transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-700" aria-hidden="true" /> : <Copy className="w-4 h-4" aria-hidden="true" />}
              <span>{copied ? 'Comando cURL Copiado' : 'Copiar Comando cURL'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
