"use client";

import React, { useRef } from 'react';
import { useScroll, useTransform, motion, useSpring } from 'framer-motion';

const ProductScrollCanvas = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Use a spring for buttery smooth motion
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 30,
    restDelta: 0.001
  });

  // Motion transformations for the central laptop/UI image
  const scale = useTransform(smoothProgress, [0, 0.4, 0.7, 1], [0.8, 1.1, 1.3, 1]);
  const rotate = useTransform(smoothProgress, [0, 0.5, 1], [-5, 0, 5]);
  const opacity = useTransform(smoothProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  const y = useTransform(smoothProgress, [0, 0.2], [50, 0]);

  return (
    <div ref={containerRef} className="h-[600vh] relative">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Layer: The clean vortex image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('/vortex-bg.jpg')",
          }} 
        />
        
        {/* Motion Layer: The laptop with UI elements */}
        <motion.div
          style={{
            scale,
            rotate,
            opacity,
            y,
            perspective: 1200
          }}
          className="relative z-10 w-full max-w-7xl px-4 flex items-center justify-center"
        >
          <img 
            src="/laptop-ui.png" 
            alt="NovaBook Pro Experience" 
            className="w-full h-auto drop-shadow-[0_0_100px_rgba(139,92,246,0.4)]"
          />
          
          {/* Subtle atmospheric glow that pulses with scroll */}
          <motion.div 
            style={{ 
              opacity: useTransform(smoothProgress, [0.3, 0.6], [0, 0.4]),
              scale: useTransform(smoothProgress, [0.3, 0.6], [0.8, 1.2])
            }}
            className="absolute inset-0 bg-purple-600/20 blur-[150px] -z-10 rounded-full"
          />
        </motion.div>

        {/* Cinematic Noise Overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-20" />
      </div>
    </div>
  );
};

export default ProductScrollCanvas;