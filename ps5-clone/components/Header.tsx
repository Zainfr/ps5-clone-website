import React from "react";
import search from "../public/assets/images/search.svg";
import logo from "../public/assets/images/logo.png";
import Image from "next/image";

const Header = () => {
  return (
    <div className="fixed left-0 right-0 top-0 z-50">
      <div className="bg-black h-fit flex justify-end p-0 m-0">
        <p className="text-white pr-2 font-serif font-semibold text-[1.5rem] tracking-wider">
          SONY
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between shadow-lg bg-white">
        <Image src={logo} width={200} height={60} alt="logo" className="p-4" />
        <div className="flex items-center space-x-2 sm:space-x-4">
          <button className="hover:ease-in transition duration-300 font-medium hover:bg-gray-300 py-1 px-2 sm:py-2 sm:px-4 rounded-full h-fit text-sm sm:text-base">
            PlayStation 5
          </button>
          <button className="hover:ease-in transition duration-300 font-medium hover:bg-gray-300 py-1 px-2 sm:py-2 sm:px-4 rounded-full h-fit text-sm sm:text-base">
            Games
          </button>
          <button className="hover:ease-in transition duration-300 font-medium hover:bg-gray-300 py-1 px-2 sm:py-2 sm:px-4 rounded-full h-fit text-sm sm:text-base">
            Accessories
          </button>
          <button className="hover:ease-in transition duration-300 font-medium hover:bg-gray-300 py-1 px-2 sm:py-2 sm:px-4 rounded-full h-fit text-sm sm:text-base">
            More Features
          </button>
          <button className="hover:ease-in transition duration-300 font-medium hover:bg-gray-300 py-1 px-2 sm:py-2 sm:px-4 rounded-full h-fit text-sm sm:text-base">
            Entertainment
          </button>
          <button className="hover:ease-in transition duration-300 bg-blue-500 text-white font-medium hover:bg-blue-700 py-1 px-2 sm:py-2 sm:px-4 rounded-full h-fit text-sm sm:text-base">
            Sign In
          </button>
          <a href="#" className="p-2 sm:p-4">
            <Image src={search} height={20} width={20} alt="search" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
