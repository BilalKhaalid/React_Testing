import React from "react";
import Application from "./components/application/Application";
import Skills from "./components/skills/Skills.jsx";

const App = () => {
  const skills = ["HTML", "CSS", "JAVASCRIPT"];

  return (
    <div>
      {/* <Application /> */}
      {/* <Skills skills={skills} /> */}
      <counter />
    </div>
  );
};

export default App;
