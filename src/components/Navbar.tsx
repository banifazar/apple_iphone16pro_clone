import { navLists } from "../constants";
import { appleImg, bagImg, searchImg } from "../utils";

const Navbar = () => {
  return (
    <header className="w-full py-[15px] sm:px-10 px-2 flex justify-between items-center">
      <nav className="flex w-full screen-max-width justify-center gap-5">
        <img src={appleImg} alt="Apple" width={12} height={16} />

        <div className="flex justify-center items-center max-sm:hidden">
          {navLists.map((nav) => (
            <div
              key={nav}
              className="px-4 text-xs font-extralight text-gray-200 hover:text-white cursor-pointer transition-all"
            >
              {nav}
            </div>
          ))}
        </div>

        <div className="flex justify-between items-baseline gap-10 max-sm:justify-end max-sm:flex-1">
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
