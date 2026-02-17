
import React from 'react';
import { Logo, GoldLeafIcon } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="pt-1 md:pt-2 pb-2 md:pb-3 flex flex-col items-center">
      <div className="transform scale-75 md:scale-90 origin-center">
        <Logo />
      </div>
      <div className="mt-1 md:mt-2 px-4 md:px-6 py-2 md:py-3 bg-[#203159] border-y border-[#C9A24D]/30 w-full flex justify-center items-center space-x-2">
        <GoldLeafIcon />
        <span className="text-[10px] md:text-sm font-bold tracking-[0.15em] md:tracking-widest uppercase text-white text-center">
          Built by landscapers, for landscapers
        </span>
        <GoldLeafIcon />
      </div>
    </header>
  );
};

export default Header;