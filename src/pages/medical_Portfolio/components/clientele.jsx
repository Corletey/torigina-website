import React, { useState, useEffect } from "react";
import { Search, MapPin } from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const clients = [
  "Diagnostic Center Limited, Accra",
  "Komfo Anokye Teaching Hospital",
  "Accra Regional Hospital",
  "I Batch Diagnostics, Gambia",
  "Asi Ukpo Diagnostics, Nigeria",
  "Focos Orthopedic Hospital",
  "Jahmale Medical, Liberia",
  "Cape Coast Teaching Hospital",
  "University of Ghana Medical Center",
  "Cerica Diagnostics",
  "The Trust Hospital",
  "Akai House Clinic",
  "Euracare Diagnostics, Accra",
  "Sunshine Healthcare, Accra",
  "Clinix Hospital, Accra",
  "Nyaho Clinic",
  "37 Military Hospital, Accra",
  "Oasis Diagnostics, Tarkoradi",
  "Olive Health Diagnostics",
  "Cape Coast University Hospital",
  "Spectra Diagnostics, Kumasi",
  "GMIC Kumasi",
  "Serene Imaging, Sunyani",
  "Totalite Diagnostics, Kumasi",
  "Bank of Ghana Hospital, Accra",
  "Accra Medical Center",
  "The Bank Hospital",
  "Quest Medical Imaging",
  "First American Specialist Medical Centre",
  "Aniniwah Medical Centre",
].sort();

const Clientele = () => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 300, // Extended animation duration for smoother feel
      easing: 'ease-out-cubic', // Smooth easing
      once: false, // Animation happens every time you scroll back
      offset: 100, // Trigger animations earlier
    });
  }, []);

  const filteredClients = clients.filter((client) =>
    client.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-16 bg-gray-200">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 
          className="text-5xl font-bold text-center mb-12 text-[#CF5D3E]" 
          data-aos="fade" // Simple fade effect for title
        >
          Our Clientele
        </h2>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8" data-aos="zoom-in" data-aos-delay="200">
          <div className="relative">
            <input
              type="text"
              placeholder="Search clients..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full py-3 px-4 pl-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#CF5D3E] focus:border-transparent"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* Clients List */}
        {filteredClients.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredClients.map((client, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1"
                data-aos="zoom-in" // Subtle zoom-in effect for each card
                data-aos-delay={index * 50} // Staggered delay for a cascading effect
              >
                <MapPin className="text-[#CF5D3E] mb-3" />
                <h3 className="text-xl font-semibold text-[#0e141b] mb-2">
                  {client}
                </h3>
                <div className="w-12 h-1 bg-[#CF5D3E] rounded-full"></div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 text-lg" data-aos="fade-in">
            No hospitals found.
          </p>
        )}
      </div>
    </section>
  );
};

export default Clientele;
