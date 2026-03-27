import React from 'react';
import { GitBranch, Mail } from 'lucide-react';

const LinkedInIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <p className="text-purple-400 text-sm tracking-widest uppercase mb-2 font-mono">
          Contact
        </p>
        <h2 className="text-4xl md:text-5xl font-black mb-6">
          Let's <span className="text-amber-400">Connect</span>
        </h2>
        <p className="text-gray-400 text-lg mb-16 max-w-xl">
          I'm open to opportunities, collaborations, and conversations.
          Let's build something great together.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            <a
              href="https://github.com/211Grace"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 bg-white/5 border border-white/10 hover:border-purple-500/40 rounded-2xl p-6 transition-all duration-200 group"
            >
              <div className="w-12 h-12 bg-purple-900/40 rounded-xl flex items-center justify-center group-hover:bg-purple-900/60 transition-colors duration-200">
                <GitBranch size={24} className="text-purple-400" />
              </div>
              <div>
                <p className="text-white font-bold">GitHub</p>
                <p className="text-gray-400 text-sm font-mono">github.com/211Grace</p>
              </div>
            </a>

            <a
              href="mailto:gumedegracem@gmail.com"
              className="flex items-center gap-4 bg-white/5 border border-white/10 hover:border-purple-500/40 rounded-2xl p-6 transition-all duration-200 group"
            >
              <div className="w-12 h-12 bg-purple-900/40 rounded-xl flex items-center justify-center group-hover:bg-purple-900/60 transition-colors duration-200">
                <Mail size={24} className="text-purple-400" />
              </div>
              <div>
                <p className="text-white font-bold">Email</p>
                <p className="text-gray-400 text-sm font-mono">gumedegracem@gmail.com</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/musa-gumede-1a6416158/"  
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 bg-white/5 border border-white/10 hover:border-purple-500/40 rounded-2xl p-6 transition-all duration-200 group"
            >
              <div className="w-12 h-12 bg-purple-900/40 rounded-xl flex items-center justify-center group-hover:bg-purple-900/60 transition-colors duration-200">
                <span className="text-purple-400">
                  <LinkedInIcon />
                </span>
              </div>
              <div>
                <p className="text-white font-bold">LinkedIn</p>
                <p className="text-gray-400 text-sm font-mono">linkedin.com/in/musa-gumede</p>  {/* Replace with your actual LinkedIn username */}
              </div>
            </a>
          </div>

          <div className="bg-white/5 border border-amber-500/20 rounded-2xl p-8">
            <p className="text-amber-400 text-xs tracking-widest uppercase font-mono mb-4">
              ⚡ Fun Fact
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I collect memories more than things and give people nicknames they never asked for.
            </p>
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-gray-500 text-sm font-mono">📍 Based in South Africa</p>
              <p className="text-gray-500 text-sm font-mono mt-1">🎓 BSc Life Sciences → Full-Stack Developer</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-sm font-mono">
          © 2026 Musa Gumede. Built with passion & code.
        </p>
        <p className="text-gray-500 text-sm font-mono">
          Made in 🇿🇦 South Africa
        </p>
      </div>
    </section>
  );
};

export default Contact;