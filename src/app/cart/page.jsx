"use client";

import { useContext } from "react";
import { Context } from "../Context/useContext";
import CartItem from "@/components/CartItem";
import Link from "next/link";

const CartPage = () => {
  const { cartItems, setCartItems } = useContext(Context);
  const totalPrice = cartItems.reduce((acc, runn) => acc + runn.price, 0);
  return (
    <>
      <div className="container mx-auto space-y-4 px-3">
        {cartItems.length > 0 ? (
          cartItems.map((item, ind) => (
            <CartItem key={ind} food={item}></CartItem>
          ))
        ) : (
          <div className="p-10 text-center space-y-3">
            <div className="flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-16"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-light">
              Nothing added yet add something
            </h2>{" "}
            <Link href={"/foods/all"}>
              <button className="btn bg-[#ae1b27] text-white">Order Now</button>
            </Link>
          </div>
        )}
        {cartItems.length > 0 ? (
          <div className="flex justify-between items-center py-10 px-4">
            <h2 className="text-2xl font-semibold">Total Price:-</h2>
            <h3 className="text-xl font-extrabold">${totalPrice}</h3>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default CartPage;
