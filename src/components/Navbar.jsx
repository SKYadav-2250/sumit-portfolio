import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className="fixed top-4 sm:top-8 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="glass rounded-full px-2 py-2 flex items-center gap-1 shadow-2xl border border-white/5 pointer-events-auto"
      >
        {/* Logo — always visible */}
        <a
          href="#home"
          className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-white/10 rounded-full text-xs font-semibold tracking-wider hover:bg-white/20 transition-colors"
        >
          SK
        </a>

        <div className="w-px h-5 bg-white/10 mx-1 sm:mx-2" />

        {/* Mobile: only Projects + Contact. Desktop: all 4 */}
        <div className="flex items-center">
          {/* Hidden on mobile */}
          <a href="#home"    className="hidden sm:block px-3 py-1.5 text-xs text-textMuted hover:text-white hover:bg-white/5 rounded-full transition-all whitespace-nowrap">Home</a>
          <a href="#resume"  className="hidden sm:block px-3 py-1.5 text-xs text-textMuted hover:text-white hover:bg-white/5 rounded-full transition-all whitespace-nowrap">About</a>
          {/* Always visible */}
          <a href="#projects" className="px-2.5 sm:px-3 py-1.5 text-xs text-textMuted hover:text-white hover:bg-white/5 rounded-full transition-all whitespace-nowrap">Projects</a>
          <a href="#contact"  className="px-2.5 sm:px-3 py-1.5 text-xs text-textMuted hover:text-white hover:bg-white/5 rounded-full transition-all whitespace-nowrap">Contact</a>
        </div>

        <div className="w-px h-5 bg-white/10 mx-1 sm:mx-2" />

        {/* Say hi — abbreviated on mobile */}
        <a
          href="mailto:skyadav225075@gmail.com"
          className="flex-shrink-0 px-2.5 sm:px-4 py-1.5 text-xs font-medium text-white hover:opacity-80 transition-opacity whitespace-nowrap"
        >
          <span className="hidden sm:inline">Say hi ↗</span>
          <span className="sm:hidden">Hi ↗</span>
        </a>
      </motion.div>
    </nav>
  );
};

export default Navbar;
