import EmployeeHeader from '@/components/UI/EmployeeHeader';
import EmployeeSidebar from '@/components/UI/EmployeeSidebar';
import React from 'react';

export default function EmployeeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex bg-gray-50">
      <EmployeeSidebar />
      <div>
        <EmployeeHeader />
        <div className="flex-1 p-6 ml-60">{children}</div>
      </div>
    </div>
  );
}
