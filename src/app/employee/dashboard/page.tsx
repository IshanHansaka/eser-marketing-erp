import { Truck, Package, Wrench, Star, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Dashboard() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-blue-900 mb-2">
          Employee Dashboard
        </h1>
        <p className="text-gray-600">Welcome back</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Truck className="text-blue-600" size={24} />
            </div>
            <div>
              <p className="text-gray-600 text-sm">Completed Deliveries</p>
              <p className="text-3xl font-bold text-blue-900">125</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Package className="text-blue-600" size={24} />
            </div>
            <div>
              <p className="text-gray-600 text-sm">Upcoming Orders</p>
              <p className="text-3xl font-bold text-blue-900">7</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Wrench className="text-blue-600" size={24} />
            </div>
            <div>
              <p className="text-gray-600 text-sm">Maintenance Requests</p>
              <p className="text-3xl font-bold text-blue-900">4</p>
            </div>
          </div>
        </div>
      </div>

      {/* Points Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Good Job! You have earned new points
        </h2>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
            <Star className="text-white fill-white" size={24} />
          </div>
          <div className="flex-1 bg-gray-300 rounded-full h-12 overflow-hidden">
            <div
              className="bg-blue-600 h-full rounded-full flex items-center justify-center text-white font-semibold"
              style={{ width: '90%' }}
            >
              4.7 / 5.0
            </div>
          </div>
        </div>
      </div>

      {/* Assigned Orders Card */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Assigned Orders
            </h3>
            <p className="text-gray-600 mb-6">
              You have 3 new orders assigned today.
            </p>
            <button className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
              View Orders
              <ArrowRight size={18} />
            </button>
          </div>
          <Image
            src="/images/order-1.png"
            alt="Delivery"
            width={256}
            height={160}
          />
        </div>
      </div>

      {/* Pending Repairs Card */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Pending Repairs
            </h3>
            <p className="text-gray-600 mb-6">
              2 repairs are currently pending your attention.
            </p>
            <button className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
              View Repairs
              <ArrowRight size={18} />
            </button>
          </div>
          <Image
            src="/images/order-2.png"
            alt="Repairs"
            width={256}
            height={160}
          />
        </div>
      </div>
    </div>
  );
}
