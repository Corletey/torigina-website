import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Search, Plus, Minus, Navigation } from 'lucide-react';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css';

// List of operational areas and their hospitals
const operationalAreas = [
  { 
    name: 'Ghana', 
    lat: 7.9465, 
    lng: -1.0232, 
    // hospitals: [
    //   { name: '37 Military Hospital', lat: 5.5785, lng: -0.1803 },
    //   { name: 'University of Ghana Medical Center', lat: 5.6508, lng: -0.1869 },
    //   { name: 'Euracare Advanced Diagnostics', lat: 5.6006, lng: -0.1941 },
    //   { name: 'Accra Regional Hospital', lat: 5.558, lng: -0.2009 },
    //   { name: 'Komfo Anokye Teaching Hospital', lat: 6.6924, lng: -1.6126 },
    //   { name: 'Cape Coast Teaching Hospital', lat: 5.1054, lng: -1.2466 },
    //   { name: 'Oasis Diagnostics, Takoradi', lat: 4.899, lng: -1.7607 },
    // ]
  },
  { 
    name: 'Gambia', 
    lat: 13.4432, 
    lng: -15.3101, 
    // hospitals: [
    //   { name: 'I Batch Diagnostics', lat: 13.4517, lng: -16.5780 }
    // ]
  },
  { 
    name: 'Nigeria', 
    lat: 9.082, 
    lng: 8.6753, 
    // hospitals: [
    //   // { name: 'Asi Ukpo Diagnostics', lat: 6.4821, lng: 7.5192 },
    //   // { name: 'University of Calabar Teaching Hospital', lat: 4.9537, lng: 8.3383 }
    // ]
  },
  { 
    name: 'Liberia', 
    lat: 6.4281, 
    lng: -9.4295, 
    // hospitals: [
    //   { name: 'Jahmale Medical Solutions', lat: 6.2907, lng: -10.7605 }
    // ]
  },
  { 
    name: 'Burkina Faso', 
    lat: 12.2383, 
    lng: -1.5616, 
    // hospitals: []
  }
];

// Function to center the map dynamically
function SetMapCenter({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

function OperationalAreas() {
  const [searchTerm, setSearchTerm] = useState('');
  const [zoomLevel, setZoomLevel] = useState(5);
  const [selectedArea, setSelectedArea] = useState(null);
  const [filteredAreas, setFilteredAreas] = useState(operationalAreas);

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = operationalAreas.filter(area => area.name.toLowerCase().includes(term));
    setFilteredAreas(filtered);

    // Select the first matching area to center the map
    if (filtered.length > 0) {
      setSelectedArea(filtered[0]);
    } else {
      setSelectedArea(null);
    }
  };

  return (
    <div className="p-4 sm:p-6 md:p-8">
      <h2 className="text-[#0e141b] text-xl sm:text-2xl md:text-3xl font-bold leading-tight tracking-tight mb-4">
        Where We Operate
      </h2>
      <div className="flex flex-col h-full">
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <div className="flex-grow">
            <label className="flex flex-col w-full">
              <div className="flex w-full items-stretch rounded-xl h-12 bg-slate-50 shadow-sm">
                <div className="text-[#4e7397] flex items-center justify-center pl-4">
                  <Search size={24} />
                </div>
                <input
                  className="flex-grow px-4 py-2 bg-transparent text-[#0e141b] focus:outline-none"
                  placeholder="Search areas..."
                  value={searchTerm}
                  onChange={handleSearch}
                />
              </div>
            </label>
          </div>
          <div className="flex gap-2">
            <button onClick={() => setZoomLevel((prevZoom) => prevZoom + 1)} className="flex items-center justify-center w-12 h-12 rounded-xl text-white bg-[#CF5D3E] shadow-sm">
              <Plus size={24} className="text-[#0e141b]" />
            </button>
            <button onClick={() => setZoomLevel((prevZoom) => prevZoom - 1)} className="flex items-center justify-center w-12 h-12 rounded-xl text-white bg-[#CF5D3E] shadow-sm">
              <Minus size={24} className="text-[#0e141b]" />
            </button>
            <button className="flex items-center justify-center w-12 h-12 text-white rounded-xl bg-[#CF5D3E] shadow-sm">
              <Navigation size={24} className="text-[#0e141b]" />
            </button>
          </div>
        </div>
        <div className="relative z-0"> {/* Add this wrapper div */}
          <MapContainer
            center={selectedArea ? [selectedArea.lat, selectedArea.lng] : [7.9465, -1.0232]} // Center on selected area or default to Ghana
            zoom={zoomLevel}
            className="h-[400px] rounded-xl shadow-lg"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {selectedArea && <SetMapCenter center={[selectedArea.lat, selectedArea.lng]} zoom={zoomLevel} />}
            
            {/* Show all areas and their hospitals */}
            {/* {filteredAreas.map((area) => (
              <Marker key={area.name} position={[area.lat, area.lng]}>
                <Popup>{area.name}</Popup>
              </Marker>
            ))} */}
            
            {/* {selectedArea && selectedArea.hospitals.map((hospital, index) => (
              <Marker key={hospital.name} position={[hospital.lat, hospital.lng]}>
                <Popup>{hospital.name}</Popup>
              </Marker>
            ))} */}
          </MapContainer>
        </div>
      </div>
    </div>
  );
}

export default OperationalAreas;