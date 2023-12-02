'use client'

import React, { useEffect } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

export default function GoogleMapComponent() {

  const mapRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {

    const initMap = async () => {
      
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
        version: "weekly",
      })

      const { Map } = await loader.importLibrary('maps');

      const position = {
        lat: 51.5074,
        lng: 0.1278,
      }

      // Map Options
      const mapOptions: google.maps.MapOptions = {
        center: position,
        zoom: 8,
        mapId: 'AW_MAP_ID'
      }

      // Create Map
      const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

    }

    initMap();
  }, [])

  return (
    <div style={{ height: 'full'}} ref={mapRef}>
      <h1>Store Locations</h1>
    </div>
  );
}
