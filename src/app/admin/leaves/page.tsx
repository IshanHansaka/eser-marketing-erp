'use client';
import { useState } from 'react';

interface LeaveRequest {
  id: string;
  employeeName: string;
  leaveType: string;
  from: string;
  to: string;
  days: number;
  reason: string;
  status: 'pending' | 'accepted' | 'rejected';
}

// Mock data for leave requests
const initialLeaveRequests: LeaveRequest[] = [
  {
    id: '1',
    employeeName: 'Mark Jhonson',
    leaveType: 'Vacation',
    from: '2025-10-24',
    to: '2025-09-25',
    days: 2,
    reason: 'Personal reason',
    status: 'pending'
  },
  {
    id: '2',
    employeeName: 'Kavindu Perera',
    leaveType: 'Health',
    from: '2025-10-28',
    to: '2025-10-28',
    days: 1,
    reason: "Doctor's appointment",
    status: 'pending'
  },
  {
    id: '3',
    employeeName: 'Malsha Abeyesekara',
    leaveType: 'Vacation',
    from: '2025-11-01',
    to: '2025-11-05',
    days: 5,
    reason: 'Travel abroad',
    status: 'pending'
  },
  {
    id: '4',
    employeeName: 'Sachini Weerasinghe',
    leaveType: 'Health',
    from: '2025-10-27',
    to: '2025-10-27',
    days: 1,
    reason: "Doctor's appointment",
    status: 'pending'
  },
  {
    id: '5',
    employeeName: 'Sehan Nethmina',
    leaveType: 'Vacation',
    from: '2025-10-29',
    to: '2025-10-31',
    days: 3,
    reason: 'Travelling to village',
    status: 'pending'
  },
  {
    id: '6',
    employeeName: 'Haritha Induwara',
    leaveType: 'Health',
    from: '2025-10-25',
    to: '2025-10-28',
    days: 4,
    reason: 'Sick leave',
    status: 'pending'
  }
];

export default function LeaveRequests() {
  const [leaveRequests, setLeaveRequests] = useState<LeaveRequest[]>(initialLeaveRequests);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState<LeaveRequest | null>(null);
  const [actionType, setActionType] = useState<'approve' | 'reject' | null>(null);

  // Calculate statistics
  const acceptedCount = leaveRequests.filter(req => req.status === 'accepted').length;
  const pendingCount = leaveRequests.filter(req => req.status === 'pending').length;
  const rejectedCount = leaveRequests.filter(req => req.status === 'rejected').length;

  const handleAction = (request: LeaveRequest, action: 'approve' | 'reject') => {
    setSelectedRequest(request);
    setActionType(action);
    setIsModalOpen(true);
  };

  const confirmAction = () => {
    if (selectedRequest && actionType) {
      setLeaveRequests(prev =>
        prev.map(request =>
          request.id === selectedRequest.id
            ? { ...request, status: actionType === 'approve' ? 'accepted' : 'rejected' }
            : request
        )
      );
      setIsModalOpen(false);
      setSelectedRequest(null);
      setActionType(null);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRequest(null);
    setActionType(null);
  };

  return (
    <div className="p-8 -mt-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#1C398E] mb-4">Leave Requests</h1>
        <p className="text-black text-sm">
          Review, approve, or reject employee leave requests efficiently and keep track of leave history.
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-3 gap-16 mb-12">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className='flex gap-6 '>
            <div className="text-4xl font-bold text-[#1C398E] mb-2  bg-blue-100 px-4 py-2">{acceptedCount.toString().padStart(2, '1')}</div>
            <div className="text-lg font-bold text-blue-900 mt-4">Leaves Accepted</div>
          </div>
          
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className='flex gap-6'>
            <div className="text-4xl font-bold text-[#1C398E] mb-2 bg-blue-100 px-4 py-2">{pendingCount.toString().padStart(2, '0')}</div>
            <div className="text-lg font-bold text-blue-900 mt-4">Leaves Pending</div>
          </div>
          
        </div>
        <div  className="bg-white rounded-lg shadow-sm p-6">
          <div className='flex gap-6'>
            <div className="text-4xl font-bold text-[#1C398E] mb-2 bg-blue-100 px-4 py-2">{rejectedCount.toString().padStart(2, '0')}</div>
            <div className="text-lg font-bold text-blue-900 mt-4">Leaves Rejected</div>
          </div>
          
        </div>
      </div>

      {/* Leave Details Section */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-[#1C398E]">Leave Details</h2>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-md font-bold text-black border-r border-gray-200 shadow-sm">
                  Employee Name
                </th>
                <th className="px-6 py-3 text-left text-md font-bold text-black border-r border-gray-200 shadow-sm">
                  Leave Type
                </th>
                <th className="px-6 py-3 text-left text-md font-bold text-black border-r border-gray-200 shadow-sm">
                  From
                </th>
                <th className="px-6 py-3 text-left text-md font-bold text-black border-r border-gray-200 shadow-sm">
                  To
                </th>
                <th className="px-6 py-3 text-left text-md font-bold text-black border-r border-gray-200 shadow-sm">
                  Days
                </th>
                <th className="px-6 py-3 text-left text-md font-bold text-black border-r border-gray-200 shadow-sm">
                  Reason
                </th>
                <th className="px-6 py-3 text-left text-md font-bold text-black">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {leaveRequests.map((request) => (
                <tr key={request.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {request.employeeName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {request.leaveType}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {request.from}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {request.to}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {request.days}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {request.reason}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {request.status === 'pending' ? (
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleAction(request, 'approve')}
                          className="px-4 py-2 bg-[#D1FAE5] text-black text-sm rounded hover:bg-green-300 transition-colors"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => handleAction(request, 'reject')}
                          className="px-4 py-2 bg-[#FEE2E2] text-black text-sm rounded hover:bg-red-300 transition-colors"
                        >
                          Reject
                        </button>
                      </div>
                    ) : request.status === 'accepted' ? (
                      <span className="px-4 py-2 bg-green-100 text-green-800 text-sm rounded font-medium">
                        Approved
                      </span>
                    ) : (
                      <span className="px-4 py-2 bg-red-100 text-red-800 text-sm rounded font-medium">
                        Rejected
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Confirmation Modal */}
      {isModalOpen && selectedRequest && actionType && (
        <div className="fixed inset-0 bg-gray-50 bg-opacity-20 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800">
                Confirm {actionType === 'approve' ? 'Approval' : 'Rejection'}
              </h3>
              <p className="text-sm text-gray-600 mt-3">
                Are you sure you want to {actionType === 'approve' ? 'approve' : 'reject'} the leave request from{' '}
                <span className="font-semibold">{selectedRequest.employeeName}</span>?
              </p>
              <div className="mt-3 p-3 bg-gray-50 rounded text-sm">
                <div className="grid grid-cols-2 gap-2">
                  <div className="text-gray-600">Leave Type:</div>
                  <div className="font-medium">{selectedRequest.leaveType}</div>
                  <div className="text-gray-600">Duration:</div>
                  <div className="font-medium">{selectedRequest.days} day(s)</div>
                  <div className="text-gray-600">Reason:</div>
                  <div className="font-medium">{selectedRequest.reason}</div>
                </div>
              </div>
            </div>
            <div className="p-6 flex justify-end gap-3">
              <button
                onClick={closeModal}
                className="px-4 py-2 text-gray-700 bg-gray-100 rounded hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={confirmAction}
                className={`px-4 py-2 rounded transition-colors ${
                  actionType === 'approve'
                    ? 'bg-green-500 text-white hover:bg-green-600'
                    : 'bg-red-500 text-white hover:bg-red-600'
                }`}
              >
                {actionType === 'approve' ? 'Approve' : 'Reject'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}