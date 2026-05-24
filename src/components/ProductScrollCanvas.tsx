"use client";

import React, { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

const ProductScrollCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Map scroll progress (0-1) to frame index (0-119)
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, 119]);

  useEffect(() => {
    // Preload images - In a real app, these would be your 120 frames
    // For this demo, we'll simulate the logic
    const preloadImages = () => {
      const loadedImages: HTMLImageElement[] = [];
      // This is where you would loop through your frames
      // for (let i = 1; i <= 120; i++) { ... }
      setImages(loadedImages);
    };

    preloadImages();

    const render = () => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext('2d');
      if (!ctx || !canvas) return;

      const currentFrame = Math.floor(frameIndex.get());
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw Logic:
      // If images[currentFrame] exists, draw it
      // Otherwise, we'll draw a futuristic placeholder graphic
      
      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);
      
      // Simulated "Laptop" Animation based on scroll
      const scale = 1 + scrollYProgress.get() * 0.5;
      const rotation = scrollYProgress.get() * Math.PI * 0.2;
      const opacity = Math.min(1, scrollYProgress.get() * 2);

      // Glow effect
      const gradient = ctx.createRadialGradient(0, 0, 50, 0, 0, 400);
      gradient.addColorStop(0, `rgba(139, 92, 246, ${0.1 * opacity})`);
      gradient.addColorStop(1, 'transparent');
      ctx.fillStyle = gradient;
      ctx.fillRect(-canvas.width/2, -canvas.height/2, canvas.width, canvas.height);

      // Simple holographic representation of a laptop opening
      ctx.strokeStyle = `rgba(167, 139, 250, ${0.8 * opacity})`;
      ctx.lineWidth = 2;
      
      // Screen
      ctx.beginPath();
      ctx.roundRect(-200 * scale, -150 * scale - (rotation * 100), 400 * scale, 250 * scale, 10);
      ctx.stroke();
      
      // Keyboard base
      ctx.strokeStyle = `rgba(59, 130, 246, ${0.5 * opacity})`;
      ctx.beginPath();
      ctx.roundRect(-220 * scale, 100 * scale, 440 * scale, 20 * scale, 5);
      ctx.stroke();

      ctx.restore();
    };

    const unsubscribe = frameIndex.on("change", render);
    render(); // Initial render

    return () => unsubscribe();
  }, [frameIndex, scrollYProgress]);

  return (
    <div ref={containerRef} className="h-[600vh] relative">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-black">
        {/* Background Particles/Atmosphere */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(88,28,135,0.15)_0%,transparent_70%)]" />
        
        <canvas
          ref={canvasRef}
          width={1920}
          height={1080}
          className="w-full h-full object-contain"
        />
        
        {/* Floating UI Elements that respond to scroll */}
        <motion.div 
          style={{ opacity: useTransform(scrollYProgress, [0.1, 0.2], [0, 1]) }}
          className="absolute top-1/4 right-20 p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl max-w-xs"
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