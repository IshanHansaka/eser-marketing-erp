import React from 'react';
import { User } from 'lucide-react';

export default function Page() {
  return (
    <div className="max-w-6xl">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-blue-900 mb-2">My Profile</h1>
        <p className="text-black text-medium">
          Manage your personal information and keep your profile up to date.
        </p>
      </div>

      {/* Profile Card */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 pb-16">
        {/* Profile Header with Avatar */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            {/* Avatar */}
            <div className="w-16 h-16 bg-[#1E56A0] rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-white" />
            </div>
            {/* Name and Email */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Sheron Perera</h2>
              <p className="text-sm text-gray-500">sheronperera@gmail.com</p>
            </div>
          </div>
          {/* Edit Button */}
          <button className="bg-[#1E56A0] hover:bg-blue-700 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors">
            Edit
          </button>
        </div>

        {/* Profile Fields Grid */}
        <div className="grid grid-cols-2 gap-6">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              defaultValue="Sheron Perera"
              className="bg-gray-50 rounded-md px-4 py-4 text-gray-400 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Joined Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Joined Date
            </label>
            <input
              type="text"
              defaultValue="2024-04-27"
              className="bg-gray-50 rounded-md px-4 py-4 text-gray-400 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              readOnly
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Gender
            </label>
            <input
              type="text"
              defaultValue="Male"
              className="bg-gray-50 rounded-md px-4 py-4 text-gray-400 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Date of Birth
            </label>
            <input
              type="text"
              defaultValue="1988-05-19"
              className="bg-gray-50 rounded-md px-4 py-4 text-gray-400 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Telephone Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Telephone Number
            </label>
            <input
              type="text"
              defaultValue="+94 77 840 3396"
              className="bg-gray-50 rounded-md px-4 py-4 text-gray-400 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Address
            </label>
            <input
              type="text"
              defaultValue="No.23, Flower Lane, Gampaha"
              className="bg-gray-50 rounded-md px-4 py-4 text-gray-400 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}