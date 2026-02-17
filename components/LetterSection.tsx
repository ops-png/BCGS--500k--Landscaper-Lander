
import React from 'react';

const LetterSection: React.FC = () => {
  const scrollToBooking = () => {
    document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 md:py-32 px-5 md:px-6 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(201,162,77,0.03)_0%,transparent_70%)] pointer-events-none"></div>
      
      <div className="max-w-3xl mx-auto relative">
        {/* Headline - Centered */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight text-white italic">
            We Hit <span className="text-[#C9A24D]">$100k In 120 Days.</span> <br className="md:block hidden" />
            And I <span className="underline decoration-[#C9A24D]/40">Almost Hated It.</span>
          </h2>
        </div>

        {/* Letter Body - Left Aligned with accent border */}
        <div className="space-y-8 text-base md:text-xl leading-relaxed text-[#F5F7FA]/80 border-l-2 border-[#C9A24D]/20 pl-6 md:pl-10 py-2">
          <p>Look, I’m not writing this to give you some corporate marketing spiel.</p>

          <p>
            I’m writing this because in Spring 2025, my partner and I started a landscaping business with 
            <span className="text-white font-bold"> no website, no reviews, and zero experience in the trade.</span> 
            Just two guys, a truck, and a lot of hustle.
          </p>

          <p className="text-xl md:text-2xl text-white font-black italic">
            In four months, we put <span className="text-[#C9A24D]">$100k of revenue</span> on the books.
          </p>

          <p>On paper? We were "crushing it." In reality? We were drowning.</p>

          <p>
            Nobody tells you the dark side of scaling. They don’t tell you that getting the phone to ring is actually the easy part. 
            <span className="text-white font-bold"> The hard part is what happens next.</span>
          </p>

          <p>
            I remember waking up to five lead notifications and feeling a literal knot in my stomach. Not excitement. <span className="text-[#C9A24D] font-bold">Anxiety.</span>
          </p>

          <p>Because I knew exactly what my day looked like.</p>

          <p className="text-xl md:text-2xl text-white font-medium tracking-tight">
            I had become a <span className="text-white font-black">Free Estimate Chauffeur.</span>
          </p>

          <p>
            I’d shut down the equipment, drive 35 minutes across town, and spend an hour walking a property with a homeowner who had 
            <span className="italic"> "HGTV expectations" </span> and a Walmart budget. I’d do the song and dance. I’d measure. I’d smile.
          </p>

          <p>Then they’d hit me with the, <span className="text-white font-bold">"Thanks, we’re getting a few more quotes."</span></p>

          <p>
            I’d get back in the truck, sweat drying on my back, and realize I just burned 
            <span className="text-[#C9A24D] font-bold"> two hours of labor for absolutely nothing.</span> 
            And I did that three times a day.
          </p>

          <p>
            Meanwhile, the actual high-ticket jobs—the ones that pay the bills—were calling me while I was on the mower. 
            I couldn’t hear the phone. By the time I called them back? <span className="text-white font-bold">Gone.</span> 
            They hired the guy who answered on the first ring.
          </p>

          <p>
            I was ending my days at 9:00 PM, sitting in the driveway, 
            <span className="text-[#C9A24D] font-bold"> doing math on a clipboard in the dark</span>, 
            tryin to catch up on texts from seven hours ago.
          </p>

          <p>
            We were making money, but we were losing our minds. We realized that if we scaled any bigger, 
            the business wouldn't set us free—<span className="text-white font-bold underline">it would kill us.</span>
          </p>

          <p className="text-xl md:text-2xl font-black text-white">
            We had to stop acting like laborers and <span className="text-[#C9A24D]">start thinking like operators.</span>
          </p>

          <p>
            We realized we didn't need more leads. <span className="text-white font-bold italic">We needed a filter.</span> 
            We didn't need more estimates. <span className="text-white font-bold italic">We needed a gatekeeper.</span>
          </p>

          <p>So, we stopped doing it the "old way." We built the infrastructure to protect our time.</p>

          <p>
            We installed an <span className="text-white font-bold">AI engine</span> that acts as the 
            <span className="text-[#C9A24D] font-bold"> ruthlessly efficient partner</span> we never had. 
            Now, when a lead comes in, we don’t even look at it.
          </p>

          <p>
            The system texts them instantly. It asks the hard questions about budget and timeline. 
            It filters out the <span className="text-white font-bold">"tire kickers"</span> before they ever get a second of our time.
          </p>

          <p>
            It even runs the math for us—generating tiered bids based on our margins without us touching a calculator.
          </p>

          <p>
            If they aren't serious? They don't get a meeting. If they are? 
            <span className="text-[#C9A24D] font-bold"> They get booked directly onto our calendar.</span>
          </p>

          <p>
            Suddenly, the chaos stopped. No more driving for "maybe." No more math in the dark. 
            <span className="text-white font-bold"> No more losing jobs because we were working.</span>
          </p>

          <p>
            We went from $0 to $100k not just because we ran ads, but because we built a 
            <span className="text-white font-bold italic underline"> machine </span> 
            that actually allowed us to handle the volume.
          </p>

          <p>
            We are offering to install this same engine into your business. 
            Not just the ads—<span className="text-[#C9A24D] font-bold">the protection. The sanity.</span>
          </p>

          <div className="bg-[#203159]/30 border border-[#C9A24D]/20 p-6 md:p-8 rounded-2xl md:rounded-3xl mt-12 mb-12">
            <p className="text-xl md:text-2xl font-black text-white mb-4">But here is the catch.</p>
            <p className="text-lg md:text-xl text-[#F5F7FA]/90">
              We only work with <span className="text-[#C9A24D] font-black">one operator per zip code.</span>
            </p>
            <p className="mt-4 text-sm md:text-base text-[#F5F7FA]/60 italic">
              If we help you and your competitor, we just drive up the ad costs for both of you. 
              It doesn't work. We refuse to compete against our own systems.
            </p>
          </div>

          <p>
            If you are tired of being a chauffeur and ready to run a real business, 
            <span className="text-white font-bold"> check the calendar above.</span> 
            If there is a slot open, it means your territory is currently available.
          </p>

          <p className="text-2xl md:text-3xl font-black text-white tracking-tighter">
            Let’s get you <span className="text-[#C9A24D]">off the truck</span> and <span className="text-[#C9A24D]">into the bank.</span>
          </p>
        </div>

        {/* CTA Button Section - Outside the bordered div to ensure perfect centering and full width on mobile */}
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
