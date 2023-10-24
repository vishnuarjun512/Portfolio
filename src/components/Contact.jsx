import React from "react";
import { useDarkMode } from "./DarkModeContext";
const Contact = () => {
  const { isDarkMode } = useDarkMode();
  return (
    <div id="contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1
        className={`${
          isDarkMode ? "text-white" : "text-[#001b5e]"
        } py-4 text-4xl font-bold text-center `}
      >
        Contact Me
      </h1>
      <form
        action="https://getform.io/f/6c5d4a0a-3945-4e2b-89cf-cc52412ab93a"
        method="post"
        encType="multipart/form-data"
        className={`${isDarkMode ? "text-black" : "light-mode"}`}
      >
        <div className="grid md:grid-cols-2 gap-4 w-full py-2">
          <div className="flex flex-col">
            <label
              className={`${
                isDarkMode ? "text-white" : ""
              } uppercase text-sm py-2"`}
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="border-2 rounded-lg flex p-3 border-gray-300"
              type="text"
              name="name"
            />
          </div>
          <div className="flex flex-col">
            <label
              className={`${
                isDarkMode ? "text-white" : ""
              } uppercase text-sm py-2"`}
              htmlFor="mobile"
            >
              Phone Number
            </label>
            <input
              className="border-2 rounded-lg flex p-3 border-gray-300"
              type="text"
              name="mobile"
            />
          </div>
          <div className="flex flex-col">
            <label
              className={`${
                isDarkMode ? "text-white" : ""
              } uppercase text-sm py-2"`}
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="border-2 rounded-lg flex p-3 border-gray-300"
              type="email"
              name="email"
            />
          </div>
          <div className="flex flex-col">
            <label
              className={`${
                isDarkMode ? "text-white" : ""
              } uppercase text-sm py-2"`}
              htmlFor="subject"
            >
              Subject
            </label>
            <input
              className="border-2 rounded-lg flex p-3 border-gray-300"
              type="text"
              name="subject"
            />
          </div>
          <div className="w-full flex flex-col col-span-1 md:col-span-2 py-2">
            <label
              className={`${
                isDarkMode ? "text-white" : ""
              } uppercase text-sm py-2"`}
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="10"
              className="w-[100%] border-4 rounded-lg flex p-3 border-gray-300"
            ></textarea>
          </div>
        </div>
        <button
          className={`${
            isDarkMode ? "bg-[#3d3d3d]" : "bg-[#001b5e]"
          }  text-gray-200 mt-4 w-full p-4 rounded-lg cursor-pointer hover:scale-110 ease-in duration-200`}
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
