
import React from 'react';
import { Link } from 'react-router-dom';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface FooterProps {
  lang: Language;
}

const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  return (
    <footer className="bg-black py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#FF6F61] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg font-orbitron">R</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold font-orbitron tracking-tighter leading-none">REFLECTO</span>
              <span className="text-[6px] tracking-[0.2em] text-[#FF6F61] font-medium leading-none mt-1 uppercase">Paint Protection Film</span>
            </div>
          </Link>

          <div className="flex flex-wrap justify-center gap-8">
            <Link to="/" className="text-xs font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors">{t.home}</Link>
            <Link to="/services" className="text-xs font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors">{t.services}</Link>
            <Link to="/packages" className="text-xs font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors">{t.packages}</Link>
            <Link to="/about" className="text-xs font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors">{t.about}</Link>
            <Link to="/contact" className="text-xs font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors">{t.contact}</Link>
          </div>

          <div className="flex gap-4">
            {['facebook-f', 'instagram', 'twitter', 'youtube', 'tiktok'].map(icon => (
              <a key={icon} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-[#FF6F61] hover:border-[#FF6F61] transition-all">
                <i className={`fab fa-${icon}`}></i>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] text-white/20 uppercase font-bold tracking-[0.3em]">
           <p>© 2024 REFLECTO. {lang === 'ar' ? 'جميع الحقوق محفوظة.' : 'ALL RIGHTS RESERVED.'}</p>
           <p>REFLECTO • AUTOMOTIVE PROTECTION & DETAILING</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
