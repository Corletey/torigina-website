import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Info, ExternalLink } from 'lucide-react';
import X1Img from '../../../assets/img/cingol_X1.jpg';
import X3Img from '../../../assets/img/cingol_X3.jpg';
import X5Img from '../../../assets/img/cingol_X5.jpg';
import CS10Img from '../../../assets/img/cingol_CS10.jpg';

const products = [
  {
    id: 1,
    name: 'X5 New Integral Dental Unit Dental Chair',
    category: 'Dental Unit',
    image: X5Img,
    specifications: 'Integrated dental unit with advanced features for comprehensive dental procedures.',
    cingolLink: 'https://www.cingol.com/product/cingol-x5-new-integral-dental-unit-dental-chair.html?_gl=1*lgbzzd*_up*MQ..&gclid=Cj0KCQjwr9m3BhDHARIsANut04ZpCAdC-34m3QiGlZke548sapxAZVmkIbydDK4G67YYTeYLnqRHcpgaAmPZEALw_wcB',
  },
  {
    id: 2,
    name: 'X3 Disinfection Integral Dental Chair',
    category: 'Dental Chair',
    image: X3Img,
    specifications: 'Dental chair with built-in disinfection system for enhanced hygiene and patient safety.',
    cingolLink: 'https://www.cingol.com/product/X3-2020-Disinfection-Integral-Dental-Chair-Dental-Unit-41.html?_gl=1*1a63gtm*_up*MQ..&gclid=Cj0KCQjwr9m3BhDHARIsANut04ZpCAdC-34m3QiGlZke548sapxAZVmkIbydDK4G67YYTeYLnqRHcpgaAmPZEALw_wcB',
  },
  {
    id: 3,
    name: 'X1 Dental Chair-Dental Unit',
    category: 'Dental Chair',
    image: X1Img,
    specifications: 'Basic dental chair with essential features for general dental practices.',
    cingolLink: 'https://www.cingol.com/product/x1-dental-chair-dental-unit.html?_gl=1*1f8nmft*_up*MQ..&gclid=Cj0KCQjwr9m3BhDHARIsANut04ZpCAdC-34m3QiGlZke548sapxAZVmkIbydDK4G67YYTeYLnqRHcpgaAmPZEALw_wcB',
  },
  {
    id: 4,
    name: 'Central Suction System CS10',
    category: 'Dental Equipment',
    image: CS10Img,
    specifications: 'Powerful central suction system designed for multi-chair dental clinics.',
    cingolLink: 'https://www.cingol.com/product/central-suction-system-cs10.html?_gl=1*o9chuv*_up*MQ..&gclid=Cj0KCQjwr9m3BhDHARIsANut04ZpCAdC-34m3QiGlZke548sapxAZVmkIbydDK4G67YYTeYLnqRHcpgaAmPZEALw_wcB',
  },
];

const Cingol = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const toggleAccordion = () => setIsOpen(!isOpen);

  const ProductCard = ({ product }) => {
    return (
      <motion.div
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full"
      >
        <img
          className="w-full h-48 object-cover object-center"
          src={product.image}
          alt={product.name}
        />
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
          <p className="text-sm text-gray-600 mb-2">{product.category}</p>
          <div className="flex-grow"></div>
          <button
            onClick={() => setSelectedProduct(product)}
            className="mt-3 w-full bg-[#CF5D3E] text-white py-2 px-4 rounded hover:bg-[#b8422b] transition-colors duration-300 flex items-center justify-center"
          >
            <Info size={18} className="mr-2" />
            View Details
          </button>
        </div>
      </motion.div>
    );
  };
  const ProductDetails = ({ product, onClose }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
        onClick={onClose}
      >
        <div 
          className="bg-white rounded-lg p-6 max-w-md w-full"
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
          <img
            className="w-full h-48 object-cover object-center rounded-lg mb-4"
            src={product.image}
            alt={product.name}
          />
          <p className="text-gray-600 mb-2"><strong>Category:</strong> {product.category}</p>
          <p className="text-gray-600 mb-2"><strong>Specifications:</strong> {product.specifications}</p>
          <a
            href={product.cingolLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#CF5D3E] hover:underline flex items-center mb-4"
          >
            Product Page <ExternalLink size={16} className="ml-1" />
          </a>
          <button
            onClick={onClose}
            className="w-full bg-[#CF5D3E] text-white py-2 px-4 rounded hover:bg-[#b8422b] transition-colors duration-300"
          >
            Close
          </button>
        </div>
      </motion.div>
    );
  };

  return (
    <div id="Cingol" className="bg-gray-100 rounded-lg overflow-hidden shadow-md">      <motion.div
        className="border-2 border-[#CF5D3E] p-4 cursor-pointer"
        onClick={toggleAccordion}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-black">Cingol</h2>
          {isOpen ? (
            <ChevronUp className="text-black" size={24} />
          ) : (
            <ChevronDown className="text-black" size={24} />
          )}
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedProduct && (
          <ProductDetails 
            product={selectedProduct} 
            onClose={() => setSelectedProduct(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Cingol;