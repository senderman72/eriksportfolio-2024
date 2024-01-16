import React from "react";
import "./Skills.css";
import Skillspic from "../assets/Skillspic.jpg";

export default function Skills() {
  const skills = [
    "Javascript",
    "React",
    "NodeJS",
    "API",
    "CSS",
    "SCSS",
    "Material UI",
    "express",
    "MongoDB",
  ];

  return (
    <div className="skill-section">
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-circle">
            {skill}
          </div>
        ))}
      </div>
      <div>
        <img className="skills-pic " src={Skillspic} />
      </div>
    </div>
  );
}
