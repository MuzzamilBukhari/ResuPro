"use client";

import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import Image from "next/image";
const navItems = [
  {
    id: 1,
    name: "Home",
    slug: "/",
  },
  {
    id: 2,
    name: "Templates",
    slug: "/templates",
  },
  {
    id: 3,
    name: "About Us",
    slug: "/about",
  },
  {
    id: 4,
    name: "Conatct",
    slug: "/contact",
  },
];
const MobNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="text-primary body-font bg-black flex flex-col md:hidden w-full fixed top-0 left-0 z-10">
      <div className="container mx-auto flex justify-between items-center p-5">
        <div>
          <Link href="/" className="flex items-center font-black text-2xl">
            <Image
              src="/images/rezumee-pro.png"
              alt="Logo Icon"
              width={150}
              height={150}
              className="object-contain"
            />
          </Link>
        </div>

        <button
          className="text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      <nav
        className={`${
          isOpen ? "flex" : "hidden"
        } flex-col items-center gap-2 text-base justify-center absolute top-16 right-0 bg-black rounded-md p-4 w-48`}
      >
        {navItems.map((item) => (
          <NavLink slug={item.slug} key={item.id} name={item.name} />
        ))}
      </nav>
    </header>
  );
};

export default MobNavbar;
