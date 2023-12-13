"use client";

import React, { useState } from "react";
import learn from "./learn.json";
import Navbar from "@/components/Navbar";

export default function LearnPage() {
  const bg = "url('/learnbg.png')";

  const [currentContentIndex, setCurrentContentIndex] = useState(0);

  const currentContent = learn[currentContentIndex];

  const handleNextClick = () => {
    if (currentContentIndex < learn.length - 1) {
      setCurrentContentIndex(currentContentIndex + 1);
    }
  };

  const handlePrevClick = () => {
    if (currentContentIndex > 0) {
      setCurrentContentIndex(currentContentIndex - 1);
    }
  };

  return (
    <>
      <main className="w-full h-full">
      <div
        className="absolute top-0 left-0 w-full h-full bg-center bg-cover"
        style={{
          backgroundImage: bg,
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          // transform: "rotate(-12.49deg)",
          opacity: 0.05,
          zIndex: -1, // To place the pseudo-element behind the content
        }}
      />
        <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-4 pt-20 pb-24 px-2">
          <div className="text-2xl font-bold text-center text-black bg-transparent">
            {currentContent.title}
          </div>

          <div className="px-6 py-3 rounded-lg text-black font-semibold  h-screen flex justify-center items-center">
            {currentContent.contents}
          </div>

          <div className="flex justify-center space-x-2 w-full">
            {/* Render Prev button conditionally */}
            {currentContentIndex > 0 && (
              <button
                onClick={handlePrevClick}
                className="px-6 py-3 rounded-full text-white font-semibold bg-gray-500 hover:bg-gray-700"
              >
                Prev
              </button>
            )}

            {/* Render Next button conditionally */}
            {currentContentIndex < learn.length - 1 && (
              <button
                onClick={handleNextClick}
                className="px-6 py-3 rounded-full text-white font-semibold bg-blue-800 hover:bg-blue-900"
              >
                Next
              </button>
            )}
          </div>
        </div>
        <Navbar />
      </main>
    </>
  );
}
