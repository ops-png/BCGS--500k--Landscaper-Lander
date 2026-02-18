
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ProcessSection from './components/ProcessSection';
import ProofSection from './components/ProofSection';
import LetterSection from './components/LetterSection';
import PainPointsSection from './components/PainPointsSection';
import BookingSection from './components/BookingSection';
import ScarcitySection from './components/ScarcitySection';
import InfrastructureSection from './components/InfrastructureSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import SchedulePage from './components/SchedulePage';
import ConfirmedUpmarketPage from './components/ConfirmedUpmarketPage';

const LandingPage: React.FC = () => (
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
        <InfrastructureSection />
        <FAQSection />
        <ScarcitySection />
        <PainPointsSection />
      </main>
      <Footer />
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/schedule" element={<SchedulePage />} />
        <Route path="/confirmed" element={<ConfirmedUpmarketPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
