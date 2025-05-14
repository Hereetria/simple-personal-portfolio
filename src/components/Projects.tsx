import React from "react";

const Projects: React.FC = () => {
  return (
    <section className="resume-section" id="projects">
      <div className="resume-section-content">
        <h2 className="mb-5">Projects</h2>

        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="flex-grow-1">
            <h3 className="mb-0">Vehicle Gallery Website</h3>
            <p>
              Developed a responsive web application for listing and managing
              vehicles using HTML, CSS, and JavaScript. Includes admin panel
              features and interactive UI components.
            </p>
            <a
              className="github-button"
              href="https://github.com/your-username/vehicle-gallery"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </div>
        </div>

        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="flex-grow-1">
            <h3 className="mb-0">Gallery Automation System</h3>
            <p>
              A Java + MSSQL-based desktop application for automating vehicle
              stock tracking, sales entries, and customer data management in car
              galleries.
            </p>
            <a
              className="github-button"
              href="https://github.com/your-username/gallery-automation"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </div>
        </div>

        <div className="d-flex flex-column flex-md-row justify-content-between">
          <div className="flex-grow-1">
            <h3 className="mb-0">Smart Task Tracker (Sample Project)</h3>
            <p>
              A productivity tool built with C# and .NET Core, allowing users to
              organize, tag, and analyze tasks. Integrated with a simple
              authentication system and performance reports.
            </p>
            <a
              className="github-button"
              href="https://github.com/your-username/smart-task-tracker"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
