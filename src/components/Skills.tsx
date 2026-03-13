import React from 'react';
import { motion } from 'motion/react';
import { resumeData } from '../data';
import { Cpu } from 'lucide-react';

export const Skills: React.FC = () => {
  const { skills } = resumeData;

  return (
    <section id="skills" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-zinc-100 mb-12 flex items-center gap-4 font-mono">
          <Cpu className="text-emerald-500" />
          ./skills.sh
        </h2>

        <div className="space-y-8">
          {skills.map((skillGroup, index) => (
            <div key={index}>
              <h3 className="text-lg font-mono text-emerald-400 mb-4">[{skillGroup.group}]</h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-zinc-900/50 border border-zinc-800 text-sm text-zinc-300 font-mono hover:border-emerald-500/50 hover:text-emerald-400 transition-all"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
