"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import ProductScrollCanvas from '@/components/ProductScrollCanvas';
import TextOverlaySections from '@/components/TextOverlaySections';
import FloatingDock from '@/components/FloatingDock';
import BuyNowSection from '@/components/BuyNowSection';
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <main className="bg-black min-h-screen text-white font-sans selection:bg-purple-500 selection:text-white">
      {/* Global Cinematic Noise Texture */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      <Navbar />
      
      {/* Core Scrollytelling Engine */}
      <ProductScrollCanvas />
      
      {/* Content Layers */}
      <TextOverlaySections />
      
      {/* Bottom Interface */}
      <BuyNowSection />
      
      <FloatingDock />
      
      <MadeWithDyad />
    </main>
  );
};

export default Index;