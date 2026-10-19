import React from 'react';
import { COMPANY_NAP } from '../data/companyData';

interface BrandLogoProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  textColor?: string;
  className?: string;
  subtext?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  showText = false,
  textColor = 'text-[#0D0A27]',
  className = '',
  subtext,
}) => {
  const sizeMap = {
    xs: 'w-6 h-6',
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
    xl: 'w-20 h-20',
  };

  const imgSizeMap = {
    xs: 'w-5 h-5',
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  const textMap = {
    xs: 'text-sm',
    sm: 'text-base',
    md: 'text-lg sm:text-xl',
    lg: 'text-xl sm:text-2xl',
    xl: 'text-2xl sm:text-3xl',
  };

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      <div
        className={`${sizeMap[size]} rounded-xl bg-white border border-slate-200/90 p-1 flex items-center justify-center shadow-xs overflow-hidden shrink-0 transition-all duration-200 hover:border-[#0284C7]/40`}
      >
        <img
          src={COMPANY_NAP.logoUrl}
          alt="Logo Oficial AG Transfer & Transporte Executivo"
          className={`${imgSizeMap[size]} object-contain`}
          loading="eager"
          decoding="async"
        />
      </div>

      {showText && (
        <div className="flex flex-col leading-tight">
          <span className={`font-['Cinzel',serif] font-bold tracking-wider ${textColor} ${textMap[size]}`}>
            AG TRANSFER
          </span>
          {subtext && (
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-500">
              {subtext}
            </span>
          )}
        </div>
      )}
    </div>
  );
};
