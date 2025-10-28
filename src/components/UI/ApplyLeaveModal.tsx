'use client';

import React, { useState } from 'react';
import { X, Calendar } from 'lucide-react';

interface Leave {
  type: string;
  from: string;
  to: string;
  days: number;
  status: string;
  reason: string;
  approver: string;
}

interface ApplyLeaveModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (leave: Leave) => void;
}

export default function ApplyLeaveModal({
  isOpen,
  onClose,
  onSubmit,
}: ApplyLeaveModalProps) {
  const [formData, setFormData] = useState({
    leaveType: 'Casual',
    fromDate: '',
    toDate: '',
    reason: '',
  });

  const calculateDays = (from: string, to: string): number => {
    if (!from || !to) return 0;
    const fromDate = new Date(from);
    const toDate = new Date(to);
    const diffTime = Math.abs(toDate.getTime() - fromDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays + 1;
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('en-US', { month: 'short' });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newLeave: Leave = {
      type: formData.leaveType,
      from: formatDate(formData.fromDate),
      to: formatDate(formData.toDate),
      days: calculateDays(formData.fromDate, formData.toDate),
      status: 'Pending',
      reason: formData.reason,
      approver: 'N/A',
    };

    onSubmit(newLeave);

    // Reset form
    setFormData({
      leaveType: 'Casual',
      fromDate: '',
      toDate: '',
      reason: '',
    });
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 z-40 ${
          isOpen ? 'opacity-50' : 'opacity-0'
        }`}
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          className={`bg-white rounded-2xl shadow-2xl w-full max-w-lg transform transition-all duration-300 ${
            isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          }`}
        >
          {/* Modal Header */}
          <div className="flex items-start justify-between px-8 pt-8 pb-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-1">
                Submit Leave Request
              </h2>
              <p className="text-gray-600 text-sm">
                Request time off by filling out the form below
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
          </div>

          {/* Modal Content */}
          <form onSubmit={handleSubmit} className="px-8 pb-8">
            {/* Leave Type */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-blue-600 mb-2">
                Leave Type
              </label>
              <select
                name="leaveType"
                value={formData.leaveType}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
                required
              >
                <option value="Casual">Casual</option>
                <option value="Health">Health</option>
                <option value="Annual">Annual</option>
                <option value="Emergency">Emergency</option>
              </select>
            </div>

            {/* Date Inputs Row */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {/* From Date */}
              <div>
                <label className="block text-sm font-medium text-blue-600 mb-2">
                  From Date
                </label>
                <div className="relative">
                  <Calendar
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                    size={18}
                  />
                  <input
                    type="date"
                    name="fromDate"
                    value={formData.fromDate}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-600"
                    placeholder="Select date"
                    required
                  />
                </div>
              </div>

              {/* To Date */}
              <div>
                <label className="block text-sm font-medium text-blue-600 mb-2">
                  To Date
                </label>
                <div className="relative">
                  <Calendar
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                    size={18}
                  />
                  <input
                    type="date"
                    name="toDate"
                    value={formData.toDate}
                    onChange={handleInputChange}
                    min={formData.fromDate}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-600"
                    placeholder="Select date"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Reason Textarea */}
            <div className="mb-6">
              <textarea
                name="reason"
                value={formData.reason}
                onChange={handleInputChange}
                placeholder="Enter the reason for your leave request..."
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-400 resize-none"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
