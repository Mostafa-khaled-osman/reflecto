
import React from 'react';
import { Language } from '../types.ts';
import { TRANSLATIONS } from '../constants.tsx';

interface HeroProps {
  lang: Language;
}

const Hero: React.FC<HeroProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-screen w-full flex items-center overflow-hidden bg-black scroll-mt-20">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=1920&auto=format&fit=crop" 
          alt="Luxury Car detailing"
          className="w-full h-full object-cover opacity-60 scale-105"
        />
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-black font-orbitron leading-tight mb-6">
            <span className="block">{lang === 'ar' ? 'حماية لا تضاهى..' : 'UNRIVALED PROTECTION.'}</span>
            <span className="text-[#FF6F61] block">{lang === 'ar' ? 'بريق لا ينطفئ' : 'FLAWLESS FINISH.'}</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/70 mb-10 max-w-lg leading-relaxed">
            {lang === 'ar' 
              ? 'نحن نقدم أفضل حلول حماية الطلاء والعناية بالسيارات باستخدام أحدث التقنيات العالمية لضمان بقاء سيارتك في أفضل حالاتها.'
              : 'The ultimate shield for your automotive investment. Engineering excellence in paint protection, nano-ceramic coatings, and thermal window films.'}
          </p>

          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => scrollTo('services')}
              className="bg-[#FF6F61] text-white px-8 py-4 rounded-md font-bold font-orbitron hover:bg-[#E85D50] transition-all text-sm tracking-wider shadow-[0_0_20px_rgba(255,111,97,0.4)]"
            >
              {t.learnMore}
            </button>
            <button 
              onClick={() => scrollTo('packages')}
              className="border border-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-md font-bold font-orbitron hover:bg-white/10 transition-all text-sm tracking-wider"
            >
              {t.viewDetails}
            </button>
          </div>
        </div>
      </div>

      {/* Social Icons Floating */}
      <div className={`absolute bottom-10 flex gap-6 z-10 ${lang === 'ar' ? 'right-10' : 'left-10'}`}>
        {['facebook', 'instagram', 'twitter', 'youtube'].map((social) => (
          <a key={social} href="#" className="text-white/40 hover:text-[#FF6F61] transition-colors">
            <i className={`fab fa-${social} text-xl`}></i>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Hero;
