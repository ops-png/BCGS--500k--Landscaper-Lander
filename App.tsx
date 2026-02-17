
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import VideoPage from './pages/VideoPage';
import ScheduleGrowthConsultation from './pages/ScheduleGrowthConsultation';

const App: React.FC = () => {
  const getPage = () => {
    // Support multiple routing methods for compatibility across environments:
    // 1. Pathname: /schedule-growth-consultation (production w/ Vercel rewrites)
    // 2. Query param: ?page=schedule-growth-consultation (preview environments)
    // 3. Hash: #schedule-growth-consultation (simple servers)
    const pathname = window.location.pathname;
    const searchParams = new URLSearchParams(window.location.search);
    const pageParam = searchParams.get('page');
    const hash = window.location.hash.replace('#', '');

    return pageParam || hash || pathname;
  };

  const page = getPage();

  const renderPage = () => {
    if (page === '/schedule-growth-consultation' || page === 'schedule-growth-consultation') {
      return <ScheduleGrowthConsultation />;
    }
    return <VideoPage />;
  };

  return (
    <div className="min-h-screen bg-[#171E26] text-[#F5F7FA] selection:bg-[#C9A24D] selection:text-[#1F2933] overflow-x-hidden relative">
      {/* Texture Overlays */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none opacity-[0.05]"></div>
      <div className="fixed inset-0 bg-noise pointer-events-none"></div>

      {/* Main Content */}
      <div className="relative z-20">
        <Header />
        {renderPage()}
        <Footer />
      </div>
    </div>
  );
};

export default App;
