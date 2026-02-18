
import React from 'react';

const ProcessSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Check Your Availability',
      desc: "Complete the 60-second form below. We only work with one landscaping company per area. If your territory is open, you'll schedule a system overview call on the next page."
    },
    {
      step: '02',
      title: 'We Build Your System (Days 1–30)',
      desc: "We create your complete Facebook ads infrastructure for one service vertical. Creative, targeting, lead filtering, backend setup. Everything built specifically for your market. You don't touch anything."
    },
    {
      step: '03',
      title: 'We Optimize and Prove It Works (Days 31–60)',
      desc: "We manage the system hands-on, optimize based on your market response, and show you the qualified leads coming in. This is where we dial it in and prove the ROI."
    },
    {
      step: '04',
      title: 'You Choose What Happens Next',
      desc: "After 60 days, you decide. Either keep us on for monthly management, or take the system over completely and run it yourself. No long-term contracts. Your call."
    }
  ];

  return (
    <section className="bg-transparent py-10 md:py-20 px-5 md:px-6 relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl md:text-5xl font-black tracking-tight mb-3 md:mb-4 uppercase">
            How The <span className="text-[#C9A24D]">Build-and-Release</span> System Works
          </h2>
          <p className="text-sm md:text-base text-[#F5F7FA]/50 max-w-xl mx-auto mt-3">The 60-Day Process</p>
          <div className="h-1 w-10 md:w-16 bg-[#C9A24D] mx-auto rounded-full mt-4"></div>
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

        <p className="text-center text-sm md:text-base text-[#F5F7FA]/50 mt-8 md:mt-10 max-w-2xl mx-auto leading-relaxed">
          Want to add more service verticals later? Once the system is proven in one vertical, we can expand into others.
        </p>
      </div>
    </section>
  );
};

export default ProcessSection;
