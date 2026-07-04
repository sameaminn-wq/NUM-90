import React from 'react';
import { Certification } from '@/types/portfolio';

export default function CertificationCard({ cert }: { cert: Certification }) {
  return (
    <div className="bg-slate-800/30 border border-slate-800 rounded-xl p-6 hover:border-emerald-500/40 transition-colors duration-200">
      <div className="flex flex-col justify-between h-full">
        <div>
          <h3 className="text-lg font-semibold text-white">{cert.name}</h3>
          <p className="text-emerald-400 text-sm mt-1">{cert.issuer}</p>
          <p className="text-slate-500 text-xs mt-1">{cert.date}</p>
        </div>
        <div className="flex flex-wrap gap-3 mt-4">
          {cert.verificationUrl && cert.verificationUrl !== '#' && (
            <a href={cert.verificationUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-emerald-400 hover:underline">
              Verify Credentials &rarr;
            </a>
          )}
          {cert.downloadUrl && (
            <a href={cert.downloadUrl} download className="text-xs text-emerald-400 hover:underline">
              Download PDF &rarr;
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
