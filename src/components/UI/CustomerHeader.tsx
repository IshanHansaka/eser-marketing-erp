'use client';

import Image from 'next/image';
import { useState } from 'react';
import NotificationModal from '../layouts/NotificationModal';
import { useModal } from '../../components/contexts/ModalContext';

export default function CustomerHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: 'Your order #ORD-007 (Stationary Bike) has been shipped.',
      date: 'Sep 25 2025',
    },
    {
      id: 2,
      title: 'Your repair request for the Rowing Machine has been completed.',
      date: 'Sep 10 2025',
    },
    {
      id: 3,
      title:
        'Your order #ORD-006 (Dumbbell Set) has been successfully delivered.',
      date: 'Sep 2 2025',
    },
    {
      id: 4,
      title:
        'Your payment for Order #ORD-009 (Treadmill) has been received successfully.',
      date: 'Sep 2 2025',
    },
    {
      id: 5,
      title:
        'Delivery for Order #ORD-007 has been delayed due to weather conditions.',
      date: 'Sep 1 2025',
    },
  ]);

  const handleDismissNotification = (id: number) => {
    setNotifications(
      notifications.filter((notification) => notification.id !== id)
    );
  };

  const { openCart } = useModal();

  return (
    <div className="w-screen flex justify-end gap-8 py-6 pr-16">
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
      <button onClick={openCart} className="p-2 cursor-pointer" aria-label="Open cart">
        <Image
          src="/icons/shopping-cart.svg"
          width={32}
          height={32}
          alt="shopping cart"
        />
      </button>
      <div className="flex gap-3 items-center ml-8">
        <Image
          src="/images/profile-pic.svg"
          width={48}
          height={48}
          alt="profile picture"
        />
        <div>
          <p className="font-bold text-gray-800 text-lg">Sheron Perera</p>
          <p className="text-gray-600 text-sm">Customer</p>
        </div>
      </div>
    </div>
  );
}
