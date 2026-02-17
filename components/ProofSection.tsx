
import React from 'react';

const ProofSection: React.FC = () => {
  const projectImages = [
    "https://i.postimg.cc/wvtvGc8k/Generated_Image_January_18_2026_11_45AM.jpg",
    "https://i.postimg.cc/dQy3RB9M/IMG_2222_2.avif",
    "https://i.postimg.cc/6Qq58L3G/Screenshot_2026_02_04_at_7_52_01_PM.png",
    "https://i.postimg.cc/ryrsGJ9L/IMG_1524.avif",
    "https://i.postimg.cc/d171xmPB/IMG_1741_2.jpg",
    "https://i.postimg.cc/9FPfKQSs/od_photo_2523_singular_display_full_Picture.avif",
    "https://i.postimg.cc/BQ5vknkW/IMG_3273.avif",
    "https://i.postimg.cc/RVxFgHPW/IMG_1821_2.avif"
  ];

  const scrollToBooking = () => {
    document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 md:py-24 px-5 md:px-6 max-w-4xl mx-auto text-center">
      
      {/* Main Headline */}
      <h2 className="text-3xl md:text-5xl font-black mb-12 tracking-tight leading-tight text-white">
        We Built This System for Ourselves First<br/>
        <span className="text-[#C9A24D]">Here's The Proof:</span>
      </h2>

      {/* Halverson Bros Logo Section */}
      <div className="flex justify-center mb-10">
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-[#C9A24D]/30 flex items-center justify-center bg-[#203159]/20 relative group overflow-hidden">
          <div className="absolute inset-0 rounded-full bg-[#C9A24D]/5 animate-pulse"></div>
          <div className="relative z-10 p-4">
            <img 
              src="https://i.postimg.cc/brVb8GQV/Halverson_Bros_Logo_(3).png" 
              alt="Halverson Bros Logo" 
              className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(201,162,77,0.4)]"
            />
          </div>
        </div>
      </div>

      {/* Intro Text */}
      <p className="text-xl md:text-2xl text-[#F5F7FA]/80 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
        Before we ever installed this for other landscapers, we built it for our own landscaping business - <span className="text-white font-bold">Halverson Bros.</span>
      </p>

      {/* Dashboard Image */}
      <div className="glass-card rounded-2xl md:rounded-3xl p-4 md:p-6 mb-12 border-[#C9A24D]/20 overflow-hidden shadow-2xl">
        <div className="bg-[#111827] rounded-xl overflow-hidden border border-white/5 relative group/dashboard">
          <img 
            src="https://i.postimg.cc/T1p8TCY1/Screenshot-2026-02-04-at-7-32-40-PM.png" 
            alt="Campaign Performance Dashboard" 
            className="w-full h-auto object-cover transition-transform duration-700 group-hover/dashboard:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#171E26]/40 to-transparent pointer-events-none"></div>
        </div>
      </div>

      {/* Results Text */}
      <p className="text-xl md:text-3xl font-black text-white leading-tight mb-20 max-w-3xl mx-auto">
        We went from <span className="text-[#C9A24D]">$0 to $100K/month</span> in 4 months using this exact system. Without any reviews, social media or experience in our trade.
      </p>

      {/* Continuous Slideshow Container */}
      <div className="bg-[#F5F7FA]/5 rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-12 mb-20 border border-white/5 relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C9A24D]/40 to-transparent z-20"></div>
        
        <div className="mb-10">
          <h3 className="text-2xl md:text-3xl font-black text-white mb-2 leading-tight">
            Halverson Bros<br />
            Outdoor Services
          </h3>
          <span className="text-[#C9A24D] font-bold text-sm tracking-widest uppercase">50+ customers served</span>
        </div>

        {/* Marquee Wrapper */}
        <div className="relative w-full overflow-hidden">
          {/* Edge Fades */}
          <div className="absolute inset-y-0 left-0 w-12 md:w-32 bg-gradient-to-r from-[#171E26] to-transparent z-10 pointer-events-none opacity-80"></div>
          <div className="absolute inset-y-0 right-0 w-12 md:w-32 bg-gradient-to-l from-[#171E26] to-transparent z-10 pointer-events-none opacity-80"></div>
          
          <div className="flex gap-4 md:gap-6 animate-marquee w-max py-2">
            {/* Double the array for a seamless loop */}
            {[...projectImages, ...projectImages].map((url, idx) => (
              <div key={idx} className="w-64 md:w-80 aspect-square bg-[#111827] rounded-3xl border border-white/5 overflow-hidden relative flex-shrink-0 group/img transition-transform duration-500 hover:scale-[1.02] shadow-xl">
                <img 
                  src={url} 
                  alt={`Project ${idx + 1}`} 
                  className="w-full h-full object-cover transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-[#203159]/20 opacity-40 group-hover/img:opacity-0 transition-opacity"></div>
              </div>
            ))}
          </div>
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
        <button 
          onClick={scrollToBooking}
          className="w-full md:w-auto group relative bg-[#203159] hover:bg-[#203159]/80 text-[#F5F7FA] px-5 md:px-10 py-4 rounded-xl font-black text-base md:text-lg flex items-center justify-center gap-3 transition-all active:scale-95 gold-glow border-b-4 border-[#C9A24D]"
        >
          <span className="bg-[#C9A24D] rounded p-1">
            <svg className="w-3 h-3 text-[#1F2933] fill-current" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
          Check If Your Area Is Available
        </button>
        <div className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-1 text-[10px] md:text-xs font-bold text-[#F5F7FA]/40 uppercase tracking-widest">
          <span className="flex items-center gap-1">✓ 100% FREE</span>
          <span className="flex items-center gap-1">✓ NO OBLIGATION</span>
          <span className="flex items-center gap-1">✓ ONLY 1 COMPANY PER AREA</span>
        </div>
      </div>

    </section>
  );
};

export default ProofSection;
