import React, { useState } from 'react';
import { X, Calendar } from 'lucide-react';

interface ApplyLeaveModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ApplyLeaveModal({
  isOpen,
  onClose,
}: ApplyLeaveModalProps) {
  const [formData, setFormData] = useState({
    fromDate: '',
    toDate: '',
    reason: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Leave request submitted:', formData);
    onClose();
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
                    className="w-full pl-10 </button>pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-600"
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
