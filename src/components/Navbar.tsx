import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav
      className="w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-800 fixed top-0 left-0 z-50"
      role="navigation"
      aria-label="Primary Navigation"
    >
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-white font-bold tracking-wider hover:text-emerald-400 transition-colors"
          aria-label="Sami Amin Home"
        >
          SAMI AMIN
        </Link>
        <div className="flex gap-4 text-sm font-medium text-slate-300 overflow-x-auto">
          <Link href="/about" className="hover:text-emerald-400 transition-colors whitespace-nowrap">
            About
          </Link>
          <Link href="/projects" className="hover:text-emerald-400 transition-colors whitespace-nowrap">
            Projects
          </Link>
          <Link href="/experience" className="hover:text-emerald-400 transition-colors whitespace-nowrap">
            Experience
          </Link>
          <Link href="/education" className="hover:text-emerald-400 transition-colors whitespace-nowrap">
            Education
          </Link>
          <Link href="/certifications" className="hover:text-emerald-400 transition-colors whitespace-nowrap">
            Certifications
          </Link>
          <Link href="/achievements" className="hover:text-emerald-400 transition-colors whitespace-nowrap">
            Achievements
          </Link>
          <Link href="/statement" className="hover:text-emerald-400 transition-colors whitespace-nowrap">
            Statement
          </Link>
          <Link href="/gallery" className="hover:text-emerald-400 transition-colors whitespace-nowrap">
            Gallery
          </Link>
          <Link href="/contact" className="hover:text-emerald-400 transition-colors whitespace-nowrap">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}