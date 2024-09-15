import React, { useState } from "react";
import { AiOutlineStar, AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { BsFillCalendar2DateFill } from "react-icons/bs";
import { IoMdVideocam } from "react-icons/io";

const PatientProfile = () => {
  const [showInteractionHistory, setShowInteractionHistory] = useState(false);

  const handleInteractionHistory = () => {
    setShowInteractionHistory(!showInteractionHistory);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <div className="rounded-full p-2 bg-green-500">
            <IoMdVideocam size={24} color="white" />
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-xl font-bold">Stephan Bastian</h1>
            <p className="text-sm">
              <span>08/04/1959 (64y)</span> Male
              <span className="text-gray-500">
                {" "}
                <AiOutlineStar /> MRN 456789{" "}
              </span>
            </p>
            <p className="text-sm text-gray-500">
              900 Oak Ridge CIR, Brighton, MI 48116
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col gap-1">
            <h3 className="text-sm font-bold">Eligibility</h3>
            <p className="text-sm text-gray-500">Eligible</p>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-sm font-bold">PCP</h3>
            <p className="text-sm text-gray-500">Dawn Baker, MD</p>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-sm font-bold">Acuity Risk Level</h3>
            <p className="text-sm text-gray-500 bg-gray-200 px-2 rounded-md">
              High
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-sm font-bold">Allergies</h3>
            <p className="text-sm text-gray-500">Sulfur</p>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex justify-between items-center gap-2">
              <img
                src="https://www.koruux.com/images/blue-cross-blue-shield-logo.png"
                alt="BlueCross BlueShield"
                className="w-16"
              />
              <span className="text-sm text-gray-500">
                BlueCross BlueShield of California
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-4">
          <div className="flex flex-col gap-1">
            <h3 className="text-sm font-bold">Encounter Log</h3>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-sm font-bold">12/04/2024</h3>
            <p className="text-sm text-gray-500">(Video Visit)</p>
          </div>
          <div className="flex flex-col gap-1">
            <button className="border border-gray-300 rounded-md px-3 py-1 text-gray-500 font-bold">
              X
            </button>
          </div>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Start Video Call
        </button>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-1">
          <h3 className="text-sm font-bold">Demographics</h3>
          <div className="flex flex-col gap-1">
            <span className="font-bold">IP Outreach Phone</span>
            <span className="text-sm text-gray-500">
              (401) 790-0638
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-sm font-bold">Interactions</h3>
          <div className="flex flex-col gap-1">
            <span className="font-bold">Health Plan</span>
            <span className="text-sm text-gray-500">
              United Healthcare Texas
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-sm font-bold">Health Plan Brand</h3>
          <span className="text-sm text-gray-500">Home State Health</span>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-sm font-bold">Health Plan Phone</h3>
          <span className="text-sm text-gray-500">
            (888) 799-2828
          </span>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-bold">New Interactions</h3>
        <button
          className="bg-gray-200 hover:bg-gray-300 text-gray-500 font-bold py-1 px-2 rounded"
          onClick={handleInteractionHistory}
        >
          Interaction History
        </button>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div className="flex flex-col gap-2">
          <span className="font-bold">Route</span>
          <select
            className="border border-gray-300 rounded-md px-3 py-1"
            defaultValue="Outgoing"
          >
            <option value="Outgoing">Outgoing</option>
            <option value="Incoming">Incoming</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-bold">Interaction Type</span>
          <select
            className="border border-gray-300 rounded-md px-3 py-1"
            defaultValue="Primary Contact/Caregiver"
          >
            <option value="Primary Contact/Caregiver">
              Primary Contact/Caregiver
            </option>
            <option value="Patient">Patient</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-bold">Name</span>
          <input
            type="text"
            className="border border-gray-300 rounded-md px-3 py-1"
            placeholder="Matthew Marsh (Caregiver)"
          />
        </div>
        <div className="flex flex-col gap-2">
          <button
            className="bg-gray-200 hover:bg-gray-300 text-gray-500 font-bold py-1 px-2 rounded"
          >
            Try AI Data Dictation
          </button>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-bold">Phone Number</span>
          <select
            className="border border-gray-300 rounded-md px-3 py-1"
            defaultValue="(339) 725-2507"
          >
            <option value="(339) 725-2507">(339) 725-2507</option>
            <option value="(401) 790-0638">(401) 790-0638</option>
            <option value="(888) 799-2828">(888) 799-2828</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-bold">Call Time</span>
          <input
            type="time"
            className="border border-gray-300 rounded-md px-3 py-1"
            defaultValue="12:10 PM"
          />
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-bold">Call Status</span>
          <select
            className="border border-gray-300 rounded-md px-3 py-1"
            defaultValue="Talked to Patient Contact"
          >
            <option value="Talked to Patient Contact">
              Talked to Patient Contact
            </option>
            <option value="No Answer">No Answer</option>
            <option value="Left Message">Left Message</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-bold">Note</span>
          <textarea
            className="border border-gray-300 rounded-md px-3 py-1 h-24 resize-none"
            placeholder="Enter your note here"
          ></textarea>
        </div>
      </div>
      <div className="flex justify-end gap-4">
        <button
          className="bg-gray-200 hover:bg-gray-300 text-gray-500 font-bold py-1 px-2 rounded"
        >
          Add call back date & time
        </button>
        <button
          className="bg-gray-200 hover:bg-gray-300 text-gray-500 font-bold py-1 px-2 rounded"
        >
          Cancel
        </button>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded"
        >
          Save
        </button>
      </div>
      {showInteractionHistory && (
        <div className="bg-gray-100 p-4 rounded-md">
          <div className="flex justify-between items-center">
            <h3 className="text-sm font-bold">Interaction History</h3>
            <div className="flex gap-2">
              <button
                className="bg-gray-200 hover:bg-gray-300 text-gray-500 font-bold py-1 px-2 rounded"
                onClick={handleInteractionHistory}
              >
                X
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center gap-2">
              <span className="text-sm text-gray-500">
                10/04/2024, 12:10 PM
              </span>
              <div className="flex gap-2">
                <span className="text-sm text-gray-500">Matthew Marsh</span>
                <span className="bg-gray-200 px-2 rounded-md text-gray-500">
                  Caregiver
                </span>
                <span className="bg-gray-200 px-2 rounded-md text-gray-500">
                  No Answer
                </span>
                <AiOutlinePhone size={20} />
                <div className="flex gap-1">
                  <span className="text-sm text-gray-500">
                    Note: No answer, try again later in the evening.
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center gap-2">
              <span className="text-sm text-gray-500">08/02/202</span>
              <div className="flex gap-2">
                <span className="text-sm text-gray-500">Matth</span>
                <span className="bg-gray-200 px-2 rounded-md text-gray-500">
                  Note: Ta
                </span>
                <span className="bg-gray-200 px-2 rounded-md text-gray-500">
                  caregivi
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center gap-2">
              <span className="text-sm text-gray-500">10/01/202</span>
              <div className="flex gap-2">
                <span className="text-sm text-gray-500">Ebony</span>
                <span className="bg-gray-200 px-2 rounded-md text-gray-500">
                  Note: T
                </span>
                <span className="bg-gray-200 px-2 rounded-md text-gray-500">
                  00:02:20
                </span>
                <span className="bg-gray-200 px-2 rounded-md text-gray-500">
                  callback
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PatientProfile;