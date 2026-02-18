
import React from 'react';
import { Logo } from '../constants';

const checkmarks = [
  'How the Facebook filter system works for landscape businesses',
  'The exact build-and-release process (what happens in each 30-day phase)',
  'Pricing structure and ROI expectations for your market',
  'Whether this is a fit for your business and territory',
];

const nextSteps = [
  'Check your email – you\'ll get a confirmation with your call time and Google Meet link',
  'Add the call to your calendar (link in your email)',
  'Come prepared to discuss your current marketing and growth goals',
  'We\'ll determine if the Facebook ads system makes sense for your business',
];

const ConfirmedUpmarketPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#171E26] text-[#F5F7FA] selection:bg-[#C9A24D] selection:text-[#1F2933] overflow-x-hidden relative">
      {/* Texture Overlays */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none opacity-[0.05]"></div>
      <div className="fixed inset-0 bg-noise pointer-events-none"></div>

      <div className="relative z-20">

        {/* ── TOP BANNER ── */}
        <div className="w-full bg-[#203159] border-b border-[#C9A24D]/30 py-3 md:py-4 px-5 text-center">
          <p className="text-white text-xs md:text-sm font-black tracking-[0.25em] md:tracking-[0.35em] uppercase">
            Your Call Is Confirmed!
          </p>
        </div>

        {/* ── HERO SECTION ── */}
        <section className="px-5 pt-8 md:pt-14 pb-10 md:pb-14 max-w-2xl mx-auto text-center">

          {/* Logo */}
          <div className="flex justify-center mb-6 md:mb-8">
            <div className="transform scale-75 md:scale-90 origin-center">
              <Logo />
            </div>
          </div>

          {/* Gold divider */}
          <div className="flex justify-center mb-8 md:mb-10">
            <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-[#C9A24D]/60 to-transparent"></div>
          </div>

          {/* Confirmed badge */}
          <div className="inline-flex items-center gap-2 border border-[#C9A24D]/60 rounded-full px-4 py-2 mb-7 md:mb-9">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9A24D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span className="text-[#C9A24D] text-[10px] md:text-xs font-black tracking-[0.25em] uppercase italic">
              Confirmed &amp; Scheduled
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl md:text-6xl font-black tracking-tight leading-[1.1] text-white mb-5 md:mb-6 uppercase">
            Your System Overview<br />Is Scheduled
          </h1>

          {/* Subheadline */}
          <p className="text-sm md:text-lg text-[#F5F7FA]/60 max-w-xl mx-auto mb-5 md:mb-6 leading-relaxed font-light">
            We'll walk through exactly how the Facebook ads system works for your market and what results you can expect in the first 60 days.
          </p>

          {/* Email/text notice */}
          <p className="text-xs md:text-sm text-[#F5F7FA]/40 font-medium leading-relaxed">
            Check your email and text for your call details and Google Meet link.
          </p>
        </section>

        {/* ── WHAT WE'LL COVER ── */}
        <section className="px-5 pb-12 md:pb-16 max-w-2xl mx-auto">
          <div className="glass-card rounded-xl md:rounded-2xl p-6 md:p-9 border border-[#C9A24D]/20">

            <h2 className="text-lg md:text-2xl font-black tracking-tight text-white mb-6 md:mb-7 uppercase">
              What we'll cover on the call:
            </h2>

            <ul className="space-y-4 md:space-y-5 mb-7 md:mb-8">
              {checkmarks.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 bg-emerald-500/15 border border-emerald-500/40 rounded-full flex items-center justify-center mt-0.5">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-[#F5F7FA] text-sm md:text-base leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-xs md:text-sm text-[#F5F7FA]/50 leading-relaxed border-t border-[#C9A24D]/15 pt-5 md:pt-6">
              This call will save us both time and make sure we're fully aligned before moving forward.
            </p>
          </div>
        </section>

        {/* ── WHAT HAPPENS NEXT ── */}
        <section className="px-5 pb-12 md:pb-16 max-w-2xl mx-auto">

          {/* Section heading */}
          <div className="flex items-center gap-3 mb-6 md:mb-7">
            <span className="text-xl md:text-2xl">📅</span>
            <h2 className="text-lg md:text-2xl font-black tracking-tight text-white uppercase">
              What happens next:
            </h2>
          </div>

          {/* Numbered steps */}
          <div className="glass-card rounded-xl md:rounded-2xl border border-[#C9A24D]/15 overflow-hidden mb-10 md:mb-12">
            {nextSteps.map((step, idx) => (
              <div
                key={idx}
                className={`flex items-start gap-4 md:gap-5 p-5 md:p-7 ${idx < nextSteps.length - 1 ? 'border-b border-[#C9A24D]/10' : ''}`}
              >
                <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 bg-[#203159] border border-[#C9A24D]/30 rounded-lg flex items-center justify-center">
                  <span className="text-[#C9A24D] text-xs md:text-sm font-black">{idx + 1}</span>
                </div>
                <p className="text-[#F5F7FA] text-sm md:text-base leading-relaxed pt-0.5">{step}</p>
              </div>
            ))}
          </div>

          {/* Closing / signature */}
          <div className="text-center space-y-3 mb-10 md:mb-12">
            <p className="text-base md:text-lg text-[#F5F7FA]/80 font-light leading-relaxed">
              See you on the call.
            </p>
            <p className="text-base md:text-lg text-white font-black">
              - Ethan
            </p>
            <p className="text-xs md:text-sm text-[#F5F7FA]/40 max-w-sm mx-auto leading-relaxed italic mt-3">
              P.S. If you need to reschedule, just use the link in your email. No hard feelings.
            </p>
          </div>

          {/* Gold divider */}
          <div className="flex justify-center mb-10 md:mb-12">
            <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-[#C9A24D]/40 to-transparent"></div>
          </div>

          {/* Back to home CTA */}
          <div className="text-center">
            <a
              href="/"
              className="inline-flex items-center gap-2 bg-[#C9A24D] hover:bg-[#b8913e] text-[#171E26] font-black text-sm md:text-base tracking-[0.1em] uppercase px-8 md:px-10 py-4 md:py-4 rounded-xl transition-all duration-300 active:scale-95 shadow-lg"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
              Back to Home
            </a>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="pb-8 text-center px-5">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#C9A24D]/20 to-transparent mb-6"></div>
          <p className="text-[#F5F7FA]/30 text-[10px] tracking-widest uppercase">
            © 2026 Blue Collar Growth Systems (BCGS). All Rights Reserved.
          </p>
        </footer>

      </div>
    </div>
  );
};

export default ConfirmedUpmarketPage;
