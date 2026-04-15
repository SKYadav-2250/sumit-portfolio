import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-background text-textMain selection:bg-white/20 selection:text-white"
         style={{ overflowX: 'hidden', maxWidth: '100vw' }}>

      {/* Subtle top-glow — capped to 100% width so it never overflows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[300px] bg-sky-900/20 rounded-[100%] blur-[120px] pointer-events-none" />

      <Navbar />

      <main className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      {/* Marquee Footer */}
      <div className="w-full border-t border-border py-4 mt-20 overflow-hidden flex whitespace-nowrap opacity-50">
        <div className="animate-marquee flex gap-8 whitespace-nowrap text-sm tracking-widest uppercase">
          {[...Array(10)].map((_, i) => (
            <span key={i}>BUILDING THE FUTURE • SCALABLE SOLUTIONS • CREATIVE DESIGN •</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
