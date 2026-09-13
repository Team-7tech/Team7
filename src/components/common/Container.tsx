import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
}

export const Container: React.FC<ContainerProps> = ({ children, className = '', id, style }) => {
  return (
    <div id={id} className={`container ${className}`} style={style}>
      {children}
    </div>
  );
};
