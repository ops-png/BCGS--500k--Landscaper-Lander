
import React, { useState, useEffect, useRef } from 'react';

const notifications = [
  { name: 'Mike', company: 'GreenScape Pro', location: 'Tampa, FL', action: 'just booked a call', time: '2 min ago' },
  { name: 'Jason', company: 'Elite Lawn Care', location: 'Austin, TX', action: 'just locked his territory', time: '4 min ago' },
  { name: 'David', company: 'Premier Landscapes', location: 'Phoenix, AZ', action: 'just scheduled his session', time: '1 min ago' },
];

const ScheduleGrowthConsultation: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(300);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationIndex] = useState(() => Math.floor(Math.random() * 3));
  const [iframeHeight, setIframeHeight] = useState(1600);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const scrollToCalendar = () => {
    document.getElementById('calendar-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Countdown timer
  useEffect(() => {
    if (timeLeft <= 0) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => Math.max(0, prev - 1));
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  // Auto-resize iframe to fit GHL calendar content (no internal scrolling)
  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (typeof e.data === 'object' && e.data !== null) {
        const height = e.data.height || e.data.scrollHeight || (e.data.type === 'resize' && e.data.payload?.height);
        if (typeof height === 'number' && height > 200) {
          setIframeHeight(height + 40);
        }
      }
      if (typeof e.data === 'string') {
        try {
          const parsed = JSON.parse(e.data);
          const h = parsed.height || parsed.scrollHeight;
          if (typeof h === 'number' && h > 200) {
            setIframeHeight(h + 40);
          }
        } catch { /* not JSON */ }
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  // Social proof notification — show 1 random after ~4s, hide after 8s
  useEffect(() => {
    const showTimer = setTimeout(() => setShowNotification(true), 4000);
    const hideTimer = setTimeout(() => setShowNotification(false), 12000);
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  const mins = Math.floor(timeLeft / 60);
  const secs = timeLeft % 60;
  const timerDisplay = `${mins}:${secs.toString().padStart(2, '0')}`;
  const notification = notifications[notificationIndex];

  return (
    <main>
      {/* Hero Section */}
      <section className="px-6 pt-6 md:pt-12 pb-6 md:pb-10 max-w-5xl mx-auto text-center">
        {/* Decorative Top Line */}
        <div className="flex justify-center mb-5 md:mb-8">
          <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent via-[#C9A24D]/40 to-transparent"></div>
        </div>

        <div className="inline-flex items-center gap-2 px-4 md:px-6 py-1.5 md:py-2 border-2 border-[#C9A24D] md:skew-x-[-10deg] mb-5 md:mb-6">
          <span className="text-[#C9A24D] text-lg md:text-2xl leading-none">&#10003;</span>
          <span className="text-sm sm:text-xl md:text-2xl font-black text-[#C9A24D] tracking-wide whitespace-nowrap">YOUR TERRITORY IS RESERVED</span>
        </div>

        <h1 className="text-xl sm:text-2xl md:text-5xl font-black leading-[1.15] mb-4 md:mb-6 tracking-tight text-white uppercase">
          YOUR AREA IS ON HOLD<br/>
          <span className="text-[#C9A24D]">EXCLUSIVELY FOR YOU</span>
        </h1>

        {/* Countdown Timer */}
        <div className="mb-5 md:mb-7">
          <p className="text-xs md:text-base text-[#F5F7FA]/50 font-semibold uppercase tracking-wider mb-2">
            We're holding your spot for the next
          </p>
          <div className="inline-flex items-center gap-2 md:gap-3 bg-red-600/15 border border-red-500/30 rounded-xl px-5 py-2.5 md:px-8 md:py-3">
            <svg className="w-4 h-4 md:w-5 md:h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z" />
            </svg>
            <span className="text-2xl md:text-4xl font-black text-red-500 tabular-nums tracking-wider">
              {timerDisplay}
            </span>
          </div>
        </div>

        <p className="text-[13px] md:text-lg text-[#F5F7FA]/60 max-w-xs md:max-w-2xl mx-auto mb-5 md:mb-6 font-light leading-relaxed">
          After the timer expires, your territory will be released<br className="md:hidden"/> to the next qualified landscaper.
        </p>

        <p className="text-base md:text-2xl text-white max-w-sm md:max-w-2xl mx-auto mb-5 md:mb-6 font-black leading-snug">
          Schedule Your <span className="text-[#C9A24D]">Growth Strategy Session</span> Below To Claim Your Territory.
        </p>

        <p className="text-xs md:text-sm text-[#F5F7FA]/40 max-w-xs md:max-w-xl mx-auto leading-relaxed">
          <span className="italic">Don't see a time that works?</span><br className="md:hidden"/>
          <span className="md:ml-1"> Text <a href="sms:9209325785" className="text-[#C9A24D] font-semibold underline not-italic">920-932-5785</a> and we'll get you scheduled.</span>
        </p>
      </section>

      {/* Calendar Section */}
      <section id="calendar-section" className="pt-2 pb-10 md:pt-8 md:pb-16 px-5 max-w-5xl mx-auto">
        {/* Calendar Header */}
        <div className="flex flex-col items-center mb-6 md:mb-10 text-center">
          <span className="text-lg md:text-2xl font-black text-[#C9A24D] px-4 py-1 border-2 border-[#C9A24D] md:skew-x-[-10deg]">
            PICK A TIME BELOW
          </span>
        </div>

        {/* Calendar Embed */}
        <div className="max-w-2xl mx-auto">
          <div className="relative glass-card rounded-2xl md:rounded-3xl p-1 border-[#203159]/50 shadow-2xl overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C9A24D]/30 to-transparent"></div>
            <div className="w-full bg-[#111827]/40 rounded-[1.2rem] md:rounded-[1.4rem]">
              <iframe
                ref={iframeRef}
                src="https://api.leadconnectorhq.com/widget/booking/Pwx9Nz1N52jtLmRV7uJs"
                style={{ width: '100%', border: 'none', height: `${iframeHeight}px`, transition: 'height 0.3s ease' }}
                scrolling="no"
                id="Pwx9Nz1N52jtLmRV7uJs_1770831418310"
                title="Schedule Growth Consultation"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens On This Call Section */}
      <section className="py-12 md:py-24 px-6 md:px-6 relative overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(201,162,77,0.03)_0%,transparent_70%)] pointer-events-none"></div>

        <div className="max-w-3xl mx-auto relative">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight leading-tight text-white uppercase">
              What Happens On{' '}
              <span className="text-[#C9A24D]">This Call:</span>
            </h2>
          </div>

          {/* Benefit Cards */}
          <div className="space-y-4 md:space-y-8">
            {/* The Math */}
            <div className="glass-card rounded-2xl md:rounded-3xl p-5 md:p-8 border-[#C9A24D]/10 group hover:border-[#C9A24D]/30 transition-colors">
              <h3 className="text-lg md:text-2xl font-black text-[#C9A24D] mb-2 md:mb-3 flex items-center gap-2">
                <span className="text-green-400 text-base md:text-lg">&#10003;</span> The Math
              </h3>
              <p className="text-sm md:text-lg text-[#F5F7FA]/80 leading-relaxed">
                We'll calculate exactly how much ad spend you need to hit your revenue goal this season.
              </p>
            </div>

            {/* The System */}
            <div className="glass-card rounded-2xl md:rounded-3xl p-5 md:p-8 border-[#C9A24D]/10 group hover:border-[#C9A24D]/30 transition-colors">
              <h3 className="text-lg md:text-2xl font-black text-[#C9A24D] mb-2 md:mb-3 flex items-center gap-2">
                <span className="text-green-400 text-base md:text-lg">&#10003;</span> The System
              </h3>
              <p className="text-sm md:text-lg text-[#F5F7FA]/80 leading-relaxed">
                We'll show you the backend of the "Landscaper Growth System" that scaled our business past six figures in 4 months.
              </p>
            </div>

            {/* The Territory Lock */}
            <div className="glass-card rounded-2xl md:rounded-3xl p-5 md:p-8 border-[#C9A24D]/10 group hover:border-[#C9A24D]/30 transition-colors">
              <h3 className="text-lg md:text-2xl font-black text-[#C9A24D] mb-2 md:mb-3 flex items-center gap-2">
                <span className="text-green-400 text-base md:text-lg">&#10003;</span> The Territory Lock
              </h3>
              <p className="text-sm md:text-lg text-[#F5F7FA]/80 leading-relaxed">
                We'll check your zip code live. If it's open and we're a fit, we'll lock your territory on the call and start bringing you leads within 48 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-10 md:py-20 px-6 md:px-6 text-center max-w-4xl mx-auto">
        <button
          onClick={scrollToCalendar}
          className="w-full md:w-auto group relative bg-[#203159] hover:bg-[#203159]/80 text-[#F5F7FA] px-6 md:px-10 py-4 md:py-4.5 rounded-xl md:rounded-2xl font-black text-base md:text-xl flex items-center justify-center gap-3 md:gap-4 transition-all active:scale-95 shadow-2xl mx-auto gold-glow border-b-4 border-[#C9A24D]"
        >
          <svg className="w-4 h-4 md:w-5 md:h-5 text-[#C9A24D] fill-current" viewBox="0 0 24 24">
            <path d="M19 4h-1V2h-2v2H8V2H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H5V10h14v10Zm0-12H5V6h14v2Z" />
          </svg>
          Book My Free Consultation
        </button>
        <div className="mt-6 flex flex-wrap justify-center gap-x-4 gap-y-1 text-[10px] md:text-sm font-bold text-[#F5F7FA]/40 uppercase tracking-widest">
          <span className="flex items-center gap-1">✓ 45 MINUTES</span>
          <span className="flex items-center gap-1">✓ 100% FREE</span>
          <span className="flex items-center gap-1">✓ NO OBLIGATION</span>
        </div>
      </section>

      {/* Social Proof Notification */}
      <div
        className={`fixed bottom-4 left-4 md:bottom-6 md:left-6 z-50 transition-all duration-700 ease-in-out ${
          showNotification ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <div className="bg-[#111827] border border-[#C9A24D]/20 rounded-xl px-4 py-3 md:px-5 md:py-4 shadow-2xl max-w-[300px] md:max-w-sm">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-8 h-8 md:w-9 md:h-9 rounded-full bg-green-500/20 flex items-center justify-center mt-0.5">
              <svg className="w-4 h-4 md:w-5 md:h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="min-w-0">
              <p className="text-xs md:text-sm text-white font-semibold leading-snug">
                {notification.name} from {notification.company} ({notification.location}) {notification.action}
              </p>
              <p className="text-[10px] md:text-xs text-[#F5F7FA]/40 mt-1 font-medium">
                {notification.time}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ScheduleGrowthConsultation;
