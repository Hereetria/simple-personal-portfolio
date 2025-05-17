import React from "react";

const Interests: React.FC = () => {
  return (
    <section className="resume-section" id="interests">
      <div className="resume-section-content">
        <h2 className="mb-5">Interests</h2>
        <p className="mb-4">
          Outside of coding, I enjoy exploring design principles, discovering
          new cities, and diving into the world of automobiles. These interests
          keep me curious, creative, and constantly inspired.
        </p>
        <ul className="fa-ul mb-0">
          <li>
            <span className="fa-li">
              <i className="fas fa-car"></i>
            </span>
            Passionate about cars and automotive technology
          </li>
          <li>
            <span className="fa-li">
              <i className="fas fa-city"></i>
            </span>
            Enjoy discovering new cities and urban cultures
          </li>
          <li>
            <span className="fa-li">
              <i className="fas fa-paint-brush"></i>
            </span>
            Exploring UI/UX design and digital aesthetics
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Interests;
