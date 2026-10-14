import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, Server, Cpu, Database, Code2, Wrench, CheckCircle, Sparkles, Layers } from 'lucide-react';

const categories = [
  { id: 'all', label: 'All Technologies' },
  { id: 'mobile', label: 'Mobile Engineering', icon: Smartphone },
  { id: 'fullstack', label: 'Full-Stack & Web', icon: Server },
  { id: 'iot', label: 'Industrial IoT & Cloud', icon: Cpu },
  { id: 'database', label: 'Databases & Tools', icon: Database },
];

const skillList = [
  // Mobile
  {
    name: 'Flutter',
    category: 'mobile',
    level: 'Advanced',
    exp: 'Production Experience',
    desc: 'Cross-platform mobile UI architecture, custom paint, native channels, 60fps rendering',
    tags: ['Cross-Platform', 'Mobile', 'UI/UX'],
    color: 'from-cyan-500/20 to-blue-500/5',
    border: 'border-cyan-500/30',
  },
  {
    name: 'Dart',
    category: 'mobile',
    level: 'Advanced',
    exp: 'Core Language',
    desc: 'Asynchronous streams, isolates, OOP, null safety, sound type systems',
    tags: ['Async', 'Streams', 'OOP'],
    color: 'from-blue-500/20 to-cyan-500/5',
    border: 'border-blue-500/30',
  },
  {
    name: 'BLoC Pattern',
    category: 'mobile',
    level: 'Advanced',
    exp: 'Enterprise Architecture',
    desc: 'Event-driven, testable reactive state management for scalable apps like Ophiz',
    tags: ['State Management', 'Reactive', 'Architecture'],
    color: 'from-violet-500/20 to-purple-500/5',
    border: 'border-violet-500/30',
  },
  {
    name: 'Provider / Riverpod',
    category: 'mobile',
    level: 'Proficient',
    exp: 'Production Apps',
    desc: 'Scoped state injection, ChangeNotifier lifecycle, lightweight reactive state',
    tags: ['State Management', 'DI', 'Clean Code'],
    color: 'from-cyan-500/20 to-teal-500/5',
    border: 'border-cyan-500/30',
  },
  {
    name: 'Google Play Release',
    category: 'mobile',
    level: 'Proficient',
    exp: 'Live Store Apps',
    desc: 'App bundle signing, release tracks, permissions, privacy policy compliance',
    tags: ['Deployment', 'CI/CD', 'App Store'],
    color: 'from-emerald-500/20 to-teal-500/5',
    border: 'border-emerald-500/30',
  },

  // Full-Stack
  {
    name: 'React.js',
    category: 'fullstack',
    level: 'Advanced',
    exp: '2+ Years',
    desc: 'Component architecture, custom hooks, Framer Motion, performant virtual DOM rendering',
    tags: ['Frontend', 'SPA', 'Interactive'],
    color: 'from-cyan-500/20 to-sky-500/5',
    border: 'border-cyan-500/30',
  },
  {
    name: 'Node.js & Express',
    category: 'fullstack',
    level: 'Advanced',
    exp: 'Microservices & APIs',
    desc: 'Event loop mastery, RESTful architecture, middleware design, asynchronous workers',
    tags: ['Backend', 'APIs', 'Microservices'],
    color: 'from-emerald-500/20 to-green-500/5',
    border: 'border-emerald-500/30',
  },
  {
    name: 'WebSockets & Socket.IO',
    category: 'fullstack',
    level: 'Advanced',
    exp: 'Real-time Apps',
    desc: 'Full-duplex bi-directional communication, rooms, heartbeats, low-latency live messaging',
    tags: ['Real-Time', 'Low Latency', 'Telemetry'],
    color: 'from-violet-500/20 to-purple-500/5',
    border: 'border-violet-500/30',
  },
  {
    name: 'Tailwind CSS',
    category: 'fullstack',
    level: 'Advanced',
    exp: 'Production Styling',
    desc: 'Utility-first modern design systems, custom themes, dark modes, responsive layouts',
    tags: ['Styling', 'UI Design', 'Responsive'],
    color: 'from-sky-500/20 to-cyan-500/5',
    border: 'border-sky-500/30',
  },
  {
    name: 'JavaScript (ES6+)',
    category: 'fullstack',
    level: 'Advanced',
    exp: 'Core Language',
    desc: 'Closures, prototypes, async/await, modular design, DOM APIs',
    tags: ['Language', 'Modern JS', 'Web'],
    color: 'from-amber-500/20 to-yellow-500/5',
    border: 'border-amber-500/30',
  },

  // Cloud & IoT
  {
    name: 'Modbus TCP & PLC Comms',
    category: 'iot',
    level: 'Specialist',
    exp: 'PCS Industrial Automation',
    desc: 'Reading/writing holding registers, coils, input registers, PLC remote polling',
    tags: ['Industrial Automation', 'Modbus', 'Hardware Comms'],
    color: 'from-cyan-500/20 to-emerald-500/5',
    border: 'border-cyan-500/30',
  },
  {
    name: 'AWS Cloud Services',
    category: 'iot',
    level: 'Proficient',
    exp: 'EC2, S3, IAM, CloudWatch',
    desc: 'Cloud server provisioning, storage buckets, security groups, scalable deployments',
    tags: ['Cloud', 'DevOps', 'Infrastructure'],
    color: 'from-amber-500/20 to-orange-500/5',
    border: 'border-amber-500/30',
  },
  {
    name: 'Industrial Routers & VPN',
    category: 'iot',
    level: 'Specialist',
    exp: 'Field Deployments',
    desc: 'Secure remote tunnel configuration, industrial gateway communication, dynamic DNS',
    tags: ['Networking', 'Security', 'Telemetry'],
    color: 'from-emerald-500/20 to-teal-500/5',
    border: 'border-emerald-500/30',
  },
  {
    name: 'Linux System Administration',
    category: 'iot',
    level: 'Proficient',
    exp: 'Server & Embedded',
    desc: 'Shell scripting, daemon service management (systemd), networking, security hardening',
    tags: ['OS', 'Server', 'CLI'],
    color: 'from-slate-500/20 to-slate-500/5',
    border: 'border-slate-500/30',
  },

  // Databases & Tools
  {
    name: 'Firebase Suite',
    category: 'database',
    level: 'Advanced',
    exp: 'Cloud Firestore & FCM',
    desc: 'Real-time database sync, Firebase Auth, Push Notifications (FCM), Cloud Functions',
    tags: ['NoSQL', 'Push Notifications', 'Auth'],
    color: 'from-amber-500/20 to-orange-500/5',
    border: 'border-amber-500/30',
  },
  {
    name: 'PostgreSQL',
    category: 'database',
    level: 'Proficient',
    exp: 'Relational Schema',
    desc: 'Relational data modeling, ACID transactions, complex joins, index optimization',
    tags: ['SQL', 'Relational', 'Data Integrity'],
    color: 'from-blue-500/20 to-indigo-500/5',
    border: 'border-blue-500/30',
  },
  {
    name: 'MongoDB',
    category: 'database',
    level: 'Proficient',
    exp: 'Document Database',
    desc: 'NoSQL collections, aggregation pipelines, flexible document modeling with Mongoose',
    tags: ['NoSQL', 'Document', 'Backend'],
    color: 'from-emerald-500/20 to-green-500/5',
    border: 'border-emerald-500/30',
  },
  {
    name: 'Git & GitHub',
    category: 'database',
    level: 'Advanced',
    exp: 'Daily Workflow',
    desc: 'Branch management, pull requests, semantic versioning, code reviews',
    tags: ['VCS', 'Collaboration', 'Open Source'],
    color: 'from-violet-500/20 to-purple-500/5',
    border: 'border-violet-500/30',
  },
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredSkills = activeTab === 'all'
    ? skillList
    : skillList.filter((s) => s.category === activeTab);

  return (
    <section id="skills" className="py-20 sm:py-28 relative">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-left mb-10 sm:mb-14"
      >
        <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-2">
          <Code2 size={14} />
          <span>// Technical Arsenal</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-heading">
          Technologies & Tools <br className="hidden sm:inline" />
          <span className="gradient-text">Engineered for Performance</span>
        </h2>
        <p className="text-slate-400 max-w-2xl text-sm sm:text-base mt-3">
          A battle-tested stack spanning multi-platform client applications, distributed cloud backends, and low-latency industrial communication protocols.
        </p>
      </motion.div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-10 pb-2">
        {categories.map((cat) => {
          const isActive = activeTab === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                isActive
                  ? 'bg-gradient-to-r from-cyan-400 to-cyan-300 text-slate-950 font-semibold shadow-[0_0_20px_rgba(6,182,212,0.3)] scale-[1.02]'
                  : 'glass-panel text-slate-400 hover:text-white hover:border-cyan-500/30'
              }`}
            >
              {cat.icon && <cat.icon size={14} className={isActive ? 'text-slate-950' : 'text-cyan-400'} />}
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Skills Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5"
      >
        <AnimatePresence>
          {filteredSkills.map((skill, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              key={skill.name}
              className={`p-5 rounded-2xl glass-panel bg-gradient-to-br ${skill.color} border ${skill.border} hover:border-cyan-400/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <h3 className="text-base font-bold text-white font-heading group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-cyan-300 font-medium">
                    {skill.level}
                  </span>
                </div>

                <p className="text-[11px] font-mono text-slate-400 mb-2 flex items-center gap-1.5">
                  <CheckCircle size={12} className="text-emerald-400" />
                  {skill.exp}
                </p>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {skill.desc}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
                {skill.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-slate-400"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Skills;
