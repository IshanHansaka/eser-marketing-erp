"use client";
import React, { useState } from 'react';
import { Search, Plus, SlidersHorizontal } from 'lucide-react';
import RepairRequestModal from '@/components/UI/RepairRequestPopup';

export default function Page() {
  // State for repair requests
  const [repairRequests, setRepairRequests] = useState([
    {
      id: 1,
      product: 'Treadmill',
      dateSubmitted: '22 Oct 2025',
      issue: 'Belt slipping during use',
      status: 'Pending'
    },
    {
      id: 2,
      product: 'Stationary Bike',
      dateSubmitted: '03 Oct 2025',
      issue: 'Resistance knob not working',
      status: 'Completed'
    },
    {
      id: 3,
      product: 'Rowing Machine',
      dateSubmitted: '24 Oct 2025',
      issue: 'Display screen not turning on',
      status: 'Pending'
    },
    {
      id: 4,
      product: 'Bench Press',
      dateSubmitted: '18 Oct 2025',
      issue: 'Seat cushion torn',
      status: 'In Progress'
    },
    {
      id: 5,
      product: 'Treadmill',
      dateSubmitted: '26 Oct 2025',
      issue: 'Belt slipping during use',
      status: 'Pending'
    },
    {
      id: 6,
      product: 'Treadmill',
      dateSubmitted: '09 Oct 2025',
      issue: 'Belt slipping during use',
      status: 'Completed'
    }
  ]);

  // State for modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to handle modal open
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // Function to handle modal close
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Function to handle form submission
  const handleSubmitRequest = (data: { product: string; issue: string }) => {
    const newRequest = {
      id: repairRequests.length + 1, // Simple ID generation (incremental)
      product: data.product,
      dateSubmitted: new Date().toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      }), // Format: DD Mon YYYY
      issue: data.issue,
      status: 'Pending' // Default status for new requests
    };
    setRepairRequests([...repairRequests, newRequest]);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'In Progress':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-7xl">
      {/* Header Section */}
      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-blue-900 mb-2">My Repair Requests</h1>
          <p className="text-black text-sm font-medium">
            Monitor the status of your submitted repair requests and stay updated on service timelines and completion.
          </p>
        </div>
        <button
          onClick={handleOpenModal}
          className="bg-[#1E56A0] hover:bg-blue-700 text-white px-5 py-2.5 rounded-md text-sm font-medium transition-colors flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          New Request
        </button>
      </div>

      {/* Search and Filter Section */}
      <div className="flex gap-4 mb-10">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search orders"
            className="w-full pl-12 pr-4 py-4 border border-[#163172] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <button className="px-6 py-4 border border-[#163172] rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2 text-gray-700">
          <SlidersHorizontal className="w-5 h-5" />
          Filter
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Product</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Date Submitted</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Issue</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {repairRequests.map((request) => (
              <tr key={request.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-sm text-gray-900">{request.product}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{request.dateSubmitted}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{request.issue}</td>
                <td className="px-6 py-4">
                  <span className={`inline-block w-28 px-4 py-1.5 rounded-md text-sm font-medium text-center ${getStatusColor(request.status)}`}>
                    {request.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Repair Request Modal */}
      <RepairRequestModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmitRequest}
      />
    </div>
  );
}