import Contact from "./components/Contact";
import Education from "./components/Education";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Work from "./components/Work";
import SideNav from "./components/sideNav";
import React from "react";

function App() {
  return (
    <div>
      <SideNav />
      <Main />
      <Work />
      <Education />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
