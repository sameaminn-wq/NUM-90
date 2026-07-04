import React from 'react';
import { certifications } from '@/data/portfolioData';
import CertificationCard from '@/components/CertificationCard';

export default function CertificationsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-white mb-4">Certifications</h1>
      <p className="text-slate-400 mb-8">
        Professional certifications and training completed through online learning platforms.
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        {certifications.map((cert, index) => (
          <CertificationCard key={index} cert={cert} />
        ))}
      </div>
    </div>
  );
}