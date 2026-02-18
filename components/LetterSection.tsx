
import React from 'react';

const LetterSection: React.FC = () => {
  const scrollToBooking = () => {
    document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 md:py-32 px-5 md:px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(201,162,77,0.03)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="max-w-3xl mx-auto relative">
        {/* Headline */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight text-white">
            Why Facebook Ads<br className="md:hidden" /> Work for<br className="md:hidden" />{' '}
            <span className="text-[#C9A24D]">Established Landscapers</span>
          </h2>
        </div>

        <div className="space-y-12 text-base md:text-xl leading-relaxed text-[#F5F7FA]/80">

          <div>
            <h3 className="text-xl md:text-2xl font-black text-white mb-5">The Google Problem You Already Know</h3>
            <div className="space-y-4 border-l-2 border-[#C9A24D]/20 pl-6 md:pl-10">
              <p>If you're running Google ads, you know they work. But you also know you're bidding against every landscaper in your market for the same search terms.</p>
              <p>Your cost per lead climbs every year. Your competitors see the same ads you're running. And homeowners are price shopping before they ever call you.</p>
              <p className="text-xl md:text-2xl font-black text-white italic">Google is effective, but it's a bloodbath.</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-black text-white mb-5">Why We Built This for Facebook Instead</h3>
            <div className="space-y-4 border-l-2 border-[#C9A24D]/20 pl-6 md:pl-10">
              <p>Facebook lets you reach homeowners <span className="text-white font-bold">before they're searching.</span> Before they call anyone else. Before price becomes part of the conversation.</p>
              <p>You're not competing on Google's battlefield. You're opening a new lead channel that runs completely separate from what you're already doing.</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-black text-white mb-5">What This Means for Your Business</h3>
            <div className="space-y-4 border-l-2 border-[#C9A24D]/20 pl-6 md:pl-10">
              {[
                'Another revenue stream without changing current operations',
                'Qualified leads at 50% or less than Google costs',
                'A market your competitors aren\'t tapping into yet',
                'Scales alongside your existing marketing, doesn\'t replace it'
              ].map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="mt-2 w-4 h-4 flex-shrink-0 bg-[#C9A24D]/20 rounded-full flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-[#C9A24D] rounded-full"></div>
                  </div>
                  <p>{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#203159]/30 border border-[#C9A24D]/20 p-6 md:p-8 rounded-2xl md:rounded-3xl">
            <p className="text-lg md:text-xl text-white font-bold leading-relaxed">
              This isn't about switching from Google to Facebook. It's about adding Facebook while Google keeps running.
            </p>
          </div>

        </div>

        {/* CTA */}
        <div className="flex flex-col items-center pt-16 md:pt-24">
          <button
            onClick={scrollToBooking}
            className="w-full md:w-auto group relative bg-[#203159] hover:bg-[#203159]/80 text-[#F5F7FA] px-5 md:px-10 py-4 rounded-xl font-black text-base md:text-lg flex items-center justify-center gap-3 transition-all active:scale-95 gold-glow border-b-4 border-[#C9A24D]"
          >
            <span className="bg-[#C9A24D] rounded p-1">
              <svg className="w-3.5 h-3.5 text-[#1F2933] fill-current" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            <span className="whitespace-nowrap">Check If Your Area Is Available</span>
          </button>
          <div className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-1 text-[10px] md:text-xs font-bold text-[#F5F7FA]/40 uppercase tracking-widest">
            <span className="flex items-center gap-1">✓ 100% FREE</span>
            <span className="flex items-center gap-1">✓ NO OBLIGATION</span>
            <span className="flex items-center gap-1">✓ ONLY 1 COMPANY PER AREA</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetterSection;
