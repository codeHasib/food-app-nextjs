"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathName = usePathname();

  const links = (
    <>
      <li className={pathName === "/" ? "text-[#8e1c19]" : ""}>
        <Link href={"/"}> Home </Link>
      </li>
      <li className={pathName === "/foods" ? "text-[#8e1c19]" : ""}>
        <Link href={"/foods"}> Foods </Link>
      </li>
      <li className={pathName === "/blogs" ? "text-[#8e1c19]" : ""}>
        <Link href={"/blogs"}> Blogs </Link>
      </li>
      <li className={pathName === "/reviews" ? "text-[#8e1c19]" : ""}>
        <Link href={"/reviews"}> Reviews </Link>
      </li>
    </>
  );

  return (
    <div className="bg-white shadow-sm mb-5">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold"
            >
              {links}
            </ul>
          </div>
          <Link
            href={"/"}
            className="cursor-pointer text-[#8e1c19] font-light text-[22px] italic"
          >
            The Chicken World
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold">{links}</ul>
        </div>
        <div className="navbar-end">
          <Link
            className="text-[#8e1c19] flex items-center justify-center gap-4 py-3 px-5 rounded-3xl bg-base-300"
            href={"/cart"}
          >
            {" "}
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
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>{" "}
            <span className="font-extrabold">Cart</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
