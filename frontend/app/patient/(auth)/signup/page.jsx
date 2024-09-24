'use client'
import { SignupForm } from "@/components/SignupForm"; 
import ExternalLogin from "@/components/ExternalLogin";
import SideImg from "@/components/SideImg";

const SignUp = () => {
  return (
    <div className="flex min-h-screen">
      <SideImg/>
      <div className="w-1/2 bg-white flex flex-col justify-center items-center p-8">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-4">
            Signup for a Patient Account
          </h2>
          <p className="mb-6">
          Join now to access your patient portal. Schedule appointments, view test results, and connect with your healthcare team.
          </p>
          <SignupForm/>
          <ExternalLogin/>
          <div className="mt-6 text-center">
            <span className="text-gray-700">Already have an account? </span>
            <a href="/patient/login" className="text-blue-600">
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;