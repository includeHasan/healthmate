'use client';
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

        const App = () => (
          <div>
            <header className="bg-white shadow-md">
              <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center">
                  <div className="text-2xl font-bold text-blue-600">
                    HealthMate
                  </div>
                </div>
                <nav className="flex space-x-6">
                  <a href="#" className="text-gray-700 hover:text-blue-600 nav-link active">HOME</a>
                  <a href="#" className="text-gray-700 hover:text-blue-600 nav-link">ALL DOCTORS</a>
                  <a href="#" className="text-gray-700 hover:text-blue-600 nav-link">ABOUT</a>
                  <a href="#" className="text-gray-700 hover:text-blue-600 nav-link">CONTACT</a>
                </nav>
                <div className="flex space-x-4">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-full">Login</button>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-full">Create account</button>
                </div>
              </div>
            </header>
            <main>
              <section className="bg-blue-600 text-white py-20">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 relative">
                    <h1 className="text-4xl font-bold mb-4">Book Appointment With Trusted Doctors</h1>
                    <div className="flex items-center mb-6">
                      <Image src='/doctor1.jpg' alt="Doctor 1" className="w-10 h-10 rounded-full border-2 border-white -ml-2" width={3} height={3}/>
                      <Image src='/doctor2.jpg' alt="Doctor 2" className="w-10 h-10 rounded-full border-2 border-white -ml-2" width={3} height={3} />
                      <Image src='/doctor3.jpg' alt="Doctor 3" className="w-10 h-10 rounded-full border-2 border-white -ml-2" width={3} height={3}/>
                      <p className="ml-4">Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
                    </div>
                    <button className="bg-white text-blue-600 px-6 py-2 rounded-full">Book appointment <FaArrowRight className="inline"/></button>
                  </div>
                  <div className="md:w-1/2 mt-10 md:mt-0">
                    <img src="" alt="Group of doctors" className="w-full rounded-lg" />
                  </div>
                </div>
              </section>
              <section className="py-20">
                <div className="container mx-auto px-4 text-center">
                  <h2 className="text-3xl font-bold mb-4">Find by Speciality</h2>
                  <p className="text-gray-600 mb-10">Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
                  <div className="flex justify-center space-x-6">
                    <div className="text-center">
                      <img src="" alt="General physician" className="w-20 h-20 mx-auto mb-2" />
                      <p>General physician</p>
                    </div>
                    <div className="text-center">
                      <img src="" alt="Gynecologist" className="w-20 h-20 mx-auto mb-2" />
                      <p>Gynecologist</p>
                    </div>
                    <div className="text-center">
                      <img src="" alt="Dermatologist" className="w-20 h-20 mx-auto mb-2" />
                      <p>Dermatologist</p>
                    </div>
                    <div className="text-center">
                      <img src='' alt="Pediatricians" className="w-20 h-20 mx-auto mb-2" />
                      <p>Pediatricians</p>
                    </div>
                    <div className="text-center">
                      <img src="" alt="Neurologist" className="w-20 h-20 mx-auto mb-2" />
                      <p>Neurologist</p>
                    </div>
                    <div className="text-center">
                      <img src="" alt="Gastroenterologist" className="w-20 h-20 mx-auto mb-2" />
                      <p>Gastroenterologist</p>
                    </div>
                  </div>
                </div>
              </section>
            </main>
          </div>
        );
        export default App;