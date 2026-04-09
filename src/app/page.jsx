import BigCard from "@/components/BigCard";
import Card from "@/components/Card";
import Hero from "@/components/Hero";
import MoreCard from "@/components/MoreCard";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <div>
        <div className="py-8 space-y-2 container mx-auto flex justify-center md:justify-between text-center md:text-start lg:text-start lg:justify-between items-center flex-wrap">
          <div>
            <h2 className="text-xl lg:text-2xl font-semibold">
              Chief Signature Selections
            </h2>
            <p className="font-light">
              Our most celebrated dishes, crafted daily from locally- sourced
              artisans.
            </p>
          </div>
          <div>
            <Link
              className="flex justify-center items-center gap-2 font-semibold text-[#740510] text-[18px]"
              href={"/foods"}
            >
              {" "}
              Full Menu{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 28 28"
                strokeWidth={1.8}
                stroke="currentColor"
                className="size-8 mt-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
        <div className="md:col-span-2 lg:col-span-2">
          <BigCard></BigCard>
        </div>
        <div>
          <Card num={1}></Card>
        </div>
        <div>
          <Card num={2}></Card>
        </div>
        <div>
          <Card num={3}></Card>
        </div>
        <div>
          <MoreCard></MoreCard>
        </div>
      </div>
    </>
  );
}
