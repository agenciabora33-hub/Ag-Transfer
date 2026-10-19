/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MobileStickyCTA } from './components/MobileStickyCTA';
import { FloatingWhatsAppCTA } from './components/FloatingWhatsAppCTA';
import { QuoteModal } from './components/QuoteModal';
import { SingleFileExportModal } from './components/SingleFileExportModal';
import { HomePage } from './pages/HomePage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';

// Automatically scroll to top on route navigation
const ScrollToTopOnRoute: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname, hash]);

  return null;
};

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [initialServiceForModal, setInitialServiceForModal] = useState('Transfer Aeroportuário');
  const [exportModalOpen, setExportModalOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuoteModal = (serviceTitle?: string) => {
    if (serviceTitle) {
      setInitialServiceForModal(serviceTitle);
    }
    setQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] selection:bg-[#38BDF8]/20 selection:text-[#0F172A] flex flex-col font-['Plus_Jakarta_Sans',sans-serif] relative">
      <ScrollToTopOnRoute />

      {/* Semantic Header with Dynamic Scroll Progress & Router Links */}
      <Header onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Dynamic Route View */}
      <div className="flex-1 flex flex-col">
        <Routes>
          <Route
            path="/"
            element={<HomePage onOpenQuoteModal={handleOpenQuoteModal} />}
          />
          <Route
            path="/servicos/:slug"
            element={<ServiceDetailPage onOpenQuoteModal={handleOpenQuoteModal} />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>

      {/* Semantic Footer (Complete NAP + Legal) */}
      <Footer onOpenExportModal={() => setExportModalOpen(true)} />

      {/* Mobile Sticky Thumb-Zone CTA */}
      <MobileStickyCTA onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Always Visible Floating WhatsApp CTA (Bottom Right) */}
      <FloatingWhatsAppCTA />

      {/* Floating Scroll-to-Top Button (Desktop, positioned beside WhatsApp CTA) */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={handleScrollToTop}
            aria-label="Voltar ao Topo"
            className="fixed bottom-6 right-24 sm:right-26 z-40 hidden md:flex items-center justify-center w-11 h-11 rounded-full bg-white hover:bg-[#0284C7] text-[#0284C7] hover:text-white border border-slate-200 backdrop-blur-md shadow-md cursor-pointer transition-colors"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Interactive Quotation Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialService={initialServiceForModal}
      />

      {/* Single-File HTML Export Modal (Requirement 5) */}
      <SingleFileExportModal
        isOpen={exportModalOpen}
        onClose={() => setExportModalOpen(false)}
      />
    </div>
  );
}
