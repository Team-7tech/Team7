import React from 'react';

const LinkedinIcon: React.FC<{ style?: React.CSSProperties }> = ({ style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={style}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const DeveloperCredit: React.FC = () => {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: '1.25rem',
        right: '1.25rem',
        zIndex: 99,
        pointerEvents: 'auto'
      }}
    >
      <div
        className="developer-glass-card"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.65rem',
          padding: '0.5rem 1rem',
          borderRadius: '12px',
          background: 'rgba(255, 255, 255, 0.92)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.8)',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.35)',
          color: '#090a0f'
        }}
      >
        <span
          style={{
            fontSize: '0.8rem',
            fontStyle: 'italic',
            fontWeight: 500,
            letterSpacing: '0.01em',
            color: '#090a0f',
            whiteSpace: 'nowrap'
          }}
        >
          Developed By - <span style={{ fontWeight: 800, fontStyle: 'italic' }}>Harshit Larenc</span>
        </span>

        <a
          href="https://www.linkedin.com/in/harshit-larenc/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Harshit Larenc LinkedIn Profile"
          style={{
            width: '26px',
            height: '26px',
            borderRadius: '6px',
            background: '#0a66c2',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none',
            transition: 'transform 200ms ease, opacity 200ms ease',
            flexShrink: 0
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.08)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <LinkedinIcon style={{ width: '14px', height: '14px' }} />
        </a>
      </div>
    </div>
  );
};
