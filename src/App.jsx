import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Terminal from './components/Terminal';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 selection:bg-cyan-500/20 selection:text-cyan-300 relative overflow-x-hidden">
      {/* Ambient background glows */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[450px] bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="fixed top-1/3 -right-40 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[170px] pointer-events-none -z-10" />
      <div className="fixed bottom-1/4 -left-40 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[170px] pointer-events-none -z-10" />

      {/* Floating capsule navigation */}
      <Navbar />

      {/* Main page content sections */}
      <main className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Terminal />
        <Contact />
      </main>

      {/* Dynamic tech footer */}
      <Footer />
    </div>
  );
}

export default App;
