"use client";

import { Context } from "@/app/Context/useContext";
import Link from "next/link";
import { useContext } from "react";

const CartIcon = () => {
  const { cartItems } = useContext(Context);
  return (
    <>
      <div className="fixed z-60 bottom-10 right-5">
        <Link href={"/cart"}>
          <div className="h-15 w-15 text-3xl rounded-full bg-[#ae1b27] flex justify-center items-center text-white">
            <div className="h-5 w-5 rounded-full absolute -top-2 right-0 bg-white text-black flex justify-center items-center text-[16px] font-extrabold">
              {cartItems.length}
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </div>
        </Link>
      </div>
    </>
  );
};

export default CartIcon;
