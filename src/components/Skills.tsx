import React from "react";

const skills = [
  { name: "JavaScript", level: 100 },
  { name: "Java", level: 100 },
  { name: "C#", level: 100 },
  { name: "HTML", level: 100 },
  { name: "CSS", level: 100 },
  { name: ".NET Core", level: 100 },
  { name: "MSSQL", level: 100 },
  { name: "MySQL", level: 100 },
  { name: "REST APIs", level: 100 },
  { name: "Bootstrap", level: 100 },
  { name: "Responsive Design", level: 100 },
  { name: "Git & GitHub", level: 100 },
];

const Skills: React.FC = () => {
  return (
    <section className="resume-section" id="skills">
      <div className="resume-section-content">
        <h2 className="mb-5">Skills & Tools</h2>

        <div className="skill-grid">
          {skills.map((skill, index) => (
            <div className="skill-item" key={index}>
              <div className="skill-header">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-bar-filled"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
