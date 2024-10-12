"use client";
import { api } from "@/utils/api";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const CreateDoctor = () => {
  const router =useRouter();
  /// All the required fields are managed by states
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [licenseNo, setLicenseNo] = useState("");
  const [speciality, setSpeciality] = useState([]);
  const [experienceYrs, setExperienceYrs] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const [documents, setDocuments] = useState([]);

  const handleFileChange = (e) => {
    setProfilePic(e.target.files[0]); // Single file for profile picture
  };
  ///submitting the form and creating request
  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.info("Creating New Doctor ...");
    const formData = new FormData();

    // Append form data
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("licenseNo", licenseNo);
    speciality.forEach((special) => {
      formData.append("speciality", special);
    });
    formData.append("experienceYrs", experienceYrs);
    if (profilePic) {
      formData.append("profilePic", profilePic);
    }
    documents.forEach((doc) => {
      formData.append("document", doc);
    });
    console.log(documents);

    try {
      // making the request to backend to create doctor
      const response = await api.post("/docter/createDocter", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });
      console.log(response.data); // Handle success response
      alert("Doctor created successfully!");
      router.replace("/doctor/dashboard");
    } catch (error) {
      console.log("Error creating doctor:", error.response?.data.error);
      alert("Error creating doctor: " + error.response?.data?.error);
    }
  };

  const handleAddDocument = () => {
    setDocuments((prevDocuments) => [...prevDocuments, { file: null }]);
  };

  const handleRemoveDocument = (index) => {
    setDocuments((prevDocuments) =>
      prevDocuments.filter((_, i) => i !== index)
    );
  };

  const handleDocumentChange = (index, file) => {
    setDocuments((prevDocuments) => {
      const newDocuments = [...prevDocuments];
      newDocuments[index] = file;
      return newDocuments;
    });
  };

  return (
    <>
    <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    <div className="max-w-6xl mx-auto px-12 py-10  shadow-lg mt-5 border-blue-200 border-2 rounded-3xl">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">
        Doctor Verification
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        <div className="col-span-1">
          <label
            className="block text-gray-700 text-md font-bold mb-2"
            htmlFor="firstName"
          >
            <span className="font-bold text-red-600 ">* </span>
            First Name
          </label>
          <input
            type="text"
            value={firstName}
            className="block w-full p-2 pl-6 text-md font-semibold text-gray-700 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="col-span-1">
          <label className="block text-gray-700 text-md font-bold mb-2">
            {" "}
            <span className="font-bold text-red-600 ">* </span>Last Name:
          </label>
          <input
            type="text"
            value={lastName}
            className="block w-full p-2 pl-6 text-md font-semibold text-gray-700 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="col-span-1">
          <label className="block text-gray-700 text-md font-bold mb-2">
            <span className="font-bold text-red-600 ">* </span>License Number:
          </label>
          <input
            type="text"
            value={licenseNo}
            className="block w-full p-2 pl-6 text-md font-semibold text-gray-700 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            onChange={(e) => setLicenseNo(e.target.value)}
            required
          />
        </div>
        <div className="col-span-1">
          <label className="block text-gray-700 text-md font-bold mb-2">
            <span className="font-bold text-red-600 ">* </span>Speciality:
          </label>
          <input
            type="text"
            value={speciality.join(", ")}
            className="block w-full p-2 pl-6 text-md font-semibold text-gray-700 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            onChange={(e) => {
              const specialities = e.target.value
                .split(",");
              setSpeciality(specialities);
            }}
            required
          />
        </div>
        <div className="col-span-1">
          <label className="block text-gray-700 text-md font-bold mb-2">
            <span className="font-bold text-red-600 ">* </span>Years of
            Experience:
          </label>
          <input
            type="number"
            value={experienceYrs}
            className="block w-full p-2 pl-6 text-md font-semibold text-gray-700 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            onChange={(e) => setExperienceYrs(e.target.value)}
            required
          />
        </div>
        <div className="col-span-1"></div>
        <div className="col-span-1">
          <label className="block text-gray-700 text-md font-bold mb-2">
            Profile Picture:
          </label>
          <input
            type="file"
            onChange={handleFileChange}
            className="block w-full p-2 pl-4 text-md text-gray-700 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent file:py-2 file:mr-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 file:shadow-md hover:file:bg-blue-100"
          />
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Documents</h2>
        {documents.map((document, index) => (
          <div key={index} className="mb-4">
            <input
              type="file"
              onChange={(e) => handleDocumentChange(index, e.target.files)}
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
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full m-2"
        onClick={handleSubmit}
      >
        Create Doctor
      </button>
    </div>
    </>
  );
};

export default CreateDoctor;
