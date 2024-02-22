import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center text-sm px-1 sm:px-6 sm:text-2xl ">
      <div className="flex justify-center items-center gap-1 sm:gap-3 ">
        <FaLocationDot className="text-red-500 text-sm sm:text-xl cursor-pointer" />
        <h1 className="hover:text-red-500 ">Grill</h1>
      </div>
      <div className="capitalize flex gap-2 sm:gap-6 [&>h1]:cursor-pointer sm:[&>h1]:p-5 [&>h1]:p-1">
        <h1 className="bg-red-500">Home</h1>
        <h1 className="hover:text-orange-300 flex justify-center items-center gap-2">
          About us <IoMdArrowDropdown />
        </h1>
        <h1 className="hover:text-orange-300">Services</h1>
        <h1 className="hover:text-orange-300">Gallery</h1>
        <h1 className="hover:text-orange-300">Pricing</h1>
        <h1 className="hover:text-orange-300">Contact</h1>
      </div>
    </div>
  );
};

export default NavBar;
