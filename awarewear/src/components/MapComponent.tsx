"use client";

import Map, { NavigationControl, GeolocateControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export default function MapComponent() {
  const INITIAL_VIEW_STATE = {
    longitude: -123.116226,
    latitude: 49.2827,
    zoom: 10,
  };

  return (
    <div className={`w-full h-full relative`}>
      <Map
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
        mapStyle="mapbox://styles/mapbox/light-v11"
        projection={"globe"}
        initialViewState={INITIAL_VIEW_STATE}
      >
        <NavigationControl />
        <GeolocateControl />
        {/* {markers} */}
      </Map>
    </div>
  );
}
