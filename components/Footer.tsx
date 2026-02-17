
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-8 md:py-12 px-6 mt-12 md:mt-20 border-t border-white/5 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center space-y-4">
          <div className="text-[10px] md:text-xs text-[#F5F7FA]/40 font-medium tracking-tight uppercase tracking-[0.1em]">
            © Copyright Blue Collar Growth Systems {currentYear} | All Rights Reserved
          </div>
          <div className="h-0.5 w-16 md:w-24 bg-gradient-to-r from-transparent via-[#C9A24D]/30 to-transparent"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
