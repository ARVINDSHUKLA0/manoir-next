'use client'; 
import { createContext, useEffect, useState } from "react";
import { CategoryJSON } from "@/Data/CategoryJSON";

export const AddtoCartItem = createContext();
export const DataAddtocart = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addTocartFunc = (id, quantity = 1) => {
    let cart = JSON.parse(localStorage.getItem("cartItems")) || [];
    const existingItem = cart.find(item => item.id === id);

    if (existingItem) {
      cart = cart.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + quantity } : item
      );
    } else {
      cart.push({ id, quantity });
    }

    localStorage.setItem("cartItems", JSON.stringify(cart));
    DataFilterCart();
  };

  const DataFilterCart = () => {
    const cartData = JSON.parse(localStorage.getItem("cartItems")) || [];
    if (cartData.length > 0) {
      const updatedCart = cartData.map(item => {
        const product = CategoryJSON.find(prod => prod.id === item.id);
        return product ? { ...product, quantity: item.quantity } : null;
      }).filter(Boolean); // remove null values
      setCartItems(updatedCart);
    } else {
      setCartItems([]);
    }
  };

  useEffect(() => {
    DataFilterCart();
  }, []);

  return (
    <AddtoCartItem.Provider value={{ cartItems, addTocartFunc }}>
      {children}
    </AddtoCartItem.Provider>
  );
};
