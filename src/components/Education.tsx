import React from 'react';
import { motion } from 'motion/react';
import { resumeData } from '../data';
import { Calendar, GraduationCap } from 'lucide-react';

export const Education: React.FC = () => {
  const { education } = resumeData;

  return (
    <section id="education" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-zinc-100 mb-12 flex items-center gap-4 font-mono">
          <GraduationCap className="text-emerald-500" />
          ./education.sh
        </h2>

        <div className="grid grid-cols-1 gap-6">
          {education.map((edu, index) => (
            <div key={index} className="p-6 bg-zinc-900/50 border border-zinc-800 hover:border-emerald-500/30 transition-colors">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-zinc-100">{edu.institution}</h3>
                  <div className="text-emerald-400 font-mono text-sm mt-1">{edu.degree}</div>
                </div>
                <div className="mt-2 md:mt-0 text-right">
                  <div className="flex items-center gap-2 text-zinc-500 text-sm md:justify-end font-mono">
                    <Calendar size={14} /> {edu.dates}
                  </div>
                  <div className="text-zinc-300 font-mono mt-1">GPA: {edu.gpa}</div>
                </div>
              </div>
              <p className="text-sm text-zinc-400 font-sans">{edu.coursework}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
