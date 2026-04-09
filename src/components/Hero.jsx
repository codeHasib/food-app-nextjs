import Image from "next/image";
import heroImg from "../../public/hero.jpg";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 py-15 min-h-[80vh] gap-15 container mx-auto shadow-sm">
      <div className="space-y-5 flex items-center justify-center lg:items-start flex-col">
        <div className="badge bg-red-300 font-bold">EST 2022</div>
        <h1 className="text-2xl lg:text-4xl font-semibold">
          The Soul of <br />
          <span className="text-[#740510] italic">Modern Chicken</span>
        </h1>
        <p className="mt-2">
          Experience a curated journey where seasonal ingredients meet
          event-garde techniques. A tasting menu designed for the curious
          palate.
        </p>
        <div className="mt-2">
          <button className="btn bg-[#740510] text-white mr-2 transition-all duration-300 hover:bg-[#921b27]">
            Explore the Menu
          </button>
          <button className="btn bg-white text-[#740510]">Our Story</button>
        </div>
      </div>
      <div className="rotate-3 flex justify-center items-center">
        <Image
          className="rounded-4xl lg:h-7/12 shadow-gray-500 shadow-lg transition-transform duration-300 hover:scale-105"
          src={heroImg}
          alt="Chicken Picture"
        ></Image>
      </div>
    </div>
  );
};

export default Hero;
