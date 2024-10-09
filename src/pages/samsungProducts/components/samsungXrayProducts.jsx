import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info, ChevronLeft, ChevronRight, X } from 'lucide-react';
import GC85AImg from "../../../assets/img/gc850_001_Front_silver.jpg";
import GC85AImg1 from "../../../assets/img/gc850_002_R-Perspcetive1_silver.jpg";
import GC85AImg2 from "../../../assets/img/gc850_003_R-Perspcetive2_silver.jpg";
import GC85AImg3 from "../../../assets/img/gc850_006_Stand-Tube3_silver.jpg";
import CEGC85AImg from "../../../assets/img/001_GC85A Vision+_Front1.jpg";
import CEGC85AImg1 from "../../../assets/img/002_GC85A Vision+_Front2.jpg";
import CEGC85AImg2 from "../../../assets/img/004_GC85A Vision+_R-Perspective2.jpg";
import CEGC85AImg3 from "../../../assets/img/005_GC85A Vision+_Tube Head Unit1.jpg";
import CEGC85AImg4 from "../../../assets/img/006_GC85A Vision+_Tube Head Unit2.jpg";
import GM85Img from "../../../assets/img/GM85_001_Front1_White.jpg";
import GM85Img1 from "../../../assets/img/GM85_003_R-Perspective1_White.jpg";
import GM85Img2 from "../../../assets/img/GM85_004_R-Perspective2_White.jpg";
import GM85Img3 from "../../../assets/img/GM85_005_Left1_White.jpg";
import GM85Img4 from "../../../assets/img/GM85_006_Left2_White.jpg";
import GM85FitImg from "../../../assets/img/GM85-Fit_003_Left1.jpg";
import GM85FitImg1 from "../../../assets/img/GM85-Fit_008_L-Perspective2.jpg";
import GM85FitImg2 from "../../../assets/img/GM85-Fit_009_R-Perspective1.jpg";
import GM85FitImg3 from "../../../assets/img/GM85-Fit_011_Dynamic1.jpg";
import GM85FitImg4 from "../../../assets/img/GM85-Fit_012_Dynamic2.jpg";
import GM85FitImg5 from "../../../assets/img/GM85-Fit_013_Dynamic3.jpg";


const samsungXrayProducts = [
  // Digital Radiography
  {
    id: 2,
    name: 'AccE GC85A VISION+',
    category: 'Digital Radiography',
    description: "Enhanced version of the GC85A VISION with additional features.",
    images: [CEGC85AImg, CEGC85AImg1, CEGC85AImg2, CEGC85AImg3, CEGC85AImg4],
    link: 'https://www.samsunghealthcare.com/en/products/DigitalRadiography/AccE%20GC85A%20Vision+/Radiology/benefit',
  },
  {
    id: 1,
    name: 'AccE GC85A VISION',
    category: 'Digital Radiography',
    description: "Advanced digital radiography system for high-quality imaging.",
    images: [GC85AImg, GC85AImg1, GC85AImg2, GC85AImg3],
    link: 'https://www.samsunghealthcare.com/en/products/XraySystem/Xray1/overview',
  },
  
  // Portable Digital Radiography
  {
    id: 3,
    name: 'AccE GM85',
    category: 'Portable Digital Radiography',
    description: "Mobile digital radiography system for flexible imaging solutions.",
    images: [GM85Img, GM85Img1, GM85Img2, GM85Img3, GM85Img4],
    link: 'https://www.samsunghealthcare.com/en/products/DigitalRadiography/AccE%20GM85/Radiology/benefit',
  },
  {
    id: 4,
    name: 'GM85 FIT',
    category: 'Portable Digital Radiography',
    description: "Compact and versatile mobile digital radiography system.",
    images: [GM85FitImg, GM85FitImg1, GM85FitImg2, GM85FitImg3, GM85FitImg4, GM85FitImg5],
    link: 'https://www.samsunghealthcare.com/en/products/DigitalRadiography/GM85%20Fit/Radiology/benefit',
  }
];


// Modal component for larger image viewing
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

const SamsungXrayProducts = () => {
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
            onClick={() => openModal(product.images, currentImageIndex)}  // Open modal on image click
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
      <h2 className="py-4 text-[20pt] font-semibold text-gray-800 border-b border-gray-300">Samsung X-ray Machines</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {samsungXrayProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Modal for larger image view */}
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

export default SamsungXrayProducts;
