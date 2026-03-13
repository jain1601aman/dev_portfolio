import React from 'react';
import { motion } from 'motion/react';
import { resumeData } from '../data';
import { Award, Trophy } from 'lucide-react';

export const Awards: React.FC = () => {
  const { awards } = resumeData;

  return (
    <section className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-zinc-100 mb-12 flex items-center gap-4 font-mono">
          <Trophy className="text-emerald-500" />
          ./awards.sh
        </h2>

        <div className="space-y-4">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              whileHover={{ x: 5 }}
              className="flex items-start gap-4 p-4 bg-zinc-900/50 border border-zinc-800 hover:border-emerald-500/30 transition-colors"
            >
              <div className="mt-1 text-amber-500 shrink-0">
                <Award size={20} />
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed font-sans">{award}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
