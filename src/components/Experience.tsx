import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { resumeData } from '../data';
import { ChevronDown, Calendar, MapPin, TerminalSquare } from 'lucide-react';

export const Experience: React.FC = () => {
  const { experience } = resumeData;
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-zinc-100 mb-12 flex items-center gap-4 font-mono">
          <TerminalSquare className="text-emerald-500" />
          ./experience.sh
        </h2>

        <div className="space-y-6 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-px before:bg-zinc-800">
          {experience.map((exp, index) => {
            const isExpanded = expandedIndex === index;
            
            return (
              <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-12 h-12 rounded-none border border-zinc-800 bg-zinc-950 text-zinc-500 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <div className={`w-3 h-3 ${isExpanded ? 'bg-emerald-500' : 'bg-zinc-700'} transition-colors`} />
                </div>
                
                <div className={`w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 bg-zinc-900/50 border ${isExpanded ? 'border-emerald-500/50' : 'border-zinc-800'} hover:border-emerald-500/30 transition-colors cursor-pointer`}
                     onClick={() => setExpandedIndex(isExpanded ? null : index)}>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-zinc-100">{exp.role}</h3>
                      <div className="text-emerald-400 font-mono text-sm mt-1">@ {exp.company}</div>
                    </div>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      className="text-zinc-500"
                    >
                      <ChevronDown size={20} />
                    </motion.div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 text-xs text-zinc-500 mb-4 font-mono">
                    <span className="flex items-center gap-1"><Calendar size={14} /> {exp.dates}</span>
                    <span className="flex items-center gap-1"><MapPin size={14} /> {exp.location}</span>
                  </div>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <ul className="space-y-3 pt-4 border-t border-zinc-800">
                          {exp.bullets.map((bullet, i) => {
                            const isTech = bullet.startsWith('Technologies:');
                            if (isTech) {
                              return (
                                <li key={i} className="pt-2">
                                  <div className="flex flex-wrap gap-2">
                                    {bullet.replace('Technologies: ', '').split(', ').map(tech => (
                                      <span key={tech} className="px-2 py-1 text-xs font-mono bg-zinc-800/50 text-emerald-400 border border-zinc-700/50">
                                        {tech}
                                      </span>
                                    ))}
                                  </div>
                                </li>
                              );
                            }
                            return (
                              <li key={i} className="text-sm text-zinc-400 flex items-start gap-2 font-sans">
                                <span className="text-emerald-500 mt-1">&gt;</span>
                                <span>{bullet}</span>
                              </li>
                            );
                          })}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};
