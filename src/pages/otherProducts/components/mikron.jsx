import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Info, ExternalLink } from 'lucide-react';
import spinalImg from '../../../assets/img/spinal.png'; 
import traumaImg from '../../../assets/img/trauma.png'; 
import vetImg from '../../../assets/img/vet.png';

const products = [
  {
    id: 1,
    name: 'Spinal Solutions',
    category: 'Spinal Implants',
    image: spinalImg,
    specifications: 'High-precision spinal implants, including pedicle screws and spinal fusion systems, designed for safety and durability.',
    link: 'https://www.mikronmedical.com.tr/spinal-solutions/',
  },
  {
    id: 2,
    name: 'Trauma Solutions',
    category: 'Trauma Implants',
    image: traumaImg,
    specifications: 'Precision trauma implants including plates, screws, and fixation devices for fractures and orthopedic surgery.',
    link: 'https://www.mikronmedical.com.tr/trauma-solutions/',
  },
  {
    id: 3,
    name: 'MishaVet Veterinary Solutions',
    category: 'Veterinary Equipment',
    image: vetImg, 
    specifications: 'Comprehensive veterinary solutions including surgical implants, diagnostic tools, and rehabilitation products for animals.',
    link: 'https://mishavet.com/',
  },
];

const Mikron = () => {
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
        className="bg-white rounded-lg shadow-md overflow-hidden"
      >
        <img
          className="w-full h-48 object-cover object-center"
          src={product.image}
          alt={product.name}
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
          <p className="text-sm text-gray-600 mb-2">{product.category}</p>
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
            href={product.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#CF5D3E] hover:underline flex items-center mb-4"
          >
            View Product <ExternalLink size={16} className="ml-1" />
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
    <div id="Mikron" className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
      <motion.div
        className="border-2 border-[#CF5D3E] p-4 cursor-pointer"
        onClick={toggleAccordion}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-black">Mikron</h2>
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

export default Mikron;
