"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const FoodDetails = ({ currentFood }) => {
  const router = useRouter();
  const {
    id,
    dish_name,
    rating,
    price,
    origin_and_popularity,
    main_ingredients,
    image_link,
  } = currentFood;
  return (
    <div className="flex justify-center lg:justify-between bg-base-300 items-center flex-wrap min-h-[70vh] px-5 py-10 mt-4 rounded-4xl">
      <div>
        <Image
          src={image_link}
          alt={dish_name}
          width={300}
          height={300}
        ></Image>
      </div>
      <div className="mt-4 space-y-3">
        <h2 className="text-2xl font-bold lg:text-3xl">{dish_name}</h2>
        <h3 className="font-bold text-xl">Rating: {rating}</h3>
        <p className="font-extrabold">Price:- ${price}</p>
        <h3 className="text-xl font-semibold italic">Ingredients: -</h3>
        <ul className="list-disc list-inside ml-4">
          {main_ingredients.map((ing, ind) => (
            <li key={ind}> {ing} </li>
          ))}
        </ul>
        <div className="text-center mt-3">
          <button
            onClick={() => router.back()}
            className="btn bg-amber-950 text-white"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
