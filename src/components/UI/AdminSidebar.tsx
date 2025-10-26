'use client';

import { useState, useEffect } from 'react';
import {
  BarChart3,
  Wrench,
  FileText,
  LogOut,
  LucideIcon,
  Users,
  UserSquare,
  Truck
} from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';

interface MenuItem {
  name: string;
  icon: LucideIcon;
  href?: string;
}

const EmployeeSidebar = () => {
  const [selectedItem, setSelectedItem] = useState<string>('Dashboard');
  const pathname = usePathname();
  const router = useRouter();

  const menuItems: MenuItem[] = [
    { name: 'Dashboard', icon: BarChart3, href: '/Admin/dashboard' },
    { name: 'Employees', icon: Users, href: '/Admin/employees' },
    { name: 'Customers', icon: UserSquare, href: '/Admin/customers' },
    { name: 'Deliveries', icon: Truck, href: '/Admin/deliveries' },
    { name: 'Repair Requests', icon: Wrench, href: '/Admin/repairs' },
    { name: 'Leave Requests', icon: FileText, href: '/Admin/leaves' },
    
  ];

  // set active item when route changes
  useEffect(() => {
    const currentItem = menuItems.find((item) => item.href === pathname);
    if (currentItem) setSelectedItem(currentItem.name);
  }, [pathname]);

  return (
    <div className="h-screen w-60 bg-white border-r py-6 flex flex-col justify-between fixed">
      {/* Logo */}
      <div>
        <div className="flex justify-center mb-10">
          <Image
            src="/eser-logo.png"
            alt="Logo"
            width={90}
            height={90}
            className="cursor-pointer"
            onClick={() => router.push('/')}
          />
        </div>

        {/* Menu */}
        <nav>
          <div className="flex flex-col space-y-4">
            {menuItems.map((item) => {
              const isActive = selectedItem === item.name;

              return (
                <Link
                  key={item.name}
                  href={item.href || '#'}
                  onClick={() => setSelectedItem(item.name)}
                >
                  <div
                    className={`flex items-center px-6 py-2 rounded-md cursor-pointer transition 
                      ${isActive ? 'bg-blue-50 backdrop-blur-sm' : 'hover:bg-blue-50'}
                    `}
                  >
                    <item.icon
                      className="h-5 w-5 mr-3 text-black"
                    />
                    <span
                      className={`text-sm font-medium text-black`}
                    >
                      {item.name}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </nav>
      </div>

      {/* Logout */}
      <div className="px-6 pb-4">
        <button
          className="flex items-center space-x-2 text-black hover:text-black text-sm"
        >
          <LogOut className="h-5 w-5" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default EmployeeSidebar;
