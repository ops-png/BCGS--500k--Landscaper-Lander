
import React from 'react';

const ProcessSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Check Your Availability',
      desc: "Complete the 60-second survey below. We only work with one landscaping company per area - we'll confirm whether your market is still open."
    },
    {
      step: '02',
      title: 'Free Growth Consultation',
      desc: "If your area qualifies, you'll book a 45-minute strategy call where we break down exactly how we'd generate leads in your specific market."
    },
    {
      step: '03',
      title: 'We Build Your System',
      desc: "Custom ad campaigns, landing pages, automated follow-up, and a CRM built specifically for your service area - done for you, start to finish."
    },
    {
      step: '04',
      title: 'Launch & Scale',
      desc: "Ads go live, leads start flowing into your pipeline, and you focus on closing jobs - not chasing them."
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
