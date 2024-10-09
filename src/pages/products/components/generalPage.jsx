import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import framer-motion for animations
import samsungImg from "../../../assets/img/samsung.avif";
import otherImg from "../../../assets/img/other_brands.webp";

const GeneralProducts = () => {
  const categories = [
    {
      title: "Samsung Ultrasound & X-ray Machines",
      image: samsungImg,
      link: "/products/samsung-products",
    },
    {
      title: "Ultrasound Machines from Other Trusted Brands",
      image: otherImg,
      link: "/products/other-brands",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 font-['Manrope', 'Noto_Sans', sans-serif]">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 py-8">
        <div className="text-center mb-16">
          <motion.h1
            className="text-[#CF5D3E] text-4xl sm:text-5xl font-extrabold leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Discover High-Quality Ultrasound & X-Ray Solutions
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-xl transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
              style={{
                backgroundImage: `url("${category.image}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "400px",
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              <div className="relative flex flex-col justify-end p-6 h-full">
                <motion.h3
                  className="text-white text-3xl font-bold mb-3 drop-shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.4, duration: 0.5 }}
                >
                  {category.title}
                </motion.h3>
                <motion.p
                  className="text-white text-base mb-6 drop-shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.5, duration: 0.5 }}
                >
                  {index === 0
                    ? "Explore our exclusive range of Samsung ultrasound and X-ray machines, designed to provide precision and reliability for healthcare professionals."
                    : "We also offer a selection of high-quality ultrasound machines from other trusted brands, ensuring a solution for every clinical need."}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.6, duration: 0.5 }}
                >
                  <Link
                    to={category.link}
                    className="bg-[#CF5D3E] text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-[#B8462F] transition duration-300 text-center"
                  >
                    See More
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GeneralProducts;
