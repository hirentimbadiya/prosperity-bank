import React, { useState } from "react";
import { navLinks } from "../constants";
import { close, logo, menu } from "../assets";
const Navbar = () => {
  // toggle state for menu
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      {/* logo */}
      <img src={logo} alt="logo" className="w-[280px] h-[60px]" />
      {/* nav links */}
      <ul className=" list-none sm:flex hidden justify-end items-center flex-1">
        {/* mapping through navLinks to show each individual item */}
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white 
            ${index === navLinks.length - 1 ? "mr-0" : "mr-11"} hover:text-secondary` }
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      {/* menu for only smaller devices */}
      <div className=" sm:hidden flex flex-1  justify-end items-center z-50">
        <img
          // if toggle is true then show close icon otherwise show menu icon
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => setToggle((prev) => !prev)}
        />
        {/* sidebar show if toggle is true otherwise hide*/}
        <div
          className={`${toggle ? "flex" : "hidden"}
          p-4 bg-black-gradient absolute top-20 right-0 mx-4 my-1 min-w-[140px] rounded-xl sidebar`}
        >
          {/* mapping through navLinks to show each individual item */}
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white 
            ${index === navLinks.length - 1 ? "mb-0" : "mb-3"}  hover:text-secondary`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
