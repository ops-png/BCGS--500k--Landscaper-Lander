
import React from 'react';

const InfrastructureSection: React.FC = () => {
  const items = [
    {
      title: 'Facebook Ad Campaigns',
      desc: 'Built specifically for your market and service vertical. We handle creative, targeting, and optimization. You never touch the ads platform.',
      icon: (
        <svg className="w-5 h-5 text-[#C9A24D]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Lead Filtering System',
      desc: 'Only qualified homeowners with budget reach your phone. Tire kickers get filtered out before they waste your time.',
      icon: (
        <svg className="w-5 h-5 text-[#C9A24D]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 017 21v-7.586L3.293 6.707A1 1 0 013 6V4z" />
        </svg>
      )
    },
    {
      title: 'CRM Integration',
      desc: "Automated follow-up and lead nurturing that works even when you're on a job site. Nothing falls through the cracks.",
      icon: (
        <svg className="w-5 h-5 text-[#C9A24D]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
        </svg>
      )
    },
    {
      title: '60-Day Hands-On Management',
      desc: "We don't just build it and disappear. We manage, optimize, and prove it works before you make any decisions about what happens next.",
      icon: (
        <svg className="w-5 h-5 text-[#C9A24D]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Performance Tracking',
      desc: 'Real-time dashboard showing lead volume, cost per lead, and ROI. Complete transparency on what\'s working.',
      icon: (
        <svg className="w-5 h-5 text-[#C9A24D]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 md:py-24 px-5 md:px-6 relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl md:text-5xl font-black tracking-tight mb-3 md:mb-4 uppercase text-white">
            What You're<br className="md:hidden" /> <span className="text-[#C9A24D]">Actually Getting</span>
          </h2>
          <p className="text-sm md:text-base text-[#F5F7FA]/50 max-w-xl mx-auto mt-3">The Complete Infrastructure</p>
          <div className="h-1 w-10 md:w-16 bg-[#C9A24D] mx-auto rounded-full mt-4"></div>
        </div>

        {/* Top row: 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {items.slice(0, 3).map((item, idx) => (
            <div key={idx} className="glass-card p-5 md:p-7 rounded-xl md:rounded-2xl relative overflow-hidden group hover:gold-border-glow transition-all duration-500">
              <div className="w-9 h-9 md:w-11 md:h-11 bg-[#C9A24D]/10 rounded-lg flex items-center justify-center mb-4 border border-[#C9A24D]/20">
                {item.icon}
              </div>
              <h3 className="text-base md:text-lg font-black uppercase tracking-tight text-white mb-2 leading-tight">
                {item.title}
              </h3>
              <p className="text-[#F5F7FA]/60 text-[10px] md:text-xs leading-relaxed font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom row: 2 cards centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mt-4 md:mt-5 md:max-w-[calc(66.666%+0.625rem)] md:mx-auto lg:max-w-[calc(66.666%+0.833rem)]">
          {items.slice(3).map((item, idx) => (
            <div key={idx} className="glass-card p-5 md:p-7 rounded-xl md:rounded-2xl relative overflow-hidden group hover:gold-border-glow transition-all duration-500">
              <div className="w-9 h-9 md:w-11 md:h-11 bg-[#C9A24D]/10 rounded-lg flex items-center justify-center mb-4 border border-[#C9A24D]/20">
                {item.icon}
              </div>
              <h3 className="text-base md:text-lg font-black uppercase tracking-tight text-white mb-2 leading-tight">
                {item.title}
              </h3>
              <p className="text-[#F5F7FA]/60 text-[10px] md:text-xs leading-relaxed font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfrastructureSection;
