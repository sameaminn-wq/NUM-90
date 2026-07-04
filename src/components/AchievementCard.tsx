import React from 'react';
import { Achievement } from '@/types/portfolio';

export default function AchievementCard({ achievement }: { achievement: Achievement }) {
  const typeColors = {
    certification: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    volunteer: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    humanitarian: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
    education: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  };

  return (
    <div className="bg-slate-800/30 border border-slate-800 p-6 rounded-xl hover:border-emerald-500/40 transition-colors duration-200">
      <div className="flex items-start gap-4">
        <div className="text-4xl">{achievement.icon}</div>
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-lg font-semibold text-white">{achievement.title}</h3>
            <span
              className={`text-xs px-2 py-0.5 rounded-full border font-medium ${
                typeColors[achievement.type]
              }`}
            >
              {achievement.type.charAt(0).toUpperCase() + achievement.type.slice(1)}
            </span>
          </div>
          <p className="text-sm text-slate-400 mt-1">{achievement.description}</p>
          <p className="text-xs text-slate-500 mt-2">{achievement.date}</p>
        </div>
      </div>
    </div>
  );
}