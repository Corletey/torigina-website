import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info, ChevronLeft, ChevronRight, X } from 'lucide-react';
import V5Img from "../../../assets/img/v5.jpg";
import V6Img from "../../../assets/img/V6.jpg";
import V6RImg from "../../../assets/img/V6_CV_R-Perspective.png";
import V6LImg from "../../../assets/img/V6_CV_L-Perspective.png";
import V6DImg from "../../../assets/img/V6_Dynamic.png";
import V6FImg from "../../../assets/img/V6_Front.png";
import V7Img from "../../../assets/img/V7_001_Front1.png";
import V7Img2 from "../../../assets/img/V7_002_Front2.png";
import V7Img3 from "../../../assets/img/V7_003_Front3.png";
import V8Img from "../../../assets/img/V8_001_Front1.jpg";
import V8Img2 from "../../../assets/img/V8_002_Front2.jpg";
import V8Img3 from "../../../assets/img/V8_003_Front3.jpg";
import V8Img4 from "../../../assets/img/V8_004_R-Perspective1.jpg";
import R85LImg from "../../../assets/img/R85_PRESTIGE_Left.jpg";
import R85RImg from "../../../assets/img/R85_PRESTIGE_Right.jpg";
import R85HLImg from "../../../assets/img/rs85prestige.jpg";
import R85HRImg from "../../../assets/img/R85_PRESTIGE_Half_Right.jpg";
import R85HImg from "../../../assets/img/R85_PRESTIGE_high1.jpg";
import RS80Img from "../../../assets/img/RS80_EVO.jpg";
import RS80LImg from "../../../assets/img/rs80_evo_left.jpeg";
import RS80RImg from "../../../assets/img/rs80_evo_right.png";
import HS30Img from "../../../assets/img/hs30.webp";
import HS30LImg2 from "../../../assets/img/hs30_left.jpg";
import HS30RImg3 from "../../../assets/img/hs30_right.jpg";
import HS40Img from "../../../assets/img/hs40.jpg";
import HS40LImg from "../../../assets/img/hs40_left.jpg";
import HS40RImg from "../../../assets/img/HS40_right.png";
import HS50Img from "../../../assets/img/HS50.jpg";
import HS50LImg from "../../../assets/img/hs50_left.jpeg";
import HS50RImg from "../../../assets/img/hs50_right.webp";
import HM70EVOImg from "../../../assets/img/HM70_EVO_Cart_front_GI_set.jpg";
import HM70EVOImg2 from "../../../assets/img/HM70_EVO_Cart_front_Ob_set.jpg";
import HM70EVOImg3 from "../../../assets/img/HM70_EVO_Cart_L-Perspective_GI_set.jpg";
import HM70EVOImg4 from "../../../assets/img/HM70_EVO_Cart_L-Perspective_OB_set.jpg";
import HM70EVOImg5 from "../../../assets/img/HM70_EVO_Cart_L-side.jpg";
import HM70EVOImg6 from "../../../assets/img/HM70_EVO_System_dynamic_1.jpg";
import HERAW10Img from "../../../assets/img/heraW10.jpg";
import HERAW10LImg from "../../../assets/img/HERA_W10_Left.jpg";
import HERAW10RImg from "../../../assets/img/HERA_W10_Right.jpg";
import HERAW10DImg from "../../../assets/img/HERA_W10_Dynamic.jpg";
import z20Img from "../../../assets/img/Z20.jpg";
import z20LImg from "../../../assets/img/HERA-Z20_left.png";
import z20DImg from "../../../assets/img/HERA-Z20_dynamic.jpeg";


const ImageModal = ({ isOpen, images, currentImageIndex, onClose, onNext, onPrev }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-black bg-opacity-75 flex flex-col justify-center items-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="relative w-full h-full max-w-4xl max-h-[calc(100vh-2rem)] flex flex-col">
            <button
              onClick={onClose}
              className="absolute top-0 right-0 bg-black bg-opacity-50 text-white rounded-full p-2 z-10"
              style={{ transform: 'translate(50%, -50%)' }}
            >
              <X size={24} />
            </button>
            <div className="flex-grow flex items-center justify-center overflow-hidden">
              <img
                className="max-w-full max-h-full object-contain"
                src={images[currentImageIndex]}
                alt={`Image ${currentImageIndex + 1}`}
              />
            </div>
            <div className="flex justify-between mt-4">
              <button
                onClick={onPrev}
                className="bg-black bg-opacity-50 text-white rounded-full p-2"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={onNext}
                className="bg-black bg-opacity-50 text-white rounded-full p-2"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const samsungUltrasoundProducts = [
  // General Imaging
  {
    id: 4,
    name: 'V8',
    category: 'General Imaging',
    description: 'A versatile ultrasound machine for general imaging and diagnostics.',
    images: [V8Img, V8Img2, V8Img3, V8Img4],
    link: "https://www.samsunghealthcare.com/en/products/UltrasoundSystem/V8/General%20Imaging/benefit"
  },
  {
    id: 3,
    name: 'V7',
    category: 'General Imaging',
    description: 'Premium ultrasound system offering outstanding image quality and diagnostics.',
    images: [V7Img, V7Img2, V7Img3],
    link: "https://www.samsunghealthcare.com/en/products/UltrasoundSystem/V7/General%20Imaging/benefit"
  },
  {
    id: 2,
    name: 'V6',
    category: 'General Imaging',
    description: "Versatile ultrasound system for general imaging applications.",
    images: [V6Img, V6RImg, V6LImg, V6DImg, V6FImg],
    link: "https://www.samsunghealthcare.com/en/products/UltrasoundSystem/V6/General%20Imaging/benefit"
  },
  {
    id: 1,
    name: 'V5',
    category: "General Imaging",
    description: "General Imaging system with advanced AI diagnostic features.",
    images: [V5Img],
    link: "https://www.samsunghealthcare.com/en/ultrasound/general-imaging/v5/overview"
  }, 
  {
    id: 11,
    name: 'HS30',
    category: 'Portable Ultrasound',
    description: "High-performance portable ultrasound system for diverse clinical applications.",
    images: [HS30Img, HS30LImg2, HS30RImg3],
    link: "https://samsunghealthcare.com/en/products/UltrasoundSystem/HS30/General%20Imaging/benefit"
  },
  {
    id: 12,
    name: 'HS40',
    category: 'Portable Ultrasound',
    description: "High-performance portable ultrasound system for diverse clinical applications.",
    images: [HS40Img, HS40LImg, HS40RImg],
    link: "https://www.samsunghealthcare.com/en/products/UltrasoundSystem/HS40/General%20Imaging/benefit"
  },
  {
    id: 9,
    name: 'HS50',
    category: 'Portable Ultrasound',
    description: "Compact and efficient portable ultrasound system for point-of-care diagnostics.",
    images: [HS50Img, HS50LImg, HS50RImg],
    link: "https://www.samsunghealthcare.com/en/products/UltrasoundSystem/HS50/General%20Imaging/benefit"
  },
  {
    id: 7,
    name: 'HM70 EVO',
    category: 'Portable Ultrasound',
    description: "Compact and versatile portable ultrasound system for various clinical settings.",
    images: [HM70EVOImg, HM70EVOImg2, HM70EVOImg3, HM70EVOImg4, HM70EVOImg5, HM70EVOImg6],
    link: "https://www.samsunghealthcare.com/en/products/UltrasoundSystem/HM70%20EVO/General%20Imaging/benefit"
  },
  {
    id: 5,
    name: 'RS85 Prestige',
    category: 'Advanced Diagnostic Ultrasound',
    description: "High-end system for advanced diagnostic imaging procedures.",
    images: [R85HLImg, R85HRImg, R85HImg, R85LImg, R85RImg],
    link: "https://www.samsunghealthcare.com/en/products/UltrasoundSystem/RS85%20Prestige/General%20Imaging/benefit"
  },
  {
    id: 10,
    name: 'HERA W10 ELITE',
    category: 'Women\'s Health',
    description: "Advanced ultrasound system specifically designed for women's health applications.",
    images: [HERAW10Img, HERAW10RImg, HERAW10LImg, HERAW10DImg],
    link: "https://samsunghealthcare.com/en/products/UltrasoundSystem/HERA%20W10%20Elite/Womens%20Health/benefit"
  },
  {
    id: 6,
    name: 'RS80 EVO',
    category: 'General Imaging',
    description: "Advanced ultrasound system for comprehensive diagnostic capabilities.",
    images: [RS80Img, RS80LImg, RS80RImg],
    link: "https://www.samsunghealthcare.com/en/products/UltrasoundSystem/RS80%20EVO/General%20Imaging/benefit"
  },
  {
    id: 13,
    name: 'HERA Z20',
    category: 'Women\'s Health',
    description: "Advanced ultrasound system specifically designed for women's health applications.",
    images: [z20Img, z20LImg, z20DImg],
    link: "https://www.samsunghealthcare.com/en/ultrasound/womens-health/hera-z20/overview"
  }
];


const SamsungUltrasoundProducts = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);
  const [modalImages, setModalImages] = useState([]);

  const openModal = (images, index) => {
    setModalImages(images);
    setModalImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const nextImageInModal = () => {
    setModalImageIndex((prevIndex) =>
      prevIndex === modalImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImageInModal = () => {
    setModalImageIndex((prevIndex) =>
      prevIndex === 0 ? modalImages.length - 1 : prevIndex - 1
    );
  };

  const ProductCard = ({ product }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
      );
    };

    const prevImage = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
      );
    };

    return (
      <motion.div
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full"
      >
        <div className="relative w-full" style={{ paddingBottom: '100%' }}>
          <img
            className="absolute top-0 left-0 w-full h-full object-contain cursor-pointer"
            src={product.images[currentImageIndex]}
            alt={`${product.name} - View ${currentImageIndex + 1}`}
            onClick={() => openModal(product.images, currentImageIndex)} // Open modal on image click
          />
          {product.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-1"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-1"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}
        </div>
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
          <p className="text-sm text-gray-600 mb-4 flex-grow">{product.category}</p>
          <a
            href={product.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto w-full bg-[#CF5D3E] text-white py-2 px-4 rounded hover:bg-[#B8462F] transition-colors duration-300 flex items-center justify-center"
          >
            <Info size={18} className="mr-2" />
            View Details
          </a>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md p-4">
      <h2 className="py-4 text-[20pt] font-semibold text-gray-800 border-b border-gray-300">Samsung Ultrasound Machines</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {samsungUltrasoundProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Image Modal */}
      <ImageModal
        isOpen={isModalOpen}
        images={modalImages}
        currentImageIndex={modalImageIndex}
        onClose={closeModal}
        onNext={nextImageInModal}
        onPrev={prevImageInModal}
      />
    </div>
  );
};

export default SamsungUltrasoundProducts;
