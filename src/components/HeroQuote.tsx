import React from 'react';
import { Quote } from 'lucide-react';

interface HeroQuoteProps {
  quote: string;
  author?: string;
  className?: string;
}

export const HeroQuote: React.FC<HeroQuoteProps> = ({
  quote,
  author,
  className = ''
}) => {
  return (
    <div 
      className={`hero-quote-box ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.85rem',
        background: 'rgba(255, 255, 255, 0.06)',
        border: '1px solid rgba(255, 255, 255, 0.16)',
        borderLeft: '3px solid #ffffff',
        padding: '0.85rem 1.35rem',
        borderRadius: '0 12px 12px 0',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)',
        maxWidth: '100%'
      }}
    >
      <Quote style={{ width: '18px', height: '18px', color: '#ffffff', flexShrink: 0 }} />
      <span 
        className="font-mono"
        style={{
          fontSize: '0.9375rem',
          color: '#ffffff',
          fontWeight: 500,
          letterSpacing: '-0.01em'
        }}
      >
        "{quote}"
      </span>
      {author && (
        <span style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.6)' }}>
          — {author}
        </span>
      )}
    </div>
  );
};
