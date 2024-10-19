'use client';
import React, { useState } from 'react';
import ViewAllUsers from '@/components/AdminPanel/ViewAllUsers';
import ViewAllPatients from '@/components/AdminPanel/ViewAllPatients';
import ViewAllDoctors from '@/components/AdminPanel/ViewAllDoctors';
import ViewUnverifiedDoctors from '@/components/AdminPanel/ViewUnverifiedDoctors';
import ViewVerifiedDoctors from '@/components/AdminPanel/ViewVerifiedDoctors';


const AdminPanel = () => {
  const [view, setView] = useState('doctors'); // Default view

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setView('users')}
          className={`px-4 py-2 rounded ${view === 'users' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          View All Users
        </button>
        <button
          onClick={() => setView('patients')}
          className={`px-4 py-2 rounded ${view === 'patients' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          View All Patients
        </button>
        <button
          onClick={() => setView('doctors')}
          className={`px-4 py-2 rounded ${view === 'doctors' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          View All Doctors
        </button>
        <button
          onClick={() => setView('unverifiedDoctors')}
          className={`px-4 py-2 rounded ${view === 'unverifiedDoctors' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          View Unverified Doctors
        </button>
        <button
          onClick={() => setView('verifiedDoctors')}
          className={`px-4 py-2 rounded ${view === 'verifiedDoctors' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          View Verified Doctors
        </button>
      </div>
      <div>
        {view === 'users' && <ViewAllUsers />}
        {view === 'patients' && <ViewAllPatients />}
        {view === 'doctors' && <ViewAllDoctors />}
        {view === 'unverifiedDoctors' && (
          <>
            <ViewUnverifiedDoctors />
          </>
        )}
        {view === 'verifiedDoctors' && <ViewVerifiedDoctors />}
      </div>
    </div>
  );
};

export default AdminPanel;
