import React from "react";
import ProjectItem from "./ProjectItem";
import DA from "../assets/dataAnalytics.png";
import mtvx from "../assets/mtvx.png";
import planti from "../assets/planti.png";
import portfolio from "../assets/portfolio.png";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1440px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b53]">
        Projects
      </h1>
      <p className="text-center text-xl pt-4 pb-6">Checkout my Projects!</p>
      <div className="grid md:grid-cols-2 gap-12">
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
      </div>
    </div>
  );
};

export default Projects;
