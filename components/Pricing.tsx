
import React from 'react';
import { Language } from '../types';
import { PACKAGES, TRANSLATIONS } from '../constants';

interface PricingProps {
  lang: Language;
}

const Pricing: React.FC<PricingProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  return (
    <section id="packages" className="py-24 bg-[#0D0D0D] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black font-orbitron mb-4">
            {lang === 'ar' ? 'باقات وأسعار ريفليكتو' : 'Packages & Pricing'}
          </h2>
          <div className="w-24 h-1 bg-[#FF6F61] mx-auto opacity-50"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PACKAGES.map((pkg) => (
            <div 
              key={pkg.name}
              className={`relative bg-[#151515] rounded-3xl p-8 flex flex-col border transition-all duration-300 ${
                pkg.isBestValue 
                  ? 'border-[#FF6F61] shadow-[0_0_40px_rgba(255,111,97,0.1)] scale-105 z-10' 
                  : 'border-white/5 hover:border-white/20'
              }`}
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-black font-orbitron mb-1 tracking-wider uppercase">
                  {lang === 'ar' ? pkg.nameAr : pkg.name}
                </h3>
                {pkg.subtitle && (
                  <p className="text-[#FF6F61] text-[10px] font-bold tracking-[0.2em] mb-4 uppercase">
                    {lang === 'ar' ? pkg.subtitleAr : pkg.subtitle}
                  </p>
                )}
                <div className="w-12 h-[1px] bg-white/20 mx-auto mb-6"></div>
              </div>

              <div className="space-y-6 mb-10 flex-grow">
                {pkg.features.map((feature, i) => (
                  <div key={i} className="flex flex-col text-center">
                    <span className="text-[10px] uppercase text-white/40 tracking-widest mb-1">
                      {lang === 'ar' ? feature.labelAr : feature.label}
                    </span>
                    <div className="flex items-center justify-center gap-2">
                       {feature.included && (
                         <svg className="w-3 h-3 text-[#FF6F61]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                         </svg>
                       )}
                       <span className="text-sm font-medium">
                         {lang === 'ar' ? feature.valueAr : feature.value}
                       </span>
                    </div>
                    <div className="h-[1px] w-full bg-white/5 mt-4"></div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <div className="text-3xl font-black font-orbitron mb-2">
                  {lang === 'ar' ? pkg.priceAr : pkg.price}
                </div>
                <p className="text-[9px] text-white/40 mb-6 uppercase tracking-widest">
                  {lang === 'ar' ? 'أو ادفع على ٤ دفعات بدون فوائد مع' : 'OR PAY IN 4 INTEREST-FREE INSTALLMENTS WITH'}
                </p>
                
                <div className="flex items-center justify-center gap-3">
                  <div className="bg-[#56E3A9] text-black px-3 py-1 rounded-md text-[10px] font-black italic">tabby</div>
                  <span className="text-[10px] font-bold text-white/20">OR</span>
                  <div className="bg-[#E47C5E] text-white px-3 py-1 rounded-md text-[10px] font-black">tamara</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
