'use client';
import { useState } from 'react';
import { BarChart3, DollarSign, Users, UsersRound, Calendar } from 'lucide-react';
import { AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

interface RecentOrder {
  id: string;
  orderNumber: string;
  customer: string;
  date: string;
  status: 'Delivered' | 'Shipped' | 'Pending';
  amount: number;
}

const recentOrders: RecentOrder[] = [
  {
    id: '1',
    orderNumber: '#ORD-2847',
    customer: 'RDL',
    date: 'Oct 20, 2025',
    status: 'Delivered',
    amount: 20000
  },
  {
    id: '2',
    orderNumber: '#ORD-2846',
    customer: 'Barbell Curl',
    date: 'Oct 18, 2025',
    status: 'Shipped',
    amount: 44000
  }
];

// Data for Overall Sales Pie Chart
const overallSalesData = [
  { name: 'Rajagiriya', value: 25, color: '#EF4444' },
  { name: 'Kandy', value: 25, color: '#EC4' },
  { name: 'Kottawa', value: 25, color: '#10B981' },
  { name: 'Nugegoda', value: 25, color: '#3B82F6' }
];

// Data for Monthly Sales Area Chart
const monthlySalesData = [
  { month: 'Jan', sales: 30 },
  { month: 'Feb', sales: 55 },
  { month: 'Mar', sales: 45 },
  { month: 'Apr', sales: 70 },
  { month: 'May', sales: 35 },
  { month: 'Jun', sales: 80 },
  { month: 'Jul', sales: 65 },
  { month: 'Aug', sales: 75 }
];

// Data for Customer Growth Bar Chart
const customerGrowthData = [
  { month: 'Jan', customers: 30 },
  { month: 'Feb', customers: 50 },
  { month: 'Mar', customers: 40 },
  { month: 'Apr', customers: 65 },
  { month: 'May', customers: 45 },
  { month: 'Jun', customers: 75 },
  { month: 'July', customers: 55 }
];

export default function AdminDashboard() {
  const [selectedPeriod] = useState('October (1st Wednesday - today)');

  return (
    <div className="p-8 -mt-11">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#1C398E] mb-1">Admin Dashboard</h1>
        <p className="text-gray-600 text-sm">Welcome back</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-blue-50 rounded">
              <BarChart3 className="w-6 h-6 text-gray-700" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Sales</p>
              <p className="text-xl font-bold text-[#1C398E]">LKR 25M</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-blue-50 rounded">
              <DollarSign className="w-6 h-6 text-gray-700" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Monthly Revenue</p>
              <p className="text-xl font-bold text-[#1C398E]">LKR 1M</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-blue-50 rounded">
              <Users className="w-6 h-6 text-gray-700" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Customers</p>
              <p className="text-xl font-bold text-[#1C398E]">3564</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-blue-50 rounded">
              <UsersRound className="w-6 h-6 text-gray-700" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Employees</p>
              <p className="text-xl font-bold text-[#1C398E]">46</p>
            </div>
          </div>
        </div>
      </div>

      {/* Analytics Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-[#1C398E]">Analytics</h2>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-8">
        {/* Overall Sales - Donut Chart */}
        <div className="bg-blue-50 rounded-lg shadow p-6 border border-blue-300">
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Overall Sales</h3>
            <p className="text-sm text-gray-500">{selectedPeriod}</p>
          </div>
          <div className="flex items-center justify-center">
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={overallSalesData}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={100}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {overallSalesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Legend 
                  verticalAlign="middle" 
                  align="right"
                  layout="vertical"
                  iconType="circle"
                  formatter={(value) => <span className="text-sm text-gray-700">{value}</span>}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Monthly Sales - Area Chart */}
        <div className="bg-blue-50 rounded-lg shadow p-6 border border-blue-300">
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Monthly Sales</h3>
            <div className="mt-2">
              <p className="text-2xl font-bold text-gray-900">LKR 1M</p>
              <p className="text-sm text-gray-500">This Month +30%</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={monthlySalesData}>
              <defs>
                <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis 
                dataKey="month" 
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#6B7280', fontSize: 12 }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #E5E7EB',
                  borderRadius: '8px',
                  fontSize: '12px'
                }}
              />
              <Area 
                type="monotone" 
                dataKey="sales" 
                stroke="#3B82F6" 
                strokeWidth={2}
                fill="url(#colorSales)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Customer Growth - Bar Chart */}
        <div className="bg-blue-50 rounded-lg shadow p-6 border border-blue-300">
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Customer Growth</h3>
            <div className="mt-2">
              <p className="text-2xl font-bold text-gray-900">324</p>
              <p className="text-sm text-gray-500">This Year +15%</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={customerGrowthData}>
              <XAxis 
                dataKey="month" 
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#6B7280', fontSize: 12 }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #E5E7EB',
                  borderRadius: '8px',
                  fontSize: '12px'
                }}
                cursor={{ fill: 'rgba(59, 130, 246, 0.1)' }}
              />
              <Bar 
                dataKey="customers" 
                fill="#3B82F6" 
                radius={[8, 8, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Recent Orders */}
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Orders</h3>
          <div className="space-y-3">
            {recentOrders.map((order) => (
              <div key={order.id} className="flex items-center justify-between p-4 bg-blue-50 rounded-lg  border border-blue-300">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-semibold text-blue-600">{order.orderNumber}</span>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                      order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {order.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 font-medium">{order.customer}</p>
                  <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                    <Calendar className="w-3 h-3" />
                    {order.date}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-blue-600">Rs {order.amount.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}