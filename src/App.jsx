import Contact from "./components/Contact";
import DarkMode from "./components/DarkMode";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import SideNav from "./components/SideNav";
import React from "react";

function App() {
  return (
    <div>
      {/* <DarkMode /> */}
      <SideNav />
      <Main />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
