import { Search, SlidersHorizontal } from "lucide-react";

export default function MaintenanceTasks() {
  const tasks = [
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
      <div className="flex gap-4 mb-6">
        <div className="flex-1 relative">
          <Search
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Search orders"
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
          <SlidersHorizontal size={20} />
          Filter
        </button>
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
              {tasks.map((task) => (
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
                    <span
                      className={`inline-block px-4 py-1.5 rounded text-sm font-medium ${
                        task.status === 'completed'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}
                    >
                      {task.action}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
