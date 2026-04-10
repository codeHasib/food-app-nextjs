"use client";

import { useContext } from "react";
import { Context } from "../Context/useContext";
import CartItem from "@/components/CartItem";

const CartPage = () => {
  const { cartItems, setCartItems } = useContext(Context);
  return (
    <>
    <div className="container mx-auto space-y-4">
      {cartItems.length > 0 ? (
        cartItems.map((item, ind) => (
          <CartItem key={ind} food={item}></CartItem>
        ))
      ) : (
        <div> Nothing added yet </div>
      )}
    </div>
    </>
  );
};

export default CartPage;
