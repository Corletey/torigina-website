import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div>
      <section className="bg-[#CF5D3E] py-16 text-white text-center">
        {/* Animate the title */}
        <motion.h1
          className="text-5xl font-bold"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Our Portfolio
        </motion.h1>

        {/* Animate the paragraph */}
        <motion.p
          className="text-lg mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          Discover our extensive experience and expertise in the healthcare industry.
        </motion.p>
      </section>
    </div>
  );
};

export default Hero;
