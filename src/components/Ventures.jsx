import React from 'react';
import { ExternalLink } from 'lucide-react';

const Ventures = () => {
  return (
    <section id="ventures" className="py-24 px-6 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <p className="text-purple-400 text-sm tracking-widest uppercase mb-2 font-mono">
          Ventures
        </p>
        <h2 className="text-4xl md:text-5xl font-black mb-16">
          Beyond <span className="text-amber-400">Code</span>
        </h2>

        {/* iTalkaMedia Card */}
        <div className="relative rounded-2xl p-1 bg-gradient-to-br from-amber-500/40 via-purple-500/20 to-amber-500/10">
          <div className="bg-[#0a0a0f] rounded-2xl p-10 md:p-14 relative overflow-hidden">

            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500/10 rounded-tr-full"></div>

            {/* Amber glow */}
            <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              {/* Company name and badge */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                  iTalka<span className="text-amber-400">Media</span>
                </h3>
                <span className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/50 text-amber-400 px-4 py-2 rounded-full text-sm font-bold w-fit">
                  👑 Co-Founder
                </span>
              </div>

              {/* Tagline */}
              <p className="text-gray-300 text-xl italic mb-4">
                "The voice of your digital identity"
              </p>

              {/* Description */}
              <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-2xl">
                Co-founded a full-service web solutions agency offering web
                development, SEO, e-commerce, social media marketing, and
                hosting services — helping businesses stand out online.
              </p>

              {/* Visit Site Button */}
              <a
                href="https://italkamedia.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-400 text-black font-black px-8 py-4 rounded-xl text-lg transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/25"
              >
                <ExternalLink size={20} />
                Visit Site
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ventures;