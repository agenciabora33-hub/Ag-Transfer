import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';
import { COMPANY_NAP } from '../data/companyData';

interface HeaderProps {
  onOpenQuoteModal?: () => void;
}

export const Header: React.FC<HeaderProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname, location.hash]);

  // Passive compositor-only scroll progress indicator (zero forced reflow)
  useEffect(() => {
    let rafId = 0;

    const updateProgress = () => {
      rafId = 0;
      const el = progressBarRef.current;
      if (!el) return;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = maxScroll > 0 ? Math.min(1, Math.max(0, window.scrollY / maxScroll)) : 0;
      el.style.transform = `scaleX(${ratio})`;
    };

    const handleScroll = () => {
      if (rafId === 0) {
        rafId = window.requestAnimationFrame(updateProgress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId !== 0) window.cancelAnimationFrame(rafId);
    };
  }, []);

  const navItems = [
    { label: 'Serviços', href: '/#servicos' },
    { label: 'Frota', href: '/#frota' },
    { label: 'Cidades', href: '/#cobertura' },
    { label: 'Montevidéu', href: '/transfer-porto-alegre-montevideu', isRoute: true },
    { label: 'Avaliações', href: '/#avaliacoes' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/90">
      <div
        ref={progressBarRef}
        className="h-0.5 bg-[#0369A1] origin-left will-change-transform"
        style={{ transform: 'scaleX(0)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4 lg:gap-8">
        {/* Zone 1: Brand Wordmark + Focus Mode Requested Sizing */}
        <div className="flex items-center shrink-0">
          <Link
            to="/"
            className="inline-flex items-center gap-2.5 whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0369A1] rounded-lg"
            aria-label="AG Transfer - Ir para o início"
          >
            <div className="w-[70px] h-[50px] rounded-xl bg-white border border-slate-200 flex items-center justify-center overflow-hidden shrink-0">
              <img
                src={COMPANY_NAP.logoSmUrl}
                alt="Logotipo AG Transfer"
                width={70}
                height={70}
                referrerPolicy="no-referrer"
                className="w-[70px] h-[70px] object-contain"
                loading="eager"
                decoding="async"
              />
            </div>
            <span className="font-['Cinzel',serif] font-bold tracking-wider text-[#0D0A27] text-[13px] whitespace-nowrap shrink-0">
              AG TRANSFER
            </span>
          </Link>
        </div>

        {/* Zone 2: Clean Desktop Navigation Links (No Pill Enclosures) */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-7" aria-label="Navegação Principal">
          {navItems.map((item) =>
            item.isRoute ? (
              <Link
                key={item.href}
                to={item.href}
                className="text-sm font-semibold text-slate-700 hover:text-[#0369A1] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-slate-700 hover:text-[#0369A1] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
              >
                {item.label}
              </a>
            )
          )}
        </nav>

        {/* Zone 3: Single Primary Action + Mobile Drawer Toggle */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href={COMPANY_NAP.whatsappBaseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center gap-2 min-h-[42px] px-4 py-2 rounded-xl bg-gradient-to-r from-[#0D0A27] via-[#0A2540] to-[#0369A1] hover:brightness-110 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-sm whitespace-nowrap shrink-0"
          >
            <MessageCircle className="w-4 h-4 text-[#38BDF8]" aria-hidden="true" />
            <span>Cotar WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl border border-slate-200 text-[#0D0A27] hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <nav
          className="md:hidden bg-white border-t border-slate-200 px-4 py-4 space-y-2 shadow-lg animate-fadeIn"
          aria-label="Menu Mobile"
        >
          {navItems.map((item) =>
            item.isRoute ? (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center min-h-[44px] px-3 rounded-xl text-sm font-semibold text-[#0D0A27] hover:bg-slate-50"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center min-h-[44px] px-3 rounded-xl text-sm font-semibold text-[#0D0A27] hover:bg-slate-50"
              >
                {item.label}
              </a>
            )
          )}
          <div className="pt-2 border-t border-slate-100">
            <a
              href={COMPANY_NAP.whatsappBaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[44px] inline-flex items-center justify-center gap-2 rounded-xl bg-[#0369A1] text-white text-xs font-bold uppercase tracking-wider"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              <span>Solicitar Cotação (05h às 23h)</span>
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};
