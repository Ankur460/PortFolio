import About from "./components/About";
import React, { useState } from "react";
import Banner from "./components/Banner";
import ProjectsContainer from "./components/ProjectsContainer";
import Skills from "./components/Skills";
import Contact from "./components/Contact"
import Nav from "./components/Nav";

export const ThemeContext = React.createContext({});

function App() {

  const [theme,setTheme] = useState("white");

  return (
     <ThemeContext.Provider value={{theme,setTheme}}>
      <Banner />
      <Nav />
      <About />
      <Skills />
      <ProjectsContainer />
      <Contact />
    </ThemeContext.Provider>
);
}

export default App;
