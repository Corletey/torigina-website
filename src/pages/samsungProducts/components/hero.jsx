import React, { useEffect } from 'react';
import { ArrowRight, Shield, Zap, Search } from 'lucide-react';
import SamsungUltrasoundImg from "../../../assets/img/lab.jpeg";
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS CSS

const Hero = () => {
  const features = [
    { icon: Shield, text: 'Precision Imaging' },
    { icon: Zap, text: 'Advanced AI' },
    { icon: Search, text: 'Versatile Applications' },
  ];

  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={SamsungUltrasoundImg}
          alt="Samsung Ultrasound Machine" 
          className="w-full h-full object-cover object-center opacity-20"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-white text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto" data-aos="fade-up" data-aos-duration="800">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
          Transform Healthcare with
          <span className="text-[#CF5D3E] block mt-2">Samsung Ultrasound Technology</span>
        </h1>
        <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto">
          Discover the exceptional imaging capabilities and groundbreaking features 
          that set Samsung Ultrasound apart, trusted by top brands and designed to elevate diagnostic accuracy.
        </p>
        
        {/* Features */}
        <div className="flex flex-wrap justify-center gap-8 mb-10">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex items-center bg-white bg-opacity-10 rounded-full px-6 py-3"
              data-aos="zoom-in" 
              data-aos-duration="600" 
              data-aos-delay={index * 100} // staggered effect
            >
              <feature.icon className="w-6 h-6 mr-3 text-[#CF5D3E]" />
              <span className="text-lg font-semibold">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-900 to-transparent z-10"></div>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full "></div>
      <div className="absolute bottom-1/4 left-1/4 w-48 h-48 rounded-full "></div>
    </div>
  );
};

export default Hero;
