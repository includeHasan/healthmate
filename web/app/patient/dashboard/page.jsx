"use client";

import { useEffect, useState } from "react";
import { BiSolidDashboard } from "react-icons/bi";
import SidebarPatient from "@/components/DashboardComponents/SideBarPatient";
import Image from "next/image";
import api from "@/utils/api";
import { FaUserPlus } from "react-icons/fa6";
import Link from "next/link";

const PatientDashBoard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [patients, setPatients] = useState([]); // State for storing the list of patients
  const [selectedPatientIndex, setSelectedPatientIndex] = useState(0); // Index of the selected patient

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const checkPatient = async () => {
      try {
        const response = await api.get("/patient/patients");
        if (response.data.success) {
          console.log(response.data);
          
          const patientList = response.data.patient;
          if (patientList && patientList.length > 0) {
            setPatients(patientList);
          }
        }
      } catch (error) {
        console.log(error);
      }
    };
    checkPatient();
  }, []);

  // Handler for changing the selected patient
  const handlePatientChange = (index) => {
    setSelectedPatientIndex(index);
  };

  const selectedPatient = patients[selectedPatientIndex];

  return (
    <div className="flex h-screen">
      {/* Sidebar for large screens */}
      <SidebarPatient
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />
      {/* Hamburger Button */}
      <div className="md:hidden p-4">
        <button onClick={toggleSidebar} className="text-gray-700">
          <BiSolidDashboard className="text-2xl" />
        </button>
      </div>

      {/* Main Content */}
      <div
        className={`flex-1 p-6 overflow-x-auto transition-all duration-300 ${
          isSidebarOpen ? "ml-0" : "ml-0 md:ml-1/5"
        }`}
      >
        {patients.length > 0 ? (
          <>
            <div className="flex justify-between items-center mb-4">
              <div>
                {/* Dropdown for selecting a patient */}
                <select
                  value={selectedPatientIndex}
                  onChange={(e) => handlePatientChange(e.target.value)}
                  className="text-lg font-bold"
                >
                  {patients.map((patient, index) => (
                    <option key={index} value={index}>
                      {patient.name}
                    </option>
                  ))}
                </select>
                <p className="text-gray-500">ID: {selectedPatient.id}</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-gray-500">
                  <i className="fas fa-bell"></i>
                </div>
                <div className="text-gray-500">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="text-gray-500">
                  <i className="fas fa-user-md"></i> {selectedPatient.doctor}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* General Info */}
              <div className="bg-white p-6 pt-8 rounded-lg shadow-md col-span-1">
                <h2 className="text-lg font-semibold mb-4">General info</h2>
                <div className="grid grid-cols-3 gap-4 text-gray-950">
                  <div className="text-center bg-cyan-50 rounded-lg py-1">
                    <p>Date of birth:</p>
                    <p>{selectedPatient.dob}</p>
                  </div>
                  <div className="text-center bg-blue-50 rounded-lg py-1">
                    <p>Age:</p>
                    <p>{selectedPatient.age}</p>
                  </div>
                  <div className="text-center bg-indigo-50 rounded-lg py-1">
                    <p>Sex:</p>
                    <p>{selectedPatient.sex}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="bg-purple-100 p-4 rounded-lg text-center">
                    <p className="text-gray-500">Weight</p>
                    <p className="text-2xl font-semibold">
                      {selectedPatient.weight} kg
                    </p>
                  </div>
                  <div className="bg-orange-100 p-4 rounded-lg text-center">
                    <p className="text-gray-500">Height</p>
                    <p className="text-2xl font-semibold">
                      {selectedPatient.height} cm
                    </p>
                  </div>
                </div>
              </div>
              {/* Tests */}
              <div className="bg-white p-6 pt-3 rounded-lg shadow-md col-span-2">
                <h2 className="text-lg font-semibold mb-4">Tests</h2>
                <div className="grid grid-cols-4 gap-4 grid-rows-1 h-auto">
                  <div>
                    <p className="text-gray-500">Test</p>
                    <div className="mt-2 space-y-2">
                      <p className="font-semibold py-1">Glucose blood test</p>
                      <p className="font-semibold py-1">Spirometry</p>
                      <p className="font-semibold py-1">General blood test</p>
                      <p className="font-semibold py-1">ECG</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-500">Date</p>
                    <div className="mt-2 space-y-2">
                      <p className="font-semibold py-1">24/02/2022</p>
                      <p className="font-semibold py-1">07/01/2022</p>
                      <p className="font-semibold py-1">29/12/2021</p>
                      <p className="font-semibold py-1">29/12/2021</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-500">Status</p>
                    <div className="mt-2 space-y-2">
                      <p className="text-gray-500 py-1">In progress</p>
                      <p className="text-gray-500 py-1">Available</p>
                      <p className="text-gray-500 py-1">Available</p>
                      <p className="text-gray-500 py-1">Available</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-500">Result</p>
                    <div className="mt-2 space-y-2">
                      <div className="bg-yellow-200 text-yellow-700 px-2 py-1 rounded-full text-center">
                        Pending
                      </div>
                      <div className="bg-green-200 text-green-700 px-2 py-1 rounded-full text-center">
                        Typical results
                      </div>
                      <div className="bg-red-200 text-red-700 px-2 py-1 rounded-full text-center">
                        Requires attention
                      </div>
                      <div className="bg-green-200 text-green-700 px-2 py-1 rounded-full text-center">
                        Typical results
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Conditions */}
              <div className="bg-white p-6 rounded-lg shadow-md col-span-1 mt-6 md:mt-0">
                <h2 className="text-lg font-semibold mb-4">Conditions</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold">COVID-19 infection</p>
                      <p className="text-gray-500">diagnosed 03/2022</p>
                    </div>
                    <span className="bg-purple-200 text-purple-700 px-2 py-1 rounded-full">
                      Viral
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold">Atopic dermatitis</p>
                      <p className="text-gray-500">diagnosed 01/2012</p>
                    </div>
                    <span className="bg-blue-200 text-blue-700 px-2 py-1 rounded-full">
                      Chronic
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold">Asthma</p>
                      <p className="text-gray-500">diagnosed 11/2019</p>
                    </div>
                    <span className="bg-blue-200 text-blue-700 px-2 py-1 rounded-full">
                      Chronic
                    </span>
                  </div>
                </div>
              </div>

              {/* Medication */}
              <div className="bg-white p-6 rounded-lg shadow-md col-span-1">
                <h2 className="text-lg font-semibold mb-4">Medication</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold">Neoclarityn</p>
                      <p className="text-gray-500">2 pills once a day</p>
                    </div>
                    <span className="text-gray-500">5mg</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold">Maxicortan</p>
                      <p className="text-gray-500">Typically once a day</p>
                    </div>
                    <span className="text-gray-500">10mg/g</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold">Pholcodine</p>
                      <p className="text-gray-500">10ml up to 6 times a day</p>
                    </div>
                    <span className="text-gray-500">5mg/5ml</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold">Paracetamol</p>
                      <p className="text-gray-500">
                        2 pills / 3 times a day if needed
                      </p>
                    </div>
                    <span className="text-gray-500">500mg</span>
                  </div>
                </div>
              </div>

              {/* Latest Results */}
              <div className="bg-white p-6 rounded-lg shadow-md col-span-1">
                <h2 className="text-lg font-semibold mb-4">Latest results</h2>
                <div className="flex justify-center items-center h-40">
                  <Image
                    src="/path/to/image" // Specify the correct image path
                    alt="Graph showing latest results"
                    width={300} // Set a reasonable width
                    height={200} // Set a reasonable height
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="grid">
            <Link
              href={"/patient/addMember"}
              className="h-screen place-content-center grid grid-rows-2 text-gray-600"
            >
              <FaUserPlus className="text-9xl place-self-center self-end mb-6" />{" "}
              <span className="text-3xl">Create Patient Account</span>{" "}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default PatientDashBoard;
