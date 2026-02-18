
import React from 'react';

const PainPointsSection: React.FC = () => {
  const points = [
    'Google ad costs that climb every year for the same results',
    'Bidding against 10+ competitors for every search term',
    'Wanting another lead channel without operational overhead',
    "Ready to tap into an advertising market your competitors aren't on yet"
  ];

  const scrollToBooking = () => {
    document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 md:py-24 px-5 md:px-6 bg-transparent relative">
      <div className="max-w-3xl mx-auto glass-card p-6 md:p-12 rounded-[2rem] md:rounded-[3rem] border-[#C9A24D]/10">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-4 md:mb-6 tracking-tight leading-tight text-white">
          This System Is Built For <br className="hidden md:block" />
          <span className="text-[#C9A24D]">Established Landscaping Companies</span>
        </h2>

        <p className="text-base md:text-xl text-[#F5F7FA]/70 text-center mb-8 md:mb-10 leading-relaxed">
          You're already doing $500K+ annually. You have crews, systems, and infrastructure in place.
        </p>

        <p className="text-sm md:text-base font-black text-white uppercase tracking-widest mb-6 text-center">
          But you're dealing with:
        </p>

        <div className="space-y-5 md:space-y-6 mb-12 md:mb-16">
          {points.map((text, idx) => (
            <div key={idx} className="flex items-start gap-3 md:gap-4 group">
              <div className="mt-1 w-5 h-5 md:w-6 md:h-6 flex-shrink-0 bg-[#C9A24D]/10 rounded-full flex items-center justify-center border border-[#C9A24D]/20">
                <div className="w-1.5 h-1.5 bg-[#C9A24D] rounded-full"></div>
              </div>
              <p className="text-base md:text-xl text-[#F5F7FA]/80 leading-snug">
                {text}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center pt-6 md:pt-8 border-t border-white/5">
          <p className="text-[#F5F7FA]/70 text-base md:text-xl leading-relaxed mb-6 md:mb-8 max-w-xl mx-auto">
            You don't need a complete marketing overhaul. You need a proven system that adds qualified leads without disrupting what's already working.
          </p>
          <p className="text-white font-black text-lg md:text-xl mb-10 md:mb-12">
            If that sounds like you, check if your area is still available below.
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
            Check If Your Area Is Available
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
