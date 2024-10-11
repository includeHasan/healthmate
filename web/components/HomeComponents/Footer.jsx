import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white py-10 mt-16">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div >
          <h3 className="text-xl font-semibold">HealthMate</h3>
          <p className="text-gray-600 mt-4 ">
          Connecting patients and doctors for a seamless healthcare experience. Empowering patients to manage their health while enabling healthcare professionals to deliver quality care.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">COMPANY</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <Link href="/" className="text-gray-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-600">
                About us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-600">
                Contact us
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-600">
                Privacy policy
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold">GET IN TOUCH</h3>
          <ul className="mt-4 space-y-2">
            <li className="text-gray-600">+1-221-456-7890</li>
            <li className="text-gray-600">www.healthhmate.vercel.app</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-10">
        Copyright © 2024  - All Right Reserved.
      </div>
    </footer>
  );
};

export default Footer;
