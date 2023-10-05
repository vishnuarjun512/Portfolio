import React from "react";
import img from "../assets/background.jpeg";
import { TypeAnimation } from "react-type-animation";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaGithubSquare,
  FaLinkedin,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import "./SideNav.css";

const Main = () => {
  function openPdfWindow(pdfUrl) {
    const newWindow = window.open("", "_blank");
    newWindow.document.write(`
      <html>
        <head>
          <title>PDF Viewer</title>
        </head>
        <body style="margin: 0;">
          <iframe src="${pdfUrl}" style="width: 100%; height: 100vh; border: none;"></iframe>
        </body>
      </html>
    `);
  }

  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover"
        src={img}
        alt="Vishnu's Image"
      ></img>
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className=" max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-center items-center">
          <h1 className="text-[40px] md:text-[50px] font-bold md:font-bold text-gray-800">
            I'm Vishnu V V
          </h1>
          <h2 className="flex md:text-3xl text-2xl pt-4 text-gray-800">
            I'm a
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Web Developer",
                2000, // wait 1s before replacing "Mice" with "Hamsters"
                "PHP Developer",
                2000,
                "Tech Enthusiast",
                2000,
                "Python Developer",
                2000,
              ]}
              wrapper="div"
              speed={50}
              cursor={true}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-center gap-[10px] pt-6 max-w-[200px] w-full hover:scale-110 hover:shadow-gray-300 duration-100 ease-in">
            <a href="https://github.com/vishnuarjun512">
              <FaGithubSquare className="md:w-[50px] md:h-[50px] w-[30px] h-[30px] cursor-pointer hover:scale-[1.3] hover:shadow-gray-300 duration-100 ease-in" />
            </a>
            <a href="https://www.linkedin.com/in/vishnuarjun512/">
              <FaLinkedin className="md:w-[50px] md:h-[50px] w-[30px] h-[30px] cursor-pointer hover:scale-[1.3] hover:shadow-gray-300 duration-100 ease-in" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100010680883981">
              <FaFacebookSquare className="md:w-[50px] md:h-[50px] w-[30px] h-[30px] cursor-pointer hover:scale-[1.3] hover:shadow-gray-300 duration-100 ease-in" />
            </a>
            <a href="https://www.instagram.com/vishnu_arjun_/">
              <FaInstagramSquare className="md:w-[50px] md:h-[50px] w-[30px] h-[30px] cursor-pointer hover:scale-[1.3] hover:shadow-gray-300 duration-100 ease-in" />
            </a>
            <a href="https://twitter.com/VishnuArjun12">
              <FaSquareXTwitter className="md:w-[50px] md:h-[50px] w-[30px] h-[30px] cursor-pointer hover:scale-[1.3] hover:shadow-gray-300 duration-100 ease-in" />
            </a>
          </div>
        </div>
        <div className="absolute right-2 bottom-2 z-1 rounded-full shadow-lg sm:mx-2 mr-[-4px] sm:my-1 my-1 p-1 bg-gray-200 shadow-gray-500 cursor-pointer hover:scale-[1.2] ease-in duration-100 ">
          {/* <a href="RESUME.pdf" download="Vishnu's Resume.pdf"> */}
          <button
            onClick={() => openPdfWindow("RESUME.pdf")}
            className="sm:text-[13px] text-[9px]  font-bold  sm:h-[30px] h-[15px] sm:w-[100px] w-[60px] flex items-center justify-center"
          >
            My Resume
          </button>
          {/* </a> */}
        </div>
      </div>
    </div>
  );
};

export default Main;