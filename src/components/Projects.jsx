import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, Sparkles, Layers, ArrowUpRight, Cpu, Smartphone, Globe, Shield, Terminal, CheckCircle } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';

const projectCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'mobile', label: 'Mobile Apps (Flutter)', icon: Smartphone },
  { id: 'fullstack', label: 'Full-Stack Web', icon: Globe },
  { id: 'iot', label: 'Industrial IoT & Cloud', icon: Cpu },
];

const projectsData = [
  {
    id: 'pcs-iot',
    title: 'PCS Industrial Cloud & IoT Telemetry',
    subtitle: 'Industrial PLC Remote Monitoring & Control Suite',
    category: 'iot',
    badge: 'Enterprise Platform',
    featured: true,
    description: 'An enterprise-grade industrial automation platform monitoring factory PLCs and smart sensors across worldwide industrial facilities. Reads and writes Modbus TCP registers via encrypted VPN tunnels and streams live telemetry to cloud dashboards.',
    longDescription: 'At PCS (Power & Control Solution), I designed and engineered this platform combining Flutter dashboards and Node.js backend services. The system interfaces directly with industrial routers and PLCs using Modbus TCP protocol over secure VPN tunnels. Operators can monitor live machine speed, temperatures, valve pressures, and receive instantaneous alarm triggers on critical anomalies.',
    techStack: ['Flutter', 'Node.js', 'AWS Cloud', 'Modbus TCP', 'WebSockets', 'Industrial VPN'],
    keyFeatures: [
      'Real-time polling of Modbus TCP holding & input registers with <50ms local latency',
      'Encrypted VPN tunnel connectivity for remote industrial site gateways',
      'Live responsive telemetry graphs, alarm thresholds, and historical audit logs',
      'Cross-platform Flutter application enabling field technicians to monitor equipment on mobile and desktop',
    ],
    liveLink: '',
    liveLabel: 'Enterprise Platform',
    githubLink: '',
    image: '/pcs_iot_preview.jpg',
  },
  {
    id: 'tellme-mobile',
    title: 'TellMe / Cross-Platform Messenger',
    subtitle: 'Real-Time Instant Messaging Mobile App',
    category: 'mobile',
    badge: 'Mobile App',
    featured: true,
    description: 'A lightning-fast cross-platform instant messaging application built from scratch with Flutter and Firebase. Features end-to-end user chat, real-time presence indicators, media sharing, and push notifications.',
    longDescription: 'TellMe was engineered to demonstrate a production-ready mobile communication client. Built using Flutter and Dart, the app employs Firebase Firestore real-time listeners for instantaneous message delivery, Firebase Authentication for secure onboarding, and Cloud Messaging (FCM) for background alerts. Architected with clean separation between business logic and UI layers.',
    techStack: ['Flutter', 'Dart', 'Firebase', 'Cloud Messaging', 'SQLite Cache'],
    keyFeatures: [
      'Instant real-time message sync with optimistic UI updates and delivery ticks',
      'Secure phone/email authentication and encrypted user profile management',
      'Push notifications via Firebase Cloud Messaging (FCM) when app is backgrounded',
      'Optimized image & media caching using local SQLite/Hive storage',
    ],
    liveLink: 'https://drive.google.com/drive/folders/1chdK7gppOlY8qy1jL-8HlJql-8TvAA5Z?usp=drive_link',
    liveLabel: 'Download APK',
    githubLink: 'https://github.com/SKYadav-2250/Tellme-app',
    image: '/tellme_app_mockup.jpg',
  },
  {
    id: 'tellme-web',
    title: 'TellMe / Full-Stack Web Companion',
    subtitle: 'Real-Time Synchronized Desktop & Web Chat',
    category: 'fullstack',
    badge: 'Full-Stack Web',
    featured: false,
    description: 'A modern, responsive web application mirroring the TellMe mobile messaging experience. Synchronizes active conversations, contacts, and real-time alerts seamlessly on any modern browser.',
    longDescription: 'Created as the web companion for TellMe, this full-stack application utilizes React on the frontend and an Express/Node.js backend with WebSocket bi-directional channels. Deployed on Vercel with responsive mobile-friendly dark styling tailored for desktop and tablet users.',
    techStack: ['React.js', 'Node.js', 'Express', 'WebSockets', 'Tailwind CSS', 'Vercel'],
    keyFeatures: [
      'Full bi-directional WebSocket connection for instant chat transmission',
      'Responsive cyber-dark theme built with Tailwind CSS and smooth micro-interactions',
      'JWT session management and secure API endpoints',
      'Vercel continuous deployment with automated production builds',
    ],
    liveLink: 'https://tellme-frontend.vercel.app/',
    liveLabel: 'Visit Live Site',
    githubLink: 'https://github.com/SKYadav-2250/Tellme-frontend',
    image: 'https://images.unsplash.com/photo-1683104691469-7b40f22caec1?q=80&w=1332&auto=format&fit=crop',
  },
  {
    id: 'koshis-engine',
    title: 'KOSHIS Engine / Campus Event Portal',
    subtitle: 'Event Ticketing & Real-Time Campus Logistics',
    category: 'mobile',
    badge: 'Campus Mobile App',
    featured: false,
    description: 'A cross-platform event orchestration engine engineered for college festivals and technical symposiums at PCTE Group of Institutes. Manages thousands of registrations, schedules, and real-time announcements.',
    longDescription: 'KOSHIS Engine was designed to digitize university events and technical symposiums. Built using Flutter with the Provider state management pattern, it handles student authentication, live event categorization, interactive venue schedules, and instant push updates for schedule changes.',
    techStack: ['Flutter', 'Dart', 'Provider', 'REST APIs', 'Cloud Database'],
    keyFeatures: [
      'Centralized event catalogue with search, multi-category filters, and bookmarking',
      'Live attendee registration and digital pass generation',
      'Instant schedule changes and push notifications broadcasted to attendees',
      'Smooth performance across varying Android device profiles',
    ],
    liveLink: '',
    liveLabel: '',
    githubLink: 'https://github.com/SKYadav-2250/pcte_event_management',
    image: '/event_app_mockup.jpg',
  },
  {
    id: 'ophiz-app',
    title: 'Ophiz / Enterprise Mobile Platform',
    subtitle: 'Published Production App on Google Play Store',
    category: 'mobile',
    badge: 'Play Store Live',
    featured: false,
    description: 'Commercial enterprise mobile application developed during internship at TerraBiz Tech Pvt Ltd. Built with Flutter, BLoC pattern, and deployed directly to the Google Play Store.',
    longDescription: 'During my tenure at TerraBiz Tech, I contributed as a core Flutter developer architecting the Ophiz app. Focused on modular BLoC state management, resilient RESTful API integration, offline data caching, and strict Google Play Store guidelines.',
    techStack: ['Flutter', 'Dart', 'BLoC Pattern', 'REST APIs', 'Google Play Console'],
    keyFeatures: [
      'Strict BLoC event-driven reactive state management ensuring zero UI lockups',
      'Modular feature architecture allowing seamless team collaboration',
      'Google Play Store distribution with production bundle optimizations',
      'Comprehensive error handling and offline network recovery',
    ],
    liveLink: '',
    liveLabel: '',
    githubLink: '',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1200&auto=format&fit=crop',
  },
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filteredProjects = selectedCategory === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 sm:py-28 relative">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-left mb-10 sm:mb-14"
      >
        <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-2">
          <Layers size={14} />
          <span>// Featured Works</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-heading">
              Crafted Systems & <br className="hidden sm:inline" />
              <span className="gradient-text">Shipped Products</span>
            </h2>
            <p className="text-slate-400 max-w-xl text-sm sm:text-base mt-2">
              From mission-critical industrial IoT telemetry to cross-platform mobile messengers and cloud platforms.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-2 md:pt-0">
            {projectCategories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-cyan-400 text-slate-950 font-semibold shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                      : 'glass-panel text-slate-400 hover:text-white hover:border-cyan-500/30'
                  }`}
                >
                  {cat.icon && <cat.icon size={13} className={isActive ? 'text-slate-950' : 'text-cyan-400'} />}
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Projects Showcase Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7"
      >
        <AnimatePresence>
          {filteredProjects.map((project, idx) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              key={project.id}
              className="group glass-panel rounded-3xl overflow-hidden border-white/10 hover:border-cyan-500/40 transition-all duration-500 flex flex-col justify-between hover:shadow-[0_10px_40px_rgba(6,182,212,0.15)] hover:-translate-y-1"
            >
              <div>
                {/* Visual Thumbnail */}
                <div
                  className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-950 cursor-pointer"
                  onClick={() => setActiveModalProject(project)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080d1a] via-[#080d1a]/40 to-transparent" />
                  
                  {/* Badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 backdrop-blur-md">
                      {project.badge}
                    </span>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveModalProject(project);
                    }}
                    className="absolute top-3 right-3 p-2 rounded-full bg-black/60 hover:bg-white text-white hover:text-black backdrop-blur-md border border-white/10 transition-colors"
                    title="View Architectural Breakdown"
                  >
                    <ArrowUpRight size={14} />
                  </button>
                </div>

                {/* Details Content */}
                <div className="p-5 sm:p-6">
                  <h3
                    onClick={() => setActiveModalProject(project)}
                    className="text-lg sm:text-xl font-bold text-white font-heading mb-1 group-hover:text-cyan-300 transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400 mb-3">
                    {project.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="p-5 sm:p-6 pt-0 border-t border-white/10 mt-auto flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <ExternalLink size={13} />
                      <span>{project.liveLabel || 'Live Demo'}</span>
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-white transition-colors"
                    >
                      <FaGithub size={13} />
                      <span>Source</span>
                    </a>
                  )}
                </div>

                <button
                  onClick={() => setActiveModalProject(project)}
                  className="text-xs font-mono text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1 ml-auto"
                >
                  <span>Deep Dive</span>
                  <span>→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Project Deep Dive Modal */}
      <AnimatePresence>
        {activeModalProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl"
            onClick={() => setActiveModalProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-panel border-cyan-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl no-scrollbar"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white text-white hover:text-black transition-colors z-20"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              {/* Modal Banner */}
              <div className="relative h-56 sm:h-72 -mx-6 -mt-6 sm:-mx-8 sm:-mt-8 mb-6 overflow-hidden">
                <img
                  src={activeModalProject.image}
                  alt={activeModalProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080d1a] via-[#080d1a]/50 to-transparent" />
                <div className="absolute bottom-4 left-6 sm:left-8">
                  <span className="px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider font-semibold bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 backdrop-blur-md mb-2 inline-block">
                    {activeModalProject.badge}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">
                    {activeModalProject.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-cyan-300">
                    {activeModalProject.subtitle}
                  </p>
                </div>
              </div>

              {/* Architecture & Story */}
              <div className="space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2 flex items-center gap-1.5">
                    <Terminal size={14} />
                    System Architecture & Overview
                  </h4>
                  <p>{activeModalProject.longDescription}</p>
                </div>

                {/* Key Engineering Highlights */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-1.5">
                    <CheckCircle size={14} className="text-emerald-400" />
                    Key Engineering Highlights
                  </h4>
                  <ul className="space-y-2">
                    {activeModalProject.keyFeatures.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
                    Technologies Utilized
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModalProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-cyan-300 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-3">
                  {activeModalProject.liveLink && (
                    <a
                      href={activeModalProject.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="px-6 py-2.5 rounded-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold text-xs tracking-wide shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all flex items-center gap-2"
                    >
                      <ExternalLink size={14} />
                      <span>{activeModalProject.liveLabel || 'Visit Production'}</span>
                    </a>
                  )}
                  {activeModalProject.githubLink && (
                    <a
                      href={activeModalProject.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="px-6 py-2.5 rounded-full glass-panel border-white/10 hover:border-cyan-500/40 text-white font-medium text-xs tracking-wide transition-all flex items-center gap-2 hover:bg-white/10"
                    >
                      <FaGithub size={14} />
                      <span>View GitHub Repository</span>
                    </a>
                  )}
                  <button
                    onClick={() => setActiveModalProject(null)}
                    className="ml-auto px-5 py-2.5 rounded-full text-xs font-mono text-slate-400 hover:text-white"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
