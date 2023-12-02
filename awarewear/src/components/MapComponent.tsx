import React, { useState, useEffect } from 'react';
import Map, { NavigationControl, GeolocateControl, Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// Define the type for the store data
type StoreData = {
  storeName: string;
  lat: number;
  lng: number;
};

export default function MapComponent() {
  const [storesData, setStoresData] = useState<StoreData[]>([]);
  const [tooltip, setTooltip] = useState<{ latitude: number; longitude: number; storeName: string } | null>(null);

  useEffect(() => {
    fetch('/green-labels.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error fetching JSON data: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setStoresData(data))
      .catch((error) => console.error('Error fetching JSON data:', error));
  }, []);

  const INITIAL_VIEW_STATE = {
    longitude: -123.116226,
    latitude: 49.2827,
    zoom: 10,
  };

  // Define the SVG pin component
  const PinSVG = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height="30" width="24" viewBox="0 0 384 512">
      <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" fill="#d00" />
    </svg>
  );

  return (
    <div className="w-full h-full relative">
      <Map
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
        mapStyle="mapbox://styles/mapbox/light-v11"
        initialViewState={INITIAL_VIEW_STATE}
      >
        <NavigationControl />
        <GeolocateControl />

        {storesData.map((store, index) => (
          <Marker
            key={index}
            longitude={store.lng}
            latitude={store.lat}
          >
            <div 
              onMouseEnter={() => setTooltip({ latitude: store.lat, longitude: store.lng, storeName: store.storeName })}
              onMouseLeave={() => setTooltip(null)}
              className="marker cursor-pointer"
            >
              <PinSVG />
            </div>
          </Marker>
        ))}

        {tooltip && (
          <Popup
            longitude={tooltip.longitude}
            latitude={tooltip.latitude}
            closeButton={false}
            closeOnClick={false}
            anchor="top"
          >
            {tooltip.storeName}
          </Popup>
        )}
      </Map>
    </div>
  );
}
