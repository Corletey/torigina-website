//src/pages/offers/components/imagingSoln.jsx
import React from 'react';
import { motion } from 'framer-motion';
import MammoImg from "../../../assets/img/mammography.jpg";
import DUnitImg from "../../../assets/img/dunit.jpg";
import XPrintImg from "../../../assets/img/xrayprinter.webp";
import RadioImg from "../../../assets/img/radiography.jpg";
import FluoroscopyImg from "../../../assets/img/fluoroscopy.jpg";
import DiaImg from "../../../assets/img/dialysis.webp";
import UltraImg from "../../../assets/img/HERA_W10_Dynamic.jpg";
import MRIImg from "../../../assets/img/mri.webp";
import CTImg from "../../../assets/img/ctscan.webp";
import XrayImg from "../../../assets/img/002_GC85A Vision+_Front2.jpg";


const imagingEquipment = [
  { name: "Ultrasound Systems", image: UltraImg },
  { name: "Mammography Machine", image: MammoImg },
  { name: "Dental Units", image: DUnitImg },
  { name: "X-Ray Printers", image: XPrintImg },
  { name: "Computed Radiography Units", image: RadioImg },
  { name: "Fluoroscopy Units", image: FluoroscopyImg },
  { name: "Dialysis Machines", image: DiaImg },
  { name: "MRI", image: MRIImg },
  { name: "CT Scan Machine", image: CTImg },
  { name: "X-Ray Machine", image: XrayImg },
];
const ImagingSolutions = () => {
  return (
    <div className="bg-gradient-to-b from-gray-300 to-white py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4 text-[#0e141b]">
          Medical Equipment Product Offering
        </h1>
        <div className="w-24 h-1 bg-[#CF5D3E] mx-auto mb-8"></div>
        <p className="text-[#0e141b] text-lg text-center max-w-2xl mx-auto mb-12">
          Explore our extensive range of medical equipment, from mammography machines to advanced MRI systems, designed to support accurate diagnostics and patient care.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {imagingEquipment.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className="h-48 bg-center bg-no-repeat bg-cover"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-[#0e141b] mb-2">{item.name}</h3>
                <p className="text-gray-600 text-sm">High-quality equipment for precise diagnostics and patient care.</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImagingSolutions;
