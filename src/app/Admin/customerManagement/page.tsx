'use client';
import { useState } from 'react';

interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  loyaltyPoints: number;
  isActive: boolean;
}

// Mock data for customers
const initialCustomers: Customer[] = [
  {
    id: '1',
    name: 'Alex Doe',
    email: 'alexdoe@gmail.com',
    phone: '070 345 6090',
    loyaltyPoints: 20,
    isActive: true
  },
  {
    id: '2',
    name: 'Sachini Weerasinghe',
    email: 'sachini@gmail.com',
    phone: '070 234 0567',
    loyaltyPoints: 25,
    isActive: true
  },
  {
    id: '3',
    name: 'Kavindu Perera',
    email: 'kavinuperera@gmail.com',
    phone: '071 223 4754',
    loyaltyPoints: 18,
    isActive: true
  },
  {
    id: '4',
    name: 'Naveen Abeysinghe',
    email: 'naveenabey@gmail.com',
    phone: '076 892 5670',
    loyaltyPoints: 30,
    isActive: true
  },
  {
    id: '5',
    name: 'Haritha Induwara',
    email: 'harithaind@gmail.com',
    phone: '071 983 4734',
    loyaltyPoints: 14,
    isActive: true
  },
  {
    id: '6',
    name: 'Sehan Nethmina',
    email: 'sehan@gmail.com',
    phone: '077 987 1567',
    loyaltyPoints: 28,
    isActive: true
  }
];

export default function CustomerManagement() {
  const [customers, setCustomers] = useState<Customer[]>(initialCustomers);
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);

  // Filter customers based on search query
  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDeactivate = (customer: Customer) => {
    setSelectedCustomer(customer);
    setIsModalOpen(true);
  };

  const confirmDeactivate = () => {
    if (selectedCustomer) {
      setCustomers(prev =>
        prev.map(customer =>
          customer.id === selectedCustomer.id
            ? { ...customer, isActive: false }
            : customer
        )
      );
      setIsModalOpen(false);
      setSelectedCustomer(null);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCustomer(null);
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#1C398E] mb-4">Customer Management</h1>
        <p className="text-black text-sm">
          Manage all registered customers — view profiles, monitor activity, and maintain accurate customer records.
        </p>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg
              className="h-5 w-5 text-[#1C398E] "
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
            placeholder="Search Customer by Name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-[#1C398E] rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent placeholder:text-[#1C398E]"
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-100 shadow-sm">
              <tr>
                <th className="px-6 py-3 text-left text-md font-bold text-black border-r border-gray-200 shadow-sm">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-md font-bold text-black border-r border-gray-200 shadow-sm">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-md font-bold text-black border-r border-gray-200 shadow-sm">
                  Phone
                </th>
                <th className="px-6 py-3 text-left text-md font-bold text-black border-r border-gray-200 shadow-sm">
                  Loyalty Points
                </th>
                <th className="px-6 py-3 text-left text-md font-bold text-black">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredCustomers.map((customer) => (
                <tr key={customer.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {customer.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {customer.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {customer.phone}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {customer.loyaltyPoints}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {customer.isActive ? (
                      <button
                        onClick={() => handleDeactivate(customer)}
                        className="px-4 py-2 bg-[#FEE2E2] text-black text-sm rounded hover:bg-red-300 transition-colors"
                      >
                        Deactivate
                      </button>
                    ) : (
                      <span className="px-4 py-2 bg-gray-200 text-gray-600 text-sm rounded">
                        Deactivated
                      </span>
                    )}
                  </td>
                </tr>
              ))}
              {filteredCustomers.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                    No customers found matching &quot;{searchQuery}&quot;
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Confirmation Modal */}
      {isModalOpen && selectedCustomer && (
        <div className="fixed inset-0 bg-gray-50 bg-opacity-20 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800">Confirm Deactivation</h3>
              <p className="text-sm text-gray-600 mt-3">
                Are you sure you want to deactivate <span className="font-semibold">{selectedCustomer.name}</span>?
              </p>
              <p className="text-sm text-gray-500 mt-2">
                This customer will no longer be able to access their account.
              </p>
            </div>
            <div className="p-6 flex justify-end gap-3">
              <button
                onClick={closeModal}
                className="px-4 py-2 text-gray-700 bg-gray-100 rounded hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={confirmDeactivate}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
              >
                Deactivate
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}