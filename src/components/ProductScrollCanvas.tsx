"use client";

import React, { useRef } from 'react';
import { useScroll, useTransform, motion, useSpring } from 'framer-motion';

const ProductScrollCanvas = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth out the scroll progress for a buttery feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 30,
    restDelta: 0.001
  });

  // Motion transformations for the laptop
  const scale = useTransform(smoothProgress, [0, 0.4, 0.7, 1], [0.85, 1.1, 1.3, 1]);
  const rotateX = useTransform(smoothProgress, [0, 0.3, 0.6], [15, 0, -5]);
  const opacity = useTransform(smoothProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]);
  const y = useTransform(smoothProgress, [0, 0.2], [80, 0]);

  return (
    <div ref={containerRef} className="h-[600vh] relative">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background: Clean Vortex Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('dyad-media://media/calm-eagle-burst/.dyad/media/b9a5bcbe29b237ac220104d47023002f41d3b1972cb0b303c8f775b1f38b03e1.jpeg')",
            filter: "brightness(0.8)"
          }} 
        />
        
        {/* Motion: Laptop with UI elements */}
        <motion.div
          style={{
            scale,
            rotateX,
            opacity,
            y,
            perspective: 1200
          }}
          className="relative z-10 w-full max-w-7xl px-4 flex items-center justify-center"
        >
          <img 
            src="dyad-media://media/calm-eagle-burst/.dyad/media/b18010d4d29f37789119c4ad311585a5b2189e03bae3339e5039c59de1a27a71.jpeg" 
            alt="NovaBook Pro Experience" 
            className="w-full h-auto drop-shadow-[0_0_100px_rgba(139,92,246,0.4)]"
          />
          
          {/* Pulsing atmospheric glow */}
          <motion.div 
            style={{ 
              opacity: useTransform(smoothProgress, [0.2, 0.5], [0, 0.3]),
              scale: useTransform(smoothProgress, [0.2, 0.5], [0.8, 1.3])
            }}
            className="absolute inset-0 bg-purple-600/30 blur-[150px] -z-10 rounded-full"
          />
        </motion.div>

        {/* Global Cinematic Noise Overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-20" />
      </div>
    </div>
  );
};

export default ProductScrollCanvas;