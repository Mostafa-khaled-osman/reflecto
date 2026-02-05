
import React from 'react';
import { Language } from '../types';
import { SERVICES } from '../constants';

interface ServicesProps {
  lang: Language;
}

const Services: React.FC<ServicesProps> = ({ lang }) => {
  return (
    <section id="services" className="py-24 bg-[#0D0D0D] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id}
              className="group relative bg-[#1A1A1A] rounded-2xl overflow-hidden border border-white/5 transition-all duration-500 hover:border-[#FF6F61]/50 hover:shadow-[0_0_30px_rgba(255,111,97,0.15)] flex flex-col h-full"
            >
              {/* Image Header */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] to-transparent opacity-60"></div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold font-orbitron mb-3 tracking-tight leading-tight">
                  {lang === 'ar' ? service.titleAr : service.title}
                </h3>
                <p className="text-sm text-white/50 mb-6 leading-relaxed flex-grow">
                  {lang === 'ar' ? service.descriptionAr : service.description}
                </p>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full border border-[#FF6F61]/30 text-[#FF6F61] py-2 rounded-md text-xs font-bold font-orbitron hover:bg-[#FF6F61] hover:text-white transition-all uppercase"
                >
                  {lang === 'ar' ? service.buttonTextAr : service.buttonText}
                </button>
              </div>

              {/* Glowing Corner Indicator */}
              <div className={`absolute top-0 w-1 h-0 bg-[#FF6F61] transition-all duration-500 group-hover:h-full ${lang === 'ar' ? 'right-0' : 'left-0'}`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
