"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter
import { ShoppingCart, Trash2, Receipt, X } from 'lucide-react';

export default function CartPopup() {
  const router = useRouter(); // Initialize router
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Treadmill',
      image: '/images/equipment1.png',
      unitPrice: 150000,
      quantity: 1
    },
    {
      id: 2,
      name: 'Dumbbell Set (20kg)',
      image: '/images/equipment2.png',
      unitPrice: 18000,
      quantity: 2
    },
    {
      id: 3,
      name: 'Exercise Bike 3000',
      image: '/images/equipment3.png',
      unitPrice: 85000,
      quantity: 1
    }
  ]);

  const handleQuantityChange = (id: number, change: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const handleRemoveItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.unitPrice * item.quantity), 0);
  const discount = 10000;
  const total = subtotal - discount;

  // Navigate to CheckoutPopup with cart items
  const handleProceedToCheckout = () => {
    // Pass cart items as query parameters or store in localStorage/sessionStorage
    //sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
    router.push('/src/components/UI/CheckoutPopup');
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Close Button */}
      <div className="flex justify-end mt-8 mb-4">
        <button
          onClick={() => window.history.back()}
          className="text-gray-600 hover:text-gray-900 transition-colors p-2 hover:bg-gray-100 rounded-lg"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <ShoppingCart className="w-7 h-7 text-blue-900 fill-blue-900" />
        <h1 className="text-3xl font-bold text-blue-900">My Shopping Cart</h1>
      </div>

      {/* Cart Items Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-8">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left py-4 px-6 text-sm font-bold text-black">Product Image</th>
              <th className="text-left py-4 px-6 text-sm font-bold text-black">Product</th>
              <th className="text-left py-4 px-6 text-sm font-bold text-black">Unit Price</th>
              <th className="text-left py-4 px-6 text-sm font-bold text-black">Quantity</th>
              <th className="text-left py-4 px-6 text-sm font-bold text-black">Subtotal</th>
              <th className="text-left py-4 px-6 text-sm font-bold text-black">Remove</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {cartItems.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                <td className="py-5 px-6 pl-10">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                </td>
                <td className="py-5 px-6 text-sm text-gray-900 font-medium">{item.name}</td>
                <td className="py-5 px-6 text-sm text-gray-900">Rs. {item.unitPrice.toLocaleString()}</td>
                <td className="py-5 px-6">
                  <div className="flex items-center border border-gray-300 rounded-md w-fit">
                    <button
                      onClick={() => handleQuantityChange(item.id, -1)}
                      className="px-4 py-2 hover:bg-gray-100 transition-colors text-gray-700 font-medium"
                    >
                      -
                    </button>
                    <span className="px-4 py-2 text-sm text-gray-900 font-medium border-x border-gray-300">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => handleQuantityChange(item.id, 1)}
                      className="px-4 py-2 hover:bg-gray-100 transition-colors text-gray-700 font-medium"
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="py-5 px-6 text-sm text-gray-900 font-medium">
                  Rs. {(item.unitPrice * item.quantity).toLocaleString()}
                </td>
                <td className="py-5 px-6">
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="text-red-500 hover:text-red-700 transition-colors p-2 hover:bg-red-50 rounded-lg"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Order Summary Card */}
      <div className="flex justify-center">
        <div className="w-full max-w-md bg-white rounded-lg shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3),0_2px_4px_-1px_rgba(0,0,0,0.2)] border border-black p-6">
          <div className="flex items-center gap-2 mb-6">
            <Receipt className="w-5 h-5 text-blue-900" />
            <h2 className="text-lg font-bold text-blue-900">Order Summary</h2>
          </div>

          <div className="space-y-4 mb-6">
            <div className="flex justify-between items-center">
              <span className="text-sm font-semibold text-gray-700">Subtotal:</span>
              <span className="text-base font-bold text-blue-900">Rs. {subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-semibold text-gray-700">Discounts:</span>
              <span className="text-base font-bold text-blue-900">Rs. {discount.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-base font-bold text-gray-900">Total:</span>
              <span className="text-lg font-bold text-blue-900">Rs. {total.toLocaleString()}</span>
            </div>
          </div>

          <div className="flex justify-end">
            <button 
              onClick={handleProceedToCheckout}
              className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-md font-medium transition-colors shadow-sm"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}