import React from 'react';
import { motion } from 'motion/react';
import { resumeData } from '../data';
import { Github, FolderGit2 } from 'lucide-react';

export const Projects: React.FC = () => {
  const { projects } = resumeData;

  return (
    <section id="projects" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-zinc-100 mb-12 flex items-center gap-4 font-mono">
          <FolderGit2 className="text-emerald-500" />
          ./projects.sh
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="p-6 bg-zinc-900/50 border border-zinc-800 hover:border-emerald-500/30 transition-colors flex flex-col h-full group"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-zinc-100 group-hover:text-emerald-400 transition-colors">{project.title}</h3>
                <a href={project.link} className="text-zinc-500 hover:text-emerald-400 transition-colors">
                  <Github size={20} />
                </a>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.split(', ').map(tech => (
                  <span key={tech} className="px-2 py-1 text-xs font-mono bg-zinc-800/50 text-emerald-400 border border-zinc-700/50">
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="space-y-3 flex-grow border-t border-zinc-800/50 pt-4">
                {project.bullets.map((bullet, i) => (
                  <li key={i} className="text-sm text-zinc-400 flex items-start gap-2 font-sans">
                    <span className="text-emerald-500 mt-1">&gt;</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
