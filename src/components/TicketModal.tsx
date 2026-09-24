import React from 'react';
import { X, Ticket, QrCode, ExternalLink } from 'lucide-react';
import { eventData } from '../config/eventData';

interface TicketModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TicketModal: React.FC<TicketModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        background: 'rgba(3, 3, 4, 0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)'
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '460px',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          background: 'rgba(18, 20, 28, 0.95)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          color: '#ffffff',
          borderRadius: '20px',
          border: '1px solid rgba(255, 255, 255, 0.16)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.85)',
          overflow: 'hidden'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div
          style={{
            padding: '1.25rem 1.5rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <div
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.18)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff'
              }}
            >
              <Ticket style={{ width: '18px', height: '18px' }} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff', margin: 0, letterSpacing: '-0.01em' }}>
                GET TICKETS
              </h3>
              <span className="font-mono" style={{ fontSize: '0.7rem', color: 'rgba(255, 255, 255, 0.55)', letterSpacing: '0.05em' }}>
                {eventData.name}
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            style={{
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.14)',
              borderRadius: '8px',
              color: 'rgba(255, 255, 255, 0.75)',
              padding: '0.4rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
              e.currentTarget.style.color = '#ffffff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
              e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)';
            }}
          >
            <X style={{ width: '18px', height: '18px' }} />
          </button>
        </div>

        {/* Content Body */}
        <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

          {/* Section 1: Registration Link */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.5rem' }}>
              <ExternalLink style={{ width: '14px', height: '14px', color: 'rgba(255, 255, 255, 0.7)' }} />
              <label className="font-mono" style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', color: 'rgba(255, 255, 255, 0.75)', textTransform: 'uppercase' }}>
                Registration Link
              </label>
            </div>

            <div
              style={{
                width: '100%',
                padding: '1rem 1.25rem',
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '52px'
              }}
            >
              <span className="font-mono" style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.5)', letterSpacing: '0.05em' }}>
                [ Coming Soon ]
              </span>
            </div>
          </div>

          {/* Section 2: QR Code */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.5rem' }}>
              <QrCode style={{ width: '14px', height: '14px', color: 'rgba(255, 255, 255, 0.7)' }} />
              <label className="font-mono" style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', color: 'rgba(255, 255, 255, 0.75)', textTransform: 'uppercase' }}>
                QR Code
              </label>
            </div>

            <div
              style={{
                width: '100%',
                padding: '2rem 1.25rem',
                borderRadius: '14px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem',
                minHeight: '160px'
              }}
            >
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '12px',
                  border: '1px dashed rgba(255, 255, 255, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'rgba(255, 255, 255, 0.35)',
                  background: 'rgba(255, 255, 255, 0.02)'
                }}
              >
                <QrCode style={{ width: '32px', height: '32px' }} />
              </div>
              <span className="font-mono" style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.5)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                QR Code Coming Soon
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
