"use client";

import { useParams } from "next/navigation";

const FoodDetailsPage = () => {
  const { foodId } = useParams();
  return <div>this is about food no: - {foodId} </div>;
};

export default FoodDetailsPage;
