'use client';

import { useState } from 'react';

interface Task {
  id: string;
  product: string;
  customer: string;
  description: string;
  action: string;
  status: 'pending' | 'completed';
}

const initialTasks: Task[] = [
  {
    id: 'RE-001',
    product: 'Treadmill',
    customer: 'Malsha Abeysekara',
    description: 'Belt slipping during use',
    action: 'Mark as Completed',
    status: 'pending',
  },
  {
    id: 'RE-002',
    product: 'Stationary Bike',
    customer: 'Sachini Weerasinghe',
    description: 'Resistance knob not working',
    action: 'Mark as Completed',
    status: 'pending',
  },
  {
    id: 'RE-003',
    product: 'Rowing Machine',
    customer: 'Nayana Perera',
    description: 'Display screen not turning on',
    action: 'Mark as Completed',
    status: 'pending',
  },
  {
    id: 'RE-004',
    product: 'Bench Press',
    customer: 'Malsha Abeysekara',
    description: 'Seat cushion torn',
    action: 'Mark as Completed',
    status: 'pending',
  },
  {
    id: 'RE-005',
    product: 'Treadmill',
    customer: 'Haritha Induwara',
    description: 'Belt slipping during use',
    action: 'Completed',
    status: 'completed',
  },
  {
    id: 'RE-006',
    product: 'Treadmill',
    customer: 'Sehan Nethmina',
    description: 'Belt slipping during use',
    action: 'Completed',
    status: 'completed',
  },
];

export default function MaintenanceTasks() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleToggleStatus = (taskId: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              status: task.status === 'pending' ? 'completed' : 'pending',
              action:
                task.status === 'pending' ? 'Completed' : 'Mark as Completed',
            }
          : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch =
      task.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.product.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.customer.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFilter =
      filterStatus === 'all' || task.status === filterStatus;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="p-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-blue-900 mb-2">
          My Assigned Repair Tasks
        </h1>
        <p className="text-gray-600">
          View and manage all repair tasks assigned to you — track progress,
          update task status, and ensure timely completion.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="mb-10 flex gap-4">
        <div className="relative flex-1">
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
            placeholder="Search orders"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-[#1C398E] rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent placeholder:text-[#1C398E]"
          />
        </div>

        <div className="relative">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center gap-2 px-4 py-3 border border-[#1C398E] rounded-lg hover:bg-blue-100 transition-colors"
          >
            <svg
              className="w-5 h-5 text-[#1C398E]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
              />
            </svg>
            <span className="text-gray-700">Filter</span>
          </button>

          {isFilterOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
              <div className="p-2">
                <button
                  onClick={() => {
                    setFilterStatus('all');
                    setIsFilterOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 rounded hover:bg-gray-100 ${
                    filterStatus === 'all' ? 'bg-blue-50 text-blue-700' : ''
                  }`}
                >
                  All Tasks
                </button>
                <button
                  onClick={() => {
                    setFilterStatus('pending');
                    setIsFilterOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 rounded hover:bg-gray-100 ${
                    filterStatus === 'pending' ? 'bg-blue-50 text-blue-700' : ''
                  }`}
                >
                  Pending
                </button>
                <button
                  onClick={() => {
                    setFilterStatus('completed');
                    setIsFilterOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 rounded hover:bg-gray-100 ${
                    filterStatus === 'completed'
                      ? 'bg-blue-50 text-blue-700'
                      : ''
                  }`}
                >
                  Completed
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Tasks Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800">Manage Tasks</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                  Request ID
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                  Product
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredTasks.map((task) => (
                <tr
                  key={task.id}
                  className="border-b border-gray-200 hover:bg-gray-50"
                >
                  <td className="px-6 py-4 text-sm text-gray-800">{task.id}</td>
                  <td className="px-6 py-4 text-sm text-gray-800">
                    {task.product}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800">
                    {task.customer}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {task.description}
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleToggleStatus(task.id)}
                      className={`inline-block px-4 py-1.5 rounded text-sm font-medium transition-colors ${
                        task.status === 'completed'
                          ? 'bg-green-100 text-green-800 hover:bg-green-200'
                          : 'bg-blue-600 text-white hover:bg-blue-700'
                      }`}
                    >
                      {task.action}
                    </button>
                  </td>
                </tr>
              ))}
              {filteredTasks.length === 0 && (
                <tr>
                  <td
                    colSpan={5}
                    className="px-6 py-8 text-center text-gray-500"
                  >
                    No tasks found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
