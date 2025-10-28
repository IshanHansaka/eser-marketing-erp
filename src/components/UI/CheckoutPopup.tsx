'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';
import { useModal } from '../../components/contexts/ModalContext';

export default function CheckoutPopup() {
  const { cartItems, subtotal, discount, total, closeCheckout } = useModal();

  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [rememberPayment, setRememberPayment] = useState(false);
  const [selectedDelivery, setSelectedDelivery] = useState('standard');

  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Order submitted:', {
      formData,
      paymentMethod,
      selectedDelivery,
      cartItems,
      total
    });
    alert('Order placed successfully!');
    closeCheckout(); // Close modal after submit
  };

  const deliveryCost = selectedDelivery === 'standard' ? 300 : 350;

  return (
    <div className="fixed inset-0 bg-[#DCDCDC] bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white px-6 py-4 flex justify-between items-center z-10 border-b">
          <div className="w-6"></div>
          <h2 className="absolute left-1/2 -translate-x-1/2 text-3xl font-bold text-blue-900">
            Order Now!
          </h2>
          <button
            onClick={closeCheckout}
            className="text-gray-500 hover:text-gray-700 transition-colors p-1 rounded-full hover:bg-gray-100"
            aria-label="Close checkout"
          >
            <X size={24} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          {/* Left Column - Delivery Address & Payment */}
          <div className="border-r border-gray-300 pr-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-4">Delivery Address</h3>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter Your Full Name"
                  className="w-full px-3 py-2 border border-[#163172] rounded-md focus:outline-none focus:ring-2 focus:ring-[#163172]"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Enter Your Address"
                  className="w-full px-3 py-2 border border-[#163172] rounded-md focus:outline-none focus:ring-2 focus:ring-[#163172]"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="Enter Your City"
                    className="w-full px-3 py-2 border border-[#163172] rounded-md focus:outline-none focus:ring-2 focus:ring-[#163172]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Postal Code</label>
                  <input
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    placeholder="Enter Your Postal Code"
                    className="w-full px-3 py-2 border border-[#163172] rounded-md focus:outline-none focus:ring-2 focus:ring-[#163172]"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Country</label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full px-3 py-3 border border-[#163172] rounded-md focus:outline-none focus:ring-2 focus:ring-[#163172]"
                >
                  <option value="">Select Your Country</option>
                  <option value="us">United States</option>
                  <option value="uk">United Kingdom</option>
                  <option value="ca">Canada</option>
                  <option value="au">Australia</option>
                  <option value="lk">Sri Lanka</option>
                </select>
              </div>
            </div>

            {/* Payment Method */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">Payment Method</h3>

              <div className="flex gap-2 mb-4">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('credit-card')}
                  className={`px-4 py-2 rounded-md border text-sm font-medium transition-colors ${
                    paymentMethod === 'credit-card'
                      ? 'bg-blue-50 border-[#163172] text-blue-700'
                      : 'bg-white border-[#163172] text-gray-700'
                  }`}
                >
                  Credit Card
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('digital-wallet')}
                  className={`px-4 py-2 rounded-md border text-sm font-medium transition-colors ${
                    paymentMethod === 'digital-wallet'
                      ? 'bg-blue-50 border-[#163172] text-blue-700'
                      : 'bg-white border-[#163172] text-gray-700'
                  }`}
                >
                  Digital Wallet
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('bank-transfer')}
                  className={`px-4 py-2 rounded-md border text-sm font-medium transition-colors ${
                    paymentMethod === 'bank-transfer'
                      ? 'bg-blue-50 border-[#163172] text-blue-700'
                      : 'bg-white border-[#163172] text-gray-700'
                  }`}
                >
                  Bank Transfer
                </button>
              </div>

              {paymentMethod === 'credit-card' && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Card Number</label>
                    <input
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      placeholder="Enter Your Card Number"
                      className="w-full px-3 py-2 border border-[#163172] rounded-md focus:outline-none focus:ring-2 focus:ring-[#163172]"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Expiry Date</label>
                      <input
                        type="text"
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                        placeholder="MM/YY"
                        className="w-full px-3 py-2 border border-[#163172] rounded-md focus:outline-none focus:ring-2 focus:ring-[#163172]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">CVV</label>
                      <input
                        type="text"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        placeholder="Enter CVV"
                        className="w-full px-3 py-2 border border-[#163172] rounded-md focus:outline-none focus:ring-2 focus:ring-[#163172]"
                      />
                    </div>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="remember"
                      checked={rememberPayment}
                      onChange={(e) => setRememberPayment(e.target.checked)}
                      className="mr-2"
                    />
                    <label htmlFor="remember" className="text-sm text-gray-700">
                      Remember my Payment information for future purchases
                    </label>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Delivery Options & Order Summary */}
          <div className="pl-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-4">Delivery Options</h3>

            <div className="space-y-4 mb-6">
              <button
                type="button"
                onClick={() => setSelectedDelivery('standard')}
                className={`w-full px-4 py-3 rounded-md border flex justify-between items-center text-sm font-medium transition-colors ${
                  selectedDelivery === 'standard'
                    ? 'bg-blue-50 border-[#163172] text-blue-700'
                    : 'bg-white border-[#163172] text-gray-700'
                }`}
              >
                <span>Standard (5-7 business days)</span>
                <span>Rs. 300</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedDelivery('express')}
                className={`w-full px-4 py-3 rounded-md border flex justify-between items-center text-sm font-medium transition-colors ${
                  selectedDelivery === 'express'
                    ? 'bg-blue-50 border-[#163172] text-blue-700'
                    : 'bg-white border-[#163172] text-gray-700'
                }`}
              >
                <span>Express (2-3 business days)</span>
                <span>Rs. 350</span>
              </button>
            </div>

            <h3 className="text-lg font-semibold text-blue-900 mb-4">Order Summary</h3>

            <div className="space-y-3 mb-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-3 items-center">
                  <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm text-gray-900">{item.name}</p>
                    <p className="text-xs text-gray-500">Quantity: {item.quantity}</p>
                  </div>
                  <p className="text-sm font-medium">
                    Rs. {(item.unitPrice * item.quantity).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>

            <div className="space-y-2 mb-6 border-t pt-4">
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>Rs. {subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Discount</span>
                <span className="text-green-600">-Rs. {discount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Shipping</span>
                <span>Rs. {deliveryCost}</span>
              </div>
              <div className="flex justify-between font-bold text-base pt-3 border-t">
                <span>Total</span>
                <span>Rs. {(total + deliveryCost).toLocaleString()}</span>
              </div>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-md transition-colors shadow-sm"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}