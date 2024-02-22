import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";

const NavBar = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  return (
    <div className="sm:flex justify-between items-center px-1 sm:px-6 text-2xl ">
      <div className="flex justify-center items-center gap-1 sm:gap-3 ">
        <FaLocationDot className="text-red-500 text-xl cursor-pointer" />
        <h1 className="hover:text-red-500 ">Grill</h1>
      </div>
      <div className="capitalize sm:flex sm:justify-center sm:items-center gap-2 [&>h1]:cursor-pointer sm:[&>h1]:p-5 [&>h1]:p-1 sm:gap-6 [&>h1]:hidden sm:[&>h1]:flex">
        <IoMdMenu
          className="sm:hidden cursor-pointer"
          onClick={() => setIsMenuClicked(!isMenuClicked)}
        />
        {isMenuClicked ? (
          <div className="absolute w-screen h-screen z-20 backdrop-brightness-50">
            <div className="w-52 flex flex-col gap-5 mt-5">
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
        ) : (
          ""
        )}
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
