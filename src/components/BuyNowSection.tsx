"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight } from 'lucide-react';

const BuyNowSection = () => {
  return (
    <section className="min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden px-4">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-600/20 blur-[120px] rounded-full" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="text-center z-10"
      >
        <h2 className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tighter">
          Ready to transcend?
        </h2>
        <p className="text-gray-400 text-xl md:text-2xl mb-12 max-w-2xl mx-auto">
          The future of NovaBook is here. Starting at $1,999 or $166.58/mo. for 12 mo.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <Button size="lg" className="bg-white text-black hover:bg-gray-200 rounded-full h-16 px-10 text-xl font-bold">
            Order Now <ChevronRight className="ml-2 w-5 h-5" />
          </Button>
          <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 rounded-full h-16 px-10 text-xl">
            Watch the Film
          </Button>
        </div>
      </motion.div>
      
      <footer className="absolute bottom-10 left-0 right-0 px-10 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm gap-4">
        <div className="flex gap-8">
          <span>Copyright © 2024 NovaBook Inc.</span>
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Use</a>
        </div>
        <div className="flex items-center gap-2">
          Developed by Nova Creative <ArrowRight className="w-4 h-4" />
        </div>
      </footer>
    </section>
  );
};

export default BuyNowSection;