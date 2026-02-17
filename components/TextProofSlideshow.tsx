
import React, { useState, useEffect } from 'react';

const images = [
  "https://i.postimg.cc/s2JPkYVd/Text_proof_landscaper_1.png",
  "https://i.postimg.cc/zfkwsCJm/Text_Proof_2_Landscaper.png",
  "https://i.postimg.cc/d09Rb2Jb/Text_Message_Landscape_7.png",
  "https://i.postimg.cc/d09Rb2JN/Text_Message_3_landscaper.png",
  "https://i.postimg.cc/TPcjzVTC/Text_6_landscape.png",
  "https://i.postimg.cc/5tm5hBf7/Text_5_Landscape_Review.png",
  "https://i.postimg.cc/431vD6XW/Text_4_Landscaper.png",
];

const TextProofSlideshow: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 md:py-24 px-5 md:px-6 max-w-4xl mx-auto text-center">
      {/* Section Header */}
      <h2 className="text-[#C9A24D] text-[10px] md:text-sm font-black tracking-[0.3em] md:tracking-[0.4em] uppercase mb-4 md:mb-6 text-glow">
        Real Conversations
      </h2>
      <p className="text-2xl md:text-4xl font-black text-white mb-10 md:mb-14 tracking-tight leading-tight">
        Straight From Our <span className="text-[#C9A24D]">Clients' Phones</span>
      </p>

      {/* Slideshow Card */}
      <div className="relative group max-w-sm mx-auto">
        <div className="absolute -inset-1 bg-gradient-to-r from-[#203159] via-[#C9A24D]/20 to-[#203159] rounded-2xl md:rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative glass-card rounded-xl md:rounded-2xl overflow-hidden border-[#C9A24D]/20">
          {/* Image Container */}
          <div className="relative w-full overflow-hidden" style={{ minHeight: '420px' }}>
            {images.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Client text proof ${idx + 1}`}
                className="absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ease-in-out"
                style={{ opacity: idx === current ? 1 : 0 }}
              />
            ))}
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 py-4 bg-[#171E26]/60">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === current
                    ? 'bg-[#C9A24D] w-5'
                    : 'bg-[#F5F7FA]/20 hover:bg-[#F5F7FA]/40'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextProofSlideshow;
