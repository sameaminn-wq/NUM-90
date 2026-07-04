import React from 'react';
import Button from '@/components/ui/Button';
import SectionHeader from '@/components/sections/SectionHeader';

export default function StatementPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <SectionHeader
        title="Personal Statement"
        subtitle="University of London"
        description="BSc Computer Science Application"
      />

      <div className="mt-10 bg-slate-800/30 border border-slate-800 p-8 md:p-12 rounded-xl prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-white mt-0">Application for the BSc Computer Science</h2>
        <p className="text-slate-300 text-lg"><strong>University of London</strong></p>

        <p className="text-slate-400 leading-relaxed mb-6">
          My name is Sami Amin, and I am an Eritrean  currently living in Egypt. My educational
          journey has been very different from that of most applicants.I was not able to complete a traditional secondary education. Growing
          up outside my country of nationality, access to stable education was limited, and many
          opportunities that others take for granted were simply not available to me.
        </p>

        <p className="text-slate-400 leading-relaxed mb-6">
          Despite these challenges, I never gave up on learning. Instead of allowing my circumstances
          to define my future, I chose to build my own path through self-determination, and continuous
          practical experience.
        </p>

        <p className="text-slate-400 leading-relaxed mb-6">
          From an early age, I have been fascinated by computers. I spent countless hours
          troubleshooting technical problems, and assembling and disassembling computer hardware,
          exploring how technology works. What began as curiosity gradually developed into a deep
          passion for computer science and software development. Today, I continue to spend much of
          my time learning, building projects, and improving my technical skills.
        </p>

        <h3 className="text-xl font-bold text-white mt-8 mb-4">Education & Certifications</h3>
        <p className="text-slate-400 leading-relaxed mb-6">
          Over the past few years, I have invested heavily in online education through platforms such
          as Kiron, Coursera, IBM SkillsBuild, Google, and New York University. I have completed
          several professional certifications in cybersecurity and I am currently pursuing Google's
          IT Support Professional Certificate. Alongside these studies, I have developed multiple
          real-world web applications, including business websites, a cybersecurity platform that
          integrates public APIs, and other production-ready projects.
        </p>

        <h3 className="text-xl font-bold text-white mt-8 mb-4">AI-Assisted Development</h3>
        <p className="text-slate-400 leading-relaxed mb-6">
          Throughout my learning journey, I have adopted an AI-assisted software development workflow.
          I use multiple AI systems to explore implementation approaches, compare solutions, review
          generated code, test functionality, identify errors, and continuously refine applications
          until they meet production standards. This process has taught me not only technical skills
          but also critical thinking, evaluation, and systematic problem-solving.
        </p>

        <h3 className="text-xl font-bold text-white mt-8 mb-4">Community Service & Experience</h3>
        <p className="text-slate-400 leading-relaxed mb-6">
          In addition to my technical development, I have remained committed to serving my community.
          As a volunteer ICDL instructor, I have helped others improve their digital skills. I also
          completed an intensive cybersecurity training programme delivered by HireQ for Career Services
          in collaboration with Terre des Hommes, where I contributed to a project focused on improving
          online safety for job seekers. These experiences strengthened my teamwork, communication,
          and professional skills while reinforcing my belief that technology should be used to solve
          meaningful human problems.
        </p>

        <h3 className="text-xl font-bold text-white mt-8 mb-4">Why Computer Science?</h3>
        <p className="text-slate-400 leading-relaxed mb-6">
          Throughout my life, I have witnessed how limited access to education and technology affects
          individuals, especially refugees and displaced communities. These experiences have shaped my
          perspective and strengthened my commitment to using technology as a tool for positive impact.
          I believe computer science is not only about writing software; it is about creating
          opportunities, improving access to information, and developing practical solutions that
          improve people's lives.
        </p>

        <h3 className="text-xl font-bold text-white mt-8 mb-4">Why University of London?</h3>
        <p className="text-slate-400 leading-relaxed mb-6">
          The University of London's BSc in Computer Science represents the opportunity I have been
          working toward for years. Its internationally recognised curriculum, flexible online learning
          model, and strong emphasis on practical computing make it the ideal environment for me to
          transform years of independent learning into a globally recognised academic qualification.
        </p>

        <h3 className="text-xl font-bold text-white mt-8 mb-4">Future Ambitions</h3>
        <p className="text-slate-400 leading-relaxed mb-6">
          My long-term ambition is to build AI-powered technologies that improve everyday life by
          making digital services more intelligent, accessible, and useful for individuals, businesses,
          and humanitarian organisations. I believe Artificial Intelligence has the potential to
          transform education, healthcare, business, and humanitarian work, and I hope to contribute
          to that future through responsible and innovative technology.
        </p>

        <h3 className="text-xl font-bold text-white mt-8 mb-4">Conclusion</h3>
        <p className="text-slate-400 leading-relaxed mb-6">
          Although my educational path has been unconventional, every challenge has strengthened my
          determination rather than limiting it. Every certification I completed, every project I built,
          every volunteer role I accepted, and every hour I invested in self-learning represents my
          commitment to continuous growth and excellence.
        </p>

        <p className="text-slate-400 leading-relaxed mb-6">
          I am applying to the University of London not only to earn a degree, but to gain the academic
          foundation that will allow me to transform years of practical experience into meaningful
          innovation and long-term impact. I am ready to learn, contribute, and make the most of this
          opportunity.
        </p>

        <div className="mt-10 pt-8 border-t border-slate-800">
          <p className="text-slate-300">Sincerely,</p>
          <p className="text-white font-semibold text-lg">Sami Amin</p>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <Button href="/docs/Sami_Amin_Personal_Statement.pdf" download variant="primary" size="lg">
            Download PDF Version
          </Button>
          <Button href="/" variant="secondary">
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
}