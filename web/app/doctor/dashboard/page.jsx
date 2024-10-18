"use client";
import { Calendar } from "@/components/ui/calendar";
import { Progress } from "@/components/ui/progress";
import { FaHeartCircleCheck, FaRegEnvelope, FaUserPlus } from "react-icons/fa6";
import { useEffect, useState } from "react";
import {
  FaHospitalUser,
  FaPhoneAlt,
  FaSearch,
  FaUserAlt,
  FaUserInjured,
} from "react-icons/fa";
import { PieChartGraph } from "@/components/pieChart";
import Sidebar from "@/components/DashboardComponents/Sidebar";
import api from "@/utils/api";
import Link from "next/link";

const DoctorDashboard = () => {
  const [date, setDate] = useState(new Date());
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const response = await api.get("/docter/getDoctorDetails");
        if (response.data.success) {
          localStorage.setItem("doctor",JSON.stringify( response.data.doctor));
          setDoctor(response.data.doctor);
          console.log(response.data.doctor);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        if (error.response?.status === 404) {
          setDoctor(null);
          setLoading(false);
        } else {
          alert(error.response?.data?.error);
          setLoading(false);
        }
      }
    })();
  }, []);

  return (
    <div className="flex flex-col md:flex-row ">
      <Sidebar />
      <main className="flex-1 p-6">
        <header className="flex justify-between items-center mb-6 bg-gray-100 p-4 rounded-lg shadow">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <FaRegEnvelope className="text-2xl mr-1" />
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="pl-9 pr-8 py-2 border rounded-3xl bg-blue-100"
              />
              <FaSearch className="absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-600" />
            </div>
          </div>
        </header>
        {loading ? (
          <div>Loading... </div>
        ) : ( doctor ? ( 
          <>
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className=" p-4 rounded-lg shadow bg-indigo-50">
                <div className="flex items-center space-x-4">
                  <FaUserInjured className=" text-blue-700 text-7xl  border-4 rounded-full p-2 border-blue-700" />
                  <div>
                    <h2 className="text-lg font-bold">Total Patient</h2>
                    <p className="text-2xl font-bold text-blue-900">0</p>
                    <p className="text-gray-700">Till Today</p>
                  </div>
                </div>
              </div>
              <div className="bg-indigo-50 p-4 rounded-lg shadow">
                <div className="flex items-center space-x-4">
                  <FaHospitalUser className=" text-blue-700 text-7xl  border-4 rounded-full p-2 border-blue-700" />
                  <div>
                    <h2 className="text-lg font-bold">Today Patient</h2>
                    <p className="text-2xl font-bold text-blue-900">0</p>
                    <p className="text-gray-700">19 Oct-2024</p>
                  </div>
                </div>
              </div>
              <div className="bg-indigo-50 p-4 rounded-lg shadow">
                <div className="flex items-center space-x-4">
                  <FaHeartCircleCheck className=" text-blue-700 text-7xl  border-4 rounded-full p-2 border-blue-700" />
                  <div>
                    <h2 className="text-lg font-bold">Today Appointments</h2>
                    <p className="text-2xl font-bold text-blue-900">0</p>
                    <p className="text-gray-700">19 Oct-2024</p>
                  </div>
                </div>
              </div>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className=" p-4 rounded-lg shadow bg-indigo-50">
                <PieChartGraph />
              </div>
              <div className="bg-indigo-50 p-4 rounded-lg shadow">
                <h2 className="text-lg font-bold mb-4">Today Appointment</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <FaUserAlt className="text-3xl" />
                    <div>
                      <h3 className="font-bold">M.J. Mical</h3>
                      <p className="text-gray-500">Health Checkup</p>
                    </div>
                    <span className="ml-auto text-blue-500">On Going</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <FaUserAlt className="text-3xl" />
                    <div>
                      <h3 className="font-bold">Sanath Deo</h3>
                      <p className="text-gray-500">Health Checkup</p>
                    </div>
                    <span className="ml-auto text-gray-500">12:30 PM</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <FaUserAlt className="text-3xl" />
                    <div>
                      <h3 className="font-bold">Loeara Phanj</h3>
                      <p className="text-gray-500">Report</p>
                    </div>
                    <span className="ml-auto text-gray-500">01:00 PM</span>
                  </div>
                </div>
                <a href="#" className="text-blue-500 mt-4 block">
                  See All
                </a>
              </div>
              <div className="bg-indigo-50 p-4 rounded-lg shadow">
                <div className=" overflow-y-auto max-h-96">
                  <h2 className="text-lg font-bold mb-4">
                    Next Patient Details
                  </h2>
                  <div className="flex items-center space-x-4 mb-4">
                    <FaUserAlt className="text-3xl" />
                    <div>
                      <h3 className="font-bold">Sanath Deo</h3>
                      <p className="text-gray-500">Health Checkup</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Patient ID</span>
                      <span>0220092020005</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">D.O.B</span>
                      <span>15 January 1989</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Sex</span>
                      <span>Male</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Weight</span>
                      <span>59 Kg</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Last Appointment</span>
                      <span>15 Dec - 2021</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Height</span>
                      <span>172 cm</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Reg. Date</span>
                      <span>10 Dec 2021</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="font-bold mb-2">Patient History</h3>
                    <div className="flex flex-wrap space-x-2">
                      <span className="bg-yellow-500 text-white px-2 py-1 rounded">
                        Asthma
                      </span>
                      <span className="bg-blue-500 text-white px-2 py-1 rounded">
                        Hypertension
                      </span>
                      <span className="bg-red-500 text-white px-2 py-1 rounded">
                        Fever
                      </span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="font-bold mb-2">Contact</h3>
                    <div className="flex items-center space-x-2">
                      <FaPhoneAlt />
                      <span>8422 1223 00</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="font-bold mb-2">Last Prescriptions</h3>
                    <div className="flex space-x-2">
                      <button className="bg-blue-500 text-white px-2 py-1 rounded">
                        Document
                      </button>
                      <button className="bg-gray-500 text-white px-2 py-1 rounded">
                        Chat
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="bg-white p-4 rounded-lg shadow">
                <h2 className="text-lg font-bold mb-4">Patients Review</h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Excellent</span>
                    <Progress value={70} className="w-56 ml-3 mx-13 mt-3" />
                  </div>
                  <div className="flex justify-between">
                    <span>Great</span>
                    <Progress value={33} className="w-56 ml-3 mx-13 mt-3" />
                  </div>
                  <div className="flex justify-between">
                    <span>Good</span>
                    <Progress value={50} className="w-56 ml-3 mx-13 mt-3 " />
                  </div>
                  <div className="flex justify-between">
                    <span>Average</span>
                    <Progress value={40} className="w-56 ml-3 mx-13 mt-3" />
                  </div>
                </div>
              </div>

              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border w-full flex place-items-center justify-center mx-auto my-auto"
              />
            </section>
          </>
        ) : (
          <div className="grid">
            <Link
              href={"/doctor/verify"}
              className="h-screen place-content-center grid grid-rows-2 text-gray-600"
            >
              <FaUserPlus className="text-9xl place-self-center self-end mb-6" />{" "}
              <span className="text-3xl">Create Doctor Account and Verify</span>{" "}
            </Link>
          </div>
        )
        )}
      </main>
    </div>
  );
};

export default DoctorDashboard;
