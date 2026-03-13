/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Splash } from './components/Splash';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Achievements } from './components/Achievements';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Awards } from './components/Awards';
import { Navigation } from './components/Navigation';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full min-h-screen bg-zinc-950 text-zinc-300 font-mono selection:bg-emerald-500/30 overflow-x-hidden">
      <AnimatedBackground />
      
      <AnimatePresence mode="wait">
        {showSplash ? (
          <Splash key="splash" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <Navigation />
            <main className="w-full px-4 sm:px-6 lg:px-8 py-12 md:py-24 space-y-32">
              <Hero />
              <Achievements />
              <Education />
              <Experience />
              <Projects />
              <Skills />
              <Awards />
            </main>
            <footer className="text-center py-8 text-zinc-500 text-sm border-t border-zinc-900 mt-20">
              <p>/* © {new Date().getFullYear()} Aman Jain. All rights reserved. */</p>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
