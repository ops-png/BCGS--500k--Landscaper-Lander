
import React from 'react';

const ProcessSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Secure Your Slot',
      desc: "Reserve your time and complete the intake form. We prioritize zip codes that are not currently occupied by active clients."
    },
    {
      step: '02',
      title: 'Receive The Prep-Kit',
      desc: "You'll get a detailed breakdown of our model before the call so we can spend the 15 minutes talking strictly about your numbers."
    },
    {
      step: '03',
      title: 'The Scale Potential Call',
      desc: "A brief, 15-minute high-level assessment of your current infrastructure to see if our growth systems can be integrated into your market."
    },
    {
      step: '04',
      title: 'Launch Deployment',
      desc: "If qualified, we move to a 14-day launch sequence designed to flood your pipeline with qualified landscaping inquiries."
    }
  ];

  return (
    <section className="bg-gradient-to-b from-transparent via-[#203159]/10 to-transparent py-16 md:py-32 px-5 md:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-6xl font-black tracking-tight mb-4 md:mb-6">
            Our <span className="text-[#C9A24D]">Battle-Tested</span> Process
          </h2>
          <div className="h-1 w-12 md:w-20 bg-[#C9A24D] mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {steps.map((item, idx) => (
            <div key={idx} className="glass-card p-6 md:p-10 rounded-2xl md:rounded-3xl relative overflow-hidden group hover:gold-border-glow transition-all duration-500">
              <div className="absolute top-0 right-0 p-2 md:p-4 text-5xl md:text-7xl font-black text-white/5 group-hover:text-[#C9A24D]/10 transition-colors">
                {item.step}
              </div>
              <div className="relative z-10">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#C9A24D]/10 rounded-lg md:rounded-xl flex items-center justify-center mb-6 md:mb-8 border border-[#C9A24D]/20">
                  <span className="text-[#C9A24D] font-black text-base md:text-lg">{idx + 1}</span>
                </div>
                <h3 className="text-lg md:text-xl font-black uppercase tracking-tight text-white mb-3 md:mb-4 leading-tight">
                  {item.title}
                </h3>
                <p className="text-[#F5F7FA]/60 text-xs md:text-sm leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 md:mt-24 flex flex-col items-center">
          <button className="w-full md:w-auto group relative bg-[#203159] hover:bg-[#203159]/80 text-white px-6 md:px-12 py-5 md:py-6 rounded-xl md:rounded-2xl font-black text-lg md:text-xl flex items-center justify-center gap-3 md:gap-4 transition-all active:scale-95 shadow-2xl border-b-4 border-[#C9A24D]">
            <div className="p-1 bg-[#C9A24D] rounded group-hover:rotate-[360deg] transition-transform duration-700 hidden md:block">
              <svg className="w-5 h-5 text-[#1F2933]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            Book My Consultation
          </button>
          <div className="mt-8 flex flex-wrap justify-center gap-4 md:gap-8">
            <div className="flex items-center gap-1.5 md:gap-2 text-[9px] md:text-[10px] font-bold tracking-[0.15em] md:tracking-[0.2em] text-[#F5F7FA]/30 uppercase">
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#C9A24D]/40 rounded-full"></span>
              No Pressure
            </div>
            <div className="flex items-center gap-1.5 md:gap-2 text-[9px] md:text-[10px] font-bold tracking-[0.15em] md:tracking-[0.2em] text-[#F5F7FA]/30 uppercase">
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#C9A24D]/40 rounded-full"></span>
              No Sales Pitch
            </div>
            <div className="flex items-center gap-1.5 md:gap-2 text-[9px] md:text-[10px] font-bold tracking-[0.15em] md:tracking-[0.2em] text-[#F5F7FA]/30 uppercase">
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#C9A24D]/40 rounded-full"></span>
              Just Strategy
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
