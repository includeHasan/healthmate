'use client'; // Ensure this is declared as a client component

import { Suspense } from "react"; // Import Suspense
import { SignupForm } from "@/components/AuthComponents/SignupForm"; 
import ExternalLogin from "@/components/AuthComponents/ExternalLogin";
import SideImg from "@/components/AuthComponents/SideImg";
import NavBar from "@/components/HomeComponents/NavBar";
import Footer from "@/components/HomeComponents/Footer";

const SignUp = () => {
  return (
    <>
    <NavBar/>
    <div className="flex min-h-screen flex-col md:flex-row">
      <SideImg />
      <div className="w-full bg-white flex flex-col justify-center items-center p-8">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-4">
            Signup for a Patient Account
          </h2>
          <p className="mb-6">
            Join now to access your patient portal. Schedule appointments, view test results, and connect with your healthcare team.
          </p>
          <Suspense fallback={<div>Loading Signup Form...</div>}>
            <SignupForm />
          </Suspense>
          <ExternalLogin />
          <div className="mt-6 text-center">
            <span className="text-gray-700">Already have an account? </span>
            <a href="/login" className="text-blue-600">
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default SignUp;
