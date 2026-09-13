import React from 'react';
import { Clock, MapPin, Code, ShieldCheck } from 'lucide-react';
import { eventData } from '../config/eventData';

export const EventCard: React.FC = () => {
  const cards = [
    {
      title: 'EVENT DATE',
      value: eventData.date,
      badge: eventData.dateBadge,
      icon: Clock,
      highlight: true
    },
    {
      title: 'VENUE & LOCATION',
      value: eventData.venue,
      badge: eventData.venueBadge,
      icon: MapPin,
      highlight: true
    },
    {
      title: 'EVENT FORMAT',
      value: eventData.type,
      badge: 'COMPETITION',
      icon: Code,
      highlight: false
    },
    {
      title: 'ORGANIZED BY',
      value: eventData.organization,
      badge: 'TECHNICAL CLUB',
      icon: ShieldCheck,
      highlight: false
    }
  ];

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '1.5rem',
        width: '100%'
      }}
    >
      {cards.map((card, idx) => {
        const Icon = card.icon;
        return (
          <div
            key={idx}
            className="glass-card"
            style={{
              padding: '1.75rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Top Row: Icon + Badge */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff'
                }}
              >
                <Icon style={{ width: '22px', height: '22px' }} />
              </div>
              <span className={`badge ${card.highlight ? 'badge-glass-tba' : 'badge-glass'}`}>
                {card.badge}
              </span>
            </div>

            {/* Content */}
            <div>
              <span
                className="font-mono"
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: 'rgba(255, 255, 255, 0.6)',
                  letterSpacing: '0.08em'
                }}
              >
                {card.title}
              </span>
              <h3
                style={{
                  fontSize: '1.15rem',
                  fontWeight: 800,
                  color: '#ffffff',
                  marginTop: '0.35rem',
                  letterSpacing: '-0.015em'
                }}
              >
                {card.value}
              </h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};
