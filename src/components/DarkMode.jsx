import React from "react";
import "./DarkMode.css";
import Sun from "../assets/Sun.png";
import Moon from "../assets/Moon.png";

const DarkMode = () => {
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
  };

  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
  };

  const toggleTheme = (e) => {
    if (e.target.checked) setDarkMode();
    else setLightMode();
  };

  return (
    <div className="dark_mode">
      <input
        type="checkbox"
        className="dark_mode_input"
        id="darkmode-toggle"
        onChange={toggleTheme}
      />
      <label for="darkmode-toggle" className="dark_mode_label">
        <Sun />
        <Moon />
      </label>
    </div>
  );
};

export default DarkMode;
