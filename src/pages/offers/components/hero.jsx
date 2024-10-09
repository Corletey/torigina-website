import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://cdn.usegalileo.ai/stability/6de86879-d3a4-4e53-83d8-735bd9670c3b.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.7)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10" />
      
      <div className="container mx-auto px-4 relative z-20">
        <motion.div 
          className="max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-black text-white leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive Medical Solutions by <span className="text-[#CF5D3E]">Torigina</span>
          </motion.h1>
          <motion.h2 
            className="text-xl md:text-2xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Explore our range of services:
          </motion.h2>
          <motion.ul
            className="list-disc list-inside text-lg text-white space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <li>State-of-the-art Medical Equipment</li>
            <li>High-quality Medical Consumables</li>
            <li>Expert Equipment AfterSales Support</li>
          </motion.ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;