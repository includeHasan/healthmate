'use client'
import axios from "axios";
import SideImg from "@/components/SideImg";
import LoginForm from "@/components/LoginForm";
import ExternalLogin from "@/components/ExternalLogin";

export default function Login() {
  return (
    <div className="flex min-h-screen">
      <div className="w-1/2 bg-white flex flex-col justify-center items-center p-8">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-4">Login to your account</h2>
          <p className="mb-6 text-gray-600">
          Welcome back! Login to access your health information, schedule appointments, and communicate with your care providers.
          </p>
          <LoginForm/>
          <ExternalLogin/>
          <div className="mt-6 text-center text-gray-600">
            Don't have an account yet?{" "}
            <a href="/patient/signup" className="text-blue-600">
              Signup
            </a>
          </div>
        </div>
      </div>
      <SideImg/>
    </div>
  );
}
