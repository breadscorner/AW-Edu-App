"use client";

import "mapbox-gl/dist/mapbox-gl.css";
import MapComponent from "@/components/MapComponent";
import Navbar from "@/components/Navbar";

export default function Map() {
  return (
    <main className="w-full h-full">
      <MapComponent />
      <Navbar />
    </main>
  );
}
