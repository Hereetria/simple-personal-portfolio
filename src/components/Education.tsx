import React from "react";

const Education: React.FC = () => {
  return (
    <section className="resume-section" id="education">
      <div className="resume-section-content">
        <h2 className="mb-5">Education</h2>

        <div className="d-flex flex-column flex-md-row justify-content-between">
          <div className="flex-grow-1">
            <h3 className="mb-1">Izmir University of Economics</h3>
            <div className="subheading mb-3">Computer Programming</div>
            <p>
              Combined theoretical and practical training in software
              development, with a strong focus on real-world application.
            </p>
            <p>
              Built full-stack projects using Java, C#, JavaScript, and worked
              with MSSQL/MySQL databases.
            </p>
            <p>
              Collaborated in version-controlled team environments and enhanced
              algorithmic thinking through hands-on challenges.
            </p>
          </div>
          <div className="flex-shrink-0">
            <span className="text-primary">2023 – 2025</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
