
import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const PainPointsSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "Is there really a guarantee?",
      answer: "Yes. If we don't generate at least 90 qualified job requests for your landscaping business within the first 90 days, you get a full refund. No questions asked. We only win when you win."
    },
    {
      question: "Is there really no risk for me?",
      answer: "Zero risk. Our guarantee means if we don't deliver 90 qualified leads in 90 days, you pay nothing. You're only investing after we've proven the system works for your specific market."
    },
    {
      question: "Is this a sales call?",
      answer: "No. This is a qualification call to see if your area is available and if this system is a good fit for your business. We only work with one landscaping company per area, so we need to make sure we're both aligned before moving forward."
    },
    {
      question: "How do I know this will work for me?",
      answer: "This system was built by landscapers who scaled to $100K+ using these exact methods. We've proven it works in multiple markets. On the call, we'll show you the untapped opportunity in YOUR specific service area."
    },
    {
      question: "What if someone already has my area?",
      answer: "We only work with one company per service area to protect your investment. If your area is already claimed, we'll let you know immediately. That's why it's important to book your call now before someone else does."
    },
    {
      question: "How much time will this take me?",
      answer: "The system is designed to run for you, not by you. After initial setup, you'll spend less time chasing leads and more time running jobs. The goal is to fill your calendar with qualified opportunities without you being glued to your phone."
    },
    {
      question: "What makes this different from other marketing?",
      answer: "Built by landscapers for landscapers. Not some agency that's never held a shovel. We know the industry, the margins, and exactly what kind of leads actually turn into profitable jobs. Plus, our guarantee means we only get paid when you get results."
    }
  ];

  const scrollToBooking = () => {
    document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 px-5 md:px-6 bg-transparent relative">
      <div className="max-w-3xl mx-auto glass-card p-6 md:p-12 rounded-[2rem] md:rounded-[3rem] border-[#C9A24D]/10">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-5xl font-black mb-3 md:mb-4 tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm md:text-base text-[#F5F7FA]/60">
            Everything you need to know about our guarantee and process
          </p>
        </div>

        <div className="space-y-3 md:space-y-4 mb-12 md:mb-16">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-[#203159]/50 rounded-xl md:rounded-2xl overflow-hidden bg-[#203159]/10 hover:border-[#C9A24D]/30 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full px-5 md:px-6 py-4 md:py-5 flex items-center justify-between gap-4 text-left group"
              >
                <span className="text-base md:text-lg font-bold text-[#F5F7FA] group-hover:text-[#C9A24D] transition-colors">
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 w-6 h-6 md:w-7 md:h-7 rounded-full bg-[#C9A24D]/20 flex items-center justify-center transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}>
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5 text-[#C9A24D]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-5 md:px-6 pb-4 md:pb-5 pt-0">
                  <div className="pt-2 border-t border-[#C9A24D]/10">
                    <p className="text-sm md:text-base text-[#F5F7FA]/70 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
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
              <span>Check If Your Area Is Still Available</span>
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
