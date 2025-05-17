import React from "react";

const skills = [
  { name: "HTML", level: 85 },
  { name: "CSS", level: 80 },
  { name: "Java", level: 50 },
  { name: "JavaScript", level: 45 },
  { name: "SQL", level: 70 },
  { name: "Responsive Design", level: 90 },
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
