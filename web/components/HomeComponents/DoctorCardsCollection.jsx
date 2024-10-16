"use client";
import React, { useState } from "react";
import DoctorCard from "./DoctorCard";
import axios from "axios";

const api = axios.create({
  baseURL: "https://healthmate-backend.vercel.app",
});

const doctors = [
  {
    id: 1,
    name: "Dr. Richard James",
    specialty: "General Physician",
    image: "/doctor1.jpg",
    availability: true,
  },
  {
    id: 2,
    name: "Dr. Richard James",
    specialty: "General Physician",
    image: "/doctor2.jpg",
    availability: true,
  },
  {
    id: 3,
    name: "Dr. Richard James",
    specialty: "General Physician",
    image: "/doctor1.jpg",
    availability: true,
  },
  {
    id: 4,
    name: "Dr. Richard James",
    specialty: "General Physician",
    image: "/doctor2.jpg",
    availability: true,
  },
  {
    id: 5,
    name: "Dr. Richard James",
    specialty: "General Physician",
    image: "/doctor1.jpg",
    availability: true,
  },
  {
    id: 6,
    name: "Dr. Richard James",
    specialty: "General Physician",
    image: "/doctor2.jpg",
    availability: true,
  },
  {
    id: 7,
    name: "Dr. Richard James",
    specialty: "General Physician",
    image: "/doctor1.jpg",
    availability: true,
  },
  {
    id: 8,
    name: "Dr. Richard James",
    specialty: "General Physician",
    image: "/doctor2.jpg",
    availability: true,
  },
  {
    id: 9,
    name: "Dr. Richard James",
    specialty: "General Physician",
    image: "/doctor1.jpg",
    availability: true,
  },
  {
    id: 10,
    name: "Dr. Richard James",
    specialty: "General Physician",
    image: "/doctor2.jpg",
    availability: true,
  },
  // Add more doctors here...
];

const DoctorCardsCollection = () => {
  // const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-10 pr-20 ">
      {doctors.map((doctor) => (
        <DoctorCard key={doctor.id} doctor={doctor} />
      ))}
    </div>
  );
};

export default DoctorCardsCollection;
