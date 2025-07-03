'use client';

import React, { createContext, useState } from 'react';

export const AddToCartWrapper = createContext();

export function AddToCartProvider({ children }) {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  return (
    <AddToCartWrapper.Provider value={{ isCartOpen, openCart, closeCart }}>
      {children}
    </AddToCartWrapper.Provider>
  );
}
