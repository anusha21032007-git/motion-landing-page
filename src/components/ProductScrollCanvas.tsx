"use client";

import React, { useRef } from 'react';
import { useScroll, useTransform, motion, useSpring } from 'framer-motion';

// Import images directly so Vite resolves their public URLs correctly
import backgroundImage from '../../.dyad/media/b9a5bcbe29b237ac220104d47023002f41d3b1972cb0b303c8f775b1f38b03e1.jpeg';
import laptopImage from '../../.dyad/media/b18010d4d29f37789119c4ad311585a5b2189e03bae3339e5039c59de1a27a71.jpeg';

const ProductScrollCanvas = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Extremely smooth spring transition for premium tactile scrolling feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.001
  });

  // Keeps the laptop perfectly centered and sizes it beautifully throughout all scroll states
  const scale = useTransform(smoothProgress, [0, 0.25, 0.5, 0.75, 1], [0.9, 1.05, 1.1, 1.05, 0.95]);
  const rotateX = useTransform(smoothProgress, [0, 0.5, 1], [10, 0, -10]);
  const rotateY = useTransform(smoothProgress, [0, 0.5, 1], [-5, 0, 5]);
  
  // Keeps the laptop fully visible (opacity = 1) across all text overlay sections, only fading gently at the very start/end transitions
  const opacity = useTransform(smoothProgress, [0, 0.05, 0.95, 1], [0.8, 1, 1, 0.8]);
  const y = useTransform(smoothProgress, [0, 0.1], [30, 0]);

  return (
    <div ref={containerRef} className="h-[600vh] relative">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background: Clean Galactic Vortex Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${backgroundImage})`,
            filter: "brightness(0.75) contrast(1.05)"
          }} 
        />
        
        {/* Central Display: Premium Laptop with high-contrast UI */}
        <motion.div
          style={{
            scale,
            rotateX,
            rotateY,
            opacity,
            y,
            perspective: 1200
          }}
          className="relative z-10 w-full max-w-5xl px-4 flex items-center justify-center"
        >
          <img 
            src={laptopImage} 
            alt="NovaBook Pro Experience" 
            className="w-full h-auto drop-shadow-[0_0_80px_rgba(168,85,247,0.4)] pointer-events-none"
          />
          
          {/* Atmospheric ambient purple/blue glow that moves dynamically behind the laptop */}
          <motion.div 
            style={{ 
              opacity: useTransform(smoothProgress, [0.1, 0.5, 0.9], [0.2, 0.45, 0.2]),
              scale: useTransform(smoothProgress, [0.1, 0.5, 0.9], [0.9, 1.25, 0.9])
            }}
            className="absolute inset-0 bg-gradient-to-tr from-purple-600/35 to-blue-500/35 blur-[160px] -z-10 rounded-full"
          />
        </motion.div>

        {/* Cinematic film grain overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-20" />
      </div>
    </div>
  );
};

export default ProductScrollCanvas;