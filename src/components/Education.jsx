import React from "react";
import EducationItem from "./EducationItem";

const Education = () => {
  const data = [
    {
      year: "2023 - 2025",
      title: "Master of Computer Applications",
      college: "Jain University",
      details: "Cloud Computing Specialization",
    },
    {
      year: "2018 - 2021",
      title: "Bachelor of Computer Applications",
      college: "KLE's RLS Insitute of BCA",
      details: "Specialized with Cloud Computing",
    },
    {
      year: "2016 - 2018",
      title: "PUC",
      college: "Bangur Nagar Junior College",
      details: "Science - PCMC",
    },
  ];

  return (
    <div
      id="education"
      className="flex justify-center items-center flex-col max-w-[1540px] md:mx-[150px] md:pl-20 p-4 py-20"
    >
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Education
      </h1>
      <div className="flex justify-center flex-col pt-[16px]">
        {data.map((item, idx) => (
          <EducationItem
            key={idx}
            year={item.year}
            title={item.title}
            college={item.college}
            details={item.details}
          />
        ))}
      </div>
    </div>
  );
};

export default Education;
