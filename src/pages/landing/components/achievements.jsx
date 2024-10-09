import React from 'react';
import { FaTrophy } from 'react-icons/fa';

const achievements = [
  {
    title: "Best Medical Equipment Supplier 2023",
    description: "Awarded for our exceptional service and top-quality medical equipment.",
    image: "src/assets/img/award1.jpg",
    date: "2023"
  },
  {
    title: "Top Innovator in Healthcare Solutions",
    description: "Recognized for innovative solutions in medical imaging and logistics.",
    image: "src/assets/img/award2.jpg",
    date: "2022"
  },
  {
    title: "Outstanding Customer Service Award",
    description: "Acknowledged for our commitment to providing outstanding customer service.",
    image: "src/assets/img/award3.jpg",
    date: "2021"
  }
];

const Achievements = () => {
  return (
    <section className="bg-gray-200 py-8 md:py-16" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center" data-aos="fade-down">
          Our Achievements
        </h2>
        <p className="text-gray-600 mb-8 text-center" data-aos="fade-up" data-aos-delay="200">
          We take pride in our milestones and awards, reflecting our commitment to excellence in healthcare solutions.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
              data-aos="fade-up"
              data-aos-delay={`${index * 200}`}
            >
              <img
                src={achievement.image}
                alt={achievement.title}
                className="w-full h-32 md:h-40 object-cover"
              />
              <div className="p-4 md:p-6">
                <div className="flex items-center mb-3">
                  <FaTrophy className="text-[#CF5D3E] text-2xl md:text-3xl mr-2" />
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800">{achievement.title}</h3>
                </div>
                <p className="text-gray-600 mb-3 text-sm md:text-base">{achievement.description}</p>
                <span className="block text-gray-500 text-xs md:text-sm">{achievement.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
