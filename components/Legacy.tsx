
import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface LegacyProps {
  lang: Language;
}

const Legacy: React.FC<LegacyProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  return (
    <section id="about" className="py-24 bg-black overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-4xl md:text-6xl font-black font-orbitron leading-tight mb-8">
               <span className="text-white block">{t.legacyTitle}</span>
               <span className="text-[#FF6F61] block text-2xl tracking-[0.3em] font-medium mt-2">{t.legacySubtitle}</span>
            </h2>
            <div className="space-y-6 text-white/60 leading-relaxed">
              <p>
                {lang === 'ar' 
                  ? 'بدأت ريفليكتو بشغف واحد: السعي الحثيث نحو التميز في مجال حماية السيارات. نحن لسنا مجرد مزود خدمة، بل نحن ملاذ لسيارتك.'
                  : 'Reflecto began with a singular passion: an unwavering pursuit of automotive excellence. Born from a desire to preserve the pristine beauty of every vehicle, we have mastered the art of protection.'}
              </p>
              <p>
                {lang === 'ar'
                  ? 'من خلال دمج التقنيات الحديثة مع أجود المواد الأمريكية، نقدم أكثر من مجرد خدمة؛ نقدم راحة البال والجمال المستدام.'
                  : 'By combining heritage techniques with cutting-edge American materials, we offer more than just a service; we provide a sanctuary for your vehicle. Every application of PPF and Nano Coating is a testament to our craftsmanship.'}
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?q=80&w=600&auto=format&fit=crop" 
                className="w-full h-80 object-cover rounded-2xl transform translate-y-8"
                alt="Workshop 1"
              />
              <img 
                src="https://images.unsplash.com/photo-1599256621730-535171e28e50?q=80&w=600&auto=format&fit=crop" 
                className="w-full h-80 object-cover rounded-2xl"
                alt="Workshop 2"
              />
            </div>
            {/* Accent Floating Badge */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 border border-[#FF6F61]/20 rounded-full flex items-center justify-center animate-pulse hidden lg:flex">
               <div className="w-32 h-32 bg-[#FF6F61]/10 rounded-full flex items-center justify-center">
                  <span className="text-[#FF6F61] font-bold font-orbitron text-center leading-none text-xs">CERTIFIED<br/>EXCELLENCE</span>
               </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-24">
          <h3 className="text-2xl font-bold font-orbitron mb-12 text-center uppercase tracking-widest">
            {t.workshopTitle}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1,2,3,4].map(i => (
              <div key={i} className="aspect-square rounded-2xl overflow-hidden group">
                <img 
                  src={`https://images.unsplash.com/photo-${1590000000000 + i}?q=80&w=500&auto=format&fit=crop`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  alt={`Workshop Detail ${i}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Legacy;
