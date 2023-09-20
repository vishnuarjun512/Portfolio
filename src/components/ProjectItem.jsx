import React from "react";
import { FaGithub } from "react-icons/fa";

const ProjectItem = ({ img, title, link }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r hover:scale-[1.0150] from-gray-200 to-[#001b5e]">
      <img className="rounded-xl group-hover:opacity-10" src={img} alt="/" />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h2 className="text-3xl mt-10 font-bold text-white tracking-wider text-center">
          {title}
        </h2>
        <p className="pb-4 pt-22 text-white text-center">React JS</p>
        <div className=" mt-[30px]">
          <a href={link}>
            <p className="flex items-center justify-center gap-4 text-center p-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer hover:scale-110 ease-in duration-200">
              <FaGithub size={25} />
              Click to check source code
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
