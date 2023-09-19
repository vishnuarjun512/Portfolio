import React from "react";
import ProjectItem from "./ProjectItem";
import DA from "../assets/dataAnalytics.png";
import mtvx from "../assets/mtvx.png";
import planti from "../assets/planti.png";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px]] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b53]">
        Projects
      </h1>
      <p className="text-center py-8">Lorem ipsum </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={mtvx} title={"Movie Streaming Website"} />
        <ProjectItem img={planti} title={"Plant Ecommerce"} />
        <ProjectItem img={DA} title={"Data Analytics"} />
      </div>
    </div>
  );
};

export default Projects;
