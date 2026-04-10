"use client";

import { Context } from "@/app/Context/useContext";
import Image from "next/image";
import { useContext, useState } from "react";

const CartItem = ({ food }) => {
  const { cartItems, setCartItems } = useContext(Context);
  const { id, dish_name, rating, price, origin_and_popularity, image_link } =
    food;
  const [count, setCount] = useState(0);

  function increment() {
    let newCount = count;
    newCount++;
    setCount(newCount);
  }

  function remove() {
    const filtered = cartItems.filter((item) => id !== item.id);
    setCartItems(filtered);
    console.log(id)
  }

  function decrement() {
    let newCount = count;
    if (newCount > 0) {
      newCount--;
    }
    setCount(newCount);
  }

  return (
    <div className="flex justify-start items-start gap-10 bg-gray-300 p-10 rounded-xl">
      <div>
        <Image
          src={image_link}
          alt={dish_name}
          height={150}
          width={150}
        ></Image>
      </div>
      <div className="flex flex-col justify-center items-start space-y-3">
        <h2 className="text-2xl font-lighter ">{dish_name}</h2>
        <h3 className="text-xl font-bold">${price}</h3>
        <div className="flex justify-center items-center gap-5">
          <button onClick={increment}>+</button>
          <p> {count} </p>
          <button onClick={decrement}>-</button>
        </div>
        <button onClick={remove} className="btn text-red-500">
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
              d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
