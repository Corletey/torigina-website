import React, { useState, useEffect } from "react";
import { FaStethoscope, FaXRay, FaTools, FaUserMd } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import MedImg from "../../../assets/img/imaging3.jpg";
import ConsumablesImg from "../../../assets/img/lab.jpeg";
import EquipmentSupportImg from "../../../assets/img/refurbished.jpg";
import SupportImg from "../../../assets/img/torigina.jpg";
import { Link } from "react-router-dom";

const slides = [
  {
    title: "Medical Imaging Solutions",
    subtitle: "Providing value-driven and efficient medical imaging solutions",
    image: MedImg,
  },
  {
    title: "Medical Consumables",
    subtitle: "Top-quality consumables for precise diagnostics",
    image: ConsumablesImg,
  },
  {
    title: "Medical Equipment Support",
    subtitle: "Customized imaging systems support services",
    image: EquipmentSupportImg,
  },
  {
    title: "Customer Support",
    subtitle: "Building relationships for a positive customer experience",
    image: SupportImg,
  },
];

const services = [
  { name: "Imaging", icon: <FaXRay /> },
  { name: "Consumables", icon: <FaStethoscope /> },
  { name: "Equipment Support", icon: <FaTools /> },
  { name: "Customer Support", icon: <FaUserMd /> },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    const slideTimer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(slideTimer);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      <div className="h-full relative">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
              index === currentSlide ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center w-full px-4 sm:px-6 md:px-8 lg:px-12" data-aos="fade-up">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-4 sm:mb-6">
                  {slide.title}
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white mb-6 sm:mb-8 max-w-3xl mx-auto">
                  {slide.subtitle}
                </p>
                <div className="flex justify-center space-x-4">
                  <Link to="/services" className="bg-[#CF5D3E] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-lg sm:text-xl md:text-2xl font-semibold hover:bg-orange-700 transition duration-300">
                    Our Services
                  </Link>
                  <Link to="/portfolio" className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-lg sm:text-xl md:text-2xl font-semibold hover:bg-white hover:text-[#CF5D3E] transition duration-300">
                    Our Portfolio
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-2 sm:p-4">
        <div className="flex flex-wrap justify-center items-center max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`text-center text-white transition-transform duration-300 w-1/2 sm:w-1/4 p-1 sm:p-2 ${
                index === currentSlide
                  ? "opacity-100 transform scale-105"
                  : "opacity-70 transform scale-100 hover:opacity-100 hover:scale-105"
              }`}
            >
              <div className="bg-[#CF5D3E] p-2 sm:p-3 md:p-4 rounded-lg shadow-lg flex flex-col items-center justify-center min-h-[60px] sm:min-h-[80px] md:min-h-[100px] lg:min-h-[120px]">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-1 sm:mb-2">
                  {React.cloneElement(service.icon, { className: "w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" })}
                </div>
                <span className="text-xs sm:text-sm md:text-base lg:text-lg block mt-1">
                  {service.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;