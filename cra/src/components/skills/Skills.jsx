import React from "react";

const Skills = ({ skills }) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  return (
    <div>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
      {!isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Login</button>
      ) : (
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
          Start Learning
        </button>
      )}
    </div>
  );
};

export default Skills;
