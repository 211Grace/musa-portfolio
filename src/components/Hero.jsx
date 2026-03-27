import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Turning curiosity into commits.';

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setDisplayText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>
      <div className="absolute inset-0 z-0 opacity-5" style={{backgroundImage: 'linear-gradient(#7c3aed 1px, transparent 1px), linear-gradient(90deg, #7c3aed 1px, transparent 1px)', backgroundSize: '50px 50px'}}></div>
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <p className="text-gray-500 text-sm tracking-widest uppercase mb-4 font-mono">Hello, World — I'm</p>
        <h1 className="text-7xl md:text-9xl font-black mb-2 leading-none">
          <span className="text-purple-400">Musa</span>
        </h1>
        <h1 className="text-7xl md:text-9xl font-black mb-8 leading-none">
          <span className="text-white">Gumede</span>
        </h1>
        <p className="text-amber-400 text-xl md:text-2xl font-bold mb-4 tracking-wide">Junior Full-Stack Developer</p>
        <p className="text-gray-400 text-lg mb-12 font-mono min-h-[28px]">
          {displayText}<span className="animate-pulse">|</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button onClick={() => scrollTo('projects')} className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-bold transition-all duration-200 hover:scale-105">
            View Projects ↓
          </button>
          <button onClick={() => scrollTo('resume')} className="border border-gray-600 hover:border-purple-400 text-gray-300 hover:text-purple-400 px-8 py-4 rounded-lg font-bold transition-all duration-200 hover:scale-105">
            Download Resume ↓
          </button>
        </div>
        <a href="https://github.com/211Grace" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-gray-500 hover:text-purple-400 transition-colors duration-200">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          <span className="text-sm font-mono">github.com/211Grace</span>
        </a>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-purple-400 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;