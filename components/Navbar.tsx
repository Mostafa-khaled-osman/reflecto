
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Language } from '../types.ts';
import { TRANSLATIONS } from '../constants.tsx';

interface NavbarProps {
  lang: Language;
  toggleLang: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ lang, toggleLang }) => {
  const t = TRANSLATIONS[lang];
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { name: t.home, path: '/' },
    { name: t.services, path: '/services' },
    { name: t.packages, path: '/packages' },
    { name: t.about, path: '/about' },
    { name: t.contact, path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0D0D0D]/90 backdrop-blur-md border-b border-white/10 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#FF6F61] rounded-lg flex items-center justify-center transform rotate-12">
            <span className="text-white font-bold text-xl font-orbitron -rotate-12">R</span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold font-orbitron tracking-tighter leading-none">REFLECTO</span>
            <span className="text-[8px] tracking-[0.2em] text-[#FF6F61] font-medium leading-none mt-1 uppercase">Paint Protection Film</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link 
              key={item.path}
              to={item.path} 
              className={`text-sm font-medium transition-colors ${
                isActive(item.path) ? 'text-[#FF6F61]' : 'hover:text-[#FF6F61] text-white/70'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={toggleLang}
            className="px-3 py-1 border border-white/20 rounded-md text-xs font-bold hover:bg-white/10 transition-all uppercase"
          >
            {lang === 'en' ? 'AR' : 'EN'}
          </button>
          <Link 
            to="/booking"
            className="bg-[#FF6F61] text-white px-5 py-2 rounded-md text-xs font-bold font-orbitron hover:bg-[#E85D50] transition-all"
          >
            {t.bookNow}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
