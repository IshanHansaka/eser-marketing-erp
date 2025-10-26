'use client';

import {
  BarChart3,
  Wrench,
  FileText,
  LogOut,
  LucideIcon,
  Users,
  UserSquare,
  Truck,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

interface MenuItem {
  name: string;
  icon: LucideIcon;
  href?: string;
}

const EmployeeSidebar = () => {
  const pathname = usePathname();

  const menuItems: MenuItem[] = [
    { name: 'Dashboard', icon: BarChart3, href: '/admin/dashboard' },
    { name: 'Employees', icon: Users, href: '/admin/employees' },
    { name: 'Customers', icon: UserSquare, href: '/admin/customers' },
    { name: 'Deliveries', icon: Truck, href: '/admin/deliveries' },
    { name: 'Repair Requests', icon: Wrench, href: '/admin/repairs' },
    { name: 'Leave Requests', icon: FileText, href: '/admin/leaves' },
  ];

  const activeItem = menuItems.find((item) => item.href === pathname)?.name;

  return (
    <div className="h-screen w-60 bg-white  py-6 flex flex-col justify-between fixed shadow-lg">
      {/* Logo */}
      <div>
        <div className="flex justify-center mb-10">
          <Image
            src="/eser-logo.png"
            alt="Logo"
            width={90}
            height={90}
            className="cursor-pointer"
          />
        </div>

        {/* Menu */}
        <nav>
          <div className="flex flex-col space-y-4">
            {menuItems.map((item) => {
              const isActive = activeItem === item.name;

              return (
                <Link key={item.name} href={item.href || '#'}>
                  <div
                    className={`flex items-center px-6 py-2 rounded-md cursor-pointer transition 
                      ${
                        isActive
                          ? 'bg-blue-50 backdrop-blur-sm'
                          : 'hover:bg-blue-50'
                      }
                    `}
                  >
                    <item.icon className="h-5 w-5 mr-3 text-black" />
                    <span className={`text-sm font-medium text-black`}>
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
        <button className="flex items-center space-x-2 text-black hover:text-black text-sm">
          <LogOut className="h-5 w-5" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default EmployeeSidebar;
