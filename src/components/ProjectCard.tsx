import React from 'react';
import { Project } from '@/types/portfolio';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="bg-slate-800/40 border border-slate-700/50 p-6 rounded-xl hover:border-emerald-500/40 transition-colors duration-200 flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">{project.type}</span>
          <span className={`text-xs px-2.5 py-0.5 rounded-full font-medium border ${project.status === 'Completed' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-amber-500/10 text-amber-400 border-amber-500/20'}`}>
            {project.status}
          </span>
        </div>
        <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
        <p className="text-xs text-slate-500 mb-3">Year: {project.year}</p>
        <p className="text-slate-400 text-sm mb-4 leading-relaxed">{project.description}</p>
      </div>
      <div>
        <div className="flex flex-wrap gap-1.5 mb-5" aria-label="Technologies integrated">
          {project.technologies.map((tech) => (
            <span key={tech} className="bg-slate-900 text-slate-300 text-xs px-2 py-0.5 rounded border border-slate-800">{tech}</span>
          ))}
        </div>
        <div className="flex gap-4">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`View source code for ${project.title}`} className="text-sm font-medium text-emerald-400 hover:underline">
              GitHub &rarr;
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`View live demo for ${project.title}`} className="text-sm font-medium text-blue-400 hover:underline">
              Live Demo ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
