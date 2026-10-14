import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, ExternalLink, Sparkles, Terminal, Code2, Briefcase, User, Mail, FolderGit2 } from 'lucide-react';

const navItems = [
  { name: 'About', href: '#about', icon: User },
  { name: 'Skills', href: '#skills', icon: Code2 },
  { name: 'Projects', href: '#projects', icon: FolderGit2 },
  { name: 'Experience', href: '#experience', icon: Briefcase },
  { name: 'Terminal', href: '#terminal', icon: Terminal },
  { name: 'Contact', href: '#contact', icon: Mail },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Simple active section detection
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'terminal', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 sm:pt-6 pointer-events-none">
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-auto flex items-center justify-between gap-2 sm:gap-4 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full transition-all duration-300 ${
            scrolled
              ? 'glass-nav shadow-[0_8px_32px_rgba(0,0,0,0.5)] border-cyan-500/20'
              : 'glass-panel border-white/10'
          }`}
        >
          {/* Logo / Brand */}
          <a
            href="#home"
            className="flex items-center gap-2 group pl-1"
          >
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-tr from-cyan-500 to-violet-600 p-[1px] transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-[#070b16] rounded-full flex items-center justify-center font-bold text-xs sm:text-sm text-cyan-300 font-heading tracking-wider">
                SK
              </div>
            </div>
            <div className="hidden md:flex flex-col text-left">
              <span className="text-xs font-semibold text-white tracking-wide font-heading">
                Sumit Yadav
              </span>
              <span className="text-[10px] text-cyan-400 font-mono flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 px-2 border-l border-r border-white/10">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? 'text-cyan-300 bg-cyan-500/10'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon size={13} className={isActive ? 'text-cyan-400' : 'text-slate-500'} />
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 rounded-full border border-cyan-500/30 pointer-events-none"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Mobile shortcuts */}
          <div className="flex lg:hidden items-center gap-1">
            <a
              href="#projects"
              className="px-2.5 py-1 text-xs text-slate-300 hover:text-white rounded-full hover:bg-white/5"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="px-2.5 py-1 text-xs text-slate-300 hover:text-white rounded-full hover:bg-white/5"
            >
              Contact
            </a>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-2">
            <a
              href="/Sumit_Resume.pdf"
              download="Sumit_Resume.pdf"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/40 rounded-full transition-all duration-200"
              title="Download Sumit's Resume"
            >
              <Download size={13} className="text-cyan-400" />
              <span>Resume</span>
            </a>

            <a
              href="mailto:skyadav225075@gmail.com"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-white rounded-full shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-200 hover:scale-[1.03]"
            >
              <Sparkles size={13} className="text-slate-950" />
              <span>Hire Me</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-white rounded-full hover:bg-white/10 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </motion.div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-20 z-40 lg:hidden glass-panel border border-cyan-500/20 rounded-2xl p-5 shadow-2xl backdrop-blur-2xl"
          >
            <div className="flex flex-col gap-2">
              <div className="px-3 py-2 text-xs font-mono uppercase tracking-wider text-cyan-400 flex items-center justify-between border-b border-white/10 pb-3">
                <span>Navigation</span>
                <span className="flex items-center gap-1.5 text-emerald-400 text-[10px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Available for Hire
                </span>
              </div>
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:text-cyan-300 hover:bg-cyan-500/10 transition-colors"
                  >
                    <Icon size={16} className="text-cyan-400" />
                    <span>{item.name}</span>
                  </a>
                );
              })}
              <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
                <a
                  href="/Sumit_Resume.pdf"
                  download="Sumit_Resume.pdf"
                  className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-medium text-slate-200 bg-white/5 border border-white/10 rounded-xl"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Download size={14} className="text-cyan-400" />
                  Download CV (PDF)
                </a>
                <a
                  href="mailto:skyadav225075@gmail.com"
                  className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Sparkles size={14} />
                  Get in Touch
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
