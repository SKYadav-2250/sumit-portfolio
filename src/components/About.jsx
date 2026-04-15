import React from 'react';
import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <section id="resume" className="py-16 sm:py-24 border-t border-border mt-16 sm:mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10 sm:mb-16"
      >
        <span className="text-xs uppercase tracking-widest text-textMuted mb-2 block">
          Mindset &amp; Experience
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight">
          My{' '}
          <span className="font-serif italic text-white/90">Curriculum Vitae</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

        {/* Experience */}
        <div>
          <h3 className="text-lg sm:text-xl font-medium mb-8 sm:mb-10 text-white flex items-center gap-4">
            <span className="w-8 h-px bg-border" /> Experience
          </h3>

          <div className="space-y-10 sm:space-y-12">
            {/* Job 1 */}
            <div className="group">
              <div className="flex flex-col xs:flex-row justify-between xs:items-baseline gap-1 mb-2">
                <h4 className="text-base sm:text-lg font-medium text-white group-hover:text-sky-300 transition-colors">
                  Web Developer
                </h4>
                <span className="text-xs sm:text-sm text-textMuted font-mono">Present</span>
              </div>
              <p className="text-xs sm:text-sm font-serif italic text-slate-400 mb-3">KN Enterprises</p>
              <p className="text-textMuted text-xs sm:text-sm leading-relaxed">
                Developing and managing the complete KN Enterprises website. Architecting modern
                responsive UIs and robust features ensuring scalable capabilities.
              </p>
            </div>

            <div className="w-full h-px bg-border/50" />

            {/* Job 2 */}
            <div className="group">
              <div className="flex flex-col xs:flex-row justify-between xs:items-baseline gap-1 mb-2">
                <h4 className="text-base sm:text-lg font-medium text-white group-hover:text-sky-300 transition-colors">
                  Flutter Developer Intern
                </h4>
                <span className="text-xs sm:text-sm text-textMuted font-mono">2025</span>
              </div>
              <p className="text-xs sm:text-sm font-serif italic text-slate-400 mb-3">TerraBiz Tech Pvt Ltd</p>
              <p className="text-textMuted text-xs sm:text-sm leading-relaxed">
                Developed Ophiz, a production Flutter application available on Google Play. Architected
                with BLoC, integrated RESTful APIs, and optimized widget rendering for high performance.
              </p>
            </div>

            <div className="w-full h-px bg-border/50" />

            {/* Job 3 */}
            <div className="group">
              <div className="flex flex-col xs:flex-row justify-between xs:items-baseline gap-1 mb-2">
                <h4 className="text-base sm:text-lg font-medium text-white group-hover:text-sky-300 transition-colors">
                  Web Developer Intern
                </h4>
                <span className="text-xs sm:text-sm text-textMuted font-mono">2024</span>
              </div>
              <p className="text-xs sm:text-sm font-serif italic text-slate-400 mb-3">Excellence Group of Institute</p>
              <p className="text-textMuted text-xs sm:text-sm leading-relaxed">
                Designed and deployed highly responsive frontend interfaces with React/HTML/CSS and
                integrated robust Node.js backend logic, driving a 40% increase in engagement.
              </p>
            </div>
          </div>
        </div>

        {/* Education & Skills */}
        <div className="mt-10 lg:mt-0">
          <h3 className="text-lg sm:text-xl font-medium mb-8 sm:mb-10 text-white flex items-center gap-4">
            <span className="w-8 h-px bg-border" /> Education
          </h3>

          <div className="space-y-10 sm:space-y-12 mb-12 sm:mb-16">
            <div className="group">
              <div className="flex flex-col xs:flex-row justify-between xs:items-baseline gap-1 mb-2">
                <h4 className="text-base sm:text-lg font-medium text-white group-hover:text-sky-300 transition-colors">
                  B.Tech Computer Science
                </h4>
                <span className="text-xs sm:text-sm text-textMuted font-mono">2022 – 2026</span>
              </div>
              <p className="text-xs sm:text-sm font-serif italic text-slate-400 mb-3">PCTE Group of Institutes</p>
              <p className="text-textMuted text-xs sm:text-sm leading-relaxed">
                Building a rigorous foundation in software engineering, competitive programming, and
                modern software architectures.
              </p>
            </div>
          </div>

          <h3 className="text-lg sm:text-xl font-medium mb-6 sm:mb-10 text-white flex items-center gap-4">
            <span className="w-8 h-px bg-border" /> Technologies
          </h3>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {[
              'Flutter', 'Dart', 'React', 'Node.js',
              'Firebase', 'MongoDB', 'PostgreSQL', 'Tailwind CSS', 'JavaScript',
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 sm:px-4 py-1.5 sm:py-2 bg-surface border border-border rounded-full text-[11px] sm:text-xs font-medium text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
