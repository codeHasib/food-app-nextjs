"use client";

import filter from "daisyui/components/filter";
import { createContext, useEffect, useState } from "react";

export const Context = createContext();

export const ProductProvider = ({ children }) => {
  // const [foods, setFoods] = useState(null);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch(
  //       "https://phi-lab-server.vercel.app/api/v1/lab/foods",
  //     );
  //     const data = res.json();
  //     const dotto = data.data;
  //     console.log(dotto)
  //     setFoods(dotto);
  //   };
  //   fetchData();
  // }, []);
  // const dishFoods = foods.filter((food) => food.category === "dish");
  // const biriyaniFoods = foods.filter((food) => food.category === "biriyani");
  // const beverageFoods = foods.filter((food) => food.category === "beverage");
  return (
    <>
      <Context.Provider value={{}}>{children}</Context.Provider>
    </>
  );
};
