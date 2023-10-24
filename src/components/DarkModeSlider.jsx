import React, { useState } from "react";
import { useDarkMode } from "./DarkModeContext";

const DarkModeSliderButton = ({ isDarkMode, toggleDarkMode }) => {
  const [sliderPosition, setSliderPosition] = useState(
    isDarkMode ? "dark" : "light",
  );

  const handleSliderClick = () => {
    toggleDarkMode();
    setSliderPosition(sliderPosition === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <h1 className="text-[19px] font-bold">
        {isDarkMode ? "Dark Mode" : "Light Mode"}
      </h1>
      <div
        onClick={handleSliderClick}
        className={`slider-button ${sliderPosition}`}
      >
        <div className="slider"></div>
      </div>
    </div>
  );
};

export default DarkModeSliderButton;
