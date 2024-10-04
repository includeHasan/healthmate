'use client';
import React from "react";
import ImageSlider from "./ImageSlider";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

const MainSection = () => {
  return (
    <section className="bg-blue-600 text-white py-20 px-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 relative">
          <h1 className="text-4xl font-bold mb-4">
            Book Appointment With Trusted Doctors
          </h1>
          <div className="flex items-center mb-6">
            <Image
              src="/doctor1.jpg"
              alt="Doctor 1"
              width={3}
              height={3}
              className="w-10 h-10 rounded-full border-2 border-white -ml-2"
            />
            <Image
              src="/doctor2.jpg"
              alt="Doctor 2"
              width={3}
              height={3}
              className="w-10 h-10 rounded-full border-2 border-white -ml-2"
            />
            <Image
              src="/doctor3.jpg"
              alt="Doctor 3"
               width={3}
              height={3}
              className="w-10 h-10 rounded-full border-2 border-white -ml-2"
            />
            <p className="ml-4">
              Simply browse through our extensive list of trusted doctors,
              schedule your appointment hassle-free.
            </p>
          </div>
          <button className="bg-white text-blue-600 px-6 py-2 rounded-full">
            Book appointment <FaArrowRight className="inline" />
          </button>
        </div>
        <ImageSlider />
      </div>
    </section>
  );
};

export default MainSection;
