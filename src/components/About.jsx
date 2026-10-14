import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Server, Cpu, ShieldCheck, MapPin, GraduationCap, Award, Compass, Code, Layers } from 'lucide-react';

const pillars = [
  {
    icon: Smartphone,
    title: "Mobile App Mastery",
    tech: "Flutter • Dart • BLoC • Play Store",
    desc: "Architecting high-performance mobile apps with reactive state management, fluid 60fps animations, offline-first SQLite/Hive caching, and Google Play deployments.",
    color: "from-cyan-500/20 to-cyan-500/0",
    border: "border-cyan-500/30",
    iconColor: "text-cyan-400",
  },
  {
    icon: Server,
    title: "Full-Stack & Cloud Systems",
    tech: "Node.js • React • AWS • WebSockets",
    desc: "Designing resilient backend architectures, authenticated REST APIs, and bi-directional real-time data streaming over WebSockets and Firebase Cloud Messaging.",
    color: "from-violet-500/20 to-violet-500/0",
    border: "border-violet-500/30",
    iconColor: "text-violet-400",
  },
  {
    icon: Cpu,
    title: "Industrial IoT & Automation",
    tech: "Modbus TCP • PLCs • VPN • Telemetry",
    desc: "Connecting heavy industrial equipment to the cloud at PCS. Handling Modbus TCP protocols, remote industrial routers, VPN security, and real-time machine telemetry.",
    color: "from-emerald-500/20 to-emerald-500/0",
    border: "border-emerald-500/30",
    iconColor: "text-emerald-400",
  },
  {
    icon: ShieldCheck,
    title: "Engineering Excellence",
    tech: "Clean Architecture • Git • CI/CD",
    desc: "Writing maintainable, self-documenting code with rigorous separation of concerns, testable modular layers, and dependable error boundaries.",
    color: "from-amber-500/20 to-amber-500/0",
    border: "border-amber-500/30",
    iconColor: "text-amber-400",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 sm:py-28 relative">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-left mb-12 sm:mb-16"
      >
        <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-2">
          <Layers size={14} />
          <span>// About Sumit</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-heading">
          Driven by Problem Solving, <br className="hidden sm:inline" />
          <span className="gradient-text">Engineered for Real-World Impact</span>
        </h2>
      </motion.div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Narrative Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-5 glass-panel rounded-3xl p-6 sm:p-8 border-white/10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-500 to-violet-600 p-[1.5px]">
              <div className="w-full h-full bg-[#060a17] rounded-2xl flex items-center justify-center font-bold text-xl text-cyan-300 font-heading">
                SK
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white font-heading">
                Sumit Kumar Yadav
              </h3>
              <p className="text-xs text-cyan-400 font-mono flex items-center gap-1.5 mt-0.5">
                <MapPin size={12} />
                Ludhiana, Punjab, India
              </p>
            </div>
          </div>

          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p>
              I am a <strong className="text-white font-semibold">Full-Stack & Flutter Developer</strong> pursuing my B.Tech in Computer Science at <span className="text-cyan-300">PCTE Group of Institutes</span> (Graduating 2026).
            </p>
            <p>
              At <strong className="text-white font-semibold">PCS (Power & Control Solution)</strong>, I engineer an end-to-end industrial automation platform uniting Flutter dashboards with Node.js microservices to monitor industrial PLCs across the globe via Modbus TCP and industrial VPN routers.
            </p>
            <p>
              Whether crafting snappy mobile interfaces for apps on Google Play (like <span className="text-white">Ophiz</span>) or real-time messaging ecosystems (like <span className="text-white">TellMe</span>), my focus is always on <strong className="text-cyan-300">clean architecture, bulletproof uptime, and delightful user experience</strong>.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 gap-4 text-left">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                Education
              </span>
              <p className="text-xs font-semibold text-white flex items-center gap-1.5">
                <GraduationCap size={14} className="text-cyan-400" />
                B.Tech CSE (2022–2026)
              </p>
              <p className="text-[11px] text-slate-400">PCTE Group of Institutes</p>
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                Focus Areas
              </span>
              <p className="text-xs font-semibold text-white flex items-center gap-1.5">
                <Award size={14} className="text-cyan-400" />
                Mobile & Industrial IoT
              </p>
              <p className="text-[11px] text-slate-400">Cloud & Full Stack Web</p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: 4 Core Pillars Bento */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className={`p-6 rounded-3xl glass-panel bg-gradient-to-br ${pillar.color} border ${pillar.border} transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-2xl bg-white/5 border border-white/10 ${pillar.iconColor} group-hover:scale-110 transition-transform`}>
                      <Icon size={20} />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                      Pillar 0{idx + 1}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white font-heading mb-1.5">
                    {pillar.title}
                  </h4>
                  <p className="text-xs font-mono text-cyan-400 mb-3">
                    {pillar.tech}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
