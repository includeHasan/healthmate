'use client';
import Image from "next/image";
import React, { useEffect, useState } from "react";

const images = [
  "/group_doctor1.png",
  "/group_doctor2.png",
  "/group_doctor3.png",
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className="md:w-1/2 mt-10 md:mt-0 relative w-96 h-96">
      <Image
        src={images[currentIndex]}
        alt="Group of doctors"
        className="object-contain w-full h-full transition ease-in-out duration-500"
        width={400}
        height={400}
        unoptimized
        priority
        loader={({ src, width, quality }) => {
          return `${src}?w=${width}&q=${quality || 80}`;
        }}
      />
      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full mx-1 border border-gray-100 ${
              index === currentIndex ? "bg-gray-300" : "bg-blue-600"
            } transition duration-500`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;