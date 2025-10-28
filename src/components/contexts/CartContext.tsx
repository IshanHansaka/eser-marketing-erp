'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CartItem {
  id: number;
  name: string;
  image: string;
  unitPrice: number;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  setCartItems: (items: CartItem[]) => void;
  subtotal: number;
  discount: number;
  total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const DISCOUNT = 10000;

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: 'Treadmill',
      image: '/images/equipment1.png',
      unitPrice: 150000,
      quantity: 1
    },
    {
      id: 2,
      name: 'Dumbbell Set (20kg)',
      image: '/images/equipment2.png',
      unitPrice: 18000,
      quantity: 2
    },
    {
      id: 3,
      name: 'Exercise Bike 3000',
      image: '/images/equipment3.png',
      unitPrice: 85000,
      quantity: 1
    }
  ]);

  const subtotal = cartItems.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
  const total = subtotal - DISCOUNT;

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, subtotal, discount: DISCOUNT, total }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
};