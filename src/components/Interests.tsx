import React from "react";

const Interests: React.FC = () => {
  return (
    <section className="resume-section" id="interests">
      <div className="resume-section-content">
        <h2 className="mb-5">Interests</h2>
        <p className="mb-4">
          I’m passionate about software beyond just building functionality. My
          interests revolve around creating meaningful digital experiences and
          understanding how technology intersects with human behavior, design,
          and global collaboration.
        </p>
        <ul className="fa-ul mb-0">
          <li>
            <span className="fa-li">
              <i className="fas fa-code"></i>
            </span>
            Building scalable and intuitive software
          </li>
          <li>
            <span className="fa-li">
              <i className="fas fa-pencil-ruler"></i>
            </span>
            Exploring UI/UX design systems
          </li>
          <li>
            <span className="fa-li">
              <i className="fas fa-cogs"></i>
            </span>
            Automation in business applications
          </li>
          <li>
            <span className="fa-li">
              <i className="fas fa-language"></i>
            </span>
            Multilingual collaboration and tech culture
          </li>
          <li>
            <span className="fa-li">
              <i className="fas fa-laptop-code"></i>
            </span>
            Learning new programming languages & tools
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Interests;
