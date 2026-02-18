
import React from 'react';

const BookingSection: React.FC = () => {
  return (
    <section id="booking-section" className="py-8 md:py-16 px-5 max-w-5xl mx-auto">
      {/* Booking Header */}
      <div className="flex flex-col items-center mb-10 md:mb-14 space-y-4 md:space-y-6 text-center">
        <div className="flex flex-col items-center text-white">
          <div className="flex flex-col items-center mb-4 md:mb-6">
            <span className="text-2xl md:text-5xl font-black tracking-tight uppercase leading-none">See if your area</span>
            <span className="text-2xl md:text-5xl font-black tracking-tight uppercase leading-none mt-1">Is still available</span>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-2 max-w-2xl mx-auto">
          <p className="text-xs md:text-base text-white font-black text-center leading-relaxed">
            We only work with one landscaping company per area. <br />
            Fill out the form below to see if you qualify.
          </p>
        </div>
      </div>

      {/* Survey Integration - Smaller and centered to avoid "bulky" look */}
      <div className="max-w-3xl mx-auto">
        <div className="relative glass-card rounded-2xl md:rounded-3xl p-1 border-[#203159]/50 shadow-2xl overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C9A24D]/30 to-transparent"></div>
          <div className="w-full bg-[#111827]/40 rounded-[1.2rem] md:rounded-[1.4rem] min-h-[500px] overflow-hidden">
             <iframe 
              src="https://api.leadconnectorhq.com/widget/form/vmCL2RAqnhJNm1dc6iq1" 
              style={{ width: '100%', border: 'none', minHeight: '600px' }} 
              scrolling="no" 
              id="vmCL2RAqnhJNm1dc6iq1"
              title="form"
             ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
