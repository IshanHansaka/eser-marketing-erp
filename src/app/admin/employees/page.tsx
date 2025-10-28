'use client';
import { useState } from 'react';

interface Employee {
  id: string;
  name: string;
  email: string;
  phone: string;
  rewardPoints: number;
  isActive: boolean;
}

// Mock data for employees
const initialEmployees: Employee[] = [
  {
    id: '1',
    name: 'Alex Doe',
    email: 'alexdoe@gmail.com',
    phone: '070 345 6090',
    rewardPoints: 20,
    isActive: true,
  },
  {
    id: '2',
    name: 'Sachini Weerasinghe',
    email: 'sachini@gmail.com',
    phone: '070 234 0567',
    rewardPoints: 25,
    isActive: true,
  },
  {
    id: '3',
    name: 'Kavindu Perera',
    email: 'kavinuperera@gmail.com',
    phone: '071 223 4754',
    rewardPoints: 18,
    isActive: true,
  },
  {
    id: '4',
    name: 'Naveen Abeysinghe',
    email: 'naveenabey@gmail.com',
    phone: '076 892 5670',
    rewardPoints: 30,
    isActive: true,
  },
  {
    id: '5',
    name: 'Haritha Induwara',
    email: 'harithaind@gmail.com',
    phone: '071 983 4734',
    rewardPoints: 14,
    isActive: true,
  },
  {
    id: '6',
    name: 'Sehan Nethmina',
    email: 'sehan@gmail.com',
    phone: '077 987 1567',
    rewardPoints: 28,
    isActive: true,
  },
];

export default function EmployeeManagement() {
  const [employees, setEmployees] = useState<Employee[]>(initialEmployees);
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(
    null
  );
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newEmployee, setNewEmployee] = useState({
    name: '',
    email: '',
    phone: '',
    rewardPoints: 0,
  });

  // Filter employees based on search query
  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDeactivate = (employee: Employee) => {
    setSelectedEmployee(employee);
    setIsModalOpen(true);
  };

  const confirmDeactivate = () => {
    if (selectedEmployee) {
      setEmployees((prev) =>
        prev.map((employee) =>
          employee.id === selectedEmployee.id
            ? { ...employee, isActive: false }
            : employee
        )
      );
      setIsModalOpen(false);
      setSelectedEmployee(null);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEmployee(null);
  };

  const openAddModal = () => {
    setIsAddModalOpen(true);
    setNewEmployee({
      name: '',
      email: '',
      phone: '',
      rewardPoints: 0,
    });
  };

  const closeAddModal = () => {
    setIsAddModalOpen(false);
    setNewEmployee({
      name: '',
      email: '',
      phone: '',
      rewardPoints: 0,
    });
  };

  const handleAddEmployee = () => {
    if (newEmployee.name && newEmployee.email && newEmployee.phone) {
      const employee: Employee = {
        id: (employees.length + 1).toString(),
        name: newEmployee.name,
        email: newEmployee.email,
        phone: newEmployee.phone,
        rewardPoints: newEmployee.rewardPoints,
        isActive: true,
      };
      setEmployees((prev) => [...prev, employee]);
      closeAddModal();
    }
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-6 flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-[#1C398E] mb-4">
            Employee Management
          </h1>
          <p className="text-black text-sm">
            Manage all registered employees — view profiles, monitor activity,
            and maintain accurate employee records.
          </p>
        </div>
        <button
          onClick={openAddModal}
          className="flex items-center gap-2 px-4 py-2 bg-[#1E56A0] text-white rounded hover:bg-[#1C398E] transition-colors mt-5"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
          Add Employee
        </button>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg
              className="h-5 w-5 text-[#1C398E]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search Employee by Name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-[#1C398E] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent placeholder:text-[#1C398E]"
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-100 shadow-sm">
              <tr>
                <th className="px-6 py-3 text-left text-md font-bold text-black border-r border-gray-200 shadow-sm">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-md font-bold text-black border-r border-gray-200 shadow-sm">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-md font-bold text-black border-r border-gray-200 shadow-sm">
                  Phone
                </th>
                <th className="px-6 py-3 text-left text-md font-bold text-black border-r border-gray-200 shadow-sm">
                  Reward Points
                </th>
                <th className="px-6 py-3 text-left text-md font-bold text-black">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredEmployees.map((employee) => (
                <tr key={employee.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {employee.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {employee.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {employee.phone}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {employee.rewardPoints}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {employee.isActive ? (
                      <button
                        onClick={() => handleDeactivate(employee)}
                        className="px-4 py-2 bg-[#FEE2E2] text-black text-sm rounded hover:bg-red-300 transition-colors"
                      >
                        Deactivate
                      </button>
                    ) : (
                      <span className="px-4 py-2 bg-gray-200 text-gray-600 text-sm rounded">
                        Deactivated
                      </span>
                    )}
                  </td>
                </tr>
              ))}
              {filteredEmployees.length === 0 && (
                <tr>
                  <td
                    colSpan={5}
                    className="px-6 py-8 text-center text-gray-500"
                  >
                    No employees found matching &quot;{searchQuery}&quot;
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Deactivate Confirmation Modal */}
      {isModalOpen && selectedEmployee && (
        <div className="fixed inset-0 bg-gray-50 bg-opacity-20 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800">
                Confirm Deactivation
              </h3>
              <p className="text-sm text-gray-600 mt-3">
                Are you sure you want to deactivate{' '}
                <span className="font-semibold">{selectedEmployee.name}</span>?
              </p>
              <p className="text-sm text-gray-500 mt-2">
                This employee will no longer be able to access their account.
              </p>
            </div>
            <div className="p-6 flex justify-end gap-3">
              <button
                onClick={closeModal}
                className="px-4 py-2 text-gray-700 bg-gray-100 rounded hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={confirmDeactivate}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
              >
                Deactivate
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Employee Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 bg-gray-50 bg-opacity-20 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800">
                Add New Employee
              </h3>
              <p className="text-sm text-gray-600 mt-1 mb-4">
                Fill in the details to add a new employee
              </p>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    value={newEmployee.name}
                    onChange={(e) =>
                      setNewEmployee({ ...newEmployee, name: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter employee name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    value={newEmployee.email}
                    onChange={(e) =>
                      setNewEmployee({ ...newEmployee, email: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter email address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="text"
                    value={newEmployee.phone}
                    onChange={(e) =>
                      setNewEmployee({ ...newEmployee, phone: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Reward Points
                  </label>
                  <input
                    type="number"
                    value={newEmployee.rewardPoints}
                    onChange={(e) =>
                      setNewEmployee({
                        ...newEmployee,
                        rewardPoints: parseInt(e.target.value) || 0,
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter reward points"
                  />
                </div>
              </div>
            </div>

            <div className="p-6 flex justify-end gap-3">
              <button
                onClick={closeAddModal}
                className="px-4 py-2 text-gray-700 bg-gray-100 rounded hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleAddEmployee}
                disabled={
                  !newEmployee.name || !newEmployee.email || !newEmployee.phone
                }
                className={`px-4 py-2 rounded transition-colors ${
                  newEmployee.name && newEmployee.email && newEmployee.phone
                    ? 'bg-[#1C398E] text-white hover:bg-blue-800'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Add Employee
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
