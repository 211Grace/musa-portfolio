import React from 'react';
import { Download, FileText } from 'lucide-react';

const Resume = () => {
  const skills = [
    'Angular', 'Java', 'Spring Boot', 'PostgreSQL',
    'Git & GitHub', 'HTML', 'TypeScript', 'JavaScript', 'Figma',
  ];

  const capabilities = [
    'Backend system design and relational data modelling',
    'Version control usage and collaborative development practices',
    'Frontend development with responsive UI/UX implementation',
    'Applies basic authentication and security practices',
  ];

  return (
    <section id="resume" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-purple-400 text-sm tracking-widest uppercase mb-2 font-mono">
          Resume
        </p>
        <h2 className="text-4xl md:text-5xl font-black mb-16">
          My <span className="text-purple-400">Experience</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left — Summary */}
          <div className="space-y-8">
            {/* Education */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <p className="text-purple-400 text-xs tracking-widest uppercase font-mono mb-3">
                Education
              </p>
              <h3 className="text-white font-bold text-lg">Bachelor of Science</h3>
              <p className="text-gray-400">Life Sciences</p>
            </div>

            {/* Technical Skills */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <p className="text-purple-400 text-xs tracking-widest uppercase font-mono mb-4">
                Technical Skills
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="text-xs font-mono text-purple-300 bg-purple-900/30 border border-purple-500/30 px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Core Capabilities */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <p className="text-purple-400 text-xs tracking-widest uppercase font-mono mb-4">
                Core Capabilities
              </p>
              <ul className="space-y-3">
                {capabilities.map((cap, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-400 text-sm">
                    <span className="text-purple-400 mt-1">▸</span>
                    {cap}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right — Download */}
          <div className="flex flex-col gap-8">
            {/* Project Experience */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <p className="text-purple-400 text-xs tracking-widest uppercase font-mono mb-4">
                Project Experience
              </p>
              <h3 className="text-amber-400 font-bold mb-1">LocalConnect SA</h3>
              <p className="text-gray-500 text-sm mb-3">Team Project — Learnership Programme</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                A business discovery platform enabling users to find, review,
                and trust local South African businesses.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Angular', 'Spring Boot', 'PostgreSQL', 'Figma', 'Tailwind'].map((t, i) => (
                  <span key={i} className="text-xs font-mono text-amber-300 bg-amber-900/20 px-2 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Download Card */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-purple-900/40 rounded-2xl flex items-center justify-center mb-4">
                <FileText size={32} className="text-purple-400" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Full Resume</h3>
              <p className="text-gray-400 text-sm mb-6">
                Download my complete resume to learn more about my experience and skills.
              </p>
              <a
                href="/MUSA_GUMEDE.pdf"
                download
                className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-bold transition-all duration-200 hover:scale-105"
              >
                <Download size={18} />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;