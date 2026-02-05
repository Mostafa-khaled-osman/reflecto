
import React from 'react';
import { Language } from '../types';
import Booking from '../components/Booking';

interface ContactPageProps {
  lang: Language;
}

const ContactPage: React.FC<ContactPageProps> = ({ lang }) => {
  return (
    <div className="min-h-screen animate-in fade-in duration-700">
      <div className="pt-20 px-6 max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-black font-orbitron mb-4 uppercase tracking-tighter text-center">
          {lang === 'ar' ? 'اتصل بنا' : 'CONTACT US'}
        </h1>
        <div className="w-32 h-2 bg-[#FF6F61] mb-12 mx-auto"></div>
      </div>
      
      <div className="pb-24">
        <Booking lang={lang} />
      </div>

      <section className="py-20 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div>
            <i className="fas fa-phone-alt text-[#FF6F61] text-3xl mb-6"></i>
            <h4 className="font-bold font-orbitron mb-4 uppercase">Phone</h4>
            <p className="text-white/40">+1 (800) 555-0199</p>
          </div>
          <div>
            <i className="fas fa-envelope text-[#FF6F61] text-3xl mb-6"></i>
            <h4 className="font-bold font-orbitron mb-4 uppercase">Email</h4>
            <p className="text-white/40">contact@reflecto.com</p>
          </div>
          <div>
            <i className="fas fa-map-marker-alt text-[#FF6F61] text-3xl mb-6"></i>
            <h4 className="font-bold font-orbitron mb-4 uppercase">Location</h4>
            <p className="text-white/40">123 Premier Drive, Luxury District, Citystone</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
