import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  description,
  align = 'center',
  className = '',
}: SectionHeaderProps) {
  const alignments = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <div className={`space-y-2 ${alignments[align]} ${className}`}>
      {subtitle && (
        <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
      {description && (
        <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">{description}</p>
      )}
    </div>
  );
}