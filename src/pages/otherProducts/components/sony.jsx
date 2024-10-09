import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Info, ExternalLink } from 'lucide-react';
import upx898mdImg from '../../../assets/img/Sony UP-X898MD.avif';
import HDImg from '../../../assets/img/sony_HD_films.jpg';

const products = [
  {
    id: 1,
    name: 'Sony UP-X898MD',
    category: 'Medical Printer',
    image: upx898mdImg, 
    specifications: 'Hybrid digital printer for both black & white and blue thermal print, compatible with various medical imaging modalities.',
    link: 'https://pro.sony/en_GH/products/medical-printers/up-x898md',
  },
  {
    id: 2,
    name: 'Sony UPP-110HD',
    category: 'Medical Print Media',
    image: HDImg, 
    specifications: 'A6 width black and white high density print media (type II) for use in UP-X898MD/D898MD/D898DC/897MD/D897 printers. Mainly used in Ultrasound, Dental and Microscopy applications. ',
    link: 'https://pro.sony/en_CL/products/black-and-white-thermal-print-media/upp-110hd',
  },
];

const Sony = () => {
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
    <div id="Sony" className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
      <motion.div
        className="border-2 border-[#CF5D3E] p-4 cursor-pointer"
        onClick={toggleAccordion}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-black">Sony</h2>
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

export default Sony;