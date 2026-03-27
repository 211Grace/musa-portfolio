import React from 'react';
import { ExternalLink, GitBranch } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'HubCafe ☕',
      status: 'Complete',
      statusColor: 'text-green-400 border-green-400/40 bg-green-900/20',
      description:
        'A modern coffee shop website with a dynamic daily specials generator, full menu display, and a warm overview of the café experience.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      liveUrl: 'https://hubcafe.vercel.app',
      githubUrl: 'https://github.com/211Grace',
    },
    {
      title: 'SavorSync 🍽️',
      status: 'In Progress',
      statusColor: 'text-amber-400 border-amber-400/40 bg-amber-900/20',
      description:
        'A multi-sensory culinary experience platform combining recipes, music, and food science — frontend complete, backend in development.',
      tech: ['Angular 16', 'TypeScript', 'Tailwind'],
      liveUrl: 'https://savor-sync-nine.vercel.app',
      githubUrl: 'https://github.com/211Grace',
    },
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-purple-400 text-sm tracking-widest uppercase mb-2 font-mono">
          Projects
        </p>
        <h2 className="text-4xl md:text-5xl font-black mb-16">
          Things I've <span className="text-amber-400">Built</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-purple-500/40 transition-all duration-300 hover:bg-white/8 group"
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-black text-white group-hover:text-purple-300 transition-colors duration-200">
                  {project.title}
                </h3>
                <span className={`text-xs font-mono px-3 py-1 rounded-full border ${project.statusColor}`}>
                  {project.status}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs font-mono text-purple-300 bg-purple-900/30 px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200 hover:scale-105"
                >
                  <ExternalLink size={14} />
                  Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 border border-gray-600 hover:border-purple-400 text-gray-300 hover:text-purple-400 px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200"
                >
                  <GitBranch size={14} />
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;