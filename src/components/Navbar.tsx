import { navLists } from "../constants";
import { appleImg, bagImg, searchImg } from "../utils";

const Navbar = () => {
  return (
    <header className="relative z-10 flex w-full items-center justify-between px-2 py-[15px] sm:px-10">
      <nav className="screen-max-width flex w-full justify-center gap-5">
        <img src={appleImg} alt="Apple" width={12} height={16} />

        <div className="flex items-center justify-center max-sm:hidden">
          {navLists.map((nav) => (
            <div
              key={nav}
              className="cursor-pointer px-4 text-xs font-extralight text-gray-200 transition-all hover:text-white"
            >
              {nav}
            </div>
          ))}
        </div>

        <div className="flex items-baseline justify-between gap-10 max-sm:flex-1 max-sm:justify-end">
          <img
            src={searchImg}
            alt="search"
            width={14}
            height={14}
            className="cursor-pointer"
          />
          <img
            src={bagImg}
            alt="bag"
            width={14}
            height={14}
            className="cursor-pointer"
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
