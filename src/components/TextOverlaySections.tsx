"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ title, subtitle, description, alignment = "left" }: any) => {
  return (
    <section className={`h-screen flex items-center px-10 md:px-24 z-10 relative pointer-events-none ${alignment === "right" ? "justify-end text-right" : "justify-start"}`}>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ margin: "-20%" }}
        className="max-w-2xl pointer-events-auto"
      >
        <span className="text-purple-500 font-mono text-sm tracking-widest uppercase mb-4 block">{subtitle}</span>
        <h2 className="text-6xl md:text-8xl font-black text-white mb-8 leading-none tracking-tighter">
          {title}
        </h2>
        <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed">
          {description}
        </p>
      </motion.div>
    </section>
  );
};

const TextOverlaySections = () => {
  return (
    <div className="relative -mt-[600vh]">
      <Section 
        subtitle="The Reveal"
        title="NovaBook Pro."
        description="A new era of computing begins. Thinner than ever. More powerful than logic."
      />
      
      <Section 
        subtitle="Retina XDR"
        title="Pure Vision."
        description="10,000 mini-LEDs. 1,600 nits of peak brightness. The world's most advanced display."
        alignment="right"
      />

      <Section 
        subtitle="Performance"
        title="M3 Extreme."
        description="96GB of unified memory. Ray tracing built-in. It doesn't just run apps, it defines them."
      />

      <Section 
        subtitle="Efficiency"
        title="All Day. Every Day."
        description="Up to 32 hours of battery life. Go from London to Tokyo and back on a single charge."
        alignment="right"
      />

      <Section 
        subtitle="Ecosystem"
        title="macOS Nova."
        description="Seamlessly integrated. Universally powerful. Your workspace, redefined by intelligence."
      />
      
      <div className="h-screen" /> {/* Space for the buy section */}
    </div>
  );
};

export default TextOverlaySections;