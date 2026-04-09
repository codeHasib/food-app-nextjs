import Image from "next/image";

const Card = async ({ num }) => {
  const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/foods");
  const data = await res.json();
  const foods = data.data;
  const currentFood = foods[num];
  const { dish_name, rating, price, origin_and_popularity, image_link } =
    currentFood;
  return (
    <div className="h-140 space-y-4 p-5 rounded-4xl bg-white shadow-md transition duration-300 hover:shadow-[0_10px_30px_rgba(116,5,16,0.3)]">
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
          <button className="border rounded-full p-3">
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
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
