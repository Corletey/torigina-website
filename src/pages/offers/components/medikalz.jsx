import React from 'react';
import { motion } from 'framer-motion';
import { Clipboard, Clock, CreditCard, FileText, MapPin, Shield, Stethoscope, Users } from 'lucide-react';

const medikalbServices = [
  { name: "Flexible Report-Formats", icon: FileText, description: "Tailor your diagnostic interpretations to suit your preferences and operational processes effortlessly." },
  { name: "Subspecialty Expertise", icon: Stethoscope, description: "Support your diagnostic capabilities with our rich and diverse subspecialty knowledge for precise radiological interpretations." },
  { name: "Remote Area Services", icon: MapPin, description: "Specialized in addressing challenges faced by hospitals in remote areas seeking expertise of top-tier radiologists." },
  { name: "Zero Startup Costs", icon: CreditCard, description: "We deliver services without any upfront expenses, ensuring smooth and safe transition of data." },
  { name: "Emergency Reports", icon: Clock, description: "Different packages starting from 24h routine reports to emergency reports within 40-60 min." },
  { name: "Operational Management", icon: Clipboard, description: "Efficient radiology operational management backed by clear KPIs for enhanced efficiency." },
  { name: "Reliable Services at Affordable Costs", icon: Shield, description: "Tele-radiology reports at costs within reach. We prioritize reliability without compromising affordability." },
  { name: "Customized Solutions", icon: Users, description: "Personalized teleradiology services integrated with your activities, recognizing the individuality of each facility." },
];

const MedikalzServices = () => {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-white py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-[#0e141b]">
          TeleRadiology Services by Medikalz
        </h2>
        <div className="w-24 h-1 bg-[#D35F3F] mx-auto mb-8"></div>
        <p className="text-[#0e141b] text-lg text-center max-w-2xl mx-auto mb-12">
          Discover our comprehensive TeleRadiology solutions in partnership with Medikalz, crafted to enhance your diagnostic capabilities and streamline patient care. Together, we deliver reliable, efficient, and personalized radiological services that meet the unique needs of healthcare facilities.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {medikalbServices.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-6">
                <service.icon className="w-12 h-12 text-[#D35F3F] mb-4" />
                <h3 className="text-xl font-semibold text-[#0e141b] mb-2">{service.name}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Add a button linking to Medikalz website */}
        <div className="text-center mt-10">
          <a href="https://www.medikalz.com" target="_blank" rel="noopener noreferrer">
            <button className="bg-[#D35F3F] text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-[#C34A3A] transition duration-300">
              Learn More About Medikalz
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MedikalzServices;
