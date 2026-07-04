import React from 'react';
import { skills } from '@/data/portfolioData';

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-12">
      <section aria-labelledby="about-heading">
        <h1 id="about-heading" className="text-3xl font-bold text-white mb-6">
          About Me
        </h1>
        <div className="text-slate-400 space-y-4 leading-relaxed">
          <p>
            I am Sami Amin, an Eritrean  currently living in Egypt. My
            educational journey has been unconventional, shaped by limited
            access to formal education . Instead of allowing these challenges to define my
            future, I chose to build my own path through self-determination,
            continuous learning, and practical experience.
          </p>
          <p>
            From an early age, I have been fascinated by computers. I spent
            countless hours troubleshooting technical problems, assembling and
            disassembling computer hardware, and exploring how technology works.
            What began as curiosity gradually developed into a deep passion for
            computer science and software development.
          </p>
          <p>
            Over the past few years, I have invested heavily in online education
            through platforms such as Kiron, Coursera, IBM SkillsBuild, Google,
            and New York University. I have completed professional certifications
            in cybersecurity and IT support, and developed multiple real-world
            web applications including business websites, a cybersecurity
            platform, and other production-ready projects.
          </p>
          <p>
            In addition to my technical development, I have remained committed to
            serving my community as a volunteer ICDL instructor, humanitarian
            volunteer, and cybersecurity trainee. These experiences have
            strengthened my commitment to using technology as a tool for
            positive impact.
          </p>
          <p>
            I am applying to the University of London's BSc in Computer Science
            to transform years of independent learning into a globally recognised
            academic qualification and to continue building AI-powered
            technologies that improve everyday life.
          </p>
        </div>
      </section>

      <section
        className="border-t border-slate-800 pt-8"
        aria-labelledby="skills-heading"
      >
        <h2 id="skills-heading" className="text-2xl font-bold text-white mb-6">
          Technical Skills
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {skills.aiTools && (
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-emerald-400 mb-2">
                AI & Development Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.aiTools.map((s) => (
                  <span
                    key={s}
                    className="bg-slate-800 px-3 py-1 rounded text-sm border border-slate-700"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          )}

          {skills.frontend && (
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-emerald-400 mb-2">
                Frontend Development
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((s) => (
                  <span
                    key={s}
                    className="bg-slate-800 px-3 py-1 rounded text-sm border border-slate-700"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          )}

          {skills.development && (
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-emerald-400 mb-2">
                Development Practices
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.development.map((s) => (
                  <span
                    key={s}
                    className="bg-slate-800 px-3 py-1 rounded text-sm border border-slate-700"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          )}

          {skills.cybersecurity && (
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-emerald-400 mb-2">
                Cybersecurity
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.cybersecurity.map((s) => (
                  <span
                    key={s}
                    className="bg-slate-800 px-3 py-1 rounded text-sm border border-slate-700"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
