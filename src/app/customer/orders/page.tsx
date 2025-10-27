"use client";

import React, { useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';

export default function Page() {
  const [activeTab, setActiveTab] = useState('All');

  const orders = [
    {
      orderId: 'ORD-001',
      product: 'Yoga Mat',
      deliveryPerson: 'Malsha Abeynkara',
      contactNo: '077 123 4567',
      status: 'Shipped',
      deliveryDate: '2025-10-23'
    },
    {
      orderId: 'ORD-002',
      product: 'Dumbbell Set (10kg)',
      deliveryPerson: 'Sachini Weerasinghe',
      contactNo: '070 234 0567',
      status: 'Pending',
      deliveryDate: '2025-10-29'
    },
    {
      orderId: 'ORD-003',
      product: 'Yoga Mat',
      deliveryPerson: 'Kavindu Perera',
      contactNo: '071 223 4754',
      status: 'Shipped',
      deliveryDate: '2025-10-23'
    },
    {
      orderId: 'ORD-004',
      product: 'Dumbbell Set (10kg)',
      deliveryPerson: 'Malsha Abeynkara',
      contactNo: '077 123 4567',
      status: 'Pending',
      deliveryDate: '2025-10-29'
    },
    {
      orderId: 'ORD-005',
      product: 'Yoga Mat',
      deliveryPerson: 'Nayana Perera',
      contactNo: '077 356 4678',
      status: 'Shipped',
      deliveryDate: '2025-10-22'
    },
    {
      orderId: 'ORD-006',
      product: 'Yoga Mat',
      deliveryPerson: 'Naveen Abeyginghe',
      contactNo: '076 892 5678',
      status: 'Delivered',
      deliveryDate: '2025-07-12'
    },
    {
      orderId: 'ORD-007',
      product: 'Dumbbell Set (10kg)',
      deliveryPerson: 'Harsha Induwara',
      contactNo: '071 983 4734',
      status: 'Shipped',
      deliveryDate: '2025-10-21'
    },
    {
      orderId: 'ORD-008',
      product: 'Yoga Mat',
      deliveryPerson: 'Sahan Narmina',
      contactNo: '077 987 1567',
      status: 'Delivered',
      deliveryDate: '2025-09-01'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Delivered':
        return 'bg-green-100 text-green-800';
      case 'Shipped':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredOrders = orders.filter(order => {
    if (activeTab === 'All') return true;
    return order.status === activeTab;
  });

  const tabs = ['All', 'Delivered', 'Shipped', 'Pending'];

  return (
    <div className="max-w-7xl">
      {/* Header Section */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-blue-900 mb-2">My Orders</h1>
        <p className="text-base text-black font-medium">
          Keep track of your purchases, check order statuses, and view product or delivery information anytime.
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="flex gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
          <input
            type="text"
            placeholder="Search orders"
            className="w-full pl-12 pr-4 py-5 border border-[#163172] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
          />
        </div>
        <button className="px-6 py-3 border border-[#163172] rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2 text-base text-gray-700">
          <SlidersHorizontal className="w-6 h-6" />
          Filter
        </button>
      </div>

      {/* Tabs */}
      <div className="flex w-full gap-20 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 px-6 py-2.5 rounded-lg text-base font-medium text-center transition-colors ${
              activeTab === tab
                ? 'bg-[#163172] text-white'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden w-full">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 text-left text-base font-semibold text-gray-700">Order ID</th>
              <th className="px-6 py-4 text-left text-base font-semibold text-gray-700">Product</th>
              <th className="px-6 py-4 text-left text-base font-semibold text-gray-700">Delivery Person</th>
              <th className="px-6 py-4 text-left text-base font-semibold text-gray-700">Contact No</th>
              <th className="px-6 py-4 text-left text-base font-semibold text-gray-700">Status</th>
              <th className="px-6 py-4 text-left text-base font-semibold text-gray-700">Delivery Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredOrders.map((order) => (
              <tr key={order.orderId} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-base text-gray-900">{order.orderId}</td>
                <td className="px-6 py-4 text-base text-gray-900">{order.product}</td>
                <td className="px-6 py-4 text-base text-gray-900">{order.deliveryPerson}</td>
                <td className="px-6 py-4 text-base text-gray-600">{order.contactNo}</td>
                <td className="px-6 py-4">
                  <span className={`inline-block px-4 py-1.5 rounded-md text-base font-medium ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-base text-gray-600">{order.deliveryDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
