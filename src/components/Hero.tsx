import React from 'react';
import { motion } from 'motion/react';
import { resumeData } from '../data';
import { MapPin, Mail, Phone, Github, Linkedin, Download, ArrowRight, Code2, Terminal } from 'lucide-react';

export const Hero: React.FC = () => {
  const { basics } = resumeData;

  return (
    <section className="relative pt-20 md:pt-32 min-h-[80vh] flex flex-col justify-center">
      {/* Stylized Photo Backdrop */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Gradient masks to fade the image into the dark background */}
        <div className="absolute inset-0 bg-zinc-950/80 md:bg-transparent z-10" />
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/90 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950 z-10" />
        <div className="absolute inset-0 bg-emerald-900/20 mix-blend-overlay z-10" />
        
        <motion.img 
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 0.3, scale: 1.05 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
          src="/profile.jpg" 
          alt="Aman Jain Backdrop" 
          className="absolute right-0 top-0 w-full md:w-2/3 h-full object-cover object-center grayscale mix-blend-luminosity"
          referrerPolicy="no-referrer"
          onError={(e) => {
            // Fallback if the user hasn't uploaded the image yet
            (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/tech/1920/1080?blur=2';
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-6 relative z-20"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-800 text-emerald-500 text-sm font-mono shadow-sm">
          <Terminal size={14} />
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 bg-emerald-500"></span>
          </span>
          system.status = "available"
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-100">
          {basics.name}
        </h1>
        <h2 className="text-2xl md:text-3xl font-mono text-emerald-400">
          &gt; {basics.title}
        </h2>
        
        <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed font-sans">
          {basics.summary}
        </p>

        <div className="flex flex-wrap gap-4 text-sm text-zinc-500 pt-4 font-mono">
          <div className="flex items-center gap-2"><MapPin size={16} className="text-emerald-500" /> {basics.location}</div>
          <div className="flex items-center gap-2"><Mail size={16} className="text-emerald-500" /> {basics.email}</div>
          <div className="flex items-center gap-2"><Phone size={16} className="text-emerald-500" /> {basics.phone}</div>
        </div>

        <div className="flex flex-wrap gap-4 pt-8 font-mono">
          <a
            href="#experience"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500/10 border border-emerald-500/50 text-emerald-400 hover:bg-emerald-500 hover:text-zinc-950 transition-colors"
          >
            ./view_experience.sh <ArrowRight size={18} />
          </a>
          <a
            href="/AmanJain_SDE2_4YOE.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 border border-zinc-800 text-zinc-300 hover:bg-zinc-800 hover:text-emerald-400 transition-colors"
          >
            download_resume <Download size={18} />
          </a>
        </div>

        <div className="flex gap-4 pt-8">
          {basics.links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-all"
            >
              {link.name === 'GitHub' ? <Github size={20} /> : link.name === 'LinkedIn' ? <Linkedin size={20} /> : <Code2 size={20} />}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
