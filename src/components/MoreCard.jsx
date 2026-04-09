import Image from "next/image";
import spoonImg from "../../public/spoon.png";
import Link from "next/link";

const MoreCard = async () => {
  const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/foods");
  const data = await res.json();
  const foods = data.data;
  return (
    <div className="flex flex-col justify-center items-center h-140 text-center space-y-4 py-10 px-6 rounded-4xl text-white bg-[#921b27]">
      <Image src={spoonImg} alt="spoon icon" width={20} height={20}></Image>
      <h2 className="font-bold text-2xl">Hungry for more?</h2>
      <p className="mb-5">
        Explore our full seasonal selection across four courses.
      </p>

      <Link
        className="btn bg-[#ffffff2c] text-white font-semibold p-4 rounded-full"
        href={"/foods"}
      >
        {" "}
        View More {foods.length} Items
      </Link>
    </div>
  );
};

export default MoreCard;
