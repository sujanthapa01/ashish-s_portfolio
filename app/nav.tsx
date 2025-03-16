import Link from "next/link";
import Logo from "../public/a-high-resolution-logo.png";
import Search from "./components/Search";
export default function Nav() {
  return (
    <main className="h-12 mt-4 fixed w-full flex justify-evenly gap-2 items-center  z-10 "> 
      <ul
        className="px-4 lg:block hidden tooltip tooltip-bottom tooltip-success"
        data-tip="Hi, I am Ashish"
      >
        <Link href="/">
          <img src={Logo.src} alt="logo" className="h-10 rounded-full w-12" />
        </Link>
      </ul>
      <ul className="flex h-full justify-between sm:text-sm text-base-content font-semibold text-[10px] gap-0 min-[275px]:gap-4  w-auto rounded-4xl   items-center sm:px-4 ">
        <li>
          <Link
            className="px-4 py-3 rounded-sm hover:bg-neutral duration-700 dropdown dropdown-hover"
            href="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="px-4 py-3 rounded-sm hover:bg-neutral duration-700 dropdown dropdown-hover"
            href="/users/projects"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            className="px-4 py-3 rounded-sm hover:bg-neutral duration-700 dropdown dropdown-hover"
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
