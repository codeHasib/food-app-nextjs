import Image from "next/image";
import Link from "next/link";

const Card = async ({ num }) => {
  const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/foods");
  const data = await res.json();
  const foods = data.data;
  const currentFood = foods[num];
  const { id, dish_name, rating, price, origin_and_popularity, image_link } =
    currentFood;
  return (
    <div className="min-h-140 space-y-4 p-5 rounded-4xl bg-white shadow-md transition duration-300 hover:shadow-[0_10px_30px_rgba(116,5,16,0.3)]">
      <div className="relative w-full h-40">
        <Image
          fill
          className="rounded-2xl object-contain"
          src={image_link}
          alt={dish_name}
        ></Image>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">{dish_name}</h2>
        <p className="mb-5">{origin_and_popularity}</p>
        <div className="flex justify-between items-center">
          <h3 className="text-[#921b27] font-bold text-xl">${price}</h3>
          <Link href={`/foodDetails/${id}`}>
            <button className="border btn bg-[#ae1b27] text-white font-bold p-3">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
