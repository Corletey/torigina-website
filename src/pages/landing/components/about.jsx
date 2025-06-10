import React from 'react';
import { FaStethoscope, FaXRay, FaTools, FaUserMd } from "react-icons/fa";
import ImagingImg from "../../../assets/img/imaging.jpg";
import ProfImg from "../../../assets/img/founder.jpg";

const About = () => {
  const services = [
    { icon: <FaXRay />, name: "Medical Imaging" },
    { icon: <FaStethoscope />, name: "Medical Consumables" },
    { icon: <FaTools />, name: "Equipment AfterSales Support" },
    { icon: <FaUserMd />, name: "Customer Support" },
  ];

  return (
    <section className="bg-gray-100 py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            ABOUT TORIGINA
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Torigina is a leading provider of medical imaging solutions in Ghana, Nigeria and across Africa. Renowned for consistency and quality, we offer a wide range of medical equipment and consumables, focusing on innovative and cost-effective solutions for healthcare facilities. Our mission is to deliver value-driven and efficient medical imaging services at all levels of healthcare.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0" data-aos="fade-right">
            <div className="relative">
              <img
                src={ImagingImg}
                alt="Medical Imaging Equipment"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
              <img
                src={ProfImg}
                alt="Healthcare Professional"
                className="hidden sm:block absolute bottom-0 right-0 w-1/2 sm:w-auto sm:h-2/3 rounded-lg shadow-lg border-4 border-white object-contain"
                style={{ transform: 'translateY(20%) translateX(20%)' }}
              />
              <div className="absolute top-0 left-0 bg-[#CF5D3E] text-white py-2 px-4 rounded-tl-lg rounded-br-lg">
                <span className="text-xl sm:text-2xl font-bold">20+</span>
                <span className="text-xs sm:text-sm block">Happy Clients</span>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 lg:pl-8 xl:pl-12" data-aos="fade-up">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
              Our Core Values
            </h3>
            <ul className="space-y-2 sm:space-y-4 mb-6 sm:mb-8">
              {[
                "Customer Commitment: Building relationships for a positive experience",
                "Integrity: Upholding the highest standards in all business dealings",
                "Teamwork: Delivering value through collaborative efforts",
                "Personal Accountability: Ensuring we deliver on our brand promise"
              ].map((value, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#CF5D3E] mr-2 mt-1 flex-shrink-0">✓</span>
                  <span className="text-sm sm:text-base">{value}</span>
                </li>
              ))}
            </ul>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white p-3 sm:p-4 rounded-lg shadow"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <div className="text-[#CF5D3E] mr-3 flex-shrink-0">
                    {React.cloneElement(service.icon, { className: "w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" })}
                  </div>
                  <span className="font-semibold text-xs sm:text-sm md:text-base leading-tight">{service.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;