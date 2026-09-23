import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/logo.png";

const NavBar = () => {
  const links = (
    <>
      <li>
        <Link className="text-[18px] font-semibold" href="/">
          Workouts
        </Link>
      </li>
      <li>
        <Link className="text-[18px] font-semibold" href="/myplan">
          My Plan
        </Link>
      </li>
    </>
  );

  return (
    <nav className="bg-base-100 shadow-">
      <div className="navbar container mx-auto p-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
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
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div>
            <Link className="flex" href="/">
              <Image src={logo} alt="fitlogo" />
              <h2 className="font-bold pl-2 text-xl">FITLOG</h2>
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-3">
          <a className="btn ">Plan(0)</a>
          <a className="btn">saved(0)</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
