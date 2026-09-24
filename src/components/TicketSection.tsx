import React from 'react';
import { Ticket, ArrowRight, ShieldCheck, Zap, Bell, CheckCircle2 } from 'lucide-react';
import { Container } from './common/Container';
import { SectionHeading } from './common/SectionHeading';
import { eventData } from '../config/eventData';

interface TicketSectionProps {
  onOpenTicketModal: () => void;
}

export const TicketSection: React.FC<TicketSectionProps> = ({ onOpenTicketModal }) => {
  return (
    <section id="tickets" className="section-padding-compact" style={{ position: 'relative' }}>
      <Container style={{ position: 'relative', zIndex: 1 }}>
        <SectionHeading
          badge="PASSES & TICKETS"
          title="Ready to Enter the Verse?"
          subtitle="Register today to secure your access pass, track announcements, and receive early schedule notifications for Syntax Verse."
        />

        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          {/* Main Frosted White Glass Container */}
          <div
            className="glass-card"
            style={{
              padding: 'clamp(2rem, 5vw, 3.5rem)',
              position: 'relative',
              overflow: 'hidden',
              background: 'rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.16)'
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2.5rem',
                alignItems: 'center'
              }}
            >
              {/* Left Column: Ticket Details */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <span className="badge badge-glass">{eventData.registrationStatusLabel}</span>
                  <span className="badge badge-glass-tba">{eventData.dateBadge}</span>
                </div>

                <h3 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.5rem', color: '#ffffff', letterSpacing: '-0.02em' }}>
                  Hackathon Access Pass
                </h3>

                <p style={{ fontSize: '0.95rem', color: 'rgba(255, 255, 255, 0.75)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                  Full participation access to all hackathon tracks, technical workshops, project review sessions, and community networking.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <Zap style={{ width: '16px', height: '16px', color: '#ffffff' }} />
                    <span style={{ fontSize: '0.9rem', color: '#ffffff', fontWeight: 500 }}>Priority schedule & date release notification</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <ShieldCheck style={{ width: '16px', height: '16px', color: '#ffffff' }} />
                    <span style={{ fontSize: '0.9rem', color: '#ffffff', fontWeight: 500 }}>Team formation & mentoring hub access</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <CheckCircle2 style={{ width: '16px', height: '16px', color: '#ffffff' }} />
                    <span style={{ fontSize: '0.9rem', color: '#ffffff', fontWeight: 500 }}>Participation certificate & digital badge</span>
                  </div>
                </div>

                <button
                  onClick={onOpenTicketModal}
                  className="btn btn-primary btn-lg"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <Ticket style={{ width: '20px', height: '20px' }} />
                  <span>Get Tickets</span>
                  <ArrowRight style={{ width: '18px', height: '18px' }} />
                </button>
              </div>

              {/* Right Column: Pricing & Status Box */}
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.14)',
                  borderRadius: '16px',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  gap: '1rem'
                }}
              >
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '14px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff'
                  }}
                >
                  <Bell style={{ width: '26px', height: '26px' }} />
                </div>

                <div>
                  <span className="font-mono" style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.6)', letterSpacing: '0.08em', fontWeight: 600 }}>
                    ADMISSION FEE
                  </span>
                  <div style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff', margin: '0.25rem 0' }}>
                    ₹199
                  </div>
                  <span style={{ fontSize: '0.825rem', color: 'rgba(255, 255, 255, 0.9)', fontWeight: 700 }}>
                    Per Participant
                  </span>
                </div>

                <div
                  style={{
                    width: '100%',
                    paddingTop: '1rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                    fontSize: '0.8rem',
                    color: 'rgba(255, 255, 255, 0.65)',
                    lineHeight: 1.5
                  }}
                >
                  Click "Get Tickets" to view official registration link and QR code access.
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
