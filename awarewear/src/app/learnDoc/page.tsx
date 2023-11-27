"use client";
import React, { useState } from "react";
import learn from "./learn.json";

export default function LearnPage() {
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
      <main className="relative w-full h-screen bg-no-repeat bg-cover overflow-hidden">
        {/* Background image and content code */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-4">
          <div className="text-2xl font-bold text-center text-blue-800 bg-transparent">
            {currentContent.title}
          </div>

          <div className="px-6 py-3 rounded-lg text-white font-semibold bg-blue-500">
            {currentContent.contents}
          </div>

          <div className="flex justify-between w-full">
            <button
              onClick={handlePrevClick}
              className="px-6 py-3 rounded-full text-white font-semibold bg-gray-500"
            >
              Prev
            </button>
            <button
              onClick={handleNextClick}
              className="px-6 py-3 rounded-full text-white font-semibold bg-green-500"
            >
              Next
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
