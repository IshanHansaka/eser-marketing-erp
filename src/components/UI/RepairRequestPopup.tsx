"use client";

import React, { useState } from 'react';
import { X, Upload } from 'lucide-react';

interface RepairRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: (data: { product: string; issue: string }) => void;
}

export default function RepairRequestModal({ isOpen, onClose, onSubmit }: RepairRequestModalProps) {
  const [selectedProduct, setSelectedProduct] = useState('');
  const [issueDescription, setIssueDescription] = useState('');

  const products = ['Treadmill', 'Stationary Bike', 'Rowing Machine', 'Bench Press', 'Dumbbells'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Call the onSubmit callback if provided
    if (onSubmit) {
      onSubmit({ product: selectedProduct, issue: issueDescription });
    }
    
    // Reset form
    setSelectedProduct('');
    setIssueDescription('');
    onClose();
  };

  const handleCancel = () => {
    setSelectedProduct('');
    setIssueDescription('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#DCDCDC] bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-md mx-4 pb-8">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6">
          <h2 className="text-3xl font-bold text-blue-900">Submit Repair Request</h2>
          <button 
            onClick={handleCancel}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <form onSubmit={handleSubmit} className="p-6">
          {/* Select Product */}
          <div className="mb-6 flex items-center gap-4">
            <label className="text-lg font-semibold text-gray-900 whitespace-nowrap">
              Select Product:
            </label>
            <select
              value={selectedProduct}
              onChange={(e) => setSelectedProduct(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-600 text-lg"
              required
            >
              <option value="">Product</option>
              {products.map((product) => (
                <option key={product} value={product}>
                  {product}
                </option>
              ))}
            </select>
          </div>

          {/* Describe Issue */}
          <div className="mb-6">
            <label className="block text-lg font-semibold text-gray-900 mb-2">
              Describe Issue:
            </label>
            <textarea
              value={issueDescription}
              onChange={(e) => setIssueDescription(e.target.value)}
              placeholder="Clearly describe the issue you have with the product"
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-base"
              required
            />
          </div>

          {/* Attach Image */}
          <div className="mb-6">
            <label className="block text-lg font-semibold text-gray-900 mb-2">
              Attach Image (Optional):
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center bg-gray-50">
              <button
                type="button"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#D9D9D9] border border-gray-300 rounded-md text-base text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <Upload className="w-4 h-4" />
                Browse
              </button>
              <p className="text-base text-gray-500 mt-2">or</p>
              <p className="text-base text-gray-500">Drag & Drop</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={handleCancel}
              className="px-6 py-2.5 border border-red-500 text-red-500 rounded-md hover:bg-red-50 transition-colors text-base font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors text-base font-medium"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}