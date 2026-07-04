import React from 'react';

interface StatCardProps {
  label: string;
  value: string;
  description: string;
}

export default function StatCard({ label, value, description }: StatCardProps) {
  return (
    <div className="bg-slate-800/30 border border-slate-800 p-6 rounded-xl text-center hover:border-emerald-500/40 transition-colors duration-200">
      <div className="text-3xl font-bold text-emerald-400">{value}</div>
      <div className="text-lg font-semibold text-white mt-1">{label}</div>
      <div className="text-sm text-slate-400 mt-1">{description}</div>
    </div>
  );
}