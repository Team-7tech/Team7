import React from 'react';
import { Calendar, MapPin, Trophy, Users, Tag } from 'lucide-react';
import { Container } from './common/Container';
import { SectionHeading } from './common/SectionHeading';

interface Mentor {
  name: string;
  role: string;
}

interface PreviousEvent {
  id: string;
  image: string;
  alt: string;
  name: string;
  date: string;
  type?: string;
  organizer?: string;
  venue?: string;
  prizePool?: string;
  description?: string;
  mentors?: Mentor[];
}

const previousEvents: PreviousEvent[] = [
  {
    id: 'event-1',
    image: '/event1.jpeg',
    alt: 'Web का Hackathon event',
    name: 'Web का Hackathon',
    date: '22–23 March 2025',
    type: 'Technical Event'
  },
  {
    id: 'event-2',
    image: '/event2.jpeg',
    alt: 'Model Masters Expo event',
    name: 'Model Masters Expo',
    date: '10–11 April 2025',
    type: 'Hardware Competition',
    organizer: 'Machine Learning Department × Team7',
    venue: 'Innovation Studio, LPU',
    description: 'Students building and showcasing their projects.'
  },
  {
    id: 'event-3',
    image: '/event3.jpeg',
    alt: 'Hack Node India Hackathon event',
    name: 'Hack Node India Hackathon',
    date: '23 August 2025',
    venue: 'LPU',
    prizePool: '$5,000',
    mentors: [
      {
        name: 'MR. RUPIN MATHUR',
        role: 'Blockchain Advocate · India Lead, OpenXAI'
      },
      {
        name: 'MR. SAHIL THAKUR',
        role: 'Founder · BlockseBlock & Web3Sabha'
      }
    ]
  }
];

export const PreviousEventsSection: React.FC = () => {
  return (
    <section id="previous-events" className="section-padding" style={{ position: 'relative' }}>
      <Container style={{ position: 'relative', zIndex: 1 }}>
        <SectionHeading
          badge="PAST EVENTS"
          title="Previous Events"
          subtitle="A look back at what Team7 has built, hosted, and participated in."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            alignItems: 'stretch'
          }}
        >
          {previousEvents.map((event) => (
            <div
              key={event.id}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                overflow: 'hidden',
                borderRadius: '16px'
              }}
            >
              {/* Event Image Container */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '210px',
                  overflow: 'hidden',
                  backgroundColor: 'rgba(0, 0, 0, 0.4)'
                }}
              >
                <img
                  src={event.image}
                  alt={event.alt}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform var(--transition-smooth)'
                  }}
                  loading="lazy"
                />
              </div>

              {/* Event Content Details */}
              <div
                style={{
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1,
                  gap: '1rem'
                }}
              >
                {/* Event Name */}
                <h3
                  style={{
                    fontSize: '1.35rem',
                    fontWeight: 800,
                    color: '#ffffff',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.3
                  }}
                >
                  {event.name}
                </h3>

                {/* Metadata List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {/* Date */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
                    <Calendar style={{ width: '16px', height: '16px', color: 'rgba(255, 255, 255, 0.65)', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.85)', fontWeight: 500 }}>
                      {event.date}
                    </span>
                  </div>

                  {/* Type */}
                  {event.type && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
                      <Tag style={{ width: '16px', height: '16px', color: 'rgba(255, 255, 255, 0.65)', flexShrink: 0 }} />
                      <span style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.85)', fontWeight: 500 }}>
                        {event.type}
                      </span>
                    </div>
                  )}

                  {/* Organizer */}
                  {event.organizer && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
                      <Users style={{ width: '16px', height: '16px', color: 'rgba(255, 255, 255, 0.65)', flexShrink: 0 }} />
                      <span style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.85)', fontWeight: 500 }}>
                        <span style={{ color: 'rgba(255, 255, 255, 0.55)' }}>Organizer:</span> {event.organizer}
                      </span>
                    </div>
                  )}

                  {/* Venue */}
                  {event.venue && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
                      <MapPin style={{ width: '16px', height: '16px', color: 'rgba(255, 255, 255, 0.65)', flexShrink: 0 }} />
                      <span style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.85)', fontWeight: 500 }}>
                        <span style={{ color: 'rgba(255, 255, 255, 0.55)' }}>Venue:</span> {event.venue}
                      </span>
                    </div>
                  )}

                  {/* Prize Pool */}
                  {event.prizePool && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
                      <Trophy style={{ width: '16px', height: '16px', color: 'rgba(255, 255, 255, 0.65)', flexShrink: 0 }} />
                      <span style={{ fontSize: '0.875rem', color: '#ffffff', fontWeight: 600 }}>
                        <span style={{ color: 'rgba(255, 255, 255, 0.55)' }}>Prize Pool:</span> {event.prizePool}
                      </span>
                    </div>
                  )}
                </div>

                {/* Description if present */}
                {event.description && (
                  <p
                    style={{
                      fontSize: '0.875rem',
                      color: 'rgba(255, 255, 255, 0.7)',
                      lineHeight: 1.55,
                      marginTop: '0.25rem',
                      paddingTop: '0.75rem',
                      borderTop: '1px solid rgba(255, 255, 255, 0.08)'
                    }}
                  >
                    {event.description}
                  </p>
                )}

                {/* Mentors Section for Event 3 */}
                {event.mentors && event.mentors.length > 0 && (
                  <div
                    style={{
                      marginTop: 'auto',
                      paddingTop: '1rem',
                      borderTop: '1px solid rgba(255, 255, 255, 0.12)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.75rem'
                    }}
                  >
                    <span
                      className="font-mono"
                      style={{
                        fontSize: '0.725rem',
                        fontWeight: 700,
                        letterSpacing: '0.08em',
                        color: 'rgba(255, 255, 255, 0.6)',
                        textTransform: 'uppercase'
                      }}
                    >
                      Mentors
                    </span>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                      {event.mentors.map((mentor, mIdx) => (
                        <div key={mIdx}>
                          <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#ffffff', letterSpacing: '0.01em' }}>
                            {mentor.name}
                          </div>
                          <div style={{ fontSize: '0.785rem', color: 'rgba(255, 255, 255, 0.65)', lineHeight: 1.4 }}>
                            {mentor.role}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
