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
    <section
      id="home"
      className="min-h-[100svh] flex flex-col justify-center items-center text-center px-4 pt-28 pb-12 sm:pt-32 sm:pb-0"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl"
      >
        <p className="text-textMuted tracking-widest uppercase text-xs sm:text-sm mb-4 sm:mb-6">
          March 2026 — Present
        </p>

        {/* Name */}
        <h1 className="text-[2.6rem] leading-tight sm:text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-4 sm:mb-6">
          Sumit{' '}
          <span className="font-serif italic text-white/90">Kumar</span> Yadav
        </h1>

        {/* Animated role */}
        <div className="text-base sm:text-xl md:text-3xl font-light text-slate-300 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 mb-7 sm:mb-10">
          <span>A</span>
          <div className="relative h-[22px] sm:h-[40px] w-[210px] sm:w-[280px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={roles[roleIndex]}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 font-serif italic text-white text-center"
              >
                {roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
          <span>based in India.</span>
        </div>

        {/* Description */}
        <p className="text-textMuted max-w-xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed mb-8 sm:mb-12 px-2 sm:px-0">
          I design and build robust mobile applications and scalable backend
          systems. Transforming complex problems into elegant, real-world
          solutions through clean architecture and design thinking.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-full border border-border bg-white/5 hover:bg-white/10 transition-colors text-sm tracking-wide text-white"
          >
            See Works
          </a>
          <a
            href="/Sumit_Resume.pdf"
            download="Sumit_Resume.pdf"
            className="w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-full bg-white text-black hover:bg-white/90 transition-colors text-sm tracking-wide font-medium"
          >
            Download CV
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
