import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Plus, Trash2, Edit2, X } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const defaultProjects = [
  {
    id: '1',
    title: 'TellMe / Mobile App',
    description: 'Fully functional cross-platform real-time messaging mobile application. Built with Flutter, featuring completely robust Android and iOS interfaces.',
    techStack: ['Flutter', 'Dart', 'Firebase'],
    liveLink: 'https://drive.google.com/drive/folders/1chdK7gppOlY8qy1jL-8HlJql-8TvAA5Z?usp=drive_link',
    githubLink: 'https://github.com/SKYadav-2250/Tellme-app',
    image: '/tellme_logo.jpg'
  },
  {
    id: '2',
    title: 'TellMe / Web App',
    description: 'Real-time chatting web application mirroring the mobile experience, seamlessly synchronizing data across platforms for instant messaging everywhere.',
    techStack: ['React', 'Node.js'],
    liveLink: 'https://tellme-frontend.vercel.app/',
    githubLink: 'https://github.com/SKYadav-2250/Tellme-frontend',
    image: 'https://images.unsplash.com/photo-1683104691469-7b40f22caec1?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: '3',
    title: 'KOSHIS Engine',
    description: 'Cross-platform mobile app for college event management, user registration, and real-time notifications.',
    techStack: ['Dart', 'Flutter', 'Provider'],
    liveLink: '#',
    githubLink: 'https://github.com/SKYadav-2250/pcte_event_management',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000&auto=format&fit=crop'
  }
];

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [isManageMode, setIsManageMode] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [selectedProjectDetail, setSelectedProjectDetail] = useState(null);

  const [formData, setFormData] = useState({ title: '', description: '', techStack: '', liveLink: '', githubLink: '', image: '' });

  useEffect(() => {
    const saved = localStorage.getItem('portfolio_projects_v6');
    if (saved) {
      setProjects(JSON.parse(saved));
    } else {
      setProjects(defaultProjects);
      localStorage.setItem('portfolio_projects_v6', JSON.stringify(defaultProjects));
    }
  }, []);

  const saveProjects = (updatedProjects) => {
    setProjects(updatedProjects);
    localStorage.setItem('portfolio_projects_v6', JSON.stringify(updatedProjects));
  };

  const handleDelete = (id) => saveProjects(projects.filter(p => p.id !== id));

  const openEdit = (project) => {
    setEditingProject(project);
    setFormData({ ...project, techStack: project.techStack.join(', ') });
    setShowModal(true);
  };

  const handleAddNew = () => {
    setEditingProject(null);
    setFormData({ title: '', description: '', techStack: '', liveLink: '', githubLink: '', image: '' });
    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const projectData = {
      id: editingProject ? editingProject.id : Date.now().toString(),
      ...formData,
      techStack: formData.techStack.split(',').map(s => s.trim()).filter(Boolean),
      image: formData.image || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop'
    };
    saveProjects(editingProject ? projects.map(p => p.id === editingProject.id ? projectData : p) : [...projects, projectData]);
    setShowModal(false);
  };

  return (
    <section id="projects" className="py-24 border-t border-border mt-20">
      <div className="flex justify-between items-end mb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="text-xs uppercase tracking-widest text-textMuted mb-2 block">Selected Works</span>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight">
            Featured <span className="font-serif italic text-white/90">Projects</span>
          </h2>
        </motion.div>
        <button onClick={() => setIsManageMode(!isManageMode)} className="text-xs tracking-widest uppercase border-b border-border hover:text-white pb-1 transition-colors text-textMuted hidden md:block">
          {isManageMode ? 'Done' : 'Manage List'}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        <AnimatePresence>
          {projects.map((project, index) => (
            <motion.div
              layout initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}
              key={project.id}
              onClick={() => !isManageMode && setSelectedProjectDetail(project)}
              className={`group relative rounded-[2rem] overflow-hidden bg-surface border border-border transition-all duration-500 ${!isManageMode ? 'cursor-pointer hover:border-borderHover' : ''}`}
            >
              {isManageMode && (
                <div className="absolute top-4 right-4 z-20 flex gap-2">
                  <button onClick={() => openEdit(project)} className="p-3 bg-black/80 text-white rounded-full backdrop-blur hover:bg-white hover:text-black transition-colors"><Edit2 size={16} /></button>
                  <button onClick={() => handleDelete(project.id)} className="p-3 bg-red-900/80 text-white rounded-full backdrop-blur hover:bg-red-500 transition-colors"><Trash2 size={16} /></button>
                </div>
              )}

              <div className="h-[350px] md:h-[450px] w-full relative overflow-hidden bg-[#0a0a0a]">
                <div className="absolute inset-0 bg-black/40 z-10 transition-colors group-hover:bg-transparent"></div>
                {/* Simulated Dot Matrix pattern overlay */}
                <div className="absolute inset-0 z-20 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
                <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />

                <div className="absolute bottom-0 left-0 p-8 w-full z-30 bg-gradient-to-t from-black via-black/80 to-transparent">
                  <div className="flex gap-2 mb-4">
                    {project.techStack.map(tech => (
                      <span key={tech} className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-white">{tech}</span>
                    ))}
                  </div>
                  <h3 className="text-3xl font-light text-white mb-2">{project.title}</h3>
                  <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors line-clamp-2 max-w-sm">{project.description}</p>

                  <div className="flex gap-6 mt-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    {project.liveLink && project.liveLink !== '#' && (
                      <a href={project.liveLink} target="_blank" rel="noreferrer" onClick={e => e.stopPropagation()} className="flex items-center gap-2 text-sm text-sky-400 hover:text-sky-300">
                        <ExternalLink size={16} /> Live
                      </a>
                    )}
                    {project.githubLink && project.githubLink !== '#' && (
                      <a href={project.githubLink} target="_blank" rel="noreferrer" onClick={e => e.stopPropagation()} className="flex items-center gap-2 text-sm text-white hover:text-slate-300">
                        <FaGithub size={16} /> Source
                      </a>
                    )}
                    <span className="flex items-center gap-2 text-sm text-white/50 group-hover:text-white/80 ml-auto transition-colors">
                      View Details →
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          {isManageMode && (
            <motion.div layout onClick={handleAddNew} className="rounded-[2rem] h-[350px] md:h-[450px] flex flex-col items-center justify-center border border-dashed border-border hover:border-white/30 hover:bg-white/5 transition-all cursor-pointer group">
              <Plus size={48} className="text-border group-hover:text-white mb-4 transition-colors" />
              <span className="font-serif italic text-xl text-textMuted group-hover:text-white transition-colors">Add Project</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Modal code remains purely functional but restyled */}
      <AnimatePresence>
        {showModal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
            <div className="bg-[#0a0a0a] border border-border p-8 rounded-3xl w-full max-w-lg relative">
              <button onClick={() => setShowModal(false)} className="absolute top-6 right-6 text-textMuted hover:text-white"><X size={24} /></button>
              <h3 className="text-2xl font-light mb-6">Project <span className="font-serif italic">Details</span></h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input required type="text" placeholder="Title" value={formData.title} onChange={e => setFormData({ ...formData, title: e.target.value })} className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/50" />
                <textarea required rows="3" placeholder="Description" value={formData.description} onChange={e => setFormData({ ...formData, description: e.target.value })} className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/50"></textarea>
                <input required type="text" placeholder="Tech Stack (comma separated)" value={formData.techStack} onChange={e => setFormData({ ...formData, techStack: e.target.value })} className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/50" />
                <div className="flex gap-4">
                  <input type="text" placeholder="Live Link" value={formData.liveLink} onChange={e => setFormData({ ...formData, liveLink: e.target.value })} className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/50" />
                  <input type="text" placeholder="GitHub Link" value={formData.githubLink} onChange={e => setFormData({ ...formData, githubLink: e.target.value })} className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/50" />
                </div>
                <input type="text" placeholder="Image URL" value={formData.image} onChange={e => setFormData({ ...formData, image: e.target.value })} className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/50" />
                <button type="submit" className="w-full mt-4 py-4 bg-white text-black font-medium rounded-xl hover:bg-white/90 transition-colors">Save Details</button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Modal for Project Detail View */}
      <AnimatePresence>
        {selectedProjectDetail && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-8" onClick={() => setSelectedProjectDetail(null)}>
            <motion.div initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 20 }} className="bg-[#0a0a0a] border border-border p-0 rounded-[2rem] w-full max-w-4xl max-h-[90vh] overflow-y-auto relative shadow-2xl no-scrollbar" onClick={e => e.stopPropagation()}>
              <button onClick={() => setSelectedProjectDetail(null)} className="absolute top-6 right-6 p-2 bg-black/50 hover:bg-white text-white hover:text-black rounded-full backdrop-blur-md transition-all z-50">
                <X size={20} />
              </button>

              {/* Massive Screenshot Banner */}
              <div className="w-full h-[200px] sm:h-[400px] relative">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10 hidden sm:block"></div>
                <img src={selectedProjectDetail.image} alt={selectedProjectDetail.title} className="w-full h-full object-cover rounded-t-[2rem]" />
              </div>

              <div className="p-6 sm:p-12 -mt-10 sm:-mt-20 relative z-20">
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProjectDetail.techStack.map(tech => (
                    <span key={tech} className="px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-xs uppercase tracking-widest text-white">{tech}</span>
                  ))}
                </div>

                <h3 className="text-4xl sm:text-5xl font-light mb-6">
                  {selectedProjectDetail.title.split(' ').map((word, i) => (
                    i % 2 === 1 ? <span key={i} className="font-serif italic text-white/90">{word} </span> : <span key={i}>{word} </span>
                  ))}
                </h3>

                <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-3xl">
                  {selectedProjectDetail.description}
                </p>

                <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-8 border-t border-border">
                  {selectedProjectDetail.liveLink && selectedProjectDetail.liveLink !== '#' && (
                    <a href={selectedProjectDetail.liveLink} target="_blank" rel="noreferrer" className="w-full sm:w-auto justify-center px-8 py-4 bg-white text-black hover:bg-white/90 rounded-full transition-colors flex items-center gap-3 font-medium text-sm tracking-wide">
                      <ExternalLink size={18} /> Open Live Site
                    </a>
                  )}
                  {selectedProjectDetail.githubLink && selectedProjectDetail.githubLink !== '#' && (
                    <a href={selectedProjectDetail.githubLink} target="_blank" rel="noreferrer" className="w-full sm:w-auto justify-center px-8 py-4 bg-white/5 border border-border hover:bg-white/10 text-white rounded-full transition-colors flex items-center gap-3 font-medium text-sm tracking-wide">
                      <FaGithub size={18} /> View on GitHub
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
