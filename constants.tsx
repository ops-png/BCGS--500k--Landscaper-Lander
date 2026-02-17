
import React from 'react';

export const COLORS = {
  background: '#1F2933', // Charcoal Graphite
  offWhite: '#F5F7FA',
  accent: '#C9A24D',    // Muted Gold
  primary: '#203159',   // Industrial Navy
};

export const Logo = () => (
  <div className="flex flex-col items-center justify-center space-y-1">
    <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg">
      <path d="M20 20H45V45H20V20Z" fill={COLORS.primary} stroke={COLORS.accent} strokeWidth="2"/>
      <path d="M55 20H80V45H55V20Z" fill={COLORS.primary} stroke={COLORS.accent} strokeWidth="2"/>
      <path d="M20 55H45V80H20V55Z" fill={COLORS.primary} stroke={COLORS.accent} strokeWidth="2"/>
      <path d="M55 55L80 55L80 80L55 80L55 55Z" stroke={COLORS.accent} strokeWidth="4"/>
      <rect x="62" y="62" width="10" height="10" fill={COLORS.accent}/>
    </svg>
    <span className="text-2xl font-black tracking-tighter text-white">BCGS</span>
  </div>
);

export const GoldLeafIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={COLORS.accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 1 8a7 7 0 0 1-9 10Z"/>
    <path d="M9 21c-5-4-6-13 0-17"/>
  </svg>
);
