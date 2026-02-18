
import React, { useState } from 'react';

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: 'Do I need to change my current marketing?',
      a: "No. This runs completely separate from your Google ads, referrals, or anything else you're doing. It's purely additive. We're not replacing what works — we're adding another channel."
    },
    {
      q: "What if I'm already running Google ads successfully?",
      a: "Perfect. Keep running them. Facebook gives you a second lead source that isn't competing in the same saturated space. Most of our partners run both."
    },
    {
      q: 'How long until I see results?',
      a: "Most partners see qualified leads within the first 7–10 days of launch. The first 30 days is build and launch, the second 30 days is optimization and scaling."
    },
    {
      q: 'What happens after 60 days?',
      a: "You choose. Either keep us on for ongoing management at a monthly rate, or take the system over completely and run it yourself. No pressure either way."
    },
    {
      q: 'Can I add more service verticals later?',
      a: "Yes. Once the system is proven in one vertical (landscape refresh, lawn care, hardscaping, etc.), we can build out additional verticals. But we always start with one and prove it works first."
    },
    {
      q: "What if this doesn't work in my market?",
      a: "If you don't see at least a 2x return on your ad spend in the first 60 days, we refund your entire build fee. We guarantee the ROI because we've proven this system works."
    }
  ];

  return (
    <section className="py-16 md:py-24 px-5 md:px-6 relative">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl md:text-5xl font-black tracking-tight mb-3 md:mb-4 uppercase text-white">
            Frequently Asked <span className="text-[#C9A24D]">Questions</span>
          </h2>
          <div className="h-1 w-10 md:w-16 bg-[#C9A24D] mx-auto rounded-full mt-4"></div>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="glass-card rounded-xl md:rounded-2xl overflow-hidden border-[#C9A24D]/10">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left gap-4"
              >
                <span className="text-sm md:text-base font-black text-white leading-snug">{faq.q}</span>
                <span
                  className={`flex-shrink-0 w-6 h-6 rounded-full bg-[#C9A24D]/10 border border-[#C9A24D]/20 flex items-center justify-center transition-transform duration-300 ${
                    openIndex === idx ? 'rotate-45' : ''
                  }`}
                >
                  <svg className="w-3 h-3 text-[#C9A24D]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </button>
              {openIndex === idx && (
                <div className="px-5 md:px-6 pb-5 md:pb-6 border-t border-[#C9A24D]/10">
                  <p className="text-sm md:text-base text-[#F5F7FA]/70 leading-relaxed pt-4">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
