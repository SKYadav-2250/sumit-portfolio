import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2, ChevronRight, Layers } from 'lucide-react';

const experiences = [
  {
    role: "Flutter & Backend Developer | Industrial IoT",
    company: "PCS (Power & Control Solution)",
    period: "2025 — Present",
    status: "Active Position",
    location: "Ludhiana, India",
    description: "Architecting the PCS industrial automation platform using Flutter, Node.js, and AWS to monitor industrial PLCs and smart machinery across the globe in real-time.",
    achievements: [
      "Engineered Modbus TCP communication pipelines to poll and write holding registers with <50ms local telemetry latency.",
      "Established encrypted VPN connectivity and industrial gateway routing for continuous data transmission.",
      "Built cross-platform Flutter application providing factory operators with live telemetry gauges, graphs, and critical threshold alarms.",
      "Integrated AWS cloud backend services for distributed multi-tenant machine telemetry and historical audit logging."
    ],
    tech: ["Flutter", "Node.js", "AWS Cloud", "Modbus TCP", "Industrial VPN", "WebSockets"],
    active: true,
  },
  {
    role: "Web Developer",
    company: "KN Enterprises",
    period: "2026",
    status: "Client Project",
    location: "Remote / Hybrid",
    description: "Architected and deployed the comprehensive digital presence and web application suite for KN Enterprises.",
    achievements: [
      "Designed and developed fully responsive, high-aesthetic web interfaces with tailored modern design systems.",
      "Engineered backend integration for client inquiries and automated service delivery tracking.",
      "Optimized SEO performance and asset load speeds, achieving high Core Web Vitals scores."
    ],
    tech: ["React.js", "Tailwind CSS", "Node.js", "REST APIs", "Modern Web Architecture"],
    active: false,
  },
  {
    role: "Flutter Developer Intern",
    company: "TerraBiz Tech Pvt Ltd",
    period: "2025",
    status: "Completed",
    location: "India",
    description: "Core mobile developer contributing to Ophiz, a commercial production application published on the Google Play Store.",
    achievements: [
      "Implemented reactive, predictable state management using the BLoC pattern for zero UI stutters.",
      "Integrated multi-endpoint RESTful APIs, JSON serialization, and persistent offline token caching.",
      "Handled Google Play Console release management, testing tracks, and app bundle optimizations."
    ],
    tech: ["Flutter", "Dart", "BLoC Pattern", "Google Play Store", "REST APIs"],
    active: false,
  },
  {
    role: "Web Developer Intern",
    company: "Excellence Group of Institute",
    period: "2024",
    status: "Completed",
    location: "India",
    description: "Built and deployed interactive student and portal interfaces, enhancing engagement and administrative workflows.",
    achievements: [
      "Engineered modular React components and responsive styling, driving a 40% measurable increase in user engagement.",
      "Integrated Node.js backend routines for instant form submissions and event notifications.",
      "Collaborated with cross-functional teams to modernize legacy codebases."
    ],
    tech: ["React.js", "Node.js", "JavaScript", "CSS3", "Express"],
    active: false,
  },
];

const education = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "PCTE Group of Institutes",
    period: "2022 — 2026",
    status: "Final Year",
    location: "Punjab, India",
    description: "Deep dive into Data Structures, Algorithms, Distributed Computing, Database Management, and Software Architecture.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 sm:py-28 relative">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-left mb-12 sm:mb-16"
      >
        <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-2">
          <Briefcase size={14} />
          <span>// Career & Education</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-heading">
          Professional Journey & <br className="hidden sm:inline" />
          <span className="gradient-text">Practical Experience</span>
        </h2>
        <p className="text-slate-400 max-w-xl text-sm sm:text-base mt-2">
          A track record of engineering software solutions from fast-paced startups to heavy industrial automation systems.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Timeline Column */}
        <div className="lg:col-span-8 space-y-6 sm:space-y-8 relative">
          {/* Vertical timeline trace line */}
          <div className="absolute top-4 bottom-4 left-4 sm:left-6 w-px bg-gradient-to-b from-cyan-400 via-violet-500 to-transparent hidden sm:block" />

          {experiences.map((exp, idx) => (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              key={idx}
              className={`relative pl-0 sm:pl-14 group`}
            >
              {/* Timeline Node Dot */}
              <div className="hidden sm:flex absolute left-4 sm:left-6 -translate-x-1/2 top-6 w-3 h-3 rounded-full border-2 border-cyan-400 bg-[#030712] group-hover:scale-125 transition-transform">
                {exp.active && (
                  <span className="animate-ping absolute inset-0 rounded-full bg-cyan-400 opacity-75" />
                )}
              </div>

              {/* Card Container */}
              <div className={`p-6 sm:p-7 rounded-3xl glass-panel border ${
                exp.active ? 'border-cyan-500/40 shadow-[0_0_25px_rgba(6,182,212,0.1)]' : 'border-white/10'
              } transition-all duration-300 hover:border-cyan-500/50 hover:scale-[1.01]`}>
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white font-heading group-hover:text-cyan-300 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold text-cyan-400 flex items-center gap-2 mt-0.5">
                      <span>{exp.company}</span>
                      <span className="text-slate-500">•</span>
                      <span className="text-xs font-mono text-slate-400 font-normal">{exp.location}</span>
                    </p>
                  </div>

                  <div className="flex items-center gap-2 self-start sm:self-auto">
                    {exp.active && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                        Present
                      </span>
                    )}
                    <span className="px-3 py-1 rounded-full text-xs font-mono text-slate-300 bg-white/5 border border-white/10">
                      {exp.period}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-2 mb-5">
                  {exp.achievements.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400">
                      <ChevronRight size={14} className="text-cyan-400 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-white/5 text-slate-300 border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education & Academic Highlights Column */}
        <div className="lg:col-span-4 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 sm:p-7 rounded-3xl glass-panel border-white/10 relative overflow-hidden"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <GraduationCap size={22} />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400">
                  Academic Degree
                </span>
                <h4 className="text-lg font-bold text-white font-heading">
                  Education
                </h4>
              </div>
            </div>

            {education.map((edu, idx) => (
              <div key={idx} className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-cyan-300 font-semibold">
                    {edu.degree}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    {edu.period}
                  </span>
                </div>
                <p className="text-sm font-medium text-slate-200">
                  {edu.institution}
                </p>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            ))}

            <div className="mt-6 pt-5 border-t border-white/10">
              <h5 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                Key Academic Coursework
              </h5>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "Data Structures",
                  "Algorithms",
                  "Operating Systems",
                  "Database Systems",
                  "Software Engineering",
                  "Computer Networks",
                ].map((course) => (
                  <span
                    key={course}
                    className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-white/5 text-slate-300"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Resume Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 sm:p-7 rounded-3xl glass-panel bg-gradient-to-br from-cyan-500/15 to-violet-500/5 border border-cyan-500/30 relative overflow-hidden text-left"
          >
            <h4 className="text-lg font-bold text-white font-heading mb-2">
              Want the full résumé?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
              Get an offline copy detailing my full employment history, university credentials, and technical project references.
            </p>
            <a
              href="/Sumit_Resume.pdf"
              download="Sumit_Resume.pdf"
              className="inline-flex items-center justify-center gap-2 w-full py-3 px-5 rounded-2xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold text-xs tracking-wide shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all"
            >
              <span>Download PDF Résumé</span>
              <span>↓</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
