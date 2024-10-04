'use client';
import Image from "next/image";
import React, { useEffect, useState } from "react";

const SideImg = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      src: '/doctor_login.png',
      title: 'Enhance impact in healthcare',
      description: 'Your impact in healthcare just got stronger. Enhance patient care through refined data control, seamless appointments, and impactful task management.',
    },
    {
      src: '/splashLogo.png',
      title: 'Improve Patient Engagement',
      description: 'Engage patients with effective communication and streamlined processes.',
    },
   
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="w-full bg-blue-600 text-white flex flex-col justify-center items-center p-8">
      <div className="text-3xl font-bold mb-4">HealthHub</div>
      <Image
        src={slides[currentIndex].src}
        alt="Slide Image"
        className="w-64 h-64 rounded-full object-cover"
        width={256} 
        height={256}
        priority
      />
      <h2 className="text-2xl font-semibold mb-2">
        {slides[currentIndex].title}
      </h2>
      <p className="text-center mb-4">
        {slides[currentIndex].description}
      </p>
      <div className="flex space-x-2">
        {slides.map((_, index) => (
          <span key={index} className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-white opacity-50'}`}></span>
        ))}
      </div>
    </div>
  );
};

export default SideImg;

