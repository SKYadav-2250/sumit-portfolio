import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="glass rounded-full px-2 py-2 flex items-center gap-1 sm:gap-2 shadow-2xl max-w-[95vw] overflow-x-auto no-scrollbar border border-white/5"
      >
        <a href="#home" className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-white/10 rounded-full text-sm font-semibold tracking-wider hover:bg-white/20 transition-colors">
          SK
        </a>
        
        <div className="w-px h-6 bg-border mx-2"></div>
        
        <div className="flex items-center gap-1 px-2">
          {['Home', 'About', 'Resume', 'Projects'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="px-3 py-2 text-xs sm:text-sm text-textMuted hover:text-white hover:bg-white/5 rounded-full transition-all whitespace-nowrap"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="w-px h-6 bg-border mx-2"></div>

        <a
          href="mailto:skyadav225075@gmail.com"
          className="flex-shrink-0 px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium text-white hover:opacity-80 transition-opacity flex items-center gap-2 whitespace-nowrap"
        >
          Say hi ↗
        </a>
      </motion.div>
    </nav>
  );
};

export default Navbar;
