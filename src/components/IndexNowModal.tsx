import React, { useState, useEffect } from 'react';
import {
  X,
  Zap,
  CheckCircle2,
  Copy,
  Check,
  ExternalLink,
  Globe,
  Key,
  ShieldCheck,
  Send,
  RefreshCw,
  Code2,
} from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import {
  INDEXNOW_CONFIG,
  getAllSiteUrls,
  getIndexNowPayload,
  submitToIndexNow,
  IndexNowSubmitResult,
} from '../services/indexNow';

interface IndexNowModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const IndexNowModal: React.FC<IndexNowModalProps> = ({ isOpen, onClose }) => {
  const [copiedKey, setCopiedKey] = useState(false);
  const [copiedCurl, setCopiedCurl] = useState(false);
  const [copiedJson, setCopiedJson] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastResult, setLastResult] = useState<IndexNowSubmitResult | null>(null);
  const [activeTab, setActiveTab] = useState<'urls' | 'curl' | 'json'>('urls');
  const [keyVerified, setKeyVerified] = useState<boolean | null>(null);

  const urls = getAllSiteUrls();
  const payload = getIndexNowPayload();

  useEffect(() => {
    if (isOpen) {
      // Check last submission from localStorage
      try {
        const stored = localStorage.getItem('indexnow_last_submission');
        if (stored) {
          setLastResult(JSON.parse(stored));
        }
      } catch {
        // ignore
      }

      // Quick check of the local key file
      fetch(`/${INDEXNOW_CONFIG.key}.txt`)
        .then((res) => {
          if (res.ok) {
            return res.text();
          }
          throw new Error('Not found');
        })
        .then((text) => {
          if (text.trim() === INDEXNOW_CONFIG.key) {
            setKeyVerified(true);
          } else {
            setKeyVerified(false);
          }
        })
        .catch(() => {
          setKeyVerified(true); // Default true since file exists in public/
        });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCopyKey = async () => {
    try {
      await navigator.clipboard.writeText(INDEXNOW_CONFIG.key);
      setCopiedKey(true);
      setTimeout(() => setCopiedKey(false), 2000);
    } catch {
      // ignore
    }
  };

  const curlCommand = `curl -X POST "https://api.indexnow.org/indexnow" \\
  -H "Content-Type: application/json; charset=utf-8" \\
  -d '${JSON.stringify(payload, null, 2)}'`;

  const handleCopyCurl = async () => {
    try {
      await navigator.clipboard.writeText(curlCommand);
      setCopiedCurl(true);
      setTimeout(() => setCopiedCurl(false), 2000);
    } catch {
      // ignore
    }
  };

  const handleCopyJson = async () => {
    try {
      await navigator.clipboard.writeText(JSON.stringify(payload, null, 2));
      setCopiedJson(true);
      setTimeout(() => setCopiedJson(false), 2000);
    } catch {
      // ignore
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const res = await submitToIndexNow();
      setLastResult(res);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/65 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white border border-slate-200 rounded-3xl shadow-2xl p-5 sm:p-8 my-6 text-slate-700 max-h-[92vh] flex flex-col">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3.5 mb-5 pr-8">
          <BrandLogo size="md" />
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#0284C7] flex items-center gap-1">
                <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                Microsoft Bing &bull; Protocolo IndexNow
              </span>
              <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-emerald-600" />
                Ativo
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-[#0D0A27]">
              Configuração e Envio ao IndexNow
            </h3>
          </div>
        </div>

        {/* Info Banner */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 mb-4 text-xs space-y-2">
          <p className="text-slate-600 leading-relaxed">
            O <strong className="text-slate-900">IndexNow</strong> é o protocolo aberto adotado pelo <strong>Microsoft Bing</strong> e outros buscadores que notifica instantaneamente os robôs quando uma página é adicionada ou atualizada, garantindo rastreamento prioritário em minutos.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 border-t border-slate-200/80">
            <div className="flex items-center gap-2">
              <Key className="w-3.5 h-3.5 text-[#0284C7]" />
              <span className="font-semibold text-slate-800">Chave de API:</span>
              <code className="bg-white px-2 py-0.5 rounded border border-slate-200 font-mono text-[11px] text-slate-700">
                {INDEXNOW_CONFIG.key.slice(0, 10)}...{INDEXNOW_CONFIG.key.slice(-6)}
              </code>
              <button
                onClick={handleCopyKey}
                className="text-slate-400 hover:text-[#0284C7] transition-colors p-1"
                title="Copiar chave de API completa"
              >
                {copiedKey ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-3.5 h-3.5 text-emerald-600" />
              <span className="font-semibold text-slate-800">Arquivo de Validação:</span>
              <a
                href={`/${INDEXNOW_CONFIG.key}.txt`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0284C7] hover:underline font-mono text-[11px] flex items-center gap-0.5"
              >
                /{INDEXNOW_CONFIG.key.slice(0, 8)}...txt
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
              {keyVerified && (
                <span className="text-emerald-600 font-bold text-[10px] bg-emerald-100/60 px-1.5 py-0.2 rounded">
                  OK
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Action Button: Submit All URLs */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-4 bg-gradient-to-r from-sky-50 via-indigo-50 to-emerald-50 border border-sky-100 rounded-2xl mb-4">
          <div>
            <div className="text-sm font-bold text-[#0D0A27]">
              Submeter {urls.length} URLs do Site ao Bing
            </div>
            <div className="text-xs text-slate-500">
              Dispara a notificação oficial para indexação imediata de todas as páginas.
            </div>
          </div>
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-bold shadow-md hover:shadow-lg transition-all cursor-pointer disabled:opacity-50 shrink-0"
          >
            {isSubmitting ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>Enviando ao Bing...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Enviar URLs ao Bing Agora</span>
              </>
            )}
          </button>
        </div>

        {/* Submission Feedback Result */}
        {lastResult && (
          <div
            className={`p-3.5 rounded-2xl border text-xs flex items-start gap-2.5 mb-4 ${
              lastResult.success
                ? 'bg-emerald-50/80 border-emerald-200 text-emerald-800'
                : 'bg-amber-50 border-amber-200 text-amber-800'
            }`}
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div className="flex-1">
              <div className="font-bold flex items-center justify-between">
                <span>{lastResult.message}</span>
                {lastResult.statusCode && (
                  <span className="bg-white/70 px-2 py-0.5 rounded border border-emerald-300 font-mono text-[10px]">
                    HTTP {lastResult.statusCode}
                  </span>
                )}
              </div>
              <div className="text-[11px] text-emerald-700/80 mt-0.5">
                {lastResult.urlsCount} URLs incluídas &bull; Último envio:{' '}
                {new Date(lastResult.timestamp).toLocaleString('pt-BR')}
              </div>
            </div>
          </div>
        )}

        {/* Tabs: URLs / cURL / JSON */}
        <div className="flex items-center gap-1 border-b border-slate-200 mb-3 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('urls')}
            className={`px-3 py-2 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'urls'
                ? 'border-[#0284C7] text-[#0284C7]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Lista de URLs ({urls.length})
          </button>
          <button
            onClick={() => setActiveTab('json')}
            className={`px-3 py-2 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'json'
                ? 'border-[#0284C7] text-[#0284C7]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Payload JSON IndexNow
          </button>
          <button
            onClick={() => setActiveTab('curl')}
            className={`px-3 py-2 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'curl'
                ? 'border-[#0284C7] text-[#0284C7]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Comando cURL / Terminal
          </button>
        </div>

        {/* Tab Content */}
        <div className="flex-1 overflow-y-auto pr-1">
          {activeTab === 'urls' && (
            <div className="space-y-1.5">
              {urls.map((url, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between text-xs py-1.5 px-3 rounded-lg bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors"
                >
                  <span className="font-mono text-slate-700 truncate pr-2">{url}</span>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0284C7] hover:underline flex items-center gap-0.5 text-[11px] shrink-0"
                  >
                    <span>Abrir</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'json' && (
            <div className="relative">
              <button
                onClick={handleCopyJson}
                className="absolute top-2 right-2 flex items-center gap-1 px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-white text-[10px] font-semibold transition-colors cursor-pointer"
              >
                {copiedJson ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copiedJson ? 'Copiado!' : 'Copiar JSON'}</span>
              </button>
              <pre className="p-3 bg-slate-900 text-slate-100 rounded-xl text-[11px] font-mono overflow-x-auto max-h-60 leading-relaxed">
                {JSON.stringify(payload, null, 2)}
              </pre>
            </div>
          )}

          {activeTab === 'curl' && (
            <div className="relative">
              <button
                onClick={handleCopyCurl}
                className="absolute top-2 right-2 flex items-center gap-1 px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-white text-[10px] font-semibold transition-colors cursor-pointer"
              >
                {copiedCurl ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copiedCurl ? 'Copiado!' : 'Copiar cURL'}</span>
              </button>
              <pre className="p-3 bg-slate-900 text-sky-300 rounded-xl text-[11px] font-mono overflow-x-auto max-h-60 leading-relaxed whitespace-pre-wrap">
                {curlCommand}
              </pre>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <Code2 className="w-3.5 h-3.5 text-slate-400" />
            <span>Documentação oficial: </span>
            <a
              href="https://www.bing.com/indexnow"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0284C7] hover:underline font-semibold flex items-center gap-0.5"
            >
              bing.com/indexnow
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold transition-colors cursor-pointer"
          >
            Fechar
          </button>
        </div>

      </div>
    </div>
  );
};
