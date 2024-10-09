import React, { useEffect } from 'react';
import { Shield, Package, Truck, HeartPulse } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MedicalEquipmentImg from "../../../assets/img/lab.jpeg";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const features = [
    { icon: Shield, text: 'Trusted Brands' },
    { icon: Package, text: 'Diverse Product Range' },
    { icon: Truck, text: 'Efficient Distribution' },
    { icon: HeartPulse, text: 'Quality Assurance' },
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-100">
      <div className="absolute inset-0 z-0">
        <img
          src={MedicalEquipmentImg}
          alt="Medical equipment background"
          className="w-full h-full object-cover object-center opacity-50"
        />
      </div>
      <div className="relative z-10 text-gray-800 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          data-aos="fade-down"
        >
          Discover Our<br />
          <span className="text-[#CF5D3E]">Premium Products</span>
        </h1>
        <p
          className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Torigina proudly partners with leading medical equipment brands, 
          offering a comprehensive range of high-quality products to elevate your healthcare practice.
        </p>
        <p
          className="text-lg sm:text-xl mb-12 max-w-3xl mx-auto font-semibold"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Explore our curated selection from renowned manufacturers, ensuring you have access to the best in medical technology.
        </p>
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center bg-white rounded-lg p-4 shadow-md transition-all duration-300 hover:shadow-lg hover:transform hover:scale-105">
              <feature.icon className="w-12 h-12 mb-3 text-[#CF5D3E]" />
              <span className="text-sm sm:text-base font-medium">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;