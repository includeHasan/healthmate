"use client";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";

const api = axios.create({
  baseURL: "http://localhost:5000",
});

const DoctorVerification = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    licenseNo: "",
    speciality: [],
    experienceYrs: 0,
  });
  const [profilePic, setProfilePic] = useState(null);
  const [document, setDocument] = useState([]);

  const handleAddDocument = () => {
    setDocument((prevDocuments) => [
      ...prevDocuments,
      { file: null },
    ]);
  };

  const handleRemoveDocument = (index) => {
    setDocument((prevDocuments) => prevDocuments.filter((_, i) => i !== index));
  };

  const handleDocumentChange = (index, file) => {
    setDocument((prevDocuments) => {
      const newDocuments = [...prevDocuments];
      newDocuments[index] = file;
      return newDocuments;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        licenseNo: formData.licenseNo,
        speciality: formData.speciality,
        experienceYrs: formData.experienceYrs,
        profilePic: profilePic,
        document: document,
      };
      console.log(data);

      const response = await api.post("/docter/createDocter", data, {
        withCredentials: true,
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-12 py-10  shadow-lg mt-5 border-blue-200 border-2 rounded-3xl">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">
        Doctor Verification
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
        <div className="col-span-1">
          <label
            className="block text-gray-700 text-md font-bold mb-2"
            htmlFor="firstName"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            value={formData.firstName}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, firstName: e.target.value }))
            }
            className="block w-full p-2 pl-6 text-md font-semibold text-gray-600 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
        </div>
        <div className="col-span-1">
          <label
            className="block text-gray-700 text-md font-bold mb-2"
            htmlFor="lastName"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            value={formData.lastName}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, lastName: e.target.value }))
            }
            className="block w-full p-2 pl-6 text-md font-semibold text-gray-700 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
        </div>
        <div className="col-span-1">
          <label
            className="block text-gray-700 text-md font-bold mb-2"
            htmlFor="licenseNo"
          >
            License No
          </label>
          <input
            type="text"
            id="licenseNo"
            value={formData.licenseNo}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, licenseNo: e.target.value }))
            }
            className="block w-full p-2 pl-6 text-md font-semibold text-gray-700 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
        </div>
        <div className="col-span-1">
          <label
            className="block text-gray-700 text-md font-bold mb-2"
            htmlFor="speciality"
          >
            Speciality (Comma Separated)
          </label>
          <input
            type="text"
            id="speciality"
            value={formData.speciality.join(", ")}
            onChange={(e) => {
              const specialities = e.target.value
                .split(",")
                .map((s) => s.trim());
              setFormData((prev) => ({ ...prev, speciality: specialities }));
            }}
            className="block w-full p-2 pl-6 text-md font-semibold text-gray-700 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
        </div>
        <div className="col-span-1">
          <label
            className="block text-gray-700 text-md font-bold mb-2"
            htmlFor="experienceYrs"
          >
            Experience (Years)
          </label>
          <input
            type="number"
            id="experienceYrs"
            value={formData.experienceYrs}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                experienceYrs: e.target.value,
              }))
            }
            className="block w-full p-2 pl-6 text-md font-semibold text-gray-700 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
        </div>
        <div className="col-span-1"></div>
        <div className="col-span-1">
          <label
            className="block text-gray-700 text-md font-bold mb-2"
            htmlFor="profilePicture"
          >
            Profile Picture
          </label>
          <input
            type="file"
            id="profilePicture"
            onChange={(e) => setProfilePic(e.target.files)}
            className="block w-full p-2 pl-4 text-md text-gray-700 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent file:py-2 file:mr-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 file:shadow-md hover:file:bg-blue-100"
          />
        </div>
      </div>
      <div className="mt-6">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Documents</h2>
        {document.map((document, index) => (
          <div key={index} className="mb-4">
            <input
              type="file"
              onChange={(e) => handleDocumentChange(index, e.target.files[0])}
              className="block w-full m-2 text-md text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none p-2.5 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 file:shadow-md hover:file:bg-blue-100"
            />
            <button
              type="button"
              onClick={() => handleRemoveDocument(index)}
              className="bg-red-500 hover:bg-red-700 m-2 text-white font-bold py-2 px-6 rounded-3xl"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddDocument}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full m-2"
        >
          Add Document
        </button>
      </div>
      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full m-2"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default DoctorVerification;
