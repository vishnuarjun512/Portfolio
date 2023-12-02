import React from "react";
import ProjectItem from "./ProjectItem";
import DA from "../assets/dataAnalytics.png";
import mtvx from "../assets/mtvx.png";
import planti from "../assets/planti.png";
import portfolio from "../assets/portfolio.png";
import calculator from "../assets/calculator.png";
import imageGallery from "../assets/imageGallery.png";
import rozilla from "../assets/rozilla.png";
import { useDarkMode } from "./DarkModeContext";

const Projects = () => {
  const { isDarkMode } = useDarkMode();

  const projects = [
    {
      name: "Rozilla RealEstate",
      link: "https://github.com/vishnuarjun512/mern-RealEstate",
      tech: ["MERN Stack", "TailwindCSS", "Redux", "Firebase"],
      image: rozilla,
    },
    {
      name: "Image Gallery",
      link: "https://github.com/vishnuarjun512/unsplash-image-gallery-ReactJS",
      tech: ["ReactJS", "TailwindCSS", "Unsplash API"],
      image: imageGallery,
    },
    {
      name: "Movie Streaming Website",
      link: "https://github.com/vishnuarjun512/Movie-Website/tree/dev",
      tech: ["ReactJS", "TailwindCSS"],
      image: mtvx,
    },
    {
      name: "Plant Ecommerce",
      link: "https://github.com/vishnuarjun512/Plant_Ecommerce",
      tech: ["ReactJS", "SASS"],
      image: planti,
    },
    {
      name: "Data Analytics",
      link: "https://github.com/vishnuarjun512/Data-Finance-React",
      tech: ["ReactJS"],
      image: DA,
    },
    {
      name: "Portfolio",
      link: "https://github.com/vishnuarjun512/portfolio",
      tech: ["ReactJS", "TailwindCSS"],
      image: portfolio,
    },
    {
      name: "Simple Calculator",
      link: "https://github.com/vishnuarjun512/Calculator",
      tech: ["Javascript"],
      image: calculator,
    },
  ];
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
        {projects.map((project, index) => (
          <ProjectItem
            key={index}
            img={project.image}
            title={project.name}
            link={project.link}
            tech={project.tech}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
