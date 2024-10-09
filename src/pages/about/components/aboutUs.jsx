import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Target, Eye, Heart, Shield, Users, CheckCircle } from 'lucide-react';

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic'
    });
  }, []);

  const values = [
    { icon: <Heart />, title: 'Customer Commitment', description: 'Building relationships that give our customers a positive experience with our brand.' },
    { icon: <Shield />, title: 'Integrity', description: 'Upholding the highest standard of integrity in all our business dealings.' },
    { icon: <Users />, title: 'Teamwork', description: 'Working as a team to deliver value to our customers.' },
    { icon: <CheckCircle />, title: 'Personal Accountability', description: 'Taking responsibility to deliver on our brand promise.' }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-800 mb-8 sm:mb-12 md:mb-16"
          data-aos="fade-up"
        >
          Our Mission, Vision, and Values
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 mb-12 sm:mb-16 md:mb-20">
          <div 
            className="bg-white p-6 sm:p-8 rounded-xl shadow-lg"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div className="flex items-center mb-4 sm:mb-6">
              <Target className="w-8 h-8 sm:w-10 sm:h-10 text-[#CF5D3E] mr-3 sm:mr-4" />
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">Our Mission</h3>
            </div>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              To provide value-driven and efficient medical imaging solutions across all levels in the healthcare industry.
            </p>
          </div>

          <div 
            className="bg-white p-6 sm:p-8 rounded-xl shadow-lg"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div className="flex items-center mb-4 sm:mb-6">
              <Eye className="w-8 h-8 sm:w-10 sm:h-10 text-[#FF6F61] mr-3 sm:mr-4" />
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">Our Vision</h3>
            </div>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              To be recognized in Africa as a leader in the medical imaging space, leveraging international best practices to provide cost-effective and innovative solutions to customers worldwide.
            </p>
          </div>
        </div>

        <h3 
          className="text-2xl sm:text-3xl font-semibold text-center text-gray-800 mb-8 sm:mb-12"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Our Core Values
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={400 + index * 100}
            >
              <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-[#CF5D3E] rounded-full mb-4 sm:mb-6 mx-auto">
                {React.cloneElement(value.icon, { className: "w-6 h-6 sm:w-8 sm:h-8 text-white" })}
              </div>
              <h4 className="text-lg sm:text-xl font-semibold text-gray-800 text-center mb-2 sm:mb-3">{value.title}</h4>
              <p className="text-sm sm:text-base text-gray-600 text-center">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;