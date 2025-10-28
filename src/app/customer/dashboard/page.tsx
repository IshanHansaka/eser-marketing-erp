import React from 'react';
import { Package, ShoppingCart, Wrench, TrendingUp, Award, Gift, MapPin, Clock, Lightbulb, Truck, Info, CircleCheck } from 'lucide-react';
import StatCard from '@/components/UI/StatCard';

const CustomerDashboard: React.FC = () => {
  const recentOrders = [
    { id: '#ORD-2847', status: 'Delivered', item: 'RDL', date: 'Oct 20, 2025', amount: 'Rs 20,000' },
    { id: '#ORD-2846', status: 'Shipped', item: 'Barbell Curl', date: 'Oct 18, 2025', amount: 'Rs 20,000' },
    { id: '#ORD-2845', status: 'Processing', item: 'Dumbells', date: 'Oct 15, 2025', amount: 'Rs 20,000' },
    { id: '#ORD-2844', status: 'Delivered', item: 'Treadmill', date: 'Oct 10, 2025', amount: 'Rs 20,000' },
  ];

  const deliveries = [
    { id: '#ORD-2846', status: 'Out for delivery', progress: 75, location: '5 miles away', time: 'Today, 2:00 PM' },
    { id: '#ORD-2845', status: 'In transit', progress: 50, location: 'Distribution center', time: 'Tomorrow' },
  ];

  const maintenanceRequests = [
    { id: '#MNT-142', title: 'Treadmill Service Request', status: 'Scheduled: Oct 28', isActive: true },
    { id: '#MNT-141', title: 'Leg Extension Service Request', status: 'Completed: Oct 15', isActive: false },
  ];

  const getStatusColor = (status: string): string => {
    const colors: Record<string, string> = {
      Delivered: 'bg-[#DBEAFE] text-[#1447E6]',
      Shipped: 'bg-[#CEFAFE] text-[#007595]',
      Processing: 'bg-[#DFF2FE] text-[#0069A8]',
    };
    return colors[status] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="bg-gray-50 min-h-screen pl-12 pr-12">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#1C398E]">
          Customer Dashboard
        </h1>
        <p className="text-[#45556C] mt-1">Welcome back</p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard icon={ShoppingCart} label="Total Orders" value="48" color="gray" />
        <StatCard icon={Truck} label="Active Deliveries" value="20" color="blue" />
        <StatCard icon={Wrench} label="Maintenance Requests" value="05" color="orange" />
      </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent Orders */}
            <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-200 p-6">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                  <Package size={24} className="text-[#1447E6]" />
                </div>
                <h2 className="text-lg font-semibold">Recent Orders</h2>
              </div>
              
              <div className="space-y-3">
                {recentOrders.map((order, index) => (
                  <div key={index} className="bg-[#EFF6FF] border border-[#DBEAFE] rounded-2xl p-6 flex justify-between items-center">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-[#1447E6] font-medium">{order.id}</span>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(order.status)}`}>
                          {order.status}
                        </span>
                      </div>
                      <p className="text-gray-900 font-medium">{order.item}</p>
                      <p className="text-gray-500 text-sm flex items-center gap-1 mt-1">
                        <Clock size={16}/> {order.date}
                      </p>
                    </div>
                    <p className="text-[#1447E6] font-medium text-[1.1rem]">{order.amount}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Loyalty Points */}
            <div className="bg-linear-to-br from-[#1447E6] to-[#0360D9] rounded-2xl p-6 text-white">
              <div className="flex items-center gap-2 mb-12">
                <Award size={20} />
                <h2 className="text-lg font-medium">Loyalty Points</h2>
              </div>
              
              <div className="text-center mb-12">
                <p className="text-5xl font-medium mb-2">2,450</p>
                <p className="text-blue-100">Total Points</p>
              </div>

              <div className="bg-blue-500/30 rounded-lg p-6 mb-12">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-normal">Next Reward</span>
                  <span className="text-sm font-medium">550 points away</span>
                </div>
                <div className="w-full bg-blue-800/50 rounded-full h-2">
                  <div className="bg-white rounded-full h-2" style={{ width: '80%' }}></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-12">
                <div>
                  <div className="flex items-center gap-2 text-blue-100 text-sm mb-1">
                    <TrendingUp size={16} />
                    <span>This month</span>
                  </div>
                  <p className="text-2xl font-bold">+350</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-blue-100 text-sm mb-1">
                    <Gift size={16} />
                    <span>Rewards earned</span>
                  </div>
                  <p className="text-2xl font-bold">5</p>
                </div>
              </div>

              <button className="w-full bg-white text-[#1447E6] font-semibold py-2 rounded-lg hover:bg-blue-50 transition-colors">
                Redeem Points
              </button>
            </div>
          </div>

          {/* Delivery Status & Maintenance */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            {/* Delivery Status */}
            <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-200 p-6">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                  <Truck size={24} className="text-[#1447E6]" />
                </div>
                <h2 className="text-lg font-semibold">Delivery Status</h2>
              </div>
              
              <div className="space-y-3">
                {deliveries.map((delivery, index) => (
                  <div key={index} className="bg-[#EFF6FF] border border-[#DBEAFE] rounded-2xl p-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-[#1447E6] font-medium">{delivery.id}</span>
                      <span className="text-gray-600 text-sm">{delivery.time}</span>
                    </div>
                    <p className="text-gray-900 font-medium mb-3">{delivery.status}</p>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                      <div 
                        className="bg-[#1447E6] rounded-full h-2" 
                        style={{ width: `${delivery.progress}%` }}
                      ></div>
                    </div>
                    <p className="text-gray-500 text-sm flex items-center gap-1">
                      <MapPin size={16}/> {delivery.location}
                    </p>
                  </div>
                ))}
                
                <div className="bg-[#EFF6FF] border border-[#DBEAFE] rounded-2xl p-6 flex items-center gap-3 mt-3">
                  <CircleCheck size={24} className="text-[#1447E6]" />
                  <span className="text-[#1447E6] font-medium">2 deliveries completed this month</span>
                </div>
              </div>
            </div>

            {/* Maintenance */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Wrench size={20} className="text-[#1447E6]" />
                  <h2 className="text-lg font-semibold">Maintenance</h2>
                </div>
              </div>
              
              <button className="w-full bg-[#1447E6] text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition-colors mb-6 flex items-center justify-center gap-2">
                <span>+</span> New Maintenance Request
              </button>

              <div className="space-y-4 mb-6">
                {maintenanceRequests.map((request, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-[#1447E6] font-semibold">{request.id}</span>
                      {request.isActive && (
                        <Info size={16} className="text-blue-500"/>
                      )}
                    </div>
                    <p className="text-gray-900 font-medium mb-2">{request.title}</p>
                    <p className="text-gray-500 text-sm flex items-center gap-1">
                      <Clock size={16}/> {request.status}
                    </p>
                  </div>
                ))}
              </div>

              <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-4">
                <p className="text-cyan-800 text-sm flex items-center gap-2">
                  <Lightbulb size={24}/> Regular maintenance ensures optimal equipment performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    };

    export default CustomerDashboard;