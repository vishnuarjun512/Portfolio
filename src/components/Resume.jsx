import React from "react";
import Education from "./Education";
import Work from "./Work";

const Resume = () => {
  return (
    <div
      id="resume"
      className="flex flex-col md:flex-row justify-center gap-20 ml-20"
    >
      <Education />
      <Work />
    </div>
  );
};

export default Resume;
