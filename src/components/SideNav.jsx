import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineHome,
  AiOutlineMail,
  AiOutlineProject,
} from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { BsMailbox, BsPerson } from "react-icons/bs";

const SideNav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    // console.log("State changed ");
  };
  return (
    <div>
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
            href="#education"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-200 shadow-gray-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <BsPerson size={20} />
            <span className="pl-4"> Resume </span>
          </a>
          <a
            onClick={handleNav}
            href="#work"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-200 shadow-gray-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <GrProjects size={20} />
            <span className="pl-4"> Work </span>
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
            href="#contact"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-200 shadow-gray-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineMail size={20} />
            <span className="pl-4"> Contact </span>
          </a>
        </div>
      ) : (
        ""
      )}

      <div className="md:block hidden fixed top-[25%] left-[1%] z-10">
        <div className="flex flex-col gap-[12px] ">
          <div className="flex flex-row gap-[10px] justify-start items-center text-2xl font-bold">
            <a
              href="#main"
              id="hover-button"
              className="flex flex-row flex-initial rounded-full shadow-lg bg-gray-200 shadow-gray-500 m-2 p-4 cursor-pointer hover:scale-[1.2] ease-in duration-100"
            >
              <AiOutlineHome size={40} />
            </a>
            <div id="hover-text">Home</div>
          </div>

          <div className="flex flex-row gap-[10px] justify-start items-center text-2xl font-bold">
            <a
              href="#work"
              id="hover-button"
              className="rounded-full shadow-lg bg-gray-200 shadow-gray-500 m-2 p-4 cursor-pointer hover:scale-[1.2] ease-in duration-100"
            >
              <GrProjects size={40} />
            </a>
            <div id="hover-text">Work</div>
          </div>

          <div className=" left-0 flex flex-row gap-[10px] justify-start items-center text-2xl font-bold">
            <a
              id="hover-button"
              href="#education"
              className="rounded-full shadow-lg bg-gray-200 shadow-gray-500 m-2 p-4 cursor-pointer hover:scale-[1.2] ease-in duration-100"
            >
              <BsPerson size={40} />
            </a>
            <div id="hover-text">Education</div>
          </div>

          <div className="left-0 flex flex-row gap-[10px] justify-start items-center text-2xl font-bold">
            <a
              href="#projects"
              id="hover-button"
              className="rounded-full shadow-lg bg-gray-200 shadow-gray-500 m-2 p-4 cursor-pointer hover:scale-[1.2] ease-in duration-100"
            >
              <AiOutlineProject size={40} />
            </a>
            <div id="hover-text">Projects</div>
          </div>
          <div className="left-0 flex flex-row gap-[10px] justify-start items-center text-2xl font-bold">
            <a
              href="#contact"
              id="hover-button"
              className="rounded-full shadow-lg bg-gray-200 shadow-gray-500 m-2 p-4 cursor-pointer hover:scale-[1.2] ease-in duration-100"
            >
              <AiOutlineMail size={40} />
            </a>
            <div id="hover-text">Contact Me</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
