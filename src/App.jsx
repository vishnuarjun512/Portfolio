import Contact from "./components/Contact";
import DarkMode from "./components/DarkMode";
import Education from "./components/Education";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Work from "./components/Work";
import SideNav from "./components/sideNav";
import React from "react";

function App() {
  return (
    <div>
      {/* <DarkMode /> */}
      <SideNav />
      <Main />
      <Skills />
      <Projects />
      <Work />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
