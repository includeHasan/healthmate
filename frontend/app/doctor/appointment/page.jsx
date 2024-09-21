'use client'
import { useState } from "react";

const appointments = [
  {
    date: "Mar 18, 2024",
    isToday: true,
    events: [
      {
        time: "12:00 PM - 12:15 PM",
        patient: "Skye Brown",
        gender: "Male",
        age: 23,
        reason: "General Checkup",
        clinician: "Dr. Guy Hawkins",
        type: "Televisit",
        appointmentType: "Surgery",
      },
      {
        time: "01:00 PM - 01:45 PM",
        patient: "Emery Glenn",
        gender: "Male",
        age: 38,
        reason: "Specialist Consultation",
        clinician: "Dr. Callie Santana",
        type: "Televisit",
        appointmentType: "Diagnosis",
      },
    ],
  },
  {
    date: "Mar 19, 2024",
    isTomorrow: true,
    events: [
      {
        time: "12:00 PM - 12:30 PM",
        patient: "Antonio Spencer",
        gender: "Male",
        age: 29,
        reason: "Post-Operative Concern",
        clinician: "Dr. Noah Simpson",
        type: "Televisit",
        appointmentType: "Consultation",
      },
    ],
  },
  {
    date: "Mar 22, 2024",
    events: [
      {
        time: "12:30 PM - 01:00 PM",
        patient: "Brian Cantu",
        gender: "Male",
        age: 20,
        reason: "Specialist Consultation",
        clinician: "Dr. Guy Hawkins",
        type: "Televisit",
        appointmentType: "Consultation",
      },
      {
        time: "03:30 PM - 03:45 PM",
        patient: "Winston Pennington",
        gender: "Male",
        age: 89,
        reason: "General Checkup",
        clinician: "Dr. Guy Hawkins",
        type: "Televisit",
        appointmentType: "Consultation",
      },
    ],
  },
  {
    date: "Mar 29, 2024",
    events: [
      {
        time: "11:00 PM - 11:30 PM",
        patient: "Alexander Hill",
        gender: "Male",
        age: 40,
        reason: "Follow up",
        clinician: "Dr. Callie Santana",
        type: "Televisit",
        appointmentType: "Consultation",
      },
    ],
  },
];

const upcomingAppointments = [
  {
    time: "9:00 - 9:45",
    reason: "General Checkup",
    patient: "Wade Warren",
  },
  {
    time: "10:00 - 10:45",
    reason: "Joint Pain",
    patient: "Ralph Edwards",
  },
  {
    time: "11:45 am - 12:00 pm",
    reason: "General Checkup",
    patient: "Skye Brown",
    isCurrent: true,
  },
  {
    time: "1:00 pm - 1:45 pm",
    reason: "Specialist Consultation",
    patient: "Emery Glenn",
  },
];

export default function Appointments() {
  const [reminderTime, setReminderTime] = useState(15);
  const [showUpcoming, setShowUpcoming] = useState(false);

  return (
    <>
   
    <div className="relative flex flex-col md:flex-row">
      <div
        className={`w-full md:w-full p-4 transition-all duration-300`}
      >
        <div className="bg-white shadow-md rounded-lg">
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-full">
                All Events
              </button>
              <button
                className="px-4 py-2 bg-gray-200 text-gray-600 rounded-full"
                onClick={() => setShowUpcoming(true)}
              >
                Upcoming Events
              </button>
              <button className="px-4 py-2 bg-gray-200 text-gray-600 rounded-full">
                Pending Requests
              </button>
              <button className="px-4 py-2 bg-gray-200 text-gray-600 rounded-full">
                Past Events
              </button>
            </div>
            <div className="text-gray-600">49</div>
          </div>
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="w-1/6 text-gray-600 font-semibold">TIME</div>
              <div className="w-1/6 text-gray-600 font-semibold">PATIENT</div>
              <div className="w-1/6 text-gray-600 font-semibold">
                REASON FOR VISIT
              </div>
              <div className="w-1/6 text-gray-600 font-semibold">
                REFERRING CLINICIAN
              </div>
              <div className="w-1/6 text-gray-600 font-semibold">
                VISIT TYPE
              </div>
              <div className="w-1/6 text-gray-600 font-semibold">
                APPOINTMENT TYPE
              </div>
            </div>
            {appointments.map((appointment, index) => (
              <div key={index} className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-lg font-semibold">
                    {appointment.date}
                  </div>
                  {appointment.isToday && (
                    <div className="text-blue-600">Today</div>
                  )}
                  {appointment.isTomorrow && (
                    <div className="text-blue-600">Tomorrow</div>
                  )}
                </div>
                {appointment.events.map((event, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 bg-gray-100 rounded-lg mb-2"
                  >
                    <div className="flex items-center space-x-4 w-1/6">
                      <input type="checkbox" className="form-checkbox" />
                      <div className="text-gray-600">{event.time}</div>
                    </div>
                    <div className="flex items-center space-x-2 w-1/6">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center">
                        {event.patient
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <div className="font-semibold">{event.patient}</div>
                        <div className="text-gray-500">
                          {event.gender} - {event.age} years
                        </div>
                      </div>
                    </div>
                    <div className="px-2 py-1 bg-green-200 text-green-800 rounded-full w-1/6">
                      {event.reason}
                    </div>
                    <div className="text-gray-600 w-1/6">{event.clinician}</div>
                    <div className="text-gray-600 w-1/6">{event.type}</div>
                    <div className="text-gray-600 w-1/6">
                      {event.appointmentType}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div> 
    </div>
    {showUpcoming && (
        <div className="fixed inset-y-0 right-0 w-full md:w-1/3 bg-white shadow-md rounded-lg z-50">
          <div className="flex items-center justify-between p-4 border-b">
            <div className="text-lg font-semibold">Upcoming Appointments</div>
            <button
              className="text-gray-600"
              onClick={() => setShowUpcoming(false)}
            > X
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div className="p-4">
            <div className="text-gray-600 mb-2">Mon, Mar 18</div>
            {upcomingAppointments.map((appointment, index) => (
              <div
                key={index}
                className={`flex items-center justify-between p-4 rounded-lg mb-2 ${
                  appointment.isCurrent ? "bg-blue-100" : "bg-gray-100"
                }`}
              >
                <div>
                  <div className="font-semibold">{appointment.reason}</div>
                  <div className="text-gray-500">{appointment.patient}</div>
                </div>
                <div className="text-gray-600">{appointment.time}</div>
                {appointment.isCurrent && (
                  <div className="relative">
                    <button className="px-2 py-1 bg-blue-600 text-white rounded-full">
                      15 min
                    </button>
                    <div className="absolute top-0 right-0 mt-8 w-48 bg-white shadow-md rounded-lg p-4">
                      <div className="text-gray-600 mb-2">Starts in</div>
                      <select
                        value={reminderTime}
                        onChange={(e) => setReminderTime(e.target.value)}
                        className="form-select w-full mb-2"
                      >
                        <option value="15">15 mins</option>
                        <option value="30">30 mins</option>
                        <option value="45">45 mins</option>
                      </select>
                      <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-full">
                        SAVE
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
