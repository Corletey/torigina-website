import React from 'react';
import { motion } from 'framer-motion';
import { TestTube2, Droplet, Biohazard, FlaskConical, Activity, ShieldCheck } from 'lucide-react';

const solutions = [
  {
    icon: TestTube2,
    title: "Urine Diagnostics",
    description:
      "Comprehensive systems including analyzers, urine test strips, controls, and veterinary diagnostics for accurate and efficient testing."
  },
  {
    icon: Droplet,
    title: "Hematology",
    description:
      "High-performance analyzers, reagents, and controls tailored for small to mid-sized laboratories and clinical settings."
  },
  {
    icon: Biohazard,
    title: "Explosives Detection",
    description:
      "Specialized non-IVD test kits for the detection of explosive materials, serving security and defense industries."
  },
  {
    icon: FlaskConical,
    title: "Point-of-Care Solutions",
    description:
      "Compact diagnostic systems designed for rapid results at the patient’s side—enhancing speed and clinical decision-making."
  },
  {
    icon: ShieldCheck,
    title: "Certified Quality",
    description:
      "All IVD systems are developed and manufactured under DIN EN ISO 13485 standards, ensuring global compliance and reliability."
  },
  {
    icon: Activity,
    title: "Veterinary Diagnostics",
    description:
      "Specialized urine diagnostic solutions adapted for veterinary practices, providing animal-specific testing options."
  }
];

const Analyticon = () => {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-white-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-[#0e141b]">
          Partnership with Analyticon
        </h2>
        <div className="w-24 h-1 bg-[#CF5D3E] mx-auto mb-8"></div>
        <p className="text-[#0e141b] text-lg text-center max-w-3xl mx-auto mb-12">
          Torigina collaborates with Analyticon Biotechnologies GmbH, a global supplier of advanced diagnostic systems. 
          Their product offerings in urine diagnostics, hematology, and explosive detection empower clinical and security professionals 
          with high-quality, ISO-certified solutions across over 100 countries.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <solution.icon className="w-12 h-12 text-[#CF5D3E] mb-4" />
              <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
              <p className="text-gray-600">{solution.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://www.analyticon-diagnostics.com/en/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#CF5D3E] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#B54D2E] transition duration-300"
          >
            Learn More About Analyticon
          </a>
        </div>
      </div>
    </div>
  );
};

export default Analyticon;
