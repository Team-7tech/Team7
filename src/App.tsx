import { useState } from 'react';
import { GlobalBackground } from './components/GlobalBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EventSection } from './components/EventSection';
import { TicketSection } from './components/TicketSection';
import { PreviousEventsSection } from './components/PreviousEventsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { DeveloperCredit } from './components/DeveloperCredit';
import { Footer } from './components/Footer';
import { TicketModal } from './components/TicketModal';

export function App() {
  const [isTicketModalOpen, setIsTicketModalOpen] = useState(false);

  const handleOpenTicketModal = () => setIsTicketModalOpen(true);
  const handleCloseTicketModal = () => setIsTicketModalOpen(false);

  return (
    <div className="app-root" style={{ minHeight: '100vh', position: 'relative' }}>
      {/* Global Monochrome Particle Badge Background Layer */}
      <GlobalBackground />

      {/* Sticky Header Nav */}
      <Navbar onOpenTicketModal={handleOpenTicketModal} />

      {/* Main Page Sections — Strictly composition of page content */}
      <main style={{ position: 'relative', zIndex: 1 }}>
        {/* 1. Hero Section */}
        <Hero onOpenTicketModal={handleOpenTicketModal} />

        {/* 2. Event Section & 3. Focus Tracks Section */}
        <EventSection />

        {/* 4. Ready to Enter the Verse Section & 5. Registration / Get Tickets Section */}
        <TicketSection onOpenTicketModal={handleOpenTicketModal} />

        {/* 6. Previous Events Section */}
        <PreviousEventsSection />

        {/* 7. FAQ Section */}
        <FaqSection />

        {/* 8. Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Fixed Viewport Developer Credit Badge */}
      <DeveloperCredit />

      {/* Simple Get Tickets Access Modal */}
      <TicketModal
        isOpen={isTicketModalOpen}
        onClose={handleCloseTicketModal}
      />
    </div>
  );
}

export default App;
