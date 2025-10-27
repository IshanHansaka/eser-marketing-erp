'use client';

import ApplyLeaveModal from '@/components/UI/ApplyLeaveModal';
import { Plus } from 'lucide-react';
import { useState } from 'react';

interface Leave {
  type: string;
  from: string;
  to: string;
  days: number;
  status: string;
  reason: string;
  approver: string;
}

export default function Leaves() {
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [leaves, setLeaves] = useState<Leave[]>([
    {
      type: 'Casual',
      from: '31 Dec 2024',
      to: '10 Jan 2025',
      days: 1,
      status: 'Approved',
      reason: 'Travelling to village',
      approver: 'Anne Perera',
    },
    {
      type: 'Health',
      from: '31 Dec 2024',
      to: '31 Dec 2024',
      days: 2,
      status: 'Approved',
      reason: 'Sick leave',
      approver: 'Bob Wayne',
    },
    {
      type: 'Casual',
      from: '25 Dec 2024',
      to: '25 Dec 2024',
      days: 1,
      status: 'Rejected',
      reason: 'Travelling to village',
      approver: 'David Marly',
    },
    {
      type: 'Casual',
      from: '10 Dec 2024',
      to: '13 Dec 2024',
      days: 3,
      status: 'Approved',
      reason: 'Travelling abroad',
      approver: 'Evan Thomson',
    },
    {
      type: 'Casual',
      from: '8 Nov 2024',
      to: '13 Nov 2024',
      days: 5,
      status: 'Pending',
      reason: 'Travelling to village',
      approver: 'Anne Perera',
    },
    {
      type: 'Casual',
      from: '8 Nov 2024',
      to: '13 Nov 2024',
      days: 5,
      status: 'Approved',
      reason: 'Travelling abroad',
      approver: 'David Marly',
    },
  ]);

  const handleLeaveSubmit = (newLeave: Leave) => {
    setLeaves([newLeave, ...leaves]);
    setShowApplyModal(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Approved':
        return 'bg-green-100 text-green-800';
      case 'Rejected':
        return 'bg-red-100 text-red-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-blue-900 mb-2">
          My Requested Leaves
        </h1>
        <p className="text-gray-600">
          Manage your leave history and check the current status of pending,
          approved, or rejected requests.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-blue-100 rounded-lg p-6 flex justify-center gap-10 items-center">
          <p className="text-6xl font-bold text-blue-900 mb-2">10</p>
          <p className="text-gray-700 font-medium">
            Available
            <br />
            Leaves
          </p>
        </div>
        <div className="bg-blue-100 rounded-lg p-6 flex justify-center gap-10 items-center">
          <p className="text-6xl font-bold text-blue-900 mb-2">02</p>
          <p className="text-gray-700 font-medium">
            Pending
            <br />
            Leave Requests
          </p>
        </div>
        <div className="bg-blue-100 rounded-lg p-6 flex justify-center gap-10 items-center">
          <p className="text-6xl font-bold text-blue-900 mb-2">07</p>
          <p className="text-gray-700 font-medium">
            Rejected
            <br />
            Leaves
          </p>
        </div>
      </div>

      {/* Leave Details Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-800">Leave Details</h2>
          <button
            onClick={() => setShowApplyModal(true)}
            className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <Plus size={18} />
            Apply Leave
          </button>
        </div>

        <ApplyLeaveModal
          isOpen={showApplyModal}
          onClose={() => setShowApplyModal(false)}
          onSubmit={handleLeaveSubmit}
        />

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                  Leave type
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                  From
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                  To
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                  Days
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                  Reason
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                  Approver
                </th>
              </tr>
            </thead>
            <tbody>
              {leaves.map((leave, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 hover:bg-gray-50"
                >
                  <td className="px-6 py-4 text-sm text-gray-800">
                    {leave.type}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {leave.from}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {leave.to}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800">
                    {leave.days}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-block px-3 py-1 rounded text-xs font-medium ${getStatusColor(
                        leave.status
                      )}`}
                    >
                      {leave.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {leave.reason}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800">
                    {leave.approver}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
