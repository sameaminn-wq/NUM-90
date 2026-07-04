import React from 'react';
import { projects, siteConfig, certifications, stats } from '@/data/portfolioData';
import ProjectCard from '@/components/ProjectCard';
import StatCard from '@/components/StatCard';
import Button from '@/components/ui/Button';

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <header className="py-12 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
          {siteConfig.name}
        </h1>
        <p className="text-xl text-emerald-400 font-medium mb-2">
          Self-Taught Developer
        </p>
        <p className="text-lg text-slate-300 font-medium mb-2">
          AI-Assisted Web Application Builder
        </p>
        <p className="text-lg text-slate-300 font-medium mb-6">
          Cybersecurity Learner
        </p>
        <p className="text-slate-400 max-w-2xl leading-relaxed mb-8">
          Self-taught technology learner from an Eritrean refugee background,
          currently living in Egypt. Building AI-assisted web applications,
          learning cybersecurity, and preparing for formal Computer Science
          studies through practical projects and continuous online education.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Button href="/docs/Sami_Amin_CV.pdf" download variant="primary">
            Download CV
          </Button>
          <Button href="/docs/Sami_Amin_Portfolio.pdf" download variant="secondary">
            Download Portfolio
          </Button>
          <Button href="https://github.com/sameaminn-wq" external variant="secondary">
            View GitHub
          </Button>
        </div>
      </header>

      {/* Stats Section */}
      <section className="py-12 border-t border-slate-800" aria-label="Statistics">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </section>

      <section className="py-12 border-t border-slate-800" aria-label="Featured Projects">
        <h2 className="text-2xl font-bold text-white mb-6">Featured Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.slice(0, 4).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="mt-6 text-center">
          <Button href="/projects" variant="secondary">
            View All Projects
          </Button>
        </div>
      </section>

      <section className="py-12 border-t border-slate-800" aria-label="Certifications">
        <h2 className="text-2xl font-bold text-white mb-6">Recent Certifications</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {certifications.slice(0, 4).map((cert, index) => (
            <div
              key={index}
              className="bg-slate-800/30 border border-slate-800 p-4 rounded-lg"
            >
              <h3 className="text-white font-semibold text-sm">{cert.name}</h3>
              <p className="text-sm text-emerald-400">{cert.issuer}</p>
              <p className="text-xs text-slate-500">{cert.date}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <Button href="/certifications" variant="secondary">
            View All Certifications
          </Button>
        </div>
      </section>

      <section className="py-12 border-t border-slate-800" aria-label="Personal Statement">
        <h2 className="text-2xl font-bold text-white mb-4">Personal Statement</h2>
        <p className="text-slate-400 leading-relaxed mb-4">
          My educational journey has been unconventional, shaped by limited access to formal education 
          due to financial and personal circumstances. Instead of allowing these challenges to define 
          my future, I chose to build my own path through self-determination, continuous learning, 
          and practical experience.
        </p>
        <Button href="/statement" variant="secondary">
          Read Full Statement →
        </Button>
      </section>
    </div>
  );
}