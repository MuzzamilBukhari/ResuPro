import Link from "next/link";
import React from "react";
import Button from "../Button";
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
const Navbar = () => {
  return (
    <header className="text-white body-font bg-black hidden md:flex fixed w-full top-0 left-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 items-center">
        <div className="flex items-center text-primary">
          {/* Logo Icon and Text */}
          <Link
            href={"/"}
            className="lg:ml-5 font-black text-3xl flex items-center gap-2"
          >
            <Image
              src="/images/rezumee-pro.png"
              alt="Logo Icon"
              width={150}
              height={150}
              className="object-contain"
            />
          </Link>
        </div>

        <nav className="md:ml-auto flex items-center gap-2 lg:gap-8 mt-5 md:mt-0 text-base justify-center">
          {navItems.map((item) => (
            <NavLink slug={item.slug} key={item.id} name={item.name} />
          ))}
        </nav>

        <a
          className="ml-4"
          href="https://www.linkedin.com/in/huzaifa-naeem-8949692b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            type="button"
            className="py-[2px] ml-8 bg-black border-2 border-none shadow-primary ring-2 ring-primary shadow-md"
          >
            Join us
          </Button>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
