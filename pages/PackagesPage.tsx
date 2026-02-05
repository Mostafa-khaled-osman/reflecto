
import React from 'react';
import { Language } from '../types';
import Pricing from '../components/Pricing';

interface PackagesPageProps {
  lang: Language;
}

const PackagesPage: React.FC<PackagesPageProps> = ({ lang }) => {
  return (
    <div className="min-h-screen animate-in fade-in duration-700">
      <div className="pt-20 px-6 max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-black font-orbitron mb-4 uppercase tracking-tighter">
          {lang === 'ar' ? 'الباقات' : 'PACKAGES'}
        </h1>
        <div className="w-32 h-2 bg-[#FF6F61] mb-12"></div>
      </div>
      
      <div className="relative">
         {/* Background Visual */}
         <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#FF6F61]/5 to-transparent pointer-events-none"></div>
         <Pricing lang={lang} />
      </div>

      <section className="py-20 bg-black/50 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
           <h3 className="text-2xl font-bold font-orbitron mb-6">CUSTOM PROTECTION SOLUTIONS</h3>
           <p className="text-white/40 mb-10 leading-relaxed">
             Need a bespoke protection plan for a fleet or a collector vehicle? Our master technicians can design a custom program tailored to your specific requirements.
           </p>
           <button className="border border-[#FF6F61] text-[#FF6F61] px-10 py-4 rounded-full font-bold font-orbitron hover:bg-[#FF6F61] hover:text-white transition-all">
             CONTACT SPECIALIST
           </button>
        </div>
      </section>
    </div>
  );
};

export default PackagesPage;
