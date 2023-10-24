import Contact from "./components/Contact";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import SideNav from "./components/SideNav";
import React from "react";
import { DarkModeProvider, useDarkMode } from "./components/DarkModeContext";

function App() {
  return (
    <DarkModeProvider>
      <InnerApp />
    </DarkModeProvider>
  );
}

function InnerApp() {
  const { isDarkMode } = useDarkMode();

  return (
    <div className={`${isDarkMode ? "bg-[#14131a]" : ""}`}>
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
