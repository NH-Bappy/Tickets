import React, { useState } from 'react';
import Ticker from './components/Ticker';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SpeakersSection from './components/SpeakersSection';
import ScheduleSection from './components/ScheduleSection';
import TicketsSection from './components/TicketsSection';
import Footer from './components/Footer';
import TicketModal from './components/TicketModal';
import ScheduleModal from './components/ScheduleModal';
import JamDrawer from './components/JamDrawer';
import ShopModal from './components/ShopModal';

export default function App() {
  const [isTicketOpen, setIsTicketOpen] = useState(false);
  const [isJamOpen, setIsJamOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);

  return (
    <div className="min-h-screen bg-[#18181b] text-white flex flex-col font-fredoka selection:bg-[#FF7640] selection:text-white">
      {/* Top Scrolling Marquee */}
      <Ticker />

      {/* Main Navigation */}
      <Navbar 
        onOpenTickets={() => setIsTicketOpen(true)}
        onOpenJam={() => setIsJamOpen(true)}
        onOpenShop={() => setIsShopOpen(true)}
      />

      {/* Main Page Content */}
      <main className="flex-grow">
        {/* Hero Section: "Pure Imagination" */}
        <HeroSection 
          onOpenTickets={() => setIsTicketOpen(true)} 
        />

        {/* Speakers & Workshops Laboratory Section */}
        <SpeakersSection 
          onBecomeSpeaker={() => setIsTicketOpen(true)} 
        />

        {/* Timeline Schedule Sections (Thursday 30, Friday 31, Saturday 01) */}
        <ScheduleSection 
          onSelectSlot={(slot) => setSelectedSlot(slot)} 
        />

        {/* Bottom Tickets Hero */}
        <TicketsSection 
          onOpenTickets={() => setIsTicketOpen(true)} 
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals & Drawers */}
      <TicketModal 
        isOpen={isTicketOpen} 
        onClose={() => setIsTicketOpen(false)} 
      />

      <ScheduleModal 
        slot={selectedSlot} 
        onClose={() => setSelectedSlot(null)} 
      />

      <JamDrawer 
        isOpen={isJamOpen} 
        onClose={() => setIsJamOpen(false)} 
      />

      <ShopModal 
        isOpen={isShopOpen} 
        onClose={() => setIsShopOpen(false)} 
      />
    </div>
  );
}
