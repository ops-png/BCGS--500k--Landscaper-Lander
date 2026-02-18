
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="px-5 pt-4 md:pt-10 pb-4 md:pb-8 max-w-5xl mx-auto text-center relative">
      {/* Decorative Top Line */}
      <div className="flex justify-center mb-4 md:mb-8">
        <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent via-[#C9A24D]/40 to-transparent"></div>
      </div>

      <h2 className="text-[#C9A24D] text-[9px] md:text-base font-black tracking-[0.2em] md:tracking-[0.4em] uppercase mb-3 md:mb-5 text-glow leading-tight">
        Landscapers Doing $500,000+ a Year
      </h2>

      <h1 className="text-2xl md:text-5xl font-black leading-[1.2] mb-4 md:mb-6 tracking-tight text-white">
        The Lead Channel Your Competitors <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#F5F7FA] to-[#C9A24D] inline-block pt-1">Aren't On Yet</span>
      </h1>

      <p className="text-base md:text-2xl text-[#F5F7FA]/70 max-w-4xl mx-auto mb-10 md:mb-16 font-light leading-relaxed">
        Get qualified landscape leads at 50% the cost of Google ads - without changing any of your current marketing. Built specifically for established landscaping companies doing $500K+.
      </p>

      {/* Watch Breakdown Label */}
      <div className="flex items-center justify-center gap-2 mb-6 md:mb-8">
        <span className="text-[#C9A24D] text-xs md:text-sm font-black tracking-[0.25em] uppercase">Watch the breakdown below</span>
        <svg className="w-4 h-4 text-[#C9A24D] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {/* Video Section with Integrated Instruction Bar */}
      <div className="relative group mb-4 md:mb-12">
        <div className="absolute -inset-1 bg-gradient-to-r from-[#203159] via-[#C9A24D]/20 to-[#203159] rounded-2xl md:rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative glass-card rounded-xl md:rounded-2xl overflow-hidden border-[#C9A24D]/20">
          {/* Instruction Bar */}
          <div className="py-2 md:py-3 bg-[#203159] border-b border-[#C9A24D]/30 w-full flex justify-center items-center space-x-2 md:space-x-3">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9A24D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
            </svg>
            <span className="text-[10px] md:text-sm font-black tracking-[0.15em] md:tracking-[0.2em] uppercase text-white text-center">
              Click play and turn sound on.
            </span>
          </div>
          
          {/* Video Player Container */}
          <div className="p-1">
            <div className="aspect-video w-full bg-[#111827] rounded-lg md:rounded-xl relative overflow-hidden">
              <wistia-player
                media-id="1oojmx1fl3"
                seo="false"
                aspect="1.7777777777777777"
                style={{ width: '100%', height: '100%', display: 'block' }}
              ></wistia-player>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
