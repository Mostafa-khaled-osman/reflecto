
import React, { useState } from 'react';
import { Language } from '../types';

interface BeforeAfterProps {
  lang: Language;
}

const BeforeAfter: React.FC<BeforeAfterProps> = ({ lang }) => {
  const [sliderPos, setSliderPos] = useState(50);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPos(Number(e.target.value));
  };

  return (
    <div className="max-w-5xl mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-black font-orbitron mb-4 uppercase">
          {lang === 'ar' ? 'تقنية حماية الطلاء المتقدمة' : 'ADVANCED PPF TECHNOLOGY'}
        </h2>
        <div className="w-20 h-1 bg-[#FF6F61] mx-auto"></div>
      </div>

      <div className="relative w-full aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/5">
        {/* Before Image */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1500&auto=format&fit=crop" 
            alt="Before"
            className="w-full h-full object-cover grayscale brightness-50"
          />
          <div className="absolute top-8 left-8 bg-black/50 backdrop-blur-md px-4 py-1 rounded-md text-xs font-bold uppercase tracking-widest border border-white/20">
            {lang === 'ar' ? 'قبل' : 'BEFORE'}
          </div>
        </div>

        {/* After Image Container (Clipped) */}
        <div 
          className="absolute inset-0 w-full h-full z-10 overflow-hidden" 
          style={{ width: `${sliderPos}%` }}
        >
          <img 
            src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1500&auto=format&fit=crop" 
            alt="After"
            className="absolute top-0 left-0 h-full w-[100vw] max-w-none object-cover"
          />
          <div className="absolute top-8 left-8 bg-[#FF6F61] px-4 py-1 rounded-md text-xs font-bold uppercase tracking-widest text-white shadow-lg">
            {lang === 'ar' ? 'بعد' : 'AFTER'}
          </div>
        </div>

        {/* Range Input Slider Overlay */}
        <input 
          type="range" 
          min="0" 
          max="100" 
          value={sliderPos} 
          onChange={handleSliderChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
        />

        {/* Visual Slider Line & Handle */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-[#FF6F61] z-20 pointer-events-none shadow-[0_0_20px_rgba(255,111,97,0.8)]"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-[#FF6F61] rounded-full flex items-center justify-center border-4 border-white shadow-xl">
             <div className="flex gap-1">
                <div className="w-1 h-3 bg-white/50 rounded-full"></div>
                <div className="w-1 h-3 bg-white/50 rounded-full"></div>
             </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
        <div className="text-center group">
          <div className="w-16 h-16 rounded-full border border-[#FF6F61]/30 flex items-center justify-center mx-auto mb-6 group-hover:bg-[#FF6F61]/10 transition-colors">
            <svg className="w-8 h-8 text-[#FF6F61]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h4 className="font-bold text-lg mb-3 uppercase tracking-tight">
            {lang === 'ar' ? 'خصائص المعالجة الذاتية' : 'Self-Healing Properties'}
          </h4>
          <p className="text-sm text-white/50">
            {lang === 'ar' ? 'تختفي الخدوش الطفيفة بفضل تقنية الطلاء المتقدمة عند تعرضها للحرارة.' : 'Advanced polymer technology allows the film to self-heal minor surface scratches with heat.'}
          </p>
        </div>
        <div className="text-center group">
          <div className="w-16 h-16 rounded-full border border-[#FF6F61]/30 flex items-center justify-center mx-auto mb-6 group-hover:bg-[#FF6F61]/10 transition-colors">
            <svg className="w-8 h-8 text-[#FF6F61]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
          </div>
          <h4 className="font-bold text-lg mb-3 uppercase tracking-tight">
            {lang === 'ar' ? 'حماية متعددة الطبقات' : 'Multi-Layer Protection'}
          </h4>
          <p className="text-sm text-white/50">
            {lang === 'ar' ? 'حماية شاملة ضد الصدمات والمواد الكيميائية وحطام الطرق.' : 'Engineered with multiple layers for maximum impact resistance and environmental protection.'}
          </p>
        </div>
        <div className="text-center group">
          <div className="w-16 h-16 rounded-full border border-[#FF6F61]/30 flex items-center justify-center mx-auto mb-6 group-hover:bg-[#FF6F61]/10 transition-colors">
            <svg className="w-8 h-8 text-[#FF6F61]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h4 className="font-bold text-lg mb-3 uppercase tracking-tight">
            {lang === 'ar' ? 'مقاومة المواد الكيميائية' : 'Chemical Resistance'}
          </h4>
          <p className="text-sm text-white/50">
            {lang === 'ar' ? 'يحمي من بقع الماء، والمطر الحمضي، وفضلات الطيور والمواد القاسية.' : 'Repels contaminants such as bird droppings, acid rain, and harsh detergents.'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfter;
