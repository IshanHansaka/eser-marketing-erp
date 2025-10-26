import CustomerSidebar from '@/components/UI/CustomerSidebar';

import React from 'react';

export default function EmployeeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <CustomerSidebar />
      <div className="flex-1 p-6 ml-60">{children}</div>
    </div>
  );
}