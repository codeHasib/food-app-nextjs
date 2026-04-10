"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Tab = () => {
  const pathName = usePathname();

  const links = (
    <>
      <li
        className={
          pathName === "/foods/all"
            ? "text-black font-semibold py-4 px-8 rounded-full bg-red-100"
            : "py-4 px-8 rounded-full bg-gray-200"
        }
      >
        <Link href={"/foods/all"}> All </Link>
      </li>
      <li
        className={
          pathName === "/foods/burger"
            ? "text-black font-semibold py-4 px-8 rounded-full bg-red-100"
            : "py-4 px-8 rounded-full bg-gray-200"
        }
      >
        <Link href={"/foods/burger"}> Burger </Link>
      </li>
      <li
        className={
          pathName === "/foods/dish"
            ? "text-black font-semibold py-4 px-8 rounded-full bg-red-100"
            : "py-4 px-8 rounded-full bg-gray-200"
        }
      >
        <Link href={"/foods/dish"}> Dish </Link>
      </li>
      <li
        className={
          pathName === "/foods/biriyani"
            ? "text-black font-semibold py-4 px-8 rounded-full bg-red-100"
            : "py-4 px-8 rounded-full bg-gray-200"
        }
      >
        <Link href={"/foods/biriyani"}> Biriyani </Link>
      </li>
      <li
        className={
          pathName === "/foods/beverage"
            ? "text-black font-semibold py-4 px-8 rounded-full bg-red-100"
            : "py-4 px-8 rounded-full bg-gray-200"
        }
      >
        <Link href={"/foods/beverage"}> Beverage </Link>
      </li>
    </>
  );
  return (
    <>
      <ul className="flex justify-center items-center gap-5">{links}</ul>
    </>
  );
};

export default Tab;
