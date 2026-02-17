
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProcessSection from './components/ProcessSection';
import ProofSection from './components/ProofSection';
import PainPointsSection from './components/PainPointsSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#1F2933] text-[#F5F7FA] selection:bg-[#C9A24D] selection:text-[#1F2933] overflow-x-hidden relative">
      {/* Texture Overlays */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none opacity-[0.08]"></div>
      <div className="fixed inset-0 bg-noise pointer-events-none"></div>
      
      {/* Decorative Gradients */}
      <div className="fixed -top-40 -left-40 w-full h-[600px] bg-[#203159] rounded-full mix-blend-screen filter blur-[180px] opacity-[0.15] pointer-events-none"></div>
      <div className="fixed -bottom-40 -right-40 w-full h-[600px] bg-[#C9A24D] rounded-full mix-blend-screen filter blur-[200px] opacity-[0.08] pointer-events-none"></div>

      {/* Main Content */}
      <div className="relative z-20">
        <Header />
        <main>
          <Hero />
          <ProcessSection />
          <ProofSection />
          <PainPointsSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
