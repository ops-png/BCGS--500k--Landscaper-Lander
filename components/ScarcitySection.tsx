
import React from 'react';

const ScarcitySection: React.FC = () => {
  const scrollToBooking = () => {
    document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-12 md:py-20 px-5 md:px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-6xl font-black mb-10 md:mb-12 tracking-tight leading-tight">
          Your Territory Won't <br className="md:hidden"/>
          <span className="text-[#C9A24D]">Stay Open Forever</span>
        </h2>
        
        <button 
          onClick={scrollToBooking}
          className="w-full md:w-auto group relative bg-[#203159] hover:bg-[#203159]/80 text-[#F5F7FA] px-6 md:px-10 py-4 md:py-4.5 rounded-xl md:rounded-2xl font-black text-base md:text-xl flex items-center justify-center gap-3 md:gap-4 transition-all active:scale-95 shadow-2xl mx-auto gold-glow border-b-4 border-[#C9A24D]"
        >
           <svg className="w-4 h-4 md:w-5 md:h-5 text-[#C9A24D] fill-current" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
           </svg>
           Check If Your Area Is Available
        </button>
        <div className="mt-8 flex flex-wrap justify-center gap-x-4 gap-y-1 text-[10px] md:text-sm font-bold text-[#F5F7FA]/40 uppercase tracking-widest">
          <span className="flex items-center gap-1">✓ 100% FREE</span>
          <span className="flex items-center gap-1">✓ NO OBLIGATION</span>
          <span className="flex items-center gap-1">✓ ONLY 1 COMPANY PER AREA</span>
        </div>
    </section>
  );
};

export default ScarcitySection;
