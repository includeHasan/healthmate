'use client';
import Image from "next/image";
import React from "react";

const SideImg = () => {
  return (
    <div className="w-1/2 bg-blue-600 text-white flex flex-col justify-center items-center p-8">
      <div className="text-3xl font-bold mb-4">HealthHub</div>
      <Image
        src={'/doctor_login.png'}
        alt="Doctor Image"
        className="w-64 h-64 rounded-full object-cover"
        width={4} height={4}
      />
      <h2 className="text-2xl font-semibold mb-2">
        Enhance impact in healthcare
      </h2>
      <p className="text-center mb-4">
        Your impact in healthcare just got stronger. Enhance patient care
        through refined data control, seamless appointments, and impactful task
        management.
      </p>
      <div className="flex space-x-2">
        <span className="w-2 h-2 bg-white rounded-full"></span>
        <span className="w-2 h-2 bg-white rounded-full opacity-50"></span>
        <span className="w-2 h-2 bg-white rounded-full opacity-50"></span>
        <span className="w-2 h-2 bg-white rounded-full opacity-50"></span>
      </div>
    </div>
  );
};

export default SideImg;
