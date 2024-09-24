import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

const ExternalLogin = () => {
  return (
    <>
      <div className="my-6 text-center text-gray-500">
        Or connect with a social account
      </div>
      <div className="flex space-x-4">
        <button className="w-1/2 bg-white border border-gray-300 text-gray-700 py-2 rounded-md flex items-center justify-center gap-2 hover:bg-gray-100 transition duration-200">
          <FcGoogle />
          Google
        </button>
        <button className="w-1/2 bg-white border border-gray-300 text-gray-700 py-2 rounded-md flex items-center justify-center gap-2 hover:bg-gray-100 transition duration-200">
          <FaFacebook />
          Facebook
        </button>
      </div>
    </>
  );
};

export default ExternalLogin;
