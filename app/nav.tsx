"use client"
import Link from "next/link";
import Logo from "../public/a-high-resolution-logo.png";
import Search from "./components/Search";
import { motion,useScroll } from "motion/react";
export default function Nav() {
  const { scrollYProgress } = useScroll()
  return (
    <main className="h-12 mt-4  fixed w-full flex justify-evenly gap-2 items-center  z-10 "> 
     <motion.div
                id="scroll-indicator"
                style={{
                    scaleX: scrollYProgress,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 1,
                    originX: 0,
                    backgroundColor: "#27A8EF",
                }}
            />
      <ul
        className="  lg:block hidden tooltip animate-bounce cabin-7 text-orange-400 -rotate-10 text-2xl font-black tooltip-bottom tooltip-success"
        data-tip="Hi, I am Ashish"
      >
        <Link className=" avatar avatar-online w-11 h-11 hover:rotate-360 duration-500" href="/">
          <img src={Logo.src} alt="logo" className="h-10 rounded-full ring-primary ring-offset-base-100  ring ring-offset-2  w-11" />
        </Link>
      </ul>
      <ul className="flex h-full justify-between sm:text-sm text-base-content font-semibold text-[14px] gap-0 min-[275px]:gap-4  w-auto rounded-4xl   items-center px-4 ">
        <li>
          <Link
            className=" px-1 min-[363px]:px-4 py-3 rounded-sm hover:text-white hover:bg-neutral-800 duration-700 dropdown dropdown-hover"
            href="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="px-1 min-[363px]:px-4 py-3 rounded-sm hover:text-white hover:bg-neutral-800 duration-700 dropdown dropdown-hover"
            href="/users/projects"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            className="px-1 min-[363px]:px-4 py-3 rounded-sm hover:text-white hover:bg-neutral-800 duration-700 dropdown dropdown-hover"
            href="/users/contact"
          >
            Contact
          </Link>
        </li>
      </ul>
      <Search />
    </main>
  );
}
