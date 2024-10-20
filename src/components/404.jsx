import React from "react";
import { Link } from "react-router-dom";
import { Stethoscope, Heart, AlertTriangle } from "lucide-react";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="text-center">
        {/* Medical Icons */}
        <div className="flex justify-center items-center mb-8 space-x-4">
          <Heart className="text-[#CF5B3C] w-16 h-16" />
          <Stethoscope className="text-[#CF5B3C] w-16 h-16" />
          <AlertTriangle className="text-[#CF5B3C] w-16 h-16" />
        </div>

        {/* 404 Title */}
        <h1 className="text-6xl font-bold text-[#CF5B3C] mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Oops! Page Not Found</h2>
        
        {/* Friendly Message */}
        <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto">
          It looks like the page you're looking for is on life support. Don't worry, our medical team is working on it! In the meantime, you can head back to our homepage.
        </p>

        {/* Return to Homepage */}
        <Link 
          to="/" 
          className="bg-[#CF5B3C] text-white font-semibold py-3 px-6 rounded-full hover:bg-[#b8452f] transition duration-300 inline-flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
