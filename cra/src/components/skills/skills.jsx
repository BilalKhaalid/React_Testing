import React from "react";

const skills = ({ skills }) => {
  return (
    <div>
      <ul>
        {skills.map((skill) => (
          <li key={skill} >{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default skills;
