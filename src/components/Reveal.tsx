'use client';

import React, { ReactNode } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'scale';
  threshold?: number;
}

export default function Reveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  threshold = 0.1,
}: RevealProps) {
  const { ref, isVisible } = useScrollReveal({ threshold });

  const directionClasses = {
    up: 'reveal',
    left: 'reveal-left',
    right: 'reveal-right',
    scale: 'reveal-scale',
  };

  const baseClass = directionClasses[direction] || directionClasses.up;

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`${baseClass} ${isVisible ? 'visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}