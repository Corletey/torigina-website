import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaUserMd, FaCheckCircle, FaDollarSign, FaHeadset } from "react-icons/fa";

const reasons = [
  {
    title: "Expert Team",
    description: "Our team consists of highly skilled professionals with years of experience.",
    icon: <FaUserMd className="text-white w-12 h-12" />,
  },
  {
    title: "Quality Service",
    description: "We provide top-notch services to ensure your complete satisfaction.",
    icon: <FaCheckCircle className="text-white w-12 h-12" />,
  },
  {
    title: "Affordable Pricing",
    description: "We offer competitive pricing without compromising on quality.",
    icon: <FaDollarSign className="text-white w-12 h-12" />,
  },
  {
    title: "Customer Support",
    description: "Our support team is available 24/7 to assist you with your needs.",
    icon: <FaHeadset className="text-white w-12 h-12" />,
  },
];

const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section className="py-16 bg-[#CF5D3E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-8 text-center" data-aos="fade-up">Why Choose Us</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8" data-aos="fade-right">
            {reasons.slice(0, 2).map((reason, index) => (
              <div key={index} className="flex items-center">
                <div className="bg-black bg-opacity-25 p-4 rounded-full mr-6">
                  {reason.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">{reason.title}</h3>
                  <p>{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-8" data-aos="fade-left">
            {reasons.slice(2).map((reason, index) => (
              <div key={index} className="flex items-center">
                <div className="bg-black bg-opacity-25 p-4 rounded-full mr-6">
                  {reason.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">{reason.title}</h3>
                  <p>{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
