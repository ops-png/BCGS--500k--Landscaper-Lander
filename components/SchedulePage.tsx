
import React, { useState, useEffect, useRef } from 'react';
import { Logo } from '../constants';

const TOTAL_SECONDS = 5 * 60;

const SchedulePage: React.FC = () => {
  const [secondsLeft, setSecondsLeft] = useState(TOTAL_SECONDS);
  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (secondsLeft <= 0) return;
    const id = setInterval(() => {
      setSecondsLeft(s => s - 1);
    }, 1000);
    return () => clearInterval(id);
  }, [secondsLeft]);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const timeDisplay = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  const expired = secondsLeft <= 0;

  const scrollToCalendar = () => {
    calendarRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const callItems = [
    {
      title: 'The Math',
      desc: "We'll calculate exactly how much ad spend you need to hit your revenue goal this season.",
    },
    {
      title: 'The System',
      desc: "We'll show you the backend of the Landscaper Growth System that scaled our business past six figures in 4 months.",
    },
    {
      title: 'The Territory Lock',
      desc: "We'll check your zip code live. If it's open and we're a fit, we'll lock your territory on the call and start bringing you leads within 48 hours.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#171E26] text-[#F5F7FA] selection:bg-[#C9A24D] selection:text-[#1F2933] overflow-x-hidden relative">
      {/* Texture Overlays */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none opacity-[0.05]"></div>
      <div className="fixed inset-0 bg-noise pointer-events-none"></div>

      <div className="relative z-20">

        {/* ── HERO / TIMER SECTION ── */}
        <section className="px-5 pt-6 pb-10 md:pt-10 md:pb-16 max-w-3xl mx-auto text-center">

          {/* Logo */}
          <div className="flex justify-center mb-4 md:mb-6">
            <div className="transform scale-75 md:scale-90 origin-center">
              <Logo />
            </div>
          </div>

          {/* Gold divider */}
          <div className="flex justify-center mb-6 md:mb-8">
            <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-[#C9A24D]/60 to-transparent"></div>
          </div>

          {/* Reserved badge */}
          <div className="inline-flex items-center gap-2 border border-[#C9A24D]/60 rounded-full px-4 py-2 mb-6 md:mb-8">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9A24D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span className="text-[#C9A24D] text-[10px] md:text-xs font-black tracking-[0.25em] uppercase italic">
              Your Territory Is Reserved
            </span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl md:text-7xl font-black tracking-tight uppercase leading-none text-white mb-2 md:mb-3">
            Your Area Is
          </h1>
          <h1 className="text-4xl md:text-7xl font-black tracking-tight uppercase leading-none text-white mb-4 md:mb-6">
            On Hold
          </h1>

          {/* Gold subheadline */}
          <h2 className="text-lg md:text-2xl font-black tracking-[0.3em] uppercase text-[#C9A24D] mb-8 md:mb-10">
            Exclusively For You
          </h2>

          {/* Holding text */}
          <p className="text-[10px] md:text-xs font-black tracking-[0.2em] uppercase text-[#F5F7FA]/50 mb-4">
            We're holding your spot for the next
          </p>

          {/* Countdown timer */}
          <div className={`inline-flex items-center gap-3 md:gap-4 px-6 md:px-10 py-4 md:py-5 rounded-xl md:rounded-2xl mb-5 md:mb-6 ${expired ? 'bg-[#3B0D0D]' : 'bg-[#2A0A0A]'} border ${expired ? 'border-red-800/60' : 'border-red-900/40'}`}>
            {/* Clock icon */}
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={expired ? '#ef4444' : '#dc2626'} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span className={`font-black text-4xl md:text-6xl tabular-nums tracking-tight ${expired ? 'text-red-400' : 'text-red-500'}`}>
              {expired ? '00:00' : timeDisplay}
            </span>
          </div>

          {/* Timer expiry warning */}
          <p className="text-[#F5F7FA]/50 text-xs md:text-sm max-w-sm mx-auto mb-8 md:mb-10 leading-relaxed">
            {expired
              ? 'Your hold has expired. Your territory may have been released to another landscaper.'
              : 'After the timer expires, your territory will be released to the next qualified landscaper.'}
          </p>

          {/* Gold divider */}
          <div className="flex justify-center mb-8 md:mb-10">
            <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-[#C9A24D]/40 to-transparent"></div>
          </div>

          {/* Schedule CTA headline */}
          <h2 className="text-xl md:text-3xl font-black leading-tight tracking-tight text-white mb-4 md:mb-5">
            Schedule Your{' '}
            <span className="text-[#C9A24D]">Growth Strategy Session</span>{' '}
            Below To Claim Your Territory.
          </h2>

          {/* Phone line */}
          <p className="text-[#F5F7FA]/50 text-xs md:text-sm mb-6 md:mb-8">
            Don't see a time that works?{' '}
            <span className="text-[#F5F7FA] font-bold">Text 920-932-5785</span>{' '}
            and we'll get you scheduled.
          </p>

          {/* Pick a time CTA button */}
          <button
            onClick={scrollToCalendar}
            className="inline-flex items-center gap-3 border-2 border-[#C9A24D] rounded-xl px-8 md:px-12 py-4 md:py-5 text-[#C9A24D] font-black text-sm md:text-base tracking-[0.2em] uppercase italic hover:bg-[#C9A24D]/10 transition-all duration-300"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
            Pick A Time Below
          </button>
        </section>

        {/* ── CALENDAR EMBED ── */}
        <section ref={calendarRef} className="px-5 pb-10 md:pb-16 max-w-3xl mx-auto">
          <div className="glass-card rounded-xl md:rounded-2xl border border-[#C9A24D]/20 min-h-[400px] md:min-h-[500px] flex items-center justify-center">
            <p className="text-[#F5F7FA]/30 text-sm tracking-widest uppercase font-bold">
              Calendar Coming Soon
            </p>
          </div>
        </section>

        {/* ── WHAT HAPPENS ON THIS CALL ── */}
        <section className="px-5 pb-14 md:pb-20 max-w-3xl mx-auto">

          {/* Section header */}
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-2xl md:text-4xl font-black tracking-tight uppercase text-white">
              What Happens On{' '}
              <span className="text-[#C9A24D]">This Call:</span>
            </h2>
            <div className="h-1 w-10 md:w-14 bg-[#C9A24D] mx-auto mt-3 md:mt-4 rounded-full"></div>
          </div>

          {/* Cards */}
          <div className="flex flex-col gap-4 md:gap-5 mb-8 md:mb-10">
            {callItems.map((item, idx) => (
              <div key={idx} className="glass-card rounded-xl md:rounded-2xl p-5 md:p-7 border border-[#C9A24D]/15 flex items-start gap-4 md:gap-5">
                {/* Checkmark */}
                <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-[#C9A24D]/10 border border-[#C9A24D]/30 rounded-lg flex items-center justify-center mt-0.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9A24D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-black text-base md:text-lg tracking-tight mb-1 md:mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#F5F7FA]/60 text-xs md:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Book CTA button */}
          <div className="text-center mb-6 md:mb-7">
            <button
              onClick={scrollToCalendar}
              className="inline-flex items-center gap-3 bg-[#203159] border-2 border-[#C9A24D]/60 hover:border-[#C9A24D] rounded-xl px-8 md:px-12 py-4 md:py-5 text-white font-black text-sm md:text-base tracking-[0.1em] uppercase hover:bg-[#203159]/80 transition-all duration-300 shadow-lg"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9A24D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              Book My Free Consultation
            </button>
          </div>

          {/* Trust indicators */}
          <div className="flex items-center justify-center gap-4 md:gap-8 flex-wrap">
            {['45 Minutes', '100% Free', 'No Obligation'].map((label) => (
              <div key={label} className="flex items-center gap-2">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#C9A24D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span className="text-[#F5F7FA]/60 text-[10px] md:text-xs font-black tracking-[0.15em] uppercase">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="pb-8 text-center">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#C9A24D]/20 to-transparent mb-6"></div>
          <p className="text-[#F5F7FA]/30 text-[10px] tracking-widest uppercase">
            © Copyright Blue Collar Growth Systems {new Date().getFullYear()} | All Rights Reserved
          </p>
        </footer>

      </div>
    </div>
  );
};

export default SchedulePage;
