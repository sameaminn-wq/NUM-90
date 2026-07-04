import React from 'react';
import SectionHeader from '@/components/sections/SectionHeader';

export default function EducationPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <SectionHeader
        title="Education"
        subtitle="Learning Journey"
        description="Self-directed education and formal learning"
      />

      <div className="mt-8 space-y-6">
        <div className="bg-slate-800/20 border border-slate-800 p-6 rounded-xl">
          <h3 className="text-lg font-bold text-white">Google IT Support Professional Certificate</h3>
          <p className="text-emerald-400">Google • In Progress - 2026</p>
          <ul className="mt-3 list-disc pl-5 space-y-1 text-sm text-slate-400">
            <li>Computer Hardware and Networking</li>
            <li>Operating Systems and Troubleshooting</li>
            <li>IT Support and Professional Practices</li>
          </ul>
        </div>

        <div className="bg-slate-800/20 border border-slate-800 p-6 rounded-xl">
          <h3 className="text-lg font-bold text-white">Introduction to Cyber Attacks</h3>
          <p className="text-emerald-400">New York University • 2025</p>
          <ul className="mt-3 list-disc pl-5 space-y-1 text-sm text-slate-400">
            <li>Cybersecurity threats and attack vectors</li>
            <li>Defense strategies and risk assessment</li>
          </ul>
        </div>
        </div>

        <div className="bg-slate-800/20 border border-slate-800 p-6 rounded-xl">
          <h3 className="text-lg font-bold text-white">Cybersecurity Fundamentals</h3>
          <p className="text-emerald-400">IBM SkillsBuild • 2025</p>
          <ul className="mt-3 list-disc pl-5 space-y-1 text-sm text-slate-400">
            <li>Security concepts and threat analysis</li>
            <li>Digital safety and security awareness</li>
          </ul>
      

        <div className="bg-slate-800/20 border border-slate-800 p-6 rounded-xl">
          <h3 className="text-lg font-bold text-white">Digital Skills Program - Cybersecurity Track</h3>
          <p className="text-emerald-400">HireQ × Terre des Hommes • 2025</p>
          <ul className="mt-3 list-disc pl-5 space-y-1 text-sm text-slate-400">
            <li>Team collaboration and cybersecurity practices</li>
            <li>Digital safety and problem solving</li>
          </ul>
        </div>
      </div>
    </div>
  );
}