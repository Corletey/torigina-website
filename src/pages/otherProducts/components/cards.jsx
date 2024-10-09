import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AgfaLogo from "../../../assets/brands/agfa.png";
import FujifilmLogo from "../../../assets/brands/fujifilm.png";
import GeLogo from "../../../assets/brands/ge.png";
import MedemLogo from "../../../assets/brands/medem.png";
import MikronLogo from "../../../assets/brands/mikron.jpg";
import PhilipsLogo from "../../../assets/brands/philips.png";
import SiemensLogo from "../../../assets/brands/siemens.png";
import CingolLogo from "../../../assets/brands/cingol.png";
import SonyLogo from "../../../assets/brands/sony.png";
import MindrayLogo from "../../../assets/brands/mindray.png";
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS CSS

// List of brands
const brands = [
  { name: 'Agfa', logo: AgfaLogo },
  { name: 'Cingol', logo: CingolLogo },
  { name: 'Fujifilm', logo: FujifilmLogo },
  { name: 'GE', logo: GeLogo },
  { name: 'Medem', logo: MedemLogo },
  { name: 'Mindray', logo: MindrayLogo },
  { name: 'Mikron', logo: MikronLogo },
  { name: 'Philips', logo: PhilipsLogo },
  { name: 'Siemens', logo: SiemensLogo },
  { name: 'Sony', logo: SonyLogo },
];

const BrandCards = () => {
  const [hoveredBrand, setHoveredBrand] = useState(null);

  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  // Function to handle scroll on click
  const scrollToSection = (brandName) => {
    const element = document.getElementById(brandName);
    if (element) {
      const offset = 100; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8" data-aos="fade-up" data-aos-duration="800">Our Trusted Brands</h2>
        <p className="text-lg text-gray-700 text-center mb-6" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
          We proudly offer a comprehensive range of high-quality products from renowned brands in the medical equipment industry. Should you require equipment or a specific brand not listed here, we encourage you to <Link to="/contact" className="text-[#CF5D3E] hover:text-orange-800 transition-colors duration-300 font-semibold">contact our team</Link>. Our dedicated professionals are committed to assisting you in finding the optimal solution tailored to your unique requirements.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              className="relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setHoveredBrand(brand.name)}
              onHoverEnd={() => setHoveredBrand(null)}
              onClick={() => scrollToSection(brand.name)}
              data-aos="zoom-in" 
              data-aos-duration="500" 
              data-aos-delay={index * 100} // staggered effect
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 group-hover:shadow-xl">
                <div className="p-4 flex items-center justify-center h-32">
                  <img 
                    src={brand.logo} 
                    alt={`${brand.name} logo`} 
                    className="max-h-full max-w-full object-contain filter group-hover:brightness-90 transition-all duration-300" 
                  />
                </div>
              </div>
              <motion.div
                className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredBrand === brand.name ? 1 : 0 }}
              >
                <span className="text-white font-semibold">{brand.name}</span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandCards;
