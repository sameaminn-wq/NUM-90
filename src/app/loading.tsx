import React from 'react';

export default function Loading() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 flex flex-col items-center justify-center">
      <div className="w-8 h-8 border-4 border-slate-700 border-t-emerald-500 rounded-full animate-spin mb-4"></div>
      <p className="text-sm text-slate-500 tracking-wider font-mono">RESOLVING CORE FRAMEWORK COMPONENT...</p>
    </div>
  );
}
