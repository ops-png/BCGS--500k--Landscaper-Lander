
import React from 'react';

const ProcessSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Check Your Availability',
      desc: "Complete the 60-second form above. We strictly limit this system to one landscaper per zip code to ensure you have zero competition."
    },
    {
      step: '02',
      title: 'Marketing Strategy Session',
      desc: "If your area is open, we'll hop on a brief call to calculate the math: exactly how much ad spend (fuel) is required to hit your 90-lead target."
    },
    {
      step: '03',
      title: 'We Install The Engine',
      desc: "We build your entire system in 7 days — launching the high-converting ads, the landing pages, and the AI Qualification filter."
    },
    {
      step: '04',
      title: 'You Close The Jobs',
      desc: "Leads start flowing immediately. We filter out the tire kickers, and you receive exclusive job requests ready for an estimate. You get 90 qualified requests in 90 days, guaranteed — or we keep working for free until you do."
    }
  ];

  return (
    <section className="bg-transparent py-10 md:py-20 px-5 md:px-6 relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl md:text-5xl font-black tracking-tight mb-3 md:mb-4 uppercase">
            How It <span className="text-[#C9A24D]">Works</span>
          </h2>
          <div className="h-1 w-10 md:w-16 bg-[#C9A24D] mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {steps.map((item, idx) => (
            <div key={idx} className="glass-card p-5 md:p-7 rounded-xl md:rounded-2xl relative overflow-hidden group hover:gold-border-glow transition-all duration-500 min-h-[180px] md:min-h-[220px]">
              <div className="absolute top-0 right-0 p-2 md:p-3 text-4xl md:text-6xl font-black text-white/5 group-hover:text-[#C9A24D]/10 transition-colors pointer-events-none">
                {item.step}
              </div>
              <div className="relative z-10">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-[#C9A24D]/10 rounded-lg flex items-center justify-center mb-4 md:mb-5 border border-[#C9A24D]/20">
                  <span className="text-[#C9A24D] font-black text-sm md:text-base">{idx + 1}</span>
                </div>
                <h3 className="text-base md:text-lg font-black uppercase tracking-tight text-white mb-2 leading-tight">
                  {item.title}
                </h3>
                <p className="text-[#F5F7FA]/60 text-[10px] md:text-xs leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
