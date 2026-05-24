"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, AppWindow, Cpu, Layers, Battery } from 'lucide-react';

const icons = [
  { icon: Terminal, label: "Dev" },
  { icon: AppWindow, label: "Apps" },
  { icon: Cpu, label: "Chip" },
  { icon: Layers, label: "Display" },
  { icon: Battery, label: "Power" }
];

const FloatingDock = () => {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
        className="flex items-center gap-4 px-6 py-3 bg-black/40 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
      >
        {icons.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.2, y: -10 }}
            className="w-12 h-12 flex items-center justify-center bg-white/5 hover:bg-white/10 rounded-xl cursor-pointer transition-colors group relative"
          >
            <item.icon className="w-6 h-6 text-gray-400 group-hover:text-white" />
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-black text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {item.label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default FloatingDock;