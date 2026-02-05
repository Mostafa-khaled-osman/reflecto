
import React, { useState } from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface BookingPageProps {
  lang: Language;
}

const BookingPage: React.FC<BookingPageProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const carCategories = [
    { id: 'sedan', name: 'SEDAN', img: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=400&auto=format&fit=crop' },
    { id: 'suv', name: 'SUV / 4X4', img: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=400&auto=format&fit=crop' },
    { id: 'sports', name: 'SPORTS CAR', img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=400&auto=format&fit=crop' },
    { id: 'luxury', name: 'EXOTIC', img: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=400&auto=format&fit=crop' },
  ];

  return (
    <div className="min-h-screen animate-in slide-in-from-right-10 duration-700 bg-[#080808]">
      <div className="pt-20 px-6 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-black font-orbitron mb-4 uppercase tracking-tighter text-center">
          {t.smartBooking}
        </h1>
        <p className="text-center text-white/40 mb-16 max-w-2xl mx-auto">
          {t.bookingSubtitle}
        </p>

        {/* Step 1: Car Category */}
        <div className="mb-20">
          <h3 className="text-xl font-bold font-orbitron mb-8 text-[#FF6F61] flex items-center gap-4">
            <span className="w-10 h-10 rounded-full bg-[#FF6F61]/10 flex items-center justify-center text-sm">01</span>
            SELECT VEHICLE CLASS
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {carCategories.map(cat => (
              <div 
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`group relative h-48 rounded-2xl overflow-hidden cursor-pointer border-2 transition-all duration-300 ${
                  selectedCategory === cat.id ? 'border-[#FF6F61] scale-105' : 'border-white/5 grayscale hover:grayscale-0'
                }`}
              >
                <img src={cat.img} className="w-full h-full object-cover" alt={cat.name} />
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                  <span className="font-black font-orbitron text-xs tracking-widest">{cat.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Step 2: Details */}
        <div className={`transition-all duration-500 ${selectedCategory ? 'opacity-100' : 'opacity-20 pointer-events-none'}`}>
          <h3 className="text-xl font-bold font-orbitron mb-8 text-[#FF6F61] flex items-center gap-4">
            <span className="w-10 h-10 rounded-full bg-[#FF6F61]/10 flex items-center justify-center text-sm">02</span>
            BOOKING DETAILS
          </h3>
          
          <div className="bg-[#121212] p-8 md:p-12 rounded-[40px] border border-white/5 shadow-2xl mb-24">
            <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <label className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/40">Your Vehicle</label>
                    <input type="text" placeholder="e.g. Porsche 911 GT3" className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-xl focus:border-[#FF6F61] outline-none transition-colors" />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/40">Model Year</label>
                    <input type="number" placeholder="2025" className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-xl focus:border-[#FF6F61] outline-none transition-colors" />
                  </div>
               </div>

               <div className="space-y-4">
                  <label className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/40">Select Primary Goal</label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {['Invisible Protection', 'Brilliant Gloss', 'Privacy & Heat'].map(goal => (
                      <label key={goal} className="flex items-center gap-4 bg-white/5 p-5 rounded-2xl cursor-pointer hover:bg-white/10 transition-colors border border-transparent has-[:checked]:border-[#FF6F61]">
                        <input type="radio" name="goal" className="sr-only" />
                        <span className="text-sm font-medium">{goal}</span>
                      </label>
                    ))}
                  </div>
               </div>

               <button className="w-full bg-[#FF6F61] py-6 rounded-2xl font-black font-orbitron text-sm tracking-[0.3em] hover:shadow-[0_0_40px_rgba(255,111,97,0.4)] transition-all">
                 INITIALIZE RESERVATION
               </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
