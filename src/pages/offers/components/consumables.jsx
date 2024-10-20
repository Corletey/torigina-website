//src/pages/offers/components/consumables.jsx
import React from 'react';
import { motion } from 'framer-motion';
import XrayImg from '../../../assets/img/xrayfilm.jpg';
import implantImg from '../../../assets/img/implants.webp';
import mediaImg from '../../../assets/img/media.png';
import catheterImg from '../../../assets/img/catheters.jpg';
import dialysisImg from '../../../assets/img/dialysis_kit.webp';
import glovesImg from '../../../assets/img/glove_boxes.jpg';
import paperImg from '../../../assets/img/ultrasound_paper.jpg';
import syringeImg from '../../../assets/img/ct_syringe.jpg';
import suturesImg from '../../../assets/img/suture.jpg';
import dentalImg from '../../../assets/img/dental_tools.avif';

const MedicalConsumables = () => {
  const consumables = [
    { name: "X-Ray Films", image: XrayImg , description: "High-quality x-ray films for accurate imaging." },
    { name: "Orthopedic and Spine Implants", image: implantImg, description: "Durable implants for orthopedic and spine surgeries." },
    { name: "Contrast Media for CT Scan & MRI", image: mediaImg, description: "Premium contrast agents for precise imaging results." },
    { name: "Disposable HSG Catheters & Tray", image: catheterImg, description: "Single-use HSG catheters and trays for patient safety." },
    { name: "Dialysis Consumables", image: dialysisImg, description: "Essential consumables for effective dialysis treatment." },
    { name: "Examination & Surgical Gloves", image: glovesImg, description: "High-quality gloves for safe and sterile procedures." },
    { name: "Original Sony Ultrasound Paper", image: paperImg, description: "Clear and reliable ultrasound paper for diagnostic printing." },
    { name: "CT Injector Syringes", image: syringeImg, description: "Specialized syringes for safe and efficient contrast injection." },
    { name: "Surgical Sutures", image: suturesImg, description: "Reliable sutures for precise wound closure." },
    { name: "Dental Units & Consumables", image: dentalImg, description: "Comprehensive dental units and consumables for effective care." },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-300 to-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4 text-[#0e141b]">
          Medical Consumables Supply
        </h1>
        <div className="w-24 h-1 bg-[#CF5D3E] mx-auto mb-8"></div>
        <p className="text-[#0e141b] text-lg text-center max-w-2xl mx-auto mb-12">
          Our medical consumables supply includes everything from x-ray films and implants to surgical gloves and sutures, ensuring high standards of care and safety.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {consumables.map((item, index) => (
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
                style={{ backgroundImage: `url("${item.image}")` }}
              ></div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-[#0e141b] mb-2">{item.name}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MedicalConsumables;
