import Image from "next/image";
import Link from "next/link";

const BigCard = async () => {
  const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/foods");
  const data = await res.json();
  const foods = data.data;
  console.log(foods[0]);
  const currentFood = foods[0];
  const { id, dish_name, rating, price, origin_and_popularity, image_link } =
    currentFood;
  return (
    <div>
      <div className="card md:card-side lg:card-side bg-base-100 shadow-md transition duration-300 hover:shadow-[0_10px_30px_rgba(116,5,16,0.3)] relative h-140">
        <figure className="w-full h-full flex justify-center items-center p-10">
          <div className="relative w-full h-full">
            <Image
              fill
              className="object-contain"
              src={image_link}
              alt={dish_name}
              loading="eager"
            ></Image>
          </div>
        </figure>
        <div className="card-body">
          <div className="badge text-[#921b27] bg-[#74051036] font-bold py-4 px-5 rounded-full">
            HOUSE SPECIAL
          </div>
          <div className="flex flex-col justify-between h-full">
            <div>
              <h2 className="card-title text-2xl font-bold mt-5 mb-5">
                {dish_name}
              </h2>
              <h3 className="font-semibold">{origin_and_popularity}</h3>
            </div>
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
      </div>
    </div>
  );
};

export default BigCard;
