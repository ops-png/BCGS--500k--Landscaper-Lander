
import React from 'react';

const PainPointsSection: React.FC = () => {
  const points = [
    "You're driving 2 hours round-trip for free estimates that ghost you",
    "You're babysitting your phone at 9 PM trying to respond to leads fast enough",
    "You're wasting gas on \"tire kickers\" who just want a ballpark price",
    "You're giving away professional advice for free to people who never buy",
    "Spring rush is 6 weeks away and you still don't have a pipeline built"
  ];

  const scrollToBooking = () => {
    document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 md:py-24 px-5 md:px-6 bg-transparent relative">
      <div className="max-w-3xl mx-auto glass-card p-6 md:p-12 rounded-[2rem] md:rounded-[3rem] border-red-500/10">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-8 md:mb-12 tracking-tight leading-tight">
          Sound Familiar?
        </h2>
        
        <div className="space-y-6 md:space-y-8 mb-12 md:mb-16">
          {points.map((text, idx) => (
            <div key={idx} className="flex items-start gap-3 md:gap-4 group">
              <div className="mt-1 w-5 h-5 md:w-6 md:h-6 flex-shrink-0 bg-red-500/20 rounded-full flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform">
                <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <p className="text-base md:text-xl text-[#F5F7FA]/80 leading-snug">
                {text}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center pt-6 md:pt-8 border-t border-white/5">
          <h3 className="text-2xl md:text-3xl font-black mb-3 md:mb-4">We lived this.</h3>
          <p className="text-[#C9A24D] text-lg md:text-xl font-bold uppercase tracking-widest mb-10 md:mb-12">
            That's why we built a system to fix it.
          </p>
          
          <button 
            onClick={scrollToBooking}
            className="w-full md:w-auto group relative bg-[#203159] hover:bg-[#203159]/80 text-[#F5F7FA] px-5 md:px-8 py-4 rounded-xl font-black text-base md:text-lg flex items-center justify-center gap-3 transition-all active:scale-95 gold-glow border-b-4 border-[#C9A24D] mx-auto"
          >
            <span className="bg-[#C9A24D] rounded p-0.5 group-hover:rotate-12 transition-transform hidden md:block">
              <svg className="w-3.5 h-3.5 text-[#1F2933] fill-current" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            <span className="flex flex-col items-center leading-tight">
              <span>Check If Your Area Is Available</span>
            </span>
          </button>
          <div className="mt-6 flex flex-wrap justify-center gap-x-4 gap-y-2 text-[10px] md:text-xs font-bold text-[#F5F7FA]/40 uppercase tracking-widest">
            <span className="flex items-center gap-1">✓ 100% FREE</span>
            <span className="flex items-center gap-1">✓ NO OBLIGATION</span>
            <span className="flex items-center gap-1">✓ ONLY 1 COMPANY PER AREA</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
