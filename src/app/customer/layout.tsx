import CustomerHeader from '@/components/UI/CustomerHeader';
import CustomerSidebar from '@/components/UI/CustomerSidebar';
import { ModalProvider } from '@/components/contexts/ModalContext';

import React from 'react';

export default function CustomerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ModalProvider>
      <div className="flex-1 bg-gray-50 min-h-screen">
        <CustomerSidebar />
        <div>
          <CustomerHeader />
          <div className="flex-1 p-6 ml-60">{children}</div>
        </div>
      </div>
    </ModalProvider>
  );
}
