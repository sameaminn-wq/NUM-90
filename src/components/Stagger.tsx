'use client';

import React, { ReactNode } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface StaggerProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
}

export default function Stagger({
  children,
  className = '',
  threshold = 0.1,
}: StaggerProps) {
  const { ref, isVisible } = useScrollReveal({ threshold });

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`stagger ${isVisible ? 'visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
}