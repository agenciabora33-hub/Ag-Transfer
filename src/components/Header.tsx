import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Phone, MessageCircle, Menu, X } from 'lucide-react';
import { COMPANY_NAP } from '../data/companyData';
import { Link } from 'react-router-dom';
import { BrandLogo } from './BrandLogo';

interface HeaderProps {
  onOpenQuoteModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Dynamic Scroll Progress Bar with Logo Blue Gradient
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '/#inicio' },
    { label: 'Serviços', href: '/#servicos' },
    { label: 'Cidades Atendidas', href: '/#cobertura' },
    { label: 'Frota', href: '/#frota' },
    { label: 'Diferenciais', href: '/#diferenciais' },
    { label: 'Avaliações', href: '/#avaliacoes' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 py-2.5 shadow-[0_4px_25px_rgba(15,23,42,0.06)]'
          : 'bg-white/80 backdrop-blur-sm border-b border-slate-200/60 py-3.5'
      }`}
    >
      {/* Dynamic Logo Blue Scroll Progress Bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#0D0A27] via-[#0284C7] to-[#38BDF8] origin-left z-50"
        style={{ scaleX }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-13">
          {/* Zone 1: Brand Wordmark with Official Logo Image */}
          <Link
            to="/"
            className="flex items-center gap-2.5 group transition-opacity"
            aria-label="AG Transfer Página Inicial"
          >
            <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/80 p-1 flex items-center justify-center shadow-xs overflow-hidden group-hover:border-[#0284C7]/50 transition-colors">
              <img
                src={COMPANY_NAP.logoUrl}
                alt="Logo AG Transfer & Transporte Executivo"
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="font-['Cinzel',serif] text-xl sm:text-2xl font-bold tracking-wider text-[#0D0A27] transition-colors group-hover:text-[#0284C7]">
              AG TRANSFER
            </span>
          </Link>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#0284C7] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#0284C7] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${COMPANY_NAP.phoneRaw}`}
              className="hidden xl:inline-flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-[#0284C7] px-3 py-2 transition-colors"
              title="Ligar para Atendimento 24h"
            >
              <Phone className="w-3.5 h-3.5 text-[#0284C7]" />
              <span className="tabular-nums">{COMPANY_NAP.phoneDisplay}</span>
            </a>
            <button
              onClick={onOpenQuoteModal}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#0D0A27] via-[#0A2540] to-[#0284C7] text-white font-semibold text-xs tracking-wide uppercase transition-all duration-200 hover:brightness-110 hover:shadow-[0_4px_16px_rgba(2,132,199,0.35)] active:scale-[0.98] cursor-pointer whitespace-nowrap shadow-sm"
            >
              <MessageCircle className="w-4 h-4 text-[#38BDF8]" />
              <span>Solicitar Orçamento</span>
            </button>
          </div>

          {/* Mobile menu hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenQuoteModal}
              className="px-3 py-1.5 rounded-lg bg-[#0284C7] text-white text-xs font-bold uppercase transition-transform active:scale-95 shadow-xs"
            >
              Cotação
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0284C7]"
              aria-label="Abrir Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="sm:hidden border-t border-slate-200 mt-2 pt-3 pb-4 bg-white/98 backdrop-blur-xl rounded-b-2xl px-2 space-y-2 shadow-xl animate-fadeIn">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-100 hover:text-[#0284C7] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-slate-200 space-y-2">
              <a
                href={COMPANY_NAP.whatsappBaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs tracking-wider uppercase transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp (54) 99153-7288
              </a>
              <a
                href={`tel:${COMPANY_NAP.phoneRaw}`}
                className="flex items-center justify-center gap-2 w-full py-2 rounded-xl bg-slate-100 text-slate-700 hover:text-slate-900 text-xs font-semibold"
              >
                <Phone className="w-3.5 h-3.5 text-[#0284C7]" />
                Ligar Agora 24 Horas
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
