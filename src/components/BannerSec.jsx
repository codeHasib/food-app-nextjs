"use client";

import Image from "next/image";
import bannerSecImg from "../../public/bannerSec.jpg";
import { toast } from "react-toastify";

const BannerSec = () => {
  function subscribe(e) {
    e.preventDefault();
    toast.success("You have been subscribed successfully!!!");
  }
  return (
    <>
      <div className="flex items-center justify-center py-10 px-4 gap-5 lg:flex-row md:flex-row flex-col-reverse my-10">
        <div className="h-75 w-75 mr-0 md:mr-15 lg:mr-30 relative">
          <Image
            className="w-full h-full rounded-full"
            src={bannerSecImg}
            alt="Restaurant hall image"
          ></Image>
          <div className="absolute -top-8 -right-10 bg-[#ffffffe3] p-3 rounded-4xl">
            <h2 className="italic text-[#883039] mb-2 font-semibold">
              "The table is a <br /> place for <br /> stories."
            </h2>
            <p className="font-semibold">-CHEF DE CUISINE</p>
          </div>
        </div>
        <div className="w-5/12 space-y-4">
          <h2 className="text-center lg:text-start md:text-start text-2xl font-bold ">Join The Chicken World</h2>
          <p>
            Receive exclusive invitations to our private tasting events, chief's
            table sessions, and monthly flavor insights curated by our
            sommeliers.
          </p>
          <div className="bg-white flex justify-start items-start h-15 rounded-2xl">
            <form
              onSubmit={subscribe}
              className="flex justify-start items-start h-full w-full"
            >
              <input
                type="email"
                required
                className="flex-1 h-full px-4"
                placeholder="Enter your email address"
              />
              <input
                type="submit"
                value="Subscribe"
                className="h-full btn bg-[#883039] text-white"
              />
            </form>
          </div>
          <p className="font-thin">RESERVED FOR THE DISCERNING. NO SPAN. EVER.</p>
        </div>
      </div>
    </>
  );
};

export default BannerSec;
