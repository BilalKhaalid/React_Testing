import React from "react";
import MuiMode from "./components/mui-mode/MuiMode";
import Providers from "./components/providers/App-Providers";
// import Counter from "./components/counter/Counter";
// import Application from "./components/application/Application";
// import Skills from "./components/skills/Skills.jsx";

const App = () => {
  // const skills = ["HTML", "CSS", "JAVASCRIPT"];

  return (
    <div>
      {/* <Application /> */}
      {/* <Skills skills={skills} /> */}
      {/* <Counter /> */}
      <Providers>
        <MuiMode />
      </Providers>
    </div>
  );
};

export default App;
