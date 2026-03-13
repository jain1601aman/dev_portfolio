import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export const Splash: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = '> initializing backend environment...\n> loading modules...\n> establishing connection...\n> access granted.';

  useEffect(() => {
    let i = 0;
    const intervalId = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(intervalId);
      }
    }, 20);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-zinc-950 text-emerald-500 font-mono"
    >
      <div className="w-full max-w-2xl p-6 text-left">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-sm md:text-base whitespace-pre-wrap"
        >
          {text}
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="inline-block w-2 h-4 bg-emerald-500 ml-1 align-middle"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};
