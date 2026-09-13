import React from 'react';
import { Cpu, Bot, Sparkles, Globe, CheckCircle2 } from 'lucide-react';
import { Container } from './common/Container';
import { SectionHeading } from './common/SectionHeading';
import { EventCard } from './EventCard';
import { FaqSection } from './FaqSection';
import { eventData } from '../config/eventData';

export const EventSection: React.FC = () => {
  const getTrackIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu': return Cpu;
      case 'Bot': return Bot;
      case 'Sparkles': return Sparkles;
      case 'Globe': return Globe;
      default: return Cpu;
    }
  };

  return (
    <section id="event" className="section-padding" style={{ position: 'relative' }}>
      <Container>
        {/* Section Heading */}
        <SectionHeading
          badge="HACKATHON OVERVIEW"
          title="The Event"
          subtitle="Syntax Verse is designed to push boundary constraints and test technical execution under real-world pressure."
        />

        {/* Info Cards Grid */}
        <div style={{ marginBottom: '4rem' }}>
          <EventCard />
        </div>

        {/* Detailed Event Description Banner — Frosted White Glass Container */}
        <div
          className="glass-card"
          style={{
            padding: '2.5rem',
            marginBottom: '4rem',
            background: 'rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.16)'
          }}
        >
          <div style={{ maxWidth: '840px', margin: '0 auto', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '1rem', color: '#ffffff', letterSpacing: '-0.02em' }}>
              Built for Developers, Architects, & Creators
            </h3>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.8 }}>
              {eventData.fullDescription}
            </p>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '2rem',
                flexWrap: 'wrap',
                marginTop: '2rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.12)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ffffff' }}>
                <CheckCircle2 style={{ width: '18px', height: '18px' }} />
                <span style={{ fontSize: '0.9rem', color: '#ffffff', fontWeight: 600 }}>Original Track Problems</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ffffff' }}>
                <CheckCircle2 style={{ width: '18px', height: '18px' }} />
                <span style={{ fontSize: '0.9rem', color: '#ffffff', fontWeight: 600 }}>Technical Mentorship</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ffffff' }}>
                <CheckCircle2 style={{ width: '18px', height: '18px' }} />
                <span style={{ fontSize: '0.9rem', color: '#ffffff', fontWeight: 600 }}>Peer Collaboration</span>
              </div>
            </div>
          </div>
        </div>

        {/* Focus Tracks Grid */}
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="badge badge-glass" style={{ marginBottom: '0.5rem' }}>BUILDING DOMAINS</span>
            <h3 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#ffffff' }}>
              Focus Tracks
            </h3>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.5rem'
            }}
          >
            {eventData.tracks.map((track, idx) => {
              const IconComp = getTrackIcon(track.iconName);
              return (
                <div
                  key={idx}
                  className="glass-card"
                  style={{
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    background: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.14)'
                  }}
                >
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff'
                    }}
                  >
                    <IconComp style={{ width: '24px', height: '24px' }} />
                  </div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff' }}>
                    {track.title}
                  </h4>
                  <p style={{ fontSize: '0.925rem', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.6 }}>
                    {track.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>

      {/* Redesigned 3-Row Rolling Horizontal FAQ Section */}
      <FaqSection />
    </section>
  );
};
