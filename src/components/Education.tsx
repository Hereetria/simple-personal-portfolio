import React from "react";

const Education: React.FC = () => {
  return (
    <section className="resume-section" id="education">
      <div className="resume-section-content">
        <h2 className="mb-5">Education</h2>

        <div className="d-flex flex-column flex-md-row justify-content-between">
          <div className="flex-grow-1">
            <h3 className="mb-1">İzmir University of Economics</h3>
            <div className="subheading mb-3">Computer Programming</div>
            <p>
              Focused on software fundamentals, modern programming tools, and
              real-world development practices.
            </p>
            <p>
              Collaborated in team-based projects and participated in developer
              communities.
            </p>
            <p>Strengthened technical, analytical, and communication skills.</p>
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
