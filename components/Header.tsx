
import React from 'react';
import { Logo, GoldLeafIcon } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="pt-1 md:pt-2 pb-0 flex flex-col items-center">
      <div className="transform scale-75 md:scale-90 origin-center">
        <Logo />
      </div>
    </header>
  );
};

export default Header;