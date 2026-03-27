import React from 'react';

const About = () => {
  const facts = [
    { icon: '📍', text: 'South Africa' },
    { icon: '🎓', text: 'BSc Life Sciences → Developer' },
    { icon: '⚡', text: 'Collects memories, not things' },
    { icon: '😄', text: 'Gives people nicknames they never asked for' },
  ];

  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <p className="text-purple-400 text-sm tracking-widest uppercase mb-2 font-mono">About Me</p>
      <h2 className="text-4xl md:text-5xl font-black mb-16">
        From Life Sciences to{' '}
        <span className="text-amber-400">Full-Stack Code</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Profile Photo */}
        <div className="flex justify-center">
          <div className="relative">
            <img 
              src="/musa-profile.jpg"
              alt="Musa Gumede"
              className="w-72 h-72 rounded-full object-cover border-4 border-purple-500"
            />
            <div className="absolute -inset-2 rounded-full border border-purple-500/30 animate-pulse"></div>
            <div className="absolute -inset-4 rounded-full border border-purple-500/10"></div>
          </div>
        </div>

        {/* Content */}
        <div>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            With a BSc in Life Sciences, I discovered that my passion for solving
            problems extended far beyond the lab. Through the{' '}
            <span className="text-purple-400 font-semibold">Shaper Learnership Programme</span>,
            I made the leap into software development — and never looked back.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            I bring a scientist's curiosity and a developer's precision to every
            project I build. I'm comfortable working across frontend and backend,
            always focused on delivering clean, reliable, and usable solutions.
          </p>

          {/* Shaper Review Quote */}
          <blockquote className="border-l-4 border-purple-500 pl-4 mb-8">
            <p className="text-gray-400 italic">
              "Excellent presentation skills, strong analytical ability,
              innovative mindset, and strong leadership skills."
            </p>
            <cite className="text-purple-400 text-sm mt-2 block">— Shaper Review</cite>
          </blockquote>

          {/* Fun Facts */}
          <div className="flex flex-wrap gap-3">
            {facts.map((fact, index) => (
              <span
                key={index}
                className="flex items-center gap-2 bg-purple-900/30 border border-purple-500/30 text-gray-300 px-4 py-2 rounded-full text-sm hover:border-purple-400 transition-colors duration-200"
              >
                <span>{fact.icon}</span>
                <span>{fact.text}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;