"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState, useRef } from "react";
import { FaBars } from "react-icons/fa";

const NavBar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isSignUpOptionOpen, setIsSignUpOptionOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSignupOptionToggle = () => {
    setIsSignUpOptionOpen(!isSignUpOptionOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsSignUpOptionOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-blue-600">HealthMate</div>
          </div>
          {/* Desktop Menu */}
          <nav className="hidden lg:flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-blue-600">
              HOME
            </Link>
            <Link href="/allDoctors" className="text-gray-700 hover:text-blue-600">
              ALL DOCTORS
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600">
              ABOUT
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600">
              CONTACT
            </Link>
          </nav>
          <div className="hidden lg:flex space-x-4 items-center">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full">
              <Link href="/login">Login</Link>
            </button>
            <div className="relative" ref={dropdownRef}>
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded-full"
                onClick={handleSignupOptionToggle}
              >
                Create account
              </button>
              {isSignUpOptionOpen && (
                <div className="absolute z-10 w-44 mt-1 right-0 bg-white rounded divide-y divide-gray-300 shadow-md">
                  <ul className="py-2">
                    <li className="block py-2 px-4 text-sm text-gray-800 hover:bg-gray-100 cursor-pointer">
                      <Link href="/signup?userType=doctor">Sign up as Doctor</Link>
                    </li>
                    <li className="block py-2 px-4 text-sm text-gray-800 hover:bg-gray-100 cursor-pointer">
                      <Link href="/signup?userType=patient">Sign up as Patient</Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-blue-600"
            onClick={handleToggle}
          >
            <FaBars className="text-2xl" />
          </button>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white shadow-md">
            <ul className="py-2 text-gray-700">
              <li>
                <Link href="/" className="block px-4 py-2 hover:bg-gray-100">
                  HOME
                </Link>
              </li>
              <li>
                <Link href="/allDoctors" className="block px-4 py-2 hover:bg-gray-100">
                  ALL DOCTORS
                </Link>
              </li>
              <li>
                <Link href="/about" className="block px-4 py-2 hover:bg-gray-100">
                  ABOUT
                </Link>
              </li>
              <li>
                <Link href="/contact" className="block px-4 py-2 hover:bg-gray-100">
                  CONTACT
                </Link>
              </li>
              <li>
                <Link href="/login" className="block px-4 py-2 hover:bg-gray-100">
                  Login
                </Link>
              </li>
              <li>
                <Link href="/signup?userType=doctor" className="block px-4 py-2 hover:bg-gray-100">
                  Sign up as Doctor
                </Link>
              </li>
              <li>
                <Link href="/signup?userType=patient" className="block px-4 py-2 hover:bg-gray-100">
                  Sign up as Patient
                </Link>
              </li>
            </ul>
          </div>
        )}
      </header>
    </div>
  );
};

export default NavBar;
