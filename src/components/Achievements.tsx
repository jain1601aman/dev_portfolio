import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Zap, DollarSign } from 'lucide-react';

export const Achievements: React.FC = () => {
  const topAchievements = [
    {
      icon: <TrendingUp className="text-amber-500" size={24} />,
      metric: "6x",
      label: "Throughput Scaling",
      context: "70 -> 420 TPS via async pipelines and optimizations"
    },
    {
      icon: <DollarSign className="text-emerald-500" size={24} />,
      metric: "80%",
      label: "Infra Cost Reduction",
      context: "Migrated EC2 workloads to Lambda"
    },
    {
      icon: <Zap className="text-blue-500" size={24} />,
      metric: "75%",
      label: "Fewer Prod Issues",
      context: "40 -> 10/month via automated testing and proactive metric monitoring"
    }
  ];

  return (
    <section className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-sm font-mono text-emerald-500 uppercase tracking-wider mb-8">-- Top 3 Impact</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topAchievements.map((ach, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="p-6 bg-zinc-900/50 border border-zinc-800 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="mb-4">{ach.icon}</div>
              <div className="text-4xl font-bold text-zinc-100 mb-2 font-mono">{ach.metric}</div>
              <div className="text-lg font-medium text-zinc-300 mb-1">{ach.label}</div>
              <div className="text-sm text-zinc-500 font-mono">{ach.context}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
