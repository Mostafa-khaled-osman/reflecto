
import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface BookingProps {
  lang: Language;
}

const Booking: React.FC<BookingProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  return (
    <section id="contact" className="py-24 bg-[#080808] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-[#121212] rounded-[40px] overflow-hidden shadow-2xl border border-white/5">
          {/* Form Side */}
          <div className="p-10 lg:p-16">
            <h2 className="text-3xl md:text-4xl font-black font-orbitron mb-4 leading-tight">
              {t.smartBooking}
            </h2>
            <p className="text-white/40 text-sm mb-12 leading-relaxed">
              {t.bookingSubtitle}
            </p>

            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-[#FF6F61] mb-2">{t.selectCar}</label>
                  <select className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-4 text-sm focus:border-[#FF6F61] outline-none transition-all appearance-none">
                    <option>Audi</option>
                    <option>BMW</option>
                    <option>Mercedes-Benz</option>
                    <option>Porsche</option>
                    <option>Tesla</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-[#FF6F61] mb-2">{t.selectYear}</label>
                  <select className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-4 text-sm focus:border-[#FF6F61] outline-none transition-all appearance-none">
                    <option>2023</option>
                    <option>2024</option>
                    <option>2025</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-[#FF6F61] mb-4">Requested Services</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { id: 's1', label: 'PPF - Paint Protection Film' },
                    { id: 's2', label: 'Thermal Window Tinting' },
                    { id: 's3', label: 'Nano Ceramic Coating' },
                    { id: 's4', label: 'Detailing Package' }
                  ].map(service => (
                    <label key={service.id} className="flex items-center gap-3 cursor-pointer group">
                      <div className="relative">
                        <input type="checkbox" className="peer sr-only" />
                        <div className="w-6 h-6 border-2 border-white/10 rounded-md peer-checked:bg-[#FF6F61] peer-checked:border-[#FF6F61] transition-all"></div>
                        <svg className="absolute inset-0 m-auto w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-white/70 group-hover:text-white transition-colors">{service.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button className="w-full bg-[#FF6F61] text-white py-5 rounded-xl font-black font-orbitron text-sm tracking-[0.2em] shadow-[0_10px_30px_rgba(255,111,97,0.3)] hover:translate-y-[-2px] transition-all">
                {t.requestQuote}
              </button>

              <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
                 <button className="flex items-center gap-3 bg-[#25D366]/10 text-[#25D366] px-6 py-3 rounded-xl text-sm font-bold border border-[#25D366]/20 hover:bg-[#25D366] hover:text-white transition-all">
                    <i className="fab fa-whatsapp text-lg"></i>
                    {t.chatWhatsApp}
                 </button>
                 <div className="text-white/40 text-[10px] font-medium leading-relaxed">
                    <span className="block">{lang === 'ar' ? 'البريد: contact@reflecto.com' : 'Email: contact@reflecto.com'}</span>
                    <span className="block">{lang === 'ar' ? 'الهاتف: +1 (800) 555-0199' : 'Phone: +1 (800) 555-0199'}</span>
                 </div>
              </div>
            </form>
          </div>

          {/* Map Side */}
          <div className="relative hidden lg:block bg-[#0A0A0A]">
            {/* Stylized Dark Map Placeholder */}
            <div className="absolute inset-0 overflow-hidden opacity-40">
               <div className="absolute inset-0" style={{
                 backgroundImage: `radial-gradient(circle at 50% 50%, #222 1px, transparent 1px)`,
                 backgroundSize: '30px 30px'
               }}></div>
               <svg className="w-full h-full text-white/5" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M0 20 L100 20 M0 50 L100 50 M0 80 L100 80 M20 0 L20 100 M50 0 L50 100 M80 0 L80 100" stroke="currentColor" strokeWidth="0.1" />
                  <path d="M10 10 L40 10 L40 40 L10 40 Z" fill="currentColor" />
                  <path d="M60 15 L90 15 L90 35 L60 35 Z" fill="currentColor" />
                  <path d="M20 60 L45 60 L45 90 L20 90 Z" fill="currentColor" />
               </svg>
            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
              <div className="relative mb-8">
                 <div className="w-24 h-24 bg-[#FF6F61]/20 rounded-full animate-ping absolute inset-0"></div>
                 <div className="w-24 h-24 bg-[#FF6F61] rounded-full flex items-center justify-center relative z-10 shadow-[0_0_50px_rgba(255,111,97,0.5)]">
                    <span className="text-white font-black text-4xl font-orbitron">R</span>
                 </div>
              </div>
              <h4 className="text-xl font-bold font-orbitron mb-4">REFLECTO AUTOMOTIVE CENTER</h4>
              <p className="text-white/50 text-sm max-w-[280px]">
                123 Premier Drive, Luxury District,<br/>
                Citystone, ST 12345
              </p>
              <div className="mt-8 flex gap-4">
                 <div className="bg-white/5 p-4 rounded-xl text-xs font-bold uppercase tracking-widest border border-white/5">
                    Mon-Sat<br/>9am - 7pm
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
