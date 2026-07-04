import React from 'react';
import { siteConfig } from '@/data/portfolioData';

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-800 bg-slate-900 py-6 mt-12" role="contentinfo">
      <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
        <p>&copy; {new Date().getFullYear()} {siteConfig.name}. Structured using modern web best practices.</p>
        <div className="flex gap-4">
          <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
          <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
