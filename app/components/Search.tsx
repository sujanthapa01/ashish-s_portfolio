import { BiSearch } from "react-icons/bi";
import Dark from "./Dark";

export default function Search() {
  return (
    <div className="flex gap-3">
      <ul
        className="lg:tooltip lg:tooltip-bottom lg:tooltip-info"
        data-tip="Search"
      >
        <li className="lg:hidden mx-4 h-10 w-10 rounded-full text-base-content flex justify-center items-center text-2xl border">
          <div className="dropdown dropdown-bottom dropdown-end">
            <div tabIndex={0} role="button">
              <BiSearch />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100  rounded-4xl z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </g>
                </svg>
                <input type="search" className="grow" placeholder="Search" />
              </li>
            </ul>
          </div>
        </li>
        <label className="input lg:flex hidden text-gray-500">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" className="grow" placeholder="Search" />
          <kbd className="kbd kbd-sm text-center">⌘</kbd>
          <kbd className="kbd kbd-sm text-center">K</kbd>
        </label>
      </ul>
      <Dark />
    </div>
  );
}
