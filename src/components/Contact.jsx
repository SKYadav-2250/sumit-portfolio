import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-32 flex flex-col items-center justify-center text-center mt-20 relative">

      {/* Background soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-white/5 rounded-[100%] blur-[120px] pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full"
      >
        <p className="text-sm tracking-widest uppercase text-textMuted mb-6 flex items-center justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          Available for opportunities
        </p>

        <h2 className="text-6xl md:text-8xl font-light mb-12 tracking-tight">
          Let's work <br />
          <span className="font-serif italic text-white/90">together</span>
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-lg font-medium">
          <a
            href="mailto:skyadav225075@gmail.com"
            className="hover:text-white text-slate-400 transition-colors uppercase tracking-widest text-sm relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-white hover:after:w-full after:transition-all after:duration-300"
          >
            Email
          </a>
          <div className="w-1 h-1 rounded-full bg-border hidden sm:block"></div>
          <a
            href="https://linkedin.com/in/sumit-kumar-yadav-7094b2296"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white text-slate-400 transition-colors uppercase tracking-widest text-sm relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-white hover:after:w-full after:transition-all after:duration-300"
          >
            LinkedIn
          </a>
          <div className="w-1 h-1 rounded-full bg-border hidden sm:block"></div>
          <a
            href="/Sumit_CV.pdf"
            download="Sumit_CV.pdf"
            className="hover:text-white text-slate-400 transition-colors uppercase tracking-widest text-sm relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-white hover:after:w-full after:transition-all after:duration-300"
          >
            Download CV
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
