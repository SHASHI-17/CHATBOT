import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../Assets/LTIMindtree.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-gradient-to-r from-[#ffffff] to-[#0077b6] py-2 mt-10 relative z-10">
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white relative">
        <h1 className="h-[40px] cursor-pointer w-[200px] justify-center items-center">
          <img
            src={logo}
            alt="MindTree Logo"
            className="transform hover:scale-110 transition-transform duration-500 "
          />
        </h1>
        <ul className="hidden md:flex">
          <li className="p-4 cursor-pointer text-black font-sans font-semibold text-lg">
            <a href="#home">Home</a>
          </li>
          <li className="p-4 cursor-pointer font-sans font-semibold text-lg text-black">
            <a href="#dashboard">Dashboard</a>
          </li>
          <li className="p-4 cursor-pointer font-sans font-semibold text-lg  text-black">
            <a href="#contact">Contact</a>
          </li>
          <li className="p-4 cursor-pointer font-sans font-semibold text-lg text-black">
            <Link to="/chatbot">Chatbot</Link>
          </li>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <ul
          className={
            nav
              ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#c4e4f3] ease-in-out duration-500 z-20"
              : "ease-in-out duration-500 fixed left-[-100%] z-20"
          }
        >
          <h1 className="h-[40px] cursor-pointer w-[200px] justify-center items-center">
            <img src={logo} alt="MindTree Logo" />
          </h1>

          <li className="p-4 border-b border-gray-600 cursor-pointer text-lg text-black font-sans font-semibold">
            <a href="#home">Home</a>
          </li>
          <li className="p-4 border-b border-gray-600 cursor-pointer text-lg text-black font-sans font-semibold">
            <a href="#dashboard">Dashboard</a>
          </li>
          <li className="p-4 border-b border-gray-600 cursor-pointer text-lg text-black font-sans font-semibold">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
