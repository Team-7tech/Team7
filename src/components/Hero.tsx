import React from 'react';
import { ArrowRight, Ticket, Code2, Calendar } from 'lucide-react';
import { Container } from './common/Container';
import { HeroQuote } from './HeroQuote';
import { eventData } from '../config/eventData';

interface HeroProps {
  onOpenTicketModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTicketModal }) => {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 'calc(var(--header-height) + 3rem)',
        paddingBottom: '4rem',
        overflow: 'hidden'
      }}
    >
      <Container style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            maxWidth: '900px',
            margin: '0 auto'
          }}
        >
          {/* Presenter Label — Monochrome Frosted Glass Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.4rem 1.1rem',
              borderRadius: '9999px',
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.16)',
              marginBottom: '1.75rem',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)'
            }}
          >
            <span className="font-mono" style={{ fontSize: '0.75rem', color: '#ffffff', fontWeight: 700, letterSpacing: '0.12em' }}>
              {eventData.organization.toUpperCase()}
            </span>
            <span style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.6)' }}>PRESENTS</span>
            <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#ffffff' }} />
            <span className="font-mono" style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.9)', fontWeight: 600 }}>
              {eventData.dateBadge}
            </span>
          </div>

          {/* Main Title — Pure Crisp White Monochrome Identity */}
          <h1
            style={{
              fontSize: 'clamp(2.75rem, 8vw, 6.25rem)',
              fontWeight: 900,
              letterSpacing: '-0.04em',
              lineHeight: 1.05,
              marginBottom: '1.5rem',
              textTransform: 'uppercase',
              color: '#ffffff'
            }}
          >
            SYNTAX <span style={{ color: 'rgba(255, 255, 255, 0.82)' }}>VERSE</span>
          </h1>

          {/* Hero Quote Component */}
          <div style={{ marginBottom: '2rem' }}>
            <HeroQuote quote={eventData.quote} />
          </div>

          {/* Supporting Description */}
          <p
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              color: 'rgba(255, 255, 255, 0.75)',
              maxWidth: '680px',
              marginBottom: '2.5rem',
              lineHeight: 1.7
            }}
          >
            {eventData.shortDescription}
          </p>

          {/* Action CTAs */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              flexWrap: 'wrap',
              marginBottom: '3rem'
            }}
          >
            <button
              onClick={onOpenTicketModal}
              className="btn btn-primary btn-lg"
            >
              <Ticket style={{ width: '20px', height: '20px' }} />
              <span>Get Ticket</span>
              <ArrowRight style={{ width: '18px', height: '18px', marginLeft: '0.25rem' }} />
            </button>

            <a
              href="#event"
              className="btn btn-secondary btn-lg"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#event')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Code2 style={{ width: '20px', height: '20px' }} />
              <span>Explore Event</span>
            </a>
          </div>

          {/* Event Quick Info Pill — Frosted White Glass Container */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '1.75rem',
              padding: '0.85rem 1.75rem',
              borderRadius: '9999px',
              background: 'rgba(255, 255, 255, 0.08)',
              color: '#ffffff',
              border: '1px solid rgba(255, 255, 255, 0.16)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              boxShadow: '0 12px 32px rgba(0, 0, 0, 0.4)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Code2 style={{ width: '16px', height: '16px', color: '#ffffff' }} />
              <span className="font-mono" style={{ fontSize: '0.825rem', color: '#ffffff', fontWeight: 700 }}>
                {eventData.type}
              </span>
            </div>
            <span style={{ width: '1px', height: '16px', background: 'rgba(255, 255, 255, 0.18)' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Calendar style={{ width: '16px', height: '16px', color: 'rgba(255, 255, 255, 0.85)' }} />
              <span className="font-mono" style={{ fontSize: '0.825rem', color: 'rgba(255, 255, 255, 0.9)', fontWeight: 700 }}>
                {eventData.dateBadge}
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
