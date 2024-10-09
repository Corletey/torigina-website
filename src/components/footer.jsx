import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaEnvelope, FaMapMarkerAlt, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ToriginaLogo from '../assets/logo/torigina.png';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] text-gray-300 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-[#CF5D3E] mb-6">Contact Us</h3>
            <div className="flex items-center mb-4">
              <FaEnvelope className="mr-3 text-[#CF5D3E]" />
              <a href="mailto:info@torigina.com" className="hover:text-[#CF5D3E] transition duration-300">info@torigina.com</a>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="mr-3 text-[#CF5D3E]" />
              <p>C12 3RD APESH COMMEY ST, ADENTA, ACCRA GHANA</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-xl font-bold text-[#CF5D3E] mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['About', 'Services', 'Contact'].map((item, index) => (
                <li key={index}>
                  <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className="hover:text-[#CF5D3E] transition duration-300 flex items-center">
                    <span className="mr-2">&#8250;</span> {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Icons */}
          <div>
            <h3 className="text-xl font-bold text-[#CF5D3E] mb-6">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://web.facebook.com/toriginaghana/?_rdc=1&_rdr"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#333] p-3 rounded-full text-gray-300 hover:bg-[#CF5D3E] hover:text-white transition duration-300"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://www.instagram.com/toriginagh/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#333] p-3 rounded-full text-gray-300 hover:bg-[#CF5D3E] hover:text-white transition duration-300"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/torigina-ghana-limited?trk=public_profile_topcard-current-company"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#333] p-3 rounded-full text-gray-300 hover:bg-[#CF5D3E] hover:text-white transition duration-300"
              >
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>

          {/* Authorized Distributor */}
          <div className="flex-1">
            <img src={ToriginaLogo} alt="Torigina Image and samsung disttributor" className="w-full h-20 mb-4" />
            {/* <p className='text-[14px] flex justify-end self-end'>Authorized Distributor of Samsung</p> */}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Torigina. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
