'use client';

import Image from 'next/image';
import { useState } from 'react';
import NotificationModal from '../layouts/NotificationMadal';

export default function EmployeeHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title:
        'New request (RQ-008) submitted by Dinuka Rathnayake for Leg Press Machine.',
      date: 'Sep 28 2025',
    },
    {
      id: 2,
      title: 'Repair work for Rowing Machine (RQ-004) has started.',
      date: 'Sep 25 2025',
    },
    {
      id: 3,
      title: 'Employee Ishara Fernando requested 2 days of casual leave.',
      date: 'Sep 15 2025',
    },
    {
      id: 4,
      title:
        'Order #ORD-006 has been successfully delivered to Tharindu Silva.',
      date: 'Sep 12 2025',
    },
    {
      id: 5,
      title:
        'Delivery for Order #ORD-007 has been delayed due to weather conditions.',
      date: 'Sep 5 2025',
    },
  ]);

  const handleDismissNotification = (id: number) => {
    setNotifications(
      notifications.filter((notification) => notification.id !== id)
    );
  };

  return (
    <div className="w-screen flex justify-end gap-10 py-6 pr-16">
      <button
        onClick={() => setIsModalOpen(true)}
        className="relative p-2 cursor-pointer"
        aria-label="Open notifications"
      >
        <Image
          src="/icons/notification-button.svg"
          width={32}
          height={32}
          alt="notification button"
        />
        {notifications.length > 0 && (
          <span className="absolute top-0 right-0 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-semibold">
            {notifications.length}
          </span>
        )}
      </button>
      <NotificationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        notifications={notifications}
        onDismissNotification={handleDismissNotification}
      />
      <div className="flex gap-3 items-center">
        <Image
          src="/images/profile-pic.svg"
          width={48}
          height={48}
          alt="profile picture"
        />
        <div>
          <p className="font-bold text-gray-800 text-lg">Kavindu Perera</p>
          <p className="text-gray-600 text-sm">Employee</p>
        </div>
      </div>
    </div>
  );
}
