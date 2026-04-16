import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const defaultProjects = [
  {
    id: '1',
    title: 'TellMe / Mobile App',
    description: 'Fully functional cross-platform real-time messaging mobile application. Built with Flutter, featuring completely robust Android and iOS interfaces.',
    techStack: ['Flutter', 'Dart', 'Firebase'],
    liveLink: 'https://drive.google.com/drive/folders/1chdK7gppOlY8qy1jL-8HlJql-8TvAA5Z?usp=drive_link',
    githubLink: 'https://github.com/SKYadav-2250/Tellme-app',
    image: '/tellme_logo.jpg',
  },
  {
    id: '2',
    title: 'TellMe / Web App',
    description: 'Real-time chatting web application mirroring the mobile experience, seamlessly synchronizing data across platforms for instant messaging everywhere.',
    techStack: ['React', 'Node.js'],
    liveLink: 'https://tellme-frontend.vercel.app/',
    githubLink: 'https://github.com/SKYadav-2250/Tellme-frontend',
    image: 'https://images.unsplash.com/photo-1683104691469-7b40f22caec1?q=80&w=1332&auto=format&fit=crop',
  },
  {
    id: '3',
    title: 'KOSHIS Engine',
    description: 'Cross-platform mobile app for college event management, user registration, and real-time notifications.',
    techStack: ['Dart', 'Flutter', 'Provider'],
    liveLink: '#',
    githubLink: 'https://github.com/SKYadav-2250/pcte_event_management',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000&auto=format&fit=crop',
  },
];

const Projects = () => {
  const [selectedProjectDetail, setSelectedProjectDetail] = useState(null);

  return (
    <section id="projects" className="py-16 sm:py-24 border-t border-border mt-16 sm:mt-20">

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-10 sm:mb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="text-xs uppercase tracking-widest text-textMuted mb-2 block">Selected Works</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight">
            Featured <span className="font-serif italic text-white/90">Projects</span>
          </h2>
        </motion.div>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
        <AnimatePresence>
          {defaultProjects.map((project, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={project.id}
              onClick={() => setSelectedProjectDetail(project)}
              className="group relative rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden bg-surface border border-border transition-all duration-500 cursor-pointer hover:border-borderHover"
            >
              <div className="h-[280px] sm:h-[350px] md:h-[420px] w-full relative overflow-hidden bg-[#0a0a0a]">
                <div className="absolute inset-0 bg-black/40 z-10 transition-colors group-hover:bg-transparent" />
                <div
                  className="absolute inset-0 z-20 opacity-20 pointer-events-none"
                  style={{
                    backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                  }}
                />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                />

                <div className="absolute bottom-0 left-0 p-4 sm:p-6 md:p-8 w-full z-30 bg-gradient-to-t from-black via-black/80 to-transparent">
                  {/* Tech badges — limit on mobile */}
                  <div className="flex gap-1.5 sm:gap-2 mb-3 flex-wrap">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 sm:px-3 py-0.5 sm:py-1 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-[9px] sm:text-[10px] uppercase tracking-widest text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-white mb-1.5">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 group-hover:text-slate-300 transition-colors line-clamp-2">
                    {project.description}
                  </p>

                  {/* Hover links — always visible on mobile (no hover on touch) */}
                  <div className="flex gap-4 sm:gap-6 mt-4 sm:mt-6 sm:opacity-0 sm:translate-y-4 sm:group-hover:opacity-100 sm:group-hover:translate-y-0 transition-all duration-500">
                    {project.liveLink && project.liveLink !== '#' && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1.5 text-xs sm:text-sm text-sky-400 hover:text-sky-300"
                      >
                        <ExternalLink size={14} /> Live
                      </a>
                    )}
                    {project.githubLink && project.githubLink !== '#' && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1.5 text-xs sm:text-sm text-white hover:text-slate-300"
                      >
                        <FaGithub size={14} /> Source
                      </a>
                    )}
                    <span className="flex items-center gap-1.5 text-xs sm:text-sm text-white/50 group-hover:text-white/80 ml-auto transition-colors">
                      Details →
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProjectDetail && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-black/80 backdrop-blur-md p-0 sm:p-8"
            onClick={() => setSelectedProjectDetail(null)}
          >
            <motion.div
              initial={{ y: '100%', scale: 1 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="bg-[#0a0a0a] border border-border rounded-t-[2rem] sm:rounded-[2rem] w-full sm:max-w-4xl max-h-[92vh] overflow-y-auto relative shadow-2xl no-scrollbar"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProjectDetail(null)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 bg-black/60 hover:bg-white text-white hover:text-black rounded-full backdrop-blur-md transition-all z-50"
              >
                <X size={18} />
              </button>

              {/* Drag handle */}
              <div className="w-10 h-1 bg-border rounded-full mx-auto mt-4 sm:hidden" />

              {/* Banner image */}
              <div className="w-full h-[200px] sm:h-[360px] relative mt-2 sm:mt-0">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10 hidden sm:block" />
                <img
                  src={selectedProjectDetail.image}
                  alt={selectedProjectDetail.title}
                  className="w-full h-full object-cover rounded-t-[2rem]"
                />
              </div>

              <div className="p-5 sm:p-10 md:p-12 sm:-mt-16 relative z-20">
                {/* Tech badges */}
                <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                  {selectedProjectDetail.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 sm:px-4 sm:py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-[10px] sm:text-xs uppercase tracking-widest text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl sm:text-4xl md:text-5xl font-light mb-4 sm:mb-6 leading-tight">
                  {selectedProjectDetail.title.split(' ').map((word, i) =>
                    i % 2 === 1
                      ? <span key={i} className="font-serif italic text-white/90">{word} </span>
                      : <span key={i}>{word} </span>
                  )}
                </h3>

                <p className="text-sm sm:text-base md:text-lg text-slate-400 mb-8 sm:mb-10 leading-relaxed">
                  {selectedProjectDetail.description}
                </p>

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-6 sm:pt-8 border-t border-border">
                  {selectedProjectDetail.liveLink && selectedProjectDetail.liveLink !== '#' && (
                    <a
                      href={selectedProjectDetail.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full sm:w-auto justify-center px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-black hover:bg-white/90 rounded-full transition-colors flex items-center gap-2 sm:gap-3 font-medium text-sm tracking-wide"
                    >
                      <ExternalLink size={16} /> Open Live Site
                    </a>
                  )}
                  {selectedProjectDetail.githubLink && selectedProjectDetail.githubLink !== '#' && (
                    <a
                      href={selectedProjectDetail.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full sm:w-auto justify-center px-6 sm:px-8 py-3.5 sm:py-4 bg-white/5 border border-border hover:bg-white/10 text-white rounded-full transition-colors flex items-center gap-2 sm:gap-3 font-medium text-sm tracking-wide"
                    >
                      <FaGithub size={16} /> View on GitHub
                    </a>
                  )}
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
