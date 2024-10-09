import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaXRay, FaStethoscope, FaTools, FaUserMd } from "react-icons/fa";

const services = [
  {
    name: "Medical Imaging",
    icon: <FaXRay className="w-12 h-12 text-[#CF5D3E] transition-transform duration-300 transform hover:scale-110" />,
    description: "Providing value-driven and efficient medical imaging solutions across all levels in the healthcare industry.",
  },
  {
    name: "Medical Consumables",
    icon: <FaStethoscope className="w-12 h-12 text-[#CF5D3E] transition-transform duration-300 transform hover:scale-110" />,
    description: "Offering top-quality medical consumables, from X-ray films to contrast media, ensuring precise diagnostics and patient care.",
  },
  {
    name: "Equipment AfterSales Support",
    icon: <FaTools className="w-12 h-12 text-[#CF5D3E] transition-transform duration-300 transform hover:scale-110" />,
    description: "24-hour technical assistance for installed medical equipment, including maintenance, repairs, and troubleshooting.",
  },
  {
    name: "Customer Support",
    icon: <FaUserMd className="w-12 h-12 text-[#CF5D3E] transition-transform duration-300 transform hover:scale-110" />,
    description: "Responsive service for inquiries, order processing, and general product information to enhance your Torigina experience.",
  },
];

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-[#CF5D3E] mb-8" data-aos="fade-up">Our Services</h2>
        <p className="text-lg text-gray-700 mb-12" data-aos="fade-up" data-aos-delay="100">
          Discover how Torigina Ghana Limited can enhance your healthcare operations with our comprehensive services.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-lg shadow-lg hover:bg-gray-100 transition-colors duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="mb-4 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.name}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;