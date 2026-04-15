import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const roles = ["Flutter Developer", "Full Stack Engineer", "Problem Solver"];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-[90vh] flex flex-col justify-center items-center text-center pt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl"
      >
        <p className="text-textMuted tracking-widest uppercase text-sm mb-6">March 2026 — Present</p>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-6">
          Sumit <span className="font-serif italic text-white/90">Kumar</span> Yadav
        </h1>

        <div className="text-xl md:text-3xl font-light text-slate-300 flex items-center justify-center gap-2 mb-10">
          A 
          <div className="relative h-[40px] overflow-hidden min-w-[280px]">
            <AnimatePresence mode="wait">
              <motion.span
                key={roles[roleIndex]}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 font-serif italic text-white"
              >
                {roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
          based in India.
        </div>

        <p className="text-textMuted max-w-2xl mx-auto text-lg leading-relaxed mb-12">
          I design and build robust mobile applications and scalable backend systems. Transforming complex problems into elegant, real-world solutions through clean architecture and design thinking.
        </p>

        <div className="flex items-center justify-center gap-6">
          <a
            href="#projects"
            className="px-8 py-4 rounded-full border border-border bg-white/5 hover:bg-white/10 transition-colors text-sm tracking-wide text-white"
          >
            See Works
          </a>
          <a
            href="/Sumit_CV.pdf"
            download="Sumit_CV.pdf"
            className="px-8 py-4 rounded-full bg-white text-black hover:bg-white/90 transition-colors text-sm tracking-wide font-medium"
          >
            Download CV
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
