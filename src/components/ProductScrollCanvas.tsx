"use client";

import React, { useRef } from 'react';
import { useScroll, useTransform, motion, useSpring } from 'framer-motion';

const ProductScrollCanvas = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Cinematic transformations for the laptop image
  const scale = useTransform(smoothProgress, [0, 0.2, 0.5, 0.8], [0.8, 1, 1.2, 0.9]);
  const rotateX = useTransform(smoothProgress, [0, 0.3, 0.6], [20, 0, -10]);
  const opacity = useTransform(smoothProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  const y = useTransform(smoothProgress, [0, 0.5], [100, 0]);

  return (
    <div ref={containerRef} className="h-[600vh] relative">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Vortex Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{ 
            backgroundImage: "url('/vortex.jpg')",
            filter: "brightness(0.7) contrast(1.1)"
          }} 
        />
        
        {/* Animated Laptop Image */}
        <motion.div
          style={{
            scale,
            rotateX,
            opacity,
            y,
            perspective: 1000
          }}
          className="relative z-10 w-full max-w-5xl px-4"
        >
          <img 
            src="/laptop.png" 
            alt="NovaBook Pro" 
            className="w-full h-auto drop-shadow-[0_0_50px_rgba(139,92,246,0.3)]"
          />
          
          {/* Animated Glow behind the laptop */}
          <motion.div 
            style={{ opacity: useTransform(smoothProgress, [0.2, 0.4], [0, 0.5]) }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-purple-500/20 blur-[120px] -z-10 rounded-full"
          />
        </motion.div>

        {/* Floating UI Decorative Elements */}
        <motion.div 
          style={{ 
            opacity: useTransform(smoothProgress, [0.1, 0.2, 0.4, 0.5], [0, 1, 1, 0]),
            x: useTransform(smoothProgress, [0.1, 0.4], [100, 0])
          }}
          className="absolute top-1/4 right-10 md:right-20 p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl max-w-xs hidden md:block"
        >
          <div className="text-purple-400 text-xs font-bold mb-1 tracking-widest uppercase">M3 Ultra Chip</div>
          <h4 className="text-white text-lg font-bold">Unprecedented Power</h4>
          <p className="text-gray-400 text-sm mt-2">60% faster than previous generations. Built for the future of AI.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductScrollCanvas;