import React from "react";
import WorkItem from "./WorkItem";

const Work = () => {
  const data = [
    {
      year: 2023,
      title: "Freelancing Web Developer",
      company: "Self-Independent",
      duration: "Present",
      details: "Willing to build Websites for experience",
    },
    {
      year: 2023,
      title: "Web Developer",
      company: "Solar Secure Solutions",
      duration: "3 Months",
      details: "Trained and Working on Industry Level Projects",
    },
  ];

  return (
    <div
      id="work"
      className="flex justify-center items-center flex-col max-w-[1540px] m-auto md:pl-20 p-4 py-20"
    >
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
      <div className="flex justify-center flex-col pt-[16px]">
        {data.map((item, idx) => (
          <WorkItem
            key={idx}
            year={item.year}
            title={item.title}
            company={item.company}
            duration={item.duration}
            details={item.details}
          />
        ))}
      </div>
    </div>
  );
};

export default Work;
