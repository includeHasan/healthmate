import Sidebar from "@/components/DashboardComponents/Sidebar";
import Image from "next/image";

const PatientDashBoard = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-x-auto">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-2xl font-bold">Sophie Kinsey</h1>
            <p className="text-gray-500">ID: HYZ1238243</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-gray-500">
              <i className="fas fa-bell"></i>
            </div>
            <div className="text-gray-500">
              <i className="fas fa-envelope"></i>
            </div>
            <div className="text-gray-500">
              <i className="fas fa-user-md"></i> dr Isabelle Smith
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* General Info */}
          <div className="bg-white p-6 pt-8 rounded-lg shadow-md col-span-1">
            <h2 className="text-lg font-semibold mb-4">General info</h2>
            <div className="grid grid-cols-3 gap-4 text-gray-950">
              <div className="text-center bg-cyan-50 rounded-lg py-1">
                <p>Date of birth:</p>
                <p> 13/03/1993</p>
              </div>
              <div className="text-center bg-blue-50 rounded-lg py-1">
                <p>Age:</p>
                <p> 29</p>
              </div>
              <div className="text-center bg-indigo-50 rounded-lg py-1">
                <p>Sex:</p>
                <p>Female</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-purple-100 p-4 rounded-lg text-center">
                <p className="text-gray-500">Weight</p>
                <p className="text-2xl font-semibold">62 kg</p>
              </div>

              <div className="bg-orange-100 p-4 rounded-lg text-center">
                <p className="text-gray-500">Height</p>
                <p className="text-2xl font-semibold">165 cm</p>
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
                  <p className="font-semibold  py-1">Glucose blood test</p>
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
                  viral
                </span>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold">Atopic dermatitis</p>
                  <p className="text-gray-500">diagnosed 01/2012</p>
                </div>
                <span className="bg-blue-200 text-blue-700 px-2 py-1 rounded-full">
                  chronic
                </span>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold">Asthma</p>
                  <p className="text-gray-500">diagnosed 11/2019</p>
                </div>
                <span className="bg-blue-200 text-blue-700 px-2 py-1 rounded-full">
                  chronic
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
                src="https://placehold.co/200x100"
                alt="Graph showing latest results"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PatientDashBoard;
