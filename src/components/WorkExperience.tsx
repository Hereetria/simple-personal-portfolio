import React from "react";

const experiences = [
  {
    title: "Sales Representative",
    company: "Deutsche Telekom (T-Mobile)",
    location: "Izmir Bayrakli",
    type: "Current Position",
    details: [
      "Engaged in direct customer interaction, providing mobile and internet solutions tailored to client needs.",
      "Developed strong communication and sales skills in a fast-paced, high-volume retail environment.",
      "Gained experience in handling customer inquiries, troubleshooting, and recommending optimized plans.",
    ],
  },
  {
    title: "Vehicle Technician",
    company: "Family-Owned Car Gallery",
    location: "Switzerland, Zurich",
    type: "Part-Time / Freelance",
    details: [
      "Involved in the mechanical and electronic tuning of vehicles, including chip tuning, hardware upgrades, and vehicle part installation/removal.",
      "Assisted in diagnostic checks, aftermarket modifications, and enhancing vehicle performance.",
      "Developed hands-on expertise with tools, engine systems, and vehicle electronics.",
    ],
  },
];

const WorkExperience: React.FC = () => {
  return (
    <section className="resume-section" id="work-experience">
      <div className="resume-section-content">
        <h2 className="mb-5">Work Experience</h2>

        {experiences.map((exp, index) => (
          <div className="experience-item mb-5" key={index}>
            <div className="experience-header">
              <h3 className="mb-0">{exp.title}</h3>
              <div className="subheading">
                {exp.company} – <span className="location">{exp.location}</span>
              </div>
              <div className="position-type text-muted">{exp.type}</div>
            </div>
            <ul className="experience-details">
              {exp.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
