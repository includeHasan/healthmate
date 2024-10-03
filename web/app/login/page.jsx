'use client'
import SideImg from "@/components/AuthComponents/SideImg";
import LoginForm from "@/components/AuthComponents/LoginForm";

import ExternalLogin from "@/components/AuthComponents/ExternalLogin";
import Link from "next/link";

export default function Login() {
  return (
    <div className="flex min-h-screen">
      <div className="w-1/2 bg-white flex flex-col justify-center items-center p-8">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-4">Login to your account</h2>
          <p className="mb-6 text-gray-600">
            Login to access your healthcare dashboard. Explore appointments,
            manage tasks and patient records with ease.
          </p>
          <LoginForm/>
          <ExternalLogin/>
          <div className="mt-6 text-center text-gray-600">
            Dont have an account yet?{" "}
            <Link href="/doctor/signup" className="text-blue-600">
              Signup
            </Link>
          </div>
        </div>
      </div>
      <SideImg/>
    </div>
  );
}
