import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Activity, Stethoscope } from "lucide-react";
import AboutHeroImg from "../../../assets/img/imaging4.jpg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image */}
      <img src={AboutHeroImg} alt="About Us" className="absolute inset-0 w-full h-full object-cover z-0" />
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="container mx-auto px-4 py-10 sm:py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white mb-4 sm:mb-6 leading-tight">
            Delivering Excellence in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CF5D3E] to-yellow-500">
              Healthcare
            </span>
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-lg sm:max-w-3xl mx-auto">
            Cutting-edge medical equipment with unparalleled aftersales support
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-4 sm:p-6 shadow-2xl"
          >
            <Stethoscope className="w-10 h-10 sm:w-12 sm:h-12 text-[#CF5D3E] mb-3 sm:mb-5" />
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">Medical Equipment</h2>
            <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-5 flex-grow">
              State-of-the-art CT Scans, X-rays, MRIs, and more
            </p>
            <Link to={"/products"}
              className="mt-auto flex items-center text-[#CF5D3E] font-semibold hover:text-white transition-colors duration-300"
            >
              Discover Products <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-4 sm:p-6 shadow-2xl"
          >
            <Activity className="w-10 h-10 sm:w-12 sm:h-12 text-[#CF5D3E] mb-3 sm:mb-5" />
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">Comprehensive Healthcare Solutions</h2>
            <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-5 flex-grow">
              Providing quality medical supplies and services for every need
            </p>
            <Link to={"/services"}
              className="mt-auto flex items-center text-[#CF5D3E] font-semibold hover:text-white transition-colors duration-300"
            >
              Discover Services <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
