import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineHome,
  AiOutlineMail,
  AiOutlineProject,
} from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { BsMailbox, BsPerson } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";
import { useDarkMode } from "./DarkModeContext";

const SideNav = () => {
  const [nav, setNav] = useState(false);
  const { isDarkMode } = useDarkMode();
  const handleNav = () => {
    setNav(!nav);
    // console.log("State changed ");
  };
  return (
    <div className={`${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <AiOutlineMenu
        onClick={handleNav}
        className="fixed top-4 right-4 z-[99] md:hidden block "
      />
      {nav ? (
        <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
          <a
            onClick={handleNav}
            href="#main"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-200 shadow-gray-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineHome size={20} />
            <span className="pl-4"> Home </span>
          </a>
          <a
            onClick={handleNav}
            href="#skills"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-200 shadow-gray-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <GiSkills size={20} />
            <span className="pl-4"> Skills </span>
          </a>
          <a
            onClick={handleNav}
            href="#projects"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-200 shadow-gray-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineProject size={20} />
            <span className="pl-4"> Projects </span>
          </a>
          <a
            onClick={handleNav}
            href="#resume"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-200 shadow-gray-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <BsPerson size={20} />
            <span className="pl-4"> Resume </span>
          </a>
          <a
            onClick={handleNav}
            href="#contact"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-200 shadow-gray-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineMail size={20} />
            <span className="pl-4"> Contact Me</span>
          </a>
        </div>
      ) : (
        ""
      )}

      <div
        className={`${
          isDarkMode ? "text-black" : ""
        } md:block hidden fixed top-[50%] translate-y-[-50%] ml-5 z-20`}
      >
        <div className="flex flex-col gap-[12px] ">
          <div className="flex flex-row gap-[10px] justify-start items-center text-2xl font-bold">
            <a
              href="#main"
              id="hover-button"
              className={`${
                isDarkMode
                  ? "bg-[#212121] text-white"
                  : "shadow-gray-500 bg-gray-200"
              } rounded-full shadow-lg  m-2 p-4 cursor-pointer hover:scale-[1.2] ease-in duration-100`}
            >
              <AiOutlineHome size={30} />
            </a>
            <div id="hover-text">Home</div>
          </div>

          <div className="left-0 flex flex-row gap-[10px] justify-start items-center text-2xl font-bold">
            <a
              href="#skills"
              id="hover-button"
              className={`${
                isDarkMode
                  ? "bg-[#212121] text-white"
                  : "shadow-gray-500 bg-gray-200"
              } rounded-full shadow-lg  m-2 p-4 cursor-pointer hover:scale-[1.2] ease-in duration-100`}
            >
              <GiSkills size={30} />
            </a>
            <div id="hover-text">Skills</div>
          </div>

          <div className="left-0 flex flex-row gap-[10px] justify-start items-center text-2xl font-bold">
            <a
              href="#projects"
              id="hover-button"
              className={`${
                isDarkMode
                  ? "bg-[#212121] text-white"
                  : "shadow-gray-500 bg-gray-200"
              } rounded-full shadow-lg  m-2 p-4 cursor-pointer hover:scale-[1.2] ease-in duration-100`}
            >
              <AiOutlineProject size={30} />
            </a>
            <div id="hover-text">Projects</div>
          </div>

          <div className=" left-0 flex flex-row gap-[10px] justify-start items-center text-2xl font-bold">
            <a
              id="hover-button"
              href="#resume"
              className={`${
                isDarkMode
                  ? "bg-[#212121] text-white"
                  : "shadow-gray-500 bg-gray-200"
              } rounded-full shadow-lg  m-2 p-4 cursor-pointer hover:scale-[1.2] ease-in duration-100`}
            >
              <BsPerson size={30} />
            </a>
            <div id="hover-text">Resume</div>
          </div>

          <div className="left-0 flex flex-row gap-[10px] justify-start items-center text-2xl font-bold">
            <a
              href="#contact"
              id="hover-button"
              className={`${
                isDarkMode
                  ? "bg-[#212121] text-white"
                  : "shadow-gray-500 bg-gray-200"
              } rounded-full shadow-lg  m-2 p-4 cursor-pointer hover:scale-[1.2] ease-in duration-100`}
            >
              <AiOutlineMail size={30} />
            </a>
            <div id="hover-text">Contact Me</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
