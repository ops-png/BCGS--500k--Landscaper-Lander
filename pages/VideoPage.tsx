
import React from 'react';
import Hero from '../components/Hero';
import ProcessSection from '../components/ProcessSection';
import ProofSection from '../components/ProofSection';
import LetterSection from '../components/LetterSection';
import PainPointsSection from '../components/PainPointsSection';
import BookingSection from '../components/BookingSection';
import ScarcitySection from '../components/ScarcitySection';
import TextProofSlideshow from '../components/TextProofSlideshow';

const VideoPage: React.FC = () => {
  return (
    <main>
      <Hero />
      <BookingSection />
      <ProofSection />
      <TextProofSlideshow />
      <LetterSection />
      <ProcessSection />
      <ScarcitySection />
      <PainPointsSection />
    </main>
  );
};

export default VideoPage;
