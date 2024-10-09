import React from "react";

const supplies = [
  { description: "Supply of Various Medical Imaging Consumables", client: "Diagnostic Center Accra" },
  { description: "Supply of Various Medical Imaging Consumables", client: "Focus Orthopedic Hospital" },
  { description: "Supply of Various Medical Imaging Consumables", client: "Spectra Diagnostics" },
  { description: "Supply of Refurbished Ultrasound Machine", client: "Cape Coast Teaching Hospital" },
  { description: "Supply and Maintenance of Radiology Equipment", client: "Cape Coast Teaching Hospital" },
  { description: "Supply of Refurbished Ultrasound system", client: "University of Calabar Teaching Hospital" },
  { description: "Supply of AGFA DT58 Medical Films (Various sizes)", client: "Trust Hospital" },
  { description: "Supply of CT Scanner Machine", client: "Cerica Diagnostics" },
  { description: "Supply of Dental Chairs", client: "Cape Coast Teaching Hospital" },
  { description: "Supply of a CT Scan Machine", client: "Cerica Diagnostics" },
  { description: "Supply of Mobile X-ray Machine", client: "Oasis Diagnostics" },
  { description: "Supply and installation of a digital x-ray system", client: "Cape Coast Teaching" },
];

const SupplyHistory = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-40 flex flex-1 justify-center py-8 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="flex flex-wrap justify-between gap-3 p-4 mb-6">
          <h1 className="text-[#0e141b] text-4xl font-black leading-tight tracking-[-0.033em] min-w-72">
            Brief Supply <span className="text-[#CF5D3E]">History</span>
          </h1>
        </div>
        <div className="grid grid-cols-[40px_1fr] gap-x-4 px-4">
          {supplies.map((supply, index) => (
            <React.Fragment key={index}>
              {/* Timeline Dot and Line */}
              <div className="flex flex-col items-center gap-1">
                <div className="size-3 rounded-full bg-[#CF5D3E] shadow-md"></div>
                {index < supplies.length - 1 && (
                  <div className="w-[2px] bg-gradient-to-b from-[#CF5D3E] to-[#d0dbe7] h-full grow"></div>
                )}
              </div>
              {/* Supply Information */}
              <div className="flex flex-1 flex-col py-4 hover:bg-white hover:shadow-md rounded-lg transition-all duration-300 px-4 -mx-4">
                <p className="text-[#0e141b] text-lg font-semibold leading-snug mb-1">{supply.description}</p>
                <p className="text-[#4e7397] text-base font-normal leading-normal">{supply.client}</p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SupplyHistory;