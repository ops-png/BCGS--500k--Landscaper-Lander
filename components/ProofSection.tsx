
import React from 'react';

const ProofSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-5 md:px-6 max-w-4xl mx-auto text-center">
      
      {/* Upper CTA - matching the image flow */}
      <div className="flex flex-col items-center mb-20">
        <button className="w-full md:w-auto group relative bg-[#203159] hover:bg-[#203159]/80 text-[#F5F7FA] px-6 md:px-12 py-5 rounded-xl font-black text-lg md:text-xl flex items-center justify-center gap-3 transition-all active:scale-95 gold-glow border-b-4 border-[#C9A24D]">
          <span className="bg-[#C9A24D] rounded p-1">
            <svg className="w-4 h-4 text-[#1F2933] fill-current" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
          Schedule My Scale Potential Call
        </button>
        <div className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-1 text-[10px] md:text-xs font-bold text-[#F5F7FA]/40 uppercase tracking-widest">
          <span className="flex items-center gap-1">✓ 100% Free</span>
          <span className="flex items-center gap-1">✓ No Obligation</span>
          <span className="flex items-center gap-1">✓ See if your area is still available</span>
        </div>
      </div>

      {/* Main Headline */}
      <h2 className="text-3xl md:text-5xl font-black mb-12 tracking-tight leading-tight text-white">
        We Built This System for Ourselves First<br/>
        <span className="text-[#C9A24D]">Here's The Proof:</span>
      </h2>

      {/* Halverson Bros Logo Placeholder */}
      <div className="flex justify-center mb-10">
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-[#C9A24D]/30 flex items-center justify-center bg-[#203159]/20 relative group">
          <div className="absolute inset-0 rounded-full bg-[#C9A24D]/5 animate-pulse"></div>
          <div className="relative flex flex-col items-center">
            {/* Tree Icon representation */}
            <svg className="w-16 h-16 md:w-20 md:h-20 text-[#C9A24D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 19V5M12 5L7 10M12 5L17 10M5 19H19M8 15L12 11L16 15" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="12" r="10" strokeDasharray="2 2" />
            </svg>
            <span className="text-xl font-black text-[#C9A24D] -mt-2">HB</span>
          </div>
        </div>
      </div>

      {/* Intro Text */}
      <p className="text-xl md:text-2xl text-[#F5F7FA]/80 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
        Before we ever installed this for other landscapers, we built it for our own landscaping business - <span className="text-white font-bold">Halverson Bros.</span>
      </p>

      {/* Dashboard Placeholder */}
      <div className="glass-card rounded-2xl md:rounded-3xl p-4 md:p-6 mb-12 border-[#C9A24D]/20 overflow-hidden shadow-2xl">
        <div className="bg-[#111827] rounded-xl overflow-hidden border border-white/5 p-2 md:p-4">
          <div className="w-full aspect-[16/6] bg-[#1F2933] rounded-lg flex flex-col items-center justify-center space-y-4 opacity-80">
            <svg className="w-12 h-12 text-[#C9A24D]/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.3em] text-white/20 font-bold">Campaign Performance Dashboard Placeholder</span>
          </div>
        </div>
      </div>

      {/* Results Text */}
      <p className="text-xl md:text-3xl font-black text-white leading-tight mb-20 max-w-3xl mx-auto">
        We went from <span className="text-[#C9A24D]">$0 to $100K/month</span> in 4 months using this exact system. Without any reviews, social media or experience in our trade.
      </p>

      {/* Customer Proof Grid Placeholder */}
      <div className="bg-[#F5F7FA]/5 rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-12 mb-20 border border-white/5 relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C9A24D]/40 to-transparent"></div>
        
        <div className="mb-10">
          <h3 className="text-2xl md:text-3xl font-black text-white mb-2">Halverson Bros Outdoor Services</h3>
          <span className="text-[#C9A24D] font-bold text-sm tracking-widest uppercase">100+ customers served</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="aspect-square bg-[#111827] rounded-2xl border border-white/5 overflow-hidden flex items-center justify-center relative group/img">
              <div className="absolute inset-0 bg-[#203159]/20 opacity-40 group-hover/img:opacity-0 transition-opacity"></div>
              <svg className="w-8 h-8 text-white/5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="absolute bottom-2 left-0 right-0 text-[8px] font-bold text-white/10 tracking-widest uppercase">Project Image {i}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Operator Text */}
      <p className="text-xl md:text-2xl font-bold text-white mb-16 leading-snug max-w-3xl mx-auto">
        We're not marketers who theory-crafted this. <br className="hidden md:block"/>
        <span className="text-[#C9A24D]">We're operators who proved it works.</span>
      </p>

      {/* Potential Text */}
      <p className="text-2xl md:text-3xl font-black text-white mb-16 leading-tight max-w-2xl mx-auto tracking-tight">
        If we could do that with nothing, imagine what you can do with an established business, crews already running, and a reputation in your local market.
      </p>

      {/* Lower CTA - matching the image flow */}
      <div className="flex flex-col items-center">
        <button className="w-full md:w-auto group relative bg-[#203159] hover:bg-[#203159]/80 text-[#F5F7FA] px-6 md:px-12 py-5 rounded-xl font-black text-lg md:text-xl flex items-center justify-center gap-3 transition-all active:scale-95 gold-glow border-b-4 border-[#C9A24D]">
          <span className="bg-[#C9A24D] rounded p-1">
            <svg className="w-4 h-4 text-[#1F2933] fill-current" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
          Schedule My Scale Potential Call
        </button>
        <div className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-1 text-[10px] md:text-xs font-bold text-[#F5F7FA]/40 uppercase tracking-widest">
          <span className="flex items-center gap-1">✓ 100% Free</span>
          <span className="flex items-center gap-1">✓ No Obligation</span>
          <span className="flex items-center gap-1">✓ See if your area is still available</span>
        </div>
      </div>

    </section>
  );
};

export default ProofSection;
