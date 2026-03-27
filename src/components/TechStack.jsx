import React from 'react';

const TechStack = () => {
  const frontend = [
    { name: 'Angular', icon: '🅰️' },
    { name: 'HTML', icon: '🌐' },
    { name: 'CSS', icon: '🎨' },
    { name: 'JavaScript', icon: '⚡' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'Tailwind', icon: '💨' },
    { name: 'Figma', icon: '🎭' },
  ];

  const backend = [
    { name: 'Java', icon: '☕' },
    { name: 'Spring Boot', icon: '🍃' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'Git & GitHub', icon: '🐙' },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <p className="text-purple-400 text-sm tracking-widest uppercase mb-2 font-mono">
          Skills
        </p>
        <h2 className="text-4xl md:text-5xl font-black mb-16">
          What I <span className="text-amber-400">Work With</span>
        </h2>

        <div className="space-y-12">
          {/* Frontend */}
          <div>
            <p className="text-purple-400 text-sm tracking-widest uppercase mb-6 font-mono">
              ▸ Frontend
            </p>
            <div className="flex flex-wrap gap-3">
              {frontend.map((skill, index) => (
                <span
                  key={index}
                  className="flex items-center gap-2 bg-purple-900/30 border border-purple-500/40 text-purple-300 px-5 py-3 rounded-full text-sm font-mono hover:bg-purple-900/50 hover:border-purple-400 transition-all duration-200 hover:scale-105"
                >
                  <span>{skill.icon}</span>
                  <span>{skill.name}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div>
            <p className="text-amber-400 text-sm tracking-widest uppercase mb-6 font-mono">
              ▸ Backend & Tools
            </p>
            <div className="flex flex-wrap gap-3">
              {backend.map((skill, index) => (
                <span
                  key={index}
                  className="flex items-center gap-2 bg-amber-900/20 border border-amber-500/40 text-amber-300 px-5 py-3 rounded-full text-sm font-mono hover:bg-amber-900/30 hover:border-amber-400 transition-all duration-200 hover:scale-105"
                >
                  <span>{skill.icon}</span>
                  <span>{skill.name}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;