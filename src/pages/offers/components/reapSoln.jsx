import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, QrCode, Printer, Shield, Mic, Database, Cpu } from 'lucide-react';

const services = [
  {
    icon: Mic,
    title: "Nuance Dragon Medical Direct",
    description: "Cloud-based speech recognition for seamless clinical documentation."
  },
  {
    icon: QrCode,
    title: "Nexta",
    description: "Secure medical report sharing via encrypted QR codes."
  },
  {
    icon: Printer,
    title: "Ultra-P & Ultra-F",
    description: "High-quality radiology image printing (paper & film)."
  },
  {
    icon: Shield,
    title: "Banrays RF Shielding",
    description: "Medical-grade radiation shielding with 5-year warranty."
  },
  {
    icon: Printer,
    title: "REAP Ultra-100",
    description: "High-resolution medical printing with external ink tanks."
  },
  {
    icon: Database,
    title: "DataNostic",
    description: "Clinic Information System (CIS) with voice dictation."
  },
  {
    icon: Cpu,
    title: "PaxeraHealth",
    description: "AI-powered radiology workflow with smart algorithms."
  },
  {
    icon: Cloud,
    title: "Cloud Integration",
    description: "Secure cloud storage for medical data & imaging."
  }
];

const ReapSolutions = () => {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-[#0e141b]">
          Partnership with REAP Solutions
        </h2>
        <div className="w-24 h-1 bg-[#CF5D3E] mx-auto mb-8"></div>
        <p className="text-[#0e141b] text-lg text-center max-w-2xl mx-auto mb-12">
          Through our strategic partnership with REAP Solutions, Torigina brings cutting-edge healthcare technology to providers worldwide. REAP’s AI-driven diagnostics, secure data management, and workflow solutions—integrated with Torigina’s expertise—enhance clinical operations, improve patient outcomes, and streamline medical workflows across global markets.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
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
            href="https://reapsolutions.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#CF5D3E] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#B54D2E] transition duration-300 inline-block"
          >
            Explore REAP Solutions
          </a>
        </div>
      </div>
    </div>
  );
};

export default ReapSolutions;