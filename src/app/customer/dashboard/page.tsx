import React from 'react';
import { Package, ShoppingCart, Wrench, TrendingUp, Gift } from 'lucide-react';

// Types
interface StatCardProps {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  value: string;
  color?: 'gray' | 'blue' | 'orange';
}

// Stat Card Component
const StatCard: React.FC<StatCardProps> = ({ icon: Icon, label, value, color = 'gray' }) => {
  const colorClasses: Record<string, string> = {
    gray: 'bg-gray-50 text-gray-900',
    blue: 'bg-blue-50 text-blue-600',
    orange: 'bg-orange-50 text-orange-600',
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center gap-4">
        <div className={`w-12 h-12 rounded-lg ${colorClasses[color]} flex items-center justify-center`}>
          <Icon size={24} />
        </div>
        <div>
          <p className="text-gray-600 text-sm">{label}</p>
          <p className="text-3xl font-bold text-blue-600">{value}</p>
        </div>
      </div>
    </div>
  );
};

// Main Dashboard Component
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
      Delivered: 'bg-green-100 text-green-700',
      Shipped: 'bg-blue-100 text-blue-700',
      Processing: 'bg-yellow-100 text-yellow-700',
    };
    return colors[status] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Customer <span className="text-blue-600">Dashboard</span>
        </h1>
        <p className="text-gray-600 mt-1">Welcome back</p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard icon={ShoppingCart} label="Total Orders" value="48" color="gray" />
        <StatCard icon={Package} label="Active Deliveries" value="20" color="blue" />
        <StatCard icon={Wrench} label="Maintenance Requests" value="05" color="orange" />
      </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent Orders */}
            <div className="lg:col-span-2 bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                  <ShoppingCart size={16} className="text-blue-600" />
                </div>
                <h2 className="text-lg font-semibold">Recent Orders</h2>
              </div>
              
              <div className="space-y-3">
                {recentOrders.map((order, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 flex justify-between items-center">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-blue-600 font-semibold">{order.id}</span>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(order.status)}`}>
                          {order.status}
                        </span>
                      </div>
                      <p className="text-gray-900 font-medium">{order.item}</p>
                      <p className="text-gray-500 text-sm flex items-center gap-1 mt-1">
                        <span className="text-gray-400">🕐</span> {order.date}
                      </p>
                    </div>
                    <p className="text-gray-900 font-semibold">{order.amount}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Loyalty Points */}
            <div className="bg-linear-to-br from-blue-600 to-blue-700 rounded-lg p-6 text-white">
              <div className="flex items-center gap-2 mb-6">
                <Gift size={20} />
                <h2 className="text-lg font-semibold">Loyalty Points</h2>
              </div>
              
              <div className="text-center mb-6">
                <p className="text-5xl font-bold mb-2">2,450</p>
                <p className="text-blue-100">Total Points</p>
              </div>

              <div className="bg-blue-500/30 rounded-lg p-4 mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm">Next Reward</span>
                  <span className="text-sm font-semibold">550 points away</span>
                </div>
                <div className="w-full bg-blue-800/50 rounded-full h-2">
                  <div className="bg-white rounded-full h-2" style={{ width: '80%' }}></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
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

              <button className="w-full bg-white text-blue-600 font-semibold py-3 rounded-lg hover:bg-blue-50 transition-colors">
                Redeem Points
              </button>
            </div>
          </div>

          {/* Delivery Status & Maintenance */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            {/* Delivery Status */}
            <div className="lg:col-span-2 bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center gap-2 mb-6">
                <Package size={20} className="text-blue-600" />
                <h2 className="text-lg font-semibold">Delivery Status</h2>
              </div>
              
              <div className="space-y-6">
                {deliveries.map((delivery, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-blue-600 font-semibold">{delivery.id}</span>
                      <span className="text-gray-600 text-sm">{delivery.time}</span>
                    </div>
                    <p className="text-gray-900 font-medium mb-3">{delivery.status}</p>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                      <div 
                        className="bg-blue-600 rounded-full h-2" 
                        style={{ width: `${delivery.progress}%` }}
                      ></div>
                    </div>
                    <p className="text-gray-500 text-sm flex items-center gap-1">
                      <span>📍</span> {delivery.location}
                    </p>
                  </div>
                ))}
                
                <div className="bg-blue-50 rounded-lg p-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm">
                    ✓
                  </div>
                  <span className="text-blue-700 font-medium">2 deliveries completed this month</span>
                </div>
              </div>
            </div>

            {/* Maintenance */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Wrench size={20} className="text-blue-600" />
                  <h2 className="text-lg font-semibold">Maintenance</h2>
                </div>
              </div>
              
              <button className="w-full bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition-colors mb-6 flex items-center justify-center gap-2">
                <span>+</span> New Maintenance Request
              </button>

              <div className="space-y-4 mb-6">
                {maintenanceRequests.map((request, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-blue-600 font-semibold">{request.id}</span>
                      {request.isActive && (
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      )}
                    </div>
                    <p className="text-gray-900 font-medium mb-2">{request.title}</p>
                    <p className="text-gray-500 text-sm flex items-center gap-1">
                      <span>🕐</span> {request.status}
                    </p>
                  </div>
                ))}
              </div>

              <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-4">
                <p className="text-cyan-800 text-sm">
                  💡 Regular maintenance ensures optimal equipment performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    };

    export default CustomerDashboard;