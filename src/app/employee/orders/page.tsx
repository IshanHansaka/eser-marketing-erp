import { Search, SlidersHorizontal } from "lucide-react";

export default function Orders() {
  const orders = [
    {
      id: 'ORD-001',
      customer: 'Malsha Abeysekara',
      address: '88 Beach Road, Negombo',
      product: 'Yoga Mat',
      status: 'Shipped',
      date: '2025-10-29',
    },
    {
      id: 'ORD-002',
      customer: 'Sachini Weerasinghe',
      address: '9 Hilltop Lane, Nuwara Eliya',
      product: 'Dumbbell Set (10kg)',
      status: 'Delivered',
      date: '2025-09-29',
    },
    {
      id: 'ORD-003',
      customer: 'Kavindu Perera',
      address: '17 Park Lane, Colombo',
      product: 'Yoga Mat',
      status: 'Shipped',
      date: '2025-10-29',
    },
    {
      id: 'ORD-004',
      customer: 'Malsha Abeysekara',
      address: '88 Beach Road, Negombo',
      product: 'Yoga Mat',
      status: 'Approved',
      date: '2025-10-29',
    },
    {
      id: 'ORD-005',
      customer: 'Malsha Abeysekara',
      address: '88 Beach Road, Negombo',
      product: 'Yoga Mat',
      status: 'Shipped',
      date: '2025-10-29',
    },
    {
      id: 'ORD-006',
      customer: 'Malsha Abeysekara',
      address: '88 Beach Road, Negombo',
      product: 'Yoga Mat',
      status: 'Delivered',
      date: '2025-08-22',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Shipped':
        return 'bg-blue-100 text-blue-800';
      case 'Delivered':
        return 'bg-green-100 text-green-800';
      case 'Approved':
        return 'bg-green-200 text-green-900';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-blue-900 mb-2">
          My Assigned Orders
        </h1>
        <p className="text-gray-600">
          View and manage all customer orders assigned to you. Update delivery
          status and ensure timely completion.
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

      {/* Orders Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800">Order Details</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                  Order ID
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                  Customer Name
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                  Address
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                  Product
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                  Delivery Date
                </th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr
                  key={order.id}
                  className="border-b border-gray-200 hover:bg-gray-50"
                >
                  <td className="px-6 py-4 text-sm text-gray-800">
                    {order.id}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800">
                    {order.customer}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {order.address}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800">
                    {order.product}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                        order.status
                      )}`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {order.date}
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
