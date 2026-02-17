
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProcessSection from './components/ProcessSection';
import ProofSection from './components/ProofSection';
import LetterSection from './components/LetterSection';
import PainPointsSection from './components/PainPointsSection';
import BookingSection from './components/BookingSection';
import ScarcitySection from './components/ScarcitySection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#171E26] text-[#F5F7FA] selection:bg-[#C9A24D] selection:text-[#1F2933] overflow-x-hidden relative">
      {/* Texture Overlays */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none opacity-[0.05]"></div>
      <div className="fixed inset-0 bg-noise pointer-events-none"></div>

      {/* Main Content */}
      <div className="relative z-20">
        <Header />
        <main>
          <Hero />
          {/* Booking Section moved directly under VSL */}
          <BookingSection />
          <ProofSection />
          <LetterSection />
          <ProcessSection />
          {/* Scarcity Section pulled up into the back half of the content flow */}
          <ScarcitySection />
          <PainPointsSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
