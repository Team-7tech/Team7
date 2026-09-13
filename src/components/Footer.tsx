import React from 'react';
import { Terminal } from 'lucide-react';
import { Container } from './common/Container';
import { eventData } from '../config/eventData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-subtle)',
        background: 'rgba(5, 7, 12, 0.95)',
        padding: '3rem 0 2rem 0',
        color: 'var(--text-secondary)'
      }}
    >
      <Container>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
            paddingBottom: '2rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
          }}
        >
          {/* Brand */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.18)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff'
              }}
            >
              <Terminal style={{ width: '18px', height: '18px' }} />
            </div>
            <div>
              <span className="font-mono" style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-bright)' }}>
                {eventData.name}
              </span>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginLeft: '0.5rem' }}>
                by {eventData.organization}
              </span>
            </div>
          </div>

          {/* Quick Nav */}
          <nav style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.875rem' }}
            >
              Home
            </a>
            <a
              href="#event"
              onClick={(e) => handleNavClick(e, '#event')}
              style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.875rem' }}
            >
              Event
            </a>
            <a
              href="#tickets"
              onClick={(e) => handleNavClick(e, '#tickets')}
              style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.875rem' }}
            >
              Tickets
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.875rem' }}
            >
              Contact
            </a>
          </nav>
        </div>

        {/* Copyright Bar */}
        <div
          style={{
            paddingTop: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.8rem',
            color: 'var(--text-muted)'
          }}
        >
          <div>
            © {currentYear} {eventData.organization}. All rights reserved. Flagship Technical Hackathon.
          </div>
          <div className="font-mono" style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.75)' }}>
            Think in Logic. Build Without Limits.
          </div>
        </div>
      </Container>
    </footer>
  );
};
