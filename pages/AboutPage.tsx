
import React from 'react';
import { Language } from '../types';
import Legacy from '../components/Legacy';

interface AboutPageProps {
  lang: Language;
}

const AboutPage: React.FC<AboutPageProps> = ({ lang }) => {
  return (
    <div className="min-h-screen animate-in fade-in duration-700">
      <div className="pt-20 px-6 max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-black font-orbitron mb-4 uppercase tracking-tighter">
          {lang === 'ar' ? 'قصتنا' : 'OUR LEGACY'}
        </h1>
        <div className="w-32 h-2 bg-[#FF6F61] mb-12"></div>
      </div>
      
      <Legacy lang={lang} />

      {/* Craftsmanship Section */}
      <section className="py-24 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
             <img 
               src="https://images.unsplash.com/photo-1601362840469-51e4d8d59085?q=80&w=800&auto=format&fit=crop" 
               className="rounded-3xl shadow-2xl border-4 border-white/5"
               alt="Craftsmanship"
             />
          </div>
          <div className="order-1 lg:order-2">
             <h2 className="text-4xl font-black font-orbitron mb-8">PRECISION TOOLS,<br/>MASTER HANDS.</h2>
             <p className="text-white/50 text-lg leading-relaxed mb-8">
               We use only the finest industry-leading tools and materials imported directly from the USA. Our team undergoes rigorous training to master the art of hand-cut film application and precision machine polishing.
             </p>
             <div className="grid grid-cols-2 gap-8">
                <div>
                   <span className="text-3xl font-black font-orbitron text-[#FF6F61] block mb-2">15+</span>
                   <span className="text-xs uppercase tracking-[0.2em] font-bold text-white/40">Years Experience</span>
                </div>
                <div>
                   <span className="text-3xl font-black font-orbitron text-[#FF6F61] block mb-2">5000+</span>
                   <span className="text-xs uppercase tracking-[0.2em] font-bold text-white/40">Vehicles Protected</span>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
