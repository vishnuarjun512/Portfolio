import React from "react";
import html from "../assets/Icons/html5.png";
import css from "../assets/Icons/css.png";
import js from "../assets/Icons/js.png";
import tailwind from "../assets/Icons/tailwind.png";
import react from "../assets/Icons/react.png";
import php from "../assets/Icons/php.png";
import express from "../assets/Icons/express.png";
import node from "../assets/Icons/node.png";
import sql from "../assets/Icons/sql.png";
import mongodb from "../assets/Icons/mongodb.png";
import C from "../assets/Icons/C.png";
import Cpp from "../assets/Icons/c++.png";
import Python from "../assets/Icons/python.png";
import git from "../assets/Icons/git.png";
import github from "../assets/Icons/github.png";
import SkillSection from "./SkillSection";

const Skills = () => {
  const data = [
    {
      title: "Frontend",
      items: [
        { name: "HTML", source: html, level: 4 },
        { name: "CSS", source: css, level: 4 },
        { name: "JavaScript", source: js, level: 3 },
        { name: "React", source: react, level: 2 },
        { name: "Tailwind", source: tailwind, level: 4 },
      ],
    },
    {
      title: "Backend",
      items: [
        { name: "PHP", source: php, level: 3 },
        { name: "Node.js", source: node, level: 3 },
        { name: "Express.js", source: express, level: 3 },
      ],
    },
    {
      title: "Database",
      items: [
        { name: "SQL", source: sql, level: 3 },
        { name: "MongoDB", source: mongodb, level: 3 },
      ],
    },
    {
      title: "Programming",
      items: [
        { name: "C", source: C, level: 4 },
        { name: "C++", source: Cpp, level: 4 },
        { name: "Python", source: Python, level: 4 },
      ],
    },
    {
      title: "Others",
      items: [
        { name: "Git", source: git, level: 4 },
        { name: "GitHub", source: github, level: 4 },
      ],
    },
  ];

  return (
    <div
      id="skills"
      className="max-w-[1440px] m-auto md:pl-20 p-4 pt-16 flex flex-col justify-center items-center"
    >
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Skills</h1>
      <div className="flex flex-row flex-wrap items-center justify-center gap-8 m-5 px-10">
        {data.map((item, idx) => (
          <SkillSection key={idx} title={item.title} items={item.items} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
