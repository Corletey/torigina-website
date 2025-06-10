import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AboutImg from "../../../assets/img/about.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutTorigina = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div
            className="lg:w-1/2 order-2 lg:order-1"
            data-aos="fade-up" // AOS effect for smooth fade-up
          >
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Who We Are
            </motion.h2>
            <motion.div
              className="space-y-6 text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <p className="text-lg leading-relaxed">
                At <span className="font-semibold text-[#CF5D3E]">Torigina</span>,
                we're dedicated to revolutionizing healthcare delivery through cutting-edge medical
                imaging solutions. Our comprehensive portfolio includes state-of-the-art MRI, CT scanners,
                X-ray machines, and ultrasound systems, addressing diverse healthcare needs across the continent.
              </p>
              <p className="text-lg leading-relaxed">
                Guided by our core values of integrity, innovation, and customer commitment, we've
                established ourselves as a trusted partner to leading healthcare institutions. From 
                the University of Ghana Medical Center to Asi Ukpo Diagnostics in Nigeria, our impact
                spans across West Africa, elevating the standard of medical care.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Link
                to={"/portfolio"}
                className="inline-flex items-center mt-8 px-6 py-3 bg-[#CF5D3E] text-white rounded-full shadow-md hover:bg-[#d44d32] transition duration-300 group"
                data-aos="fade-right" // AOS effect for fade-right animation
              >
                Discover Our Portfolio
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                  size={20}
                />
              </Link>
            </motion.div>
          </div>

          <motion.div
            className="lg:w-1/2 order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            data-aos="fade-left" // AOS effect for fade-left animation
          >
            <img
              src={AboutImg}
              alt="About Torigina"
              className="rounded-lg shadow-xl w-full max-w-md mx-auto lg:max-w-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutTorigina;
