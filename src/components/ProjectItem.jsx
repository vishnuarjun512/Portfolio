import React from "react";
import { FaGithub } from "react-icons/fa";

const ProjectItem = ({ img, title, link }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r hover:scale-[1.0150] from-gray-200 to-[#001b5e]">
      <img className="rounded-xl group-hover:opacity-10" src={img} alt="/" />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h2 className="text-1xl md:text-1xl  md:mt-10px sm:mt-1px lg:mt-[5px] lg:text-3xl lg:mb-[20px] font-bold text-white tracking-wider text-center">
          {title}
        </h2>
        <div className="md:mt-[-8px] mt-[2px]">
          <p className="pb-4 pt-22 text-white text-center">React JS</p>
          <a href={link}>
            <p className="text-[12px] md:text-[13px] sm:text-[18px] lg:text-1xl flex items-center justify-center sm:gap-[10px] gap-[2px] text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer hover:scale-110 ease-in duration-200">
              <FaGithub className="w-[30px] h-[30px]" />
              Click to check source code
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
