import React from "react";
import { FaGithub } from "react-icons/fa";
import { useDarkMode } from "./DarkModeContext";
import { MdOutlineWeb } from "react-icons/md";

const ProjectItem = ({ img, title, link, tech, hosted }) => {
  const { isDarkMode } = useDarkMode();

  return (
    <div
      className={`${
        isDarkMode ? "" : "shadow-xl"
      } max-w-[100%] relative flex items-center justify-center h-auto w-full  shadow-gray-400 rounded-xl group hover:bg-gradient-to-b hover:scale-105 from-gray-700 to-[#14131a] ease-in-out duration-700`}
    >
      <img
        className="w-full h-full rounded-xl group-hover:opacity-[0.1] object-cover transition-all duration-700 "
        src={img}
        alt="/"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] hover:scale-105 transition-all duration-300">
        <h2 className="text-1xl md:text-1xl md:mt-10px sm:mt-1px lg:mt-[5px] lg:text-3xl lg:mb-[20px] font-bold text-white tracking-wider text-center">
          {title}
        </h2>
        <div className="">
          <p className="pb-4 pt-22 text-white text-center">
            {tech.map((techItem, index) => (
              <React.Fragment key={index}>
                {techItem}
                {index !== tech.length - 1 && ", "}
              </React.Fragment>
            ))}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-[10px] sm:text-[14px]">
            {hosted.yes && (
              <a href={hosted.link} className="">
                <div className="p-1 sm:p-2 flex justify-center items-center rounded-3xl sm:rounded-lg bg-white text-gray-700 font-bold cursor-pointer hover:scale-110 ease-in duration-200 gap-2">
                  <MdOutlineWeb className="w-[30px] h-[30px]" />
                  <p className="">Hosted here</p>
                </div>
              </a>
            )}
            <a href={link} className="">
              <div className="p-1 sm:p-2 flex justify-center items-center rounded-3xl sm:rounded-lg bg-white text-gray-700 font-bold cursor-pointer hover:scale-110 ease-in duration-200 gap-2">
                <FaGithub className="w-[30px] h-[30px]" />
                <p className="">Source Code</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
