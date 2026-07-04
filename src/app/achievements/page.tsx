import React from 'react';
import { achievements } from '@/data/portfolioData';
import AchievementCard from '@/components/AchievementCard';
import SectionHeader from '@/components/sections/SectionHeader';

export default function AchievementsPage() {
  const certs = achievements.filter(a => a.type === 'certification');
  const volunteer = achievements.filter(a => a.type === 'volunteer');
  const humanitarian = achievements.filter(a => a.type === 'humanitarian');
  const projects = achievements.filter(a => a.type === 'project');

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
      <SectionHeader
        title="Achievements"
        subtitle="Milestones"
        description="Academic, professional, and humanitarian accomplishments"
      />

      {projects.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Projects</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((ach) => (
              <AchievementCard key={ach.id} achievement={ach} />
            ))}
          </div>
        </section>
      )}

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Certifications</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {certs.map((ach) => (
            <AchievementCard key={ach.id} achievement={ach} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Volunteer Work</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {volunteer.map((ach) => (
            <AchievementCard key={ach.id} achievement={ach} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Humanitarian Experience</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {humanitarian.map((ach) => (
            <AchievementCard key={ach.id} achievement={ach} />
          ))}
        </div>
      </section>
    </div>
  );
}