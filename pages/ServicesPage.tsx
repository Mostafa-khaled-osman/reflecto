
import React from 'react';
import { Language } from '../types.ts';
import { SERVICES } from '../constants.tsx';

interface ServicesPageProps {
  lang: Language;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ lang }) => {
  return (
    <div className="min-h-screen animate-in slide-in-from-bottom-4 duration-700">
      <div className="pt-20 pb-10 px-6 max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-black font-orbitron mb-4 uppercase tracking-tighter">
          {lang === 'ar' ? 'خدماتنا' : 'SERVICES'}
        </h1>
        <div className="w-32 h-2 bg-[#FF6F61] mb-12"></div>
      </div>

      <div className="space-y-20 pb-20">
        {SERVICES.map((service, idx) => (
          <section 
            key={service.id} 
            className={`relative w-full h-[600px] flex items-center overflow-hidden ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img 
                src={service.image} 
                className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-1000"
                alt={service.title}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className={`${idx % 2 !== 0 ? 'lg:col-start-2' : ''}`}>
                <span className="text-[#FF6F61] font-bold font-orbitron text-sm tracking-[0.5em] mb-4 block">0{idx + 1}</span>
                <h2 className="text-4xl md:text-5xl font-black font-orbitron mb-6 leading-tight">
                  {lang === 'ar' ? service.titleAr : service.title}
                </h2>
                <p className="text-xl text-white/60 mb-8 leading-relaxed max-w-lg">
                  {lang === 'ar' ? service.descriptionAr : service.description}
                </p>
                <button className="bg-white/10 backdrop-blur-md border border-white/20 px-8 py-4 rounded-full font-bold font-orbitron hover:bg-[#FF6F61] transition-all">
                  {lang === 'ar' ? 'اكتشف المزيد' : 'DISCOVER MORE'}
                </button>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
