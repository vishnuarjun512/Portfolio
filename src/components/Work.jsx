import React from "react";
import WorkItem from "./WorkItem";

const Work = () => {
  const data = [
    {
      year: 2023,
      title: "Web Developer",
      duration: "2 Months",
      details: "Worked on 3 Projects with 1 Industry Level Project",
    },
    {
      year: 2023,
      title: "Web Developer",
      duration: "3 Months",
      details: "Worked on 3 Projects with 1 Industry Level Project",
    },
  ];

  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
