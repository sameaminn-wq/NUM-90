"use client";
import React, { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => { console.error(error); }, [error]);

  return (
    <div className="max-w-4xl mx-auto px-6 py-24 text-center">
      <h1 className="text-3xl font-bold text-white mb-4">An architectural error occurred</h1>
      <p className="text-slate-400 mb-6">The system state could not be resolved correctly.</p>
      <button onClick={() => reset()} className="bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors">
        Reset State
      </button>
    </div>
  );
}
