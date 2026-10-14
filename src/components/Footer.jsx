import React from 'react';
import { ArrowUp, Heart, Terminal, Sparkles, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-white/10 mt-20 relative bg-[#02050f]/80 backdrop-blur-md overflow-hidden">
      {/* Infinite Tech Marquee */}
      <div className="w-full border-b border-white/5 py-3 overflow-hidden flex whitespace-nowrap bg-black/40">
        <div className="animate-marquee flex gap-8 whitespace-nowrap text-[11px] font-mono tracking-widest text-cyan-400/80 uppercase">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="flex items-center gap-6">
              <span>FLUTTER & MOBILE APPS</span>
              <span className="text-white/20">•</span>
              <span>AWS CLOUD INFRASTRUCTURE</span>
              <span className="text-white/20">•</span>
              <span>INDUSTRIAL IOT & MODBUS TCP</span>
              <span className="text-white/20">•</span>
              <span>REAL-TIME WEBSOCKETS</span>
              <span className="text-white/20">•</span>
              <span>CLEAN ARCHITECTURE & BLOC</span>
              <span className="text-white/20">•</span>
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-14">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand Info */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-1.5">
              <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-cyan-400 to-violet-500 flex items-center justify-center text-[10px] font-bold text-slate-950 font-heading">
                SK
              </div>
              <span className="text-base font-bold text-white font-heading tracking-wide">
                Sumit Kumar Yadav
              </span>
            </div>
            <p className="text-xs text-slate-400 font-mono">
              Full-Stack & Flutter Engineer • Industrial IoT Developer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/SKYadav-2250"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full glass-panel border-white/10 text-slate-400 hover:text-white hover:border-cyan-500/40 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={16} />
            </a>
            <a
              href="https://linkedin.com/in/sumit-kumar-yadav-7094b2296"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full glass-panel border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={16} />
            </a>
            <a
              href="mailto:skyadav225075@gmail.com"
              className="p-2.5 rounded-full glass-panel border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full glass-panel border-white/10 text-cyan-400 hover:text-white hover:border-cyan-400 transition-colors"
              title="Back to Top"
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 font-mono text-center sm:text-left">
          <p>© {currentYear} Sumit Kumar Yadav. Designed & engineered with passion.</p>
          <div className="flex items-center gap-2 text-emerald-400/90 text-[11px]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Telemetry: Normal (All Systems Operational)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
