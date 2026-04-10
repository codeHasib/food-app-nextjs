"use client";

import FoodDetails from "@/components/FoodDetails";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const FoodDetailsPage = () => {
  const { foodId } = useParams();
  const [food, setFood] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`,
      );
      const data = await res.json();
      console.log(data.data);
      setFood(data.data);
    };
    fetchData();
    console.log(food)
  }, [foodId]);

  return (
    <>
      <FoodDetails currentFood={food}></FoodDetails>
    </>
  );
};

export default FoodDetailsPage;
