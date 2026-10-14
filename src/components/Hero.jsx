import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Download, Mail, Sparkles, Terminal, Activity, Smartphone, Server, Cpu, CheckCircle2 } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import GalaxyBackground from './GalaxyBackground';

const roles = [
  { title: "Flutter & Mobile Specialist", icon: Smartphone, color: "text-cyan-400" },
  { title: "Full-Stack Web Engineer", icon: Server, color: "text-violet-400" },
  { title: "Industrial IoT & Cloud Architect", icon: Cpu, color: "text-emerald-400" },
];

const metrics = [
  {
    value: "4+",
    label: "Production & Scaled Apps",
    desc: "Flutter, React & Node.js solutions",
    icon: Smartphone,
    color: "from-cyan-500/20 to-blue-500/5",
    border: "border-cyan-500/30",
  },
  {
    value: "100K+",
    label: "Telemetry Packets Handled",
    desc: "Modbus TCP & PLC Industrial IoT",
    icon: Activity,
    color: "from-emerald-500/20 to-teal-500/5",
    border: "border-emerald-500/30",
  },
  {
    value: "100%",
    label: "Google Play Store Deployments",
    desc: "Production BLoC Flutter App (Ophiz)",
    icon: CheckCircle2,
    color: "from-violet-500/20 to-purple-500/5",
    border: "border-violet-500/30",
  },
  {
    value: "15+",
    label: "Core Technologies Mastered",
    desc: "Cloud, Mobile, DBs & Real-Time",
    icon: Cpu,
    color: "from-amber-500/20 to-orange-500/5",
    border: "border-amber-500/30",
  },
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const CurrentRoleIcon = roles[roleIndex].icon;

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex flex-col justify-center items-center pt-28 pb-16 sm:pt-36 sm:pb-20 overflow-hidden"
    >
      <GalaxyBackground />

      <div className="w-full max-w-5xl mx-auto text-center px-4 z-10 flex flex-col items-center">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border-cyan-500/30 text-xs text-slate-300 mb-6 shadow-[0_0_20px_rgba(6,182,212,0.15)]"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="font-mono text-cyan-300 font-medium tracking-wide">
            AVAILABLE FOR ENGINEERING ROLES & PROJECTS
          </span>
          <span className="text-slate-500 hidden sm:inline">•</span>
          <span className="text-slate-400 hidden sm:inline">
            India / Remote
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.08] mb-4 sm:mb-6 font-heading">
            Hi, I'm <br className="sm:hidden" />
            <span className="gradient-text drop-shadow-sm">
              Sumit Kumar Yadav
            </span>
          </h1>
        </motion.div>

        {/* Dynamic Role Switcher */}

        {/* Dynamic Role Switcher */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 flex w-full flex-col items-center justify-center
             gap-1 text-lg font-medium text-slate-200
             sm:flex-row sm:gap-2 sm:text-2xl md:text-3xl"
        >
          <span className="whitespace-nowrap text-slate-400 font-light">
            Specialized in
          </span>

          <div
            className="relative flex h-16 w-full max-w-[340px]
               items-center justify-center overflow-hidden
               sm:h-12 sm:w-[380px] sm:max-w-none"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={roleIndex}
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -15, opacity: 0 }}
                transition={{
                  y: { duration: 0.3, ease: "easeOut" },
                  opacity: { duration: 0.25 },
                }}
                className="absolute inset-0 flex items-center justify-center
                   gap-2 px-3"
              >
                <CurrentRoleIcon
                  size={20}
                  className={`shrink-0 ${roles[roleIndex].color}`}
                />

                <span
                  className={`min-w-0 text-center text-sm font-semibold
                      leading-snug break-words text-balance
                      sm:whitespace-nowrap sm:text-xl
                      md:text-2xl ${roles[roleIndex].color}`}
                >
                  {roles[roleIndex].title}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Short Bio */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-slate-400 leading-relaxed mb-8 sm:mb-10"
        >
          Bridging the gap between{" "}
          <span className="text-slate-200 font-medium">
            fluid mobile experiences
          </span>{" "}
          (Flutter/BLoC),
          <span className="text-slate-200 font-medium">
            {" "}
            resilient cloud backends
          </span>{" "}
          (Node.js/AWS), and
          <span className="text-slate-200 font-medium">
            {" "}
            real-time industrial automation
          </span>{" "}
          (Modbus TCP & PLC telemetry).
        </motion.p>

        {/* Call To Actions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto mb-12 sm:mb-16"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 text-slate-950 font-semibold text-sm tracking-wide shadow-[0_0_25px_rgba(6,182,212,0.35)] hover:shadow-[0_0_35px_rgba(6,182,212,0.5)] transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 group"
          >
            <span>Explore Works</span>
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>

          <a
            href="/Sumit_Resume.pdf"
            download="Sumit_Resume.pdf"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full glass-panel border-white/10 hover:border-cyan-500/40 text-slate-200 hover:text-white font-medium text-sm tracking-wide transition-all duration-300 hover:bg-white/10 flex items-center justify-center gap-2"
          >
            <Download size={16} className="text-cyan-400" />
            <span>Download Resume</span>
          </a>

          <div className="flex items-center gap-2 pt-2 sm:pt-0">
            <a
              href="https://github.com/SKYadav-2250"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full glass-panel border-white/10 hover:border-cyan-500/40 text-slate-400 hover:text-white transition-all hover:scale-110"
              aria-label="GitHub Profile"
              title="GitHub Profile"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://linkedin.com/in/sumit-kumar-yadav-7094b2296"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full glass-panel border-white/10 hover:border-cyan-500/40 text-slate-400 hover:text-cyan-400 transition-all hover:scale-110"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="mailto:skyadav225075@gmail.com"
              className="p-3 rounded-full glass-panel border-white/10 hover:border-cyan-500/40 text-slate-400 hover:text-cyan-400 transition-all hover:scale-110"
              aria-label="Send Email"
              title="Send Direct Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </motion.div>

        {/* Live System Ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full max-w-3xl glass-panel border-white/10 rounded-xl px-4 py-2.5 mb-10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-400"
        >
          <div className="flex items-center gap-2">
            <Terminal size={14} className="text-cyan-400" />
            <span className="text-slate-300">sumit@workstation:~$</span>
            <span className="text-cyan-300">sys.status = "ONLINE"</span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              MODBUS_TCP / CLOUD ACTIVE
            </span>
            <span className="text-slate-500 hidden sm:inline">|</span>
            <span className="text-slate-400 hidden sm:inline">
              LATENCY: 12ms
            </span>
          </div>
        </motion.div>

        {/* Bento Metrics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4"
        >
          {metrics.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`relative overflow-hidden p-4 sm:p-5 rounded-2xl glass-panel bg-gradient-to-br ${item.color} border ${item.border} text-left transition-all duration-300 hover:scale-[1.02] group`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl sm:text-3xl font-bold font-heading text-white tracking-tight">
                    {item.value}
                  </span>
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-cyan-400 group-hover:scale-110 transition-transform">
                    <Icon size={16} />
                  </div>
                </div>
                <h4 className="text-xs sm:text-sm font-semibold text-slate-200 mb-1">
                  {item.label}
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-400 line-clamp-1">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
