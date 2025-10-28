'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import CartPopup from '../UI/CartPopup';
import CheckoutPopup from '../UI/CheckoutPopup';

interface ModalContextType {
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  isCheckoutOpen: boolean;
  openCheckout: () => void;
  closeCheckout: () => void;
  cartItems: CartItem[];
  setCartItems: (items: CartItem[]) => void;
  subtotal: number;
  discount: number;
  total: number;
}

interface CartItem {
  id: number;
  name: string;
  image: string;
  unitPrice: number;
  quantity: number;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

const DISCOUNT = 10000;

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);
  const openCheckout = () => setIsCheckoutOpen(true);
  const closeCheckout = () => setIsCheckoutOpen(false);

  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: 'Treadmill',
      image: '/images/equipment1.png',
      unitPrice: 150000,
      quantity: 1,
    },
    {
      id: 2,
      name: 'Dumbbell Set (20kg)',
      image: '/images/equipment2.png',
      unitPrice: 18000,
      quantity: 2,
    },
    {
      id: 3,
      name: 'Exercise Bike 3000',
      image: '/images/equipment3.png',
      unitPrice: 85000,
      quantity: 1,
    },
  ]);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.unitPrice * item.quantity,
    0
  );
  const total = subtotal - DISCOUNT;

  return (
    <ModalContext.Provider
      value={{
        isCartOpen,
        openCart,
        closeCart,
        isCheckoutOpen,
        openCheckout,
        closeCheckout,
        cartItems,
        setCartItems,
        subtotal,
        discount: DISCOUNT,
        total,
      }}
    >
      {children}
      {/* Render modals here so they overlay everything */}
      {isCartOpen && <CartPopup />}
      {isCheckoutOpen && <CheckoutPopup />}
    </ModalContext.Provider>
  );
}

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
