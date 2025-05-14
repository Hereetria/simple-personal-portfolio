import React from "react";

const languages = [
  { name: "German", level: "Native" },
  { name: "Swiss German", level: "Native" },
  { name: "Turkish", level: "Native" },
  { name: "English", level: "Advanced" },
];

const Languages: React.FC = () => {
  return (
    <section className="resume-section" id="languages">
      <div className="resume-section-content">
        <h2 className="mb-5">Languages</h2>
        <div className="language-list">
          {languages.map((lang, index) => (
            <div className="language-item" key={index}>
              <span className="language-name">{lang.name}</span>
              <span className="language-level">{lang.level}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Languages;
