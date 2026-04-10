"use client";

import filter from "daisyui/components/filter";
import { createContext, useEffect, useState } from "react";

export const Context = createContext();

export const ProductProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  return (
    <>
      <Context.Provider value={{ cartItems, setCartItems }}>
        {children}
      </Context.Provider>
    </>
  );
};
