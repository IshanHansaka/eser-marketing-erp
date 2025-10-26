'use client';

import {
  BarChart3,
  ClipboardList,
  Wrench,
  User,
  LogOut,
  LucideIcon,
  Package,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

interface MenuItem {
  name: string;
  icon: LucideIcon;
  href?: string;
}

const CustomerSidebar = () => {
  const pathname = usePathname();

  const menuItems: MenuItem[] = [
    { name: 'Dashboard', icon: BarChart3, href: '/customer/dashboard' },
    { name: 'Products', icon: Package, href: '/customer/products' },
    { name: 'Orders', icon: ClipboardList, href: '/customer/orders' },
    {
      name: 'Repair Requests',
      icon: Wrench,
      href: '/customer/repairs',
    },
    { name: 'Profile', icon: User, href: '/customer/profile' },
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
                    <span className="text-sm font-medium text-black">
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

export default CustomerSidebar;
