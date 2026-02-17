
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="px-5 py-10 md:py-24 max-w-5xl mx-auto text-center relative">
      {/* Decorative Top Line */}
      <div className="flex justify-center mb-8 md:mb-12">
        <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent via-[#C9A24D]/40 to-transparent"></div>
      </div>

      <h2 className="text-[#C9A24D] text-xs md:text-base font-black tracking-[0.3em] md:tracking-[0.4em] uppercase mb-4 md:mb-6 text-glow">
        Attention: Professional Landscapers
      </h2>
      
      <h1 className="text-3xl md:text-7xl font-black leading-[1.1] md:leading-[1.05] mb-6 md:mb-10 tracking-tight text-white">
        Dominate Your Local Market <br className="hidden md:block"/> 
        <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#F5F7FA] to-[#C9A24D]/70">This Spring Season.</span>
      </h1>
      
      <p className="text-base md:text-2xl text-[#F5F7FA]/70 max-w-3xl mx-auto mb-10 md:mb-16 font-light leading-relaxed">
        Watch exactly how we scaled a landscaping operation from <span className="text-white font-semibold">$0 to $100K/month</span> in 120 days using <span className="text-[#C9A24D] font-semibold">High-Precision Ads</span> + <span className="text-[#C9A24D] font-semibold">AI Automation</span>.
      </p>

      {/* Video Placeholder - Ultra Dialed-in UI */}
      <div className="relative group mb-16 md:mb-24">
        <div className="absolute -inset-1 bg-gradient-to-r from-[#203159] via-[#C9A24D]/20 to-[#203159] rounded-2xl md:rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative glass-card rounded-xl md:rounded-2xl p-1 overflow-hidden border-[#C9A24D]/20">
          <div className="aspect-video w-full bg-[#111827] rounded-lg md:rounded-xl flex items-center justify-center relative overflow-hidden group/vid">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(32,49,89,0.4),transparent)]"></div>
            
            {/* UI Accents */}
            <div className="absolute top-2 left-2 md:top-4 md:left-4 flex gap-2">
               <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-red-500 animate-pulse"></div>
               <div className="text-[8px] md:text-[10px] font-bold text-white/40 tracking-widest">LIVE_OPERATOR_SYSTEM</div>
            </div>
            <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 text-[8px] md:text-[10px] font-mono text-white/20">4:21 / 15:00</div>

            <button className="relative z-10 w-16 h-16 md:w-24 md:h-24 bg-[#C9A24D] rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(201,162,77,0.4)] hover:scale-110 transition-transform duration-500">
              <svg className="w-6 h-6 md:w-10 md:h-10 text-[#1F2933] ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
            <div className="absolute bottom-6 md:bottom-10 left-0 right-0 text-center opacity-0 group-hover/vid:opacity-100 transition-opacity duration-300">
              <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#C9A24D] uppercase">Click to view blueprint</span>
            </div>
          </div>
        </div>
      </div>

      {/* Booking CTA */}
      <div className="flex flex-col items-center mb-10 md:mb-12 space-y-4 md:space-y-6">
        <div className="bg-[#203159]/40 border border-[#C9A24D]/30 px-4 md:px-6 py-1.5 md:py-2 rounded-full text-[10px] md:text-xs font-bold tracking-widest uppercase text-[#C9A24D]">
          Phase 1: Territory Qualification
        </div>
        <div className="flex flex-col items-center gap-2 md:gap-4 text-white">
          <span className="text-xl md:text-2xl font-bold tracking-tight">Book your 15-minute</span>
          <span className="text-xl md:text-2xl font-black text-[#C9A24D] px-4 py-1 border-2 border-[#C9A24D] md:skew-x-[-10deg]">
             SCALE POTENTIAL CALL
          </span>
        </div>
        <p className="text-xs md:text-sm text-[#F5F7FA]/40 font-medium text-center">
          Limited slots. Text (920) 932-5785 for priority scheduling.
        </p>
      </div>

      {/* Calendar Placeholder */}
      <div className="relative glass-card rounded-2xl md:rounded-3xl p-1 border-[#203159]/50 mb-16 md:mb-32 overflow-hidden shadow-2xl">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C9A24D]/30 to-transparent"></div>
        <div className="min-h-[400px] md:min-h-[600px] w-full bg-[#111827]/40 rounded-[1.2rem] md:rounded-[1.4rem] flex flex-col items-center justify-center p-6 md:p-8">
           <div className="w-16 h-16 md:w-20 md:h-20 bg-[#203159] rounded-xl md:rounded-2xl flex items-center justify-center mb-6 md:mb-8 border border-[#C9A24D]/20">
             <svg className="w-6 h-6 md:w-8 md:h-8 text-[#C9A24D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
             </svg>
           </div>
           <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4">Calendar Booking Interface</h3>
           <p className="text-[#F5F7FA]/30 max-w-[280px] md:max-w-sm mx-auto text-xs md:text-sm leading-relaxed">
             This component will load your preferred scheduling software (Calendly, GoHighLevel, etc.) once the system is live.
           </p>
           <div className="mt-8 md:mt-12 flex gap-3 md:gap-4">
             <div className="w-8 md:w-12 h-1.5 md:h-2 rounded bg-white/5"></div>
             <div className="w-8 md:w-12 h-1.5 md:h-2 rounded bg-white/5"></div>
             <div className="w-8 md:w-12 h-1.5 md:h-2 rounded bg-[#C9A24D]/20"></div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
