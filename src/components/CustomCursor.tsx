'use client';

import React, { useEffect, useState } from 'react';
import { useMousePosition } from '@/hooks/useMousePosition';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const { x, y } = useMousePosition();

  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = ['A', 'BUTTON', 'INPUT', 'TEXTAREA', 'SELECT'].includes(
        target.tagName
      );
      const hasClickable = target.closest('a, button, [role="button"]');
      setIsHovering(!!(isInteractive || hasClickable));
    };

    document.addEventListener('mouseover', handleMouseOver);
    return () => document.removeEventListener('mouseover', handleMouseOver);
  }, []);

  // إخفاء المؤشر المخصص على الشاشات الصغيرة
  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    return null;
  }

  return (
    <div
      className={`custom-cursor ${isHovering ? 'hover' : ''}`}
      style={{
        left: `${x}px`,
        top: `${y}px`,
      }}
    />
  );
}