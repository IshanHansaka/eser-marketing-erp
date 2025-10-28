import CustomerHeader from '@/components/UI/CustomerHeader';
import CustomerSidebar from '@/components/UI/CustomerSidebar';
import { CartProvider } from '@/components/contexts/CartContext';
import { ModalProvider } from '@/components/contexts/ModalContext';

import React from 'react';

export default function EmployeeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ModalProvider>
      <CartProvider>
        <div className="flex-1 bg-gray-50 min-h-screen">
        <CustomerSidebar />
        <div>
          <CustomerHeader />
          <div className="flex-1 p-6 ml-60">{children}</div>
        </div>
        </div>
    </CartProvider>
    </ModalProvider>
  );
}
