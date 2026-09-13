import React from 'react';
import { HelpCircle, ArrowUpRight } from 'lucide-react';
import { eventData } from '../config/eventData';

interface FaqCardProps {
  category: string;
  question: string;
  answer: string;
}

const FaqCard: React.FC<FaqCardProps> = ({ category, question, answer }) => {
  return (
    <div
      style={{
        width: '380px',
        minWidth: '380px',
        flexShrink: 0,
        background: 'rgba(255, 255, 255, 0.08)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        color: '#ffffff',
        borderRadius: '16px',
        padding: '1.75rem 2rem',
        border: '1px solid rgba(255, 255, 255, 0.16)',
        boxShadow: '0 12px 32px rgba(0, 0, 0, 0.4)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'transform 250ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 250ms ease, background 250ms ease',
        cursor: 'default',
        userSelect: 'none'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
        e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.6)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
        e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.4)';
      }}
    >
      <div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '1rem'
          }}
        >
          <span
            className="font-mono"
            style={{
              fontSize: '0.725rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              color: '#ffffff',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              padding: '0.25rem 0.65rem',
              borderRadius: '6px',
              textTransform: 'uppercase'
            }}
          >
            {category}
          </span>
          <ArrowUpRight style={{ width: '16px', height: '16px', color: 'rgba(255, 255, 255, 0.6)' }} />
        </div>

        <h4
          style={{
            fontSize: '1.15rem',
            fontWeight: 800,
            color: '#ffffff',
            lineHeight: 1.35,
            marginBottom: '0.75rem',
            letterSpacing: '-0.015em'
          }}
        >
          {question}
        </h4>

        <p
          style={{
            fontSize: '0.925rem',
            color: 'rgba(255, 255, 255, 0.75)',
            lineHeight: 1.6,
            fontWeight: 400
          }}
        >
          {answer}
        </p>
      </div>

      <div
        style={{
          marginTop: '1.25rem',
          paddingTop: '0.85rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '0.75rem',
          color: 'rgba(255, 255, 255, 0.5)'
        }}
      >
        <span className="font-mono" style={{ fontWeight: 600 }}>SYNTAX VERSE FAQ</span>
        <span>Team7 Support</span>
      </div>
    </div>
  );
};

export const FaqSection: React.FC = () => {
  const faqs = eventData.faqs || [];

  // Group FAQs into 3 distinct rows
  const row1Items = faqs.slice(0, 3);
  const row2Items = faqs.slice(3, 6);
  const row3Items = faqs.slice(6, 9);

  // Duplicate items for seamless infinite marquee loop
  const row1Duplicated = [...row1Items, ...row1Items, ...row1Items, ...row1Items];
  const row2Duplicated = [...row2Items, ...row2Items, ...row2Items, ...row2Items];
  const row3Duplicated = [...row3Items, ...row3Items, ...row3Items, ...row3Items];

  return (
    <section
      style={{
        padding: '6rem 0',
        position: 'relative',
        overflow: 'hidden',
        background: 'transparent'
      }}
    >
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '3.5rem', padding: '0 1.5rem' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem' }}>
          <HelpCircle style={{ width: '18px', height: '18px', color: '#ffffff' }} />
          <span className="badge badge-glass">FREQUENTLY ASKED</span>
        </div>
        <h2
          style={{
            fontSize: 'clamp(2.25rem, 5vw, 3.25rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            marginBottom: '0.85rem',
            color: '#ffffff'
          }}
        >
          Got Questions? We Have Answers.
        </h2>
        <p
          style={{
            fontSize: '1.05rem',
            color: 'rgba(255, 255, 255, 0.75)',
            maxWidth: '640px',
            margin: '0 auto',
            lineHeight: 1.6
          }}
        >
          Everything you need to know about Syntax Verse, pre-registration, team rules, and hackathon execution.
        </p>
      </div>

      {/* Marquee Rows Container with Edge Fade Mask */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          width: '100%',
          overflow: 'hidden',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
        }}
      >
        {/* ROW 1: Moves LEFT */}
        <div className="marquee-row marquee-row-left">
          <div className="marquee-track">
            {row1Duplicated.map((item, idx) => (
              <FaqCard
                key={`r1-${idx}`}
                category={item.category}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </div>

        {/* ROW 2: Moves RIGHT */}
        <div className="marquee-row marquee-row-right">
          <div className="marquee-track">
            {row2Duplicated.map((item, idx) => (
              <FaqCard
                key={`r2-${idx}`}
                category={item.category}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </div>

        {/* ROW 3: Moves LEFT */}
        <div className="marquee-row marquee-row-left">
          <div className="marquee-track">
            {row3Duplicated.map((item, idx) => (
              <FaqCard
                key={`r3-${idx}`}
                category={item.category}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Inline styles for Infinite Rolling Marquee Animation */}
      <style>{`
        .marquee-row {
          width: 100%;
          overflow: hidden;
          display: flex;
        }

        .marquee-track {
          display: flex;
          gap: 1.5rem;
          width: max-content;
        }

        .marquee-row-left .marquee-track {
          animation: marqueeLeft 38s linear infinite;
        }

        .marquee-row-right .marquee-track {
          animation: marqueeRight 42s linear infinite;
        }

        .marquee-row:hover .marquee-track {
          animation-play-state: paused;
        }

        @keyframes marqueeLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes marqueeRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none !important;
            flex-wrap: wrap;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};
