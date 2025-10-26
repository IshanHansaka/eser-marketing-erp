'use client';
import { useState } from 'react';

interface RepairRequest {
  id: string;
  product: string;
  customer: string;
  description: string;
  assignedEmployee?: string;
  status: 'pending' | 'assigned' | 'completed';
}

const employees = [
  'John Silva',
  'Sarah Fernando',
  'Dinesh Kumar',
  'Priya Jayasinghe',
  'Rajesh Wijeratne',
  'Nimal Perera',
  'Kasun Bandara'
];

// Mock data for repair requests
const initialRepairRequests: RepairRequest[] = [
  {
    id: 'ORD-001',
    product: 'Treadmill',
    customer: 'Kavindu Perera',
    description: 'Belt slipping during use',
    status: 'pending'
  },
  {
    id: 'ORD-002',
    product: 'Stationary Bike',
    customer: 'Malsha Abeyesekara',
    description: 'Resistance knob not working',
    status: 'pending'
  },
  {
    id: 'ORD-003',
    product: 'Rowing Machine',
    customer: 'Nayana Perera',
    description: 'Display screen not turning on',
    status: 'pending'
  },
  {
    id: 'ORD-004',
    product: 'Bench Press',
    customer: 'Mary Perera',
    description: 'Seat cushion torn',
    status: 'pending'
  },
  {
    id: 'ORD-005',
    product: 'Treadmill',
    customer: 'Nuwan Gamage',
    description: 'Belt slipping during use',
    status: 'pending'
  },
  {
    id: 'ORD-006',
    product: 'Treadmill',
    customer: 'Senu Abeyesekara',
    description: 'Belt slipping during use',
    status: 'pending'
  }
];

export default function RepairManagement() {
  const [repairRequests, setRepairRequests] = useState<RepairRequest[]>(initialRepairRequests);
  const [selectedRequest, setSelectedRequest] = useState<string | null>(null);
  const [selectedEmployee, setSelectedEmployee] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAssignEmployee = (requestId: string) => {
    setSelectedRequest(requestId);
    setSelectedEmployee(null);
    setIsModalOpen(true);
  };

  const handleEmployeeSelect = (employeeName: string) => {
    setSelectedEmployee(employeeName);
  };

  const confirmAssignment = () => {
    if (selectedRequest && selectedEmployee) {
      setRepairRequests(prev =>
        prev.map(request =>
          request.id === selectedRequest
            ? { ...request, assignedEmployee: selectedEmployee, status: 'assigned' as const }
            : request
        )
      );
      setIsModalOpen(false);
      setSelectedRequest(null);
      setSelectedEmployee(null);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRequest(null);
    setSelectedEmployee(null);
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-2xl font-bold text-[#1C398E] mb-4">Repair Management</h1>
        <p className="text-black text-sm">
          Monitor and manage all customer repair and maintenance requests. Assign tasks, track progress, and ensure timely service completion.
        </p>
      </div>

      {/* Repair Requests Section */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-[#1C398E]">Repair Requests</h2>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-100 shadow-sm">
              <tr>
                <th className="px-6 py-3 text-left text-md font-bold text-black   border-r border-gray-200 shadow-sm">
                  Request ID
                </th>
                <th className="px-6 py-3 text-left text-md font-bold text-black   border-r border-gray-200 shadow-sm">
                  Product
                </th>
                <th className="px-6 py-3 text-left text-md font-bold text-black   border-r border-gray-200 shadow-sm">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-md font-bold text-black   border-r border-gray-200 shadow-sm">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-md font-bold text-black  ">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {repairRequests.map((request) => (
                <tr key={request.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {request.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {request.product}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {request.customer}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {request.description}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {request.assignedEmployee ? (
                      <div className="flex items-center space-x-2">
                        <span className="px-3 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">
                          Assigned to {request.assignedEmployee}
                        </span>
                      </div>
                    ) : (
                      <button
                        onClick={() => handleAssignEmployee(request.id)}
                        className="px-4 py-2 bg-[#DBEAFE] text-black text-sm rounded hover:bg-blue-400 transition-colors"
                      >
                        Assign Employee
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal for Employee Selection */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-50 bg-opacity-20 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4">
            <div className="p-6 ">
              <h3 className="text-lg font-semibold text-gray-800">Select Employee</h3>
              <p className="text-sm text-gray-600 mt-1">
                Choose an employee to assign to this repair request
              </p>
            </div>
            <div className="p-6 max-h-96 overflow-y-auto">
              <div className="space-y-2">
                {employees.map((employee) => (
                  <button
                    key={employee}
                    onClick={() => handleEmployeeSelect(employee)}
                    className={`w-full px-4 py-3 text-left border rounded-lg transition-colors ${
                      selectedEmployee === employee
                        ? 'bg-blue-50 border-blue-400 ring-2 ring-blue-200'
                        : 'border-gray-200 hover:bg-blue-50 hover:border-blue-300'
                    }`}
                  >
                    <span className="text-gray-800">{employee}</span>
                  </button>
                ))}
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
                onClick={confirmAssignment}
                disabled={!selectedEmployee}
                className={`px-4 py-2 rounded transition-colors ${
                  selectedEmployee
                    ? 'bg-blue-500 text-white hover:bg-blue-600'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}