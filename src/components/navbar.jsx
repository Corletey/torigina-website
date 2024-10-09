import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaTools, FaBriefcase, FaShoppingCart, FaEnvelope, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import LogoImg from '../assets/logo/torigina.png';

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleScroll = () => {
    setScrolling(window.scrollY > 50);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveSubmenu(null);
  };

  const toggleSubmenu = (index) => {
    setActiveSubmenu(activeSubmenu === index ? null : index);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
    if (window.innerWidth >= 768) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleResize(); // Call on initial load
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const menuItems = [
    { to: '/', icon: <FaHome size={20} />, text: 'Home' },
    { to: '/about', icon: <FaInfoCircle size={20} />, text: 'About' },
    { to: '/services', icon: <FaTools size={20} />, text: 'Services' },
    { to: '/portfolio', icon: <FaBriefcase size={20} />, text: 'Portfolio' },
    {
      to: '/products',
      icon: <FaShoppingCart size={20} />,
      text: 'Products',
      submenu: [
        { to: '/products/samsung-products', text: 'Samsung Products' },
        { to: '/products/other-brands', text: 'Other Brands' },
      ],
    },
    { to: '/contact', icon: <FaEnvelope size={20}/>, text: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolling ? 'bg-[#333] shadow-md' : 'bg-[#333]'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src={LogoImg} alt="Logo" className="h-9 w-auto" />
          </Link>

          {/* Desktop Menu */}
          {!isMobile && (
            <div className="flex items-center space-x-4">
              {menuItems.map((item, index) => (
                <div key={item.to} className="relative group">
                  <Link
                    to={item.to}
                    className="text-white hover:text-[#CF5D3E] transition-colors duration-300 flex items-center space-x-1 px-2 py-2 rounded-md text-base font-medium"
                  >
                    {item.icon}
                    <span>{item.text}</span>
                    {item.submenu && <FaChevronDown size={12} className="ml-1" />}
                  </Link>
                  {item.submenu && (
                    <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg py-2 rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      {item.submenu.map((submenuItem) => (
                        <Link
                          key={submenuItem.to}
                          to={submenuItem.to}
                          className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 transition-colors duration-300"
                        >
                          {submenuItem.text}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <button
              onClick={toggleMenu}
              className="text-white hover:text-[#CF5D3E] focus:outline-none focus:text-[#CF5D3E]"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobile && isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-[#333] overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {menuItems.map((item, index) => (
                <div key={item.to}>
                  <Link
                    to={item.to}
                    className="text-white hover:text-[#CF5D3E] hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
                    onClick={() => !item.submenu && setIsMenuOpen(false)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        {item.icon}
                        <span>{item.text}</span>
                      </div>
                      {item.submenu && (
                        <FaChevronDown
                          size={16}
                          className={`transition-transform duration-300 ${activeSubmenu === index ? 'rotate-180' : ''}`}
                          onClick={(e) => {
                            e.preventDefault();
                            toggleSubmenu(index);
                          }}
                        />
                      )}
                    </div>
                  </Link>
                  {item.submenu && (
                    <AnimatePresence>
                      {activeSubmenu === index && (
                        <motion.ul
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="pl-6 mt-2 space-y-1"
                        >
                          {item.submenu.map((submenuItem) => (
                            <li key={submenuItem.to}>
                              <Link
                                to={submenuItem.to}
                                className="block px-3 py-2 text-base font-medium text-white hover:text-[#CF5D3E] hover:bg-gray-700 rounded-md"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {submenuItem.text}
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;