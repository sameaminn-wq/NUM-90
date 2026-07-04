import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 text-center">
      <h1 className="text-4xl font-extrabold text-white mb-4">404 - Gateway Missing</h1>
      <p className="text-slate-400 mb-8">The requested computational route does not exist.</p>
      <Link href="/" className="bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors">
        Return Home
      </Link>
    </div>
  );
}
