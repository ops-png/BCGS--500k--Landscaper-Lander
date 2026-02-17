
import React, { useState } from 'react';

const PainPointsSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is there really a guarantee? What's the catch?",
      answer: "Yes. If we don't deliver 90 qualified quote requests in 90 days, you don't pay. Period. No catch, no fine print. We only win when you win — that's how confident we are in this system."
    },
    {
      question: "What happens on the strategy call? Is this just a sales pitch?",
      answer: "Not at all. This is a real strategy session where we'll review your current area, show you exactly how the system works, and map out what 90+ landscape refresh leads would mean for your business. Zero pressure — if it's not a fit, no hard feelings."
    },
    {
      question: "How do I know this will work for MY business and area?",
      answer: "Every market is different, which is why we customize the system for your specific service area. On the call, we'll analyze your local market, competition, and demand to confirm this is a fit before moving forward. If we don't think we can hit the guarantee, we won't take you on."
    },
    {
      question: "How much time will this take me to manage?",
      answer: "Almost none. We handle the marketing, lead generation, and filtering. You get quote requests sent directly to you with photos — you review them, quote the ones you want, and book the jobs. That's it."
    },
    {
      question: "Why do you only work with one company per area?",
      answer: "We don't want our clients competing against each other. By keeping it exclusive (one landscaper per service area), you get ALL the qualified leads in your market — not just leftovers. First come, first served."
    },
    {
      question: "What if I'm already at capacity or too busy?",
      answer: "Perfect. That means you can be selective. This system brings you high-margin, recurring landscape refresh work — so you can replace lower-paying jobs with better ones. You control how many leads you take and which jobs you quote."
    },
    {
      question: "I've tried marketing before and it didn't work. Why is this different?",
      answer: "Most landscapers market the same stuff everyone else does (lawn care, cleanups, etc.). This targets a hidden market almost no one is advertising for — landscape refreshes. Higher margins, less competition, and customers who actually want to spend money. Plus, the guarantee means there's zero risk to find out."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const scrollToBooking = () => {
    document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 md:py-24 px-5 md:px-6 bg-transparent relative">
      <div className="max-w-3xl mx-auto glass-card p-6 md:p-12 rounded-[2rem] md:rounded-[3rem] border-red-500/10">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-8 md:mb-12 tracking-tight leading-tight uppercase">
          FREQUENTLY ASKED QUESTIONS
        </h2>

        <div className="space-y-4 md:space-y-5 mb-12 md:mb-16">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-[#C9A24D]/20 rounded-xl overflow-hidden transition-all hover:border-[#C9A24D]/40"
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full text-left px-5 md:px-6 py-4 md:py-5 bg-[#203159]/20 hover:bg-[#203159]/30 transition-all flex items-center justify-between gap-4"
              >
                <span className="text-base md:text-lg font-bold text-[#F5F7FA] pr-4">
                  {idx + 1}. {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 md:w-6 md:h-6 flex-shrink-0 text-[#C9A24D] transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${openIndex === idx ? 'max-h-96' : 'max-h-0'}`}
              >
                <div className="px-5 md:px-6 py-4 md:py-5 bg-[#171E26]/40">
                  <p className="text-sm md:text-base text-[#F5F7FA]/80 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-6 md:pt-8 border-t border-white/5">
          
          <button 
            onClick={scrollToBooking}
            className="w-full md:w-auto group relative bg-[#203159] hover:bg-[#203159]/80 text-[#F5F7FA] px-5 md:px-8 py-4 rounded-xl font-black text-base md:text-lg flex items-center justify-center gap-3 transition-all active:scale-95 gold-glow border-b-4 border-[#C9A24D] mx-auto"
          >
            <span className="bg-[#C9A24D] rounded p-0.5 group-hover:rotate-12 transition-transform hidden md:block">
              <svg className="w-3.5 h-3.5 text-[#1F2933] fill-current" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            <span className="flex flex-col items-center leading-tight">
              <span>Check If Your Area Is Available</span>
            </span>
          </button>
          <div className="mt-6 flex flex-wrap justify-center gap-x-4 gap-y-2 text-[10px] md:text-xs font-bold text-[#F5F7FA]/40 uppercase tracking-widest">
            <span className="flex items-center gap-1">✓ 100% FREE</span>
            <span className="flex items-center gap-1">✓ NO OBLIGATION</span>
            <span className="flex items-center gap-1">✓ ONLY 1 COMPANY PER AREA</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
