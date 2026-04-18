import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 sm:py-32 flex flex-col items-center justify-center text-center mt-16 sm:mt-20 relative"
    >
      {/* Background soft glow — w-full prevents overflow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[90vw] sm:max-w-[600px] h-[200px] sm:h-[300px] bg-white/5 rounded-[100%] blur-[80px] sm:blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full px-4"
      >
        <p className="text-xs sm:text-sm tracking-widest uppercase text-textMuted mb-5 sm:mb-6 flex items-center justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Available for opportunities
        </p>

        <h2 className="text-4xl sm:text-6xl md:text-8xl font-light mb-8 sm:mb-12 tracking-tight leading-tight">
          Let's work <br />
          <span className="font-serif italic text-white/90">together</span>
        </h2>

        {/* Contact links — stacked on mobile, row on sm+ */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <a
            href="mailto:skyadav225075@gmail.com"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-border bg-white/5 hover:bg-white/10 transition-colors text-sm tracking-widest uppercase text-white"
          >
            Email
          </a>
          <a
            href="https://linkedin.com/in/sumit-kumar-yadav-7094b2296"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-border bg-white/5 hover:bg-white/10 transition-colors text-sm tracking-widest uppercase text-white"
          >
            LinkedIn
          </a>
          <a
            href="/Sumit_resume.pdf"
            download="Sumit_resume.pdf"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-black hover:bg-white/90 transition-colors text-sm tracking-widest uppercase font-medium"
          >
            Download CV
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
