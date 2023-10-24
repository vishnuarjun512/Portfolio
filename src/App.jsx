import Contact from "./components/Contact";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import SideNav from "./components/SideNav";
import React from "react";
import { DarkModeProvider } from "./components/DarkModeContext";

function App() {
  return (
    <DarkModeProvider>
    <div>
      <SideNav />
      <Main />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
    </div>
      </DarkModeProvider>
  );
}

export default App;
