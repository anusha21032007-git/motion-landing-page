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
    <main className="bg-black min-h-screen text-white font-sans selection:bg-purple-500 selection:text-white overflow-x-hidden">
      {/* Global Cinematic Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[60] opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      <Navbar />
      
      {/* Scroll-driven Hero & Product Showcase */}
      <ProductScrollCanvas />
      
      {/* Floating Content Sections */}
      <div className="relative z-20">
        <TextOverlaySections />
      </div>
      
      {/* Conversion & Footer */}
      <BuyNowSection />
      
      <FloatingDock />
      
      <MadeWithDyad />
    </main>
  );
};

export default Index;