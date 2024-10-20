import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Stethoscope, Truck, Shield } from 'lucide-react';

const services = [
  {
    icon: Heart,
    title: "Cardiovascular",
    description: "Cutting-edge cardiovascular devices and equipment."
  },
  {
    icon: Stethoscope,
    title: "Patient Monitoring",
    description: "Advanced patient monitoring systems for accurate diagnostics."
  },
  {
    icon: Truck,
    title: "Medical Logistics",
    description: "Efficient medical supply chain and logistics solutions."
  },
  {
    icon: Shield,
    title: "Device Security",
    description: "Ensuring the security and reliability of medical devices."
  }
];

const TitusMedicalPartnership = () => {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-[#0e141b]">
          Partnership with Titus Medical
        </h2>
        <div className="w-24 h-1 bg-[#CF5D3E] mx-auto mb-8"></div>
        <p className="text-[#0e141b] text-lg text-center max-w-2xl mx-auto mb-12">
          Torigina proudly partners with Titus Medical to bring innovative medical solutions to healthcare providers. Titus Medical specializes in a wide range of medical equipment and services, enhancing our ability to serve the healthcare community.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <service.icon className="w-12 h-12 text-[#CF5D3E] mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://titusmedical.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#CF5D3E] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#B54D2E] transition duration-300"
          >
            Learn More About Titus Medical
          </a>
        </div>
      </div>
    </div>
  );
};

export default TitusMedicalPartnership;