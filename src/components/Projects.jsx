import React from "react";
import ProjectItem from "./ProjectItem";
import DA from "../assets/dataAnalytics.png";
import mtvx from "../assets/mtvx.png";
import planti from "../assets/planti.png";
import portfolio from "../assets/portfolio.png";
import calculator from "../assets/calculator.png";
import imageGallery from "../assets/imageGallery.png";
import { useDarkMode } from "./DarkModeContext";

const Projects = () => {
  const { isDarkMode } = useDarkMode();
  return (
    <div
      id="projects"
      className={`${
        isDarkMode ? "bg-[#14131a]" : "light-mode"
      } max-w-[1440px] m-auto md:pl-[120px] p-4 py-16`}
    >
      <h1
        className={`${
          isDarkMode ? "text-white" : "text-[#001b5e]"
        } text-4xl font-bold text-center`}
      >
        Projects
      </h1>
      <p
        className={`${
          isDarkMode ? "text-white" : ""
        } text-center text-xl pt-4 pb-6`}
      >
        Checkout my Projects!
      </p>
      <div className="grid md:grid-cols-2 gap-12">
        <ProjectItem
          img={imageGallery}
          title={"Image Gallery"}
          link={
            "https://github.com/vishnuarjun512/unsplash-image-gallery-ReactJS"
          }
        />
        <ProjectItem
          img={mtvx}
          title={"Movie Streaming Website"}
          link={"https://github.com/vishnuarjun512/Movie-Website/tree/dev"}
        />
        <ProjectItem
          img={planti}
          title={"Plant Ecommerce"}
          link={"https://github.com/vishnuarjun512/Plant_Ecommerce"}
        />
        <ProjectItem
          img={DA}
          title={"Data Analytics"}
          link={"https://github.com/vishnuarjun512/Data-Finance-React"}
        />
        <ProjectItem
          img={portfolio}
          title={"Portfolio"}
          link={"https://github.com/vishnuarjun512/portfolio"}
        />
        <ProjectItem
          img={calculator}
          title={"Simple Calculator"}
          link={"https://github.com/vishnuarjun512/Calculator"}
        />
      </div>
    </div>
  );
};

export default Projects;
