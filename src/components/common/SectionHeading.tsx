import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  centered = true,
  className = ''
}) => {
  return (
    <div className={`section-heading ${centered ? 'text-center' : ''} ${className}`} style={{ marginBottom: '3.5rem' }}>
      {badge && (
        <div style={{ display: 'inline-flex', marginBottom: '0.85rem' }}>
          <span className="badge badge-cyan">
            {badge}
          </span>
        </div>
      )}
      <h2 style={{
        fontSize: 'clamp(2rem, 4vw, 3rem)',
        fontWeight: 800,
        letterSpacing: '-0.025em',
        marginBottom: subtitle ? '0.85rem' : '0'
      }} className="text-gradient">
        {title}
      </h2>
      {subtitle && (
        <p style={{
          fontSize: '1.05rem',
          color: 'var(--text-secondary)',
          maxWidth: '640px',
          margin: centered ? '0 auto' : '0',
          lineHeight: '1.6'
        }}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
