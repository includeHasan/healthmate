import Footer from '@/components/HomeComponents/Footer';
import NavBar from '@/components/HomeComponents/NavBar';
import Image from 'next/image';
import React from 'react';

const AboutUs = () => {
  return (
    <>
    <NavBar/>
    <div className="px-4 py-12 bg-gray-50 sm:px-6 lg:px-8">
      {/* About Us Section */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between lg:space-x-8">
          {/* Image */}
          <div className="lg:w-1/2 w-full mb-8 lg:mb-0">
            <Image
              src="/group_doctor3.png" // Replace with the correct path
              alt="Doctors"
              height={10}
              width={10}
              className="w-full h-auto rounded-lg shadow-lg object-cover p-4"
              unoptimized
              />
          </div>

          {/* Text */}
          <div className="lg:w-1/2 w-full text-center lg:text-left">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 leading-tight">
              ABOUT <span className="text-blue-600">US</span>
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently.
              At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments
              and managing their health records.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform,
              integrating the latest advancements to improve user experience and deliver superior service. Whether you&apos;re booking
              your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap
              between patients and healthcare providers, making it easier for you to access the care you need, when you need it.
            </p>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 leading-tight">
            WHY <span className="text-blue-600">CHOOSE US</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-lg text-center">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">EFFICIENCY:</h4>
              <p className="text-gray-600">Streamlined appointment scheduling that fits into your busy lifestyle.</p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-lg text-center">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">CONVENIENCE:</h4>
              <p className="text-gray-600">Access to a network of trusted healthcare professionals in your area.</p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-lg text-center">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">PERSONALIZATION:</h4>
              <p className="text-gray-600">Tailored recommendations and reminders to help you stay on top of your health.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
              </>
  );
};

export default AboutUs;
