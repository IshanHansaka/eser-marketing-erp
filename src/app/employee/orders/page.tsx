'use client';

import { useState } from 'react';

interface Order {
  id: string;
  customer: string;
  address: string;
  product: string;
  status: 'Shipped' | 'Approved' | 'Delivered';
  date: string;
}

const orders: Order[] = [
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

export default function Orders() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

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

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.product.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.product.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFilter =
      filterStatus === 'all' || order.status === filterStatus;

    return matchesSearch && matchesFilter;
  });

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
                  All Status
                </button>
                <button
                  onClick={() => {
                    setFilterStatus('Shipped');
                    setIsFilterOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 rounded hover:bg-gray-100 ${
                    filterStatus === 'Shipped' ? 'bg-blue-50 text-blue-700' : ''
                  }`}
                >
                  Shipped
                </button>
                <button
                  onClick={() => {
                    setFilterStatus('Approved');
                    setIsFilterOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 rounded hover:bg-gray-100 ${
                    filterStatus === 'Approved'
                      ? 'bg-blue-50 text-blue-700'
                      : ''
                  }`}
                >
                  Approved
                </button>
                <button
                  onClick={() => {
                    setFilterStatus('Delivered');
                    setIsFilterOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 rounded hover:bg-gray-100 ${
                    filterStatus === 'Delivered'
                      ? 'bg-blue-50 text-blue-700'
                      : ''
                  }`}
                >
                  Delivered
                </button>
              </div>
            </div>
          )}
        </div>
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
              {filteredOrders.map((order) => (
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
              {filteredOrders.length === 0 && (
                <tr>
                  <td
                    colSpan={6}
                    className="px-6 py-8 text-center text-gray-500"
                  >
                    No orders found
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
