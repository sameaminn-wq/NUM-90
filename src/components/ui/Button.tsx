import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  href: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  download?: boolean;
  external?: boolean;
  className?: string;
}

export default function Button({
  href,
  variant = 'primary',
  size = 'md',
  children,
  download,
  external,
  className = '',
}: ButtonProps) {
  const baseStyle =
    'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-900 cursor-pointer';

  const variants = {
    primary:
      'bg-emerald-600 hover:bg-emerald-500 text-white border border-transparent hover:shadow-lg hover:shadow-emerald-500/25',
    secondary:
      'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 hover:border-slate-600',
    outline:
      'bg-transparent hover:bg-slate-800 text-slate-300 border border-slate-700 hover:border-slate-600',
    ghost:
      'bg-transparent hover:bg-slate-800/50 text-slate-300 border border-transparent hover:border-slate-700',
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  const classes = `${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`;

  if (external || download || href.startsWith('http') || href.startsWith('/docs')) {
    return (
      <a
        href={href}
        className={classes}
        download={download}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}