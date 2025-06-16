import React, { useEffect, useState } from 'react';
import { Loader } from 'lucide-react';

const Preloader = () => {
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setLoadingProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prevProgress + 1;
      });
    }, 20);

    return () => clearInterval(timer);
  }, []);

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center bg-white"
      style={{ zIndex: 9999 }}
    >
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#CF5D3E] mb-8 animate-pulse">
          Torigina
        </h1>
        <div className="relative w-64 h-4 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="absolute top-0 left-0 h-full bg-[#CF5D3E] rounded-full transition-all duration-300 ease-out"
            style={{ width: `${loadingProgress}%` }}
          ></div>
        </div>
        <div className="mt-4 flex items-center justify-center">
          <Loader className="animate-spin text-[#CF5D3E] mr-2" size={24} />
          <span className="text-[#CF5D3E] text-lg">{loadingProgress}%</span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;