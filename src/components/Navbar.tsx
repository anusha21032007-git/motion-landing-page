"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6"
    >
      <div className="flex items-center justify-between w-full max-w-7xl px-8 py-3 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-tr from-purple-600 to-blue-500 rounded-lg flex items-center justify-center">
            <Cpu className="text-white w-5 h-5" />
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 tracking-tighter">
            NOVABOOK
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <a href="#performance" className="hover:text-white transition-colors">Performance</a>
          <a href="#display" className="hover:text-white transition-colors">Retina X</a>
          <a href="#ecosystem" className="hover:text-white transition-colors">macOS</a>
          <a href="#specs" className="hover:text-white transition-colors">Specs</a>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" className="text-white hover:bg-white/10 rounded-full">
            Sign In
          </Button>
          <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-6 font-bold flex items-center gap-2">
            Buy Now <ShoppingCart className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;