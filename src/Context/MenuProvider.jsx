'use client';

import { createContext, useState } from 'react';

export const MenuContext = createContext();

export function MenuProvider({ children }) {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => setMenu(prev => !prev);

  return (
    <MenuContext.Provider value={{ menu, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
}
