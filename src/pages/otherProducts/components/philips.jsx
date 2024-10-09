import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Philips = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <div id="Philips" className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
      <motion.div
        className="border-2 border-[#CF5D3E] p-4 cursor-pointer"
        onClick={toggleAccordion}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-black">Philips</h2>
          {isOpen ? (
            <ChevronUp className="text-black" size={24} />
          ) : (
            <ChevronDown className="text-black" size={24} />
          )}
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="p-4 font-bold font-5xl center">
              Used/Refurbished Systems
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Philips;