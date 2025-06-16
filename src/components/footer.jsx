import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaEnvelope, FaMapMarkerAlt, FaInstagram,  FaGlobe } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ToriginaLogo from '../assets/logo/torigina.png';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#1f1f1f] via-[#2a2a2a] to-[#1a1a1a] text-gray-300 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#CF5D3E] rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#CF5D3E] rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 relative">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Company Info & Logo */}
          <div className="xl:col-span-2">
            <div className="mb-6">
              <img src={ToriginaLogo} alt="Torigina Logo" className="h-16 w-auto mb-4" />
              <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                Leading technology solutions provider across Ghana and Nigeria, delivering innovative products and exceptional service to empower businesses and individuals.
              </p>
            </div>
            <div className="flex items-center space-x-2 text-sm text-[#CF5D3E] font-medium">
              <FaGlobe className="text-xs" />
              <span>Authorized Samsung Distributor</span>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 relative">
              Contact Us
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#CF5D3E]"></div>
            </h3>
            
            <div className="space-y-4">
              <div className="group">
                <div className="flex items-center mb-3 hover:text-[#CF5D3E] transition-colors duration-300">
                  <FaEnvelope className="mr-3 text-[#CF5D3E] group-hover:scale-110 transition-transform" />
                  <a href="mailto:info@torigina.com" className="text-sm">info@torigina.com</a>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start group">
                  <FaMapMarkerAlt className="mr-3 mt-1 text-[#CF5D3E] flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div className="text-sm">
                    <p className="font-medium text-white mb-1">Ghana Office</p>
                    <p className="text-gray-400 leading-relaxed">C12 3rd Apesh Commey St,<br />Adenta, Accra</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <FaMapMarkerAlt className="mr-3 mt-1 text-[#CF5D3E] flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div className="text-sm">
                    <p className="font-medium text-white mb-1">Nigeria Office</p>
                    <p className="text-gray-400 leading-relaxed">No 7 Talabi Street, off Adeniyi Jones Avenue,<br />Ikeja, Lagos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 relative">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#CF5D3E]"></div>
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Our Services', path: '/services' },
                { name: 'Products', path: '/products' },
                { name: 'Contact', path: '/contact' },
              ].map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.path} 
                    className="text-sm text-gray-400 hover:text-[#CF5D3E] transition-all duration-300 flex items-center group"
                  >
                    <span className="mr-3 text-[#CF5D3E] transform group-hover:translate-x-1 transition-transform">›</span>
                    <span className="group-hover:translate-x-1 transition-transform">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media & Newsletter */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 relative">
              Connect With Us
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#CF5D3E]"></div>
            </h3>
            
            <div className="flex flex-wrap gap-3 mb-6">
              {[
                { icon: FaFacebookF, href: "https://web.facebook.com/toriginaghana/?_rdc=1&_rdr", label: "Facebook" },
                { icon: FaInstagram, href: "https://www.instagram.com/toriginagh/", label: "Instagram" },
                { icon: FaLinkedinIn, href: "https://www.linkedin.com/company/torigina-ghana-limited?trk=public_profile_topcard-current-company", label: "LinkedIn" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-[#333] p-3 rounded-xl text-gray-300 hover:bg-[#CF5D3E] hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#CF5D3E]/20"
                  aria-label={social.label}
                >
                  <social.icon size={18} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>

            <div className="bg-[#2a2a2a] p-4 rounded-xl border border-gray-700">
              <p className="text-xs text-gray-400 mb-2">Stay Updated</p>
              <p className="text-sm text-gray-300">Follow us for the latest tech news and product updates.</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm text-gray-500">
                &copy; {new Date().getFullYear()} <span className="text-[#CF5D3E] font-medium">Torigina</span>. All rights reserved.
              </p>
              <p className="text-xs text-gray-600 mt-1">
                Empowering technology solutions across West Africa
              </p>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;