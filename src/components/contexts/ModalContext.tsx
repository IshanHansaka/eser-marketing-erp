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
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);
  const openCheckout = () => setIsCheckoutOpen(true);
  const closeCheckout = () => setIsCheckoutOpen(false);

  return (
    <ModalContext.Provider
      value={{ isCartOpen, openCart, closeCart, isCheckoutOpen, openCheckout, closeCheckout }}
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