import React from "react";
import { Link } from "react-router-dom";
import { Send } from "lucide-react";

const RequestDemo = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Request a Demo
        </h2>
        <p className="text-lg text-gray-700 text-center mb-6">
          Interested in learning more about Samsung Ultrasound solutions? Reach out to us, and we will schedule a demo for you.        </p>

        <div className="text-center mt-8">
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-[#CF5D3E] text-white font-semibold rounded-full shadow-md hover:bg-[#b8452f] transition duration-300"
          >
            <Send className="mr-2" size={20} />
            Go to Contact Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RequestDemo;
