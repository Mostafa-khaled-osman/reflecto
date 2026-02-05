
import React from 'react';
import { Language } from '../types.ts';
import Hero from '../components/Hero.tsx';
import BeforeAfter from '../components/BeforeAfter.tsx';
import { Link } from 'react-router-dom';

interface HomePageProps {
  lang: Language;
}

const HomePage: React.FC<HomePageProps> = ({ lang }) => {
  return (
    <div className="animate-in fade-in duration-700">
      <Hero lang={lang} />
      
      {/* Visual Call-to-Action Grid */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative h-96 rounded-3xl overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1599256621730-535171e28e50?q=80&w=800&auto=format&fit=crop" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60"
              alt="Detailing"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent p-10 flex flex-col justify-end">
              <h3 className="text-3xl font-bold font-orbitron mb-4">PREMIUM DETAILING</h3>
              <Link to="/services" className="text-[#FF6F61] font-bold text-sm tracking-widest hover:underline">EXPLORE SERVICES →</Link>
            </div>
          </div>
          <div className="relative h-96 rounded-3xl overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?q=80&w=800&auto=format&fit=crop" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60"
              alt="Ceramic"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent p-10 flex flex-col justify-end">
              <h3 className="text-3xl font-bold font-orbitron mb-4">NANO CERAMIC</h3>
              <Link to="/packages" className="text-[#FF6F61] font-bold text-sm tracking-widest hover:underline">VIEW PACKAGES →</Link>
            </div>
          </div>
        </div>
      </section>

      <div className="py-24 bg-[#080808]">
        <BeforeAfter lang={lang} />
      </div>
    </div>
  );
};

export default HomePage;
