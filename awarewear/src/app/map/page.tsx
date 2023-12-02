"use client"

import "mapbox-gl/dist/mapbox-gl.css";
import MapComponent from "@/components/MapComponent";

export default function Map() {
  return (
    <main className="w-full h-full">
      <MapComponent />
    </main>
  );
}
