import React from "react";
import Education from "./Education";
import Work from "./Work";

const Resume = () => {
  return (
    <div className="md:flex">
      <Education />
      <Work />
    </div>
  );
};

export default Resume;
