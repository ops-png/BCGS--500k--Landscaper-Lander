
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="px-5 pt-4 md:pt-10 pb-4 md:pb-8 max-w-5xl mx-auto text-center relative">
      {/* Decorative Top Line */}
      <div className="flex justify-center mb-4 md:mb-8">
        <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent via-[#C9A24D]/40 to-transparent"></div>
      </div>

      <h2 className="text-[#C9A24D] text-[10px] md:text-sm font-black tracking-[0.3em] md:tracking-[0.4em] uppercase mb-3 md:mb-5 text-glow">
        BUILT BY LANDSCAPERS FOR LANDSCAPERS
      </h2>

      <h1 className="text-[1.55rem] leading-[1.3] sm:text-[1.85rem] md:text-[2.75rem] lg:text-[3.25rem] font-black mb-6 md:mb-10 tracking-tight text-white">
        Get{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#F5F7FA] to-[#C9A24D]">
          90 Qualified Job Requests
        </span>
        <br />
        in 90 Days
        <br />
        or You Don&apos;t Pay
      </h1>

      <p className="text-[0.82rem] leading-[1.6] sm:text-base md:text-xl text-[#F5F7FA]/70 max-w-4xl mx-auto mb-6 md:mb-10 font-light md:leading-relaxed">
        Discover the untapped opportunity hiding in every landscaper&apos;s service area
        <br />
        (and how to own it with zero risk)
      </p>

      {/* Directive CTA Line */}
      <p className="text-[11px] sm:text-xs md:text-sm font-black tracking-[0.15em] md:tracking-[0.2em] uppercase text-[#C9A24D] mb-4 md:mb-6 whitespace-nowrap">
        &#9888;&#65039; WATCH THE BREAKDOWN BELOW
      </p>

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
                media-id="33qehgsasz"
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
