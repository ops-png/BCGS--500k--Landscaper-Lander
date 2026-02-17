
import React from 'react';

export const COLORS = {
  background: '#1F2933', // Charcoal Graphite
  offWhite: '#F5F7FA',
  accent: '#C9A24D',    // Muted Gold
  primary: '#203159',   // Industrial Navy
};

export const Logo = () => (
  <div className="flex flex-col items-center justify-center">
    <img 
      src="https://i.postimg.cc/Ghy9bjfk/BCGS-Logo-removebg-preview.png" 
      alt="Blue Collar Grow Systems Logo" 
      className="h-24 md:h-36 w-auto object-contain drop-shadow-2xl"
    />
  </div>
);

export const GoldLeafIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={COLORS.accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 1 8a7 7 0 0 1-9 10Z"/>
    <path d="M9 21c-5-4-6-13 0-17"/>
  </svg>
);
