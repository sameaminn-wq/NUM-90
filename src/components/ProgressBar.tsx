'use client';

import React, { useEffect, useState } from 'react';

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      setProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      id="progress-bar"
      style={{ width: `${progress}%` }}
      className="fixed top-0 left-0 h-1 bg-gradient-to-r from-emerald-500 to-emerald-300 z-[9999] transition-all duration-100"
    />
  );
}