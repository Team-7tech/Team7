import { useState } from 'react';
import { GlobalBackground } from './components/GlobalBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EventSection } from './components/EventSection';
import { PreviousEventsSection } from './components/PreviousEventsSection';
import { TicketSection } from './components/TicketSection';
import { ContactSection } from './components/ContactSection';
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

      {/* Main Page Sections */}
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero onOpenTicketModal={handleOpenTicketModal} />
        <EventSection />
        <PreviousEventsSection />
        <TicketSection onOpenTicketModal={handleOpenTicketModal} />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Registration Modal */}
      <TicketModal
        isOpen={isTicketModalOpen}
        onClose={handleCloseTicketModal}
      />
    </div>
  );
}

export default App;
