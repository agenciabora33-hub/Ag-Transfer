import React, { useState, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingWhatsAppCTA } from './components/FloatingWhatsAppCTA';
import { MobileStickyCTA } from './components/MobileStickyCTA';
import { HomePage } from './pages/HomePage';

const ServiceDetailPage = lazy(() =>
  import('./pages/ServiceDetailPage').then((m) => ({ default: m.ServiceDetailPage }))
);
const CityDetailPage = lazy(() =>
  import('./pages/CityDetailPage').then((m) => ({ default: m.CityDetailPage }))
);
const MontevideoTransferPage = lazy(() =>
  import('./pages/MontevideoTransferPage').then((m) => ({ default: m.MontevideoTransferPage }))
);
const NotFoundPage = lazy(() =>
  import('./pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage }))
);
const QuoteModal = lazy(() =>
  import('./components/QuoteModal').then((m) => ({ default: m.QuoteModal }))
);
const IndexNowModal = lazy(() =>
  import('./components/IndexNowModal').then((m) => ({ default: m.IndexNowModal }))
);
const SingleFileExportModal = lazy(() =>
  import('./components/SingleFileExportModal').then((m) => ({ default: m.SingleFileExportModal }))
);

const RouteFallback: React.FC = () => (
  <div className="min-h-[60vh] flex items-center justify-center bg-[#F8FAFC] text-sm font-semibold text-slate-600">
    Carregando...
  </div>
);

export function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteInitialService, setQuoteInitialService] = useState<string | undefined>(undefined);
  const [indexNowOpen, setIndexNowOpen] = useState(false);
  const [exportOpen, setExportOpen] = useState(false);

  const openQuoteModal = (serviceTitle?: string) => {
    setQuoteInitialService(serviceTitle);
    setQuoteModalOpen(true);
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A] pb-16 md:pb-0">
        <Header onOpenQuoteModal={() => openQuoteModal()} />

        <div className="flex-1">
          <Suspense fallback={<RouteFallback />}>
            <Routes>
              <Route path="/" element={<HomePage onOpenQuoteModal={() => openQuoteModal()} />} />
              <Route
                path="/servicos/:slug"
                element={<ServiceDetailPage onOpenQuoteModal={openQuoteModal} />}
              />
              <Route
                path="/cidades/:slug"
                element={<CityDetailPage onOpenQuoteModal={openQuoteModal} />}
              />
              <Route
                path="/transfer-porto-alegre-montevideu"
                element={<MontevideoTransferPage />}
              />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </div>

        <Footer
          onOpenExportModal={() => setExportOpen(true)}
          onOpenIndexNowModal={() => setIndexNowOpen(true)}
        />

        <FloatingWhatsAppCTA />
        <MobileStickyCTA onOpenQuoteModal={() => openQuoteModal()} />

        <Suspense fallback={null}>
          {quoteModalOpen && (
            <QuoteModal
              isOpen={quoteModalOpen}
              onClose={() => setQuoteModalOpen(false)}
              initialService={quoteInitialService}
            />
          )}
          {indexNowOpen && (
            <IndexNowModal
              isOpen={indexNowOpen}
              onClose={() => setIndexNowOpen(false)}
            />
          )}
          {exportOpen && (
            <SingleFileExportModal
              isOpen={exportOpen}
              onClose={() => setExportOpen(false)}
            />
          )}
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
