import Contact from "./components/Contact";
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
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
