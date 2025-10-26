'use client';
import { useState } from 'react';

interface Delivery {
  id: string;
  orderId: string;
  product: string;
  deliveryPerson: string;
  contactNo: string;
  status: 'Shipped' | 'Pending' | 'Delivered';
  deliveryDate: string;
}

// Mock data for deliveries
const initialDeliveries: Delivery[] = [
  {
    id: '1',
    orderId: 'ORD-001',
    product: 'Yoga Mat',
    deliveryPerson: 'Malsha Abeyesekara',
    contactNo: '077 123 4567',
    status: 'Shipped',
    deliveryDate: '2025-10-23',
  },
  {
    id: '2',
    orderId: 'ORD-002',
    product: 'Dumbbell Set (10kg)',
    deliveryPerson: 'Sachini Weerasinghe',
    contactNo: '070 234 0567',
    status: 'Pending',
    deliveryDate: '2025-10-29',
  },
  {
    id: '3',
    orderId: 'ORD-003',
    product: 'Yoga Mat',
    deliveryPerson: 'Kavindu Perera',
    contactNo: '071 223 4754',
    status: 'Shipped',
    deliveryDate: '2025-10-23',
  },
  {
    id: '4',
    orderId: 'ORD-004',
    product: 'Dumbbell Set (10kg)',
    deliveryPerson: 'Malsha Abeyesekara',
    contactNo: '077 123 4567',
    status: 'Pending',
    deliveryDate: '2025-10-29',
  },
  {
    id: '5',
    orderId: 'ORD-005',
    product: 'Yoga Mat',
    deliveryPerson: 'Nayana Perera',
    contactNo: '077 856 4678',
    status: 'Shipped',
    deliveryDate: '2025-10-23',
  },
  {
    id: '6',
    orderId: 'ORD-006',
    product: 'Yoga Mat',
    deliveryPerson: 'Naveen Abeysinghe',
    contactNo: '076 892 5670',
    status: 'Delivered',
    deliveryDate: '2025-07-12',
  },
  {
    id: '7',
    orderId: 'ORD-007',
    product: 'Dumbbell Set (10kg)',
    deliveryPerson: 'Haritha Induwara',
    contactNo: '071 983 4734',
    status: 'Shipped',
    deliveryDate: '2025-10-23',
  },
  {
    id: '8',
    orderId: 'ORD-008',
    product: 'Yoga Mat',
    deliveryPerson: 'Sehan Nethmina',
    contactNo: '077 987 1567',
    status: 'Delivered',
    deliveryDate: '2025-09-01',
  },
];

export default function DeliveryOverview() {
  const deliveries: Delivery[] = initialDeliveries;
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Calculate statistics
  const totalDeliveries = deliveries.length;
  const inShippingCount = deliveries.filter(
    (d) => d.status === 'Shipped'
  ).length;
  const completedCount = deliveries.filter(
    (d) => d.status === 'Delivered'
  ).length;

  // Filter deliveries based on search and filter
  const filteredDeliveries = deliveries.filter((delivery) => {
    const matchesSearch =
      delivery.orderId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      delivery.product.toLowerCase().includes(searchQuery.toLowerCase()) ||
      delivery.deliveryPerson.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFilter =
      filterStatus === 'all' || delivery.status === filterStatus;

    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Shipped':
        return 'bg-[#DBEAFE] text-black';
      case 'Pending':
        return 'bg-[#FEF3C7] text-black';
      case 'Delivered':
        return 'bg-[#D1FAE5] text-black';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-8 -mt-10">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-2xl font-bold text-[#1C398E] mb-4">
          Delivery Overview
        </h1>
        <p className="text-black text-sm">
          Stay updated on all deliveries — track orders, view statuses, and
          reassign tasks as needed.
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-3 gap-20 mb-12">
        <div className="bg-white shadow-sm rounded-lg p-6">
          <div className="flex gap-6">
            <div className="text-4xl font-bold text-[#1C398E] mb-2 bg-blue-100 px-4 py-2">
              {totalDeliveries}
            </div>
            <div className="text-lg font-bold text-blue-900 mt-4">
              Total Deliveries
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex gap-6">
            <div className="text-4xl font-bold text-[#1C398E] mb-2 bg-blue-100 px-4 py-2">
              {inShippingCount}
            </div>
            <div className="text-lg font-bold text-blue-900 mt-4">
              In Shipping
            </div>
          </div>
        </div>
        <div className="bg-white shadow-sm rounded-lg p-6">
          <div className="flex gap-6">
            <div className="text-4xl font-bold text-[#1C398E] mb-2 bg-blue-100 px-4 py-2">
              {completedCount}
            </div>
            <div className="text-lg font-bold text-blue-900 mt-4">
              Completed Orders
            </div>
          </div>
        </div>
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
                    setFilterStatus('Pending');
                    setIsFilterOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 rounded hover:bg-gray-100 ${
                    filterStatus === 'Pending' ? 'bg-blue-50 text-blue-700' : ''
                  }`}
                >
                  Pending
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

      {/* Table */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-md font-bold text-black border-r border-gray-200 shadow-sm">
                  Order ID
                </th>
                <th className="px-6 py-3 text-left text-md font-bold text-black border-r border-gray-200 shadow-sm">
                  Product
                </th>
                <th className="px-6 py-3 text-left text-md font-bold text-black border-r border-gray-200 shadow-sm">
                  Delivery Person
                </th>
                <th className="px-6 py-3 text-left text-md font-bold text-black border-r border-gray-200 shadow-sm">
                  Contact No
                </th>
                <th className="px-6 py-3 text-left text-md font-bold text-black border-r border-gray-200 shadow-sm">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-md font-bold text-black">
                  Delivery Date
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredDeliveries.map((delivery) => (
                <tr key={delivery.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {delivery.orderId}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {delivery.product}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {delivery.deliveryPerson}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {delivery.contactNo}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span
                      className={`px-3 py-1 rounded text-sm font-medium ${getStatusColor(
                        delivery.status
                      )}`}
                    >
                      {delivery.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {delivery.deliveryDate}
                  </td>
                </tr>
              ))}
              {filteredDeliveries.length === 0 && (
                <tr>
                  <td
                    colSpan={6}
                    className="px-6 py-8 text-center text-gray-500"
                  >
                    No deliveries found
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
